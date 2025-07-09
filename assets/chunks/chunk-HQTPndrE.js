import{b as $,c as _,g as tt}from"./chunk-CbnBOpE4.js";var P={exports:{}},D;function et(){return D||(D=1,function(T,rt){(function(R,Q){T.exports=Q()})(self,()=>(()=>{var R={523:(n,t,e)=>{e.d(t,{A:()=>x});var s=e(601),l=e.n(s),o=e(314),i=e.n(o),a=e(417),r=e.n(a),p=new URL(e(451),e.b),d=new URL(e(327),e.b),v=i()(l()),c=r()(p),w=r()(d);v.push([n.id,`.container {
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
    cursor: url(${w}), pointer;
}`,""]);const x=v},314:n=>{n.exports=function(t){var e=[];return e.toString=function(){return this.map(function(s){var l="",o=s[5]!==void 0;return s[4]&&(l+="@supports (".concat(s[4],") {")),s[2]&&(l+="@media ".concat(s[2]," {")),o&&(l+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),l+=t(s),o&&(l+="}"),s[2]&&(l+="}"),s[4]&&(l+="}"),l}).join("")},e.i=function(s,l,o,i,a){typeof s=="string"&&(s=[[null,s,void 0]]);var r={};if(o)for(var p=0;p<this.length;p++){var d=this[p][0];d!=null&&(r[d]=!0)}for(var v=0;v<s.length;v++){var c=[].concat(s[v]);o&&r[c[0]]||(a!==void 0&&(c[5]===void 0||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),l&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=l),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},417:n=>{n.exports=function(t,e){return e||(e={}),t&&(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},601:n=>{n.exports=function(t){return t[1]}},72:n=>{var t=[];function e(o){for(var i=-1,a=0;a<t.length;a++)if(t[a].identifier===o){i=a;break}return i}function s(o,i){for(var a={},r=[],p=0;p<o.length;p++){var d=o[p],v=i.base?d[0]+i.base:d[0],c=a[v]||0,w="".concat(v," ").concat(c);a[v]=c+1;var x=e(w),U={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(x!==-1)t[x].references++,t[x].updater(U);else{var F=l(U,i);i.byIndex=p,t.splice(p,0,{identifier:w,updater:F,references:1})}r.push(w)}return r}function l(o,i){var a=i.domAPI(i);return a.update(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap&&r.supports===o.supports&&r.layer===o.layer)return;a.update(o=r)}else a.remove()}}n.exports=function(o,i){var a=s(o=o||[],i=i||{});return function(r){r=r||[];for(var p=0;p<a.length;p++){var d=e(a[p]);t[d].references--}for(var v=s(r,i),c=0;c<a.length;c++){var w=e(a[c]);t[w].references===0&&(t[w].updater(),t.splice(w,1))}a=v}}},659:n=>{var t={};n.exports=function(e,s){var l=function(o){if(t[o]===void 0){var i=document.querySelector(o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}t[o]=i}return t[o]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(s)}},540:n=>{n.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(n,t,e)=>{n.exports=function(s){var l=e.nc;l&&s.setAttribute("nonce",l)}},825:n=>{n.exports=function(t){if(typeof document>"u")return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(s){(function(l,o,i){var a="";i.supports&&(a+="@supports (".concat(i.supports,") {")),i.media&&(a+="@media ".concat(i.media," {"));var r=i.layer!==void 0;r&&(a+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),a+=i.css,r&&(a+="}"),i.media&&(a+="}"),i.supports&&(a+="}");var p=i.sourceMap;p&&typeof btoa<"u"&&(a+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),o.styleTagTransform(a,l,o.options)})(e,t,s)},remove:function(){(function(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s)})(e)}}}},113:n=>{n.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},451:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFGElEQVR4nN2ba6hVVRSFv+Hj+iwjCwuLECkoMCuxpBIEQUgzozIpC0spSULESElCEKm0ByISiUmKhZglGL6Koigk0QRLgoIkJCwqsqKHdtPb6EcK13Xnzrsf53Hv/LnG2GvN+Z199tnrcWSbrhKS7gVmApcD64E1tr8t1WdXACBpOvBahnzM9oDCfTc7AElLgMVnsdl2j0L9NzMASU8BizppX2l7Xu4xmhWApOXAgkBaD+wA3kgF28o9TjMCkPQCMD+QFtteesrTA2hrL3YLAJJWAnMDaZHtZxJvmvy5tn/PNV4zAZD0IjAnkBbYfi7xTgU2t2/r0neApNXA7ECab3tF4p0EbE+NXRaApLXArECaa3tV4p0CbA28F9n+IffYjQYgaR3wQCDNsf1S4r0TeDPwbrJ9T6HxGwlA0qvAfYH0sO2XE+80YFPg3Wb7tsI5NAqApI1A9KnNtL0u8Wa9CpcqHhoEQNLrwN2BNMP2hsQ7g/9eftIoXTw0AICkLcAdgTTd9sbEOwtYG3i3255cST71BCBpKzAlkKbZ3px4ZwOrA29lxUMdAUjaBtwaSHfZ3pJ4HwVWBd5Ki4c6AZC0E7glkG63/VbinQesCLyVFw91ACDpHWBCIE22vT3xPg48G3h32I7unvL51RKApPeA8YE00fauxPsE8HTgrVnxUEMAkj4AxgXSBNvvJt7FwJLAW9PioUYAJH0EjA2k8bbfT7xLgScD707bkypPLonKAUjaDdwUSONsf5h4lwELA29dioeKAUjaA4wJpLG2dyfe54HHAm/diocKAUjaB4wOpBtt70m8Was+dS0eKgIgaT8wKpBusL0v8Wat+uyyPbF0MjmjNABJB4BrAmm07f2Jdw3wUOBtSPFQEoCkz4CrA+k62wcS7yvAg4G3YcVDCQCSFgDLA2mk7YOJdwNwf+BtaPFQDkB04Qjbnye+rIWPt21H84O6RiEAkhYCy5Lmq2x/kfg2A1ODLpqieCgO4BAwvF3TI7ZXJ54BwB/B5U1TPBQH0Aq0tGu60vaXiWcEcMaz4FRcYfur3IPWKIoC6PBEjzYlJLUB0bb1MNuHcw9cgygKYBSwP2kO9+j/B8IlZU93VBFlfgWOAEOT5rwQhtj+sVACFUXZF6Hw4pxfh8G2fy6cRMkoC0DAP5GWE8Ig278VTqREVDEXqArCQNt/lkqmQFQ1G+xwWuN05ITQz/ZfpRPKEVWuB/QETkZaTgh9bP9dSVKdiKpXhKqC0Nt22E/VUYs1wV7AiUjLCaGn7fDZUmXUalW4NxDexjkh9HCNd25quS/QArRGWh4IRc795Ila7wz1AcKnerNAqMfeYF/geIbc4RavN4R67Q73A45lyA2FUM/zAf2BrDe9Dk/8ekGo9wmRgUDWUdbOQghnnIVzasAZoXOArIlPL9ttiT+C0Ga7VyX5NOiU2CDg1wy5w1tgBoQTtlsoGY08J3ge8EuG3GL7ROKPILTa7lsqj0YBAJB0PnA0Q+4wKcqA0LX/MyRpMPBThtzXdmviPwn0THwHbY8sNH6jAQBIuhDIWhvssEaQAeFa25/mHrsZAABIGgJ8nyH3t3088acQTtrunXvcZgEAIOli4LsMeYDtY+283fY/Q0OBIxnyGeuG6ap0twAAIOlS4JsM+WbgY2AvyZGcbgMAQNJlwOEcl3xi+/rc4zQrAABJw4CvO+MtOklqagAAkoYDh85iG2N7b6H+mx3A6cg4gHnU9gVl+v0XRSX6nxGJj9MAAAAASUVORK5CYII="},327:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAFPUlEQVR4nM2bfcieUxzHP2fPXhhbmJAtSVOUxmqIRETeJmrMWmjTrEnS8k5SS4RoLU3IW8yaIbMXpdTKS2MNoyhaEgt5ydu8zLaPPxY9znPOs+e6rnNd9/P985zvOb/f79N13/c55zp3UGmiEML3wISo+S31lEYTd6RQF0AI4URgwx5sk9UttQJ0pCYAhjrwCPXzWkE6UC0AIYR3geMrDDlc/aJyoA5UF0A8aCNwInAy8GZm2GHql5WDtawiANTQr28f4LfM0Enq1soBW1SpJ6BP3dWvfyywLTP8UPXrykFbUl0AfwMj+zXtVEdGnr2B3zNTHKJ+WzlwC6oL4Djg/ag5BWEv4I/MNAep31UOXlhNfgY3A1Oi5hSEMcCfmWkOVH+olUAh1QYAEELYBoyNmnepfZFvNPBXZpoJ6o+1k2ioRgAAQgh/AmOi5hSEUcD2zDT7qz81SqSmGgMACCFsB0ZFzSkII4G/M9Psp/7cOJmKKgIAIISwA+iLmlMQ+oAdmWnGq78WSWiIKgYAIISwCwhRcwrCCGBnZppxam4hVVxFAUB2k1QVwj5qbg1RVMUBQCUIAdiV8AKMVXNriGJqBQAUg7C3mltDFFFrAGDoEAbxAuyl5tYQjdUqACgGYYyaW0M0UhcAco94VQij1dwaorZaBwCDfuNXhTBKza0h6uXWBQAYdBVYFcJINffzWT2vrgDAoJuinkHoFAAMekZQFcL/TqFq59M1ABj03LAqhBE2LKAnAABCCOOB1O6vUwg9AwAQQjgASJ0IVYLQ/1S6cg69BAAQQjgISB2Q5iCkdpxb1Um14vcaAEAIYSLwVaKrCoRp6qbKsYcDAIAQwuFA6h3iUD8OT6pXVo47XAAAhBCOBD5NdE1RP4q8RwGf9GvarsZnk3uOOcwAvAqck+jaV90WeRcAD/dr2qJOrhxzuAAYpPiV6szIezTwceS7Rb23ctzhAGCQ4persyPvMcBHsbHuT2HPAYQQ1gHnJrqeUa+IvFOAzQnvzep9teL3eCGUK37AN3oIYSrwXsL7oXps7Rx6uBTOFf+YOj/yTmP3JYxYH6hTG+XRo81Qrvil6jWR9wTgnYR3kzqtcS492A6vBc5LdC1Rr4u8JwFvJ7wb1ROK5NPxgUiu+AfUGyLvKcAbCe8G9aRiOXV4JJYr/l71lsh7GrA+4S1+AbOrQ9Fc8Xepd0TeM4DXE9431FOL59bBsfga4PxE153qosh7FvBawrtePb2V/Fp+M5Qr/jb1nsh7LrAu4X1dPbON/KDdd4O54m9S74+804HVCe9r6tlt5Pdf7JbeDq8Gpie6FqqLI++FwMsJ76tq6nujqNq4H5Ar/lr1ocg7A3gh4V2jXlA0sYxK3xDJFb9AfSTyzgRWJLyr1IuKJbUHlbwjlCt+nvp45J0NLEt4X1JnFEloiCp1S+wVIPXIzlGfjrxXAE8nvM+rlzZOpqJK3BPMFX+ZuizyzgWeSHgHHHx0paY3RXPFz1JXRN6rgEcT3mfVy2sn0VBN7govB2Ylui5WX4y8VwNLE96n1Lm1EiikurfFDwa+SXRdpK6KvNcCSxLex9V5lYMXVqk/TABMV9dGvoXAgwnvI+qCyoFbUCkAM9WVkedGIHVQOeDUp5eqDCCEMA74pX9bfCQdQrgVuDsxfMCpT69V/D9DIYQ7gEUDR/Ggen31FNtVye+AS9i9+5uT6LtPvblyoA5UF8BiYKiP8t3q7ZWDdKQm64DUO/pYi9Q7awXoSG38Z+hfDVgKD0eV2AtMBOaz+7P/GfCE+lzz1LrRP451Da7wwXVXAAAAAElFTkSuQmCC"}},Q={};function A(n){var t=Q[n];if(t!==void 0)return t.exports;var e=Q[n]={id:n,exports:{}};return R[n](e,e.exports,A),e.exports}A.m=R,A.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return A.d(t,{a:t}),t},A.d=(n,t)=>{for(var e in t)A.o(t,e)&&!A.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},A.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),A.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},A.b=document.baseURI||self.location.href,A.nc=void 0;var X={};A.r(X),A.d(X,{default:()=>Z});const y=$(),b=_();var N=A(72),V=A.n(N),j=A(825),Y=A.n(j),z=A(659),G=A.n(z),k=A(56),q=A.n(k),H=A(540),J=A.n(H),W=A(113),K=A.n(W),O=A(523),C={};function Z(n){const{width:t,height:e,urls:s,direction:l="rtl",start_1side:o=!1,divideAspect:i=1.41,margin:a="10%"}=n,[r,p]=(0,b.useState)(0),d=s.length,v=(0,b.useRef)(n),c=(0,b.useRef)(),w=(0,b.useRef)([]),x=(0,b.useRef)(new Map);v.current=n,(0,b.useEffect)(()=>{var g,u;const h=o?r:r+1,m=o?r-1:r;l==="rtl"?(g=n.onPageChange)===null||g===void 0||g.call(n,h,m):(u=n.onPageChange)===null||u===void 0||u.call(n,m,h)},[r,o,l]);const U=g=>{g==="right"==(l==="rtl")?r>0&&p(r-2):r<d-2+(o?1:0)&&p(r+2)};(0,b.useEffect)(()=>{const g=()=>{x.current.forEach((u,h)=>{if(!u)return;const m=w.current;if(h>=m.length)return;const E=m[h],L=u.parentElement.parentElement.clientWidth/E.width,f=u.parentElement.parentElement.clientHeight/E.height,B=Math.min(L,f),I=E.width*B,M=E.height*B;u.width=I,u.height=M,u.style.width=`${I}px`,u.style.height=`${M}px`,u.parentElement.style.width=`${I}px`,u.parentElement.style.height=`${M}px`;const S=u.getContext("2d");S.save(),S.scale(B,B),S.drawImage(E,0,0),S.restore()})};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),(0,b.useEffect)(()=>{w.current=[]},[s,i]);let F=!c.current||c.current.direction!==n.direction||c.current.start_1side!==n.start_1side;return(0,b.useEffect)(()=>{c.current=n},[n]),(0,y.jsxs)("div",{className:"container",style:{width:`${t}px`,height:`${e}px`},children:[s.map((g,u)=>{const h=o?u+1:u,m=l==="rtl"==(h%2==0)?"right":"left",E=9999-200*Math.abs(2*h-2*r-0);let L=-2*Math.abs((h<=r?0:2)+r-2*Math.ceil(h/2)),f=(h<=r?0:2)+r-2*Math.ceil(h/2);f/=2,f>=1&&(f-=1),f<=-1&&(f+=1),Math.abs(f)<2.5?f=2*f*f*Math.sign(f):f*=5,l==="ltr"&&(f=-f);const B=m===(h<=r==(l==="rtl")?"right":"left")?0:m==="right"?-180:180,I=r===h-1||r===h?10:200,M="round(nearest, calc(50%), 1px)",S=`calc(${M} - 1px)`;return(0,y.jsxs)("div",{className:"comic-page",style:Object.assign(Object.assign(Object.assign({},m==="left"?{right:S}:{left:M}),{top:a,width:`calc(50% - ${a})`,height:`calc(100% - ${a} * 2)`,zIndex:`${E}`,transformOrigin:m==="left"?"right":"left",transform:`translateX(${f}px) translateZ(${L}px) rotateY(${B}deg)`}),F?{transitionDuration:"0s"}:{}),children:[(0,y.jsx)("img",{src:g,className:"comic-img",style:{objectPosition:m==="left"?"right":"left",filter:`drop-shadow(${m==="right"?4:-4}px 0px 2px rgba(0, 0, 0, 0.2))`}}),(0,y.jsx)("div",{className:"comic-img-shadow-div",style:Object.assign(Object.assign({boxShadow:`inset ${m==="left"?"-":""}${I}px 0 ${I}px -10px rgba(0,0,0,0.3)`},m==="left"?{right:0}:{left:0}),{maskImage:`url(${g})`,maskPosition:m==="left"?"right":"left"})})]},u)}),(0,y.jsx)("div",{className:"left-overlay",onMouseDown:g=>{g.button===0&&U("left")}}),(0,y.jsx)("div",{className:"right-overlay",onMouseDown:g=>{g.button===0&&U("right")}})]})}return C.styleTagTransform=K(),C.setAttributes=q(),C.insert=G().bind(null,"head"),C.domAPI=Y(),C.insertStyleElement=J(),V()(O.A,C),O.A&&O.A.locals&&O.A.locals,X})())}(P)),P.exports}var nt=et();const ot=tt(nt);export{ot as M};
