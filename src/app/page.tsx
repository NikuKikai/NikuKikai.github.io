'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import * as ort from 'onnxruntime-web';

import './globals.css';

const H = 46;
const W = 46;
const CH = 16;


export default function Home() {
    const data = React.useRef<Float32Array | null>(null);
    const [updated, setUpdated] = React.useState<number>(0);
    void updated;

    React.useEffect(() => {
        let intervalHandler: NodeJS.Timeout;
        (async () => {
            const session = await ort.InferenceSession.create('./home/short40_default.onnx');

            console.log(session.inputNames, session.outputNames);

            // prepare inputs. a tensor need its corresponding TypedArray as data
            const stateArr = new Float32Array(H * W * CH);
            for (let i = 3; i < CH; i++)
                stateArr[H / 2 * W * CH + W / 2 * CH + i] = 1;
            let state = new ort.Tensor('float32', stateArr, [1, H, W, CH]);
            const angleArr = Float64Array.from([0]);
            const angle = new ort.Tensor('float64', angleArr, [1]);

            intervalHandler = setInterval(async () => {
                // prepare feeds. use model input names as keys.
                const feeds = { 'x.1': state, 'angle': angle };

                // feed inputs and run
                const results = await session.run(feeds);
                // read from results
                const stateArr_ = results[89].data as Float32Array;

                // const state_gray = to_gray(stateArr_)
                // console.log(state_gray);
                // document.write(`${state_gray}`);
                data.current = stateArr_;
                setUpdated(Date.now());

                state = new ort.Tensor('float32', stateArr_, [1, H, W, CH]);;
            }, 30)
        })();
        return () => {
            if (intervalHandler)
                clearInterval(intervalHandler);
        }
    }, []);

    return <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${W}, 1fr)`,
            width: '60vmin', height: '60vmin'
        }}>
            {Array.from({ length: H * W }, (_, i) => {
                let r = 0;
                let g = 0;
                let b = 0;
                let a = 0;
                const x = Math.floor(i / H);
                const y = i - x * H;
                if (data.current) {
                    r = Math.min(1, Math.max(0, data.current[x * H * CH + y * CH + 0])) * 255;
                    g = Math.min(1, Math.max(0, data.current[x * H * CH + y * CH + 1])) * 255;
                    b = Math.min(1, Math.max(0, data.current[x * H * CH + y * CH + 2])) * 255;
                    a = Math.min(1, Math.max(0, data.current[x * H * CH + y * CH + 3]));
                }

                return <div key={i} style={{
                    backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
                }} />;
            })}
        </div>
        <div style={{ height: '4em' }} />
        <div style={{ fontSize: '4vmin', fontWeight: 'normal' }}>
            <span style={{ marginRight: '1em', fontWeight: 'bold' }}>MANGA▶</span>
            <span style={{ marginRight: '1em' }}><Link href='/null1'>NULL1</Link></span>
            <span></span>
            <span style={{ marginRight: '1em' }}><Link href='/null2'>NULL2</Link></span>
            <span style={{ marginRight: '1em' }}><Link href='/Q'>Q</Link></span>
            <span style={{ marginRight: '1em' }}><Link href='/UglyYuri'>UglyYuri</Link></span>
            <div style={{ height: '0' }} />
            <span style={{ marginRight: '1em', fontWeight: 'bold' }}>LINKS▶</span>
            <span style={{ marginRight: '1em' }}><Link href='https://x.com/NikuKiKai' target='_blank'>X</Link></span>
            <span style={{ marginRight: '1em' }}><Link href='https://photohito.com/user/159218/' target='_blank'>PHOTO</Link></span>
            <span style={{ marginRight: '1em' }}><Link href='https://nikukikai.hatenablog.jp/' target='_blank'>
                BLOG<span style={{ fontSize: '1.5vmin' }}>(CHN)</span>
            </Link></span>
        </div>
    </div>
}
