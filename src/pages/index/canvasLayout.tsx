import React from 'react';
import { useShallow } from 'zustand/react/shallow';

import styles from './index.module.css';
import {
    type LayoutItem,
    type CanvasLayoutProps,
    type Bounds,
} from './types';
import { ForceLayoutEngine, type ForceSolverOptions } from './canvasForceSolver';
import { EntryCard } from './EntryCard';
import { MangaRadialBackdrop } from './MangaRadialBackdrop';
import { useLayoutStore } from './layoutStore';

export type CanvasForceLayoutProps = CanvasLayoutProps & {
    forceOptions: ForceSolverOptions;
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
        minX: Math.round((minX - worldPadding)/100) * 100,
        maxX: Math.round((maxX + worldPadding)/100) * 100,
        minY: Math.round((minY - worldPadding)/100) * 100,
        maxY: Math.round((maxY + worldPadding)/100) * 100,
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


export function CanvasLayout({
    worldPadding = 360,
    viewPadding = 96,
    cameraLerp = 0.16,
    forceOptions,
    scaleLerp = 0.2,
}: CanvasForceLayoutProps) {
    const itemIds = useLayoutStore(useShallow((state) => state.layoutItems.map((item) => item.id)));

    const updateLayoutMotion = useLayoutStore((state) => state.updateLayoutMotion);
    const setItemSize = useLayoutStore((state) => state.setItemSize);

    const [bounds, setBounds] = React.useState<Bounds>(() => computeWorldBounds(useLayoutStore.getState().layoutItems, worldPadding));

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
            const layoutItems = useLayoutStore.getState().layoutItems;

            // Update motion
            engineRef.current.step(layoutItems, updateLayoutMotion);

            // Update bounds
            const bounds_ = computeWorldBounds(layoutItems, worldPadding);
            if (
                bounds.minX != bounds_.minX ||
                bounds.maxX != bounds_.maxX ||
                bounds.minY != bounds_.minY ||
                bounds.maxY != bounds_.maxY
            ) {
                setBounds(bounds_);
            }

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
    }, [cameraLerp, scaleLerp, bounds, targetCamera, updateLayoutMotion, setItemSize, worldPadding]);


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
            <MangaRadialBackdrop
                cameraX={camera.x}
                cameraY={camera.y}
                viewportWidth={viewportWidth}
                viewportHeight={viewportHeight}
            />
            <div
                className={styles.world}
                style={{
                    position: 'absolute',
                    inset: 0,
                    ...worldStyle,
                }}
            >
                {itemIds.map((id) => (
                    <EntryCard key={id} id={id} dragging={isDragging} />
                ))}
            </div>
        </div>
    );
}
