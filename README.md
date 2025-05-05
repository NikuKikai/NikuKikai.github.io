
Dev (has Fast Refresh rebuilding overhead):
`npm run dev`

Build:
`npm run build`

Deploy (future):
`npm run deploy`.

Ref: https://note.com/wecken/n/n73196eb22a51#63cc4479-2e90-43c9-a508-a64dd0873fd3


## MEMO

#### for onnx

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