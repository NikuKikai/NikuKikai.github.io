import { getEssaySlugs, loadEssay } from './_loader';

export function onBeforePrerenderStart() {
    return getEssaySlugs().map((slug) => ({
        url: `/essays/${slug}`,
        pageContext: {
            data: loadEssay(slug),
        },
    }));
}
