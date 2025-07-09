var jh=Object.defineProperty;var Kh=(e,t,r)=>t in e?jh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var fs=(e,t,r)=>Kh(e,typeof t!="symbol"?t+"":t,r);import{R as Ve,a as Xh,j as be,i as Zh,L as Qh,o as Yh}from"../chunks/chunk-CbnBOpE4.js";/* empty css                      */import"../chunks/chunk-2C7rdSYH.js";/* empty css                      *//*!
 * ONNX Runtime Web v1.21.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var va=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,em=Object.getOwnPropertyNames,tm=Object.prototype.hasOwnProperty,rm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),dr=(e,t)=>{for(var r in t)va(e,r,{get:t[r],enumerable:!0})},im=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of em(t))!tm.call(e,n)&&n!==r&&va(e,n,{get:()=>t[n],enumerable:!(a=Jh(t,n))||a.enumerable});return e},Pr=e=>im(va({},"__esModule",{value:!0}),e),Xt,ht,Ut,hs,jl,Kl=P(()=>{Xt=new Map,ht=[],Ut=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Xt.get(e);if(a===void 0)Xt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=ht.indexOf(e);n!==-1&&ht.splice(n,1);for(let i=0;i<ht.length;i++)if(Xt.get(ht[i]).priority<=r){ht.splice(i,0,e);return}ht.push(e)}return}throw new TypeError("not a valid backend")},hs=async e=>{let t=Xt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},jl=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?ht:r,n,i=[],s=new Set;for(let l of a){let d=await hs(l);typeof d=="string"?i.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of i)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),am=P(()=>{Kl()}),Xl,nm=P(()=>{Xl="1.21.1"}),fi,Ge,Zl=P(()=>{nm(),fi="warning",Ge={wasm:{},webgl:{},webgpu:{},versions:{common:Xl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);fi=e}},get logLevel(){return fi}},Object.defineProperty(Ge,"logLevel",{enumerable:!0})}),_e,sm=P(()=>{Zl(),_e=Ge}),Ql,Yl,om=P(()=>{Ql=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=i*n,f=0,h=c,g=c*2,y=-1;s==="RGBA"?(f=0,h=c,g=c*2,y=c*3):s==="RGB"?(f=0,h=c,g=c*2):s==="RBG"&&(f=0,g=c,h=c*2);for(let b=0;b<i;b++)for(let x=0;x<n;x++){let $=(e.data[f++]-d[0])*l[0],w=(e.data[h++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],k=y===-1?255:(e.data[y++]-d[3])*l[3];a.fillStyle="rgba("+$+","+w+","+S+","+k+")",a.fillRect(x,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],s=e.dims[3]):(n=e.dims[3],i=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=i*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,y=1,b=2,x=3,$=0,w=f,S=f*2,k=-1;u==="RGBA"?($=0,w=f,S=f*2,k=f*3):u==="RGB"?($=0,w=f,S=f*2):u==="RBG"&&($=0,S=f,w=f*2),a=r.createImageData(n,i);for(let T=0;T<i*n;g+=h,y+=h,b+=h,x+=h,T++)a.data[g]=(e.data[$++]-c[0])*d[0],a.data[y]=(e.data[w++]-c[1])*d[1],a.data[b]=(e.data[S++]-c[2])*d[2],a.data[x]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),vr,Jl,ed,td,rd,id,um=P(()=>{xa(),vr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,s;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,g=1,y=2,b=3,x=0,$=d,w=d*2,S=-1;u==="RGB"&&(f=3,h=0,g=1,y=2,b=-1),l==="RGBA"?S=d*3:l==="RBG"?(x=0,w=d,$=d*2):l==="BGR"&&(w=0,$=d,x=d*2);for(let k=0;k<d;k++,h+=f,y+=f,g+=f,b+=f)c[x++]=(e[h]+s[0])/i[0],c[$++]=(e[g]+s[1])/i[1],c[w++]=(e[y]+s[2])/i[2],S!==-1&&b!==-1&&(c[S++]=(e[b]+s[3])/i[3]);return l==="RGBA"?new Pe("float32",c,[1,4,r,a]):new Pe("float32",c,[1,3,r,a])},Jl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=h,u.width=g}else u.tensorFormat="RGBA",u.height=h,u.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let g=d(h);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;return f.drawImage(e,0,0,g,h),s=f.getImageData(0,0,g,h).data,u.height=h,u.width=g,vr(s,u)}else throw new Error("Can not access image data")}else{if(i)return new Promise((c,f)=>{let h=l(),g=d(h);if(!e||!g)return f();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{h.width=y.width,h.height=y.height,g.drawImage(y,0,0,h.width,h.height);let b=g.getImageData(0,0,h.width,h.height);u.height=h.height,u.width=h.width,c(vr(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return vr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},ed=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,s=[1,a,r,4];return new Pe({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:i})},td=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Pe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},rd=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Pe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},id=(e,t,r)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),It,ar,hi,ad,lm=P(()=>{It=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ar=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),hi=!1,ad=()=>{if(!hi){hi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(It.set("int64",BigInt64Array),ar.set(BigInt64Array,"int64")),t&&(It.set("uint64",BigUint64Array),ar.set(BigUint64Array,"uint64")),a?(It.set("float16",r),ar.set(r,"float16")):It.set("float16",Uint16Array)}}}),nd,sd,dm=P(()=>{xa(),nd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},sd=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,xa=P(()=>{om(),um(),lm(),dm(),Pe=class{constructor(e,t,r){ad();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=It.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(a=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=It.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",s=e;else if(l==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let l=ar.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let i=nd(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return Jl(e,t)}static fromTexture(e,t){return ed(e,t)}static fromGpuBuffer(e,t){return td(e,t)}static fromMLTensor(e,t){return rd(e,t)}static fromPinnedBuffer(e,t,r){return id(e,t,r)}toDataURL(e){return Ql(this,e)}toImageData(e){return Yl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return sd(this,e)}}}),Ue,od=P(()=>{xa(),Ue=Pe}),Ur,mi,rt,Ze,ud=P(()=>{Zl(),Ur=(e,t)=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.timeStamp(`${e}::ORT::${t}`)},mi=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Ur("CPU",s);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},rt=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||mi("BEGIN",e)},Ze=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||mi("END",e)}}),ld,pm=P(()=>{Kl(),od(),ud(),ld=class dd{constructor(t){this.handler=t}async run(t,r,a){rt();let n={},i={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Ue)&&(d=!0,s=!1,n[f]=h)}if(d){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,i),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Ue?l[d]=c:l[d]=new Ue(c.type,c.data,c.dims)}return Ze(),l}async release(){return this.handler.dispose()}static async create(t,r,a,n){rt();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof a=="number"){if(h=a,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await jl(s),d=await u.createInferenceSessionHandler(i,l);return Ze(),new dd(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),ka,cm=P(()=>{pm(),ka=ld}),fm=P(()=>{}),hm=P(()=>{}),mm=P(()=>{}),gm=P(()=>{}),ym={};dr(ym,{InferenceSession:()=>ka,TRACE:()=>Ur,TRACE_FUNC_BEGIN:()=>rt,TRACE_FUNC_END:()=>Ze,Tensor:()=>Ue,env:()=>_e,registerBackend:()=>Ut});var Qe=P(()=>{am(),sm(),cm(),od(),fm(),hm(),ud(),mm(),gm()}),Sa=P(()=>{}),pd={};dr(pd,{default:()=>cd});var gi,yi,cd,_m=P(()=>{var e;gf(),Rt(),Ta(),gi="ort-wasm-proxy-worker",yi=((e=globalThis.self)==null?void 0:e.name)===gi,yi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Ia(a.wasm).then(()=>{Ha(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;Fa(i,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=a,i=Hr(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;ja(n,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Ka(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:u,options:l}=a;Xa(n,i,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Qa([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Za(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),cd=yi?null:t=>new Worker(t??Ne,{type:"module",name:gi})}),fd={};dr(fd,{default:()=>hd});var _i,bi,hd,ms,bm=P(()=>{var e,t;bi=(_i=import.meta.url,async function(r={}){var cs;var a,n,i=r,s=new Promise((o,p)=>{a=o,n=p}),u=typeof window=="object",l=typeof WorkerGlobalScope<"u",d=l&&((cs=self.name)==null?void 0:cs.startsWith("em-pthread"));i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let f=()=>{let o=(m,_,v)=>(...I)=>{let O=Je,M=_==null?void 0:_();I=m(...I);let W=_==null?void 0:_();return M!==W&&(m=W,v(M),_=v=null),Je!=O?new Promise((V,te)=>{ni={resolve:V,reject:te}}):I},p=m=>async(..._)=>{var v;try{if(i.Gb)throw Error("Session already started");let I=i.Gb={fc:_[0],errors:[]},O=await m(..._);if(i.Gb!==I)throw Error("Session mismatch");(v=i.Hb)==null||v.flush();let M=I.errors;if(0<M.length){let W=await Promise.all(M);if(W=W.filter(V=>V),0<W.length)throw Error(W.join(`
`))}return O}finally{i.Gb=null}};i._OrtCreateSession=o(i._OrtCreateSession,()=>i._OrtCreateSession,m=>i._OrtCreateSession=m),i._OrtRun=p(o(i._OrtRun,()=>i._OrtRun,m=>i._OrtRun=m)),i._OrtRunWithBinding=p(o(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,m=>i._OrtRunWithBinding=m)),i._OrtBindInput=o(i._OrtBindInput,()=>i._OrtBindInput,m=>i._OrtBindInput=m),f=void 0};i.jsepInit=(o,p)=>{if(f==null||f(),o==="webgpu"){[i.Hb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.cc,i.Wb,i.Xb,i.ac]=p;let m=i.Hb;i.jsepRegisterBuffer=(_,v,I,O)=>m.registerBuffer(_,v,I,O),i.jsepGetBuffer=_=>m.getBuffer(_),i.jsepCreateDownloader=(_,v,I)=>m.createDownloader(_,v,I),i.jsepOnCreateSession=_=>{m.onCreateSession(_)},i.jsepOnReleaseSession=_=>{m.onReleaseSession(_)},i.jsepOnRunStart=_=>m.onRunStart(_),i.dc=(_,v)=>{m.upload(_,v)}}else if(o==="webnn"){[i.Hb,i.bc,i.Mb,i.jsepEnsureTensor,i.Nb,i.jsepDownloadTensor]=p,i.jsepReleaseTensorId=i.Mb,i.jsepUploadTensor=i.Nb;let m=i.Hb;i.jsepOnRunStart=_=>m.onRunStart(_),i.jsepOnRunEnd=m.onRunEnd.bind(m),i.jsepRegisterMLContext=(_,v)=>{m.registerMLContext(_,v)},i.jsepOnReleaseSession=_=>{m.onReleaseSession(_)},i.jsepCreateMLTensorDownloader=(_,v)=>m.createMLTensorDownloader(_,v),i.jsepRegisterMLTensor=(_,v,I,O)=>m.registerMLTensor(_,v,I,O),i.jsepCreateMLContext=_=>m.createMLContext(_),i.jsepRegisterMLConstant=(_,v,I,O,M)=>m.registerMLConstant(_,v,I,O,M,i.Fb),i.jsepRegisterGraphInput=m.registerGraphInput.bind(m),i.jsepIsGraphInput=m.isGraphInput.bind(m),i.jsepCreateTemporaryTensor=m.createTemporaryTensor.bind(m)}};var h,g,y=Object.assign({},i),b=(o,p)=>{throw p},x="";(u||l)&&(l?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),_i&&(x=_i),x=x.startsWith("blob:")?"":x.slice(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(g=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),h=async o=>{if(ce(o))return new Promise((m,_)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):_(v.status)},v.onerror=_,v.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var $=console.log.bind(console),w=console.error.bind(console),S=$,k=w;Object.assign(i,y),y=null;var T,E,C,A,D,L,Y,ee,K,J,Z,q,ne,pe=i.wasmBinary,G=!1,ce=o=>o.startsWith("file://");function B(){return T.buffer!=A.buffer&&fe(),A}function U(){return T.buffer!=A.buffer&&fe(),D}function ae(){return T.buffer!=A.buffer&&fe(),L}function ge(){return T.buffer!=A.buffer&&fe(),Y}function N(){return T.buffer!=A.buffer&&fe(),ee}function de(){return T.buffer!=A.buffer&&fe(),K}function qe(){return T.buffer!=A.buffer&&fe(),J}function Ae(){return T.buffer!=A.buffer&&fe(),ne}if(d){let o=function(p){try{var m=p.data,_=m.Cb;if(_==="load"){let v=[];self.onmessage=I=>v.push(I),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let I of v)o(I);self.onmessage=o};for(let I of m.Sb)i[I]&&!i[I].proxy||(i[I]=(...O)=>{postMessage({Cb:"callHandler",Rb:I,args:O})},I=="print"&&(S=i[I]),I=="printErr"&&(k=i[I]));T=m.mc,fe(),wt(m.nc)}else if(_==="run"){zf(m.Bb),li(m.Bb,0,0,1,0,0),sn(),ii(m.Bb),xe||(es(),xe=!0);try{Af(m.ic,m.Jb)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(_==="checkMailbox"?xe&&pr():_&&(k(`worker: received unknown command ${_}`),k(m)))}catch(v){throw ts(),v}};var wt,xe=!1;k=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),kc:br()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function fe(){var o=T.buffer;i.HEAP8=A=new Int8Array(o),i.HEAP16=L=new Int16Array(o),i.HEAPU8=D=new Uint8Array(o),i.HEAPU16=Y=new Uint16Array(o),i.HEAP32=ee=new Int32Array(o),i.HEAPU32=K=new Uint32Array(o),i.HEAPF32=J=new Float32Array(o),i.HEAPF64=ne=new Float64Array(o),i.HEAP64=Z=new BigInt64Array(o),i.HEAPU64=q=new BigUint64Array(o)}function ot(){d?startWorker(i):X.Ca()}d||(T=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),fe());var Vt,$t=0,Ht=null;function Ya(){if(--$t==0&&Ht){var o=Ht;Ht=null,o()}}function ut(o){throw k(o="Aborted("+o+")"),G=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),n(o),o}function Ja(){return{a:{L:Cf,Aa:Ef,b:Rf,$:dn,A:fn,pa:hn,X:gn,Z:yn,qa:_n,na:bn,ga:wn,ma:$n,J:vn,Y:xn,V:kn,oa:Sn,W:Tn,va:Bf,E:Nf,Q:Mf,O:Pf,D:Wf,u:qf,r:Lf,P:Gf,z:Zf,R:Qf,ja:Yf,T:Jf,aa:eh,M:th,F:rh,ia:ii,sa:ih,t:ah,Ba:nh,w:uh,n:lh,m:ph,c:ei,o:ch,k:mh,v:gh,p:yh,f:_h,s:bh,l:wh,e:$h,j:vh,i:xh,g:kh,d:Sh,da:Th,ea:Ih,fa:Eh,ba:Wn,ca:qn,N:Ln,xa:zh,ua:Oh,h:Rh,C:Bh,G:Nh,ta:Ah,x:Mh,ra:Dh,U:Ph,q:Ch,y:Uh,K:Wh,S:qh,za:Lh,ya:Gh,ka:Fn,la:jn,_:Zr,B:Kn,I:Xn,ha:Zn,H:Qn,a:T,wa:Xr}}}var Fr={819692:(o,p,m,_,v)=>{if(i===void 0||!i.Fb)return 1;if((o=ve(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),_=Number(_>>>0),p+m>o.byteLength)return 3;try{let I=o.subarray(p,p+m);switch(v){case 0:U().set(I,_>>>0);break;case 1:i.dc(_,I);break;default:return 4}return 0}catch{return 4}},820407:(o,p,m)=>{i.Nb(o,U().subarray(p>>>0,p+m>>>0))},820470:()=>i.bc(),820511:o=>{i.Mb(o)},820547:()=>{i.Wb()},820578:()=>{i.Xb()},820607:()=>{i.ac()},820632:o=>i.Vb(o),820665:o=>i.Zb(o),820697:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m),!0)},820760:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m))},820817:()=>typeof wasmOffsetConverter<"u",820874:o=>{i.kb("Abs",o,void 0)},820925:o=>{i.kb("Neg",o,void 0)},820976:o=>{i.kb("Floor",o,void 0)},821029:o=>{i.kb("Ceil",o,void 0)},821081:o=>{i.kb("Reciprocal",o,void 0)},821139:o=>{i.kb("Sqrt",o,void 0)},821191:o=>{i.kb("Exp",o,void 0)},821242:o=>{i.kb("Erf",o,void 0)},821293:o=>{i.kb("Sigmoid",o,void 0)},821348:(o,p,m)=>{i.kb("HardSigmoid",o,{alpha:p,beta:m})},821427:o=>{i.kb("Log",o,void 0)},821478:o=>{i.kb("Sin",o,void 0)},821529:o=>{i.kb("Cos",o,void 0)},821580:o=>{i.kb("Tan",o,void 0)},821631:o=>{i.kb("Asin",o,void 0)},821683:o=>{i.kb("Acos",o,void 0)},821735:o=>{i.kb("Atan",o,void 0)},821787:o=>{i.kb("Sinh",o,void 0)},821839:o=>{i.kb("Cosh",o,void 0)},821891:o=>{i.kb("Asinh",o,void 0)},821944:o=>{i.kb("Acosh",o,void 0)},821997:o=>{i.kb("Atanh",o,void 0)},822050:o=>{i.kb("Tanh",o,void 0)},822102:o=>{i.kb("Not",o,void 0)},822153:(o,p,m)=>{i.kb("Clip",o,{min:p,max:m})},822222:o=>{i.kb("Clip",o,void 0)},822274:(o,p)=>{i.kb("Elu",o,{alpha:p})},822332:o=>{i.kb("Gelu",o,void 0)},822384:o=>{i.kb("Relu",o,void 0)},822436:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},822500:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},822570:(o,p)=>{i.kb("Cast",o,{to:p})},822628:o=>{i.kb("Add",o,void 0)},822679:o=>{i.kb("Sub",o,void 0)},822730:o=>{i.kb("Mul",o,void 0)},822781:o=>{i.kb("Div",o,void 0)},822832:o=>{i.kb("Pow",o,void 0)},822883:o=>{i.kb("Equal",o,void 0)},822936:o=>{i.kb("Greater",o,void 0)},822991:o=>{i.kb("GreaterOrEqual",o,void 0)},823053:o=>{i.kb("Less",o,void 0)},823105:o=>{i.kb("LessOrEqual",o,void 0)},823164:(o,p,m,_,v)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823339:(o,p,m,_,v)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823513:(o,p,m,_,v)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823687:(o,p,m,_,v)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823862:(o,p,m,_,v)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824036:(o,p,m,_,v)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824209:(o,p,m,_,v)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824382:(o,p,m,_,v)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824559:(o,p,m,_,v)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824739:(o,p,m,_,v)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824919:o=>{i.kb("Where",o,void 0)},824972:(o,p,m)=>{i.kb("Transpose",o,{perm:p?Array.from(N().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},825096:(o,p,m,_)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ve(m),format:_?"NHWC":"NCHW"})},825229:(o,p,m,_)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ve(m),format:_?"NHWC":"NCHW"})},825362:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie,Mt)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:_,kernelShape:[v],pads:[I,O],strides:[M],wIsConst:()=>!!B()[V>>>0],outputPadding:te?Array.from(N().subarray(Number(te)>>>0,Number(oe)>>>0)):[],outputShape:me?Array.from(N().subarray(Number(me)>>>0,Number(Ie)>>>0)):[],activation:ve(Mt)})},825795:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from(N().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:_,kernelShape:Array.from(N().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(N().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(N().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!B()[W>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[],activation:ve(Ie)})},826456:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie,Mt)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:_,kernelShape:[v],pads:[I,O],strides:[M],wIsConst:()=>!!B()[V>>>0],outputPadding:te?Array.from(N().subarray(Number(te)>>>0,Number(oe)>>>0)):[],outputShape:me?Array.from(N().subarray(Number(me)>>>0,Number(Ie)>>>0)):[],activation:ve(Mt)})},826889:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from(N().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:_,kernelShape:Array.from(N().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(N().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(N().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!B()[W>>>0],outputPadding:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[],activation:ve(Ie)})},827550:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},827641:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[]})},828120:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},828211:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[]})},828690:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},828777:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[]})},829252:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},829339:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(me)>>>0)):[]})},829814:(o,p,m,_,v)=>{i.kb("Gemm",o,{alpha:p,beta:m,transA:_,transB:v})},829918:o=>{i.kb("MatMul",o,void 0)},829972:(o,p,m,_)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:_})},830080:(o,p,m,_)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:_})},830188:(o,p)=>{i.kb("Softmax",o,{axis:p})},830251:(o,p)=>{i.kb("Concat",o,{axis:p})},830311:(o,p,m,_,v)=>{i.kb("Split",o,{axis:p,numOutputs:m,splitSizes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},830467:o=>{i.kb("Expand",o,void 0)},830521:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},830592:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},830671:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},830750:(o,p,m,_,v,I,O,M,W,V,te)=>{i.kb("Resize",o,{antialias:p,axes:m?Array.from(N().subarray(Number(m)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ve(v),cubicCoeffA:I,excludeOutside:O,extrapolationValue:M,keepAspectRatioPolicy:ve(W),mode:ve(V),nearestMode:ve(te)})},831112:(o,p,m,_,v,I,O)=>{i.kb("Slice",o,{starts:p?Array.from(N().subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[],axes:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[]})},831376:o=>{i.kb("Tile",o,void 0)},831428:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},831542:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},831656:o=>{i.kb("Range",o,void 0)},831709:(o,p)=>{i.kb("Einsum",o,{equation:ve(p)})},831790:(o,p,m,_,v)=>{i.kb("Pad",o,{mode:p,value:m,pads:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},831933:(o,p,m,_,v,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!_,format:I?"NHWC":"NCHW"})},832102:(o,p,m,_,v,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!_,format:I?"NHWC":"NCHW"})},832271:(o,p,m)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},832368:(o,p,m)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:m})},832458:(o,p,m,_,v)=>{i.kb("GridSample",o,{align_corners:p,mode:ve(m),padding_mode:ve(_),format:v?"NHWC":"NCHW"})},832628:(o,p,m,_,v)=>{i.kb("GridSample",o,{align_corners:p,mode:ve(m),padding_mode:ve(_),format:v?"NHWC":"NCHW"})},832798:(o,p)=>{i.kb("ScatterND",o,{reduction:ve(p)})},832883:(o,p,m,_,v,I,O,M,W)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:_,scale:v,doRotary:I,qkvHiddenSizes:O?Array.from(N().subarray(Number(M)>>>0,Number(M)+O>>>0)):[],pastPresentShareBuffer:!!W})},833155:o=>{i.kb("BiasAdd",o,void 0)},833210:o=>{i.kb("BiasSplitGelu",o,void 0)},833271:o=>{i.kb("FastGelu",o,void 0)},833327:(o,p,m,_,v,I,O,M,W,V,te,oe,me,Ie,Mt,Fh)=>{i.kb("Conv",o,{format:oe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(N().subarray(Number(m)>>>0,Number(_)>>>0)):[],group:v,kernel_shape:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],pads:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],strides:V?Array.from(N().subarray(Number(V)>>>0,Number(te)>>>0)):[],w_is_const:()=>!!B()[Number(me)>>>0],activation:ve(Ie),activation_params:Mt?Array.from(qe().subarray(Number(Mt)>>>0,Number(Fh)>>>0)):[]})},833911:o=>{i.kb("Gelu",o,void 0)},833963:(o,p,m,_,v,I,O,M,W)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:_,softcap:v,doRotary:I,rotaryInterleaved:O,smoothSoftmax:M,localWindowSize:W})},834180:(o,p,m,_)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!_})},834291:(o,p,m,_)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!_})},834402:(o,p,m,_,v,I)=>{i.kb("MatMulNBits",o,{k:p,n:m,accuracyLevel:_,bits:v,blockSize:I})},834529:(o,p,m,_,v,I)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:_,scale:v,doRotary:I})},834688:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},834752:(o,p,m,_,v)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:_,scale:v})},834891:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},834993:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},835095:(o,p,m,_)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:_})},835216:o=>{i.$b(o)},835250:(o,p)=>i.cc(Number(o),Number(p),i.Gb.fc,i.Gb.errors)};function Ef(o,p,m){return Bn(async()=>{await i.Yb(Number(o),Number(p),Number(m))})}function Cf(){return typeof wasmOffsetConverter<"u"}class jr{constructor(p){fs(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var en=o=>{o.terminate(),o.onmessage=()=>{}},Kr=[],tn=o=>{dt.length==0&&(un(),on(dt[0]));var p=dt.pop();if(!p)return 6;Ft.push(p),vt[o.Bb]=p,p.Bb=o.Bb;var m={Cb:"run",ic:o.hc,Jb:o.Jb,Bb:o.Bb};return p.postMessage(m,o.Pb),0},lt=0,ye=(o,p,...m)=>{for(var _=2*m.length,v=ci(),I=pi(8*_),O=I>>>3,M=0;M<m.length;M++){var W=m[M];typeof W=="bigint"?(Z[O+2*M]=1n,Z[O+2*M+1]=W):(Z[O+2*M]=0n,Ae()[O+2*M+1>>>0]=W)}return o=rs(o,0,_,I,p),$r(v),o};function Xr(o){if(d)return ye(0,1,o);if(C=o,!(0<lt)){for(var p of Ft)en(p);for(p of dt)en(p);dt=[],Ft=[],vt={},G=!0}b(0,new jr(o))}function rn(o){if(d)return ye(1,0,o);Zr(o)}var Zr=o=>{if(C=o,d)throw rn(o),"unwind";Xr(o)},dt=[],Ft=[],an=[],vt={},nn=o=>{var p=o.Bb;delete vt[p],dt.push(o),Ft.splice(Ft.indexOf(o),1),o.Bb=0,is(p)};function sn(){an.forEach(o=>o())}var on=o=>new Promise(p=>{o.onmessage=v=>{var I=(v=v.data).Cb;if(v.Ib&&v.Ib!=br()){var O=vt[v.Ib];O?O.postMessage(v,v.Pb):k(`Internal error! Worker sent a message "${I}" to target pthread ${v.Ib}, but that thread no longer exists!`)}else I==="checkMailbox"?pr():I==="spawnThread"?tn(v):I==="cleanupThread"?nn(vt[v.jc]):I==="loaded"?(o.loaded=!0,p(o)):I==="alert"?alert(`Thread ${v.kc}: ${v.text}`):v.target==="setimmediate"?o.postMessage(v):I==="callHandler"?i[v.Rb](...v.args):I&&k(`worker sent an unknown command ${I}`)},o.onerror=v=>{throw k(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,_=[];for(m of[])i.propertyIsEnumerable(m)&&_.push(m);o.postMessage({Cb:"load",Sb:_,mc:T,nc:E})});function un(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("/assets/static/ort.bundle.min.DVT1aZ7z.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});dt.push(o)}var zf=o=>{fe();var p=de()[o+52>>>2>>>0];o=de()[o+56>>>2>>>0],ss(p,p-o),$r(p)},Af=(o,p)=>{lt=0,o=os(o,p),0<lt?C=o:di(o)};class Of{constructor(p){this.Kb=p-24}}function Rf(o,p,m){var _=new Of(o>>>=0);throw p>>>=0,m>>>=0,de()[_.Kb+16>>>2>>>0]=0,de()[_.Kb+4>>>2>>>0]=p,de()[_.Kb+8>>>2>>>0]=m,o}function ln(o,p,m,_){return d?ye(2,1,o,p,m,_):dn(o,p,m,_)}function dn(o,p,m,_){if(o>>>=0,m>>>=0,_>>>=0,c===void 0)return 6;var v=[];return d&&v.length===0?ln(o,p>>>=0,m,_):(o={hc:m,Bb:o,Jb:_,Pb:v},d?(o.Cb="spawnThread",postMessage(o,v),0):tn(o))}var pn=typeof TextDecoder<"u"?new TextDecoder:void 0,cn=(o,p=0,m=NaN)=>{var _=(p>>>=0)+m;for(m=p;o[m]&&!(m>=_);)++m;if(16<m-p&&o.buffer&&pn)return pn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(_="";p<m;){var v=o[p++];if(128&v){var I=63&o[p++];if((224&v)==192)_+=String.fromCharCode((31&v)<<6|I);else{var O=63&o[p++];65536>(v=(240&v)==224?(15&v)<<12|I<<6|O:(7&v)<<18|I<<12|O<<6|63&o[p++])?_+=String.fromCharCode(v):(v-=65536,_+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else _+=String.fromCharCode(v)}return _},ve=(o,p)=>(o>>>=0)?cn(U(),o,p):"";function fn(o,p,m){return d?ye(3,1,o,p,m):0}function hn(o,p){if(d)return ye(4,1,o,p)}var mn=o=>{for(var p=0,m=0;m<o.length;++m){var _=o.charCodeAt(m);127>=_?p++:2047>=_?p+=2:55296<=_&&57343>=_?(p+=4,++m):p+=3}return p},Nt=(o,p,m)=>{var _=U();if(p>>>=0,0<m){var v=p;m=p+m-1;for(var I=0;I<o.length;++I){var O=o.charCodeAt(I);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++I)),127>=O){if(p>=m)break;_[p++>>>0]=O}else{if(2047>=O){if(p+1>=m)break;_[p++>>>0]=192|O>>6}else{if(65535>=O){if(p+2>=m)break;_[p++>>>0]=224|O>>12}else{if(p+3>=m)break;_[p++>>>0]=240|O>>18,_[p++>>>0]=128|O>>12&63}_[p++>>>0]=128|O>>6&63}_[p++>>>0]=128|63&O}}_[p>>>0]=0,o=p-v}else o=0;return o};function gn(o,p){if(d)return ye(5,1,o,p)}function yn(o,p,m){if(d)return ye(6,1,o,p,m)}function _n(o,p,m){return d?ye(7,1,o,p,m):0}function bn(o,p){if(d)return ye(8,1,o,p)}function wn(o,p,m){if(d)return ye(9,1,o,p,m)}function $n(o,p,m,_){if(d)return ye(10,1,o,p,m,_)}function vn(o,p,m,_){if(d)return ye(11,1,o,p,m,_)}function xn(o,p,m,_){if(d)return ye(12,1,o,p,m,_)}function kn(o){if(d)return ye(13,1,o)}function Sn(o,p){if(d)return ye(14,1,o,p)}function Tn(o,p,m){if(d)return ye(15,1,o,p,m)}var In,pt,Bf=()=>ut(""),Ye=o=>{for(var p="";U()[o>>>0];)p+=In[U()[o++>>>0]];return p},Qr={},Yr={};function it(o,p,m={}){return function(_,v,I={}){var O=v.name;if(!_)throw new pt(`type "${O}" must have a positive integer typeid pointer`);if(Yr.hasOwnProperty(_)){if(I.Tb)return;throw new pt(`Cannot register type '${O}' twice`)}Yr[_]=v,Qr.hasOwnProperty(_)&&(v=Qr[_],delete Qr[_],v.forEach(M=>M()))}(o,p,m)}var En=(o,p,m)=>{switch(p){case 1:return m?_=>B()[_>>>0]:_=>U()[_>>>0];case 2:return m?_=>ae()[_>>>1>>>0]:_=>ge()[_>>>1>>>0];case 4:return m?_=>N()[_>>>2>>>0]:_=>de()[_>>>2>>>0];case 8:return m?_=>Z[_>>>3]:_=>q[_>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Nf(o,p,m){m>>>=0,it(o>>>=0,{name:p=Ye(p>>>0),fromWireType:_=>_,toWireType:function(_,v){if(typeof v!="bigint"&&typeof v!="number")throw v=v===null?"null":(_=typeof v)=="object"||_==="array"||_==="function"?v.toString():""+v,new TypeError(`Cannot convert "${v}" to ${this.name}`);return typeof v=="number"&&(v=BigInt(v)),v},Db:ct,readValueFromPointer:En(p,m,p.indexOf("u")==-1),Eb:null})}var ct=8;function Mf(o,p,m,_){it(o>>>=0,{name:p=Ye(p>>>0),fromWireType:function(v){return!!v},toWireType:function(v,I){return I?m:_},Db:ct,readValueFromPointer:function(v){return this.fromWireType(U()[v>>>0])},Eb:null})}var Jr=[],at=[];function ei(o){9<(o>>>=0)&&--at[o+1]==0&&(at[o]=void 0,Jr.push(o))}var Be=o=>{if(!o)throw new pt("Cannot use deleted val. handle = "+o);return at[o]},Le=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Jr.pop()||at.length;return at[p]=o,at[p+1]=1,p}};function ti(o){return this.fromWireType(de()[o>>>2>>>0])}var Df={name:"emscripten::val",fromWireType:o=>{var p=Be(o);return ei(o),p},toWireType:(o,p)=>Le(p),Db:ct,readValueFromPointer:ti,Eb:null};function Pf(o){return it(o>>>0,Df)}var Uf=(o,p)=>{switch(p){case 4:return function(m){return this.fromWireType(qe()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(Ae()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Wf(o,p,m){m>>>=0,it(o>>>=0,{name:p=Ye(p>>>0),fromWireType:_=>_,toWireType:(_,v)=>v,Db:ct,readValueFromPointer:Uf(p,m),Eb:null})}function qf(o,p,m,_,v){if(o>>>=0,m>>>=0,p=Ye(p>>>0),v===-1&&(v=4294967295),v=M=>M,_===0){var I=32-8*m;v=M=>M<<I>>>I}var O=p.includes("unsigned")?function(M,W){return W>>>0}:function(M,W){return W};it(o,{name:p,fromWireType:v,toWireType:O,Db:ct,readValueFromPointer:En(p,m,_!==0),Eb:null})}function Lf(o,p,m){function _(I){var O=de()[I>>>2>>>0];return I=de()[I+4>>>2>>>0],new v(B().buffer,I,O)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];it(o>>>=0,{name:m=Ye(m>>>0),fromWireType:_,Db:ct,readValueFromPointer:_},{Tb:!0})}function Gf(o,p){it(o>>>=0,{name:p=Ye(p>>>0),fromWireType:function(m){for(var _,v=de()[m>>>2>>>0],I=m+4,O=I,M=0;M<=v;++M){var W=I+M;M!=v&&U()[W>>>0]!=0||(O=ve(O,W-O),_===void 0?_=O:(_+="\0",_+=O),O=W+1)}return et(m),_},toWireType:function(m,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var v=typeof _=="string";if(!(v||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array))throw new pt("Cannot pass non-string to std::string");var I=v?mn(_):_.length,O=wr(4+I+1),M=O+4;if(de()[O>>>2>>>0]=I,v)Nt(_,M,I+1);else if(v)for(v=0;v<I;++v){var W=_.charCodeAt(v);if(255<W)throw et(O),new pt("String has UTF-16 code units that do not fit in 8 bits");U()[M+v>>>0]=W}else for(v=0;v<I;++v)U()[M+v>>>0]=_[v];return m!==null&&m.push(et,O),O},Db:ct,readValueFromPointer:ti,Eb(m){et(m)}})}var Cn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Vf=(o,p)=>{for(var m=o>>1,_=m+p/2;!(m>=_)&&ge()[m>>>0];)++m;if(32<(m<<=1)-o&&Cn)return Cn.decode(U().slice(o,m));for(m="",_=0;!(_>=p/2);++_){var v=ae()[o+2*_>>>1>>>0];if(v==0)break;m+=String.fromCharCode(v)}return m},Hf=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var _=p;m=(m-=2)<2*o.length?m/2:o.length;for(var v=0;v<m;++v){var I=o.charCodeAt(v);ae()[p>>>1>>>0]=I,p+=2}return ae()[p>>>1>>>0]=0,p-_},Ff=o=>2*o.length,jf=(o,p)=>{for(var m=0,_="";!(m>=p/4);){var v=N()[o+4*m>>>2>>>0];if(v==0)break;++m,65536<=v?(v-=65536,_+=String.fromCharCode(55296|v>>10,56320|1023&v)):_+=String.fromCharCode(v)}return _},Kf=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var _=p;m=_+m-4;for(var v=0;v<o.length;++v){var I=o.charCodeAt(v);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++v)),N()[p>>>2>>>0]=I,(p+=4)+4>m)break}return N()[p>>>2>>>0]=0,p-_},Xf=o=>{for(var p=0,m=0;m<o.length;++m){var _=o.charCodeAt(m);55296<=_&&57343>=_&&++m,p+=4}return p};function Zf(o,p,m){if(o>>>=0,p>>>=0,m=Ye(m>>>=0),p===2)var _=Vf,v=Hf,I=Ff,O=M=>ge()[M>>>1>>>0];else p===4&&(_=jf,v=Kf,I=Xf,O=M=>de()[M>>>2>>>0]);it(o,{name:m,fromWireType:M=>{for(var W,V=de()[M>>>2>>>0],te=M+4,oe=0;oe<=V;++oe){var me=M+4+oe*p;oe!=V&&O(me)!=0||(te=_(te,me-te),W===void 0?W=te:(W+="\0",W+=te),te=me+p)}return et(M),W},toWireType:(M,W)=>{if(typeof W!="string")throw new pt(`Cannot pass non-string to C++ string type ${m}`);var V=I(W),te=wr(4+V+p);return de()[te>>>2>>>0]=V/p,v(W,te+4,V+p),M!==null&&M.push(et,te),te},Db:ct,readValueFromPointer:ti,Eb(M){et(M)}})}function Qf(o,p){it(o>>>=0,{Ub:!0,name:p=Ye(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function Yf(o){li(o>>>0,!l,1,!u,131072,!1),sn()}var ri=o=>{if(!G)try{if(o(),!(0<lt))try{d?di(C):Zr(C)}catch(p){p instanceof jr||p=="unwind"||b(0,p)}}catch(p){p instanceof jr||p=="unwind"||b(0,p)}};function ii(o){o>>>=0,typeof Atomics.lc=="function"&&(Atomics.lc(N(),o>>>2,o).value.then(pr),o+=128,Atomics.store(N(),o>>>2,1))}var pr=()=>{var o=br();o&&(ii(o),ri(ns))};function Jf(o,p){(o>>>=0)==p>>>0?setTimeout(pr):d?postMessage({Ib:o,Cb:"checkMailbox"}):(o=vt[o])&&o.postMessage({Cb:"checkMailbox"})}var ai=[];function eh(o,p,m,_,v){for(p>>>=0,_/=2,ai.length=_,m=v>>>0>>>3,v=0;v<_;v++)ai[v]=Z[m+2*v]?Z[m+2*v+1]:Ae()[m+2*v+1>>>0];return(p?Fr[p]:Hh[o])(...ai)}var th=()=>{lt=0};function rh(o){o>>>=0,d?postMessage({Cb:"cleanupThread",jc:o}):nn(vt[o])}function ih(o){}var cr=(o,p)=>{var m=Yr[o];if(m===void 0)throw o=Jn(o),m=Ye(o),et(o),new pt(`${p} has unknown type ${m}`);return m},zn=(o,p,m)=>{var _=[];return o=o.toWireType(_,m),_.length&&(de()[p>>>2>>>0]=Le(_)),o};function ah(o,p,m){return p>>>=0,m>>>=0,o=Be(o>>>0),p=cr(p,"emval::as"),zn(p,m,o)}function nh(o,p){return p>>>=0,o=Be(o>>>0),(p=cr(p,"emval::as")).toWireType(null,o)}var fr=o=>{try{o()}catch(p){ut(p)}},ft=0,Je=null,An=0,hr=[],On={},Rn={},sh=0,ni=null,oh=[];function Bn(o){return function(p){if(!G){if(ft===0){var m=!1,_=!1;p((v=0)=>{if(!G&&(An=v,m=!0,_)){ft=2,fr(()=>ds(Je)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),v=!1;try{var I=function(){var W=N()[Je+8>>>2>>>0];return W=X[Rn[W]],--lt,W()}()}catch(W){I=W,v=!0}var O=!1;if(!Je){var M=ni;M&&(ni=null,(v?M.reject:M.resolve)(I),O=!0)}if(v&&!O)throw I}}),_=!0,m||(ft=1,Je=function(){var v=wr(65548),I=v+12;de()[v>>>2>>>0]=I,de()[v+4>>>2>>>0]=I+65536,I=hr[0];var O=On[I];return O===void 0&&(O=sh++,On[I]=O,Rn[O]=I),I=O,N()[v+8>>>2>>>0]=I,v}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),fr(()=>us(Je)))}else ft===2?(ft=0,fr(ps),et(Je),Je=null,oh.forEach(ri)):ut(`invalid state: ${ft}`);return An}}(p=>{o().then(p)})}function uh(o){return o>>>=0,Bn(async()=>{var p=await Be(o);return Le(p)})}var mr=[];function lh(o,p,m,_){return m>>>=0,_>>>=0,(o=mr[o>>>0])(null,p=Be(p>>>0),m,_)}var dh={},gr=o=>{var p=dh[o];return p===void 0?Ye(o):p};function ph(o,p,m,_,v){return m>>>=0,_>>>=0,v>>>=0,(o=mr[o>>>0])(p=Be(p>>>0),p[m=gr(m)],_,v)}var Nn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ch(o){return(o>>>=0)==0?Le(Nn()):(o=gr(o),Le(Nn()[o]))}var fh=o=>{var p=mr.length;return mr.push(o),p},hh=(o,p)=>{for(var m=Array(o),_=0;_<o;++_)m[_]=cr(de()[p+4*_>>>2>>>0],"parameter "+_);return m},Mn=(o,p)=>Object.defineProperty(p,"name",{value:o});function mh(o,p,m){var _=(p=hh(o,p>>>0)).shift();o--;var v=`return function (obj, func, destructorsRef, args) {
`,I=0,O=[];m===0&&O.push("obj");for(var M=["retType"],W=[_],V=0;V<o;++V)O.push("arg"+V),M.push("argType"+V),W.push(p[V]),v+=`  var arg${V} = argType${V}.readValueFromPointer(args${I?"+"+I:""});
`,I+=p[V].Db;return v+=`  var rv = ${m===1?"new func":"func.call"}(${O.join(", ")});
`,_.Ub||(M.push("emval_returnValue"),W.push(zn),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M.push(v+`};
`),o=function(te){var oe=Function;if(!(oe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof oe} which is not a function`);var me=Mn(oe.name||"unknownFunctionName",function(){});return me.prototype=oe.prototype,me=new me,(te=oe.apply(me,te))instanceof Object?te:me}(M)(...W),m=`methodCaller<(${p.map(te=>te.name).join(", ")}) => ${_.name}>`,fh(Mn(m,o))}function gh(o){return o=gr(o>>>0),Le(i[o])}function yh(o,p){return p>>>=0,o=Be(o>>>0),p=Be(p),Le(o[p])}function _h(o){9<(o>>>=0)&&(at[o+1]+=1)}function bh(){return Le([])}function wh(o){o=Be(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Le(p)}function $h(o){return Le(gr(o>>>0))}function vh(){return Le({})}function xh(o){for(var p=Be(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ei(o)}function kh(o,p,m){p>>>=0,m>>>=0,o=Be(o>>>0),p=Be(p),m=Be(m),o[p]=m}function Sh(o,p){return p>>>=0,o=(o=cr(o>>>0,"_emval_take_value")).readValueFromPointer(p),Le(o)}function Th(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),N()[p>>>2>>>0]=o.getUTCSeconds(),N()[p+4>>>2>>>0]=o.getUTCMinutes(),N()[p+8>>>2>>>0]=o.getUTCHours(),N()[p+12>>>2>>>0]=o.getUTCDate(),N()[p+16>>>2>>>0]=o.getUTCMonth(),N()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,N()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,N()[p+28>>>2>>>0]=o}var Dn=o=>o%4==0&&(o%100!=0||o%400==0),Pn=[0,31,60,91,121,152,182,213,244,274,305,335],Un=[0,31,59,90,120,151,181,212,243,273,304,334];function Ih(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),N()[p>>>2>>>0]=o.getSeconds(),N()[p+4>>>2>>>0]=o.getMinutes(),N()[p+8>>>2>>>0]=o.getHours(),N()[p+12>>>2>>>0]=o.getDate(),N()[p+16>>>2>>>0]=o.getMonth(),N()[p+20>>>2>>>0]=o.getFullYear()-1900,N()[p+24>>>2>>>0]=o.getDay();var m=(Dn(o.getFullYear())?Pn:Un)[o.getMonth()]+o.getDate()-1|0;N()[p+28>>>2>>>0]=m,N()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var _=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=_&&o.getTimezoneOffset()==Math.min(_,m)),N()[p+32>>>2>>>0]=o}function Eh(o){o>>>=0;var p=new Date(N()[o+20>>>2>>>0]+1900,N()[o+16>>>2>>>0],N()[o+12>>>2>>>0],N()[o+8>>>2>>>0],N()[o+4>>>2>>>0],N()[o>>>2>>>0],0),m=N()[o+32>>>2>>>0],_=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(I,v);return 0>m?N()[o+32>>>2>>>0]=+(v!=I&&O==_):0<m!=(O==_)&&(v=Math.max(I,v),p.setTime(p.getTime()+6e4*((0<m?O:v)-_))),N()[o+24>>>2>>>0]=p.getDay(),m=(Dn(p.getFullYear())?Pn:Un)[p.getMonth()]+p.getDate()-1|0,N()[o+28>>>2>>>0]=m,N()[o>>>2>>>0]=p.getSeconds(),N()[o+4>>>2>>>0]=p.getMinutes(),N()[o+8>>>2>>>0]=p.getHours(),N()[o+12>>>2>>>0]=p.getDate(),N()[o+16>>>2>>>0]=p.getMonth(),N()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Wn(o,p,m,_,v,I,O){return d?ye(16,1,o,p,m,_,v,I,O):-52}function qn(o,p,m,_,v,I){if(d)return ye(17,1,o,p,m,_,v,I)}var jt={},Ch=()=>performance.timeOrigin+performance.now();function Ln(o,p){if(d)return ye(18,1,o,p);if(jt[o]&&(clearTimeout(jt[o].id),delete jt[o]),!p)return 0;var m=setTimeout(()=>{delete jt[o],ri(()=>as(o,performance.timeOrigin+performance.now()))},p);return jt[o]={id:m,pc:p},0}function zh(o,p,m,_){o>>>=0,p>>>=0,m>>>=0,_>>>=0;var v=new Date().getFullYear(),I=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var O=Math.max(I,v);de()[o>>>2>>>0]=60*O,N()[p>>>2>>>0]=+(I!=v),o=(p=M=>{var W=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(I),p=p(v),v<I?(Nt(o,m,17),Nt(p,_,17)):(Nt(o,_,17),Nt(p,m,17))}var Ah=()=>Date.now();function Oh(o,p,m){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),Z[m>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var si=[],Gn=(o,p)=>{si.length=0;for(var m;m=U()[o++>>>0];){var _=m!=105;p+=(_&=m!=112)&&p%8?4:0,si.push(m==112?de()[p>>>2>>>0]:m==106?Z[p>>>3]:m==105?N()[p>>>2>>>0]:Ae()[p>>>3>>>0]),p+=_?8:4}return si};function Rh(o,p,m){return o>>>=0,p=Gn(p>>>0,m>>>0),Fr[o](...p)}function Bh(o,p,m){return o>>>=0,p=Gn(p>>>0,m>>>0),Fr[o](...p)}var Nh=()=>{};function Mh(o,p){return k(ve(o>>>0,p>>>0))}var Dh=()=>{throw lt+=1,"unwind"};function Ph(){return 4294901760}var Uh=()=>navigator.hardwareConcurrency;function Wh(){return ut("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function qh(o){o>>>=0;var p=U().length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var _=p*(1+.2/m);_=Math.min(_,o+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(o,_)/65536))-T.buffer.byteLength+65535)/65536|0;try{T.grow(_),fe();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}var yr=()=>(ut("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Kt={},Vn=o=>{o.forEach(p=>{yr()})};function Lh(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Vn(o),Kt.Ob=yr(),Kt.ec=o,Kt.Ob}function Gh(o,p,m){if(o>>>=0,p>>>=0,Kt.Ob==o)var _=Kt.ec;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),Vn(_);for(var v=3;_[v]&&yr()!=o;)++v;for(o=0;o<m&&_[o+v];++o)N()[p+4*o>>>2>>>0]=yr();return o}var oi,ui={},Hn=()=>{if(!oi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ui)ui[o]===void 0?delete p[o]:p[o]=ui[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);oi=m}return oi};function Fn(o,p){if(d)return ye(19,1,o,p);o>>>=0,p>>>=0;var m=0;return Hn().forEach((_,v)=>{var I=p+m;for(v=de()[o+4*v>>>2>>>0]=I,I=0;I<_.length;++I)B()[v++>>>0]=_.charCodeAt(I);B()[v>>>0]=0,m+=_.length+1}),0}function jn(o,p){if(d)return ye(20,1,o,p);o>>>=0,p>>>=0;var m=Hn();de()[o>>>2>>>0]=m.length;var _=0;return m.forEach(v=>_+=v.length+1),de()[p>>>2>>>0]=_,0}function Kn(o){return d?ye(21,1,o):52}function Xn(o,p,m,_){return d?ye(22,1,o,p,m,_):52}function Zn(o,p,m,_){return d?ye(23,1,o,p,m,_):70}var Vh=[null,[],[]];function Qn(o,p,m,_){if(d)return ye(24,1,o,p,m,_);p>>>=0,m>>>=0,_>>>=0;for(var v=0,I=0;I<m;I++){var O=de()[p>>>2>>>0],M=de()[p+4>>>2>>>0];p+=8;for(var W=0;W<M;W++){var V=U()[O+W>>>0],te=Vh[o];V===0||V===10?((o===1?S:k)(cn(te)),te.length=0):te.push(V)}v+=M}return de()[_>>>2>>>0]=v,0}d||function(){for(var o=i.numThreads-1;o--;)un();Kr.unshift(()=>{$t++,function(p){d?p():Promise.all(dt.map(on)).then(p)}(()=>Ya())})}();for(var Yn=Array(256),_r=0;256>_r;++_r)Yn[_r]=String.fromCharCode(_r);In=Yn,pt=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},at.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>at.length/2-5-Jr.length;var X,Hh=[Xr,rn,ln,fn,hn,gn,yn,_n,bn,wn,$n,vn,xn,kn,Sn,Tn,Wn,qn,Ln,Fn,jn,Kn,Xn,Zn,Qn];(async function(){function o(_,v){return X=_.exports,X=function(){var I=X,O={};for(let[M,W]of Object.entries(I))O[M]=typeof W=="function"?(...V)=>{hr.push(M);try{return W(...V)}finally{G||(hr.pop(),Je&&ft===1&&hr.length===0&&(ft=0,lt+=1,fr(ls),typeof Fibers<"u"&&Fibers.qc()))}}:W;return O}(),X=function(){var I=X,O=W=>V=>W(V)>>>0,M=W=>()=>W()>>>0;return(I=Object.assign({},I)).Da=O(I.Da),I.gb=M(I.gb),I.ib=O(I.ib),I.ub=O(I.ub),I.vb=M(I.vb),I.__cxa_get_exception_ptr=O(I.__cxa_get_exception_ptr),I}(),an.push(X.jb),E=v,Ya(),X}$t++;var p=Ja();if(i.instantiateWasm)return new Promise(_=>{i.instantiateWasm(p,(v,I)=>{o(v,I),_(v.exports)})});if(d)return new Promise(_=>{wt=v=>{var I=new WebAssembly.Instance(v,Ja());_(o(I,v))}});Vt??(Vt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",x):x+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/static/ort-wasm-simd-threaded.jsep.B5gdmGHs.wasm",import.meta.url).href);try{var m=await async function(_){var v=Vt;if(!pe&&typeof WebAssembly.instantiateStreaming=="function"&&!ce(v))try{var I=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,_)}catch(O){k(`wasm streaming compile failed: ${O}`),k("falling back to ArrayBuffer instantiation")}return async function(O,M){try{var W=await async function(V){if(!pe)try{var te=await h(V);return new Uint8Array(te)}catch{}if(V==Vt&&pe)V=new Uint8Array(pe);else{if(!g)throw"both async and sync fetching of the wasm failed";V=g(V)}return V}(O);return await WebAssembly.instantiate(W,M)}catch(V){k(`failed to asynchronously prepare wasm: ${V}`),ut(V)}}(v,_)}(p);return o(m.instance,m.module)}catch(_){return n(_),Promise.reject(_)}})();var Jn=o=>(Jn=X.Da)(o),es=()=>(es=X.Ea)();i._OrtInit=(o,p)=>(i._OrtInit=X.Fa)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=X.Ga)(o,p),i._OrtCreateSessionOptions=(o,p,m,_,v,I,O,M,W,V)=>(i._OrtCreateSessionOptions=X.Ha)(o,p,m,_,v,I,O,M,W,V),i._OrtAppendExecutionProvider=(o,p)=>(i._OrtAppendExecutionProvider=X.Ia)(o,p),i._OrtAddFreeDimensionOverride=(o,p,m)=>(i._OrtAddFreeDimensionOverride=X.Ja)(o,p,m),i._OrtAddSessionConfigEntry=(o,p,m)=>(i._OrtAddSessionConfigEntry=X.Ka)(o,p,m),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=X.La)(o),i._OrtCreateSession=(o,p,m)=>(i._OrtCreateSession=X.Ma)(o,p,m),i._OrtReleaseSession=o=>(i._OrtReleaseSession=X.Na)(o),i._OrtGetInputOutputCount=(o,p,m)=>(i._OrtGetInputOutputCount=X.Oa)(o,p,m),i._OrtGetInputName=(o,p)=>(i._OrtGetInputName=X.Pa)(o,p),i._OrtGetOutputName=(o,p)=>(i._OrtGetOutputName=X.Qa)(o,p),i._OrtFree=o=>(i._OrtFree=X.Ra)(o),i._OrtCreateTensor=(o,p,m,_,v,I)=>(i._OrtCreateTensor=X.Sa)(o,p,m,_,v,I),i._OrtGetTensorData=(o,p,m,_,v)=>(i._OrtGetTensorData=X.Ta)(o,p,m,_,v),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=X.Ua)(o),i._OrtCreateRunOptions=(o,p,m,_)=>(i._OrtCreateRunOptions=X.Va)(o,p,m,_),i._OrtAddRunConfigEntry=(o,p,m)=>(i._OrtAddRunConfigEntry=X.Wa)(o,p,m),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=X.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=X.Ya)(o),i._OrtBindInput=(o,p,m)=>(i._OrtBindInput=X.Za)(o,p,m),i._OrtBindOutput=(o,p,m,_)=>(i._OrtBindOutput=X._a)(o,p,m,_),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=X.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=X.ab)(o),i._OrtRunWithBinding=(o,p,m,_,v)=>(i._OrtRunWithBinding=X.bb)(o,p,m,_,v),i._OrtRun=(o,p,m,_,v,I,O,M)=>(i._OrtRun=X.cb)(o,p,m,_,v,I,O,M),i._OrtEndProfiling=o=>(i._OrtEndProfiling=X.db)(o),i._JsepOutput=(o,p,m)=>(i._JsepOutput=X.eb)(o,p,m),i._JsepGetNodeName=o=>(i._JsepGetNodeName=X.fb)(o);var br=()=>(br=X.gb)(),et=i._free=o=>(et=i._free=X.hb)(o),wr=i._malloc=o=>(wr=i._malloc=X.ib)(o),li=(o,p,m,_,v,I)=>(li=X.lb)(o,p,m,_,v,I),ts=()=>(ts=X.mb)(),rs=(o,p,m,_,v)=>(rs=X.nb)(o,p,m,_,v),is=o=>(is=X.ob)(o),di=o=>(di=X.pb)(o),as=(o,p)=>(as=X.qb)(o,p),ns=()=>(ns=X.rb)(),ss=(o,p)=>(ss=X.sb)(o,p),$r=o=>($r=X.tb)(o),pi=o=>(pi=X.ub)(o),ci=()=>(ci=X.vb)(),os=i.dynCall_ii=(o,p)=>(os=i.dynCall_ii=X.wb)(o,p),us=o=>(us=X.xb)(o),ls=()=>(ls=X.yb)(),ds=o=>(ds=X.zb)(o),ps=()=>(ps=X.Ab)();return i.stackSave=()=>ci(),i.stackRestore=o=>$r(o),i.stackAlloc=o=>pi(o),i.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":B()[o>>>0]=p;break;case"i16":ae()[o>>>1>>>0]=p;break;case"i32":N()[o>>>2>>>0]=p;break;case"i64":Z[o>>>3]=BigInt(p);break;case"float":qe()[o>>>2>>>0]=p;break;case"double":Ae()[o>>>3>>>0]=p;break;case"*":de()[o>>>2>>>0]=p;break;default:ut(`invalid type for setValue: ${m}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return B()[o>>>0];case"i16":return ae()[o>>>1>>>0];case"i32":return N()[o>>>2>>>0];case"i64":return Z[o>>>3];case"float":return qe()[o>>>2>>>0];case"double":return Ae()[o>>>3>>>0];case"*":return de()[o>>>2>>>0];default:ut(`invalid type for getValue: ${p}`)}},i.UTF8ToString=ve,i.stringToUTF8=Nt,i.lengthBytesUTF8=mn,function o(){if(0<$t)Ht=o;else if(d)a(i),ot();else{for(;0<Kr.length;)Kr.shift()(i);0<$t?Ht=o:(i.calledRun=!0,G||(ot(),a(i)))}}(),i.PTR_SIZE=4,s}),hd=bi,ms=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),ms&&bi()}),wi,gs,Ne,md,xr,ys,_s,$i,bs,vi,gd,xi,yd,Ta=P(()=>{Sa(),wi=typeof location>"u"?void 0:location.origin,gs=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/assets/static/ort.bundle.min.DVT1aZ7z.mjs",import.meta.url).href,wi).href:import.meta.url},Ne=gs(),md=()=>{if(Ne&&!Ne.startsWith("blob:"))return Ne.substring(0,Ne.lastIndexOf("/")+1)},xr=(e,t)=>{try{let r=t??Ne;return(r?new URL(e,r):new URL(e)).origin===wi}catch{return!1}},ys=(e,t)=>{let r=t??Ne;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},_s=(e,t)=>`${t??"./"}${e}`,$i=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},bs=async e=>(await import(e)).default,vi=(_m(),Pr(pd)).default,gd=async()=>{if(!Ne)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xr(Ne))return[void 0,vi()];let e=await $i(Ne);return[e,vi(e)]},xi=(bm(),Pr(fd)).default,yd=async(e,t,r)=>{if(!e&&!t&&xi&&Ne&&xr(Ne))return[void 0,xi];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??ys(a,t),i=r&&n&&!xr(n,t),s=i?await $i(n):n??_s(a,t);return[i?s:void 0,await bs(s)]}}}),ki,kr,Zt,Si,ws,$s,Ia,ke,Rt=P(()=>{Ta(),kr=!1,Zt=!1,Si=!1,ws=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},$s=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=async e=>{if(kr)return Promise.resolve();if(Zt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Si)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zt=!0;let t=e.initTimeout,r=e.numThreads;if(!$s())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=ws();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,u=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[f,h]=await yd(u,i,r>1),g=!1,y=[];if(t>0&&y.push(new Promise(b=>{setTimeout(()=>{g=!0,b()},t)})),y.push(new Promise((b,x)=>{let $={numThreads:r};if(c)$.wasmBinary=c;else if(d||i)$.locateFile=w=>d??i+w;else if(u&&u.indexOf("blob:")!==0)$.locateFile=w=>new URL(w,u).href;else if(f){let w=md();w&&($.locateFile=S=>w+S)}h($).then(w=>{Zt=!1,kr=!0,ki=w,b(),f&&URL.revokeObjectURL(f)},w=>{Zt=!1,Si=!0,x(w)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(kr&&ki)return ki;throw new Error("WebAssembly is not initialized yet.")}}),Ee,Wr,le,Ea=P(()=>{Rt(),Ee=(e,t)=>{let r=ke(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},Wr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let s=t?t+n:n;if(typeof i=="object")Wr(i,s+".",r,a);else if(typeof i=="string"||typeof i=="number")a(s,i.toString());else if(typeof i=="boolean")a(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},le=e=>{let t=ke(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),s=t.getValue(n+a,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),_d,wm=P(()=>{Rt(),Ea(),_d=e=>{let t=ke(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Ee(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&le("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Wr(e.extra,"",new WeakSet,(s,u)=>{let l=Ee(s,a),d=Ee(u,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&le(`Can't set a run config entry: ${s} - ${u}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),i}}}),vs,xs,ks,Ss,bd,$m=P(()=>{Rt(),Ea(),vs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},xs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ks=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ss=(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name;switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let s=a==null?void 0:a.deviceType;if(s){let u=Ee("deviceType",r),l=Ee(s,r);ke()._OrtAddSessionConfigEntry(e,u,l)!==0&&le(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(n="JS",typeof a!="string"){let s=a;if(s!=null&&s.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let u=Ee("preferredLayout",r),l=Ee(s.preferredLayout,r);ke()._OrtAddSessionConfigEntry(e,u,l)!==0&&le(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let i=Ee(n,r);ke()._OrtAppendExecutionProvider(e,i)!==0&&le(`Can't append execution provider: ${n}.`)}},bd=e=>{let t=ke(),r=0,a=[],n=e||{};ks(n);try{let i=vs(n.graphOptimizationLevel??"all"),s=xs(n.executionMode??"sequential"),u=typeof n.logId=="string"?Ee(n.logId,a):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Ee(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,u,l,d,c),r===0&&le("Can't create session options."),n.executionProviders&&Ss(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let f=Ee("enableGraphCapture",a),h=Ee(n.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,f,h)!==0&&le(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=Ee(f,a);t._OrtAddFreeDimensionOverride(r,g,h)!==0&&le(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&Wr(n.extra,"",new WeakSet,(f,h)=>{let g=Ee(f,a),y=Ee(h,a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&le(`Can't set a session config entry: ${f} - ${h}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&le("Can't release session options."),a.forEach(s=>t._free(s)),i}}}),Pt,Et,Ct,Ca,qr,za,Aa,ua,Q=P(()=>{Pt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Et=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ct=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},Ca=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},za=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Aa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ua=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Oa,wd=P(()=>{Sa(),Oa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(u){if(u instanceof RangeError){let l=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let d=l.byteLength;new Uint8Array(i,s,d).set(l),s+=d}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ts,Is,Es,Cs,Ra,zs,se,st=P(()=>{Q(),Ts=["V","I","W","E","F"],Is=(e,t)=>{console.log(`[${Ts[e]},${new Date().toISOString()}]${t}`)},Ra=(e,t)=>{Es=e,Cs=t},zs=(e,t)=>{let r=qr(e),a=qr(Es);r>=a&&Is(r,typeof t=="function"?t():t)},se=(...e)=>{Cs&&zs(...e)}}),Ba,$d=P(()=>{Q(),Ba=(e,t)=>new(Ca(t))(e)}),Na=P(()=>{}),Ti,Sr,Tr,As,Os,Ii,la,Rs,vd,vm=P(()=>{st(),Na(),Ti=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Sr=[],Tr=e=>Math.ceil(Number(e)/16)*16,As=e=>{for(let t=0;t<Sr.length;t++){let r=Sr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Os=1,Ii=()=>Os++,la=async(e,t,r,a)=>{let n=Tr(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let u=i.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{i.destroy()}},Rs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ti)Sr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=Tr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),u.destroy(),se("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Tr(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ii();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),se("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=As(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?a=u.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ii(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),se("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return se("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await la(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ti.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(se("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},vd=(...e)=>new Rs(...e)}),Bs,he,$e=P(()=>{Bs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Bs(e)}),Ns,Lt,z,Lr,xd,kd,Sd,re=P(()=>{Ns=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Lt=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(a<2||n<2)return;let u=Ns.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[i-2],s[i-1]]=u}for(let u=r?3:1;u<=i;u++){let l=a-u<0?1:e[a-u],d=n-u<0?1:t[n-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[i-u]=Math.max(l,d);else{if(c>1)return;s[i-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},z=class Mr{static size(t){return Mr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Mr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Mr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},Lr=class nr{static adjustPoolAttributes(t,r,a,n,i,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=a.length?a.push(r[u+2]):a[u]=r[u+2];for(let u=0;u<a.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<a.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<a.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<a.length;u++){if(a[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=a[u]||s[u+a.length]>=a[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,s,u){if(u){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)nr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],a[l],n[l],i,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,a,n,i,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return nr.computeShapeHelper(t,r,l,a,n,i,s,u),l}static computeConvOutputShape(t,r,a,n,i,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return nr.computeShapeHelper(!1,t,l,a,n,i,s,u),l}static computeShapeHelper(t,r,a,n,i,s,u,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(nr.adjustPadAndReturnShape(r[d+2],n[d],i[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,n,i,s,u,l){let d=a*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return i[s]=0,i[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return i[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),i[u]=c-i[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[u]-d)/r+1)}},xd=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,u;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let l=-1;if(a?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(i<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Lt.isValidBroadcast(n,[i,u]))throw new Error("gemm: invalid bias shape for broadcast");return[i,u,s]}},kd=-34028234663852886e22,Sd=34028234663852886e22}),Gt,Ir,Se,Ce,j,we,da,Wt,_t,F,Qt,R,H,Td,Ma,Ms,Id,ie=P(()=>{Q(),re(),Gt=64,Ir=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Se=(e,t=1)=>{let r=Ir(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=Ir(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},we=e=>e%4===0?4:e%2===0?2:1,da=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Wt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,_t=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,F=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Qt=(e,t,r,a,n)=>{let i=typeof r=="number",s=i?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Ir(t,n),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},g=B=>typeof B=="string"?B:`${B}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=i?"uniforms.":"",x=`${b}${e}_shape`,$=`${b}${e}_strides`,w="";for(let B=0;B<s-1;B++)w+=`
    let dim${B} = current / ${F($,B,s)};
    let rest${B} = current % ${F($,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;w+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=B=>(y.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),T=[];if(s>=2)for(let B=s-1;B>=0;B--)T.push(`${F($,B,s)} * (indices[${B}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,C=B=>(y.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),A=(...B)=>s===0?"0u":`${h.indices}(${B.map(g).join(",")})`,D=(B,U)=>s<2?`${B}`:`${F(B,U,s)}`,L=(B,U,ae)=>s<2?`${B}=${ae};`:`${F(B,U,s)}=${ae};`,Y={},ee=(B,U)=>{y.broadcastedIndicesToOffset=!0;let ae=`${U.name}broadcastedIndicesTo${e}Offset`;if(ae in Y)return`${ae}(${B})`;let ge=[];for(let N=s-1;N>=0;N--){let de=U.indicesGet("outputIndices",N+U.rank-s);ge.push(`${D($,N)} * (${de} % ${D(x,N)})`)}return Y[ae]=`fn ${ae}(outputIndices: ${U.type.indices}) -> u32 {
             return ${ge.length>0?ge.join("+"):"0u"};
           }`,`${ae}(${B})`},K=(B,U)=>(()=>{if(h.storage===h.value)return`${e}[${B}]=${U};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${U}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),J=B=>(()=>{if(h.storage===h.value)return`${e}[${B}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${B}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${B}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),Z=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${J(`i2o_${e}(indices)`)};
  }`,q=s<2?"":(()=>{let B=u.map(ae=>`d${ae}: u32`).join(", "),U=u.map(ae=>`d${ae}`).join(", ");return`
  fn get_${e}(${B}) -> ${c} {
    return get_${e}ByIndices(${A(U)});
  }`})(),ne=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let U=B.map(g).join(",");return s===0?J("0u"):s===1?J(U[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${U})`)},pe=B=>s<2?J(B):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${B})`),G=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ce=s<2?"":(()=>{let B=u.map(ae=>`d${ae}: u32`).join(", "),U=u.map(ae=>`d${ae}`).join(", ");return`
  fn set_${e}(${B}, value: ${c}) {
    set_${e}ByIndices(${A(U)}, value);
  }`})();return{impl:()=>{let B=[],U=!1;return y.offsetToIndices&&(B.push(S),U=!0),y.indicesToOffset&&(B.push(E),U=!0),y.broadcastedIndicesToOffset&&(Object.values(Y).forEach(ae=>B.push(ae)),U=!0),y.set&&(B.push(ce),U=!0),y.setByIndices&&(B.push(G),U=!0),y.get&&(B.push(q),U=!0),y.getByIndices&&(B.push(Z),U=!0),!i&&U&&B.unshift(`const ${x} = ${h.indices}(${r.join(",")});`,`const ${$} = ${h.indices}(${z.computeStrides(r).join(",")});`),B.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:C,broadcastedIndicesToOffset:ee,indices:A,indicesGet:D,indicesSet:L,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let U=B[s];if(typeof U!="string")throw new Error("value must be string");let ae=B.slice(0,s).map(g).join(",");return s===0?K("0u",U):s===1?K(ae[0],U):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${ae}, ${U})`)},setByOffset:K,setByIndices:(B,U)=>s<2?K(B,U):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${U});`),get:ne,getByOffset:J,getByIndices:pe,usage:a,name:e,strides:$,shape:x,rank:s}},R=(e,t,r,a=1)=>Qt(e,t,r,"input",a),H=(e,t,r,a=1)=>Qt(e,t,r,"output",a),Td=(e,t,r)=>Qt(e,t,r,"atomicOutput",1),Ma=(e,t,r,a=1)=>Qt(e,t,r,"internal",a),Ms=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Gt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Id=(e,t)=>new Ms(e,t)}),Ds,Ei,Ps,Us,Ws,qs,We,Ed,Cd,bt=P(()=>{Q(),re(),$e(),ie(),Ds=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ei=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ps=(e,t)=>z.sortBasedOnPerm(e,Ei(e.length,t)),Us=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},Ws=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},qs=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},We=(e,t)=>{let r=e.dataType,a=e.dims.length,n=Ei(a,t),i=Ps(e.dims,n),s=e.dims,u=i,l=a<2||qs(n,e.dims),d;if(l)return d=y=>{let b=R("input",r,s,4),x=H("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Ws(e.dims,n),h=z.areEqual(f,[2,3,1]),g=z.areEqual(f,[3,1,2]);if(c.length===2||h||g){s=h?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=b=>{let x=R("a",r,s.length),$=H("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${b.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:b},...j(s,u)]}},getShaderSource:d}}return d=y=>{let b=R("a",r,s.length),x=H("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,x)}

  ${Us(n,a,b,x)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...j(s,u)]}},getShaderSource:d}},Ed=(e,t)=>{Ds(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Cd=e=>he({perm:e.perm})}),Ls,Gs,Vs,Hs,Fs,js,Ks,Xs,Zs,Qs,He,zd,Ad,Od,Rd,Bd,Nd,Md,Dd,Pd,Ud,xm=P(()=>{Q(),re(),ie(),Da(),bt(),Ls={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Gs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Vs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Hs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fs=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},js=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},Ks=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},Xs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Zs=(e,t)=>{let r=[];if(!Xs(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Qs=(e,t,r,a,n,i,s)=>{let u=r[0].dims,l=z.size(i),d=z.size(s),c=R("_A",r[0].dataType,u),f=H("output",n,i),h=64;l===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,y=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Vs[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Ls[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Gs[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Hs[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},He=(e,t,r,a)=>{let n=e.inputs.length===1?r:pa(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((g,y)=>y));let s=z.normalizeAxes(i,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Zs(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(We(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Fs(u.length,l.dims.length));let[c,f]=js(l.dims,u),h=c;n.keepDims&&(h=Ks(c,s)),e.compute(Qs(t,n.cacheKey,[l],a,e.inputs[0].dataType,h,f),{inputs:[l]})},zd=(e,t)=>{He(e,"ReduceMeanShared",t,"mean")},Ad=(e,t)=>{He(e,"ReduceL1Shared",t,"l1")},Od=(e,t)=>{He(e,"ReduceL2Shared",t,"l2")},Rd=(e,t)=>{He(e,"ReduceLogSumExpShared",t,"logSumExp")},Bd=(e,t)=>{He(e,"ReduceMaxShared",t,"max")},Nd=(e,t)=>{He(e,"ReduceMinShared",t,"min")},Md=(e,t)=>{He(e,"ReduceProdShared",t,"prod")},Dd=(e,t)=>{He(e,"ReduceSumShared",t,"sum")},Pd=(e,t)=>{He(e,"ReduceSumSquareShared",t,"sumSquare")},Ud=(e,t)=>{He(e,"ReduceLogSumShared",t,"logSum")}}),Fe,Ys,Gr,pa,je,Js,eo,to,ro,io,ao,no,so,oo,uo,Ke,Wd,qd,Ld,Gd,Vd,Hd,Fd,jd,Kd,Xd,Da=P(()=>{Q(),re(),$e(),ie(),xm(),Fe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ys=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Gr=(e,t,r,a,n,i,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=z.normalizeAxes(n,c),h=!u&&f.length===0;d.forEach((b,x)=>{h||f.indexOf(x)>=0?s&&l.push(1):l.push(b)});let g=l.length,y=z.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let x=[],$=R("_A",r[0].dataType,c),w=H("output",i,g),S=a($,w,f),k=S[2];for(let T=0,E=0;T<c;T++)h||f.indexOf(T)>=0?(s&&E++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${$.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(x.push(`${$.indicesSet("input_indices",T,w.indicesGet("output_indices",E))};`),E++);return`

        ${b.registerUniform("output_size","u32").declareVariables($,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?w.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:i}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...j(d,l)]})}},pa=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},je=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:pa(n,r);e.compute(Gr(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?Ys:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},Js=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},eo=(e,t)=>{Fe(e.inputs),je(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},to=(e,t)=>{Fe(e.inputs),je(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ro=(e,t)=>{Fe(e.inputs),je(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},io=(e,t)=>{Fe(e.inputs),je(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},ao=(e,t)=>{Fe(e.inputs),je(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},no=(e,t)=>{Fe(e.inputs),je(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},so=(e,t)=>{Fe(e.inputs),je(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},oo=(e,t)=>{Fe(e.inputs),je(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},uo=(e,t)=>{Fe(e.inputs),je(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ke=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},Wd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):zd(e,t)},qd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Ad(e,t)},Ld=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Od(e,t)},Gd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Rd(e,t)},Vd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Bd(e,t)},Hd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Nd(e,t)},Fd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Md(e,t)},jd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Dd(e,t)},Kd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Pd(e,t)},Xd=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Js(e,t):Ud(e,t)}}),Ci,Zd,Qd,ca,km=P(()=>{Q(),$e(),Da(),Ci=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Zd=(e,t)=>{Ci(e.inputs);let r=(a,n,i)=>{let s=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Gr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qd=(e,t)=>{Ci(e.inputs);let r=(a,n,i)=>{let s=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Gr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ca=e=>he(e)}),lo,Er,po,co,fo,lr,ho,Yd,Pa=P(()=>{Q(),re(),Na(),ie(),lo=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let x=y+b,$=-1,w=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:y,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Er=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,po=(e,t,r,a,n,i,s,u)=>{let l=we(s?1:i),d=64,c=i/l;c<d&&(d=32);let f=Math.ceil(i/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:c},{type:12,data:f}],g=Se(e.dataType,l),y=Ce(1,l),b=["type"];s&&b.push("type"),u&&b.push("type");let x=$=>{let w=H("x",e.dataType,e.dims,l),S=[w],k=s?R("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let T=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let E=Ce(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...S)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Er(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:b},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/d),y:n,z:t*r},programUniforms:h})}},co=(e,t,r,a,n,i,s,u,l)=>{let d=s+i.kvSequenceLength,c=[i.batchSize,i.numHeads,i.sequenceLength,d],f=e>1&&a,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=f?[i.batchSize,h,d,i.headSize]:void 0,y=i.nReps?i.nReps:1,b=i.scale===0?1/Math.sqrt(i.headSize):i.scale,x=we(i.headSize),$=i.headSize/x,w=12,S={x:Math.ceil(d/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:y}],T=f&&a&&z.size(a.dims)>0,E=["type","type"];T&&E.push("type"),n&&E.push("type"),u&&E.push("type"),l&&E.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let A=D=>{let L=R("q",t.dataType,t.dims,x),Y=R("key",r.dataType,r.dims,x),ee=[L,Y];if(T){let G=R("past_key",a.dataType,a.dims,x);ee.push(G)}n&&ee.push(R("attention_bias",n.dataType,n.dims));let K=u?R("seq_lens",u.dataType,u.dims):void 0;K&&ee.push(K);let J=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;J&&ee.push(J);let Z=H("output",t.dataType,c),q=[Z];f&&q.push(H("present_key",t.dataType,g,x));let ne=Ce(1,x),pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${L.type.storage}, ${w*w}>;
  ${D.registerUniforms(pe).declareVariables(...ee,...q)}
  ${D.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Er(K,J,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${n!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:S,programUniforms:k}),getShaderSource:A}},fo=(e,t,r,a,n,i,s=void 0,u=void 0)=>{let l=i+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,f=e>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=f?[n.batchSize,h,l,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,c],b=12,x={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&a&&z.size(a.dims)>0,S=["type","type"];w&&S.push("type"),s&&S.push("type"),u&&S.push("type");let k=[{dims:y,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=E=>{let C=R("probs",t.dataType,t.dims),A=R("v",r.dataType,r.dims),D=[C,A];w&&D.push(R("past_value",a.dataType,a.dims));let L=s?R("seq_lens",s.dataType,s.dims):void 0;s&&D.push(L);let Y=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(Y);let ee=[H("output",t.dataType,y)];f&&ee.push(H("present_value",t.dataType,g));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${C.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${C.type.value}, ${b*b}>;
  ${E.registerUniforms(K).declareVariables(...D,...ee)}
  ${E.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Er(L,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:$}),getShaderSource:T}},lr=(e,t,r,a,n,i,s,u,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=h>1?d.pastSequenceLength:0,y=g+d.kvSequenceLength,b=l&&z.size(l.dims)>0?l:void 0,x=[t,r];h>1&&s&&z.size(s.dims)>0&&x.push(s),b&&x.push(b),c&&x.push(c),f&&x.push(f);let $=e.compute(co(h,t,r,s,b,d,g,c,f),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(po($,d.batchSize,d.numHeads,g,d.sequenceLength,y,c,f),{inputs:c&&f?[$,c,f]:[$],outputs:[]});let w=[$,a];h>1&&u&&z.size(u.dims)>0&&w.push(u),c&&w.push(c),f&&w.push(f),e.compute(fo(h,$,a,u,d,g,c,f),{inputs:w,outputs:h>1?[0,2]:[0]})},ho=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=H("output_q",l[0].dataType,r),g=H("output_k",l[0].dataType,r),y=H("output_v",l[0].dataType,r),b=R("input",l[0].dataType,l[0].dims),x=R("weight",l[1].dataType,l[1].dims),$=R("bias",l[2].dataType,l[2].dims),w=b.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(b,x,$,h,g,y)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Yd=(e,t)=>{let r=lo(e.inputs,t),[a,n,i]=ho(e,r);return lr(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),mo,go,yo,Jd,Sm=P(()=>{Qe(),Q(),re(),$e(),ie(),mo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let s=n.length;if(s!==a.length)throw new Error(`${i}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==a[l])throw new Error(`${i}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},go=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,s=a?we(i[i.length-1]):1,u=n==="NHWC"&&i.length>1?s:1,l=z.size(i)/s,d=a,c=d?i.length:i,f=R("x",e[0].dataType,e[0].dims,s),h=R("scale",e[1].dataType,e[1].dims,u),g=R("bias",e[2].dataType,e[2].dims,u),y=R("inputMean",e[3].dataType,e[3].dims,u),b=R("inputVar",e[4].dataType,e[4].dims,u),x=H("y",e[0].dataType,c,s),$=()=>{let S="";if(a)S=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<h.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},w=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,h,g,y,b,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...j(i)]:[{type:12,data:l}]})}},yo=e=>he(e),Jd=(e,t)=>{let{inputs:r,outputCount:a}=e,n=yo({...t,outputCount:a});if(_e.webgpu.validateInputContent&&mo(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(go(r,n))}}),_o,bo,ep,Tm=P(()=>{re(),ie(),_o=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bo=e=>{let t=e[0].dims,r=e[0].dims[2],a=z.size(t)/4,n=e[0].dataType,i=R("input",n,t,4),s=R("bias",n,[r],4),u=R("residual",n,t,4),l=H("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},ep=e=>{_o(e.inputs),e.compute(bo(e.inputs))}}),wo,ue,tp,rp,ip,ap,np,sp,op,up,lp,$o,dp,pp,cp,fp,sr,hp,Dr,mp,gp,yp,_p,bp,wp,$p,vp,xp,kp,Sp,Tp,Ip,Ep,Cp,zp,zi,Ap,fa,ha,Op,Rp,Bp,vo,xo,Np,Ua=P(()=>{Q(),re(),$e(),ie(),wo=(e,t,r,a,n,i,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=R("inputData",r,[u],4),c=H("outputData",a,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ue=(e,t,r,a,n,i=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>wo(d,z.size(e.dims),e.dataType,i,r,a,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(z.size(d[0].dims)/64/4)},programUniforms:l})}},tp=e=>{e.compute(ue(e.inputs[0],"Abs","abs"))},rp=e=>{e.compute(ue(e.inputs[0],"Acos","acos"))},ip=e=>{e.compute(ue(e.inputs[0],"Acosh","acosh"))},ap=e=>{e.compute(ue(e.inputs[0],"Asin","asin"))},np=e=>{e.compute(ue(e.inputs[0],"Asinh","asinh"))},sp=e=>{e.compute(ue(e.inputs[0],"Atan","atan"))},op=e=>{e.compute(ue(e.inputs[0],"Atanh","atanh"))},up=e=>he(e),lp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ue(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},$o=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},dp=(e,t)=>{let r=t||$o(e.inputs),a=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},pp=e=>{e.compute(ue(e.inputs[0],"Ceil","ceil"))},cp=e=>{e.compute(ue(e.inputs[0],"Cos","cos"))},fp=e=>{e.compute(ue(e.inputs[0],"Cosh","cosh"))},sr=e=>he(e),hp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,mp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Dr(t)))},gp=e=>{e.compute(ue(e.inputs[0],"Exp","exp"))},yp=e=>{e.compute(ue(e.inputs[0],"Floor","floor"))},_p=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Dr(t)))},bp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},wp=e=>{e.compute(ue(e.inputs[0],"Not",t=>`!${t}`))},$p=e=>{e.compute(ue(e.inputs[0],"Neg",t=>`-${t}`))},vp=e=>{e.compute(ue(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},xp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},kp=e=>{e.compute(ue(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Sp=e=>he(e),Tp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ip=e=>{e.compute(ue(e.inputs[0],"Sin","sin"))},Ep=e=>{e.compute(ue(e.inputs[0],"Sinh","sinh"))},Cp=e=>{e.compute(ue(e.inputs[0],"Sqrt","sqrt"))},zp=e=>{e.compute(ue(e.inputs[0],"Tan","tan"))},zi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ap=e=>{e.compute(ue(e.inputs[0],"Tanh",zi))},fa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${zi("v")};
}
`,ha=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Op=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"FastGelu",ha,fa(t),void 0,e.inputs[0].dataType))},Rp=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(ue(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Bp=e=>{e.compute(ue(e.inputs[0],"Log","log"))},vo=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,xo=e=>`quick_gelu_impl(${e})`,Np=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"QuickGelu",xo,vo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ko,So,Mp,Im=P(()=>{re(),ie(),Ua(),ko=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},So=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),a=R("bias",e[0].dataType,[e[0].dims[2]],4),n=H("output",e[0].dataType,t,4),i=z.size(t)/4,s=Se(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,a,n)}

  ${Dr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Mp=e=>{ko(e.inputs),e.compute(So(e.inputs))}}),To,Io,Xe,Dp,Pp,Up,Wp,qp,Lp,Gp,Vp,Hp,Fp,Em=P(()=>{Q(),re(),ie(),To=(e,t,r,a,n,i,s,u,l,d,c,f)=>{let h,g;typeof u=="string"?h=g=(w,S)=>`${u}((${w}),(${S}))`:typeof u=="function"?h=g=u:(h=u.scalar,g=u.vector);let y=H("outputData",c,a.length,4),b=R("aData",l,t.length,4),x=R("bData",d,r.length,4),$;if(n)if(i){let w=z.size(t)===1,S=z.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;w||S?$=y.setByOffset("global_idx",g(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(s||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",g(b.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(S,k,T="")=>{let E=`aData[indexA${k}][componentA${k}]`,C=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${y.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${T}(${h(E,C)});
          `};c===9?$=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,x,y)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Io=(e,t,r,a,n,i,s=r.dataType)=>{let u=r.dims.map(b=>Number(b)??1),l=a.dims.map(b=>Number(b)??1),d=!z.areEqual(u,l),c=u,f=z.size(u),h=!1,g=!1,y=[d];if(d){let b=Lt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),f=z.size(c);let x=z.size(u)===1,$=z.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;y.push(x),y.push($),y.push(w),y.push(S);let k=1;for(let T=1;T<c.length;T++){let E=u[u.length-T],C=l[l.length-T];if(E===C)k*=E;else break}k%4===0?(g=!0,h=!0):(x||$||w||S)&&(h=!0)}else h=!0;return y.push(h),{name:e,shaderCache:{hint:t+y.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>To(b,u,l,c,h,d,g,n,r.dataType,a.dataType,s,i),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(c)/4)},...j(u,l,c)]})}},Xe=(e,t,r,a,n,i)=>{e.compute(Io(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Dp=e=>{Xe(e,"Add",(t,r)=>`${t}+${r}`)},Pp=e=>{Xe(e,"Div",(t,r)=>`${t}/${r}`)},Up=e=>{Xe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Wp=e=>{Xe(e,"Mul",(t,r)=>`${t}*${r}`)},qp=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Xe(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Lp=e=>{Xe(e,"Sub",(t,r)=>`${t}-${r}`)},Gp=e=>{Xe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Vp=e=>{Xe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Hp=e=>{Xe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Fp=e=>{Xe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Eo,Co,zo,Ao,jp,Kp,Cm=P(()=>{Q(),re(),$e(),ie(),Eo=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},Co=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,zo=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Ao=(e,t,r,a)=>{let n=z.size(r),i=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:n}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],i[b]=u,d.push(e[b].dims.length),s[b]=R(`input${b}`,a,d[b]),l.push("rank"),c.push({type:12,data:i[b]});for(let b=0;b<e.length;++b)c.push(...j(e[b].dims));c.push(...j(r));let f=H("output",a,r.length),h=f.indicesGet("indices",t),g=Array.from(Array(i.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),y=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)b.registerUniform(`sizeInConcatAxis${x}`,"u32");return b.declareVariables(...s,f)})()}

  ${Co(i.length,g)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${zo(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:y}},jp=(e,t)=>{let r=e.inputs,a=r[0].dims,n=z.normalizeAxis(t.axis,a.length);Eo(r,n);let i=a.slice();i[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(u=>z.size(u.dims)>0);e.compute(Ao(s,n,i,r[0].dataType),{inputs:s})},Kp=e=>he({axis:e.axis})}),zt,At,Ot,Wa,Bt=P(()=>{Q(),re(),zt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},At=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ot=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Wa=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[kd,Sd];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Te,Xp,qa=P(()=>{Te=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Xp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zp,zm=P(()=>{Zp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ur,La,Ga=P(()=>{Q(),re(),ie(),Bt(),ur=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${F(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,F(n,u+i,a))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},La=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=we(d),h=we(c),g=we(l),y=z.size(r)/f/g,b=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),$=[z.size(x),l,d],w=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];At(t,w),w.push(...j(x,s,u)),b&&w.push(...j(e[2].dims)),w.push(...j($));let S=k=>{let T=Ma("batch_dims",e[0].dataType,x.length),E=R("a",e[0].dataType,s.length,h),C=R("b",e[1].dataType,u.length,f),A=H("output",e[0].dataType,$.length,f),D=Se(A.type.tensor),L=zt(t,A.type.value,D),Y=[E,C],ee="";if(b){let Z=n?f:1;Y.push(R("bias",e[2].dataType,e[2].dims.length,Z)),ee=`${n?`value += bias[col / ${Z}];`:`value += ${A.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ot(t,K);let J=()=>{let Z=`var a_data: ${E.type.value};`;for(let q=0;q<h;q++)Z+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${f}];`;for(let q=0;q<g;q++){Z+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${h}];`;for(let ne=0;ne<h;ne++)Z+=`
            values[${q}] = fma(${C.type.value}(a_data${h===1?"":`[${ne}]`}), b_data${ne}, values[${q}]);
`}return Z};return`
  ${k.registerUniforms(K).registerInternalVariables(T).declareVariables(...Y,A)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${ur("a_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${ur("b_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${A.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${J()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${ee}
      ${L}
      let cur_indices = ${A.type.indices}(batch, row + i, col);
      let offset = ${A.indicesToOffset("cur_indices")};
      ${A.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${g};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:S}}}),Oo,Ro,ma,Ai,Bo,ga,No,Vr,Va=P(()=>{Q(),re(),ie(),Bt(),Ga(),qa(),Oo=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ro=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ma=(e,t,r="f32",a,n=!1,i=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:i,f=n?i:l,h=c/t[0],g=i/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&c%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Oo(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ro(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ai=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Bo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ga=(e,t,r="f32",a,n=!1,i=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=n?d:i,h=n?i:d;if(!(h%t[1]===0&&f%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],y=f/t[0],b=i/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Ai(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ai(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Bo(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},No=(e,t,r,a,n=!1)=>{let[i,s,u,l]=a,d=Se(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Te(e,d)} {
      var value = ${Te(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${ur("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Te(e,d)} {
      var value = ${Te(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${ur("bIndices",u,u.rank-2,i.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Te(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Te(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Vr=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=z.size(c),h=s[s.length-2],g=s[s.length-1],y=u[u.length-1],b=g%4===0&&y%4===0,x=h<=8?[4,1,1]:[4,4,1],$=[8,8,1],w=[Math.ceil(y/$[0]/x[0]),Math.ceil(h/$[1]/x[1]),Math.ceil(f/$[2]/x[2])],S=b?4:1,k=[...l,h,g/S],T=k.length,E=[...d,g,y/S],C=E.length,A=[f,h,y/S],D=[{type:6,data:h},{type:6,data:y},{type:6,data:g}];At(t,D),D.push(...j(c,k,E));let L=["rank","rank"],Y=e.length>2;Y&&(D.push(...j(e[2].dims)),L.push("rank")),D.push(...j(A));let ee=K=>{let J=c.length,Z=Ma("batchDims",e[0].dataType,J,1),q=Se(e[0].dataType),ne=R("a",e[0].dataType,T,S),pe=R("b",e[1].dataType,C,S),G=H("result",e[0].dataType,A.length,S),ce=[ne,pe];if(Y){let N=n?S:1;ce.push(R("bias",e[2].dataType,e[2].dims.length,N))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ot(t,B);let U=Se(G.type.tensor),ae=zt(t,G.type.value,U),ge=No(S,Y,ae,[Z,ne,pe,G],n);return`
  ${K.registerUniforms(B).registerInternalVariables(Z).declareVariables(...ce,G)}
  ${ge}
  ${b?ma(x,$,q,Z):ga(x,$,q,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${b};${n}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:D}),getShaderSource:ee}}}),Mo,Qp,Am=P(()=>{Q(),st(),ie(),Bt(),qa(),zm(),Va(),Mo=(e,t,r,a,n=!1,i,s=4,u=4,l=4,d="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Te(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${b}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Te(s,d)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Te(s,d)}(0.0);`,k=e?a&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Te(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Te(u,d)}(0.0);`,T=Te(l,d),E=Te(e?s:u,d),C=Te(e?u:s,d),A=zt(i,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Xp(n)}
      ${A}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Qp=(e,t,r,a,n,i,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],g=d?r[1]:r[2],y=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&y%4===0,x=d?y:h*g,$=d?h*g:y,w=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/w[0]/S[0]),Math.ceil($/w[1]/S[1]),Math.ceil(f/w[2]/S[2])];se("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=b?d&&c%4!==0?3:4:1,E=w[1]*S[1],C=w[0]*S[0],A=Math.max(w[0]*T,w[1]),D=a%E===0,L=n%C===0,Y=i%A===0,ee=b?[T,4,4]:[1,1,1],K=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];At(t,K),K.push(...j(e[0].dims,e[1].dims));let J=["rank","rank"];s&&(K.push(...j(e[2].dims)),J.push("rank")),K.push(...j(r));let Z=q=>{let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ot(t,ne);let pe=b?4:1,G=Se(e[0].dataType),ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${G}>`:G}) {
        result[flatIndex] = ${b?`vec4<${G}>`:G}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${G}>`:G}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,B=R("x",e[0].dataType,e[0].dims.length,T===3?1:T),U=R("w",e[1].dataType,e[1].dims.length,pe),ae=[B,U],ge=H("result",e[0].dataType,r.length,pe);if(s){let N=R("bias",e[2].dataType,e[2].dims.length,pe);ae.push(N),ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${G}>`:G} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Zp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(ne).declareVariables(...ae,ge)}
        ${ce}
        ${Mo(d,D,L,Y,s,t,ee[0],ee[1],ee[2],G)}
        ${b?ma(S,w,G,void 0,!d,A):ga(S,w,G,void 0,!d,A,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${b};${D};${L};${Y};${E};${C};${A}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:Z}}}),Do,Oi,Yt,Po,Ri,Uo,Yp,Jp,Om=P(()=>{Q(),st(),re(),ie(),Bt(),qa(),Do=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Oi=e=>typeof e=="number"?[e,e,e]:e,Yt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Po=(e,t,r,a=1)=>{let n=Yt(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},Ri=(e,t,r,a,n)=>{n==null&&(n=Po(e,t[0],a[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*n)/a[s]+1));return i},Uo=(e,t,r,a,n,i,s,u,l,d)=>{let c,f,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Ri([t,r,a,1],[u,l,d],1,[n,i,s],e);f=y[0],h=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every((b,x,$)=>b===$[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Ri([t,r,a,1],[u,l,d],1,[n,i,s],e[0]);f=y[0],h=y[1],g=y[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/i),g=Math.ceil(a/s);let y=(f-1)*n+u-t,b=(h-1)*i+l-r,x=(g-1)*s+d-a,$=Math.floor(y/2),w=y-$,S=Math.floor(b/2),k=b-S,T=Math.floor(x/2),E=x-T;c={top:S,bottom:k,left:T,right:E,front:$,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:g}},Yp=(e,t,r,a,n,i=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,g,y,b]=t,[x,$,w]=Oi(r),[S,k,T]=Oi(a),E=Yt(g,S),C=Yt(y,k),A=Yt(b,T),{padInfo:D,outDepth:L,outHeight:Y,outWidth:ee}=Uo(n,l,d,c,x,$,w,E,C,A),K=i?h*f:h,J=[0,0,0,0,0];return s==="channelsFirst"?J=[u,K,L,Y,ee]:s==="channelsLast"&&(J=[u,L,Y,ee,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:L,outHeight:Y,outWidth:ee,outChannels:K,padInfo:D,strideDepth:x,strideHeight:$,strideWidth:w,filterDepth:g,filterHeight:y,filterWidth:b,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:A,dilationDepth:S,dilationHeight:k,dilationWidth:T,inShape:e,outShape:J,filterShape:t}},Jp=(e,t,r,a,n,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((x,$)=>$)},d=[Math.ceil(Do(l.x.map(x=>r[x]))/u[0]),1,1];se("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=z.size(r),h=[{type:12,data:f},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];At(t,h),h.push(...j(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(h.push(...j(e[2].dims)),g.push("rank")),h.push(...j(r));let b=x=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ot(t,$);let w=1,S=Se(e[0].dataType),k=R("x",e[0].dataType,e[0].dims.length,c),T=R("W",e[1].dataType,e[1].dims.length,w),E=[k,T],C=H("result",e[0].dataType,r.length,w),A="";if(y){let Y=R("bias",e[2].dataType,e[2].dims.length,w);E.push(Y),A+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?F("coords",4,5):F("coords",1,5)}];
        }`}let D=Te(c,S),L=zt(t,D,S);return`
            ${A}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${x.registerUniforms($).declareVariables(...E,C)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${F("coords",0,k.rank)};
              let d2 = ${s?F("coords",k.rank-1,k.rank):F("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?F("coords",1,k.rank):F("coords",2,k.rank)},
              ${s?F("coords",2,k.rank):F("coords",3,k.rank)},
              ${s?F("coords",3,k.rank):F("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?F("uniforms.x_shape",1,k.rank):F("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?F("uniforms.x_shape",2,k.rank):F("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?F("uniforms.x_shape",3,k.rank):F("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?F("uniforms.x_shape",4,k.rank):F("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:b}}}),ec,tc,Rm=P(()=>{Q(),re(),ie(),Bt(),ec=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?we(d):1,h=z.size(r)/f,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];At(t,g),g.push(...j(s,[u[0],u[1],u[2],u[3]/f]));let y=n?["rank","rank","rank"]:["rank","rank"];g.push(...j([r[0],r[1],r[2],r[3]/f]));let b=x=>{let $=H("output",e[0].dataType,r.length,f),w=Se($.type.tensor),S=zt(t,$.type.value,w),k=R("x",e[0].dataType,s.length),T=R("w",e[1].dataType,u.length,f),E=[k,T];n&&E.push(R("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ot(t,C);let A=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(C).declareVariables(...E,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${A}
    ${i}
    ${S}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b}},tc=(e,t,r,a)=>{let n=e.length>2,i=we(r[3]),s=we(r[2]),u=z.size(r)/i/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],c=[r[0],r[1],r[2],r[3]/i],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];At(t,f),f.push(...j(l,d,c));let h=(s-1)*t.strides[1]+d[1],g=y=>{let b=H("output",e[0].dataType,c.length,i),x=Se(b.type.tensor),$=zt(t,b.type.value,x),w=R("x",e[0].dataType,l.length,i),S=R("w",e[1].dataType,d.length,i),k=[w,S];n&&k.push(R("b",e[2].dataType,e[2].dims,i));let T=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ot(t,E),`
  ${y.registerUniforms(E).declareVariables(...k,b)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${$}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:g}}}),Wo,Cr,qo,zr,ya,Bi,Lo,Go,_a,Bm=P(()=>{re(),Am(),Om(),Va(),Rm(),Bt(),Ga(),bt(),Wo=(e,t,r,a,n,i)=>{let s=e[0],u=e.slice(i?1:2,i?3:4),l=u.length,d=t[0],c=t.slice(2).map((h,g)=>h+(h-1)*(r[g]-1)),f=u.map((h,g)=>h+a[g]+a[g+l]).map((h,g)=>Math.floor((h-c[g]+n[g])/n[g]));return f.splice(0,0,s),f.splice(i?3:1,0,d),f},Cr=[2,3,1,0],qo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},zr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();Lr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},ya=e=>{let t=Wa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Bi=(e,t,r,a)=>{let n=r.format==="NHWC",i=Wo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let E=[t[0]];if(n){let C=e.kernelCustomData.wT??e.compute(We(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(tc(E,r,i,a),{inputs:E}):e.compute(ec(E,r,i,a),{inputs:E});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],f=t[1].dims[3],h=i[n?1:2],g=i[n?2:3],y=i[n?3:1],b=n&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],C,A,D,L=[];if(n){let K=e.kernelCustomData.wT??e.compute(We(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),b){let J=u*l*d;C=t[0].reshape([1,E,J]),A=K.reshape([1,J,y]),D=[1,E,y]}else C=t[0].reshape([E,u*l,d]),A=K.reshape([1,d,y]),D=[E,h*g,y];L.push(C),L.push(A)}else C=t[0].reshape([E,d,u*l]),A=t[1].reshape([1,y,d]),D=[E,y,h*g],L.push(A),L.push(C);s&&L.push(t[2]);let Y=D[2],ee=L[0].dims[L[0].dims.length-1];Y<8&&ee<8?e.compute(La(L,r,i,D,n,a),{inputs:L}):e.compute(Vr(L,r,i,D,n,a),{inputs:L});return}let x=!0,$=e.kernelCustomData.wT??e.compute(We(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let w=[t[0],$];s&&w.push(t[2]);let S=n?h*g:y,k=n?y:h*g,T=c*f*d;e.compute(Qp(w,r,i,S,k,T,s,x,a),{inputs:w})},Lo=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=zr({...t,pads:n,strides:i,dilations:s,kernelShape:u},a);Bi(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Go=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=zr(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Yp(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(Jp(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},_a=(e,t)=>{if(qo(e.inputs,t),e.inputs[0].dims.length===3)Lo(e,t);else if(e.inputs[0].dims.length===5)Go(e,e.inputs,t);else{let r=zr(t,e.inputs);Bi(e,e.inputs,r)}}}),rc,Nm=P(()=>{Q(),st(),re(),ie(),rc=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=i?we(l):1,f=i?we(d):1,h=i?d===1?c:f:1,g=z.size(n)/f,y=[Math.ceil(g/64),1,1];se("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let b=["rank","rank"],x=[t.strides[0],t.strides[1]],$=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],w=[t.dilations[0],t.dilations[1]],S=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:g},{type:12,data:x},{type:12,data:$},{type:12,data:w},{type:12,data:S},{type:6,data:k},{type:12,data:l},{type:12,data:d},...j(e[0].dims,e[1].dims)];a&&(T.push(...j(e[2].dims)),b.push("rank")),T.push(...j(n));let E=C=>{let A=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],D=Se(e[0].dataType),L=i?1:2,Y=i?2:3,ee=i?3:1,K=R("W",e[1].dataType,e[1].dims.length,h),J=R("Dy",e[0].dataType,e[0].dims.length,c),Z=[J,K];a&&Z.push(R("bias",e[2].dataType,[n[ee]].length,f));let q=H("result",e[0].dataType,n.length,f),ne=()=>{let G="";if(c===1)G+=`
        let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${K.getByOffset(`w_offset / ${h}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)G+=`
          let wValue = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${h}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ce=0;ce<c;ce++)G+=`
            let wValue${ce} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return G},pe=`
            let outputIndices = ${q.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${q.indicesGet("outputIndices",0)};
            let d1 = ${q.indicesGet("outputIndices",ee)};
            let r = ${q.indicesGet("outputIndices",L)};
            let c = ${q.indicesGet("outputIndices",Y)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${D}(dyRCorner) + ${D}(wR)) / ${D}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${D}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${D}(dyCCorner) + ${D}(wC)) / ${D}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${D}(uniforms.Dy_shape[${Y}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${c}) {
                  let xValue = ${i?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
                  ${ne()}
                  inputChannel = inputChannel + ${c};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${f}]`:""};
            ${q.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(A).declareVariables(...Z,q)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${pe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${h}${f}${d===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:E}}}),Vo,Ho,Fo,Ni,ic,jo,Mi,Ko,ac,Mm=P(()=>{Nm(),Bt(),bt(),Vo=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,Ho=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},Fo=(e,t,r,a,n,i,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],g=t[u?3:1]*n;for(let y=0,b=e.length-c-(u?1:0);y<c;++y,++b){let x=e[b],$=f?x*s[y]:d[y],w=Vo(x,s[y],i[y],t[b],r[y],$);Ho(w,a,i,y,y+c),f&&d.push(s[y]*(x-1)+l[y]+(t[b]-1)*r[y]+1-i[y]-i[y+c])}d.splice(0,0,h),d.splice(u?3:1,0,g)},Ni=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Fo(u,r,l,e.autoPad,e.group,n,d,a,s,i);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:i,dilations:l,strides:d}),c},ic=e=>{let t=Wa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},jo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Mi=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(rc(i,r,a),{inputs:i})},Ko=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),i=[1].concat(i),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=Ni({...t,pads:u,strides:s,dilations:i,kernelShape:n,outputPadding:l},a);Mi(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},ac=(e,t)=>{if(jo(e.inputs,t),e.inputs[0].dims.length===3)Ko(e,t);else{let r=Ni(t,e.inputs);Mi(e,e.inputs,r)}}}),Xo,nc,sc,Dm=P(()=>{Q(),re(),$e(),ie(),Xo=(e,t,r,a)=>{let n=z.size(t),i=t.length,s=R("input",e,i),u=H("output",e,i),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=z.normalizeAxis(l,i),c=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=F("uniforms.input_shape","uniforms.axis",i),y=a.reverse?h+(a.exclusive?" + 1":""):"0",b=a.reverse?g:h+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...j(t,t)]}),getShaderSource:c}},nc=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(Xo(a,r,n,t),{inputs:[0]})},sc=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),Zo,Qo,Yo,oc,uc,Pm=P(()=>{Q(),re(),$e(),ie(),Zo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Qo=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},Yo=(e,t)=>{let r,a,n,i,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,n,i]=e.dims,s=c?[r,a,n,d,d,i/d**2]:[r,a,n,i/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,i/d**2,a,n]:[r,i/d**2,d,d,a,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,g=e.dataType,y=R("a",g,h),b=H("output",g,h),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,b)}

  ${Qo(u,h,y,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let w=l?[r,a*d,n*d,i/d**2]:[r,i/d**2,a*d,n*d],S=z.size(w),k=f.dims,T=z.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...j(k,T)]}},getShaderSource:x}},oc=(e,t)=>{Zo(e.inputs),e.compute(Yo(e.inputs[0],t))},uc=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ar,Jt,Di,Jo,eu,tu,ru,Pi,iu,lc,dc,Um=P(()=>{Q(),re(),$e(),ie(),Ar="[a-zA-Z]|\\.\\.\\.",Jt="("+Ar+")+",Di="^"+Jt+"$",Jo="("+Jt+",)*"+Jt,eu="^"+Jo+"$",tu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ru=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(eu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let u=e[s].dims.slice();if(!i.match(RegExp(Di)))throw new Error("Invalid LHS term");let l=this.processTerm(i,!0,u,s);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(Jt)))throw new Error("Invalid RHS");(n=a.match(RegExp(Ar,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,s=[],u=0;if(!e.match(RegExp(Di))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ar,"g")),d=new tu(a);return l==null||l.forEach((c,f)=>{if(c==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let h=n-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let y=String.fromCharCode(48+g);d.addSymbol(y,f+g),this.addSymbol(y,r[u++],a)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],a)}),d}},Pi=e=>e+"_max",iu=(e,t,r,a)=>{let n=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),i=z.size(a),s=H("output",t,a.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",y=[],b=[],x=[],$=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var E;if(r.rhs.symbolToIndices.has(T)){let C=(E=r.rhs.symbolToIndices.get(T))==null?void 0:E[0];C!==void 0&&r.lhs.forEach((A,D)=>{if(k.inputIndices.includes(D)){let L=A.symbolToIndices.get(T);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(Y=>{c.push(`${n[D].indicesSet(`input${D}Indices`,Y,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,A)=>{if(k.inputIndices.includes(A)){let D=C.symbolToIndices.get(T);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(L=>{y.push(`${n[A].indicesSet(`input${A}Indices`,L,`${T}`)}`)}),$.push(`prod *= ${n[A].getByIndices(`input${A}Indices`)};`)}}),b.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Pi(T)}; ${T}++) {`),x.push("}")});let S=w?[...c,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,h,...b,...y,f,...$,g,...x];return`
            ${d.registerUniforms(u.map(k=>({name:`${Pi(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>{var h;return{type:12,data:((h=r.symbolToInfo.get(f))==null?void 0:h.dimValue)||0}});d.push({type:12,data:i});let c=e.map((f,h)=>[...j(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...j(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}},getShaderSource:l}},lc=(e,t)=>{let r=new ru(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,s)=>i.dims);e.compute(iu(n,e.inputs[0].dataType,r,a))},dc=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),au,Ui,nu,su,pc,Wm=P(()=>{Q(),re(),ie(),au=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ui=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},nu=(e,t)=>e.length>t.length?Ui(e,t):Ui(t,e),su=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=nu(t,r),n=e[0].dataType,i=n===9||z.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=i||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(z.size(a)/u),d=f=>{let h=R("input",n,t.length,s),g=H("output",n,a.length,u),y;if(n===9){let b=(x,$,w="")=>`
          let outputIndices${$} = ${g.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${h.broadcastedIndicesToOffset(`outputIndices${$}`,g)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${w}(${h.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...j(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},pc=e=>{au(e.inputs),e.compute(su(e.inputs),{inputs:[0]})}}),ou,cc,qm=P(()=>{Q(),re(),ie(),Ua(),ou=e=>{let t=e[0].dataType,r=z.size(e[0].dims),a=z.size(e[1].dims),n=a%4===0,i=s=>{let u=R("x",t,[1],4),l=R("bias",t,[1],4),d=H("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${fa(Ce(t))}

    ${s.mainStart(Gt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ha("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Gt/4)}})}},cc=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Op(e):e.compute(ou(e.inputs))}}),uu,lu,fc,hc,Lm=P(()=>{Q(),re(),$e(),ie(),uu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},lu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=z.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(i,1,...a);let u=r[i],l=e[0].dataType===9?4:1,d=Math.ceil(z.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:i},...j(e[0].dims,e[1].dims,s)],f=h=>{let g=R("data",e[0].dataType,e[0].dims.length,l),y=R("inputIndices",e[1].dataType,e[1].dims.length),b=H("output",e[0].dataType,s.length,l),x=w=>{let S=a.length,k=`var indicesIndices${w}  = ${y.type.indices}(0);`;for(let T=0;T<S;T++)k+=`${S>1?`indicesIndices${w}[${T}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${T}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${y.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${g.type.indices};
        `;for(let T=0,E=0;T<n;T++)T===i?(k+=`${n>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = u32(idx${w});`,E+=S):(k+=`${n>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${E}]`:`outputIndices${w}`};`,E++);return k},$;if(e[0].dataType===9){let w=(S,k,T="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${T}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},fc=e=>he({axis:e.axis}),hc=(e,t)=>{let r=e.inputs;uu(r),e.compute(lu(e.inputs,t))}}),du,mc,gc,Gm=P(()=>{Q(),re(),ie(),du=(e,t,r,a,n,i,s,u,l)=>{let d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[i];d.push(...j(t.dims,c));let f=h=>{let g=R("indices_data",t.dataType,t.dims.length),y=H("input_slice_offsets_data",12,1,1),b=[g,y],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(...b)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},mc=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,s=i[i.length-1],u=z.sizeToDimension(i,i.length-1),l=z.sizeFromDimension(a,t.batchDims+s),d=z.sizeToDimension(a,t.batchDims),c=z.sizeFromDimension(a,t.batchDims),f=u/d,h=new Array(s),g=l;for(let k=0;k<s;++k)h[s-1-k]=g,g*=a[t.batchDims+s-1-k];let y=du(e,r[1],h,t.batchDims,a,u,f,c,s),b=t.batchDims+s;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=i.slice(0,-1).concat(a.slice(b)),$=z.size(x),w=[{type:12,data:$},{type:12,data:l},...j(r[0].dims,y.dims,x)],S=k=>{let T=R("data",r[0].dataType,r[0].dims.length),E=R("slice_offsets",12,y.dims.length),C=H("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,E,C)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:w}),getShaderSource:S},{inputs:[r[0],y]})},gc=e=>({batchDims:e.batch_dims,cacheKey:""})}),pu,cu,yc,_c,Vm=P(()=>{Q(),re(),$e(),ie(),pu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/a)===i.dims[l]:u===i.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((u,l)=>u===i.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=z.normalizeAxis(t.gatherAxis,n),s=z.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(i,1,...a);let l=z.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...j(...e.map((g,y)=>g.dims),u)],h=g=>{let y=R("data",e[0].dataType,e[0].dims.length),b=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),$=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=H("output",d,u.length),S=[y,b,x];$&&S.push($);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,w)}
        ${g.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ce(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,y)=>y!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},yc=(e,t)=>{let r=e.inputs;pu(r,t),e.compute(cu(e.inputs,t))},_c=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fu,hu,bc,wc,Hm=P(()=>{Q(),re(),$e(),ie(),fu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},hu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,s=e[1].dataType,u=z.normalizeAxis(t.axis,n),l=r[u],d=i.slice(0),c=z.size(d),f=R("input",a,n),h=R("indicesInput",s,i.length),g=H("output",a,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...j(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,g)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},bc=e=>he({axis:e.axis}),wc=(e,t)=>{let r=e.inputs;fu(r),e.compute(hu(e.inputs,t))}}),mu,gu,$c,vc,Fm=P(()=>{Q(),re(),ie(),mu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},gu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,s]=xd.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),u=[n,i];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(i/l),c=Math.ceil(n/l),f=!0,h=z.size(u),g=[{type:12,data:f?d:h},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(g.push(...j(e[2].dims)),y.push("rank")),g.push(...j(u));let b=$=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=R("a",e[0].dataType,e[0].dims),T=R("b",e[1].dataType,e[1].dims),E=k.type.value,C=null,A=[k,T];e.length===3&&(C=R("c",e[2].dataType,e[2].dims.length),A.push(C));let D=H("output",e[0].dataType,u.length);A.push(D);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(L).declareVariables(...A)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${S}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let w=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),k=null,T=[w,S];e.length===3&&(k=R("c",e[2].dataType,e[2].dims.length),T.push(k));let E=H("output",e[0].dataType,u.length);T.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],A="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${A}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b}},$c=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},vc=(e,t)=>{mu(e.inputs),e.compute(gu(e.inputs,t))}}),tt,nt,xt,kt,yu,_u,bu,wu,$u,vu,xu,ku,xc,kc,jm=P(()=>{Q(),re(),$e(),ie(),[tt,nt,xt,kt]=[0,1,2,3],yu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},_u=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,wu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$u=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,vu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${nt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xt}] = u32(r);
            indices[${kt}] = u32(c);
          }
        `;case"border":return`
          indices[${xt}] = u32(clamp(r, 0, H - 1));
          indices[${kt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xt}] = gs_reflect(r, border[1], border[3]);
          indices[${kt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,xu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${nt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${nt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${nt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${nt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${nt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${nt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ku=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=R("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,nt,xt,kt]=[0,3,1,2]);let s=H("output",e[0].dataType,i.length),u=r.type.value,l=z.size(i),d=[{type:12,data:l},...j(e[0].dims,a,i)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${_u}
  ${bu(u)}
  ${wu(t)}
  ${$u(t)}
  ${vu(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xt}]);
      let W_in = i32(uniforms.x_shape[${kt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${xt}], indices[${kt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${xu(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=z.size(i);return{outputs:[{dims:i,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},xc=(e,t)=>{yu(e.inputs),e.compute(ku(e.inputs,t))},kc=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,Su,Sc,Wi,Tu,or,Tc,Ic=P(()=>{Q(),re(),$e(),Na(),Pa(),ie(),bt(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Su=(e,t)=>{let r=e[0],a=ze(e,1),n=ze(e,2),i=ze(e,3),s=ze(e,4),u=ze(e,5),l=ze(e,6),d=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,y=0,b=0,x=Math.floor(h/t.numHeads);if(l&&d&&z.size(l.dims)&&z.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],b=l.dims[2]}else if(l&&z.size(l.dims)||d&&z.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(a&&z.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,g=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(i&&z.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=y+g,S=0;if(s&&z.size(s.dims)>0){S=8;let C=s.dims;throw C.length===1?C[0]===c?S=1:C[0]===3*c+2&&(S=3):C.length===2&&C[0]===c&&C[1]===w&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(n&&z.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let E=!1;if(s&&z.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&z.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:x,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:$}},Sc=e=>he({...e}),Wi=he({perm:[0,2,1,3]}),Tu=(e,t,r,a,n,i,s)=>{let u=[a,n,i],l=z.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:i}],c=f=>{let h=H("qkv_with_bias",t.dataType,u),g=R("qkv",t.dataType,u),y=R("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(g,y,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},or=(e,t,r,a,n,i,s,u)=>{let l=i;if(s&&z.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Tu(e,i,s,t,a,r*n,u),l=l.reshape([t,a,r,n]),r===1||a===1?l:e.compute(We(l,Wi.perm),{inputs:[l],outputs:[-1]})[0]}else return i.dims.length===3&&(l=i.reshape([t,a,r,n])),r===1||a===1?l:e.compute(We(l,Wi.perm),{inputs:[l],outputs:[-1]})[0]},Tc=(e,t)=>{let r=Su(e.inputs,t),a=e.inputs[0],n=ze(e.inputs,1),i=ze(e.inputs,2),s=ze(e.inputs,3),u=ze(e.inputs,4),l=ze(e.inputs,5),d=ze(e.inputs,6),c=ze(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&i&&n.dims.length===4&&i.dims.length===4,h=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(f)return lr(e,h,n,i,u,void 0,d,c,l,r);if(!n||!i)throw new Error("key and value must be provided");let g=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);lr(e,h,g,y,u,void 0,d,c,l,r)}}),Iu,Eu,Cu,zu,ba,Ec,Cc,zc=P(()=>{Q(),re(),$e(),ie(),Iu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Eu=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),he({numOutputs:a,axis:t.axis,splitSizes:r})},Cu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${F("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,zu=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ba=(e,t)=>{let r=e[0].dims,a=z.size(r),n=e[0].dataType,i=z.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=R("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:a}];for(let y=0;y<t.numOutputs;y++){f+=t.splitSizes[y],l[y]=f;let b=r.slice();b[i]=t.splitSizes[y],c.push(b),s[y]=H(`output${y}`,n,b.length),d.push({dims:c[y],dataType:e[0].dataType})}h.push({type:12,data:l},...j(r,...c));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Cu(l.length)}
  ${zu(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${F("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},Ec=(e,t)=>{Iu(e.inputs);let r=e.inputs.length===1?t:Eu(e.inputs,t);e.compute(ba(e.inputs,r),{inputs:[0]})},Cc=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return he({axis:t,numOutputs:a,splitSizes:r})}}),Au,Ou,qi,Ac,Km=P(()=>{$e(),Pa(),Ic(),zc(),bt(),Au=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,g=!a||a.dims.length===0,y=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=y*t.numHeads);let b=i&&i.dims.length!==0,x=s&&s.dims.length!==0;if(b&&i.dims.length===4&&i.dims[0]===l&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&x){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=i.dims[2]}else if(b||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let w=0,S=!1,k=t.kvNumHeads?y*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:y,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:$}},Ou=he({perm:[0,2,1,3]}),qi=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(We(a,Ou.perm),{inputs:[a],outputs:[-1]})[0]),a},Ac=(e,t)=>{var x;let r=Au(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((x=e.inputs[1])==null?void 0:x.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,g,y]=!n&&!i?e.compute(ba([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],b=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,h,void 0,0);lr(e,b,qi(e,g,r),qi(e,y,r),void 0,void 0,s,u,void 0,r,l,d)}}),Li,Ru,Bu,Oc,Xm=P(()=>{Q(),re(),bt(),ie(),Li=(e,t,r,a,n,i,s,u)=>{let l=we(i),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=n*s,h=64;f===1&&(h=256);let g=[n,s,i/l],y=[n,s,2],b=["rank","type","type"],x=[];x.push(...j(g,y));let $=w=>{let S=R("x",t.dataType,3,l),k=R("scale",r.dataType,r.dims),T=R("bias",a.dataType,a.dims),E=H("output",1,3,2),C=[S,k,T,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...C)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${_t("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${_t("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:f},programUniforms:x}),getShaderSource:$},{inputs:[t,r,a],outputs:[-1]})[0]},Ru=(e,t,r)=>{let a=t[0].dims,n=a,i=2,s=a[0],u=a[1],l=z.sizeFromDimension(a,i),d=we(l),c=z.size(n)/d,f=Li(e,t[0],t[1],t[2],s,l,u,r.epsilon),h=[s,u,l/d],g=[s,u],y=["type","none"],b=x=>{let $=R("x",t[0].dataType,h.length,d),w=R("scale_shift",1,g.length,2),S=H("output",t[0].dataType,h.length,d),k=[$,w,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...j(h,g,h)]}),getShaderSource:b},{inputs:[t[0],f]})},Bu=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],s=a[a.length-1],u=z.sizeFromDimension(a,1)/s,l=we(s),d=z.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,g=[0,a.length-1];for(let $=0;$<a.length-2;$++)h=h||a[$+1]!==1,g.push($+1);h=h&&a[a.length-1]!==1;let y=h?e.compute(We(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},($,w)=>a[g[w]])),b=Li(e,y,t[1],t[2],i,u,s,r.epsilon),x=$=>{let w=Se(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=C=>{let A=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${D}(scale.${A}))`;case 2:return`vec2<${w}>(${D}(scale[0].${A}, scale[1].${A}))`;case 4:return`vec4<${w}>(${D}(scale[0].${A}, scale[1].${A}, scale[2].${A}, scale[3].${A}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=R("input",t[0].dataType,t[0].dims,l),E=H("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:x},{inputs:[t[0],b]})},Oc=(e,t)=>{t.format==="NHWC"?Bu(e,e.inputs,t):Ru(e,e.inputs,t)}}),Nu,Mu,Rc,Zm=P(()=>{Q(),re(),ie(),Nu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Mu=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],s=!a&&e[2],u=n,l=z.normalizeAxis(t.axis,n.length),d=z.sizeToDimension(n,l),c=z.sizeFromDimension(n,l),f=z.size(i.dims),h=s?z.size(s.dims):0;if(f!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let g=[];for(let T=0;T<n.length;++T)T<l?g.push(n[T]):g.push(1);let y=we(c),b=["type","type"],x=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&b.push("type");let $=r>1,w=r>2,S=T=>{let E=Se(e[0].dataType),C=[R("x",e[0].dataType,e[0].dims,y),R("scale",i.dataType,i.dims,y)];s&&C.push(R("bias",s.dataType,s.dims,y)),C.push(H("output",e[0].dataType,u,y)),$&&C.push(H("mean_data_output",1,g)),w&&C.push(H("inv_std_output",1,g));let A=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(A).declareVariables(...C)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${da("f32",y)};
    var mean_square_vector = ${da("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Wt(E,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${_t("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${_t("mean_square_vector",y)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Wt(E,y,"x[j + offset]")};
      let f32scale = ${Wt(E,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Wt(E,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return $&&k.push({dims:g,dataType:1}),w&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:S}},Rc=(e,t)=>{Nu(e.inputs),e.compute(Mu(e.inputs,t,e.outputCount))}}),Du,Bc,Qm=P(()=>{re(),Ga(),Va(),Du=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Bc=e=>{Du(e.inputs);let t=Lt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(La(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=z.size(e.inputs[0].dims.slice(0,-2)),s=z.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,i,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,i,r],c=[u,l];e.compute(Vr(c,{activation:""},t,d),{inputs:c})}else e.compute(Vr(e.inputs,{activation:""},t))}}}),Pu,Uu,Wu,Nc,Mc,Ym=P(()=>{Q(),re(),$e(),ie(),Pu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!z.areEqual(s.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(z.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(z.size(l)!==d)throw new Error("zeroPoints input size error.")}},Uu=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,u=r.slice(0,a-2),l=z.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=we(t.k),h=we(d),g=we(s),y=u.concat([n,s]),b=n>1&&s/g%2===0?2:1,x=z.size(y)/g/b,$=64,w=[],S=[l,n,i/f],k=z.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),w.push(...j(S)),w.push(...j(k)),w.push(...j(e[2].dims)),e.length===4&&w.push(...j(z.convertShape(e[3].dims)));let T=[l,n,s/g];w.push(...j(T));let E=C=>{let A=S.length,D=R("a",e[0].dataType,A,f),L=R("b",12,k.length,h),Y=R("scales",e[2].dataType,e[2].dims.length),ee=[D,L,Y],K=e.length===4?R("zero_points",12,e[3].dims.length):void 0;K&&ee.push(K);let J=T.length,Z=H("output",e[0].dataType,J,g),q=Se(e[0].dataType),ne=(()=>{switch(f){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${f}-component is not supported.`)}})(),pe=()=>{let B=`
          // reuse a data
            var input_offset = ${D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ne};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${D.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<g*b;U++)B+=`
            b_value = ${h===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ne}(${Array.from({length:4},(ae,ge)=>`${q}(b_value_lower[${ge}]), ${q}(b_value_upper[${ge}])`).join(", ")});
            b_dequantized_values = ${f===1?`${ne}(${Array.from({length:8},(ae,ge)=>`(b_quantized_values[${ge}] - ${K?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${ne}(${Array(8).fill(`${K?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(U/g)}]${g>1?`[${U%g}]`:""} += ${Array.from({length:8/f},(ae,ge)=>`${f===1?`a_data[${ge}] * b_dequantized_values[${ge}]`:`dot(a_data[${ge}], b_dequantized_values[${ge}])`}`).join(" + ")};
          `;return B},G=()=>{let B=`
            var col_index = col * ${g};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            `;for(let U=0;U<g*b;U++)B+=`
            let scale${U} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},ce=()=>{let B=`col_index = col * ${g};`;for(let U=0;U<g*b;U++)B+=`
            let b${U}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ne};
            var b_dequantized_values: ${ne};`,B};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${b*$}>;
        ${C.declareVariables(...ee,Z)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${$}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${ce()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${pe()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${g};${b};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x},programUniforms:w}),getShaderSource:E}},Wu=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,u=r.slice(0,a-2),l=z.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=we(t.k),h=we(d),g=u.concat([n,s]),y=128,b=s%8===0?8:s%4===0?4:1,x=y/b,$=x*h*8,w=$/f,S=$/t.blockSize,k=z.size(g)/b,T=[],E=[l,n,i/f],C=z.convertShape(e[1].dims).slice();C.splice(-1,1,d/h),T.push(...j(E)),T.push(...j(C)),T.push(...j(e[2].dims)),e.length===4&&T.push(...j(z.convertShape(e[3].dims)));let A=[l,n,s];T.push(...j(A));let D=L=>{let Y=E.length,ee=R("a",e[0].dataType,Y,f),K=R("b",12,C.length,h),J=R("scales",e[2].dataType,e[2].dims.length),Z=[ee,K,J],q=e.length===4?R("zero_points",12,e[3].dims.length):void 0;q&&Z.push(q);let ne=A.length,pe=H("output",e[0].dataType,ne),G=Se(e[0].dataType),ce=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${x}>, ${b}>;
        ${L.declareVariables(...Z,pe)}
        ${L.mainStart([x,b,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${G}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${ce()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${G}>(${Array.from({length:4},(B,U)=>`${G}(b_value_lower[${U}]), ${G}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${G}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${x};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:k},programUniforms:T}),getShaderSource:D}},Nc=(e,t)=>{Pu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Wu(e.inputs,t)):e.compute(Uu(e.inputs,t))},Mc=e=>he(e)}),qu,Lu,Gu,Vu,Hu,Fu,ju,Ku,Dc,Jm=P(()=>{Q(),re(),ie(),qu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Lu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${F("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${F("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Gu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${F("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${F("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Vu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${F("uniforms.x_shape",n,t)})) {
                  k = i32(${F("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Hu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${F("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${F("uniforms.x_shape",n,t)})) {
                  k -= i32(${F("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Fu=(e,t,r)=>{switch(r.mode){case 0:return Lu(e,t,r.pads.length);case 1:return Gu(e,t,r.pads.length);case 2:return Vu(e,t,r.pads.length);case 3:return Hu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ju=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=z.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...j(e[0].dims,r));let u=["rank"],l=d=>{let c=H("output",e[0].dataType,r.length),f=R("x",e[0].dataType,a.length),h=f.type.value,g=Fu(c,a.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(y).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:i}),getShaderSource:l}},Ku=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)i[Number(u[l])]=Number(r[l]),i[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>i[Number(l)]=Number(u));let s=[];return i.forEach(u=>s.push(u)),{mode:t.mode,value:a,pads:s}}else return t},Dc=(e,t)=>{qu(e.inputs);let r=Ku(e.inputs,t);e.compute(ju(e.inputs,r),{inputs:[0]})}}),er,Gi,Vi,Hi,Fi,Xu,Zu,ji,Ki,Pc,Uc,Xi,Wc,qc,Zi,Lc,Gc,Vc,Hc,eg=P(()=>{Qe(),Q(),re(),ie(),er=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Gi=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=i?t.dilations.slice():[],d=t.pads.slice();Lr.adjustPoolAttributes(r,n,s,u,l,d);let c=Lr.computePoolOutputShape(r,n,u,l,s,d,t.autoPad),f=Object.assign({},t);i?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,a?h:c]},Vi=(e,t)=>{let r=t.format==="NHWC",a=z.size(e),n=z.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);i.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];h=!!(b+x),i.push({type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=z.computeStrides(t.kernelShape);i.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[i,s,!!l,!1,!1]}},Hi=(e,t,r,a,n,i,s,u,l,d,c,f)=>{let h=n.format==="NHWC",g=t.type.value,y=H("output",t.type.tensor,a);if(n.kernelShape.length<=2){let b="",x="",$="",w=r-(h?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let S=r-(h?3:2);f?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${x}
              ${b}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,x=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${F("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${F("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${F("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${F("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},Fi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xu=e=>`${Fi(e)};${e.countIncludePad}`,Zu=e=>`${Fi(e)};${e.storageOrder};${e.dilations}`,ji=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ki=(e,t,r,a)=>{let[n,i]=Gi(t,a,r),s=R("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,g,y]=Vi(i,n);c.push(...j(t.dims,i));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${h};${g};${y}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(i)/64)},programUniforms:c}),getShaderSource:x=>Hi(x,s,t.dims.length,i.length,n,l,d,0,f,h,g,y)}},Pc=e=>{let t=e.count_include_pad!==0,r=ji(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Xu(a)}},Uc=(e,t)=>{er(e.inputs),e.compute(Ki("AveragePool",e.inputs[0],!1,t))},Xi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Wc=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},qc=(e,t)=>{er(e.inputs),e.compute(Ki("GlobalAveragePool",e.inputs[0],!0,t))},Zi=(e,t,r,a)=>{let[n,i]=Gi(t,a,r),s=`
      value = max(x_val, value);
    `,u="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,g,y]=Vi(i,n);return c.push(...j(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${h};${g};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(i)/64)},programUniforms:c}),getShaderSource:b=>Hi(b,l,t.dims.length,i.length,n,s,u,t.dataType===10?-65504:-1e5,f,h,g,y)}},Lc=(e,t)=>{er(e.inputs),e.compute(Zi("MaxPool",e.inputs[0],!1,t))},Gc=e=>{let t=e.storage_order,r=e.dilations,a=ji(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:Zu(n)}},Vc=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},Hc=(e,t)=>{er(e.inputs),e.compute(Zi("GlobalMaxPool",e.inputs[0],!0,t))}}),Qu,Yu,Fc,jc,tg=P(()=>{Q(),re(),$e(),ie(),Qu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yu=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,s=e[1].dataType,u=z.size(i),l=a===3||a===2,d=l?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(z.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,y=g===!1&&c.length===1,b=we(u),x=g&&(!l||b===4),$=x?b:1,w=x&&!l?b:1,S=R("input",l?12:a,d.length,w),k=R("scale",s,c.length),T=f?R("zero_point",l?12:a,h.length):void 0,E=H("output",s,i.length,$),C=[S,k];T&&C.push(T);let A=[d,c];f&&A.push(h);let D=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...j(...A,i)],L=Y=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(ee).declareVariables(...C,E)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:y?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:y?l?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:D})}},Fc=(e,t)=>{Qu(e.inputs,t),e.compute(Yu(e.inputs,t))},jc=e=>he({axis:e.axis,blockSize:e.blockSize})}),Ju,el,Kc,rg=P(()=>{Qe(),Q(),ie(),Ju=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},el=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],s=n,u=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...j(i)],l=d=>{let c=H("output",a,i.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Kc=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&Ju(t,r,a),e.compute(el(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),tl,rl,Xc,Zc,ig=P(()=>{Q(),re(),$e(),ie(),tl=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},rl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,s=Math.ceil(z.size(a)/i),u=a[a.length-1],l=z.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...j(e[1].dims,e[2].dims,n)],c=f=>{let h=R("indices",e[1].dataType,e[1].dims.length),g=R("updates",e[2].dataType,e[2].dims.length,i),y=t.reduction!=="none"&&t.reduction!==""?Td("output",e[0].dataType,n.length):H("output",e[0].dataType,n.length,i);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${z.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${tl(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},Xc=e=>he({reduction:e.reduction}),Zc=(e,t)=>{e.compute(rl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),il,al,nl,Qi,sl,ol,ul,ll,dl,pl,cl,fl,Yi,hl,ml,gl,yl,_l,Qc,Yc,ag=P(()=>{Q(),re(),$e(),ie(),il=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},al=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},nl=(e,t,r,a,n,i)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>i.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");il(a,t),t.axes.length>0&&al(a,t.axes,d).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Qi=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,sl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Qi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Qi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ol=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ul=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,s)=>{a[i]=n[s],a[s+r]=n[t.length+s]}),a):n},ll=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,s)=>n[i]=r[s])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,s)=>Math.round(i*t[s]))}return n},dl=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,s)=>n[s]=Math.round(i*t[s]))),n},pl=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${F("uniforms.scales","i",a)};
        var roi_low = ${F("uniforms.roi","i",n)};
        var roi_hi = ${F("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${F("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,cl=(e,t,r,a,n,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${F("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${F("uniforms.roi","i",i)};
          var roi_hi = ${F("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${F("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,fl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${F("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Yi=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",hl=(e,t,r,a,n)=>{let[i,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Yi(e,l,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ml=(e,t,r,a,n,i,s,u,l,d)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],g=e.type.value,y=b=>{let x=b===f?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${a[b]}, ${r[b]}, ${i[b]}, ${i[b]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${x})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(f)};
    ${y(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},gl=(e,t,r,a,n)=>{let[i,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Yi(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},yl=(e,t,r,a,n,i)=>{let s=e.dims,u=ul(i,t.axes,s.length),l=ll(s,a,n,t.axes),d=a.slice();a.length===0&&(d=s.map((w,S)=>w===0?1:l[S]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=dl(s,d,t)));let c=H("output",e.dataType,l.length),f=R("input",e.dataType,s.length),h=z.size(l),g=s.length===l.length&&s.every((w,S)=>w===l[S]),y=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,x=f.type.value,$=w=>`
      ${g?"":`
      ${sl(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fl(f,s)};
              ${ol(t.nearestMode,r,x)};
              ${cl(f,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${pl(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${hl(f,c,s,y,b)}`;if(s.length===3||s.length===5)return`${gl(f,c,s,y,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ml(f,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...j(s,l)]})}},_l=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Qc=(e,t)=>{let r=[],a=[],n=[],i=_l(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");nl(e.inputs,t,i,r,a,n),e.compute(yl(e.inputs[0],t,i,r,a,n),{inputs:[0]})},Yc=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),bl,wl,Jc,ng=P(()=>{Q(),re(),$e(),ie(),bl=(e,t)=>{let[r,a,n,i]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(a.dims,[])&&!z.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!z.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],f=z.sizeFromDimension(r.dims,1)/d,h=u===0?n.dims[1]*2:f/s;if(u>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},wl=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,s=e[0].dims[0],u=z.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=n===0?c*2:d/a,h=new Array(s,l,d/f,f-c),g=z.computeStrides(h),y=[{type:1,data:i},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=x=>{let $=R("input",e[0].dataType,e[0].dims.length),w=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),k=R("sin_cache",e[3].dataType,e[3].dims.length),T=H("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables($,w,S,k,T)}

        ${x.mainStart(Gt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",H("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(h)/Gt)},programUniforms:y})}},Jc=(e,t)=>{bl(e.inputs,t),e.compute(wl(e.inputs,t))}}),$l,vl,ef,sg=P(()=>{Q(),re(),ie(),$l=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},vl=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,s=z.size(i),u=i,l=s,d=i.slice(-1)[0],c=a?i.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,g=a&&r>1,y=a&&r>2,b=r>3,x=64,$=we(d),w=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[R("x",e[0].dataType,e[0].dims,$),R("skip",e[1].dataType,e[1].dims,$),R("gamma",e[2].dataType,e[2].dims,$)];f&&C.push(R("beta",e[3].dataType,e[3].dims,$)),h&&C.push(R("bias",e[4].dataType,e[4].dims,$)),C.push(H("output",e[0].dataType,u,$)),g&&C.push(H("mean_output",1,c)),y&&C.push(H("inv_std_output",1,c)),b&&C.push(H("input_skip_bias_sum",e[0].dataType,u,$));let A=Se(e[0].dataType),D=Se(1,$);return`

      ${T.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${x}>;
      var<workgroup> sum_squared_shared : array<${D}, ${x}>;

      ${T.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":A+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Wt(A,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${_t("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${_t("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${A}(mean)`}) *
            ${A}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${g};${y};${b}`,inputDependencies:e.map((T,E)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},ef=(e,t)=>{$l(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(vl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),xl,tr,kl,Ji,Sl,Tl,tf,rf,og=P(()=>{Q(),re(),$e(),ie(),xl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},tr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},kl=(e,t)=>{if(e.length>1){let r=tr(e,1),a=tr(e,2),n=tr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:a,axes:n})}else return t},Ji=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},Sl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${F("uniforms.input_shape","i",r.length)};
            let steps_i = ${F("uniforms.steps","i",r.length)};
            let signs_i = ${F("uniforms.signs","i",r.length)};
            let starts_i = ${F("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Tl=(e,t)=>{let r=e[0].dims,a=z.size(r),n=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=tr(e,4);i.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let s=t.starts.map(($,w)=>Ji($,w,r,n,i)),u=t.ends.map(($,w)=>Ji($,w,r,n,i));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(s.splice($,0,0),u.splice($,0,r[$]),i.splice($,0,1));let l=i.map($=>Math.sign($));i.forEach(($,w,S)=>{if($<0){let k=(u[w]-s[w])/$,T=s[w],E=T+k*i[w];s[w]=E,u[w]=T,S[w]=-$}});let d=r.slice(0);n.forEach(($,w)=>{d[$]=Math.ceil((u[$]-s[$])/i[$])});let c={dims:d,dataType:e[0].dataType},f=H("output",e[0].dataType,d.length),h=R("input",e[0].dataType,e[0].dims.length),g=z.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:i.length}],b=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:i},...j(e[0].dims,d)],x=$=>`
      ${$.registerUniforms(y).declareVariables(h,f)}
        ${Sl(h,f,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},tf=(e,t)=>{xl(e.inputs,t);let r=kl(e.inputs,t);e.compute(Tl(e.inputs,r),{inputs:[0]})},rf=e=>{let t=e.starts,r=e.ends,a=e.axes;return he({starts:t,ends:r,axes:a})}}),Il,El,af,nf,ug=P(()=>{Q(),re(),$e(),bt(),ie(),Il=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},El=(e,t)=>{let r=e.inputs[0],a=r.dims,n=z.size(a),i=a.length,s=z.normalizeAxis(t.axis,i),u=s<a.length-1,l,d=[];u?(d=Array.from({length:i},(C,A)=>A),d[s]=i-1,d[i-1]=s,l=e.compute(We(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[i-1],h=n/f,g=we(f),y=f/g,b=64;h===1&&(b=256);let x=(C,A)=>A===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:A===2?`max(${C}.x, ${C}.y)`:A===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=R("x",l.dataType,l.dims,g),w=H("result",l.dataType,l.dims,g),S=$.type.value,k=Se(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=C=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables($,w)}
      ${C.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${x("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${_t("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${g};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:y}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(We(E,d),{inputs:[E]})},af=(e,t)=>{Il(e.inputs),El(e,t)},nf=e=>he({axis:e.axis})}),ea,Cl,zl,Al,sf,lg=P(()=>{Q(),re(),ie(),ea=e=>Array.from(e.getBigInt64Array(),Number),Cl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ea(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zl=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Al=(e,t)=>{let r=e[0].dims,a=t??ea(e[1]),n=zl(r,a),i=z.size(n),s=e[0].dataType,u=R("input",s,r.length),l=H("output",s,n.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...j(e[0].dims,n)]}),getShaderSource:d}},sf=e=>{Cl(e.inputs),e.compute(Al(e.inputs),{inputs:[0]})}}),Ol,Rl,of,dg=P(()=>{Q(),re(),ie(),Ol=(e,t,r,a,n)=>{let i=H("output_data",n,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),u=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,g)=>`select(${h}, ${f}, ${g})`;if(!a)d=i.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,g,y="")=>{let b=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,$=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${i.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${y}(${c(b,x,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Rl=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(z.areEqual(t,r)&&z.areEqual(r,a)),s=t,u=z.size(t);if(i){let d=Lt.calcShape(Lt.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=z.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Ol(d,e,s,i,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...j(a,t,r,s)]})}},of=e=>{e.compute(Rl(e.inputs))}}),uf,pg=P(()=>{km(),Pa(),Sm(),Tm(),Im(),Em(),Cm(),Bm(),Mm(),Dm(),Pm(),Um(),Wm(),qm(),Lm(),Gm(),Vm(),Hm(),Fm(),jm(),Km(),Xm(),Zm(),Qm(),Ym(),Ic(),Jm(),eg(),tg(),rg(),ig(),Da(),ag(),ng(),sg(),og(),ug(),zc(),lg(),bt(),Ua(),dg(),uf=new Map([["Abs",[tp]],["Acos",[rp]],["Acosh",[ip]],["Add",[Dp]],["ArgMax",[Qd,ca]],["ArgMin",[Zd,ca]],["Asin",[ap]],["Asinh",[np]],["Atan",[sp]],["Atanh",[op]],["Attention",[Yd]],["AveragePool",[Uc,Pc]],["BatchNormalization",[Jd]],["BiasAdd",[ep]],["BiasSplitGelu",[Mp]],["Cast",[lp,up]],["Ceil",[pp]],["Clip",[dp]],["Concat",[jp,Kp]],["Conv",[_a,ya]],["ConvTranspose",[ac,ic]],["Cos",[cp]],["Cosh",[fp]],["CumSum",[nc,sc]],["DepthToSpace",[oc,uc]],["DequantizeLinear",[Fc,jc]],["Div",[Pp]],["Einsum",[lc,dc]],["Elu",[hp,sr]],["Equal",[Up]],["Erf",[mp]],["Exp",[gp]],["Expand",[pc]],["FastGelu",[cc]],["Floor",[yp]],["FusedConv",[_a,ya]],["Gather",[hc,fc]],["GatherElements",[wc,bc]],["GatherBlockQuantized",[yc,_c]],["GatherND",[mc,gc]],["Gelu",[_p]],["Gemm",[vc,$c]],["GlobalAveragePool",[qc,Wc]],["GlobalMaxPool",[Hc,Vc]],["Greater",[Gp]],["GreaterOrEqual",[Hp]],["GridSample",[xc,kc]],["GroupQueryAttention",[Ac]],["HardSigmoid",[Tp,Sp]],["InstanceNormalization",[Oc]],["LayerNormalization",[Rc]],["LeakyRelu",[bp,sr]],["Less",[Vp]],["LessOrEqual",[Fp]],["Log",[Bp]],["MatMul",[Bc]],["MatMulNBits",[Nc,Mc]],["MaxPool",[Lc,Gc]],["Mul",[Wp]],["MultiHeadAttention",[Tc,Sc]],["Neg",[$p]],["Not",[wp]],["Pad",[Dc]],["Pow",[qp]],["QuickGelu",[Np,sr]],["Range",[Kc]],["Reciprocal",[vp]],["ReduceMin",[Hd]],["ReduceMean",[Wd]],["ReduceMax",[Vd]],["ReduceSum",[jd]],["ReduceProd",[Fd]],["ReduceL1",[qd]],["ReduceL2",[Ld]],["ReduceLogSum",[Xd]],["ReduceLogSumExp",[Gd]],["ReduceSumSquare",[Kd]],["Relu",[xp]],["Resize",[Qc,Yc]],["RotaryEmbedding",[Jc]],["ScatterND",[Zc,Xc]],["Sigmoid",[kp]],["Sin",[Ip]],["Sinh",[Ep]],["Slice",[tf,rf]],["SkipLayerNormalization",[ef]],["Split",[Ec,Cc]],["Sqrt",[Cp]],["Softmax",[af,nf]],["Sub",[Lp]],["Tan",[zp]],["Tanh",[Ap]],["ThresholdedRelu",[Rp,sr]],["Tile",[sf]],["Transpose",[Ed,Cd]],["Where",[of]]])}),lf,cg=P(()=>{Qe(),st(),ie(),lf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){rt(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let l=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ze(e.programInfo.name)}dispose(){}build(e,t){rt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let n=Id(t,this.backend.device.limits),i=e.getShaderSource(n),s=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,u=r.createShaderModule({code:s,label:e.name});se("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ze(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,s=Math.ceil(Math.sqrt(i));if(s>n){if(s=Math.ceil(Math.cbrt(i)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Bl,Nl,Ml,Dl,df,fg=P(()=>{Qe(),Q(),st(),$d(),vm(),pg(),cg(),Bl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Nl=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Bl(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Ml=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Dl=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},df=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Dl(this.device),this.adapterInfo=new Ml(t.info||await t.requestAdapterInfo()),this.gpuDataManager=vd(this),this.programManager=new lf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ra(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=i.programName,f=i.inputTensorViews,h=i.outputTensorViews,g=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let b=Number(g-this.queryTimeBase),x=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map($=>({dims:$.dims,dataType:Et($.dataType)})),outputsMetadata:h.map($=>({dims:$.dims,dataType:Et($.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:b,endTime:x});else{let $="";f.forEach((S,k)=>{$+=`input[${k}]: [${S.dims}] | ${Et(S.dataType)}, `});let w="";h.forEach((S,k)=>{w+=`output[${k}]: [${S.dims}] | ${Et(S.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${$}${w}execution time: ${x-b} ns`)}Ur("GPU",`${c}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ze()}run(e,t,r,a,n,i){rt(e.name);let s=[];for(let w=0;w<t.length;++w){let S=t[w].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],h=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=i)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let S=c[w]===-1,k=c[w]===-2,T=S||k?n(u[w].dataType,u[w].dims):a(c[w],u[w].dataType,u[w].dims);if(f.push(T),T.data===0)continue;let E=this.gpuDataManager.get(T.data);if(!E)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(E),k){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}h.push(E)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Ze(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let w=0,S=[];d.forEach(C=>{let A=typeof C.data=="number"?[C.data]:C.data;if(A.length===0)return;let D=C.type===10?2:4,L,Y;C.type===10?(Y=A.length>4?16:A.length>2?8:A.length*D,L=A.length>4?16:D*A.length):(Y=A.length<=2?A.length*D:16,L=16),w=Math.ceil(w/Y)*Y,S.push(w);let ee=C.type===10?8:4;w+=A.length>4?Math.ceil(A.length/ee)*L:A.length*D});let k=16;w=Math.ceil(w/k)*k;let T=new ArrayBuffer(w);d.forEach((C,A)=>{let D=S[A],L=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(T,D,L.length).set(L);else if(C.type===12)new Uint32Array(T,D,L.length).set(L);else if(C.type===10)new Uint16Array(T,D,L.length).set(L);else if(C.type===1)new Float32Array(T,D,L.length).set(L);else throw new Error(`Unsupported uniform type: ${Et(C.type)}`)});let E=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,T,0,w),this.gpuDataManager.release(E.id),g={offset:0,size:w,buffer:E.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),b=y[1]===1&&y[2]===1,x=Nl(e,t,b),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(x,$),se("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let w=0;w<d.length;w++){let S=d[w],k=S.type,T=typeof S.data=="number"?1:S.data.length,[E,C]=$.uniformVariablesInfo[w];if(k!==E||T!==C)throw new Error(`Uniform variable ${w} mismatch: expect type ${E} with size ${C}, got type ${k} with size ${T} in program "${$.programInfo.name}".`)}}if(se("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run($,s,h,y,g),Ze(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=uf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,s=a.kernelEntry,u=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),se("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await la(this,e,t);return Ba(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){se("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){se("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){se("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Pl,ta,Ul,ra,ia,aa,Wl,pf,hg=P(()=>{st(),Pl=1,ta=()=>Pl++,Ul=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ra=(e,t)=>{let r=Ul.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},ia=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return ra(this.dataType,this.tensorShape)}destroy(){se("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}},aa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==ra(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else se("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Wl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=ta();return this.tensorTrackersById.set(e,new aa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){se("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){se("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=ta(),s=new ia({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new aa(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,n,i){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,r)){se("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}se("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let u=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new ia({sessionId:e,context:s,tensor:u,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},pf=(...e)=>new Wl(...e)}),Or,ql,cf,mg=P(()=>{Q(),Rt(),$d(),hg(),st(),Or=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ql=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},cf=class{constructor(e){this.tensorManager=pf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Ra(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){se("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){se("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)se("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>ql(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){se("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=Or.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){se("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Or.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");se("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ba(r,t)}}registerMLTensor(e,t,r,a){let n=Or.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return se("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i){if(!i)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=i.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(n.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return se("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),ff={};dr(ff,{init:()=>hf});var Rr,Ll,hf,gg=P(()=>{Q(),fg(),st(),re(),mg(),Rr=class mf{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new mf(this.module,this.dataType,this.data,t)}},Ll=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let s=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(a*n++,i)),c=Number(e.getValue(a*n++,"*")),f=Number(e.getValue(a*n++,i)),h=[];for(let g=0;g<f;g++)h.push(Number(e.getValue(a*n++,i)));u.push(new Rr(e,d,c,h))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(u,l,d)=>new Rr(this.module,l,this.output(u,d),d),i=(u,l)=>{let d=Ct(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Rr(this.module,u,c,l)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(i+a*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},hf=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new df;await i.initialize(r,a),n("webgpu",[i,s=>i.alloc(Number(s)),s=>i.free(s),(s,u,l,d=!1)=>{if(d)se("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),i.memcpy(Number(s),Number(u));else{se("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));i.upload(Number(u),c)}},async(s,u,l)=>{se("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await i.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>i.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>i.releaseKernel(s),(s,u,l,d)=>{se("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new Ll(t,i,Number(u));return i.computeKernel(Number(s),c,d)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new cf(r);n("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,u,l,d,c)=>i.ensureTensor(s,u,l,d,c),(s,u)=>{i.uploadTensor(s,u)},async(s,u)=>i.downloadTensor(s,u)])}}}),Gl,Ha,Fa,mt,Vl,Hr,ja,Ka,na,Xa,Za,Qa,gf=P(()=>{wm(),$m(),Q(),Rt(),Ea(),wd(),Gl=(e,t)=>{ke()._OrtInit(e,t)!==0&&le("Can't initialize onnxruntime.")},Ha=async e=>{Gl(e.wasm.numThreads,qr(e.logLevel))},Fa=async(e,t)=>{{let r=(gg(),Pr(ff)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",ke(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",ke(),e)}}},mt=new Map,Vl=e=>{let t=ke(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&le("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},Hr=e=>{let t=ke(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},ja=async(e,t)=>{var f,h,g;let r,a,n=ke();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Hr(e);let i=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=bd(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let T=[];for(let E of t.externalData){let C=typeof E=="string"?E:E.path;T.push(Oa(typeof E=="string"?E:E.data).then(A=>{n.mountExternalData(C,A)}))}await Promise.all(T)}for(let T of(t==null?void 0:t.executionProviders)??[])if((typeof T=="string"?T:T.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof T!="string"){let E=T,C=E==null?void 0:E.context,A=E==null?void 0:E.gpuDevice,D=E==null?void 0:E.deviceType,L=E==null?void 0:E.powerPreference;C?n.currentContext=C:A?n.currentContext=await n.jsepCreateMLContext(A):n.currentContext=await n.jsepCreateMLContext({deviceType:D,powerPreference:L})}else n.currentContext=await n.jsepCreateMLContext();break}i=await n._OrtCreateSession(r,a,s),i===0&&le("Can't create a session."),(f=n.jsepOnCreateSession)==null||f.call(n),n.currentContext&&(n.jsepRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[y,b]=Vl(i),x=!!(t!=null&&t.enableGraphCapture),$=[],w=[],S=[];for(let T=0;T<y;T++){let E=n._OrtGetInputName(i,T);E===0&&le("Can't get an input name."),d.push(E),$.push(n.UTF8ToString(E))}for(let T=0;T<b;T++){let E=n._OrtGetOutputName(i,T);E===0&&le("Can't get an output name."),c.push(E);let C=n.UTF8ToString(E);w.push(C);{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){S.push("gpu-buffer");continue}let A=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((h=t==null?void 0:t.preferredOutputLocation)==null?void 0:h[C])??"cpu";if(A!=="cpu"&&A!=="cpu-pinned"&&A!=="gpu-buffer"&&A!=="ml-tensor")throw new Error(`Not supported preferred output location: ${A}.`);if(x&&A!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${A}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);S.push(A)}}let k=null;return S.some(T=>T==="gpu-buffer"||T==="ml-tensor")&&(u=n._OrtCreateBinding(i),u===0&&le("Can't create IO binding."),k={handle:u,outputPreferredLocations:S,outputPreferredLocationsEncoded:S.map(T=>ua(T))}),mt.set(i,[i,d,c,k,x,!1]),[i,$,w]}catch(y){throw d.forEach(b=>n._OrtFree(b)),c.forEach(b=>n._OrtFree(b)),u!==0&&n._OrtReleaseBinding(u)!==0&&le("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&le("Can't release session."),y}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&le("Can't release session options."),l.forEach(y=>n._free(y)),(g=n.unmountExternalData)==null||g.call(n)}},Ka=e=>{var l;let t=ke(),r=mt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&le("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&le("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),n.forEach(d=>t._OrtFree(d)),i.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&le("Can't release session."),mt.delete(e)},na=async(e,t,r,a,n,i=!1)=>{if(!e){t.push(0);return}let s=ke(),u=s.PTR_SIZE,l=e[0],d=e[1],c=e[3],f=c,h,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;g=Ct(Pt(l),d);let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=$(a,n,x,g)}else if(c==="ml-tensor"){let x=e[2].mlTensor;g=Ct(Pt(l),d);let $=s.jsepRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=$(a,x,Pt(l),d)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,h=s._malloc(g),r.push(h);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(h+$*u,Ee(x[$],r),"*")}}else{let $=s.jsepIsGraphInput;if(l!=="string"&&$){let w=s._OrtGetInputName(a,n),S=s.UTF8ToString(w);if($(a,S)){let k=Pt(l);g=Ct(k,d),f="ml-tensor";let T=s.jsepCreateTemporaryTensor,E=s.jsepUploadTensor;if(!T||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await T(a,k,d);E(C,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),h=C}else g=x.byteLength,h=s._malloc(g),r.push(h),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),h)}else g=x.byteLength,h=s._malloc(g),r.push(h),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),h)}}let y=s.stackSave(),b=s.stackAlloc(4*d.length);try{d.forEach(($,w)=>s.setValue(b+w*u,$,u===4?"i32":"i64"));let x=s._OrtCreateTensor(Pt(l),h,g,b,d.length,ua(f));x===0&&le(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(x)}finally{s.stackRestore(y)}},Xa=async(e,t,r,a,n,i)=>{var Y,ee,K;let s=ke(),u=s.PTR_SIZE,l=mt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],g=l[4],y=l[5],b=t.length,x=a.length,$=0,w=[],S=[],k=[],T=[],E=s.stackSave(),C=s.stackAlloc(b*u),A=s.stackAlloc(b*u),D=s.stackAlloc(x*u),L=s.stackAlloc(x*u);try{[$,w]=_d(i);for(let q=0;q<b;q++)await na(r[q],S,T,e,t[q],g);for(let q=0;q<x;q++)await na(n[q],k,T,e,b+a[q],g);for(let q=0;q<b;q++)s.setValue(C+q*u,S[q],"*"),s.setValue(A+q*u,c[t[q]],"*");for(let q=0;q<x;q++)s.setValue(D+q*u,k[q],"*"),s.setValue(L+q*u,f[a[q]],"*");if(h&&!y){let{handle:q,outputPreferredLocations:ne,outputPreferredLocationsEncoded:pe}=h;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);for(let G=0;G<b;G++){let ce=t[G];await s._OrtBindInput(q,c[ce],S[G])!==0&&le(`Can't bind input[${G}] for session=${e}.`)}for(let G=0;G<x;G++){let ce=a[G];(Y=n[G])!=null&&Y[3]?s._OrtBindOutput(q,f[ce],k[G],0)!==0&&le(`Can't bind pre-allocated output[${G}] for session=${e}.`):s._OrtBindOutput(q,f[ce],0,pe[ce])!==0&&le(`Can't bind output[${G}] to ${ne[G]} for session=${e}.`)}mt.set(e,[d,c,f,h,g,!0])}(ee=s.jsepOnRunStart)==null||ee.call(s,d);let J;h?J=await s._OrtRunWithBinding(d,h.handle,x,D,$):J=await s._OrtRun(d,A,C,b,L,x,D,$),J!==0&&le("failed to call OrtRun().");let Z=[];for(let q=0;q<x;q++){let ne=Number(s.getValue(D+q*u,"*"));if(ne===k[q]){Z.push(n[q]);continue}let pe=s.stackSave(),G=s.stackAlloc(4*u),ce=!1,B,U=0;try{s._OrtGetTensorData(ne,G,G+u,G+2*u,G+3*u)!==0&&le(`Can't access output tensor data on index ${q}.`);let ae=u===4?"i32":"i64",ge=Number(s.getValue(G,ae));U=s.getValue(G+u,"*");let N=s.getValue(G+u*2,"*"),de=Number(s.getValue(G+u*3,ae)),qe=[];for(let xe=0;xe<de;xe++)qe.push(Number(s.getValue(N+xe*u,ae)));s._OrtFree(N)!==0&&le("Can't free memory for tensor dims.");let Ae=qe.reduce((xe,fe)=>xe*fe,1);B=Et(ge);let wt=h==null?void 0:h.outputPreferredLocations[a[q]];if(B==="string"){if(wt==="gpu-buffer"||wt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let fe=0;fe<Ae;fe++){let ot=s.getValue(U+fe*u,"*"),Vt=s.getValue(U+(fe+1)*u,"*"),$t=fe===Ae-1?void 0:Vt-ot;xe.push(s.UTF8ToString(ot,$t))}Z.push([B,qe,xe,"cpu"])}else if(wt==="gpu-buffer"&&Ae>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let fe=xe(U),ot=Ct(ge,Ae);if(ot===void 0||!za(B))throw new Error(`Unsupported data type: ${B}`);ce=!0,Z.push([B,qe,{gpuBuffer:fe,download:s.jsepCreateDownloader(fe,ot,B),dispose:()=>{s._OrtReleaseTensor(ne)!==0&&le("Can't release tensor.")}},"gpu-buffer"])}else if(wt==="ml-tensor"&&Ae>0){let xe=s.jsepEnsureTensor;if(!xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ct(ge,Ae)===void 0||!Aa(B))throw new Error(`Unsupported data type: ${B}`);let fe=await xe(e,U,ge,qe,!1);ce=!0,Z.push([B,qe,{mlTensor:fe,download:s.jsepCreateMLTensorDownloader(U,B),dispose:()=>{s.jsepReleaseTensorId(U),s._OrtReleaseTensor(ne)}},"ml-tensor"])}else{let xe=Ca(B),fe=new xe(Ae);new Uint8Array(fe.buffer,fe.byteOffset,fe.byteLength).set(s.HEAPU8.subarray(U,U+fe.byteLength)),Z.push([B,qe,fe,"cpu"])}}finally{s.stackRestore(pe),B==="string"&&U&&s._free(U),ce||s._OrtReleaseTensor(ne),(K=s.jsepOnRunEnd)==null||K.call(s,d)}}return h&&!g&&(s._OrtClearBoundOutputs(h.handle)!==0&&le("Can't clear bound outputs."),mt.set(e,[d,c,f,h,g,!1])),Z}finally{s.stackRestore(E),S.forEach(J=>s._OrtReleaseTensor(J)),k.forEach(J=>s._OrtReleaseTensor(J)),T.forEach(J=>s._free(J)),$!==0&&s._OrtReleaseRunOptions($),w.forEach(J=>s._free(J))}},Za=e=>{let t=ke(),r=mt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&le("Can't get an profile file name."),t._OrtFree(n)},Qa=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),gt,Oe,Dt,rr,ir,Br,sa,Nr,St,Tt,Hl,yf,_f,bf,wf,$f,vf,xf,kf=P(()=>{Qe(),gf(),Rt(),Ta(),gt=()=>!!_e.wasm.proxy&&typeof document<"u",Dt=!1,rr=!1,ir=!1,Nr=new Map,St=(e,t)=>{let r=Nr.get(e);r?r.push(t):Nr.set(e,[t])},Tt=()=>{if(Dt||!rr||ir||!Oe)throw new Error("worker not ready")},Hl=e=>{switch(e.data.type){case"init-wasm":Dt=!1,e.data.err?(ir=!0,sa[1](e.data.err)):(rr=!0,sa[0]()),Br&&(URL.revokeObjectURL(Br),Br=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},yf=async()=>{if(!rr){if(Dt)throw new Error("multiple calls to 'initWasm()' detected.");if(ir)throw new Error("previous call to 'initWasm()' failed.");if(Dt=!0,gt())return new Promise((e,t)=>{Oe==null||Oe.terminate(),gd().then(([r,a])=>{var n;try{Oe=a,Oe.onerror=s=>t(s),Oe.onmessage=Hl,sa=[e,t];let i={type:"init-wasm",in:_e};!i.in.wasm.wasmPaths&&(r||(n=import.meta.url)!=null&&n.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/static/ort-wasm-simd-threaded.jsep.B5gdmGHs.wasm",import.meta.url).href}),Oe.postMessage(i),Br=r}catch(i){t(i)}},t)});try{await Ia(_e.wasm),await Ha(_e),rr=!0}catch(e){throw ir=!0,e}finally{Dt=!1}}},_f=async e=>{if(gt())return Tt(),new Promise((t,r)=>{St("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:_e}};Oe.postMessage(a)});await Fa(_e,e)},bf=async e=>gt()?(Tt(),new Promise((t,r)=>{St("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Oe.postMessage(a,[e.buffer])})):Hr(e),wf=async(e,t)=>{if(gt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tt(),new Promise((r,a)=>{St("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),Oe.postMessage(n,i)})}else return ja(e,t)},$f=async e=>{if(gt())return Tt(),new Promise((t,r)=>{St("release",[t,r]);let a={type:"release",in:e};Oe.postMessage(a)});Ka(e)},vf=async(e,t,r,a,n,i)=>{if(gt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tt(),new Promise((s,u)=>{St("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:i}};Oe.postMessage(d,Qa(l))})}else return Xa(e,t,r,a,n,i)},xf=async e=>{if(gt())return Tt(),new Promise((t,r)=>{St("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Oe.postMessage(a)});Za(e)}}),oa,Fl,Sf,yg=P(()=>{Qe(),kf(),Q(),Sa(),wd(),oa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Fl=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!za(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return Ue.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!Aa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return Ue.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Sf=class{async fetchModelAndCopyToWasmMemory(e){return bf(await Oa(e))}async loadModel(e,t){rt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await wf(r,t),Ze()}async dispose(){return $f(this.sessionId)}async run(e,t,r){rt();let a=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],g=f[1],y=this.inputNames.indexOf(h);if(y===-1)throw new Error(`invalid input '${h}'`);a.push(g),n.push(y)});let i=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],g=f[1],y=this.outputNames.indexOf(h);if(y===-1)throw new Error(`invalid output '${h}'`);i.push(g),s.push(y)});let u=a.map((f,h)=>oa(f,()=>`input "${this.inputNames[n[h]]}"`)),l=i.map((f,h)=>f?oa(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await vf(this.sessionId,n,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=i[f]??Fl(d[f]);return Ze(),c}startProfiling(){}endProfiling(){xf(this.sessionId)}}}),Tf={};dr(Tf,{OnnxruntimeWebAssemblyBackend:()=>$a,initializeFlags:()=>wa,wasmBackend:()=>If});var wa,$a,If,_g=P(()=>{Qe(),kf(),yg(),wa=()=>{if((typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0),_e.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let e=typeof navigator>"u"?rm("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},$a=class{async init(e){wa(),await yf(),await _f(e)}async createInferenceSessionHandler(e,t){let r=new Sf;return await r.loadModel(e,t),Promise.resolve(r)}},If=new $a});Qe();Qe();Qe();var bg="1.21.1";{let e=(_g(),Pr(Tf)).wasmBackend;Ut("webgpu",e,5),Ut("webnn",e,5),Ut("cpu",e,10),Ut("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:bg,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(){return null}const Me=46,De=46,Re=16,qt=2;function yt(e){const t=Ve.useRef(null),r=n=>{var i;t.current&&((i=e.onEnter)==null||i.call(e,t.current.offsetLeft,t.current.offsetTop,t.current.offsetWidth,t.current.offsetHeight))},a=n=>{var i;t.current&&((i=e.onLeave)==null||i.call(e))};return be.jsx("span",{ref:t,onMouseEnter:r,onMouseLeave:a,style:{marginRight:"1em"},children:be.jsx("a",{href:e.href,target:e.target,style:{cursor:"none"},children:e.children})})}function $g(){const[e,t]=Ve.useState({x:-10,y:-10}),[r,a]=Ve.useState({w:"10px",h:"10px"}),[n,i]=Ve.useState({x:-10,y:-10}),[s,u]=Ve.useState({w:"10px",h:"10px"}),[l,d]=Ve.useState(!1),[c,f]=Xh(),g=Math.min(c,f)*.6,y=$=>{l?(t(n),a(s)):(t({x:$.clientX,y:$.clientY}),a({w:`${g*qt*2/De}px`,h:`${g*qt*2/Me}px`}))},b=($,w,S,k)=>{d(!0);const T=k/8;$-=T,S+=T*2,i({x:$+S/2,y:w+k/2}),u({w:`${S}px`,h:`${k}px`})},x=()=>{d(!1)};return be.jsxs(be.Fragment,{children:[be.jsx(wg,{children:be.jsx("link",{href:"https://fonts.googleapis.com/css2?family=DotGothic16&display=swap",rel:"stylesheet"})}),be.jsxs("div",{onMouseMove:y,style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"none"},children:[be.jsx(vg,{}),be.jsx("div",{style:{height:"4em"}}),be.jsxs("div",{style:{fontSize:"4vmin",fontWeight:"normal"},children:[be.jsx("span",{style:{marginRight:"1em",fontWeight:"bold"},children:"MANGA▶"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"/komaTrials",children:"KOMAs"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"/null1",children:"NULL1"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"/null2",children:"NULL2"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"/Q",children:"Q"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"/UglyYuri",children:"UglyYuri"}),be.jsx("div",{style:{height:"0"}}),be.jsx("span",{style:{marginRight:"1em",fontWeight:"bold"},children:"LINKS▶"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"https://x.com/NikuKiKai",target:"_blank",children:"X"}),be.jsx(yt,{onEnter:b,onLeave:x,href:"https://photohito.com/user/159218/",target:"_blank",children:"PHOTO"}),be.jsxs(yt,{onEnter:b,onLeave:x,href:"https://nikukikai.hatenablog.jp/",target:"_blank",children:["BLOG",be.jsx("span",{style:{fontSize:"1.5vmin"},children:"(CHN)"})]})]}),be.jsx("div",{style:{position:"absolute",borderStyle:"solid",borderWidth:l?"2px":"1px",boxSizing:"border-box",borderColor:"#ddd",pointerEvents:"none",transitionDuration:l?"0.1s":"0s",transitionTimingFunction:l?"ease-out":"linear",left:`calc(${e.x}px - ${r.w} / 2)`,top:`calc(${e.y}px - ${r.h} / 2)`,width:`${r.w}`,height:`${r.h}`}})]})]})}const vg=()=>{const e=Ve.useRef(null),t=Ve.useRef(null),r=Ve.useRef(null),[a,n]=Ve.useState(0);Ve.useEffect(()=>{let s;return(async()=>{const u=await ka.create("./home/short40_default.onnx");console.log(u.inputNames,u.outputNames);const l=new Float32Array(Me*De*Re);for(let h=3;h<Re;h++)l[Me/2*De*Re+De/2*Re+h]=1;let d=new Ue("float32",l,[1,Me,De,Re]);const c=Float64Array.from([0]),f=new Ue("float64",c,[1]);s=setInterval(async()=>{const h={"x.1":d,angle:f},y=(await u.run(h))[89].data;if(r.current){const b=r.current;for(let x=Math.round(b.x*De-qt);x<Math.round(b.x*De+qt);x++)if(!(x<0||x>=De)){for(let $=Math.round(b.y*Me-qt);$<Math.round(b.y*Me+qt);$++)if(!($<0||$>=Me))for(let w=0;w<Re;w++)y[$*De*Re+x*Re+w]=0}r.current=null}t.current=y,n(Date.now()),d=new Ue("float32",y,[1,Me,De,Re])},30)})(),()=>{s&&clearInterval(s)}},[]),Ve.useEffect(()=>{if(!e.current||!t.current)return;const s=e.current.getContext("2d");if(s){s.imageSmoothingEnabled=!1,s.clearRect(0,0,De,Me);for(let u=0;u<De*Me*Re;u+=Re){const l=Math.floor(u/(Me*Re)),d=(u-l*Me*Re)/Re,c=Math.min(1,Math.max(0,t.current[u]))*255,f=Math.min(1,Math.max(0,t.current[u+1]))*255,h=Math.min(1,Math.max(0,t.current[u+2]))*255,g=Math.min(1,Math.max(0,t.current[u+3]));s.fillStyle=`rgba(${c}, ${f}, ${h}, ${g})`,s.fillRect(d,l,1,1)}}},[a]);const i=s=>{e.current&&(r.current={x:(s.clientX-e.current.offsetLeft)/e.current.offsetWidth,y:(s.clientY-e.current.offsetTop)/e.current.offsetHeight})};return be.jsx("canvas",{ref:e,width:De,height:Me,onMouseMove:i,style:{width:"60vmin",height:"60vmin",imageRendering:"pixelated"}})},xg=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),Cg={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:Yh}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:xg}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/Layout.jsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:Qh}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.js",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"NIKUKIKAI"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.js",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:Zh}}};export{Cg as configValuesSerialized};
