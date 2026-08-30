
import { type CanvasEntry } from './types';

export const ENTRIES: CanvasEntry[] = [
    {
        id: 'profile',
        title: 'NIKUKIKAI',
        href: '#',
        type: 'link',
        category: 'links',
        baseWidth: 332,
        baseHeight: 252,
        description: 'Personal profile at the center of stacked comic frames.',
        fixed: true,
        fixedPosition: { x: 0, y: 0 },
        attractStrength: 1.0,
    },
    {
        id: 'komas', title: 'KOMAs', href: '/komaTrials', type: 'manga', category: 'manga', baseWidth: 236, baseHeight: 168, description: 'Experimental one-page works about the comic panel.'
    },
    {
        id: 'null1',
        title: 'NULL1',
        href: '/null1',
        type: 'manga',
        category: 'manga',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Short comic page entry.'
    },
    {
        id: 'null2',
        title: 'NULL2',
        href: '/null2',
        type: 'manga',
        category: 'manga',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Short comic page entry.'
    },
    {
        id: 'q',
        title: 'Q',
        href: '/Q',
        type: 'manga',
        category: 'manga',
        baseWidth: 236,
        baseHeight: 168,
        description: 'Circular page composition and reading experiment.'
    },
    {
        id: 'ugly-yuri',
        title: 'UglyYuri',
        href: '/UglyYuri',
        type: 'manga',
        category: 'manga',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Comic work entry.'
    },
    {
        id: 'x',
        title: 'X',
        href: 'https://x.com/NikuKiKai',
        target: '_blank',
        type: 'link',
        category: 'links',
        baseWidth: 168,
        baseHeight: 116,
        description: 'Short updates and public notes.'
    },
    {
        id: 'photo',
        title: 'PHOTO',
        href: 'https://photohito.com/user/159218/',
        target: '_blank',
        type: 'link',
        category: 'links',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Photography archive.'
    },
    {
        id: 'blog',
        title: 'BLOG',
        href: 'https://nikukikai.hatenablog.jp/',
        target: '_blank',
        type: 'link',
        category: 'links',
        baseWidth: 198,
        baseHeight: 138,
        subtitle: 'CHN',
        description: 'Longer Chinese writing.'
    }];