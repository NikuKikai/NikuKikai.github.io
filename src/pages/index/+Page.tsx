import React from 'react';
// import { Link } from 'react-router-dom';
import * as ort from 'onnxruntime-web';
import { Head } from 'vike-react/Head';
import { useWindowSize } from '@react-hook/window-size';

const H = 46;
const W = 46;
const CH = 16;
const DAMAGE_R = 2;


function Entry(props: {
    href: string,
    target?: React.HTMLAttributeAnchorTarget,
    children?: React.ReactNode,
    onEnter?: (x: number, y: number, w: number, h: number) => void,
    onLeave?: () => void,
}) {
    const ref = React.useRef<HTMLSpanElement>(null);

    const onMouseEnter = (e: React.MouseEvent) => {
        void e;
        if (!ref.current) return;
        props.onEnter?.(
            ref.current.offsetLeft,
            ref.current.offsetTop,
            ref.current.offsetWidth,
            ref.current.offsetHeight,
        );
    }
    const onMouseLeave = (e: React.MouseEvent) => {
        void e;
        if (!ref.current) return;
        props.onLeave?.();
    }

    return <span ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ marginRight: '1em' }}
    >
        <a href={props.href} target={props.target} style={{ cursor: 'none' }}>
            {props.children}
        </a>
    </span>
}


export default function Home() {
    const [cursorPos, setCursorPos] = React.useState<{ x: number, y: number }>({ x: -10, y: -10 });
    const [cursorSize, setCursorSize] = React.useState<{ w: string, h: string }>({ w: '10px', h: '10px' });
    const [cursorLockPos, setCursorLockPos] = React.useState<{ x: number, y: number }>({ x: -10, y: -10 });
    const [cursorLockSize, setCursorLockSize] = React.useState<{ w: string, h: string }>({ w: '10px', h: '10px' });
    const [cursorLocked, setCursorLocked] = React.useState<boolean>(false);

    const [vw, vh] = useWindowSize();
    const vmin = Math.min(vw, vh);
    const canvasSize = vmin * 0.6;

    const onMouseMove = (e: React.MouseEvent) => {
        // Cursor
        if (cursorLocked) {
            setCursorPos(cursorLockPos);
            setCursorSize(cursorLockSize);
        }
        else {
            setCursorPos({ x: e.clientX, y: e.clientY });
            setCursorSize({
                w: `${canvasSize * DAMAGE_R * 2 / W}px`,
                h: `${canvasSize * DAMAGE_R * 2 / H}px`,
            });
        }
    };

    const onEntryEnter = (x: number, y: number, w: number, h: number) => {
        setCursorLocked(true);
        const mx = h / 8;
        x -= mx;
        w += mx * 2;
        setCursorLockPos({ x: x + w / 2, y: y + h / 2 });
        setCursorLockSize({ w: `${w}px`, h: `${h}px` });
    }

    const onEntryLeave = () => {
        setCursorLocked(false);
    }

    return <><Head>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
    </Head>
        <div onMouseMove={onMouseMove} style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'none',
        }}>
            <NCACanvas />
            <div style={{ height: '4em' }} />
            <div style={{ fontSize: '4vmin', fontWeight: 'normal' }}>
                <span style={{ marginRight: '1em', fontWeight: 'bold' }}>MANGA▶</span>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='/komaTrials'>KOMAs</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='/null1'>NULL1</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='/null2'>NULL2</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='/Q'>Q</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='/UglyYuri'>UglyYuri</Entry>
                <div style={{ height: '0' }} />
                <span style={{ marginRight: '1em', fontWeight: 'bold' }}>LINKS▶</span>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='https://x.com/NikuKiKai' target='_blank'>X</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='https://photohito.com/user/159218/' target='_blank'>PHOTO</Entry>
                <Entry onEnter={onEntryEnter} onLeave={onEntryLeave} href='https://nikukikai.hatenablog.jp/' target='_blank'>
                    BLOG<span style={{ fontSize: '1.5vmin' }}>(CHN)</span>
                </Entry>
            </div>

            {/* Cursor */}
            <div style={{
                position: 'absolute',
                borderStyle: 'solid',
                borderWidth: cursorLocked ? '2px' : '1px',
                boxSizing: 'border-box',
                borderColor: '#ddd',
                pointerEvents: 'none',
                transitionDuration: cursorLocked ? '0.1s' : '0s',
                transitionTimingFunction: cursorLocked ? 'ease-out' : 'linear',
                left: `calc(${cursorPos.x}px - ${cursorSize.w} / 2)`, top: `calc(${cursorPos.y}px - ${cursorSize.h} / 2)`,
                width: `${cursorSize.w}`, height: `${cursorSize.h}`,
            }} />
        </div></>
}


const NCACanvas = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const data = React.useRef<Float32Array | null>(null);
    const damagePos = React.useRef<{ x: number, y: number } | null>(null);
    const [updated, setUpdated] = React.useState<number>(0);

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

            // Start interval
            intervalHandler = setInterval(async () => {
                // feed inputs and run
                const feeds = { 'x.1': state, 'angle': angle };
                const results = await session.run(feeds);
                // read from results
                const stateArr_ = results[89].data as Float32Array;

                // Damage
                if (damagePos.current) {
                    const pos = damagePos.current;
                    // const stateData = await state.getData(true);
                    for (let x = Math.round(pos.x * W - DAMAGE_R); x < Math.round(pos.x * W + DAMAGE_R); x++) {
                        if (x < 0 || x >= W) continue;
                        for (let y = Math.round(pos.y * H - DAMAGE_R); y < Math.round(pos.y * H + DAMAGE_R); y++) {
                            if (y < 0 || y >= H) continue;
                            for (let ch = 0; ch < CH; ch++) {
                                stateArr_[y * W * CH + x * CH + ch] = 0;
                            }
                        }
                    }
                    // state = new ort.Tensor('float32', stateData, [1, H, W, CH]);
                    damagePos.current = null;
                }

                data.current = stateArr_;
                setUpdated(Date.now());
                // console.log(performance.now());

                state = new ort.Tensor('float32', stateArr_, [1, H, W, CH]);;
            }, 30)
        })();
        return () => {
            if (intervalHandler)
                clearInterval(intervalHandler);
        }
    }, []);

    React.useEffect(() => {
        if (!canvasRef.current || !data.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        ctx.imageSmoothingEnabled = false;

        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < W * H * CH; i += CH) {
            const y = Math.floor(i / (H * CH));
            const x = (i - y * H * CH) / CH;
            const r = Math.min(1, Math.max(0, data.current[i])) * 255; // R
            const g = Math.min(1, Math.max(0, data.current[i + 1])) * 255; // G
            const b = Math.min(1, Math.max(0, data.current[i + 2])) * 255; // B
            const a = Math.min(1, Math.max(0, data.current[i + 3])); // A

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }, [updated]);

    const onMouseMove = (e: React.MouseEvent) => {
        // NCA Damage
        if (!canvasRef.current) return;
        damagePos.current = {
            x: (e.clientX - canvasRef.current.offsetLeft) / canvasRef.current.offsetWidth,
            y: (e.clientY - canvasRef.current.offsetTop) / canvasRef.current.offsetHeight,
        };
    }

    return <canvas
        ref={canvasRef}
        width={W} height={H}
        onMouseMove={onMouseMove}
        style={{ width: '60vmin', height: '60vmin', imageRendering: 'pixelated' }}
    />
}
