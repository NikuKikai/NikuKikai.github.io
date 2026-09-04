import React from 'react';
import { DebugRepelArrow } from './debugArrow';
import styles from './index.module.css';
import { type LayoutItem } from './types';
import { useLayoutStore } from './layoutStore';


export function EntryCard({
    id, dragging
}: {
    id: string; dragging: boolean
}) {
    const item = useLayoutStore(state => state.layoutItems.find(i => i.id == id));

    if (item == undefined) return;

    // <DebugRepelArrow repel={{ x: item.repelX, y: item.repelY }} />
    return (<>
        {item.cardType === 'info' && <InfoCard item={item} dragging={dragging} />}
        {item.cardType === 'cd' && <CDCard item={item} dragging={dragging} />}
        {item.cardType === 'book' && <BookCard item={item} dragging={dragging} />}
        {item.cardType === 'web' && <WebCard item={item} dragging={dragging} />}
        {item.cardType === 'link' && <LinkCard item={item} dragging={dragging} />}
        {item.cardType === 'room' && <RoomCard item={item} dragging={dragging} />}
    </>);
}

function useScalable({
    item,
}: {
    item: LayoutItem,
}) {
    const updateItem = useLayoutStore((state) => state.updateItem);
    const setItemTargetScale = useLayoutStore((state) => state.setItemTargetScale);
    const [hovered, setHovered] = React.useState(false);
    const animationRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        const tick = () => {
            const it = useLayoutStore.getState().layoutItems.find(it => it.id == item.id);
            if (it == undefined) { }
            else if (Math.abs(it.targetScale - (it.scale ?? 1)) < 0.001) { }
            else {
                let s = it.scale ?? 1;
                // Scale interpolation stays in the same runtime items as physics so size changes remain continuous.
                s = s + (it.targetScale - s) * 0.2;
                s = Math.abs(it.targetScale - s) < 0.001 ? it.targetScale : s;
                updateItem(it.id, { w: it.baseWidth * s, h: it.baseHeight * s, scale: s });
            }
            animationRef.current = window.requestAnimationFrame(tick);
        };

        animationRef.current = window.requestAnimationFrame(tick);

        return () => {
            if (animationRef.current !== null) {
                window.cancelAnimationFrame(animationRef.current);
            }
        };
    }, [updateItem, item.id]);

    const onPointerEnter = React.useCallback((h: boolean) => {
        if (item == undefined) return;
        setItemTargetScale(item.id, (item.fixed || !h) ? 1 : 1.6);
        setHovered(h);
    }, [setItemTargetScale, item]);

    return {
        style: {
            position: 'absolute',
            left: item.x - item.w / 2,
            top: item.y - item.h / 2,
            width: item.w,
            height: item.h,
        } as React.CSSProperties,
        onPointerEnter: () => onPointerEnter(true),
        onPointerLeave: () => onPointerEnter(false),
        hovered,
    }
}
function ScalableDivA({ item, style, onPointerEnter, onPointerLeave, onMouseMove, hovered, dragging, children }: {
    item: LayoutItem, style: React.CSSProperties,
    onPointerEnter: () => void, onPointerLeave: () => void, onMouseMove?: (e: React.MouseEvent) => void,
    hovered: boolean, dragging: boolean, children: React.ReactNode,
}) {
    return (
        <div
            key={item.id}
            style={{ 
                perspective: hovered? '100vmin': '10000vmin',
                ...style,
                zIndex: hovered ? 30 : 10
            }}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onMouseMove={onMouseMove}
        >
            <a
                href={item.href}
                target={item.target}
                rel={item.target === '_blank' ? 'noreferrer' : undefined}
                className={styles.entry}
                onDragStart={(event) => event.preventDefault()}
                onClick={e => { if (dragging) e.preventDefault(); }}
                style={{ transformStyle: 'preserve-3d', }}
            >
                {children}
            </a>
        </div>
    )
}

