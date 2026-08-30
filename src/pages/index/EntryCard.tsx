import styles from './index.module.css';
import { type LayoutItem, CATEGORY_LABELS } from './types';


export function EntryCard({ item, hovered, dragging }: { item: LayoutItem; hovered: boolean; dragging: boolean }) {
    if (item.cardType === 'info') {
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
                            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 448 512" height="44px" width="44px" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

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
            <div className={`${styles.entryFrame} ${styles.rings}`}>
                <div  style={{position: 'relative', display: 'flex', flex: 1, margin: '6px' }}>
                {item.img && (
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                )}
                </div>
            </div>
        </a>
    );
}
