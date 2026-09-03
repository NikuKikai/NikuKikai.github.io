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


type CardType = 'info' | 'book' | 'cd' | 'link' | 'web';
type Category = 'manga' | 'link' | 'essay';


export type CanvasEntry = {
    id: string;
    cardType: CardType;
    category: Category;

    // Content
    title: string;
    target?: React.HTMLAttributeAnchorTarget;
    href: string;
    subtitle?: string;
    description: string;
    img?: string;

    // Geometry
    baseWidth: number;
    baseHeight: number;
    scale?: number;
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
    worldPadding?: number;
    viewPadding?: number;
    cameraLerp?: number;
    className?: string;
    draggingClassName?: string;
    worldClassName?: string;
};
