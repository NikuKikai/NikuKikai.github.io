'use client';

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import { useWindowSize } from "@react-hook/window-size";
// import MangaViewer from "react-manga-viewer";
import dynamic from 'next/dynamic';
const MangaViewer = dynamic(() => import('react-manga-viewer'), {
    ssr: false, // Disable SSR for this component
});

const pages = [
    '/assets/Q/1.png',
    '/assets/Q/2.png',
    '/assets/Q/3.png',
    '/assets/Q/4.png',
    '/assets/Q/5.png',
    '/assets/Q/6.png',
    '/assets/Q/7.png',
    '/assets/Q/8.png',
    '/assets/Q/9.png',
    '/assets/Q/10.png',
];
const pages_jp = [
    '/assets/Q/jp/1.png',
    '/assets/Q/jp/2.png',
    '/assets/Q/jp/3.png',
    '/assets/Q/jp/4.png',
    '/assets/Q/jp/5.png',
    '/assets/Q/jp/6.png',
    '/assets/Q/jp/7.png',
    '/assets/Q/jp/8.png',
    '/assets/Q/jp/9.png',
    '/assets/Q/jp/10.png',
];


export default function AppQ() {

    return <Suspense><AppQPage /></Suspense>
}

function AppQPage() {
    const [width, height] = useWindowSize();
    const searchParams = useSearchParams()
    const lang = searchParams.get('lang');

    const _pages = lang === 'jpn' ? pages_jp : pages;

    return <MangaViewer
        width={width} height={height} urls={_pages}
        margin={'5%'}
        noLoading={true}
        start_1side={false}
    />
}
