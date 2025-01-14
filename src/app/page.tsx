'use client';

import React, { useEffect, useLayoutEffect, useRef, useState, PropsWithChildren } from 'react';
import { Engine, Runner, Events, Body, Bodies, World } from 'matter-js';
import { useRouter } from 'next/navigation';

import './globals.css';
import styles from './home.module.css';


type PhysicDivProps = {
    engine: Engine;
    margin?: number,
    style?: React.CSSProperties,
    onClick?: ()=>void,
}


let physicDivYLst = 10;
let physicDivXLst = 10;
function randPhysicDivProps(){
    const randX = () => window.innerWidth/2 + (Math.random()-1/2) * Math.min(window.innerWidth-200, window.innerHeight) - 100;
    let x = randX();
    while (Math.abs(x-physicDivXLst) < 300) x = randX();
    const y = window.innerHeight + physicDivYLst;
    physicDivXLst = x;
    physicDivYLst += Math.random() * 50 + 50;
    return {
        x0: x, y0: y,
        fposx: x + Math.random(),
        fposy: y,
        fx: 0,
        fy: (Math.random()-1) * 0.1,
    }
}


function PhysicDiv({engine, margin, style, children, onClick} : PropsWithChildren<PhysicDivProps>) {
    const divRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<Body>(null);
    const [pos, setPos] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [deg, setDeg] = useState<number>(0);

    if (margin === undefined) margin = 0;


    const onEngineUpdated = () => {
        setPos({x: bodyRef.current!.vertices[0].x+margin!, y: bodyRef.current!.vertices[0].y+margin!});
        setDeg(bodyRef.current!.angle * 180/Math.PI);
    };

    useEffect(() => {
        const args = randPhysicDivProps()

        // Create body
        setTimeout(() => {  // NOTE divRef.current!.clientWidth is sometimes INCORRECT
            const w = divRef.current!.clientWidth + margin!*2;
            const h = divRef.current!.clientHeight + margin!*2;
            const x = args.x0+w/2; const y = args.y0+h/2;
            const body = Bodies.fromVertices(x, y, [[{x:0, y:0}, {x:w, y:0}, {x:w, y:h}, {x:0, y:h}]]);
            bodyRef.current = body;

            World.add(engine.world, body);
            body.frictionAir = 0.002 + Math.random() * 0.02;
            // body.frictionStatic = 1;

            if (args.fposx !== undefined && args.fposy !== undefined && args.fx !== undefined && args.fy !== undefined)
                Body.applyForce(body, {x: args.fposx, y: args.fposy}, {x: args.fx, y: args.fy});
            Events.on(engine, 'afterUpdate', onEngineUpdated)

        }, 66);

        return () => {
            if (bodyRef.current)
                World.remove(engine.world, bodyRef.current);
        }
    }, []);

    useLayoutEffect(() => {
        // console.log('lo', divRef.current!.clientWidth, children)
    }, []);


    return (
        <div ref={divRef} key={bodyRef.current?.id} className={styles.physicDiv}
            style={{
                left: pos.x+'px',
                top: pos.y+'px',
                transform: 'rotate('+deg+'deg)',
                transformOrigin: '-' + margin + 'px -' + margin + 'px',
                cursor: 'pointer',
                ...style
            }}
            onClick={onClick}
        >
            {children}
        </div>
    )
}


export default function Home() {
    const router = useRouter();
    // const [bodies, setBodies] = useState<Body[]>([]);

    const engineRef = useRef<Engine>(Engine.create());
    const runnerRef = useRef<Runner>(Runner.create());

    useEffect(() => {
        if (window.location.hash) {
            const url = window.location.href.replace('/#', '');
            // Redirect to the corresponding new route
            console.log(window.location, url);
            router.replace(url);
        }
    }, []);

    useEffect(() => {
        const engine = engineRef.current;
        const runner = runnerRef.current;
        engine.gravity.scale = -0.00015;
        const ground = Bodies.rectangle(2000, 800, 4000, 100, {isStatic: true});
        const leftWall = Bodies.rectangle(-40, 1000, 100, 2000, {isStatic: true});
        const rightWall = Bodies.rectangle(1000, 1000, 100, 2000, {isStatic: true});
        World.add(engine.world, [ground, leftWall, rightWall]);

        // Init resize event
        const onresize = () => {
            Body.setPosition(rightWall, {x: window.innerWidth+40, y: 1000});
            Body.setPosition(ground, {x: 2000, y: window.innerHeight*0.6-50+5});  // collider is 5px below water surface
        };
        window.addEventListener('resize', onresize);
        onresize();

        // Init physics
        Runner.run(runner, engine);
        Events.on(engine, 'afterUpdate', () => {
            // setBodies([...Matter.Composite.allBodies(engine.world)]);
        })
        return () => {  // on unmount
            window.removeEventListener('resize', onresize);
            Runner.stop(runner);
        }
    }, [])



    return (
        <div>
            {/* Water */}
            <div style={{
                backgroundColor: '#2cc',
                position: 'fixed',
                width: '100vw', height: '40vh', bottom: '0',

            }}></div>

            {/* Tools */}
            <div style={{
                backgroundImage: `url(/home/tools.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center top 0',
                position: 'fixed', top: '0', height: '45vh', width: '100vw'}}>
            </div>

            {/* Tools */}
            <div style={{
                backgroundImage: `url(/home/brain.png)`,  // https://pensoza.com/
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center bottom 0',
                opacity: '1',
                position: 'fixed', bottom: '0', height: '55vh', width: '100vw'}}>
            </div>

            {/* Show bodies for DEBUG */}
            {/* <svg width='100vw' height='100vh' style={{position: 'absolute', left: '0'}}>
                <g
                    // transform={`scale(1,1) translate(${this.state.width / 2}, ${this.state.height / 2})`}
                >
                    {bodies.map((body, i) => {
                        if (!body.parts) return null;
                        if (body.label === 'Circle Body') {
                            return <circle key={i} cx={body.position.x} cy={body.position.y} r={body.circleRadius} fill='green'/>
                        }
                        else if (body.label === 'Rectangle Body' || body.label === 'Body') {
                            let pts = '';
                            body.vertices.forEach(v => {
                                pts += '' + v.x + ',' + v.y + ' ';
                            })
                            return <polygon key={i} points={pts} fill='red'/>
                        }
                        return null;
                    })}
                </g>
            </svg> */}

            <div>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '5em'}}>
                    <a href='./time-life'>Time-Life</a>
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '5em'}} onClick={()=>router.push('/null1')}>
                    📖「」1
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '5em'}} onClick={()=>router.push('/null2')}>
                    📖「」2
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '5em'}} onClick={()=>router.push('/Q')}>
                    📖「Q」
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '5em'}}>
                    <a href='./gallery'>Gallery</a>
                </PhysicDiv>

                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '3em'}}>
                    <a href='https://twitter.com/NikuKiKai'>X</a>
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '3em'}}>
                    <a href='https://weibo.com/u/6010761304'>Weibo</a>
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '3em'}}>
                    <a href='https://photohito.com/user/159218/'>Photos</a>
                </PhysicDiv>
                <PhysicDiv engine={engineRef.current} margin={2} style={{fontSize: '3em'}}>
                    <a href='https://nikukikai.hatenablog.jp/'>Hatena(chn)</a>
                </PhysicDiv>
            </div>
        </div>
    );
}
