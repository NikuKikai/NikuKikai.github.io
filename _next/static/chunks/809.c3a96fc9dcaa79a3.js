(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{3809:(e,t,r)=>{var n;self,n=()=>(()=>{"use strict";var e={523:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(601),o=r.n(n),a=r(314),i=r.n(a),s=r(417),c=r.n(s),A=new URL(r(451),r.b),l=new URL(r(327),r.b),p=i()(o()),u=c()(A),d=c()(l);p.push([e.id,`.container {
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
    cursor: url(${u}), pointer;
}

.right-overlay {
    z-index: 9999;
    position: absolute;
    right: 0;
    width: 33%;
    top: 0;
    height: 100%;
    cursor: url(${d}), pointer;
}`,""]);let g=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<e.length;A++){var l=[].concat(e[A]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],i=0;i<e.length;i++){var s=e[i],c=n.base?s[0]+n.base:s[0],A=o[c]||0,l="".concat(c," ").concat(A);o[c]=A+1;var p=r(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var d=function(e,t){var r=t.domAPI(t);return r.update(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&r.update(e=t):r.remove()}}(u,n);n.byIndex=i,t.splice(i,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),A=0;A<a.length;A++){var l=r(a[A]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){var n,o,a;n="",r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {")),(o=void 0!==r.layer)&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}"),(a=r.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)},remove:function(){null!==t.parentNode&&t.parentNode.removeChild(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},451:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFGElEQVR4nN2ba6hVVRSFv+Hj+iwjCwuLECkoMCuxpBIEQUgzozIpC0spSULESElCEKm0ByISiUmKhZglGL6Koigk0QRLgoIkJCwqsqKHdtPb6EcK13Xnzrsf53Hv/LnG2GvN+Z199tnrcWSbrhKS7gVmApcD64E1tr8t1WdXACBpOvBahnzM9oDCfTc7AElLgMVnsdl2j0L9NzMASU8BizppX2l7Xu4xmhWApOXAgkBaD+wA3kgF28o9TjMCkPQCMD+QFtteesrTA2hrL3YLAJJWAnMDaZHtZxJvmvy5tn/PNV4zAZD0IjAnkBbYfi7xTgU2t2/r0neApNXA7ECab3tF4p0EbE+NXRaApLXArECaa3tV4p0CbA28F9n+IffYjQYgaR3wQCDNsf1S4r0TeDPwbrJ9T6HxGwlA0qvAfYH0sO2XE+80YFPg3Wb7tsI5NAqApI1A9KnNtL0u8Wa9CpcqHhoEQNLrwN2BNMP2hsQ7g/9eftIoXTw0AICkLcAdgTTd9sbEOwtYG3i3255cST71BCBpKzAlkKbZ3px4ZwOrA29lxUMdAUjaBtwaSHfZ3pJ4HwVWBd5Ki4c6AZC0E7glkG63/VbinQesCLyVFw91ACDpHWBCIE22vT3xPg48G3h32I7unvL51RKApPeA8YE00fauxPsE8HTgrVnxUEMAkj4AxgXSBNvvJt7FwJLAW9PioUYAJH0EjA2k8bbfT7xLgScD707bkypPLonKAUjaDdwUSONsf5h4lwELA29dioeKAUjaA4wJpLG2dyfe54HHAm/diocKAUjaB4wOpBtt70m8Was+dS0eKgIgaT8wKpBusL0v8Wat+uyyPbF0MjmjNABJB4BrAmm07f2Jdw3wUOBtSPFQEoCkz4CrA+k62wcS7yvAg4G3YcVDCQCSFgDLA2mk7YOJdwNwf+BtaPFQDkB04Qjbnye+rIWPt21H84O6RiEAkhYCy5Lmq2x/kfg2A1ODLpqieCgO4BAwvF3TI7ZXJ54BwB/B5U1TPBQH0Aq0tGu60vaXiWcEcMaz4FRcYfur3IPWKIoC6PBEjzYlJLUB0bb1MNuHcw9cgygKYBSwP2kO9+j/B8IlZU93VBFlfgWOAEOT5rwQhtj+sVACFUXZF6Hw4pxfh8G2fy6cRMkoC0DAP5GWE8Ig278VTqREVDEXqArCQNt/lkqmQFQ1G+xwWuN05ITQz/ZfpRPKEVWuB/QETkZaTgh9bP9dSVKdiKpXhKqC0Nt22E/VUYs1wV7AiUjLCaGn7fDZUmXUalW4NxDexjkh9HCNd25quS/QArRGWh4IRc795Ila7wz1AcKnerNAqMfeYF/geIbc4RavN4R67Q73A45lyA2FUM/zAf2BrDe9Dk/8ekGo9wmRgUDWUdbOQghnnIVzasAZoXOArIlPL9ttiT+C0Ga7VyX5NOiU2CDg1wy5w1tgBoQTtlsoGY08J3ge8EuG3GL7ROKPILTa7lsqj0YBAJB0PnA0Q+4wKcqA0LX/MyRpMPBThtzXdmviPwn0THwHbY8sNH6jAQBIuhDIWhvssEaQAeFa25/mHrsZAABIGgJ8nyH3t3088acQTtrunXvcZgEAIOli4LsMeYDtY+283fY/Q0OBIxnyGeuG6ap0twAAIOlS4JsM+WbgY2AvyZGcbgMAQNJlwOEcl3xi+/rc4zQrAABJw4CvO+MtOklqagAAkoYDh85iG2N7b6H+mx3A6cg4gHnU9gVl+v0XRSX6nxGJj9MAAAAASUVORK5CYII="},327:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFPUlEQVR4nM2bfcieUxzHP2fPXhhbmJAtSVOUxmqIRETeJmrMWmjTrEnS8k5SS4RoLU3IW8yaIbMXpdTKS2MNoyhaEgt5ydu8zLaPPxY9znPOs+e6rnNd9/P985zvOb/f79N13/c55zp3UGmiEML3wISo+S31lEYTd6RQF0AI4URgwx5sk9UttQJ0pCYAhjrwCPXzWkE6UC0AIYR3geMrDDlc/aJyoA5UF0A8aCNwInAy8GZm2GHql5WDtawiANTQr28f4LfM0Enq1soBW1SpJ6BP3dWvfyywLTP8UPXrykFbUl0AfwMj+zXtVEdGnr2B3zNTHKJ+WzlwC6oL4Djg/ag5BWEv4I/MNAep31UOXlhNfgY3A1Oi5hSEMcCfmWkOVH+olUAh1QYAEELYBoyNmnepfZFvNPBXZpoJ6o+1k2ioRgAAQgh/AmOi5hSEUcD2zDT7qz81SqSmGgMACCFsB0ZFzSkII4G/M9Psp/7cOJmKKgIAIISwA+iLmlMQ+oAdmWnGq78WSWiIKgYAIISwCwhRcwrCCGBnZppxam4hVVxFAUB2k1QVwj5qbg1RVMUBQCUIAdiV8AKMVXNriGJqBQAUg7C3mltDFFFrAGDoEAbxAuyl5tYQjdUqACgGYYyaW0M0UhcAco94VQij1dwaorZaBwCDfuNXhTBKza0h6uXWBQAYdBVYFcJINffzWT2vrgDAoJuinkHoFAAMekZQFcL/TqFq59M1ABj03LAqhBE2LKAnAABCCOOB1O6vUwg9AwAQQjgASJ0IVYLQ/1S6cg69BAAQQjgISB2Q5iCkdpxb1Um14vcaAEAIYSLwVaKrCoRp6qbKsYcDAIAQwuFA6h3iUD8OT6pXVo47XAAAhBCOBD5NdE1RP4q8RwGf9GvarsZnk3uOOcwAvAqck+jaV90WeRcAD/dr2qJOrhxzuAAYpPiV6szIezTwceS7Rb23ctzhAGCQ4persyPvMcBHsbHuT2HPAYQQ1gHnJrqeUa+IvFOAzQnvzep9teL3eCGUK37AN3oIYSrwXsL7oXps7Rx6uBTOFf+YOj/yTmP3JYxYH6hTG+XRo81Qrvil6jWR9wTgnYR3kzqtcS492A6vBc5LdC1Rr4u8JwFvJ7wb1ROK5NPxgUiu+AfUGyLvKcAbCe8G9aRiOXV4JJYr/l71lsh7GrA+4S1+AbOrQ9Fc8Xepd0TeM4DXE9431FOL59bBsfga4PxE153qosh7FvBawrtePb2V/Fp+M5Qr/jb1nsh7LrAu4X1dPbON/KDdd4O54m9S74+804HVCe9r6tlt5Pdf7JbeDq8Gpie6FqqLI++FwMsJ76tq6nujqNq4H5Ar/lr1ocg7A3gh4V2jXlA0sYxK3xDJFb9AfSTyzgRWJLyr1IuKJbUHlbwjlCt+nvp45J0NLEt4X1JnFEloiCp1S+wVIPXIzlGfjrxXAE8nvM+rlzZOpqJK3BPMFX+ZuizyzgWeSHgHHHx0paY3RXPFz1JXRN6rgEcT3mfVy2sn0VBN7govB2Ylui5WX4y8VwNLE96n1Lm1EiikurfFDwa+SXRdpK6KvNcCSxLex9V5lYMXVqk/TABMV9dGvoXAgwnvI+qCyoFbUCkAM9WVkedGIHVQOeDUp5eqDCCEMA74pX9bfCQdQrgVuDsxfMCpT69V/D9DIYQ7gEUDR/Ggen31FNtVye+AS9i9+5uT6LtPvblyoA5UF8BiYKiP8t3q7ZWDdKQm64DUO/pYi9Q7awXoSG38Z+hfDVgKD0eV2AtMBOaz+7P/GfCE+lzz1LrRP451Da7wwXVXAAAAAElFTkSuQmCC"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};n.r(o),n.d(o,{default:()=>y});let a=r(5155),i=r(2115);var s=n(72),c=n.n(s),A=n(825),l=n.n(A),p=n(659),u=n.n(p),d=n(56),g=n.n(d),f=n(540),h=n.n(f),v=n(113),m=n.n(v),b=n(523),w={};function y(e){if("undefined"==typeof self||"undefined"==typeof window)return void console.log("This will only run in the browser");let{width:t,height:r,urls:n,direction:o="rtl",start_1side:s=!1,margin:c="10%",overwritePageStyles:A={},overwriteNavigate:l}=e,[p,u]=(0,i.useState)(0),d=n.length,g=(0,i.useRef)(e),f=(0,i.useRef)();g.current=e;let h=l?e=>l(e,p):e=>{"right"===e==("rtl"===o)?p>0&&u(p-2):p<d-2+(s?1:0)&&u(p+2)},v=!f.current||f.current.direction!==e.direction||f.current.start_1side!==e.start_1side;return(0,i.useEffect)(()=>{f.current=e},[e]),(0,a.jsxs)("div",{className:"container",style:{width:`${t}px`,height:`${r}px`},children:[n.map((e,t)=>{let r=s?t+1:t,n="rtl"===o==(r%2==0)?"right":"left",i=9999-200*Math.abs(2*r-2*p-0),l=-2*Math.abs((r<=p?0:2)+p-2*Math.ceil(r/2)),u=(r<=p?0:2)+p-2*Math.ceil(r/2);(u/=2)>=1&&(u-=1),u<=-1&&(u+=1),2.5>Math.abs(u)?u=2*u*u*Math.sign(u):u*=5,"ltr"===o&&(u=-u);let d=n===(r<=p==("rtl"===o)?"right":"left")?0:"right"===n?-180:180,g=p===r-1||p===r?10:200,f="round(nearest, calc(50%), 1px)",h=`calc(${f} - 1px)`;return(0,a.jsxs)("div",{className:"comic-page",style:Object.assign(Object.assign(Object.assign(Object.assign({},"left"===n?{right:h}:{left:f}),{top:c,width:`calc(50% - ${c})`,height:`calc(100% - ${c} * 2)`,zIndex:`${i}`,transformOrigin:"left"===n?"right":"left",transform:`translateX(${u}px) translateZ(${l}px) rotateY(${d}deg)`}),v?{transitionDuration:"0s"}:{}),A),children:[(0,a.jsx)("img",{src:e,className:"comic-img",style:{objectPosition:"left"===n?"right":"left",filter:`drop-shadow(${"right"===n?4:-4}px 0px 2px rgba(0, 0, 0, 0.2))`}}),(0,a.jsx)("div",{className:"comic-img-shadow-div",style:Object.assign(Object.assign({boxShadow:`inset ${"left"===n?"-":""}${g}px 0 ${g}px -10px rgba(0,0,0,0.3)`},"left"===n?{right:0}:{left:0}),{maskImage:`url(${e})`,maskPosition:"left"===n?"right":"left"})})]},t)}),(0,a.jsx)("div",{className:"left-overlay",onMouseDown:e=>{0===e.button&&h("left")}}),(0,a.jsx)("div",{className:"right-overlay",onMouseDown:e=>{0===e.button&&h("right")}})]})}return w.styleTagTransform=m(),w.setAttributes=g(),w.insert=u().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=h(),c()(b.A,w),b.A&&b.A.locals&&b.A.locals,o})(),e.exports=n()}}]);