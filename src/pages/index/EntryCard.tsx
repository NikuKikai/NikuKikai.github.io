import styles from './index.module.css';
import { type LayoutItem, CATEGORY_LABELS } from './types';


export function EntryCard({ item, hovered, dragging }: { item: LayoutItem; hovered: boolean; dragging: boolean }) {
    if (item.fixed) {
        return (
            <div className={styles.centerCard}>
                <div className={styles.centerInner}>
                    <p className={styles.centerEyebrow}>NIKUKIKAI</p>
                    <h1 className={styles.centerTitle}>Personal profile at the center of stacked comic frames.</h1>
                    <p className={styles.centerText}>
                        Drag the plane. Cards are laid out as one system and packed inward without overlapping.
                    </p>
                    <p className={styles.centerText}>
                        Hovering enlarges one frame, then the whole layout is solved again around the fixed center.
                    </p>
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
            <div className={styles.entryFrame}>
                <div className={styles.entryMeta}>
                    <span>{CATEGORY_LABELS[item.category]}</span>
                    <span>{item.type.toUpperCase()}</span>
                </div>
                <div className={styles.entryBody}>
                    <h2 className={styles.entryTitle}>
                        {item.title}
                        {item.subtitle ? <span className={styles.entrySubtitle}> / {item.subtitle}</span> : null}
                    </h2>
                    <p className={styles.entryDescription}>{item.description}</p>
                </div>
            </div>
        </a>
    );
}
