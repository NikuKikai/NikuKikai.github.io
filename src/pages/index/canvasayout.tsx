import React from 'react';
import styles from './index.module.css';
import {
    type LayoutItem,
    type CanvasLayoutProps,
    type Vector2,
    type CanvasEntry,
    type Bounds,
} from './types';
import { ForceLayoutEngine, type ForceSolverOptions, randomReset } from './canvasForceSolver';
import { EntryCard } from './EntryCard';

export type CanvasForceLayoutProps = CanvasLayoutProps & {
    forceOptions: ForceSolverOptions;
    hoverScale?: number;
    scaleLerp?: number;
};

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

const DRAG_START_DISTANCE = 3;

function computeWorldBounds(items: LayoutItem[], worldPadding: number): Bounds {
    let minX = 0;
    let maxX = 0;
    let minY = 0;
    let maxY = 0;

    for (const rect of items) {
        minX = Math.min(minX, rect.x - rect.w / 2);
        maxX = Math.max(maxX, rect.x + rect.w / 2);
        minY = Math.min(minY, rect.y - rect.h / 2);
        maxY = Math.max(maxY, rect.y + rect.h / 2);
    }

    return {
        minX: minX - worldPadding,
        maxX: maxX + worldPadding,
        minY: minY - worldPadding,
        maxY: maxY + worldPadding,
    };
}

function resistCamera(value: number, attempted: number, viewSize: number, minWorld: number, maxWorld: number, viewPadding: number) {
    const half = Math.max(0, viewSize / 2 - viewPadding);
    const minCamera = minWorld + half;
    const maxCamera = maxWorld - half;

    if (minCamera > maxCamera) {
        return value;
    }

    if (attempted < minCamera && attempted < value) {
        return value;
    }

    if (attempted > maxCamera && attempted > value) {
        return value;
    }

    return clamp(attempted, minCamera, maxCamera);
}

