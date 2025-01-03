import * as React from 'react';
import { useState, useEffect } from 'react';
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


export default function AppQ() {
    const [width, height] = useWindowSize();
    return <MangaViewer width={width} height={height} urls={pages} start_1side={false}></MangaViewer>
}