export function InfoCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    return (
        <div
            key={item.id}
            style={{
                position: 'absolute',
                left: item.x - item.w / 2,
                top: item.y - item.h / 2,
                width: item.w,
                height: item.h,
                zIndex: 11,
            }}
        >
            <div className={styles.cardInfo}>
                <img
                    src='/assets/icon.png'
                    alt='Profile'
                    style={{ height: '100%', objectFit: 'contain', paddingTop: '20px', boxSizing: 'border-box' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '12px', paddingTop: '4px', flex: 1 }}>
                    <div>
                        <p style={{ margin: 0, fontSize: '50px', fontWeight: 'bold', textAlign: 'right', letterSpacing: '5px', paddingRight: '5px' }}>NIKU</p>
                        <p style={{ margin: 0, fontSize: '50px', fontWeight: 'bold', textAlign: 'right', letterSpacing: '0px', marginTop: '-20px' }}>KIKAI</p>
                    </div>
                    <div style={{ display: 'flex', flex: 1, gap: '0.5em', padding: '6px 8px', justifyContent: 'flex-end', alignContent: 'flex-end', flexWrap: 'wrap' }}>
                        <a target='_blank' href='https://x.com/NikuKiKai'>
                            <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="44px" width="44px" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export function BookCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    const scalable = useScalable({ item });
    const s = item.scale ?? 1;
    const imgScale = 104 * 1.6 / s;
    const imgOffset = (imgScale - 100) / 2;

    return (
        <ScalableDivA {...scalable} item={item} dragging={dragging}>
            <div className={`${styles.entryFrame}`} style={{
                border: '0',
                borderTopLeftRadius: '3%',
                borderBottomLeftRadius: '3%',
                background: 'black',
            }}>
                <div style={{ position: 'relative', display: 'flex', flex: 1, minHeight: 0, minWidth: 0, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', filter: 'blur(2px)', }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            width: `${imgScale}%`, height: `${imgScale}%`,
                            marginLeft: `${imgOffset}%`, marginTop: `${imgOffset}%`,
                            objectFit: 'cover', opacity: 0.75,
                            // filter: 'blur(2px)',
                        }} />
                    )}
                    <div style={{
                        position: 'absolute', width: '92%', height: '90%',
                        border: '2px solid white', boxSizing: 'border-box',
                    }} />
                </div>
                <div style={{
                    position: 'absolute', width: '100%', height: '100%', boxSizing: 'border-box',
                    border: '3px black solid',
                    borderTopLeftRadius: '3%',
                    borderBottomLeftRadius: '3%',
                    borderRightWidth: '6px',
                }} />
            </div>

            <div style={{
                position: 'absolute',
                width: '80%', height: '70%', left: '10%',
                boxSizing: 'border-box',
                color: 'white',
                fontWeight: 'bold',
                display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
            }}>
                <p style={{ flex: 1 }} />
                <p style={{ fontSize: `${36 * s}px`, margin: 0 }}>{item.title}</p>
                <p style={{ fontSize: `${18 * s}px`, margin: 0, letterSpacing: '30%' }}>{item.subtitle}</p>
                <p style={{ flex: 1 }} />
            </div>

            <div style={{
                position: 'absolute',
                height: 'calc(24%)', width: '104%',
                bottom: '3%', marginLeft: '-2%',
                background: 'white',
                boxSizing: 'border-box',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: `${4 * s}px`,
                // fontWeight: 'bold',
                color: '#666',
                letterSpacing: '1%',
                fontSize: `${14 * s}px`,
                border: '3px black solid',
                // borderLeftWidth: '1px',
                // borderRightWidth: '1px',
            }}>
                {item.description}
            </div>
        </ScalableDivA>
    );
}

