import { type LayoutItem, type Vector2 } from './types';

export type ForceSolverOptions = {
    gap: number;
    dt?: number;
    damping?: number;
    buffer?: number;
    iterationsPerStep?: number;
    initialIterations?: number;
    pairForce?: number;
    maxSpeed?: number;
};

function scale(vector: Vector2, factor: number) {
    return { x: vector.x * factor, y: vector.y * factor };
}

function clampLength(vector: Vector2, maxLength: number) {
    const length = Math.hypot(vector.x, vector.y);
    if (!length || length <= maxLength) {
        return vector;
    }

    return scale(vector, maxLength / length);
}

function axisGapForce(distance: number, halfSpan: number, gap: number, buffer: number, pairForce: number) {
    const gapValue = Math.abs(distance) - halfSpan;
    const sign = distance >= 0 ? 1 : -1;

    if (gapValue < gap) {
        return sign * (gap - gapValue) * pairForce;
    }

    if (gapValue < gap + buffer) {
        const normalized = 1 - (gapValue - gap) / Math.max(buffer, 0.001);
        return sign * normalized * pairForce;
    }

    return 0;
}

function attract(self: LayoutItem, other: LayoutItem) {
    const dx = other.x - self.x;
    const dy = other.y - self.y;
    const gapX = Math.max(0, Math.abs(dx) - (self.w + other.w) / 2);
    const gapY = Math.max(0, Math.abs(dy) - (self.h + other.h) / 2);
    const signX = dx >= 0 ? 1 : -1;
    const signY = dy >= 0 ? 1 : -1;

    return {
        x: signX * gapX * (other.attractStrength ?? 0),
        y: signY * gapY * (other.attractStrength ?? 0),
    };
}

export function randomReset(items: LayoutItem[]) {
    const center = { x: 0, y: 0 };

    for (const item of items) {
        if (item.fixed && item.fixedPosition) {
            item.x = item.fixedPosition.x;
            item.y = item.fixedPosition.y;
        }
        else if (!Number.isFinite(item.x) || !Number.isFinite(item.y) || (item.x === 0 && item.y === 0)) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 180 + Math.random() * 260;
            item.x = center.x + Math.cos(angle) * radius;
            item.y = center.y + Math.sin(angle) * radius;
        }

        item.vx = 0;
        item.vy = 0;
        item.repelX = 0;
        item.repelY = 0;
    }
}

export class ForceLayoutEngine {
    private options: ForceSolverOptions;

    constructor(options: ForceSolverOptions) {
        this.options = options;
    }

    updateOptions(options: ForceSolverOptions) {
        this.options = options;
    }

    step(items: LayoutItem[]) {
        const gap = this.options.gap;
        const dt = this.options.dt ?? 0.2;
        const damping = this.options.damping ?? 0.82;
        const buffer = this.options.buffer ?? gap;
        const iterationsPerStep = this.options.iterationsPerStep ?? 1;
        const pairForce = this.options.pairForce ?? 0.35;
        const maxSpeed = this.options.maxSpeed ?? 12;

        for (let iteration = 0; iteration < iterationsPerStep; iteration += 1) {
            const next = new Map<string, { x: number; y: number; vx: number; vy: number; repelX: number; repelY: number }>();

            for (const item of items) {
                if (item.fixed) {
                    const point = item.fixedPosition ?? { x: item.x, y: item.y };
                    next.set(item.id, {
                        x: point.x,
                        y: point.y,
                        vx: 0,
                        vy: 0,
                        repelX: 0,
                        repelY: 0,
                    });
                    continue;
                }

                let attractX = 0;
                let attractY = 0;
                let repelX = 0;
                let repelY = 0;
                let repelCountX = 0;
                let repelCountY = 0;

                for (const other of items) {
                    if (other.id === item.id) {
                        continue;
                    }

                    // Attraction
                    const att = attract(item, other);
                    attractX += att.x;
                    attractY += att.y;


                    const gapX = Math.abs(item.x - other.x) - (item.w + other.w) / 2;
                    const gapY = Math.abs(item.y - other.y) - (item.h + other.h) / 2;
                    if (gapX >= gap + buffer || gapY >= gap + buffer) {
                        continue;
                    }

                    if (gapX >= gapY) {
                        repelX += axisGapForce(item.x - other.x, (item.w + other.w) / 2, gap, buffer, pairForce);
                        repelCountX += 1;
                    }
                    else {
                        repelY += axisGapForce(item.y - other.y, (item.h + other.h) / 2, gap, buffer, pairForce);
                        repelCountY += 1;
                    }
                }

                if (repelCountX > 0) {
                    repelX /= repelCountX;
                }
                if (repelCountY > 0) {
                    repelY /= repelCountY;
                }

                if (attractX * repelX < 0) {
                    attractX = 0;
                }
                if (attractY * repelY < 0) {
                    attractY = 0;
                }

                const velocity = clampLength({
                    x: item.vx * damping + (attractX + repelX) * (1 - damping),
                    y: item.vy * damping + (attractY + repelY) * (1 - damping),
                }, maxSpeed);

                next.set(item.id, {
                    x: item.x + velocity.x * dt,
                    y: item.y + velocity.y * dt,
                    vx: velocity.x,
                    vy: velocity.y,
                    repelX,
                    repelY,
                });
            }

            for (const item of items) {
                const resolved = next.get(item.id);
                if (!resolved) {
                    continue;
                }

                item.x = resolved.x;
                item.y = resolved.y;
                item.vx = resolved.vx;
                item.vy = resolved.vy;
                item.repelX = resolved.repelX;
                item.repelY = resolved.repelY;
            }
        }
    }
}
