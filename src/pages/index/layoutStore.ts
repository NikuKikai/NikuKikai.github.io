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
    getItemCount: () => number;
};

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

export const useLayoutStore = create<LayoutState>((set, get) => ({
    layoutItems: createLayoutItems(ENTRIES),
    mouse: { x: 0, y: 0 },
    camera: { x: 0, y: 0 },
    viewportSize: { w: 0, h: 0 },
    updateLayoutMotion: (id, motion) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id ? { ...item, ...motion } : item)),
    })),
    updateItem: (id, patch) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    })),
    setItemTargetScale: (id, targetScale) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => (item.id === id ? { ...item, targetScale } : item)),
    })),
    setItemSize: (id, w, h) => set((state) => ({
        ...state,
        layoutItems: state.layoutItems.map((item) => {
            if (item.id === id) {
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
    getItemCount: () => get().layoutItems.length,
}));