export function LinkCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    const scalable = useScalable({ item });
    return (
        <ScalableDivA {...scalable} item={item} dragging={dragging}>
            <div className={`${styles.entryFrame}`} style={{
                // border: '0',
                // background: 'transparent',
                // overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%', height: '100%',
                    minWidth: 0, minHeight: 0,
                    background: 'red',
                    margin: 0,
                    boxSizing: 'border-box',
                    color: 'black',
                    fontWeight: 'bold',
                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
                    overflow: 'hidden',
                }}>
                    <p style={{ fontSize: `${30}px`, margin: 0 }}>{item.title}</p>
                </div>

                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: `80%`, height: `80%`,
                    marginLeft: `10%`, marginTop: `10%`,
                    background: 'black',
                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
                }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            width: `80%`, height: `80%`,
                            marginLeft: `10%`, marginTop: `10%`,
                            objectFit: 'cover', opacity: 0.75,
                            // filter: 'blur(2px)',
                        }} />
                    )}
                    <p style={{
                        position: 'absolute', fontSize: `${30}px`, margin: 0, color: 'white',
                    }}>{item.title}</p>
                </div>
            </div>
        </ScalableDivA>
    );
}

export function CDCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    const scalable = useScalable({ item });
    const s = item.scale ?? 1;
    const frameRef = React.useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!frameRef.current) return;

        const rect = frameRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        frameRef.current.style.transform = `rotateX(${-y * 22}deg) rotateY(${x * 22}deg)`;
    };

    React.useEffect(() => {
        if (!frameRef.current) return;
        if (!scalable.hovered) {
            frameRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
        }
    }, [scalable.hovered])

    return (
        <ScalableDivA {...scalable} item={item} dragging={dragging} onMouseMove={onMouseMove}>
            <div ref={frameRef} className={`${styles.entryFrame} ${styles.rings}`} style={{
                transformStyle: 'preserve-3d',
                transition: 'none',
            }}>
                <div style={{
                    position: 'relative', display: 'flex', flex: 1,
                    margin: '6px', minHeight: 0, minWidth: 0,
                    justifyContent: 'center', alignItems: 'center',
                    transformStyle: 'preserve-3d',
                }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            position: 'absolute',
                            width: '100%', height: '100%', objectFit: 'contain',
                            transform: scalable.hovered ? 'translateZ(0px) translateX(40px)' : 'none',
                            transition: 'transform 500ms ease',
                            transformStyle: 'preserve-3d',
                            filter: 'brightness(0) invert(1)',
                        }} />
                    )}
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            position: 'absolute',
                            width: '100%', height: '100%', objectFit: 'contain',
                            transform: scalable.hovered ? 'translateZ(15px) translateX(40px)' : 'none',
                            transition: 'transform 500ms ease',
                            transformStyle: 'preserve-3d',
                        }} />
                    )}
                </div>
                {/* Label */}
                <div style={{
                    position: 'absolute',
                    height: '100%', width: '12%',
                    background: 'white', margin: '0',
                    boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'flex-end',
                    gap: '5%',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(30px)',
                }}>
                    {/* Side */}
                    <div style={{
                        position: 'absolute',
                        height: '100%', width: '30px', left: '0',
                        background: '#ccc',
                        transformOrigin: 'left',
                        transform: 'rotateY(90deg)',
                    }} />
                    <span style={{
                        boxSizing: 'border-box',
                        height: 'auto', width: '100%',
                        padding: '30% 0px',
                        marginRight: '-20%', marginTop: '10%',
                        fontWeight: 'bold', fontSize: `${16 * s}px`,
                        background: 'black', color: 'white', textAlign: 'center',
                        writingMode: 'vertical-rl', textOrientation: 'mixed', whiteSpace: 'nowrap'
                    }}>{item.title}</span>
                    <span style={{
                        display: 'block', boxSizing: 'border-box',
                        flex: 1, width: '100%',
                        padding: `${1 * s}px`,
                        fontWeight: 'bold', fontSize: `${10 * s}px`, lineHeight: `${10 * s}px`,
                        writingMode: 'vertical-rl', textOrientation: 'mixed',
                    }}>{item.description}</span>
                </div>
            </div>
        </ScalableDivA>
    );
}

