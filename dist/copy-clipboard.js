(()=>{var W=Object.create,C=Object.defineProperty,B=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertyDescriptor;var Z=d=>C(d,"__esModule",{value:!0});var $=(d,f)=>()=>(f||(f={exports:{}},d(f.exports,f)),f.exports);var tt=(d,f,p)=>{if(f&&typeof f=="object"||typeof f=="function")for(let o of K(f))!G.call(d,o)&&o!=="default"&&C(d,o,{get:()=>f[o],enumerable:!(p=Q(f,o))||p.enumerable});return d},et=d=>tt(Z(C(d!=null?W(B(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var F=$((S,O)=>{(function(f,p){typeof S=="object"&&typeof O=="object"?O.exports=p():typeof define=="function"&&define.amd?define([],p):typeof S=="object"?S.ClipboardJS=p():f.ClipboardJS=p()})(S,function(){return function(){var d={134:function(o,c,t){"use strict";t.d(c,{default:function(){return X}});var s=t(279),u=t.n(s),r=t(370),g=t.n(r),v=t(817),E=t.n(v);function h(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?h=function(e){return typeof e}:h=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(i)}function m(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function y(i,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function T(i,n,e){return n&&y(i.prototype,n),e&&y(i,e),i}var H=function(){function i(n){m(this,i),this.resolveOptions(n),this.initSelection()}return T(i,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(a,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,a=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(a),this.selectedText=E()(a),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=E()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(a){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&h(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),i}(),P=H;function k(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(i)}function j(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function L(i,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function D(i,n,e){return n&&L(i.prototype,n),e&&L(i,e),i}function I(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&w(i,n)}function w(i,n){return w=Object.setPrototypeOf||function(a,l){return a.__proto__=l,a},w(i,n)}function V(i){var n=U();return function(){var a=_(i),l;if(n){var b=_(this).constructor;l=Reflect.construct(a,arguments,b)}else l=a.apply(this,arguments);return J(this,l)}}function J(i,n){return n&&(k(n)==="object"||typeof n=="function")?n:z(i)}function z(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function U(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(i){return!1}}function _(i){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(i)}function A(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var Y=function(i){I(e,i);var n=V(e);function e(a,l){var b;return j(this,e),b=n.call(this),b.resolveOptions(l),b.listenClick(a),b}return D(e,[{key:"resolveOptions",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=k(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(l){var b=this;this.listener=g()(l,"click",function(x){return b.onClick(x)})}},{key:"onClick",value:function(l){var b=l.delegateTarget||l.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new P({action:this.action(b),target:this.target(b),text:this.text(b),container:this.container,trigger:b,emitter:this})}},{key:"defaultAction",value:function(l){return A("action",l)}},{key:"defaultTarget",value:function(l){var b=A("target",l);if(b)return document.querySelector(b)}},{key:"defaultText",value:function(l){return A("text",l)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],b=typeof l=="string"?[l]:l,x=!!document.queryCommandSupported;return b.forEach(function(q){x=x&&!!document.queryCommandSupported(q)}),x}}]),e}(u()),X=Y},828:function(o){var c=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(u,r){for(;u&&u.nodeType!==c;){if(typeof u.matches=="function"&&u.matches(r))return u;u=u.parentNode}}o.exports=s},438:function(o,c,t){var s=t(828);function u(v,E,h,m,y){var T=g.apply(this,arguments);return v.addEventListener(h,T,y),{destroy:function(){v.removeEventListener(h,T,y)}}}function r(v,E,h,m,y){return typeof v.addEventListener=="function"?u.apply(null,arguments):typeof h=="function"?u.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(T){return u(T,E,h,m,y)}))}function g(v,E,h,m){return function(y){y.delegateTarget=s(y.target,E),y.delegateTarget&&m.call(v,y)}}o.exports=r},879:function(o,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(o,c,t){var s=t(879),u=t(438);function r(h,m,y){if(!h&&!m&&!y)throw new Error("Missing required arguments");if(!s.string(m))throw new TypeError("Second argument must be a String");if(!s.fn(y))throw new TypeError("Third argument must be a Function");if(s.node(h))return g(h,m,y);if(s.nodeList(h))return v(h,m,y);if(s.string(h))return E(h,m,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(h,m,y){return h.addEventListener(m,y),{destroy:function(){h.removeEventListener(m,y)}}}function v(h,m,y){return Array.prototype.forEach.call(h,function(T){T.addEventListener(m,y)}),{destroy:function(){Array.prototype.forEach.call(h,function(T){T.removeEventListener(m,y)})}}}function E(h,m,y){return u(document.body,h,m,y)}o.exports=r},817:function(o){function c(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),g=document.createRange();g.selectNodeContents(t),r.removeAllRanges(),r.addRange(g),s=r.toString()}return s}o.exports=c},279:function(o){function c(){}c.prototype={on:function(t,s,u){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:s,ctx:u}),this},once:function(t,s,u){var r=this;function g(){r.off(t,g),s.apply(u,arguments)}return g._=s,this.on(t,g,u)},emit:function(t){var s=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),r=0,g=u.length;for(r;r<g;r++)u[r].fn.apply(u[r].ctx,s);return this},off:function(t,s){var u=this.e||(this.e={}),r=u[t],g=[];if(r&&s)for(var v=0,E=r.length;v<E;v++)r[v].fn!==s&&r[v].fn._!==s&&g.push(r[v]);return g.length?u[t]=g:delete u[t],this}},o.exports=c,o.exports.TinyEmitter=c}},f={};function p(o){if(f[o])return f[o].exports;var c=f[o]={exports:{}};return d[o](c,c.exports,p),c.exports}return function(){p.n=function(o){var c=o&&o.__esModule?function(){return o.default}:function(){return o};return p.d(c,{a:c}),c}}(),function(){p.d=function(o,c){for(var t in c)p.o(c,t)&&!p.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:c[t]})}}(),function(){p.o=function(o,c){return Object.prototype.hasOwnProperty.call(o,c)}}(),p(134)}().default})});var R=et(F());var N=d=>{let f;for(let p of d.childNodes)if(p.childNodes.length&&(f=N(p)),p.nodeType==Node.TEXT_NODE&&(f=p),f)break;return f};var M=d=>d instanceof HTMLInputElement||d instanceof HTMLSelectElement||d instanceof HTMLTextAreaElement;var nt=()=>{let d=document.querySelectorAll("[data-copy]");for(let f of d){let p=f.getAttribute("data-copy");if(!p)continue;let o={},c=f.getAttribute("data-copied"),t=+(f.getAttribute("data-copied-duration")||"");if(/^(\.|#).*/g.test(p)){let r=document.querySelector(p),g="";M(r)?g=r.value:r instanceof HTMLElement?g=r.innerText:r&&(g=r.textContent||""),o.text=()=>g}else o.text=()=>p;let u=new R.default(f,o);if(c){let r=N(f);r&&u.on("success",()=>{let g=r.textContent;r.textContent=c,setTimeout(()=>r.textContent=g,t||2e3)})}}};document.addEventListener("DOMContentLoaded",nt);})();
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
