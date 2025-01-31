
Dev (has Fast Refresh rebuilding overhead):
`npm run dev`

Build:
`npm run build`

Dev (without overhead, run after build)
`npx serve@latest out` (`npm run serve` for short)

Deploy (future):
`npm run deploy`.

Ref: https://note.com/wecken/n/n73196eb22a51#63cc4479-2e90-43c9-a508-a64dd0873fd3


## MEMO

- add `CNAME` to `/public`.
- add empty `.nojekyll` to `/public` to bypass github page jekyll processing which prevent `_next` folder being copied. Otherwise js and css are missing.
  - also need to modify `scripts` in `package.json`: `"deploy": "gh-pages --dotfiles -d out"`
- add `'use client'` on top of each page and layout(maybe).
- to import custom packages in client mode:
    ```
    import dynamic from 'next/dynamic';
    const MangaViewer = dynamic(() => import('react-manga-viewer'), {
        ssr: false, // Disable SSR for this component
    });
    ```