export function WebCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    const scalable = useScalable({ item });
    const s = item.scale ?? 1;

    return (
        <ScalableDivA {...scalable} item={item} dragging={dragging}>
            <div className={`${styles.entryFrame}`} style={{
                background: 'white',
            }}>
                <div style={{
                    height: '11%', width: '100%', display: 'flex',
                    alignItems: 'center', borderBottom: '1px solid black',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: `${10 * s}px`, height: `${10 * s}px`,
                        borderRadius: '50%', background: '#f25f58', marginLeft: '6px'
                    }} />
                    <div style={{
                        width: `${10 * s}px`, height: `${10 * s}px`,
                        borderRadius: '50%', background: '#4CAF50', marginLeft: '6px'
                    }} />
                    <div style={{
                        width: `${10 * s}px`, height: `${10 * s}px`,
                        borderRadius: '50%', background: '#f4bf4f', marginLeft: '6px'
                    }} />
                    <div style={{
                        marginLeft: '10%', width: '60%', height: '80%',
                        border: '1px solid black', borderRadius: `${10 * s}px`,
                        fontSize: `${7 * s}px`, lineHeight: `140%`, paddingLeft: `${4 * s}px`,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }} >
                        {item.href}
                    </div>
                </div>

                <div style={{ position: 'relative', display: 'flex', flex: 1, overflow: 'hidden', justifyContent: 'center' }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            width: '100%', height: '100%', objectFit: 'cover', opacity: 1,
                        }} />
                    )}
                    <div style={{
                        position: 'absolute', width: '66%', height: '60%', bottom: `${50 * (s - 1) / 0.6 - 30}%`,
                        borderRadius: `${6 * s}px`, border: '1px solid black', boxSizing: 'border-box',
                        display: 'flex', flexDirection: 'column',
                        color: 'black', textAlign: 'center',
                        background: `rgba(255, 255, 255, ${0.7 + (s - 1) / 2})`,
                        boxShadow: '0px 0px 25px rgba(255, 255, 255, 0.5)',
                    }}>
                        <span style={{ fontSize: `130%`, padding: '2%', letterSpacing: '2px', height: '50%' }}>{item.title}</span>
                        <span style={{ fontSize: `${10 * s}px`, padding: '5%', flex: 1 }}>{item.description}</span>
                    </div>
                </div>
            </div>
        </ScalableDivA>
    );
}

