import{r as B,a as ie,b as oe,g as ae,j as G,i as se,L as ce,o as le}from"../chunks/chunk-Cut-yjK-.js";/* empty css                      */import"../chunks/chunk-2C7rdSYH.js";/* empty css                      */const ue=p=>{const A=B.useRef(p);return B.useEffect(()=>{A.current=p}),A},de=(p,A=100,m=!1)=>{const g=ue(p),r=B.useRef(),C=[A,m,g];function w(){r.current&&clearTimeout(r.current),r.current=void 0}B.useEffect(()=>w,C);function f(){r.current=void 0}return B.useCallback(function(){const I=arguments,{current:U}=r;if(U===void 0&&m)return r.current=setTimeout(f,A),g.current.apply(null,I);U&&clearTimeout(U),r.current=setTimeout(()=>{r.current=void 0,g.current.apply(null,I)},A)},C)},pe=(p,A,m)=>{const g=B.useState(p);return[g[0],de(g[1],A,m)]};function k(p,A,m,g){const r=B.useRef(m),C=B.useRef(g);B.useEffect(()=>{r.current=m,C.current=g}),B.useEffect(()=>{const w=p&&"current"in p?p.current:p;if(!w)return;let f=0;function I(...V){f||r.current.apply(this,V)}w.addEventListener(A,I);const U=C.current;return()=>{f=1,w.removeEventListener(A,I),U&&U()}},[p,A])}const Ae={},O=typeof window>"u"?null:window,fe=O&&typeof O.visualViewport<"u"?O.visualViewport:null,H=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],ge=function(p){p===void 0&&(p=Ae);const{wait:A,leading:m,initialWidth:g=0,initialHeight:r=0}=p,[C,w]=pe(typeof document>"u"?[g,r]:H,A,m),f=()=>w(H);return k(O,"resize",f),k(fe,"resize",f),k(O,"orientationchange",f),C};var Y={exports:{}},W;function he(){return W||(W=1,function(p,A){(function(m,g){p.exports=g()})(self,()=>(()=>{var m={523:(n,e,t)=>{t.d(e,{A:()=>Q});var s=t(601),u=t.n(s),c=t(314),i=t.n(c),o=t(417),a=t.n(o),d=new URL(t(451),t.b),h=new URL(t(327),t.b),b=i()(u()),l=a()(d),x=a()(h);b.push([n.id,`.container {
    position: relative;
    background-color: #222;
    overflow: hidden;

    transform-style: preserve-3d;
    perspective: 2000px;
}

.comic-page {
    height: 80%;
    width: 40%;
    top: 10%;
    position: absolute;

    transition: 2s;
    transition-timing-function: ease-out;
    user-select: none;
    backface-visibility: hidden;
}

.comic-img-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.comic-img {
    display: block;
    position: absolute;
    object-fit: contain;
    width: 100%;
    height: 100%;

    /* filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5)); */
}

.comic-img-shadow-div {
    position: absolute;
    width: 100%;
    height: 100%;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-mode: alpha;
    mask-type: alpha;

    transition: 2s;
    transition-timing-function: ease-in-out;
}

.loading-div {
    z-index: 10000;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #222;
    color: #ccc;
    font-size: 2em;

    justify-content: center;
    transition: 1s;
}

.loading-div p {
    position: absolute;
    top: calc(50% - 1em);
    left: calc(50% - 3em);
}

.left-overlay {
    z-index: 9999;
    position: absolute;
    left: 0;
    width: 33%;
    top: 0;
    height: 100%;
    cursor: url(${l}), pointer;
}

.right-overlay {
    z-index: 9999;
    position: absolute;
    right: 0;
    width: 33%;
    top: 0;
    height: 100%;
    cursor: url(${x}), pointer;
}`,""]);const Q=b},314:n=>{n.exports=function(e){var t=[];return t.toString=function(){return this.map(function(s){var u="",c=s[5]!==void 0;return s[4]&&(u+="@supports (".concat(s[4],") {")),s[2]&&(u+="@media ".concat(s[2]," {")),c&&(u+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),u+=e(s),c&&(u+="}"),s[2]&&(u+="}"),s[4]&&(u+="}"),u}).join("")},t.i=function(s,u,c,i,o){typeof s=="string"&&(s=[[null,s,void 0]]);var a={};if(c)for(var d=0;d<this.length;d++){var h=this[d][0];h!=null&&(a[h]=!0)}for(var b=0;b<s.length;b++){var l=[].concat(s[b]);c&&a[l[0]]||(o!==void 0&&(l[5]===void 0||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),u&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=u),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},417:n=>{n.exports=function(e,t){return t||(t={}),e&&(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},601:n=>{n.exports=function(e){return e[1]}},72:n=>{var e=[];function t(c){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===c){i=o;break}return i}function s(c,i){for(var o={},a=[],d=0;d<c.length;d++){var h=c[d],b=i.base?h[0]+i.base:h[0],l=o[b]||0,x="".concat(b," ").concat(l);o[b]=l+1;var Q=t(x),D={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(Q!==-1)e[Q].references++,e[Q].updater(D);else{var F=u(D,i);i.byIndex=d,e.splice(d,0,{identifier:x,updater:F,references:1})}a.push(x)}return a}function u(c,i){var o=i.domAPI(i);return o.update(c),function(a){if(a){if(a.css===c.css&&a.media===c.media&&a.sourceMap===c.sourceMap&&a.supports===c.supports&&a.layer===c.layer)return;o.update(c=a)}else o.remove()}}n.exports=function(c,i){var o=s(c=c||[],i=i||{});return function(a){a=a||[];for(var d=0;d<o.length;d++){var h=t(o[d]);e[h].references--}for(var b=s(a,i),l=0;l<o.length;l++){var x=t(o[l]);e[x].references===0&&(e[x].updater(),e.splice(x,1))}o=b}}},659:n=>{var e={};n.exports=function(t,s){var u=function(c){if(e[c]===void 0){var i=document.querySelector(c);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}e[c]=i}return e[c]}(t);if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(s)}},540:n=>{n.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(n,e,t)=>{n.exports=function(s){var u=t.nc;u&&s.setAttribute("nonce",u)}},825:n=>{n.exports=function(e){if(typeof document>"u")return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){(function(u,c,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var a=i.layer!==void 0;a&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,a&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var d=i.sourceMap;d&&typeof btoa<"u"&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),c.styleTagTransform(o,u,c.options)})(t,e,s)},remove:function(){(function(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s)})(t)}}}},113:n=>{n.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},451:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFGElEQVR4nN2ba6hVVRSFv+Hj+iwjCwuLECkoMCuxpBIEQUgzozIpC0spSULESElCEKm0ByISiUmKhZglGL6Koigk0QRLgoIkJCwqsqKHdtPb6EcK13Xnzrsf53Hv/LnG2GvN+Z199tnrcWSbrhKS7gVmApcD64E1tr8t1WdXACBpOvBahnzM9oDCfTc7AElLgMVnsdl2j0L9NzMASU8BizppX2l7Xu4xmhWApOXAgkBaD+wA3kgF28o9TjMCkPQCMD+QFtteesrTA2hrL3YLAJJWAnMDaZHtZxJvmvy5tn/PNV4zAZD0IjAnkBbYfi7xTgU2t2/r0neApNXA7ECab3tF4p0EbE+NXRaApLXArECaa3tV4p0CbA28F9n+IffYjQYgaR3wQCDNsf1S4r0TeDPwbrJ9T6HxGwlA0qvAfYH0sO2XE+80YFPg3Wb7tsI5NAqApI1A9KnNtL0u8Wa9CpcqHhoEQNLrwN2BNMP2hsQ7g/9eftIoXTw0AICkLcAdgTTd9sbEOwtYG3i3255cST71BCBpKzAlkKbZ3px4ZwOrA29lxUMdAUjaBtwaSHfZ3pJ4HwVWBd5Ki4c6AZC0E7glkG63/VbinQesCLyVFw91ACDpHWBCIE22vT3xPg48G3h32I7unvL51RKApPeA8YE00fauxPsE8HTgrVnxUEMAkj4AxgXSBNvvJt7FwJLAW9PioUYAJH0EjA2k8bbfT7xLgScD707bkypPLonKAUjaDdwUSONsf5h4lwELA29dioeKAUjaA4wJpLG2dyfe54HHAm/diocKAUjaB4wOpBtt70m8Was+dS0eKgIgaT8wKpBusL0v8Wat+uyyPbF0MjmjNABJB4BrAmm07f2Jdw3wUOBtSPFQEoCkz4CrA+k62wcS7yvAg4G3YcVDCQCSFgDLA2mk7YOJdwNwf+BtaPFQDkB04Qjbnye+rIWPt21H84O6RiEAkhYCy5Lmq2x/kfg2A1ODLpqieCgO4BAwvF3TI7ZXJ54BwB/B5U1TPBQH0Aq0tGu60vaXiWcEcMaz4FRcYfur3IPWKIoC6PBEjzYlJLUB0bb1MNuHcw9cgygKYBSwP2kO9+j/B8IlZU93VBFlfgWOAEOT5rwQhtj+sVACFUXZF6Hw4pxfh8G2fy6cRMkoC0DAP5GWE8Ig278VTqREVDEXqArCQNt/lkqmQFQ1G+xwWuN05ITQz/ZfpRPKEVWuB/QETkZaTgh9bP9dSVKdiKpXhKqC0Nt22E/VUYs1wV7AiUjLCaGn7fDZUmXUalW4NxDexjkh9HCNd25quS/QArRGWh4IRc795Ila7wz1AcKnerNAqMfeYF/geIbc4RavN4R67Q73A45lyA2FUM/zAf2BrDe9Dk/8ekGo9wmRgUDWUdbOQghnnIVzasAZoXOArIlPL9ttiT+C0Ga7VyX5NOiU2CDg1wy5w1tgBoQTtlsoGY08J3ge8EuG3GL7ROKPILTa7lsqj0YBAJB0PnA0Q+4wKcqA0LX/MyRpMPBThtzXdmviPwn0THwHbY8sNH6jAQBIuhDIWhvssEaQAeFa25/mHrsZAABIGgJ8nyH3t3088acQTtrunXvcZgEAIOli4LsMeYDtY+283fY/Q0OBIxnyGeuG6ap0twAAIOlS4JsM+WbgY2AvyZGcbgMAQNJlwOEcl3xi+/rc4zQrAABJw4CvO+MtOklqagAAkoYDh85iG2N7b6H+mx3A6cg4gHnU9gVl+v0XRSX6nxGJj9MAAAAASUVORK5CYII="},327:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFPUlEQVR4nM2bfcieUxzHP2fPXhhbmJAtSVOUxmqIRETeJmrMWmjTrEnS8k5SS4RoLU3IW8yaIbMXpdTKS2MNoyhaEgt5ydu8zLaPPxY9znPOs+e6rnNd9/P985zvOb/f79N13/c55zp3UGmiEML3wISo+S31lEYTd6RQF0AI4URgwx5sk9UttQJ0pCYAhjrwCPXzWkE6UC0AIYR3geMrDDlc/aJyoA5UF0A8aCNwInAy8GZm2GHql5WDtawiANTQr28f4LfM0Enq1soBW1SpJ6BP3dWvfyywLTP8UPXrykFbUl0AfwMj+zXtVEdGnr2B3zNTHKJ+WzlwC6oL4Djg/ag5BWEv4I/MNAep31UOXlhNfgY3A1Oi5hSEMcCfmWkOVH+olUAh1QYAEELYBoyNmnepfZFvNPBXZpoJ6o+1k2ioRgAAQgh/AmOi5hSEUcD2zDT7qz81SqSmGgMACCFsB0ZFzSkII4G/M9Psp/7cOJmKKgIAIISwA+iLmlMQ+oAdmWnGq78WSWiIKgYAIISwCwhRcwrCCGBnZppxam4hVVxFAUB2k1QVwj5qbg1RVMUBQCUIAdiV8AKMVXNriGJqBQAUg7C3mltDFFFrAGDoEAbxAuyl5tYQjdUqACgGYYyaW0M0UhcAco94VQij1dwaorZaBwCDfuNXhTBKza0h6uXWBQAYdBVYFcJINffzWT2vrgDAoJuinkHoFAAMekZQFcL/TqFq59M1ABj03LAqhBE2LKAnAABCCOOB1O6vUwg9AwAQQjgASJ0IVYLQ/1S6cg69BAAQQjgISB2Q5iCkdpxb1Um14vcaAEAIYSLwVaKrCoRp6qbKsYcDAIAQwuFA6h3iUD8OT6pXVo47XAAAhBCOBD5NdE1RP4q8RwGf9GvarsZnk3uOOcwAvAqck+jaV90WeRcAD/dr2qJOrhxzuAAYpPiV6szIezTwceS7Rb23ctzhAGCQ4persyPvMcBHsbHuT2HPAYQQ1gHnJrqeUa+IvFOAzQnvzep9teL3eCGUK37AN3oIYSrwXsL7oXps7Rx6uBTOFf+YOj/yTmP3JYxYH6hTG+XRo81Qrvil6jWR9wTgnYR3kzqtcS492A6vBc5LdC1Rr4u8JwFvJ7wb1ROK5NPxgUiu+AfUGyLvKcAbCe8G9aRiOXV4JJYr/l71lsh7GrA+4S1+AbOrQ9Fc8Xepd0TeM4DXE9431FOL59bBsfga4PxE153qosh7FvBawrtePb2V/Fp+M5Qr/jb1nsh7LrAu4X1dPbON/KDdd4O54m9S74+804HVCe9r6tlt5Pdf7JbeDq8Gpie6FqqLI++FwMsJ76tq6nujqNq4H5Ar/lr1ocg7A3gh4V2jXlA0sYxK3xDJFb9AfSTyzgRWJLyr1IuKJbUHlbwjlCt+nvp45J0NLEt4X1JnFEloiCp1S+wVIPXIzlGfjrxXAE8nvM+rlzZOpqJK3BPMFX+ZuizyzgWeSHgHHHx0paY3RXPFz1JXRN6rgEcT3mfVy2sn0VBN7govB2Ylui5WX4y8VwNLE96n1Lm1EiikurfFDwa+SXRdpK6KvNcCSxLex9V5lYMXVqk/TABMV9dGvoXAgwnvI+qCyoFbUCkAM9WVkedGIHVQOeDUp5eqDCCEMA74pX9bfCQdQrgVuDsxfMCpT69V/D9DIYQ7gEUDR/Ggen31FNtVye+AS9i9+5uT6LtPvblyoA5UF8BiYKiP8t3q7ZWDdKQm64DUO/pYi9Q7awXoSG38Z+hfDVgKD0eV2AtMBOaz+7P/GfCE+lzz1LrRP451Da7wwXVXAAAAAElFTkSuQmCC"}},g={};function r(n){var e=g[n];if(e!==void 0)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,r),t.exports}r.m=m,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.b=document.baseURI||self.location.href,r.nc=void 0;var C={};r.r(C),r.d(C,{default:()=>re});const w=ie(),f=oe();var I=r(72),U=r.n(I),V=r(825),q=r.n(V),K=r(659),J=r.n(K),Z=r(56),_=r.n(Z),$=r(540),ee=r.n($),te=r(113),ne=r.n(te),X=r(523),P={};function re(n){const{width:e,height:t,urls:s,direction:u="rtl",start_1side:c=!1,divideAspect:i=1.41,margin:o="10%"}=n,[a,d]=(0,f.useState)(0),h=s.length,b=(0,f.useRef)(n),l=(0,f.useRef)(),x=(0,f.useRef)([]),Q=(0,f.useRef)(new Map);b.current=n;const D=T=>{T==="right"==(u==="rtl")?a>0&&d(a-2):a<h-2+(c?1:0)&&d(a+2)};(0,f.useEffect)(()=>{const T=()=>{Q.current.forEach((y,E)=>{if(!y)return;const S=x.current;if(E>=S.length)return;const z=S[E],N=y.parentElement.parentElement.clientWidth/z.width,v=y.parentElement.parentElement.clientHeight/z.height,M=Math.min(N,v),R=z.width*M,L=z.height*M;y.width=R,y.height=L,y.style.width=`${R}px`,y.style.height=`${L}px`,y.parentElement.style.width=`${R}px`,y.parentElement.style.height=`${L}px`;const j=y.getContext("2d");j.save(),j.scale(M,M),j.drawImage(z,0,0),j.restore()})};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]),(0,f.useEffect)(()=>{x.current=[]},[s,i]);let F=!l.current||l.current.direction!==n.direction||l.current.start_1side!==n.start_1side;return(0,f.useEffect)(()=>{l.current=n},[n]),(0,w.jsxs)("div",{className:"container",style:{width:`${e}px`,height:`${t}px`},children:[s.map((T,y)=>{const E=c?y+1:y,S=u==="rtl"==(E%2==0)?"right":"left",z=9999-200*Math.abs(2*E-2*a-0);let N=-2*Math.abs((E<=a?0:2)+a-2*Math.ceil(E/2)),v=(E<=a?0:2)+a-2*Math.ceil(E/2);v/=2,v>=1&&(v-=1),v<=-1&&(v+=1),Math.abs(v)<2.5?v=2*v*v*Math.sign(v):v*=5,u==="ltr"&&(v=-v);const M=S===(E<=a==(u==="rtl")?"right":"left")?0:S==="right"?-180:180,R=a===E-1||a===E?10:200,L="round(nearest, calc(50%), 1px)",j=`calc(${L} - 1px)`;return(0,w.jsxs)("div",{className:"comic-page",style:Object.assign(Object.assign(Object.assign({},S==="left"?{right:j}:{left:L}),{top:o,width:`calc(50% - ${o})`,height:`calc(100% - ${o} * 2)`,zIndex:`${z}`,transformOrigin:S==="left"?"right":"left",transform:`translateX(${v}px) translateZ(${N}px) rotateY(${M}deg)`}),F?{transitionDuration:"0s"}:{}),children:[(0,w.jsx)("img",{src:T,className:"comic-img",style:{objectPosition:S==="left"?"right":"left",filter:`drop-shadow(${S==="right"?4:-4}px 0px 2px rgba(0, 0, 0, 0.2))`}}),(0,w.jsx)("div",{className:"comic-img-shadow-div",style:Object.assign(Object.assign({boxShadow:`inset ${S==="left"?"-":""}${R}px 0 ${R}px -10px rgba(0,0,0,0.3)`},S==="left"?{right:0}:{left:0}),{maskImage:`url(${T})`,maskPosition:S==="left"?"right":"left"})})]},y)}),(0,w.jsx)("div",{className:"left-overlay",onMouseDown:T=>{T.button===0&&D("left")}}),(0,w.jsx)("div",{className:"right-overlay",onMouseDown:T=>{T.button===0&&D("right")}})]})}return P.styleTagTransform=ne(),P.setAttributes=_(),P.insert=J().bind(null,"head"),P.domAPI=q(),P.insertStyleElement=ee(),U()(X.A,P),X.A&&X.A.locals&&X.A.locals,C})())}(Y)),Y.exports}var ve=he();const me=ae(ve),we=["/assets/Q/1.png","/assets/Q/2.png","/assets/Q/3.png","/assets/Q/4.png","/assets/Q/5.png","/assets/Q/6.png","/assets/Q/7.png","/assets/Q/8.png","/assets/Q/9.png","/assets/Q/10.png"];function be(){return G.jsx(B.Suspense,{children:G.jsx(ye,{})})}function ye(){const[p,A]=ge(),m=we;return G.jsx(me,{width:p,height:A,urls:m,margin:"5%",start_1side:!1})}const xe=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),Be={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:le}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/Q/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:xe}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/Layout.jsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:ce}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.js",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"NIKUKIKAI"}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:se}}};export{Be as configValuesSerialized};
