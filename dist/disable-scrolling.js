(()=>{function N(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var b=!1;typeof window!="undefined"&&(h={get passive(){b=!0}},window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h));var h,M=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),s=[],f=!1,m=-1,a=void 0,d=void 0,B=function(e){return s.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},v=function(e){var t=e||window.event;return B(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},k=function(e){if(d===void 0){var t=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;t&&l>0&&(d=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}a===void 0&&(a=document.body.style.overflow,document.body.style.overflow="hidden")},O=function(){d!==void 0&&(document.body.style.paddingRight=d,d=void 0),a!==void 0&&(document.body.style.overflow=a,a=void 0)},C=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},R=function(e,t){var l=e.targetTouches[0].clientY-m;return B(e.target)?!1:t&&t.scrollTop===0&&l>0||C(t)&&l<0?v(e):(e.stopPropagation(),!0)},L=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!s.some(function(n){return n.targetElement===e})){var l={targetElement:e,options:t||{}};s=[].concat(N(s),[l]),M?(e.ontouchstart=function(n){n.targetTouches.length===1&&(m=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&R(n,e)},f||(document.addEventListener("touchmove",v,b?{passive:!1}:void 0),f=!0)):k(t)}},A=function(){M?(s.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),f&&(document.removeEventListener("touchmove",v,b?{passive:!1}:void 0),f=!1),m=-1):O(),s=[]};var g=o=>!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length),y=o=>{let{overflow:e}=getComputedStyle(o);return e==="auto"||e==="scroll"};var p={Main:"fs-disable-scroll",PreserveScrollTarget:"fs-preserve-scroll",ReserveScrollBarGap:"fs-preserve-gap"},I=o=>{if(y(o))return o;let e=o.querySelectorAll("*");for(let t of e)if(t instanceof HTMLElement&&y(t))return t;return o};function V({currentScript:o,globalParams:e}){let t=!1,l=!0;if(o){let r=o.getAttribute(p.ReserveScrollBarGap);r&&(l=r==="true")}else e&&e.reserveScrollBarGap&&(l=e.reserveScrollBarGap);let n=r=>{L(r,{reserveScrollBarGap:l}),t=!0},w=()=>{A(),t=!1};document.querySelectorAll(`[${p.Main}="click"]`).forEach(r=>{let i=r.getAttribute(p.PreserveScrollTarget),c;i?c=document.querySelector(i)||r:c=r,r.addEventListener("click",()=>{t?w():n(c)})});let T=document.querySelectorAll(`[${p.Main}="display"]`),S=new Map,E=new Map;T.forEach(r=>E.set(r,I(r)));let P=r=>{let i=r[0].target,c=g(i),u=S.get(i);if(u===void 0||c===u)return;let G=E.get(i)||i;c&&!u?n(G):!c&&u&&w(),S.set(i,c)},x={attributes:!0,attributeFilter:["style","class"]},D=new MutationObserver(P);T.forEach(r=>{let i=g(r);i&&n(r),S.set(r,i),D.observe(r,x)})}var H=V;var{currentScript:q}=document;document.addEventListener("DOMContentLoaded",()=>H({currentScript:q}));})();
