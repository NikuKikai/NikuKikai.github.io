import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWindowSize } from "@react-hook/window-size";
import MangaViewer from "react-manga-viewer";

const pages = [
    'data/Q/1.png',
    'data/Q/2.png',
    'data/Q/3.png',
    'data/Q/4.png',
    'data/Q/5.png',
    'data/Q/6.png',
    'data/Q/7.png',
    'data/Q/8.png',
    'data/Q/9.png',
    'data/Q/10.png',
];
const pages_jp = [
    'data/Q/jp/1.png',
    'data/Q/jp/2.png',
    'data/Q/jp/3.png',
    'data/Q/jp/4.png',
    'data/Q/jp/5.png',
    'data/Q/jp/6.png',
    'data/Q/jp/7.png',
    'data/Q/jp/8.png',
    'data/Q/jp/9.png',
    'data/Q/jp/10.png',
];


export default function AppQ() {
    const [width, height] = useWindowSize();
    const [params, setParams] = useSearchParams()
    const lang = params.get('lang');

    const _pages = lang === 'jpn'? pages_jp : pages;

    return <MangaViewer width={width} height={height} urls={_pages} start_1side={false}></MangaViewer>
}
