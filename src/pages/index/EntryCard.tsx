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
    const setItemTargetScale = useLayoutStore((state) => state.setItemTargetScale);
    const [hovered, setHovered] = React.useState(false);

    const onPointerEnter = React.useCallback((h: boolean) => {
        if (item == undefined) return;
        setItemTargetScale(item.id, (item.fixed || !h) ? 1 : 1.6);
        setHovered(h);
    }, [setItemTargetScale, item]);

    if (item == undefined) return;

    return (
        <div
            key={item.id}
            style={{
                position: 'absolute',
                left: item.x - item.w / 2,
                top: item.y - item.h / 2,
                width: item.w,
                height: item.h,
            }}
            onPointerEnter={() => onPointerEnter(true)}
            onPointerLeave={() => onPointerEnter(false)}
        >
            <DebugRepelArrow repel={{ x: item.repelX, y: item.repelY }} />
            {item.cardType === 'info' && <InfoCard />}
            {item.cardType === 'cd' && <CDCard item={item} hovered={hovered} dragging={dragging} />}
            {item.cardType === 'book' && <BookCard item={item} hovered={hovered} dragging={dragging} />}
            {item.cardType === 'web' && <WebCard item={item} hovered={hovered} dragging={dragging} />}
        </div>
    );
}

export function InfoCard() {
    return (
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
    );
}

export function BookCard({ item, hovered, dragging }: { item: LayoutItem; hovered: boolean; dragging: boolean }) {
    const s = item.scale ?? 1;
    const imgScale = 104 * 1.6 / s;
    const imgOffset = (imgScale - 100) / 2;

    return (
        <a
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noreferrer' : undefined}
            className={`${styles.entry} ${hovered ? styles.entryHovered : ''}`}
            onDragStart={(event) => event.preventDefault()}
            onClick={(event) => {
                if (dragging) {
                    event.preventDefault();
                }
            }}
            onMouseEnter={(e) => {
                console.log(`Mouse entered ${item.title}`);
            }}
        >
            <div className={`${styles.entryFrame}`} style={{
                borderTopLeftRadius: '3%',
                borderBottomLeftRadius: '3%',
                borderWidth: '3px',
                borderRightWidth: '5px',
                background: 'black',
            }}>
                <div style={{ position: 'relative', display: 'flex', flex: 1, minHeight: 0, minWidth: 0, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', filter: 'blur(2px)', }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{
                            width: `${imgScale}%`, height: `${imgScale}%`,
                            marginLeft: `${imgOffset}px`, marginTop: `${imgOffset}px`,
                            objectFit: 'cover', opacity: 0.75,
                            // filter: 'blur(2px)',
                        }} />
                    )}
                    <div style={{
                        position: 'absolute', width: '92%', height: '90%',
                        border: '2px solid white', boxSizing: 'border-box',
                    }} />
                </div>
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
        </a>
    );
}

export function CDCard({ item, hovered, dragging }: { item: LayoutItem; hovered: boolean; dragging: boolean }) {
    const s = item.scale ?? 1;
    return (
        <a
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noreferrer' : undefined}
            className={`${styles.entry} ${hovered ? styles.entryHovered : ''}`}
            onDragStart={(event) => event.preventDefault()}
            onClick={(event) => { if (dragging) event.preventDefault(); }}
        >
            <div className={`${styles.entryFrame} ${styles.rings}`}>
                <div style={{
                    position: 'relative', display: 'flex', flex: 1,
                    margin: '6px', minHeight: 0, minWidth: 0, overflow: 'hidden',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    {item.img && (
                        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    )}
                </div>
            </div>
            <div style={{
                position: 'absolute', height: 'calc(100% - 8px)', width: '12%',
                background: 'white', margin: '4px',
                boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'flex-end',
                gap: '5%',
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
            </div>
        </a>
    );
}

export function WebCard({ item, hovered, dragging }: { item: LayoutItem; hovered: boolean; dragging: boolean }) {
    const s = item.scale ?? 1;
    console.log('render card', item.x);

    return (
        <a
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noreferrer' : undefined}
            className={`${styles.entry} ${hovered ? styles.entryHovered : ''}`}
            onDragStart={(event) => event.preventDefault()}
            onClick={(event) => {
                if (dragging) {
                    event.preventDefault();
                }
            }}
        >
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
        </a>
    );
}
