import { Head } from 'vike-react/Head';
import styles from './index.module.css';
import { CanvasLayout } from './canvasLayout';
import { ENTRIES } from './entries';


export default function Home() {
    return (
        <>
            <Head>
                <title>NIKUKIKAI</title>
            </Head>
            <div className={styles.viewport}>
                <CanvasLayout
                    items={ENTRIES}
                    forceOptions={{
                        gap: 20,
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
