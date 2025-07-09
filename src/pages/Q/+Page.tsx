import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { useWindowSize } from "@react-hook/window-size";
import MangaViewer from 'react-manga-viewer';
import { MdGTranslate } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { MdHome } from "react-icons/md";


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

    return <React.Suspense><AppQPage /></React.Suspense>
}

function AppQPage() {
    const pageContext = usePageContext();
    const [width, height] = useWindowSize();
    const [lang, setLang] = React.useState('');
    const [langOpen, setLangOpen] = React.useState(false);
    const [infoOpen, setInfoOpen] = React.useState(false);
    const [pageIdx, setPageIdx] = React.useState(0);

    const searchLang = pageContext.urlParsed.search['lang'];

    React.useEffect(() => { setLang(searchLang || '') }, [searchLang]);

    const _pages = lang === 'jpn' ? pages_jp : pages;

    const onClickLang = () => {
        setLangOpen(!langOpen)
    }
    const onClickLangChn = () => {
        if (lang !== 'jpn') return;
        window.history.replaceState({}, '', pageContext.urlPathname);
        setLang('');
        setLangOpen(false);
    }
    const onClickLangJpn = () => {
        if (lang === 'jpn') return;
        window.history.replaceState({}, '', pageContext.urlPathname + '?lang=jpn');
        setLang('jpn');
        setLangOpen(false);
    }
    const onClickHome = () => {
        window.location.href = '/';
    }
    const onClickInfo = () => {
        setInfoOpen(!infoOpen);
    }
    const onPageChange = (_left: number, right: number) => {
        setPageIdx(right);
    }

    return <>
        <MangaViewer
            width={width} height={height} urls={_pages}
            margin={'5%'}
            start_1side={false}
            onPageChange={onPageChange}
        />
        <div style={{ position: 'fixed', top: '0', width: '100vw', display: 'flex', padding: '1em', boxSizing: 'border-box' }}>
            <MdHome size='2em' color='gray' style={{ cursor: 'pointer' }} onClick={onClickHome} />
            <div style={{ flexGrow: 1 }} />
            <div>
                <MdGTranslate size='2em' color={langOpen ? 'white' : 'gray'} style={{ cursor: 'pointer' }} onClick={onClickLang} />
                <div style={{
                    position: 'absolute', width: '2em', textAlign: 'center', overflow: 'hidden',
                    userSelect: 'none', transitionDuration: '0.3s',
                    height: langOpen ? '5em' : 0,
                    zIndex: 999,
                    backgroundColor: 'black',
                }}>
                    <div
                        style={{
                            display: 'inline-block', fontSize: '1.6em',
                            cursor: lang === 'jpn' ? 'pointer' : 'default',
                            color: lang === 'jpn' ? 'gray' : 'white'
                        }}
                        onClick={onClickLangChn}
                    >中</div>
                    <div style={{ width: 0 }} />
                    <div
                        style={{
                            display: 'inline-block', fontSize: '1.6em',
                            cursor: lang === 'jpn' ? 'default' : 'pointer',
                            color: lang === 'jpn' ? 'white' : 'gray',
                        }}
                        onClick={onClickLangJpn}
                    >日</div>
                </div>
            </div>
            <div>
                <FaInfoCircle size='2em' color={infoOpen ? 'white' : 'gray'} style={{ cursor: 'pointer', marginLeft: '1em' }} onClick={onClickInfo} />
                <div
                    style={{
                        position: 'absolute', overflow: 'hidden',
                        userSelect: 'none', transitionDuration: '0.3s',
                        paddingTop: '1em',
                        fontSize: '1.5em', boxSizing: 'border-box',
                        pointerEvents: 'none',
                        right: 0,
                        width: infoOpen ? '24em' : 0,
                    }}
                >
                    {lang !== 'jpn' && <InfoContentCHN pageIdx={pageIdx} />}
                    {lang === 'jpn' && <InfoContentJPN pageIdx={pageIdx} />}
                </div>
            </div>
        </div >
    </>
}


function InfoContentCHN({ pageIdx }: { pageIdx: number }) {
    return <>
        <Line text='唱片旋转，生活重复，生命循环' />
        <Line text='分格是矩形的，页面却是圆形' hl={pageIdx === 0} />
        <Line text='她逐渐意识到生活的圆形边界' hl={pageIdx === 2} />
        <Line text='做点“特别”之事吧' hl={pageIdx === 4} />
        <Line text='逃离平庸吧' hl={pageIdx === 4} />
        <Line text='然而那“特别”终将被群体吸纳，然后循环' hl={pageIdx === 6} />
        <Line text='这探索欲，乃至这对循环的厌恶' hl={pageIdx === 8} />
        <Line text='本就是循环的驱动力' hl={pageIdx === 8} />
    </>
}

function InfoContentJPN({ pageIdx }: { pageIdx: number }) {
    return <>
        <Line text='レコードが回転、生活が重複、生命が循環' />
        <Line text='レイアウトは矩形だが、ページは円形' hl={pageIdx === 0} />
        <Line text='彼女は生活の丸い境界に気づいた' hl={pageIdx === 2} />
        <Line text='特別なことをしよう' hl={pageIdx === 4} />
        <Line text='平凡から逃げよう' hl={pageIdx === 4} />
        <Line text='しかしその特別はやがて群衆に吸収され、循環' hl={pageIdx === 6} />
        <Line text='この探索欲＝循環への嫌悪は' hl={pageIdx === 8} />
        <Line text='元々循環の駆動力である' hl={pageIdx === 8} />
    </>
}


function Line({ text, hl }: { text: string, hl?: boolean }) {
    return <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }} />
        <p style={{
            margin: '0.5em',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            textWrap: 'nowrap',
            color: hl ? 'white' : 'gray',
            transitionDuration: '2s',
            borderRadius: '0.2em',
        }}>&nbsp;{text}&nbsp;</p>
    </div>
}