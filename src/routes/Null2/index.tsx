import * as React from 'react';
import { useState, useEffect } from 'react';
import { useWindowSize } from "@react-hook/window-size";
import MangaViewer from "react-manga-viewer";


const pages = [
    'data/null2/「」2_000.png',
    'data/null2/「」2_001.jpg',
    'data/null2/「」2_002.jpg',
    'data/null2/「」2_003.jpg',
    'data/null2/「」2_004.jpg',
    'data/null2/「」2_005.jpg',
    'data/null2/「」2_006.jpg',
    'data/null2/「」2_007.jpg',
    'data/null2/「」2_008.jpg',
    'data/null2/「」2_009.jpg',
    'data/null2/「」2_010.jpg',
    'data/null2/「」2_010_1.png',
    'data/null2/「」2_010_2.png',
    'data/null2/「」2_011.png',
    'data/null2/「」2_012.jpg',
    'data/null2/「」2_013.jpg',
];


export default function AppNull2() {
    const [width, height] = useWindowSize();
    return <MangaViewer width={width} height={height} urls={pages} start_1side={false}></MangaViewer>
}