import { Head } from 'vike-react/Head';
import { usePageContext } from 'vike-react/usePageContext';
import { loadEssay, type Essay } from './_loader';
import styles from './essay.module.css';

export default function Page() {
    const pageContext = usePageContext();
    const slug = String(pageContext.routeParams?.slug ?? '').trim();
    const essay = (pageContext.data as Essay | undefined) ?? loadEssay(slug);

    if (!essay) {
        return (
            <main style={pageStyle}>
                <h1>Essay not found</h1>
            </main>
        );
    }

    return (
        <>
            <Head>
                <title>{essay.frontmatter.title}</title>
            </Head>
            <main style={pageStyle}>
                <div style={layoutStyle}>
                    <nav style={tocStyle} aria-label="Essay contents">
                        {essay.toc.map((item) => (
                            <a key={item.id} href={`#${item.id}`} style={item.level === 3 ? tocSubLinkStyle : tocLinkStyle}>
                                {item.text}
                            </a>
                        ))}
                    </nav>
                    <article style={articleStyle}>
                        {essay.frontmatter.date && <time style={dateStyle}>{essay.frontmatter.date}</time>}
                        <div className={styles.content} style={contentStyle} dangerouslySetInnerHTML={{ __html: essay.html }} />
                    </article>
                </div>
            </main>
        </>
    );
}

const pageStyle: React.CSSProperties = {
    height: '100vh',
    boxSizing: 'border-box',
    padding: '64px 24px',
    overflowY: 'auto',
    background: '#f7f4ec',
    color: '#111',
};

const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '180px minmax(0, 760px)',
    gap: '40px',
    width: 'fit-content',
    maxWidth: '100%',
    margin: '0 auto',
    alignItems: 'start',
};

const tocStyle: React.CSSProperties = {
    position: 'sticky',
    top: '64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingTop: '12px',
    fontSize: '0.86rem',
    lineHeight: 1.35,
};

const tocLinkStyle: React.CSSProperties = {
    color: '#111',
    textDecoration: 'none',
};

const tocSubLinkStyle: React.CSSProperties = {
    ...tocLinkStyle,
    paddingLeft: '16px',
    color: '#555',
};

const articleStyle: React.CSSProperties = {
    position: 'relative',
    width: '760px',
    maxWidth: '100%',
    margin: 0,
    padding: '48px',
    border: '2px solid #111',
    background: '#fff',
    boxShadow: '12px 12px 0 #111',
};

const dateStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '20px',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    color: '#555',
};

const contentStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    lineHeight: 1.8,
};
