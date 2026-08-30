import React from 'react';

export type Vector2 = {
    x: number;
    y: number;
};

export type Bounds = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};


type EntryType = 'manga' | 'link';
type CategoryKey = 'manga' | 'links';

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
    manga: 'MANGA',
    links: 'LINK',
};

export type CanvasEntry = {
    id: string;
    title: string;
    href: string;
    type: EntryType;
    category: CategoryKey;
    baseWidth: number;
    baseHeight: number;
    scale?: number;
    subtitle?: string;
    description: string;
    target?: React.HTMLAttributeAnchorTarget;
    fixed?: boolean;
    fixedPosition?: { x: number; y: number };
    attractStrength?: number;
};

// Layout items keep both content fields and persistent runtime state in one shape.
export type LayoutItem = CanvasEntry & {
    targetScale: number;
    w: number;
    h: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    repelX: number;
    repelY: number;
};

export type CanvasLayoutProps = {
    items: CanvasEntry[];
    worldPadding?: number;
    viewPadding?: number;
    cameraLerp?: number;
    className?: string;
    draggingClassName?: string;
    worldClassName?: string;
};
