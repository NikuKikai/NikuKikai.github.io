
Dev (has Fast Refresh rebuilding overhead):
`npm run dev`

Build:
`npm run build`

Deploy (future):
`npm run deploy`.

Ref: https://note.com/wecken/n/n73196eb22a51#63cc4479-2e90-43c9-a508-a64dd0873fd3


## MEMO

### for onnx

1. add following settings

```
export default defineConfig({
  ...,

  assetsInclude: ["**/*.onnx"],
  optimizeDeps: {
    exclude: ["onnxruntime-web"],
  },
})
```

2. declare type

```
// create whatever.d.ts and input
declare module 'onnxruntime-web';
```

### local css

1. decale type in whatever.d.ts
```
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
```

2. Rename the .css as .module.css
3. In .tsx, `import styles from 'XXX.module.css'`, and use it like `className={styles.XXX}`

### SSG (in order to deploy on github pages, generate html for each page)

Use `vike`
https://vike.dev/add ,
`vike-react`
https://vike.dev/vike-react

Refer to vike-react examples for file structure: https://github.com/vikejs/vike-react/tree/main/examples/minimal .