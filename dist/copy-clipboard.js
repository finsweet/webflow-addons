(()=>{var W=Object.create,A=Object.defineProperty,B=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertyDescriptor;var Z=y=>A(y,"__esModule",{value:!0});var $=(y,l)=>()=>(l||(l={exports:{}},y(l.exports,l)),l.exports);var tt=(y,l,h)=>{if(l&&typeof l=="object"||typeof l=="function")for(let r of K(l))!G.call(y,r)&&r!=="default"&&A(y,r,{get:()=>l[r],enumerable:!(h=Q(l,r))||h.enumerable});return y},et=y=>tt(Z(A(y!=null?W(B(y)):{},"default",y&&y.__esModule&&"default"in y?{get:()=>y.default,enumerable:!0}:{value:y,enumerable:!0})),y);var R=$((x,N)=>{(function(l,h){typeof x=="object"&&typeof N=="object"?N.exports=h():typeof define=="function"&&define.amd?define([],h):typeof x=="object"?x.ClipboardJS=h():l.ClipboardJS=h()})(x,function(){return function(){var y={134:function(r,c,t){"use strict";t.d(c,{default:function(){return X}});var o=t(279),u=t.n(o),f=t(370),g=t.n(f),v=t(817),E=t.n(v);function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(e){return typeof e}:d=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(i)}function m(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function p(i,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function k(i,n,e){return n&&p(i.prototype,n),e&&p(i,e),i}var P=function(){function i(n){m(this,i),this.resolveOptions(n),this.initSelection()}return k(i,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(a,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,a=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(a),this.selectedText=E()(a),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=E()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(a){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&d(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),i}(),j=P;function T(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function H(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function L(i,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function D(i,n,e){return n&&L(i.prototype,n),e&&L(i,e),i}function J(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&w(i,n)}function w(i,n){return w=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a},w(i,n)}function V(i){var n=U();return function(){var a=_(i),s;if(n){var b=_(this).constructor;s=Reflect.construct(a,arguments,b)}else s=a.apply(this,arguments);return I(this,s)}}function I(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:z(i)}function z(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function U(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(i){return!1}}function _(i){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(i)}function C(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var Y=function(i){J(e,i);var n=V(e);function e(a,s){var b;return H(this,e),b=n.call(this),b.resolveOptions(s),b.listenClick(a),b}return D(e,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=T(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var b=this;this.listener=g()(s,"click",function(S){return b.onClick(S)})}},{key:"onClick",value:function(s){var b=s.delegateTarget||s.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new j({action:this.action(b),target:this.target(b),text:this.text(b),container:this.container,trigger:b,emitter:this})}},{key:"defaultAction",value:function(s){return C("action",s)}},{key:"defaultTarget",value:function(s){var b=C("target",s);if(b)return document.querySelector(b)}},{key:"defaultText",value:function(s){return C("text",s)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],b=typeof s=="string"?[s]:s,S=!!document.queryCommandSupported;return b.forEach(function(q){S=S&&!!document.queryCommandSupported(q)}),S}}]),e}(u()),X=Y},828:function(r){var c=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function o(u,f){for(;u&&u.nodeType!==c;){if(typeof u.matches=="function"&&u.matches(f))return u;u=u.parentNode}}r.exports=o},438:function(r,c,t){var o=t(828);function u(v,E,d,m,p){var k=g.apply(this,arguments);return v.addEventListener(d,k,p),{destroy:function(){v.removeEventListener(d,k,p)}}}function f(v,E,d,m,p){return typeof v.addEventListener=="function"?u.apply(null,arguments):typeof d=="function"?u.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(k){return u(k,E,d,m,p)}))}function g(v,E,d,m){return function(p){p.delegateTarget=o(p.target,E),p.delegateTarget&&m.call(v,p)}}r.exports=f},879:function(r,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var o=Object.prototype.toString.call(t);return t!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var o=Object.prototype.toString.call(t);return o==="[object Function]"}},370:function(r,c,t){var o=t(879),u=t(438);function f(d,m,p){if(!d&&!m&&!p)throw new Error("Missing required arguments");if(!o.string(m))throw new TypeError("Second argument must be a String");if(!o.fn(p))throw new TypeError("Third argument must be a Function");if(o.node(d))return g(d,m,p);if(o.nodeList(d))return v(d,m,p);if(o.string(d))return E(d,m,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(d,m,p){return d.addEventListener(m,p),{destroy:function(){d.removeEventListener(m,p)}}}function v(d,m,p){return Array.prototype.forEach.call(d,function(k){k.addEventListener(m,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(k){k.removeEventListener(m,p)})}}}function E(d,m,p){return u(document.body,d,m,p)}r.exports=f},817:function(r){function c(t){var o;if(t.nodeName==="SELECT")t.focus(),o=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),o=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),g=document.createRange();g.selectNodeContents(t),f.removeAllRanges(),f.addRange(g),o=f.toString()}return o}r.exports=c},279:function(r){function c(){}c.prototype={on:function(t,o,u){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:o,ctx:u}),this},once:function(t,o,u){var f=this;function g(){f.off(t,g),o.apply(u,arguments)}return g._=o,this.on(t,g,u)},emit:function(t){var o=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),f=0,g=u.length;for(f;f<g;f++)u[f].fn.apply(u[f].ctx,o);return this},off:function(t,o){var u=this.e||(this.e={}),f=u[t],g=[];if(f&&o)for(var v=0,E=f.length;v<E;v++)f[v].fn!==o&&f[v].fn._!==o&&g.push(f[v]);return g.length?u[t]=g:delete u[t],this}},r.exports=c,r.exports.TinyEmitter=c}},l={};function h(r){if(l[r])return l[r].exports;var c=l[r]={exports:{}};return y[r](c,c.exports,h),c.exports}return function(){h.n=function(r){var c=r&&r.__esModule?function(){return r.default}:function(){return r};return h.d(c,{a:c}),c}}(),function(){h.d=function(r,c){for(var t in c)h.o(c,t)&&!h.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:c[t]})}}(),function(){h.o=function(r,c){return Object.prototype.hasOwnProperty.call(r,c)}}(),h(134)}().default})});var O=y=>{let l;for(let h of y.childNodes)if(h.childNodes.length&&(l=O(h)),h.nodeType==Node.TEXT_NODE&&(l=h),l)break;return l};var M=et(R()),F=()=>{let y=document.querySelectorAll("[data-copy]");for(let l of y){let h=l.getAttribute("data-copy");if(!h)continue;let r={},c=l.getAttribute("data-copied"),t=+(l.getAttribute("data-copied-duration")||""),o=O(l);if(/^(\.|#).*/g.test(h)){let g=document.querySelector(h);g&&(r.target=()=>g)}else r.text=()=>h;new M.default(l,r).on("success",g=>{if(g.clearSelection(),c&&o){let v=o.textContent;o.textContent=c,setTimeout(()=>o.textContent=v,t||2e3)}})}};document.addEventListener("DOMContentLoaded",F);var at=F;})();
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