function DebugRepelArrow({ repel }: { repel: Vector2 }) {
    const length = Math.hypot(repel.x, repel.y);
    const angle = Math.atan2(repel.y, repel.x);
    const shaftLength = Math.max(12, Math.min(72, length * 18));

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 0,
                height: 0,
                pointerEvents: 'none',
                zIndex: 50,
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: 0,
                    height: 0,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: shaftLength,
                        transformOrigin: '0 50%',
                        transform: `rotate(${angle}rad)`,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: -1,
                            width: shaftLength,
                            height: 2,
                            background: '#d11',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            right: -1,
                            top: -4,
                            width: 0,
                            height: 0,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                            borderLeft: '8px solid #d11',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function createLayoutItems(items: CanvasEntry[]): LayoutItem[] {
    const layoutItems = items.map((item) => ({
        ...item,
        scale: item.scale ?? 1,
        targetScale: 1,
        w: item.baseWidth * (item.scale ?? 1),
        h: item.baseHeight * (item.scale ?? 1),
        x: item.fixedPosition?.x ?? 0,
        y: item.fixedPosition?.y ?? 0,
        vx: 0,
        vy: 0,
        repelX: 0,
        repelY: 0,
    }));
    randomReset(layoutItems);
    return layoutItems;
}

export function CanvasForceLayout({
    items,
    worldPadding = 360,
    viewPadding = 96,
    cameraLerp = 0.16,
    forceOptions,
    hoverScale = 1.12,
    scaleLerp = 0.2,
}: CanvasForceLayoutProps) {
    const [hoveredId, setHoveredId] = React.useState<string | null>(null);
    const [layoutItems] = React.useState<LayoutItem[]>(() => createLayoutItems(items));
    const [bounds, setBounds] = React.useState<Bounds>(() => computeWorldBounds(layoutItems, worldPadding));
    const boundsRef = React.useRef(bounds);
    const viewportRef = React.useRef<HTMLDivElement>(null);
    const animationRef = React.useRef<number | null>(null);
    const dragState = React.useRef<{
        pointerId: number;
        startX: number;
        startY: number;
        startTargetX: number;
        startTargetY: number;
        active: boolean;
    } | null>(null);
    const [{ width: viewportWidth, height: viewportHeight }, setViewport] = React.useState({
        width: 0,
        height: 0,
    });
    const [targetCamera, setTargetCamera] = React.useState({ x: 0, y: 0 });
    const [camera, setCamera] = React.useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = React.useState(false);
    const [, setTick] = React.useState(0);
    const engineRef = React.useRef(new ForceLayoutEngine(forceOptions));

    boundsRef.current = bounds;

    React.useEffect(() => {
        const updateViewport = () => {
            if (!viewportRef.current) {
                return;
            }

            setViewport({
                width: viewportRef.current.clientWidth,
                height: viewportRef.current.clientHeight,
            });
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);

        return () => {
            window.removeEventListener('resize', updateViewport);
        };
    }, []);

    React.useEffect(() => {
        engineRef.current.updateOptions(forceOptions);
    }, [forceOptions]);

    React.useEffect(() => {
        const tick = () => {
            // Scale interpolation stays in the same runtime items as physics so size changes remain continuous.
            for (const item of layoutItems) {
                item.scale = item.scale ?? 1;
                const nextScale = item.scale + (item.targetScale - item.scale) * scaleLerp;
                item.scale = Math.abs(item.targetScale - nextScale) < 0.001 ? item.targetScale : nextScale;
                item.w = item.baseWidth * item.scale;
                item.h = item.baseHeight * item.scale;
            }

            engineRef.current.step(layoutItems);
            setBounds(computeWorldBounds(layoutItems, worldPadding));
            setTick((value) => value + 1);

            setCamera((prev) => {
                const dx = targetCamera.x - prev.x;
                const dy = targetCamera.y - prev.y;

                if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
                    return targetCamera;
                }

                return {
                    x: prev.x + dx * cameraLerp,
                    y: prev.y + dy * cameraLerp,
                };
            });

            animationRef.current = window.requestAnimationFrame(tick);
        };

        animationRef.current = window.requestAnimationFrame(tick);

        return () => {
            if (animationRef.current !== null) {
                window.cancelAnimationFrame(animationRef.current);
            }
        };
    }, [cameraLerp, layoutItems, scaleLerp, targetCamera, worldPadding]);

    const setHoveredScale = React.useCallback((id: string | null) => {
        // Hover only changes target scale; the actual size is advanced numerically in the frame loop.
        for (const item of layoutItems) {
            item.targetScale = item.fixed ? 1 : (item.id === id ? hoverScale : 1);
        }

        setHoveredId(id);
        setTick((value) => value + 1);
    }, [hoverScale, layoutItems]);

    const setResistedTargetCamera = React.useCallback(
        (nextX: number, nextY: number) => {
            if (!viewportWidth || !viewportHeight) {
                return;
            }

            const currentBounds = boundsRef.current;
            setTargetCamera((prev) => ({
                x: resistCamera(prev.x, nextX, viewportWidth, currentBounds.minX, currentBounds.maxX, viewPadding),
                y: resistCamera(prev.y, nextY, viewportHeight, currentBounds.minY, currentBounds.maxY, viewPadding),
            }));
        },
        [viewPadding, viewportHeight, viewportWidth],
    );

    const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.button !== 0) {
            return;
        }

        dragState.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            startTargetX: targetCamera.x,
            startTargetY: targetCamera.y,
            active: false,
        };
        setIsDragging(false);
    };

    const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        if (!drag || drag.pointerId !== event.pointerId) {
            return;
        }

        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;

        if (!drag.active && Math.hypot(dx, dy) <= DRAG_START_DISTANCE) {
            return;
        }

        if (!drag.active) {
            drag.active = true;
            setIsDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
        }

        event.preventDefault();
        if (!isDragging) {
            setIsDragging(true);
        }

        setResistedTargetCamera(drag.startTargetX - dx, drag.startTargetY - dy);
    };

    const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        if (!drag || drag.pointerId !== event.pointerId) {
            return;
        }

        dragState.current = null;
        setTimeout(() => setIsDragging(false), 0);
        if (drag.active && event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };

    const worldStyle = React.useMemo(
        () => ({
            transform: `translate(${viewportWidth / 2 - camera.x}px, ${viewportHeight / 2 - camera.y}px)`,
        }),
        [camera.x, camera.y, viewportHeight, viewportWidth],
    );

    return (
        <div
            ref={viewportRef}
            className={isDragging && styles.dragging ? `${styles.viewport ?? ''} ${styles.dragging}`.trim() : styles.viewport}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
        >
            <div
                className={styles.world}
                style={{
                    position: 'absolute',
                    inset: 0,
                    ...worldStyle,
                }}
            >
                {layoutItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            left: item.x - item.w / 2,
                            top: item.y - item.h / 2,
                            width: item.w,
                            height: item.h,
                        }}
                        onPointerEnter={() => setHoveredScale(item.id)}
                        onPointerLeave={() => {
                            if (hoveredId === item.id) {
                                setHoveredScale(null);
                            }
                        }}
                    >
                        <DebugRepelArrow repel={{ x: item.repelX, y: item.repelY }} />
                        <EntryCard item={item} hovered={hoveredId === item.id} dragging={isDragging} />
                    </div>
                ))}
            </div>
        </div>
    );
}