export function RoomCard({ item, dragging }: { item: LayoutItem; dragging: boolean }) {
    const scalable = useScalable({ item });
    const s = item.scale ?? 1;
    const frameRef = React.useRef<HTMLDivElement>(null);
    const sceneRef = React.useRef<HTMLDivElement>(null);
    const leftWallRef = React.useRef<HTMLDivElement>(null);
    const rightWallRef = React.useRef<HTMLDivElement>(null);
    const ceilRef = React.useRef<HTMLDivElement>(null);
    const floorRef = React.useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!frameRef.current || !sceneRef.current) return;

        const rect = frameRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        sceneRef.current.style.transform = `rotateX(${-y * 30}deg) rotateY(${-20 + x * 30}deg)`;
    };

    React.useEffect(() => {
        if (!sceneRef.current) return;
        if (!scalable.hovered) {
            sceneRef.current.style.transform = `rotateX(0deg) rotateY(-20deg)`;
        }
    }, [scalable.hovered])

    return (
        <ScalableDivA {...scalable} item={item} dragging={dragging} onMouseMove={onMouseMove}>
            <div ref={frameRef} className={`${styles.entryFrame}`} style={{
                transition: 'none',
                overflow: 'hidden',
                background: 'black',
            }}>
                {/* Inner 3D scene */}
                <div style={{
                    position: 'relative',
                    width: '100%', height: '100%', margin: 0,
                    perspective: '150px',
                }}>
                    <div ref={sceneRef} style={{
                        position: 'relative',
                        width: '100%', height: '100%', margin: 0,
                        transformStyle: 'preserve-3d',
                        transition: 'none',
                        containerType: 'inline-size',
                    }}>
                        {/* Left wall */}
                        <div ref={leftWallRef} style={{
                            position: 'absolute',
                            width: '200%', left: '-50%',
                            height: '150cqw', bottom: '-20cqw',
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            transformStyle: 'preserve-3d',
                            transformOrigin: '25% 50% 0',
                            transform: 'rotateY(90deg) translateZ(0.1px)',
                            background: '#ddd',
                            overflow: 'hidden',
                        }}>
                            {item.img && (
                                <img src={item.img} alt={item.title} style={{
                                    position: 'absolute',
                                    height: '50%', bottom: '15%', left: '5%',
                                }} />
                            )}
                            <div style={{
                                position: 'absolute',
                                width: '100%', height: '100%',
                                background: 'linear-gradient(to right, transparent 20%, black 100%)',
                            }} />
                        </div>
                        {/* Right wall */}
                        <div ref={rightWallRef} style={{
                            position: 'absolute',
                            width: '200%', right: '-50%',
                            height: '150cqw', bottom: '-20cqw',
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            transformStyle: 'preserve-3d',
                            transformOrigin: '75% 50% 0',
                            transform: 'rotateY(-90deg) translateZ(0.1px)',
                            background: 'linear-gradient(to left, #ddd 20%, black 100%)',
                        }}>
                        </div>
                        {/* Ceil */}
                        <div ref={ceilRef} style={{
                            position: 'absolute',
                            width: '100%',
                            height: '200cqw', top: '-80cqw',
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            transformStyle: 'preserve-3d',
                            transformOrigin: '50% 50cqw 0',
                            transform: 'rotateX(-90deg) translateZ(0.1px)',
                            background: 'linear-gradient(to bottom, gray 40%, black 100%)',
                        }}>
                        </div>
                        {/* Floor */}
                        <div ref={floorRef} style={{
                            position: 'absolute',
                            width: '100%',
                            height: '200cqw', bottom: '-70cqw',
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            transformStyle: 'preserve-3d',
                            transformOrigin: '50% 150cqw 0',
                            transform: 'rotateX(90deg) translateZ(0.1px)',
                            background: 'linear-gradient(to top, gray 40%, black 100%)',
                        }}>
                        </div>
                        {/* Label */}
                        {/* <div style={{
                        position: 'absolute', height: '100%', width: '12%',
                        background: 'white', margin: '0',
                        boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'flex-end',
                        gap: '5%',
                        transformStyle: 'preserve-3d',
                        transform: scalable.hovered ? 'translateZ(40px)' : 'none',
                    }}>
                        <span style={{
                            boxSizing: 'border-box',
                            height: 'auto', width: '100%',
                            padding: '30% 0px',
                            marginRight: '-20%', marginTop: '10%',
                            fontWeight: 'bold', fontSize: `${16 * s}px`,
                            background: 'black', color: 'white', textAlign: 'center',
                            writingMode: 'vertical-rl', textOrientation: 'mixed', whiteSpace: 'nowrap'
                        }}>{item.title}</span>
                        <span style={{
                            display: 'block', boxSizing: 'border-box',
                            flex: 1, width: '100%',
                            padding: `${1 * s}px`,
                            fontWeight: 'bold', fontSize: `${10 * s}px`, lineHeight: `${10 * s}px`,
                            writingMode: 'vertical-rl', textOrientation: 'mixed',
                        }}>{item.description}</span>
                    </div> */}
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '100%', height: '100%', marginLeft: '-4px', marginTop: '-4px',
                    display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '64px',
                    opacity: scalable.hovered? 0: 1,
                    transition: 'opacity 500ms ease',
                }}>
                    <span>{item.title}</span>
                </div>
            </div>
        </ScalableDivA >
    );
}
