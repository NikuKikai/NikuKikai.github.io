import { Suspense } from 'react'
import { usePageContext } from 'vike-react/usePageContext';
import { useWindowSize } from "@react-hook/window-size";
import MangaViewer from 'react-manga-viewer';

const pages = [
    '/assets/UglyYuri/1.png',
    '/assets/UglyYuri/2.png',
    '/assets/UglyYuri/3.png',
    '/assets/UglyYuri/4.png',
    '/assets/UglyYuri/5.png',
    '/assets/UglyYuri/6.png',
    '/assets/UglyYuri/7.png',
    '/assets/UglyYuri/8.png',
];
const pages_jp = [
    '/assets/UglyYuri/1.png',
    '/assets/UglyYuri/jp/2.png',
    '/assets/UglyYuri/jp/3.png',
    '/assets/UglyYuri/jp/4.png',
    '/assets/UglyYuri/jp/5.png',
    '/assets/UglyYuri/jp/6.png',
    '/assets/UglyYuri/jp/7.png',
    '/assets/UglyYuri/jp/8.png',
];


export default function AppUglyYuri() {

    return <Suspense><AppUglyYuriPage /></Suspense>
}

function AppUglyYuriPage() {
    const pageContext = usePageContext();
    const [width, height] = useWindowSize();
    const lang = pageContext.urlParsed.search['lang'];

    const _pages = lang === 'jpn' ? pages_jp : pages;

    return <MangaViewer
        width={width} height={height} urls={_pages}
        margin={'5%'}
        start_1side={true}
    />
}
