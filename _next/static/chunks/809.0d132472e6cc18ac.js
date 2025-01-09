(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{3809:(e,t,r)=>{var n;self,n=()=>(()=>{"use strict";var e={523:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(601),i=r.n(n),a=r(314),o=r.n(a),s=r(417),c=r.n(s),l=new URL(r(451),r.b),A=new URL(r(327),r.b),p=o()(i()),d=c()(l),u=c()(A);p.push([e.id,`.container {
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
    cursor: url(${d}), pointer;
}

.right-overlay {
    z-index: 9999;
    position: absolute;
    right: 0;
    width: 33%;
    top: 0;
    height: 100%;
    cursor: url(${u}), pointer;
}`,""]);let g=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,n,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var A=[].concat(e[l]);n&&o[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),r&&(A[2]&&(A[1]="@media ".concat(A[2]," {").concat(A[1],"}")),A[2]=r),i&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=i):A[4]="".concat(i)),t.push(A))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],o=0;o<e.length;o++){var s=e[o],c=n.base?s[0]+n.base:s[0],l=i[c]||0,A="".concat(c," ").concat(l);i[c]=l+1;var p=r(A),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var u=function(e,t){var r=t.domAPI(t);return r.update(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&r.update(e=t):r.remove()}}(d,n);n.byIndex=o,t.splice(o,0,{identifier:A,updater:u,references:1})}a.push(A)}return a}e.exports=function(e,i){var a=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=r(a[o]);t[s].references--}for(var c=n(e,i),l=0;l<a.length;l++){var A=r(a[l]);0===t[A].references&&(t[A].updater(),t.splice(A,1))}a=c}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){var n,i,a;n="",r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {")),(i=void 0!==r.layer)&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}"),(a=r.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)},remove:function(){null!==t.parentNode&&t.parentNode.removeChild(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},451:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFGElEQVR4nN2ba6hVVRSFv+Hj+iwjCwuLECkoMCuxpBIEQUgzozIpC0spSULESElCEKm0ByISiUmKhZglGL6Koigk0QRLgoIkJCwqsqKHdtPb6EcK13Xnzrsf53Hv/LnG2GvN+Z199tnrcWSbrhKS7gVmApcD64E1tr8t1WdXACBpOvBahnzM9oDCfTc7AElLgMVnsdl2j0L9NzMASU8BizppX2l7Xu4xmhWApOXAgkBaD+wA3kgF28o9TjMCkPQCMD+QFtteesrTA2hrL3YLAJJWAnMDaZHtZxJvmvy5tn/PNV4zAZD0IjAnkBbYfi7xTgU2t2/r0neApNXA7ECab3tF4p0EbE+NXRaApLXArECaa3tV4p0CbA28F9n+IffYjQYgaR3wQCDNsf1S4r0TeDPwbrJ9T6HxGwlA0qvAfYH0sO2XE+80YFPg3Wb7tsI5NAqApI1A9KnNtL0u8Wa9CpcqHhoEQNLrwN2BNMP2hsQ7g/9eftIoXTw0AICkLcAdgTTd9sbEOwtYG3i3255cST71BCBpKzAlkKbZ3px4ZwOrA29lxUMdAUjaBtwaSHfZ3pJ4HwVWBd5Ki4c6AZC0E7glkG63/VbinQesCLyVFw91ACDpHWBCIE22vT3xPg48G3h32I7unvL51RKApPeA8YE00fauxPsE8HTgrVnxUEMAkj4AxgXSBNvvJt7FwJLAW9PioUYAJH0EjA2k8bbfT7xLgScD707bkypPLonKAUjaDdwUSONsf5h4lwELA29dioeKAUjaA4wJpLG2dyfe54HHAm/diocKAUjaB4wOpBtt70m8Was+dS0eKgIgaT8wKpBusL0v8Wat+uyyPbF0MjmjNABJB4BrAmm07f2Jdw3wUOBtSPFQEoCkz4CrA+k62wcS7yvAg4G3YcVDCQCSFgDLA2mk7YOJdwNwf+BtaPFQDkB04Qjbnye+rIWPt21H84O6RiEAkhYCy5Lmq2x/kfg2A1ODLpqieCgO4BAwvF3TI7ZXJ54BwB/B5U1TPBQH0Aq0tGu60vaXiWcEcMaz4FRcYfur3IPWKIoC6PBEjzYlJLUB0bb1MNuHcw9cgygKYBSwP2kO9+j/B8IlZU93VBFlfgWOAEOT5rwQhtj+sVACFUXZF6Hw4pxfh8G2fy6cRMkoC0DAP5GWE8Ig278VTqREVDEXqArCQNt/lkqmQFQ1G+xwWuN05ITQz/ZfpRPKEVWuB/QETkZaTgh9bP9dSVKdiKpXhKqC0Nt22E/VUYs1wV7AiUjLCaGn7fDZUmXUalW4NxDexjkh9HCNd25quS/QArRGWh4IRc795Ila7wz1AcKnerNAqMfeYF/geIbc4RavN4R67Q73A45lyA2FUM/zAf2BrDe9Dk/8ekGo9wmRgUDWUdbOQghnnIVzasAZoXOArIlPL9ttiT+C0Ga7VyX5NOiU2CDg1wy5w1tgBoQTtlsoGY08J3ge8EuG3GL7ROKPILTa7lsqj0YBAJB0PnA0Q+4wKcqA0LX/MyRpMPBThtzXdmviPwn0THwHbY8sNH6jAQBIuhDIWhvssEaQAeFa25/mHrsZAABIGgJ8nyH3t3088acQTtrunXvcZgEAIOli4LsMeYDtY+283fY/Q0OBIxnyGeuG6ap0twAAIOlS4JsM+WbgY2AvyZGcbgMAQNJlwOEcl3xi+/rc4zQrAABJw4CvO+MtOklqagAAkoYDh85iG2N7b6H+mx3A6cg4gHnU9gVl+v0XRSX6nxGJj9MAAAAASUVORK5CYII="},327:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFPUlEQVR4nM2bfcieUxzHP2fPXhhbmJAtSVOUxmqIRETeJmrMWmjTrEnS8k5SS4RoLU3IW8yaIbMXpdTKS2MNoyhaEgt5ydu8zLaPPxY9znPOs+e6rnNd9/P985zvOb/f79N13/c55zp3UGmiEML3wISo+S31lEYTd6RQF0AI4URgwx5sk9UttQJ0pCYAhjrwCPXzWkE6UC0AIYR3geMrDDlc/aJyoA5UF0A8aCNwInAy8GZm2GHql5WDtawiANTQr28f4LfM0Enq1soBW1SpJ6BP3dWvfyywLTP8UPXrykFbUl0AfwMj+zXtVEdGnr2B3zNTHKJ+WzlwC6oL4Djg/ag5BWEv4I/MNAep31UOXlhNfgY3A1Oi5hSEMcCfmWkOVH+olUAh1QYAEELYBoyNmnepfZFvNPBXZpoJ6o+1k2ioRgAAQgh/AmOi5hSEUcD2zDT7qz81SqSmGgMACCFsB0ZFzSkII4G/M9Psp/7cOJmKKgIAIISwA+iLmlMQ+oAdmWnGq78WSWiIKgYAIISwCwhRcwrCCGBnZppxam4hVVxFAUB2k1QVwj5qbg1RVMUBQCUIAdiV8AKMVXNriGJqBQAUg7C3mltDFFFrAGDoEAbxAuyl5tYQjdUqACgGYYyaW0M0UhcAco94VQij1dwaorZaBwCDfuNXhTBKza0h6uXWBQAYdBVYFcJINffzWT2vrgDAoJuinkHoFAAMekZQFcL/TqFq59M1ABj03LAqhBE2LKAnAABCCOOB1O6vUwg9AwAQQjgASJ0IVYLQ/1S6cg69BAAQQjgISB2Q5iCkdpxb1Um14vcaAEAIYSLwVaKrCoRp6qbKsYcDAIAQwuFA6h3iUD8OT6pXVo47XAAAhBCOBD5NdE1RP4q8RwGf9GvarsZnk3uOOcwAvAqck+jaV90WeRcAD/dr2qJOrhxzuAAYpPiV6szIezTwceS7Rb23ctzhAGCQ4persyPvMcBHsbHuT2HPAYQQ1gHnJrqeUa+IvFOAzQnvzep9teL3eCGUK37AN3oIYSrwXsL7oXps7Rx6uBTOFf+YOj/yTmP3JYxYH6hTG+XRo81Qrvil6jWR9wTgnYR3kzqtcS492A6vBc5LdC1Rr4u8JwFvJ7wb1ROK5NPxgUiu+AfUGyLvKcAbCe8G9aRiOXV4JJYr/l71lsh7GrA+4S1+AbOrQ9Fc8Xepd0TeM4DXE9431FOL59bBsfga4PxE153qosh7FvBawrtePb2V/Fp+M5Qr/jb1nsh7LrAu4X1dPbON/KDdd4O54m9S74+804HVCe9r6tlt5Pdf7JbeDq8Gpie6FqqLI++FwMsJ76tq6nujqNq4H5Ar/lr1ocg7A3gh4V2jXlA0sYxK3xDJFb9AfSTyzgRWJLyr1IuKJbUHlbwjlCt+nvp45J0NLEt4X1JnFEloiCp1S+wVIPXIzlGfjrxXAE8nvM+rlzZOpqJK3BPMFX+ZuizyzgWeSHgHHHx0paY3RXPFz1JXRN6rgEcT3mfVy2sn0VBN7govB2Ylui5WX4y8VwNLE96n1Lm1EiikurfFDwa+SXRdpK6KvNcCSxLex9V5lYMXVqk/TABMV9dGvoXAgwnvI+qCyoFbUCkAM9WVkedGIHVQOeDUp5eqDCCEMA74pX9bfCQdQrgVuDsxfMCpT69V/D9DIYQ7gEUDR/Ggen31FNtVye+AS9i9+5uT6LtPvblyoA5UF8BiYKiP8t3q7ZWDdKQm64DUO/pYi9Q7awXoSG38Z+hfDVgKD0eV2AtMBOaz+7P/GfCE+lzz1LrRP451Da7wwXVXAAAAAElFTkSuQmCC"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.b=document.baseURI||self.location.href,n.nc=void 0;var i={};n.r(i),n.d(i,{default:()=>x});let a=r(5155),o=r(2115);var s=n(72),c=n.n(s),l=n(825),A=n.n(l),p=n(659),d=n.n(p),u=n(56),g=n.n(u),h=n(540),f=n.n(h),m=n(113),v=n.n(m),w=n(523),b={};function x(e){let{width:t,height:r,urls:n,direction:i="rtl",start_1side:s=!1,noLoading:c=!1,divideAspect:l=1.41,margin:A="10%"}=e,[p,d]=(0,o.useState)(0),[u,g]=(0,o.useState)(c),h=n.length,f=(0,o.useRef)(e),m=(0,o.useRef)(),v=(0,o.useRef)([]),w=(0,o.useRef)(new Map);f.current=e;let b=e=>{"right"===e==("rtl"===i)?p>0&&d(p-2):p<h-2+(s?1:0)&&d(p+2)};(0,o.useEffect)(()=>{let e=()=>{w.current.forEach((e,t)=>{if(!e)return;let r=v.current;if(t>=r.length)return;let n=r[t],i=Math.min(e.parentElement.parentElement.clientWidth/n.width,e.parentElement.parentElement.clientHeight/n.height),a=n.width*i,o=n.height*i;e.width=a,e.height=o,e.style.width=`${a}px`,e.style.height=`${o}px`,e.parentElement.style.width=`${a}px`,e.parentElement.style.height=`${o}px`;let s=e.getContext("2d");s.save(),s.scale(i,i),s.drawImage(n,0,0),s.restore()})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,o.useEffect)(()=>{g(!!f.current.noLoading),v.current=[]},[n,l]);let x=!m.current||m.current.direction!==e.direction||m.current.start_1side!==e.start_1side;return(0,o.useEffect)(()=>{m.current=e},[e]),(0,a.jsxs)("div",{className:"container",style:{width:`${t}px`,height:`${r}px`},children:[n.map((e,t)=>{let r=s?t+1:t,n="rtl"===i==(r%2==0)?"right":"left",o=9999-200*Math.abs(2*r-2*p-0),c=-2*Math.abs((r<=p?0:2)+p-2*Math.ceil(r/2)),l=(r<=p?0:2)+p-2*Math.ceil(r/2);(l/=2)>=1&&(l-=1),l<=-1&&(l+=1),2.5>Math.abs(l)?l=2*l*l*Math.sign(l):l*=5,"ltr"===i&&(l=-l);let d=p===r-1||p===r?10:200,u="round(nearest, calc(50%), 1px)",g=`calc(${u} - 1px)`;return(0,a.jsxs)("div",{className:"comic-page",style:Object.assign(Object.assign(Object.assign({},"left"===n?{right:g}:{left:u}),{top:A,width:`calc(50% - ${A})`,height:`calc(100% - ${A} * 2)`,zIndex:`${o}`,transformOrigin:"left"===n?"right":"left",transform:`translateX(${l}px) translateZ(${c}px) rotateY(${n===(r<=p==("rtl"===i)?"right":"left")?0:"right"===n?-180:180}deg)`}),x?{transitionDuration:"0s"}:{}),children:[(0,a.jsx)("img",{src:e,className:"comic-img",style:{objectPosition:"left"===n?"right":"left",filter:`drop-shadow(${"right"===n?4:-4}px 0px 2px rgba(0, 0, 0, 0.2))`}}),(0,a.jsx)("div",{className:"comic-img-shadow-div",style:Object.assign(Object.assign({boxShadow:`inset ${"left"===n?"-":""}${d}px 0 ${d}px -10px rgba(0,0,0,0.3)`},"left"===n?{right:0}:{left:0}),{maskImage:`url(${e})`,maskPosition:"left"===n?"right":"left"})})]},t)}),(0,a.jsx)("div",{className:"left-overlay",onMouseDown:e=>{0===e.button&&u&&b("left")}}),(0,a.jsx)("div",{className:"right-overlay",onMouseDown:e=>{0===e.button&&u&&b("right")}}),(0,a.jsx)("div",{className:"loading-div",style:{display:u?"none":"block"},children:(0,a.jsx)("p",{children:"LOADING..."})})]})}return b.styleTagTransform=v(),b.setAttributes=g(),b.insert=d().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=f(),c()(w.A,b),w.A&&w.A.locals&&w.A.locals,i})(),e.exports=n()}}]);