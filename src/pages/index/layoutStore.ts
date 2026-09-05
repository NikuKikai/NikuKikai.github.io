import { create } from 'zustand';
import { randomReset } from './canvasForceSolver';
import type { CanvasEntry, LayoutItem } from './types';
import { ENTRIES } from './entries';

type LayoutState = {
    layoutItems: LayoutItem[];
    mouse: { x: number, y: number };
    camera: { x: number, y: number };
    viewportSize: { w: number, h: number };
    updateLayoutMotion: (id: string, motion: Pick<LayoutItem, 'x' | 'y' | 'vx' | 'vy' | 'repelX' | 'repelY'>) => void;
    updateItem: (id: string, patch: Partial<LayoutItem>) => void;
    setItemTargetScale: (id: string, targetScale: number) => void;
    setItemSize: (id: string, w: number, h: number) => void;
    setMouse: (x: number, y: number) => void;
    setCamera: (x: number, y: number) => void;
    setViewportSize: (w: number, h: number) => void;
    getItemIds: () => string[];
    getSpawnedItemIds: () => string[];
    getItemCount: () => number;
    getSpawnedItemCount: () => number;
    hasUnspawnedItemByCategory: (category: CanvasEntry['category']) => boolean;
    spawnRandomItemByCategory: (category: CanvasEntry['category'], sourceId: string) => void;
};

const SPAWN_ANGLE_DEVIATION = Math.PI * 0.45;

function createLayoutItem(item: CanvasEntry): LayoutItem {
    const scale = item.scale ?? 1;

    return {
        ...item,
        spawned: item.showAtStart === true,
        scale,
        targetScale: 1,
        w: item.baseWidth * scale,
        h: item.baseHeight * scale,
        x: item.fixedPosition?.x ?? 0,
        y: item.fixedPosition?.y ?? 0,
        vx: 0,
        vy: 0,
        repelX: 0,
        repelY: 0,
    };
}

function createLayoutItems(items: CanvasEntry[]): LayoutItem[] {
    const layoutItems = items.map(createLayoutItem);
    randomReset(layoutItems);

    for (const item of layoutItems) {
        if (item.fixedPosition) {
            item.x = item.fixedPosition.x;
            item.y = item.fixedPosition.y;
        }
    }

    return layoutItems;
}

export const useLayoutStore = create<LayoutState>((set, get) => ({
    layoutItems: createLayoutItems(ENTRIES),
    mouse: { x: 0, y: 0 },
    camera: { x: 0, y: 0 },
    viewportSize: { w: 0, h: 0 },
    updateLayoutMotion: (id, motion) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id && item.spawned ? { ...item, ...motion } : item)),
    })),
    updateItem: (id, patch) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id && item.spawned ? { ...item, ...patch } : item)),
    })),
    setItemTargetScale: (id, targetScale) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id && item.spawned ? { ...item, targetScale } : item)),
    })),
    setItemSize: (id, w, h) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => {
            if (item.id === id && item.spawned) {
                if (item.w != w || item.h != h)
                    return { ...item, w, h };
            }
            return item;
        }),
    })),
    setMouse: (x, y) => set((state) => ({
        ...state,
        mouse: { x, y },
    })),
    setCamera: (x, y) => set((state) => ({
        ...state,
        camera: { x, y },
    })),
    setViewportSize: (w, h) => set((state) => ({
        ...state,
        viewportSize: { w, h },
    })),
    getItemIds: () => get().layoutItems.map((item) => item.id),
    getSpawnedItemIds: () => get().layoutItems.filter((item) => item.spawned).map((item) => item.id),
    getItemCount: () => get().layoutItems.length,
    getSpawnedItemCount: () => get().layoutItems.filter((item) => item.spawned).length,
    hasUnspawnedItemByCategory: (category) => get().layoutItems.some((item) => item.category === category && !item.spawned),
    spawnRandomItemByCategory: (category, sourceId) => set((state) => {
        const source = state.layoutItems.find((item) => item.id === sourceId && item.spawned);
        const candidates = state.layoutItems.filter((item) => item.category === category && !item.spawned);
        const selected = candidates[Math.floor(Math.random() * candidates.length)];

        if (!source || !selected) {
            return state;
        }

        const scale = selected.scale ?? 1;
        const origin = getSpawnPoint(source, selected.spawnAngle);

        return {
            ...state,
            layoutItems: state.layoutItems.map((item) => (
                item.id === selected.id
                    ? {
                        ...item,
                        spawned: true,
                        x: origin.x,
                        y: origin.y,
                        vx: 0,
                        vy: 0,
                        repelX: 0,
                        repelY: 0,
                        scale,
                        targetScale: 1,
                        w: item.baseWidth * scale,
                        h: item.baseHeight * scale,
                    }
                    : item
            )),
        };
    }),
}));

function getSpawnPoint(source: LayoutItem, angleBias = 0) {
    const angle = angleBias * Math.PI / 180 + randomNormal() * SPAWN_ANGLE_DEVIATION;
    const radius = Math.max(source.w, source.h) / 2;

    return {
        x: source.x + Math.cos(angle) * radius,
        y: source.y + Math.sin(angle) * radius,
    };
}

function randomNormal() {
    return Math.sqrt(-2 * Math.log(Math.max(Number.MIN_VALUE, Math.random()))) * Math.cos(2 * Math.PI * Math.random());
}
