import { Head } from 'vike-react/Head';
import styles from './index.module.css';
import { CanvasForceLayout } from './canvasayout';
import { ENTRIES } from './entries';


export default function Home() {
    return (
        <>
            <Head>
                <title>NIKUKIKAI</title>
            </Head>
            <div className={styles.viewport}>
                <CanvasForceLayout
                    items={ENTRIES}
                    hoverScale={1.12}
                    forceOptions={{
                        gap: 20,
                        getCategoryKey: (item) => item.category,
                        getBias: (item) => (item.category === 'manga' ? { x: 0.42, y: -1 } : { x: -1, y: 0.48 }),
                        getDepth: (item, categoryIndex) => 218 + categoryIndex * 106 + (item.category === 'links' ? 46 : 0),
                        getLateralOffset: (_item, categoryIndex) => {
                            const laneSign = categoryIndex % 2 === 0 ? -1 : 1;
                            const laneLevel = Math.floor(categoryIndex / 2);
                            return laneSign * laneLevel * 64;
                        },
                        dt: 0.033,
                        damping: 0,
                        buffer: 0,
                        iterationsPerStep: 1,
                        initialIterations: 1,
                        pairForce: 1.0,
                        maxSpeed: 320,
                    }}
                />
            </div>
        </>
    );
}
