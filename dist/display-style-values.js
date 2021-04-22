(()=>{var R=["before",":before","::before","after",":after","::after"];var u={Main:"fs-display-style",Group:"fs-display-group",From:"fs-display-from",Pseudo:"fs-display-pseudo",Property:"fs-display-property",Viewport:"fs-display-viewport"},N=e=>{let t=document.querySelectorAll(`[${u.Main}]`);if(!t.length)return;let r={base:[]};return t.forEach(s=>{let o=s.closest(`[${u.Group}="wrapper"]`),l=o?o.querySelector(`[${u.Group}="from"]`):null,d=(o==null?void 0:o.getAttribute(u.From))||s.getAttribute(u.From),a=d?document.querySelector(d):null,n=(o==null?void 0:o.getAttribute(u.Pseudo))||s.getAttribute(u.Pseudo),m=R.find(h=>n===h),i;a?i=a:l?i=l:i=s;let j=(o==null?void 0:o.getAttribute(u.Main))||s.getAttribute(u.Main),p=(o==null?void 0:o.getAttribute(u.Viewport))||s.getAttribute(u.Viewport),c=p==null?void 0:p.match(/\d+/g),x;c&&(x=`${c[0]}px`);let O=(o==null?void 0:o.getAttribute(u.Property))||s.getAttribute(u.Property),b={element:s,fromTarget:i,styleProperty:j,displayPropertyName:O,pseudoTarget:m};x&&e?(r[x]||(r[x]=[])).push(b):x||r.base.push(b)}),r},P=()=>{let e="pseudo-elements-values",t=(()=>{let r=document.querySelector(`#${e}`),s;return r?(r.innerHTML="",s=!0):(r=document.createElement("style"),r.id=e,s=!1),{element:r,rendered:s}})();return r=>{!t||(t.element.innerHTML=t.element.innerHTML+r,t.rendered||(document.head.appendChild(t.element),t.rendered=!0))}};var W=e=>e.cloneNode(!0);var Z=e=>{let t=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/,r=m=>{let i=parseInt(m).toString(16);return i.length===1?"0"+i:i};if(!t.test(e))return e;let o=e.match(t);if(!o)return e;let[l,d,a,n]=o;return"#"+r(d)+r(a)+r(n)},D=(e,t,r)=>{var s;return r&&(e=((s=r==null?void 0:r.contentDocument)==null?void 0:s.body.insertAdjacentElement("beforeend",W(e)))||e),Z(getComputedStyle(e).getPropertyValue(t))},C=e=>{var s;let t=document.createElement("iframe");Object.assign(t.style,{width:e,position:"absolute",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(0px 0px 99.9% 99.9%)",overflow:"hidden",height:"1px",padding:"0",border:"0"}),document.body.appendChild(t);let r=document.head.querySelector('link[rel="stylesheet"][type="text/css"]');return r&&((s=t.contentDocument)==null||s.head.appendChild(W(r))),t};var ee=typeof global=="object"&&global&&global.Object===Object&&global,M=ee;var te=typeof self=="object"&&self&&self.Object===Object&&self,re=M||te||Function("return this")(),v=re;var oe=v.Symbol,g=oe;var q=Object.prototype,se=q.hasOwnProperty,ae=q.toString,I=g?g.toStringTag:void 0;function fe(e){var t=se.call(e,I),r=e[I];try{e[I]=void 0;var s=!0}catch(l){}var o=ae.call(e);return s&&(t?e[I]=r:delete e[I]),o}var z=fe;var le=Object.prototype,ie=le.toString;function de(e){return ie.call(e)}var F=de;var ne="[object Null]",pe="[object Undefined]",V=g?g.toStringTag:void 0;function ue(e){return e==null?e===void 0?pe:ne:V&&V in Object(e)?z(e):F(e)}var $=ue;function me(e){return e!=null&&typeof e=="object"}var _=me;var xe="[object Symbol]";function je(e){return typeof e=="symbol"||_(e)&&$(e)==xe}var H=je;var ce=/\s/;function ye(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t}var U=ye;var he=/^\s+/;function ge(e){return e&&e.slice(0,U(e)+1).replace(he,"")}var G=ge;function be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var T=be;var K=0/0,Se=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,Te=/^0o[0-7]+$/i,ve=parseInt;function we(e){if(typeof e=="number")return e;if(H(e))return K;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=G(e);var r=Ie.test(e);return r||Te.test(e)?ve(e.slice(2),r?2:8):Se.test(e)?K:+e}var E=we;var Oe=function(){return v.Date.now()},w=Oe;var Be="Expected a function",We=Math.max,Ee=Math.min;function Ae(e,t,r){var s,o,l,d,a,n,m=0,i=!1,j=!1,p=!0;if(typeof e!="function")throw new TypeError(Be);t=E(t)||0,T(r)&&(i=!!r.leading,j="maxWait"in r,l=j?We(E(r.maxWait)||0,t):l,p="trailing"in r?!!r.trailing:p);function c(f){var y=s,S=o;return s=o=void 0,m=f,d=e.apply(S,y),d}function x(f){return m=f,a=setTimeout(h,t),i?c(f):d}function O(f){var y=f-n,S=f-m,L=t-y;return j?Ee(L,l-S):L}function b(f){var y=f-n,S=f-m;return n===void 0||y>=t||y<0||j&&S>=l}function h(){var f=w();if(b(f))return k(f);a=setTimeout(h,O(f))}function k(f){return a=void 0,p&&s?c(f):(s=o=void 0,d)}function Q(){a!==void 0&&clearTimeout(a),m=0,s=n=o=a=void 0}function Y(){return a===void 0?d:k(w())}function B(){var f=w(),y=b(f);if(s=arguments,o=this,n=f,y){if(a===void 0)return x(n);if(j)return clearTimeout(a),a=setTimeout(h,t),c(n)}return a===void 0&&(a=setTimeout(h,t)),d}return B.cancel=Q,B.flush=Y,B}var A=Ae;var J=(e=!0)=>{let t=N(e),r=P();for(let o in t){let l;o!=="base"&&(l=C(o));for(let[d,{element:a,fromTarget:n,styleProperty:m,displayPropertyName:i,pseudoTarget:j}]of t[o].entries()){let p=D(n,m,l);if(!!p){if(i){let c=i==="css",x=i==="css-block";p=`${x?"{ ":""}${m}: ${p}${c||x?";":""}${x?" }":""}`}j?(a.id=a.id||`pseudo-${d}`,r(`#${a.id}::${j.replace(/:/g,"")}{content: '${p}';}`)):a.textContent=p}}setTimeout(()=>l==null?void 0:l.remove(),100)}let s=A(()=>J(!1),500);window.addEventListener("resize",s)},X=J;document.addEventListener("DOMContentLoaded",()=>X());})();
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
