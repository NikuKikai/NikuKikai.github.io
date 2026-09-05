import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';

const markdown = new Marked().use(markedFootnote());

export type EssayFrontmatter = {
    title: string;
    date?: string;
    description?: string;
};

export type Essay = {
    slug: string;
    frontmatter: EssayFrontmatter;
    html: string;
    toc: EssayTocItem[];
};

export type EssayTocItem = {
    id: string;
    text: string;
    level: number;
};

const modules = import.meta.glob('/src/content/essays/*/index.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const assets = import.meta.glob('/src/content/essays/**/*', {
    query: '?url',
    import: 'default',
    eager: true,
});

const essays = Object.entries(modules).map(([path, raw]) => {
    const slug = path.split('/').at(-2) ?? '';
    const { frontmatter, content } = parseFrontmatter(String(raw));
    const parsedHtml = markdown.parse(resolveFigureBlocks(resolveRelativeAssetPaths(content, slug)), { async: false });
    const { html, toc } = resolveHeadingAnchors(parsedHtml);

    return {
        slug,
        frontmatter: {
            title: frontmatter.title ?? slug,
            date: frontmatter.date,
            description: frontmatter.description,
        },
        html,
        toc,
    };
});

export function getEssaySlugs() {
    return essays.map((essay) => essay.slug);
}

export function loadEssay(slug: string): Essay | undefined {
    return essays.find((essay) => essay.slug === slug);
}

function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

    if (!match) {
        return {
            frontmatter: {} as Partial<EssayFrontmatter>,
            content: raw,
        };
    }

    const frontmatter = match[1]
        .split('\n')
        .reduce<Partial<EssayFrontmatter>>((data, line) => {
            const separator = line.indexOf(':');
            if (separator === -1) return data;

            const key = line.slice(0, separator).trim();
            const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, '');

            if (key === 'title' || key === 'date' || key === 'description') {
                data[key] = value;
            }

            return data;
        }, {});

    return {
        frontmatter,
        content: raw.slice(match[0].length).trimStart(),
    };
}

function resolveRelativeAssetPaths(markdown: string, slug: string) {
    const withMarkdownImages = markdown
        .replace(/!\[\[\.?\/?([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_, assetPath: string, width: string | undefined) => {
            const alt = assetPath.split('/').pop() ?? '';
            const src = resolveAssetPath(slug, assetPath);
            return width
                ? `<img src="${src}" alt="${alt}" style="width: ${normalizeCssLength(width)};" />`
                : `<img src="${src}" alt="${alt}" />`;
        })
        .replace(/!\[([^\]]*)\]\(\.\/([^)]+)\)\{width=([^}]+)\}/g, (_, alt: string, assetPath: string, width: string) => {
            const src = resolveAssetPath(slug, assetPath);
            return `<img src="${src}" alt="${alt}" style="width: ${normalizeCssLength(width)};" />`;
        })
        .replace(/<img([^>]*?)src=["']\.\/([^"']+)["']([^>]*)>/g, (_match, before: string, assetPath: string, after: string) => {
            const src = resolveAssetPath(slug, assetPath);
            return `<img${before}src="${src}"${after}>`;
        });

    return withMarkdownImages.replace(/(!?\[[^\]]*\]\()\.\/([^)]+)\)/g, (match, prefix: string, assetPath: string) => {
        const resolved = resolveAssetPath(slug, assetPath);
        return resolved === `./${assetPath}` ? match : `${prefix}${resolved})`;
    });
}

function resolveAssetPath(slug: string, assetPath: string) {
    const normalized = assetPath.replace(/^\.?\//, '');
    const resolved = assets[`/src/content/essays/${slug}/${normalized}`];
    return typeof resolved === 'string' ? resolved : `./${normalized}`;
}

function normalizeCssLength(value: string) {
    const trimmed = value.trim();
    return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
}

function resolveFigureBlocks(markdown: string) {
    return markdown.replace(/((?:<img[^\n]*>\r?\n)+)\r?\n?\^\s*([^\r\n]+)/g, (_, images: string, caption: string) => {
        return `<figure class="essay-figure"><div class="essay-image-row">${images.trimEnd()}</div><figcaption>${caption}</figcaption></figure>`;
    });
}

function resolveHeadingAnchors(html: string) {
    const toc: EssayTocItem[] = [];
    const usedIds = new Map<string, number>();

    const anchoredHtml = html.replace(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/g, (match, level: string, attrs: string, content: string) => {
        if (/\sid=/.test(attrs)) return match;

        const text = stripHtml(content).trim();
        if (!text) return match;

        const baseId = slugifyHeading(text);
        const count = usedIds.get(baseId) ?? 0;
        usedIds.set(baseId, count + 1);

        const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
        toc.push({ id, text, level: Number(level) });

        return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    });

    return { html: anchoredHtml, toc };
}

function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, '');
}

function slugifyHeading(text: string) {
    const slug = text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-+|-+$/g, '');

    return slug || 'section';
}
