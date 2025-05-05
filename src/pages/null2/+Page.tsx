import { useWindowSize } from "@react-hook/window-size";
import MangaViewer from "react-manga-viewer";


const pages = [
    '/assets/null2/「」2_000.png',
    '/assets/null2/「」2_001.jpg',
    '/assets/null2/「」2_002.jpg',
    '/assets/null2/「」2_003.jpg',
    '/assets/null2/「」2_004.jpg',
    '/assets/null2/「」2_005.jpg',
    '/assets/null2/「」2_006.jpg',
    '/assets/null2/「」2_007.jpg',
    '/assets/null2/「」2_008.jpg',
    '/assets/null2/「」2_009.jpg',
    '/assets/null2/「」2_010.jpg',
    '/assets/null2/「」2_010_1.png',
    '/assets/null2/「」2_010_2.png',
    '/assets/null2/「」2_011.png',
    '/assets/null2/「」2_012.jpg',
    '/assets/null2/「」2_013.jpg',
];


export default function AppNull2() {
    const [width, height] = useWindowSize();
    return <MangaViewer
        width={width} height={height} urls={pages} start_1side={false}
    ></MangaViewer>
}