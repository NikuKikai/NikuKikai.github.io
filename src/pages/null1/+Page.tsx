import React from 'react';
import { useWindowSize } from "@react-hook/window-size";

import styles from './null1.module.css';


const pages = [
    '/assets/null1/1-0.png',
    '/assets/null1/1-1.png',
    '/assets/null1/1-2.png',
    '/assets/null1/1-3.png',
    '/assets/null1/1-4.png',
    '/assets/null1/1-5.png',
    '/assets/null1/1-6.png',
    '/assets/null1/1-7.png',
    '/assets/null1/1-8.png',
    '/assets/null1/1-9.png',
    '/assets/null1/1-10.png',
    '/assets/null1/1-11.png',
    '/assets/null1/1-12.png',
    '/assets/null1/1-13.png',
];


export default function AppNull1() {
    // export function AppNull1() {
    const [width, height] = useWindowSize();
    const [isMounted, setIsMounted] = React.useState(false);
    const [currPage, setCurrPage] = React.useState(0);
    const [imgW, setImgW] = React.useState(0);
    const [imgH, setImgH] = React.useState(0);
    const [isImg14Visible, setImg14Visible] = React.useState(false);
    const [isForward, setForward] = React.useState(true);
    const [isLoaded, setLoaded] = React.useState(true);

    const loadedList = React.useRef<string[]>([]);
    const imgMap = React.useRef<Map<string, HTMLImageElement>>(new Map());


    const navigate = (direction: 'left' | 'right') => {
        if (direction === 'right') {
            if (isImg14Visible) {
                setForward(false);
                setImg14Visible(false);
            }
            else if (currPage > 0) {
                setForward(false);
                setCurrPage(currPage - 2);
            }
        }
        else {
            if (currPage < pages.length - 2) {
                setForward(true);
                setCurrPage(currPage + 2);
            }
            else if (!isImg14Visible) {
                setForward(true);
                setImg14Visible(true);
            }
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        // if (!isLoaded) return;
        if (e.clientX > width * 2 / 3)
            navigate('right');
        else if (e.clientX < width / 3)
            navigate('left');
    }

    const updateImgSize = React.useCallback((img: HTMLImageElement) => {
        const kw = img.parentElement!.parentElement!.clientWidth / img.naturalWidth;
        const kh = img.parentElement!.parentElement!.clientHeight / img.naturalHeight;
        const k = Math.min(kw, kh);
        const w = img.naturalWidth * k;
        const h = img.naturalHeight * k;
        if (Math.abs(w - imgW) > 1 || Math.abs(h - imgH) > 1) {
            setImgW(w);
            setImgH(h);
        }
    }, [imgH, imgW]);


    React.useEffect(() => {
        // flushSync(() => {
        setIsMounted(true); // 组件挂载后标记为客户端
        // });
    }, []);

    React.useLayoutEffect(() => {
        const onresize = () => {
            imgMap.current.forEach(img => {
                updateImgSize(img);
            });
        }
        window.addEventListener('resize', onresize);

        return () => {
            window.removeEventListener('resize', onresize);
        }
    }, [updateImgSize])


    if (!isMounted) {
        // return null for server rendering, to avoid Hydration issue
        return null;
    }

    const toOrFrom14 = isImg14Visible || (currPage === 12 && !isForward);


    return (
        <div className={styles.container}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            onMouseDown={handleMouseDown}
        >
            {/* page 14 */}
            <img className={styles.img14} alt='14' src='/assets/null1/1-14.png' style={{
                visibility: isImg14Visible ? 'visible' : 'hidden',
                transitionDelay: !isForward && !isImg14Visible && currPage === 12 ? '2s' : '0s',
                width: `min(${imgW * 2}px, 80%)`,
                left: `calc(50% - min(${imgW * 2}px, 80%) /2)`,
            }} />

            {/* 捲り式 Viewer */}
            {pages.map((page, i) => {
                const zIdx = 10000 - 200 * Math.abs(i * 2 - currPage * 2 - 1);  // this must be integer, so scale it up for transition.

                // let z = -2*Math.abs(i*2-currPage*2-1);  // this means, e.g. page 1 and 2 has different z
                const z = -2 * Math.abs((i <= currPage ? 0 : 2) + currPage - Math.ceil(i / 2) * 2);  // this means, e.g. page 1 and 2 has the same z

                let x = (i <= currPage ? 0 : 2) + currPage - Math.ceil(i / 2) * 2;  // this means, e.g. page 1 and 2 has the same x
                if (x >= 2) x -= 2;
                if (x <= -2) x += 2;
                x *= 3;

                const rotY = i % 2 === 0 ? (i <= currPage ? 0 : -180) : (i <= currPage ? 180 : 0);

                let delay = 0;
                if (toOrFrom14) {
                    delay = (Math.abs(7 - Math.ceil(i / 2) * 2) - 1) / 10;  // [0, 0.6]
                    if (!isImg14Visible) delay = 0.6 - delay;
                }

                return (
                    <div
                        className={styles.comic_page}
                        key={page}
                        style={{
                            left: i % 2 === 0 ? '50%' : '10%',
                            zIndex: `${zIdx}`,
                            transformOrigin: i % 2 === 0 ? 'left' : 'right',
                            transform: (isImg14Visible ? `translateY(150%) ` : '') + `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg)`,
                            transitionTimingFunction: isImg14Visible ? 'ease-in' : 'ease-out',
                            transitionDelay: `${delay}s`,
                            transitionDuration: toOrFrom14 ? '0.8s' : '2s',
                        }}
                    >
                        {page !== '' ? (
                            <div
                                className={styles.comic_img_container}
                                style={{
                                    ...(i % 2 === 0 ? { left: 0 } : { right: 0 }),
                                    width: `${imgW}px`,
                                    height: `${imgH}px`,
                                }}
                            >
                                <img
                                    ref={e => {
                                        if (e) {
                                            imgMap.current.set(page, e);
                                            updateImgSize(e);
                                        }
                                        else imgMap.current.delete(page);
                                    }}
                                    className={styles.comic_img}
                                    alt={page}
                                    src={page}
                                    style={{
                                        width: `${imgW}px`,
                                        height: `${imgH}px`,
                                    }}
                                    onLoad={(e: React.UIEvent<HTMLImageElement>) => {
                                        updateImgSize(e.target as HTMLImageElement);
                                        loadedList.current.push(page);
                                        if (loadedList.current.length > 13) {
                                            setLoaded(true);
                                        }
                                    }}
                                />
                                <div style={{ boxShadow: `inset ${i % 2 === 0 ? '' : '-'}10px 0 10px -10px rgba(0,0,0,0.3)` }}>
                                </div>
                            </div>
                        ) : undefined}
                    </div>
                )
            })}

            {/* LOADING overlay */}
            <div className={styles.loading_div} style={{ opacity: `${isLoaded ? 0 : 1}` }}>
                <p>LOADING...</p>
            </div>

        </div>
    );
}
