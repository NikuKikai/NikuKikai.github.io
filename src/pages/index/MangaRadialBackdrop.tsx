import React from 'react';
import type { Bounds } from './types';

type MangaRadialBackdropProps = {
    bounds: Bounds;
    padding?: number;
    gridSize?: number;
    centerX?: number;
    centerY?: number;
    whiteRadius?: number;
    fadeRadius?: number;
    maxDotScale?: number;
};

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function snapDown(value: number, step: number) {
    return Math.floor(value / step) * step;
}

function snapUp(value: number, step: number) {
    return Math.ceil(value / step) * step;
}

export function MangaRadialBackdrop({
    bounds,
    padding = 320,
    gridSize = 12,
    centerX = 0,
    centerY = 0,
    whiteRadius = 120,
    fadeRadius = 700,
    maxDotScale = 1.3,
}: MangaRadialBackdropProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const snapStep = gridSize * 8;
    const originX = snapDown(bounds.minX - padding, snapStep);
    const originY = snapDown(bounds.minY - padding, snapStep);
    const width = Math.max(gridSize, snapUp(bounds.maxX + padding - originX, snapStep));
    const height = Math.max(gridSize, snapUp(bounds.maxY + padding - originY, snapStep));

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        const pixelWidth = Math.max(1, Math.round(width * dpr));
        const pixelHeight = Math.max(1, Math.round(height * dpr));

        if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
            canvas.width = pixelWidth;
            canvas.height = pixelHeight;
        }

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, pixelWidth, pixelHeight);
        context.scale(dpr, dpr);
        context.fillStyle = '#fff';
        context.fillRect(0, 0, width, height);
        context.fillStyle = '#111';

        const startX = snapDown(originX, gridSize);
        const endX = snapUp(originX + width, gridSize);
        const startY = snapDown(originY, gridSize);
        const endY = snapUp(originY + height, gridSize);
        const maxRadius = gridSize * 0.5 * maxDotScale;

        for (let y = startY; y <= endY; y += gridSize) {
            for (let x = startX; x <= endX; x += gridSize) {
                const distance = Math.hypot(x - centerX, y - centerY);
                const t = clamp((distance - whiteRadius) / fadeRadius, 0, 1);

                if (t <= 0.001) {
                    continue;
                }

                const radius = maxRadius * (1 - Math.pow(1 - t, 2.2));
                context.beginPath();
                context.arc(x - originX, y - originY, radius, 0, Math.PI * 2);
                context.fill();
            }
        }
    }, [centerX, centerY, fadeRadius, gridSize, height, maxDotScale, originX, originY, whiteRadius, width]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'absolute',
                left: originX,
                top: originY,
                width,
                height,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
