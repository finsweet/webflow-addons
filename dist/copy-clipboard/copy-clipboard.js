(()=>{var q=Object.create,C=Object.defineProperty,W=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,G=Object.getOwnPropertyNames,K=Object.getOwnPropertyDescriptor;var Q=g=>C(g,"__esModule",{value:!0});var Z=(g,h)=>()=>(h||(h={exports:{}},g(h.exports,h)),h.exports);var $=(g,h,l)=>{if(h&&typeof h=="object"||typeof h=="function")for(let r of G(h))!B.call(g,r)&&r!=="default"&&C(g,r,{get:()=>h[r],enumerable:!(l=K(h,r))||l.enumerable});return g},tt=g=>$(Q(C(g!=null?q(W(g)):{},"default",g&&g.__esModule&&"default"in g?{get:()=>g.default,enumerable:!0}:{value:g,enumerable:!0})),g);var R=Z((S,O)=>{(function(h,l){typeof S=="object"&&typeof O=="object"?O.exports=l():typeof define=="function"&&define.amd?define([],l):typeof S=="object"?S.ClipboardJS=l():h.ClipboardJS=l()})(S,function(){return function(){var g={134:function(r,a,t){"use strict";t.d(a,{default:function(){return Y}});var c=t(279),u=t.n(c),f=t(370),p=t.n(f),v=t(817),E=t.n(v);function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(e){return typeof e}:d=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(i)}function m(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function y(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function k(i,n,e){return n&&y(i.prototype,n),e&&y(i,e),i}var F=function(){function i(n){m(this,i),this.resolveOptions(n),this.initSelection()}return k(i,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(o,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,o=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(o),this.selectedText=E()(o),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=E()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(o){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&d(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),i}(),P=F;function T(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function j(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function L(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function H(i,n,e){return n&&L(i.prototype,n),e&&L(i,e),i}function D(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&w(i,n)}function w(i,n){return w=Object.setPrototypeOf||function(o,s){return o.__proto__=s,o},w(i,n)}function V(i){var n=z();return function(){var o=_(i),s;if(n){var b=_(this).constructor;s=Reflect.construct(o,arguments,b)}else s=o.apply(this,arguments);return I(this,s)}}function I(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:J(i)}function J(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function z(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(i){return!1}}function _(i){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(i)}function A(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var U=function(i){D(e,i);var n=V(e);function e(o,s){var b;return j(this,e),b=n.call(this),b.resolveOptions(s),b.listenClick(o),b}return H(e,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=T(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var b=this;this.listener=p()(s,"click",function(x){return b.onClick(x)})}},{key:"onClick",value:function(s){var b=s.delegateTarget||s.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new P({action:this.action(b),target:this.target(b),text:this.text(b),container:this.container,trigger:b,emitter:this})}},{key:"defaultAction",value:function(s){return A("action",s)}},{key:"defaultTarget",value:function(s){var b=A("target",s);if(b)return document.querySelector(b)}},{key:"defaultText",value:function(s){return A("text",s)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],b=typeof s=="string"?[s]:s,x=!!document.queryCommandSupported;return b.forEach(function(X){x=x&&!!document.queryCommandSupported(X)}),x}}]),e}(u()),Y=U},828:function(r){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(u,f){for(;u&&u.nodeType!==a;){if(typeof u.matches=="function"&&u.matches(f))return u;u=u.parentNode}}r.exports=c},438:function(r,a,t){var c=t(828);function u(v,E,d,m,y){var k=p.apply(this,arguments);return v.addEventListener(d,k,y),{destroy:function(){v.removeEventListener(d,k,y)}}}function f(v,E,d,m,y){return typeof v.addEventListener=="function"?u.apply(null,arguments):typeof d=="function"?u.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(k){return u(k,E,d,m,y)}))}function p(v,E,d,m){return function(y){y.delegateTarget=c(y.target,E),y.delegateTarget&&m.call(v,y)}}r.exports=f},879:function(r,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(r,a,t){var c=t(879),u=t(438);function f(d,m,y){if(!d&&!m&&!y)throw new Error("Missing required arguments");if(!c.string(m))throw new TypeError("Second argument must be a String");if(!c.fn(y))throw new TypeError("Third argument must be a Function");if(c.node(d))return p(d,m,y);if(c.nodeList(d))return v(d,m,y);if(c.string(d))return E(d,m,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function p(d,m,y){return d.addEventListener(m,y),{destroy:function(){d.removeEventListener(m,y)}}}function v(d,m,y){return Array.prototype.forEach.call(d,function(k){k.addEventListener(m,y)}),{destroy:function(){Array.prototype.forEach.call(d,function(k){k.removeEventListener(m,y)})}}}function E(d,m,y){return u(document.body,d,m,y)}r.exports=f},817:function(r){function a(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),p=document.createRange();p.selectNodeContents(t),f.removeAllRanges(),f.addRange(p),c=f.toString()}return c}r.exports=a},279:function(r){function a(){}a.prototype={on:function(t,c,u){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:c,ctx:u}),this},once:function(t,c,u){var f=this;function p(){f.off(t,p),c.apply(u,arguments)}return p._=c,this.on(t,p,u)},emit:function(t){var c=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),f=0,p=u.length;for(f;f<p;f++)u[f].fn.apply(u[f].ctx,c);return this},off:function(t,c){var u=this.e||(this.e={}),f=u[t],p=[];if(f&&c)for(var v=0,E=f.length;v<E;v++)f[v].fn!==c&&f[v].fn._!==c&&p.push(f[v]);return p.length?u[t]=p:delete u[t],this}},r.exports=a,r.exports.TinyEmitter=a}},h={};function l(r){if(h[r])return h[r].exports;var a=h[r]={exports:{}};return g[r](a,a.exports,l),a.exports}return function(){l.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(a,{a}),a}}(),function(){l.d=function(r,a){for(var t in a)l.o(a,t)&&!l.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:a[t]})}}(),function(){l.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)}}(),l(134)}().default})});var M=tt(R());var N=g=>{let h;for(let l of g.childNodes)if(l.childNodes.length&&(h=N(l)),l.nodeType==Node.TEXT_NODE&&(h=l),h)break;return h};document.addEventListener("DOMContentLoaded",()=>{var h;let g=document.querySelectorAll("[data-copy]");for(let l of g){let r=l.getAttribute("data-copy");if(!r)continue;let a={},t=l.getAttribute("data-copied"),c=+(l.getAttribute("data-copied-duration")||"");if(/^(\.|#).*/g.test(r)){let p=(h=document.querySelector(r))==null?void 0:h.textContent;p&&(a.text=()=>p)}else a.text=()=>r;let f=new M.default(l,a);if(t){let p=N(l);p&&f.on("success",()=>{let v=p.textContent;p.textContent=t,setTimeout(()=>p.textContent=v,c||2e3)})}}});})();
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
