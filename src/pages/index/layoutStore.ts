import { create } from 'zustand';
import { randomReset } from './canvasForceSolver';
import type { CanvasEntry, LayoutItem } from './types';
import { ENTRIES } from './entries';

type LayoutState = {
    layoutItems: LayoutItem[];
    updateLayoutMotion: (id: string, motion: Pick<LayoutItem, 'x' | 'y' | 'vx' | 'vy' | 'repelX' | 'repelY'>) => void;
    setItemTargetScale: (id: string, targetScale: number) => void;
    setItemSize: (id: string, w: number, h: number) => void;
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

export const useLayoutStore = create<LayoutState>((set) => ({
    layoutItems: createLayoutItems(ENTRIES),
    updateLayoutMotion: (id, motion) => set((state) => ({
        layoutItems: state.layoutItems.map((item) => (item.id === id ? { ...item, ...motion } : item)),
    })),
    setItemTargetScale: (id, targetScale) => set((state) => ({
        layoutItems: state.layoutItems.map((item) => (item.id === id ? { ...item, targetScale } : item)),
    })),
    setItemSize: (id, w, h) => set((state) => ({
        layoutItems: state.layoutItems.map((item) => {
            if (item.id === id) {
                if (item.w != w || item.h != h)
                    return { ...item, w, h };
            }
            return item;
        }),
    })),
    getItemIds: () => useLayoutStore.getState().layoutItems.map((item) => item.id),
    getItemCount: () => useLayoutStore.getState().layoutItems.length,
}));

