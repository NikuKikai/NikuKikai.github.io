import{a as $,b as _,g as tt}from"./chunk-Bd_xbXcB.js";var D={exports:{}},P;function et(){return P||(P=1,function(T,rt){(function(R,Q){T.exports=Q()})(self,()=>(()=>{var R={523:(n,t,e)=>{e.d(t,{A:()=>x});var a=e(601),A=e.n(a),s=e(314),r=e.n(s),i=e(417),o=e.n(i),p=new URL(e(451),e.b),u=new URL(e(327),e.b),f=r()(A()),c=o()(p),h=o()(u);f.push([n.id,`.container {
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
    cursor: url(${c}), pointer;
}

.right-overlay {
    z-index: 9999;
    position: absolute;
    right: 0;
    width: 33%;
    top: 0;
    height: 100%;
    cursor: url(${h}), pointer;
}`,""]);const x=f},314:n=>{n.exports=function(t){var e=[];return e.toString=function(){return this.map(function(a){var A="",s=a[5]!==void 0;return a[4]&&(A+="@supports (".concat(a[4],") {")),a[2]&&(A+="@media ".concat(a[2]," {")),s&&(A+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),A+=t(a),s&&(A+="}"),a[2]&&(A+="}"),a[4]&&(A+="}"),A}).join("")},e.i=function(a,A,s,r,i){typeof a=="string"&&(a=[[null,a,void 0]]);var o={};if(s)for(var p=0;p<this.length;p++){var u=this[p][0];u!=null&&(o[u]=!0)}for(var f=0;f<a.length;f++){var c=[].concat(a[f]);s&&o[c[0]]||(i!==void 0&&(c[5]===void 0||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),A&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=A),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(t,e){return e||(e={}),t&&(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},601:n=>{n.exports=function(t){return t[1]}},72:n=>{var t=[];function e(s){for(var r=-1,i=0;i<t.length;i++)if(t[i].identifier===s){r=i;break}return r}function a(s,r){for(var i={},o=[],p=0;p<s.length;p++){var u=s[p],f=r.base?u[0]+r.base:u[0],c=i[f]||0,h="".concat(f," ").concat(c);i[f]=c+1;var x=e(h),U={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(x!==-1)t[x].references++,t[x].updater(U);else{var F=A(U,r);r.byIndex=p,t.splice(p,0,{identifier:h,updater:F,references:1})}o.push(h)}return o}function A(s,r){var i=r.domAPI(r);return i.update(s),function(o){if(o){if(o.css===s.css&&o.media===s.media&&o.sourceMap===s.sourceMap&&o.supports===s.supports&&o.layer===s.layer)return;i.update(s=o)}else i.remove()}}n.exports=function(s,r){var i=a(s=s||[],r=r||{});return function(o){o=o||[];for(var p=0;p<i.length;p++){var u=e(i[p]);t[u].references--}for(var f=a(o,r),c=0;c<i.length;c++){var h=e(i[c]);t[h].references===0&&(t[h].updater(),t.splice(h,1))}i=f}}},659:n=>{var t={};n.exports=function(e,a){var A=function(s){if(t[s]===void 0){var r=document.querySelector(s);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch{r=null}t[s]=r}return t[s]}(e);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(a)}},540:n=>{n.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(n,t,e)=>{n.exports=function(a){var A=e.nc;A&&a.setAttribute("nonce",A)}},825:n=>{n.exports=function(t){if(typeof document>"u")return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(a){(function(A,s,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var o=r.layer!==void 0;o&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,o&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var p=r.sourceMap;p&&typeof btoa<"u"&&(i+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),s.styleTagTransform(i,A,s.options)})(e,t,a)},remove:function(){(function(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)})(e)}}}},113:n=>{n.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},451:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFGElEQVR4nN2ba6hVVRSFv+Hj+iwjCwuLECkoMCuxpBIEQUgzozIpC0spSULESElCEKm0ByISiUmKhZglGL6Koigk0QRLgoIkJCwqsqKHdtPb6EcK13Xnzrsf53Hv/LnG2GvN+Z199tnrcWSbrhKS7gVmApcD64E1tr8t1WdXACBpOvBahnzM9oDCfTc7AElLgMVnsdl2j0L9NzMASU8BizppX2l7Xu4xmhWApOXAgkBaD+wA3kgF28o9TjMCkPQCMD+QFtteesrTA2hrL3YLAJJWAnMDaZHtZxJvmvy5tn/PNV4zAZD0IjAnkBbYfi7xTgU2t2/r0neApNXA7ECab3tF4p0EbE+NXRaApLXArECaa3tV4p0CbA28F9n+IffYjQYgaR3wQCDNsf1S4r0TeDPwbrJ9T6HxGwlA0qvAfYH0sO2XE+80YFPg3Wb7tsI5NAqApI1A9KnNtL0u8Wa9CpcqHhoEQNLrwN2BNMP2hsQ7g/9eftIoXTw0AICkLcAdgTTd9sbEOwtYG3i3255cST71BCBpKzAlkKbZ3px4ZwOrA29lxUMdAUjaBtwaSHfZ3pJ4HwVWBd5Ki4c6AZC0E7glkG63/VbinQesCLyVFw91ACDpHWBCIE22vT3xPg48G3h32I7unvL51RKApPeA8YE00fauxPsE8HTgrVnxUEMAkj4AxgXSBNvvJt7FwJLAW9PioUYAJH0EjA2k8bbfT7xLgScD707bkypPLonKAUjaDdwUSONsf5h4lwELA29dioeKAUjaA4wJpLG2dyfe54HHAm/diocKAUjaB4wOpBtt70m8Was+dS0eKgIgaT8wKpBusL0v8Wat+uyyPbF0MjmjNABJB4BrAmm07f2Jdw3wUOBtSPFQEoCkz4CrA+k62wcS7yvAg4G3YcVDCQCSFgDLA2mk7YOJdwNwf+BtaPFQDkB04Qjbnye+rIWPt21H84O6RiEAkhYCy5Lmq2x/kfg2A1ODLpqieCgO4BAwvF3TI7ZXJ54BwB/B5U1TPBQH0Aq0tGu60vaXiWcEcMaz4FRcYfur3IPWKIoC6PBEjzYlJLUB0bb1MNuHcw9cgygKYBSwP2kO9+j/B8IlZU93VBFlfgWOAEOT5rwQhtj+sVACFUXZF6Hw4pxfh8G2fy6cRMkoC0DAP5GWE8Ig278VTqREVDEXqArCQNt/lkqmQFQ1G+xwWuN05ITQz/ZfpRPKEVWuB/QETkZaTgh9bP9dSVKdiKpXhKqC0Nt22E/VUYs1wV7AiUjLCaGn7fDZUmXUalW4NxDexjkh9HCNd25quS/QArRGWh4IRc795Ila7wz1AcKnerNAqMfeYF/geIbc4RavN4R67Q73A45lyA2FUM/zAf2BrDe9Dk/8ekGo9wmRgUDWUdbOQghnnIVzasAZoXOArIlPL9ttiT+C0Ga7VyX5NOiU2CDg1wy5w1tgBoQTtlsoGY08J3ge8EuG3GL7ROKPILTa7lsqj0YBAJB0PnA0Q+4wKcqA0LX/MyRpMPBThtzXdmviPwn0THwHbY8sNH6jAQBIuhDIWhvssEaQAeFa25/mHrsZAABIGgJ8nyH3t3088acQTtrunXvcZgEAIOli4LsMeYDtY+283fY/Q0OBIxnyGeuG6ap0twAAIOlS4JsM+WbgY2AvyZGcbgMAQNJlwOEcl3xi+/rc4zQrAABJw4CvO+MtOklqagAAkoYDh85iG2N7b6H+mx3A6cg4gHnU9gVl+v0XRSX6nxGJj9MAAAAASUVORK5CYII="},327:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFPUlEQVR4nM2bfcieUxzHP2fPXhhbmJAtSVOUxmqIRETeJmrMWmjTrEnS8k5SS4RoLU3IW8yaIbMXpdTKS2MNoyhaEgt5ydu8zLaPPxY9znPOs+e6rnNd9/P985zvOb/f79N13/c55zp3UGmiEML3wISo+S31lEYTd6RQF0AI4URgwx5sk9UttQJ0pCYAhjrwCPXzWkE6UC0AIYR3geMrDDlc/aJyoA5UF0A8aCNwInAy8GZm2GHql5WDtawiANTQr28f4LfM0Enq1soBW1SpJ6BP3dWvfyywLTP8UPXrykFbUl0AfwMj+zXtVEdGnr2B3zNTHKJ+WzlwC6oL4Djg/ag5BWEv4I/MNAep31UOXlhNfgY3A1Oi5hSEMcCfmWkOVH+olUAh1QYAEELYBoyNmnepfZFvNPBXZpoJ6o+1k2ioRgAAQgh/AmOi5hSEUcD2zDT7qz81SqSmGgMACCFsB0ZFzSkII4G/M9Psp/7cOJmKKgIAIISwA+iLmlMQ+oAdmWnGq78WSWiIKgYAIISwCwhRcwrCCGBnZppxam4hVVxFAUB2k1QVwj5qbg1RVMUBQCUIAdiV8AKMVXNriGJqBQAUg7C3mltDFFFrAGDoEAbxAuyl5tYQjdUqACgGYYyaW0M0UhcAco94VQij1dwaorZaBwCDfuNXhTBKza0h6uXWBQAYdBVYFcJINffzWT2vrgDAoJuinkHoFAAMekZQFcL/TqFq59M1ABj03LAqhBE2LKAnAABCCOOB1O6vUwg9AwAQQjgASJ0IVYLQ/1S6cg69BAAQQjgISB2Q5iCkdpxb1Um14vcaAEAIYSLwVaKrCoRp6qbKsYcDAIAQwuFA6h3iUD8OT6pXVo47XAAAhBCOBD5NdE1RP4q8RwGf9GvarsZnk3uOOcwAvAqck+jaV90WeRcAD/dr2qJOrhxzuAAYpPiV6szIezTwceS7Rb23ctzhAGCQ4persyPvMcBHsbHuT2HPAYQQ1gHnJrqeUa+IvFOAzQnvzep9teL3eCGUK37AN3oIYSrwXsL7oXps7Rx6uBTOFf+YOj/yTmP3JYxYH6hTG+XRo81Qrvil6jWR9wTgnYR3kzqtcS492A6vBc5LdC1Rr4u8JwFvJ7wb1ROK5NPxgUiu+AfUGyLvKcAbCe8G9aRiOXV4JJYr/l71lsh7GrA+4S1+AbOrQ9Fc8Xepd0TeM4DXE9431FOL59bBsfga4PxE153qosh7FvBawrtePb2V/Fp+M5Qr/jb1nsh7LrAu4X1dPbON/KDdd4O54m9S74+804HVCe9r6tlt5Pdf7JbeDq8Gpie6FqqLI++FwMsJ76tq6nujqNq4H5Ar/lr1ocg7A3gh4V2jXlA0sYxK3xDJFb9AfSTyzgRWJLyr1IuKJbUHlbwjlCt+nvp45J0NLEt4X1JnFEloiCp1S+wVIPXIzlGfjrxXAE8nvM+rlzZOpqJK3BPMFX+ZuizyzgWeSHgHHHx0paY3RXPFz1JXRN6rgEcT3mfVy2sn0VBN7govB2Ylui5WX4y8VwNLE96n1Lm1EiikurfFDwa+SXRdpK6KvNcCSxLex9V5lYMXVqk/TABMV9dGvoXAgwnvI+qCyoFbUCkAM9WVkedGIHVQOeDUp5eqDCCEMA74pX9bfCQdQrgVuDsxfMCpT69V/D9DIYQ7gEUDR/Ggen31FNtVye+AS9i9+5uT6LtPvblyoA5UF8BiYKiP8t3q7ZWDdKQm64DUO/pYi9Q7awXoSG38Z+hfDVgKD0eV2AtMBOaz+7P/GfCE+lzz1LrRP451Da7wwXVXAAAAAElFTkSuQmCC"}},Q={};function l(n){var t=Q[n];if(t!==void 0)return t.exports;var e=Q[n]={id:n,exports:{}};return R[n](e,e.exports,l),e.exports}l.m=R,l.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return l.d(t,{a:t}),t},l.d=(n,t)=>{for(var e in t)l.o(t,e)&&!l.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},l.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),l.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.b=document.baseURI||self.location.href,l.nc=void 0;var X={};l.r(X),l.d(X,{default:()=>Z});const y=$(),b=_();var N=l(72),V=l.n(N),j=l(825),Y=l.n(j),z=l(659),G=l.n(z),k=l(56),q=l.n(k),H=l(540),J=l.n(H),W=l(113),K=l.n(W),O=l(523),C={};function Z(n){const{width:t,height:e,urls:a,direction:A="rtl",start_1side:s=!1,divideAspect:r=1.41,margin:i="10%"}=n,[o,p]=(0,b.useState)(0),u=a.length,f=(0,b.useRef)(n),c=(0,b.useRef)(),h=(0,b.useRef)([]),x=(0,b.useRef)(new Map);f.current=n;const U=w=>{w==="right"==(A==="rtl")?o>0&&p(o-2):o<u-2+(s?1:0)&&p(o+2)};(0,b.useEffect)(()=>{const w=()=>{x.current.forEach((g,m)=>{if(!g)return;const v=h.current;if(m>=v.length)return;const E=v[m],L=g.parentElement.parentElement.clientWidth/E.width,d=g.parentElement.parentElement.clientHeight/E.height,B=Math.min(L,d),I=E.width*B,M=E.height*B;g.width=I,g.height=M,g.style.width=`${I}px`,g.style.height=`${M}px`,g.parentElement.style.width=`${I}px`,g.parentElement.style.height=`${M}px`;const S=g.getContext("2d");S.save(),S.scale(B,B),S.drawImage(E,0,0),S.restore()})};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[]),(0,b.useEffect)(()=>{h.current=[]},[a,r]);let F=!c.current||c.current.direction!==n.direction||c.current.start_1side!==n.start_1side;return(0,b.useEffect)(()=>{c.current=n},[n]),(0,y.jsxs)("div",{className:"container",style:{width:`${t}px`,height:`${e}px`},children:[a.map((w,g)=>{const m=s?g+1:g,v=A==="rtl"==(m%2==0)?"right":"left",E=9999-200*Math.abs(2*m-2*o-0);let L=-2*Math.abs((m<=o?0:2)+o-2*Math.ceil(m/2)),d=(m<=o?0:2)+o-2*Math.ceil(m/2);d/=2,d>=1&&(d-=1),d<=-1&&(d+=1),Math.abs(d)<2.5?d=2*d*d*Math.sign(d):d*=5,A==="ltr"&&(d=-d);const B=v===(m<=o==(A==="rtl")?"right":"left")?0:v==="right"?-180:180,I=o===m-1||o===m?10:200,M="round(nearest, calc(50%), 1px)",S=`calc(${M} - 1px)`;return(0,y.jsxs)("div",{className:"comic-page",style:Object.assign(Object.assign(Object.assign({},v==="left"?{right:S}:{left:M}),{top:i,width:`calc(50% - ${i})`,height:`calc(100% - ${i} * 2)`,zIndex:`${E}`,transformOrigin:v==="left"?"right":"left",transform:`translateX(${d}px) translateZ(${L}px) rotateY(${B}deg)`}),F?{transitionDuration:"0s"}:{}),children:[(0,y.jsx)("img",{src:w,className:"comic-img",style:{objectPosition:v==="left"?"right":"left",filter:`drop-shadow(${v==="right"?4:-4}px 0px 2px rgba(0, 0, 0, 0.2))`}}),(0,y.jsx)("div",{className:"comic-img-shadow-div",style:Object.assign(Object.assign({boxShadow:`inset ${v==="left"?"-":""}${I}px 0 ${I}px -10px rgba(0,0,0,0.3)`},v==="left"?{right:0}:{left:0}),{maskImage:`url(${w})`,maskPosition:v==="left"?"right":"left"})})]},g)}),(0,y.jsx)("div",{className:"left-overlay",onMouseDown:w=>{w.button===0&&U("left")}}),(0,y.jsx)("div",{className:"right-overlay",onMouseDown:w=>{w.button===0&&U("right")}})]})}return C.styleTagTransform=K(),C.setAttributes=q(),C.insert=G().bind(null,"head"),C.domAPI=Y(),C.insertStyleElement=J(),V()(O.A,C),O.A&&O.A.locals&&O.A.locals,X})())}(D)),D.exports}var nt=et();const ot=tt(nt);export{ot as M};
