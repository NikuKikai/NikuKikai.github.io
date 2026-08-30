
import { type CanvasEntry } from './types';

export const ENTRIES: CanvasEntry[] = [
    {
        id: 'profile',
        title: 'NIKUKIKAI',
        href: '#',
        cardType: 'info',
        category: 'link',
        baseWidth: 332,
        baseHeight: 240,
        description: '',
        fixed: true,
        fixedPosition: { x: 0, y: 0 },
        attractStrength: 1.0,
    },
    {
        id: 'komas',
        title: 'KOMAs',
        href: '/komaTrials',
        cardType: 'manga',
        category: 'manga',
        baseWidth: 236,
        baseHeight: 168,
        description: 'Experimental one-page works about the comic panel.'
    },
    {
        id: 'null1',
        title: 'NULL1',
        href: '/null1',
        cardType: 'manga',
        category: 'manga',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Short comic page entry.'
    },
    {
        id: 'null2',
        title: 'NULL2',
        href: '/null2',
        cardType: 'manga',
        category: 'manga',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Short comic page entry.'
    },
    {
        id: 'q',
        title: 'Q',
        href: '/Q',
        cardType: 'manga',
        category: 'manga',
        baseWidth: 200,
        baseHeight: 200,
        description: 'Circular page composition and reading experiment.',
        img: '/assets/Q/cover.png',
    },
    {
        id: 'ugly-yuri',
        title: 'UglyYuri',
        href: '/UglyYuri',
        cardType: 'manga',
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
        cardType: 'link',
        category: 'link',
        baseWidth: 168,
        baseHeight: 116,
        description: 'Short updates and public notes.'
    },
    {
        id: 'photo',
        title: 'PHOTO',
        href: 'https://photohito.com/user/159218/',
        target: '_blank',
        cardType: 'link',
        category: 'link',
        baseWidth: 198,
        baseHeight: 138,
        description: 'Photography archive.'
    },
    {
        id: 'blog',
        title: 'BLOG',
        href: 'https://nikukikai.hatenablog.jp/',
        target: '_blank',
        cardType: 'link',
        category: 'link',
        baseWidth: 198,
        baseHeight: 138,
        subtitle: 'CHN',
        description: 'Longer Chinese writing.'
    }];