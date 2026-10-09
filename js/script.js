/*! Bootstrap Collapse 5.3.3 | Copyright The Bootstrap Authors | MIT License */
(()=>{var le=Object.create;var Z=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var de=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var O=(e,i)=>()=>{try{return i||e((i={exports:{}}).exports,i),i.exports}catch(f){throw i=0,f}};var pe=(e,i,f,r)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of fe(i))!he.call(e,n)&&n!==f&&Z(e,n,{get:()=>i[n],enumerable:!(r=ce(i,n))||r.enumerable});return e};var ge=(e,i,f)=>(f=e!=null?le(de(e)):{},pe(i||!e||!e.__esModule?Z(f,"default",{value:e,enumerable:!0}):f,e));var ee=O((j,H)=>{(function(e,i){typeof j=="object"&&typeof H<"u"?H.exports=i():typeof define=="function"&&define.amd?define(i):(e=typeof globalThis<"u"?globalThis:e||self,e.Data=i())})(j,(function(){"use strict";let e=new Map;return{set(f,r,n){e.has(f)||e.set(f,new Map);let a=e.get(f);if(!a.has(r)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(r,n)},get(f,r){return e.has(f)&&e.get(f).get(r)||null},remove(f,r){if(!e.has(f))return;let n=e.get(f);n.delete(r),n.size===0&&e.delete(f)}}}))});var R=O((F,te)=>{(function(e,i){typeof F=="object"&&typeof te<"u"?i(F):typeof define=="function"&&define.amd?define(["exports"],i):(e=typeof globalThis<"u"?globalThis:e||self,i(e.Index={}))})(F,(function(e){"use strict";let r="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(o,s)=>`#${CSS.escape(s)}`)),t),a=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),E=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},h=t=>{if(!t)return 0;let{transitionDuration:o,transitionDelay:s}=window.getComputedStyle(t),l=Number.parseFloat(o),p=Number.parseFloat(s);return!l&&!p?0:(o=o.split(",")[0],s=s.split(",")[0],(Number.parseFloat(o)+Number.parseFloat(s))*1e3)},y=t=>{t.dispatchEvent(new Event(r))},b=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),P=t=>b(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(n(t)):null,q=t=>{if(!b(t)||t.getClientRects().length===0)return!1;let o=getComputedStyle(t).getPropertyValue("visibility")==="visible",s=t.closest("details:not([open])");if(!s)return o;if(s!==t){let l=t.closest("summary");if(l&&l.parentNode!==s||l===null)return!1}return o},v=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",N=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){let o=t.getRootNode();return o instanceof ShadowRoot?o:null}return t instanceof ShadowRoot?t:t.parentNode?N(t.parentNode):null},C=()=>{},S=t=>{t.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,w=[],L=t=>{document.readyState==="loading"?(w.length||document.addEventListener("DOMContentLoaded",()=>{for(let o of w)o()}),w.push(t)):t()},I=()=>document.documentElement.dir==="rtl",c=t=>{L(()=>{let o=M();if(o){let s=t.NAME,l=o.fn[s];o.fn[s]=t.jQueryInterface,o.fn[s].Constructor=t,o.fn[s].noConflict=()=>(o.fn[s]=l,t.jQueryInterface)}})},u=(t,o=[],s=t)=>typeof t=="function"?t(...o):s,d=(t,o,s=!0)=>{if(!s){u(t);return}let p=h(o)+5,g=!1,_=({target:A})=>{A===o&&(g=!0,o.removeEventListener(r,_),u(t))};o.addEventListener(r,_),setTimeout(()=>{g||y(o)},p)},m=(t,o,s,l)=>{let p=t.length,g=t.indexOf(o);return g===-1?!s&&l?t[p-1]:t[0]:(g+=s?1:-1,l&&(g=(g+p)%p),t[Math.max(0,Math.min(g,p-1))])};e.defineJQueryPlugin=c,e.execute=u,e.executeAfterTransition=d,e.findShadowRoot=N,e.getElement=P,e.getNextActiveElement=m,e.getTransitionDurationFromElement=h,e.getUID=E,e.getjQuery=M,e.isDisabled=v,e.isElement=b,e.isRTL=I,e.isVisible=q,e.noop=C,e.onDOMContentLoaded=L,e.parseSelector=n,e.reflow=S,e.toType=a,e.triggerTransitionEnd=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))});var k=O((K,V)=>{(function(e,i){typeof K=="object"&&typeof V<"u"?V.exports=i(R()):typeof define=="function"&&define.amd?define(["../util/index"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.EventHandler=i(e.Index))})(K,(function(e){"use strict";let i=/[^.]*(?=\..*)\.|.*/,f=/\..*/,r=/::\d+$/,n={},a=1,E={mouseenter:"mouseover",mouseleave:"mouseout"},h=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(c,u){return u&&`${u}::${a++}`||c.uidEvent||a++}function b(c){let u=y(c);return c.uidEvent=u,n[u]=n[u]||{},n[u]}function P(c,u){return function d(m){return I(m,{delegateTarget:c}),d.oneOff&&L.off(c,m.type,u),u.apply(c,[m])}}function q(c,u,d){return function m(t){let o=c.querySelectorAll(u);for(let{target:s}=t;s&&s!==this;s=s.parentNode)for(let l of o)if(l===s)return I(t,{delegateTarget:s}),m.oneOff&&L.off(c,t.type,u,d),d.apply(s,[t])}}function v(c,u,d=null){return Object.values(c).find(m=>m.callable===u&&m.delegationSelector===d)}function N(c,u,d){let m=typeof u=="string",t=m?d:u||d,o=w(c);return h.has(o)||(o=c),[m,t,o]}function C(c,u,d,m,t){if(typeof u!="string"||!c)return;let[o,s,l]=N(u,d,m);u in E&&(s=(ue=>function($){if(!$.relatedTarget||$.relatedTarget!==$.delegateTarget&&!$.delegateTarget.contains($.relatedTarget))return ue.call(this,$)})(s));let p=b(c),g=p[l]||(p[l]={}),_=v(g,s,o?d:null);if(_){_.oneOff=_.oneOff&&t;return}let A=y(s,u.replace(i,"")),T=o?q(c,d,s):P(c,s);T.delegationSelector=o?d:null,T.callable=s,T.oneOff=t,T.uidEvent=A,g[A]=T,c.addEventListener(l,T,o)}function S(c,u,d,m,t){let o=v(u[d],m,t);o&&(c.removeEventListener(d,o,!!t),delete u[d][o.uidEvent])}function M(c,u,d,m){let t=u[d]||{};for(let[o,s]of Object.entries(t))o.includes(m)&&S(c,u,d,s.callable,s.delegationSelector)}function w(c){return c=c.replace(f,""),E[c]||c}let L={on(c,u,d,m){C(c,u,d,m,!1)},one(c,u,d,m){C(c,u,d,m,!0)},off(c,u,d,m){if(typeof u!="string"||!c)return;let[t,o,s]=N(u,d,m),l=s!==u,p=b(c),g=p[s]||{},_=u.startsWith(".");if(typeof o<"u"){if(!Object.keys(g).length)return;S(c,p,s,o,t?d:null);return}if(_)for(let A of Object.keys(p))M(c,p,A,u.slice(1));for(let[A,T]of Object.entries(g)){let D=A.replace(r,"");(!l||u.includes(D))&&S(c,p,s,T.callable,T.delegationSelector)}},trigger(c,u,d){if(typeof u!="string"||!c)return null;let m=e.getjQuery(),t=w(u),o=u!==t,s=null,l=!0,p=!0,g=!1;o&&m&&(s=m.Event(u,d),m(c).trigger(s),l=!s.isPropagationStopped(),p=!s.isImmediatePropagationStopped(),g=s.isDefaultPrevented());let _=I(new Event(u,{bubbles:l,cancelable:!0}),d);return g&&_.preventDefault(),p&&c.dispatchEvent(_),_.defaultPrevented&&s&&s.preventDefault(),_}};function I(c,u={}){for(let[d,m]of Object.entries(u))try{c[d]=m}catch{Object.defineProperty(c,d,{configurable:!0,get(){return m}})}return c}return L}))});var ne=O((Y,z)=>{(function(e,i){typeof Y=="object"&&typeof z<"u"?z.exports=i():typeof define=="function"&&define.amd?define(i):(e=typeof globalThis<"u"?globalThis:e||self,e.Manipulator=i())})(Y,(function(){"use strict";function e(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function i(r){return r.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(r,n,a){r.setAttribute(`data-bs-${i(n)}`,a)},removeDataAttribute(r,n){r.removeAttribute(`data-bs-${i(n)}`)},getDataAttributes(r){if(!r)return{};let n={},a=Object.keys(r.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(let E of a){let h=E.replace(/^bs/,"");h=h.charAt(0).toLowerCase()+h.slice(1,h.length),n[h]=e(r.dataset[E])}return n},getDataAttribute(r,n){return e(r.getAttribute(`data-bs-${i(n)}`))}}}))});var ie=O((Q,U)=>{(function(e,i){typeof Q=="object"&&typeof U<"u"?U.exports=i(ne(),R()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.Config=i(e.Manipulator,e.Index))})(Q,(function(e,i){"use strict";class f{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,a){let E=i.isElement(a)?e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...i.isElement(a)?e.getDataAttributes(a):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,a=this.constructor.DefaultType){for(let[E,h]of Object.entries(a)){let y=n[E],b=i.isElement(y)?"element":i.toType(y);if(!new RegExp(h).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${b}" but expected type "${h}".`)}}}return f}))});var re=O((x,B)=>{(function(e,i){typeof x=="object"&&typeof B<"u"?B.exports=i(ee(),k(),ie(),R()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.BaseComponent=i(e.Data,e.EventHandler,e.Config,e.Index))})(x,(function(e,i,f,r){"use strict";let n="5.3.3";class a extends f{constructor(h,y){super(),h=r.getElement(h),h&&(this._element=h,this._config=this._getConfig(y),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(let h of Object.getOwnPropertyNames(this))this[h]=null}_queueCallback(h,y,b=!0){r.executeAfterTransition(h,y,b)}_getConfig(h){return h=this._mergeConfigObj(h,this._element),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}static getInstance(h){return e.get(r.getElement(h),this.DATA_KEY)}static getOrCreateInstance(h,y={}){return this.getInstance(h)||new this(h,typeof y=="object"?y:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(h){return`${h}${this.EVENT_KEY}`}}return a}))});var se=O((W,J)=>{(function(e,i){typeof W=="object"&&typeof J<"u"?J.exports=i(R()):typeof define=="function"&&define.amd?define(["../util/index"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.SelectorEngine=i(e.Index))})(W,(function(e){"use strict";let i=r=>{let n=r.getAttribute("data-bs-target");if(!n||n==="#"){let a=r.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),n=a&&a!=="#"?a.trim():null}return n?n.split(",").map(a=>e.parseSelector(a)).join(","):null},f={find(r,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,r))},findOne(r,n=document.documentElement){return Element.prototype.querySelector.call(n,r)},children(r,n){return[].concat(...r.children).filter(a=>a.matches(n))},parents(r,n){let a=[],E=r.parentNode.closest(n);for(;E;)a.push(E),E=E.parentNode.closest(n);return a},prev(r,n){let a=r.previousElementSibling;for(;a;){if(a.matches(n))return[a];a=a.previousElementSibling}return[]},next(r,n){let a=r.nextElementSibling;for(;a;){if(a.matches(n))return[a];a=a.nextElementSibling}return[]},focusableChildren(r){let n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(n,r).filter(a=>!e.isDisabled(a)&&e.isVisible(a))},getSelectorFromElement(r){let n=i(r);return n&&f.findOne(n)?n:null},getElementFromSelector(r){let n=i(r);return n?f.findOne(n):null},getMultipleElementsFromSelector(r){let n=i(r);return n?f.find(n):[]}};return f}))});var oe=O((G,X)=>{(function(e,i){typeof G=="object"&&typeof X<"u"?X.exports=i(re(),k(),se(),R()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],i):(e=typeof globalThis<"u"?globalThis:e||self,e.Collapse=i(e.BaseComponent,e.EventHandler,e.SelectorEngine,e.Index))})(G,(function(e,i,f,r){"use strict";let n="collapse",E=".bs.collapse",h=".data-api",y=`show${E}`,b=`shown${E}`,P=`hide${E}`,q=`hidden${E}`,v=`click${E}${h}`,N="show",C="collapse",S="collapsing",M="collapsed",w=`:scope .${C} .${C}`,L="collapse-horizontal",I="width",c="height",u=".collapse.show, .collapse.collapsing",d='[data-bs-toggle="collapse"]',m={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class o extends e{constructor(l,p){super(l,p),this._isTransitioning=!1,this._triggerArray=[];let g=f.find(d);for(let _ of g){let A=f.getSelectorFromElement(_),T=f.find(A).filter(D=>D===this._element);A!==null&&T.length&&this._triggerArray.push(_)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m}static get DefaultType(){return t}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(u).filter(D=>D!==this._element).map(D=>o.getOrCreateInstance(D,{toggle:!1}))),l.length&&l[0]._isTransitioning||i.trigger(this._element,y).defaultPrevented)return;for(let D of l)D.hide();let g=this._getDimension();this._element.classList.remove(C),this._element.classList.add(S),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let _=()=>{this._isTransitioning=!1,this._element.classList.remove(S),this._element.classList.add(C,N),this._element.style[g]="",i.trigger(this._element,b)},T=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(_,this._element,!0),this._element.style[g]=`${this._element[T]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,P).defaultPrevented)return;let p=this._getDimension();this._element.style[p]=`${this._element.getBoundingClientRect()[p]}px`,r.reflow(this._element),this._element.classList.add(S),this._element.classList.remove(C,N);for(let _ of this._triggerArray){let A=f.getElementFromSelector(_);A&&!this._isShown(A)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0;let g=()=>{this._isTransitioning=!1,this._element.classList.remove(S),this._element.classList.add(C),i.trigger(this._element,q)};this._element.style[p]="",this._queueCallback(g,this._element,!0)}_isShown(l=this._element){return l.classList.contains(N)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=r.getElement(l.parent),l}_getDimension(){return this._element.classList.contains(L)?I:c}_initializeChildren(){if(!this._config.parent)return;let l=this._getFirstLevelChildren(d);for(let p of l){let g=f.getElementFromSelector(p);g&&this._addAriaAndCollapsedClass([p],this._isShown(g))}}_getFirstLevelChildren(l){let p=f.find(w,this._config.parent);return f.find(l,this._config.parent).filter(g=>!p.includes(g))}_addAriaAndCollapsedClass(l,p){if(l.length)for(let g of l)g.classList.toggle(M,!p),g.setAttribute("aria-expanded",p)}static jQueryInterface(l){let p={};return typeof l=="string"&&/show|hide/.test(l)&&(p.toggle=!1),this.each(function(){let g=o.getOrCreateInstance(this,p);if(typeof l=="string"){if(typeof g[l]>"u")throw new TypeError(`No method named "${l}"`);g[l]()}})}}return i.on(document,v,d,function(s){(s.target.tagName==="A"||s.delegateTarget&&s.delegateTarget.tagName==="A")&&s.preventDefault();for(let l of f.getMultipleElementsFromSelector(this))o.getOrCreateInstance(l,{toggle:!1}).toggle()}),r.defineJQueryPlugin(o),o}))});var ae=ge(oe());window.bootstrap={Collapse:ae.default};})();
/*! Bundled license information:

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/collapse.js:
  (*!
    * Bootstrap collapse.js v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/

// Read viewport media flags before changing DOM content.
// Avoid a synchronous full layout from reading innerWidth after menu/stat writes.
const angaarMobile=matchMedia('(max-width:768px)').matches;
const angaarDesktop=matchMedia('(min-width:901px)').matches;
const angaarReducedMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
const angaarHover=matchMedia('(hover:hover)').matches;

// Lightweight embers: static on phones, capped at 30fps on larger screens
(()=>{
 if(angaarMobile||angaarReducedMotion)return;
 const c=document.getElementById('embers'),ctx=c.getContext('2d');
 let w=0,h=0;const resize=()=>{w=c.width=innerWidth;h=c.height=innerHeight};resize();
 addEventListener('resize',resize,{passive:true});
 const make=(fromBottom=false)=>({x:Math.random()*w,y:fromBottom?h+6:Math.random()*h,r:Math.random()*1.8+.6,v:Math.random()*.55+.25,a:Math.random()*.55+.25,d:Math.random()*6.28});
 const paint=p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.29);ctx.fillStyle=`rgba(255,${130+(p.r*35|0)},45,${p.a})`;ctx.fill()};
 if(angaarMobile||angaarReducedMotion){
  Array.from({length:18},()=>make()).forEach(paint);return;
 }
 let mx=-999,my=-999,last=0,running=true;const particles=Array.from({length:42},()=>make());
 c.parentElement.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top},{passive:true});
 document.addEventListener('visibilitychange',()=>running=!document.hidden);
 function loop(ts){requestAnimationFrame(loop);if(!running||ts-last<33)return;last=ts;ctx.clearRect(0,0,w,h);
  particles.forEach((p,i)=>{p.y-=p.v;p.d+=.025;p.x+=Math.sin(p.d)*.3;const dx=p.x-mx,dy=p.y-my,ds=dx*dx+dy*dy;if(ds<9000&&ds>1){p.x+=dx*.02;p.y+=dy*.02}p.a-=.0015;if(p.y<-8||p.a<=0)particles[i]=make(true);paint(p)});
 }
 requestAnimationFrame(loop);
})();

// Active nav link
const links=[...document.querySelectorAll('.nav-link')],secs=links.map(l=>document.querySelector(l.getAttribute('href')));
let navTick=false;addEventListener('scroll',()=>{if(navTick)return;navTick=true;requestAnimationFrame(()=>{const y=scrollY+130;let cur=0;secs.forEach((section,index)=>{if(section.offsetTop<=y)cur=index});links.forEach((link,index)=>link.classList.toggle('active',index===cur));navTick=false})},{passive:true});
// Close mobile menu on link tap
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{
 const m=document.getElementById('menu');if(m.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(m).hide();
}));

// Slider
const track=document.getElementById('track'),n=track.children.length,dots=document.getElementById('dots');
let i=0,timer,reviewVisible=false;
for(let k=0;k<n;k++){const b=document.createElement('button');b.setAttribute('aria-label','Review '+(k+1));b.onclick=()=>go(k);dots.appendChild(b)}
function go(k){
 i=(k+n)%n;track.style.transform=`translateX(-${i*100}%)`;
 [...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
 clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500);
}
prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);dots.firstElementChild.classList.add('on');
const reviewObserver=new IntersectionObserver(entries=>{reviewVisible=entries[0].isIntersecting;clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500)},{threshold:.1});
reviewObserver.observe(document.getElementById('reviews'));
document.addEventListener('visibilitychange',()=>{clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500)});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{
 const item=btn.parentElement,a=item.querySelector('.faq-a'),was=item.classList.contains('open');
 document.querySelectorAll('.faq-item').forEach(f=>{f.classList.remove('open');f.querySelector('.faq-a').style.maxHeight=0;f.querySelector('.faq-q').setAttribute('aria-expanded','false')});
 if(!was){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';btn.setAttribute('aria-expanded','true')}
}));

// Loader
const hideLoader=()=>document.getElementById('loader').classList.add('done');
// Brief brand introduction, independent of map/images/font downloads.
setTimeout(hideLoader,250);
// Keep the hidden fixed overlay in place to avoid a second document-wide style invalidation.

// Scroll reveal + counters
const animateReveals=!angaarMobile&&!angaarReducedMotion;
if(animateReveals)document.querySelectorAll('.dish,.slip,h2,.stat,.mi,.slider').forEach(el=>el.classList.add('rv'));
else document.querySelectorAll('.stat b[data-n]').forEach(b=>{b.textContent=(+b.dataset.n).toLocaleString('en',{minimumFractionDigits:+(b.dataset.d||0),maximumFractionDigits:+(b.dataset.d||0)})+(b.hasAttribute('data-plus')?'+':'')});
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 const b=e.target.querySelector('b[data-n]');if(b)count(b);
}),{threshold:.2});
const observe=()=>document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
function count(b){
 if(angaarMobile||angaarReducedMotion){b.textContent=(+b.dataset.n).toLocaleString('en',{minimumFractionDigits:+(b.dataset.d||0),maximumFractionDigits:+(b.dataset.d||0)})+(b.hasAttribute('data-plus')?'+':'');return}

 const t=+b.dataset.n,d=+(b.dataset.d||0),pl=b.hasAttribute('data-plus')?'+':'';let st=null;
 (function f(ts){st=st||ts;const p=Math.min((ts-st)/1600,1);
  b.textContent=(t*(1-Math.pow(1-p,3))).toLocaleString('en',{minimumFractionDigits:d,maximumFractionDigits:d})+(p===1?pl:'');
  if(p<1)requestAnimationFrame(f)})(performance.now());
}

// Menu tabs
const MENU={
 'BBQ':[['Chicken Malai Boti','Creamy, charred, melts in the mouth','Rs 1,150'],['Beef Seekh Kabab','Hand-minced, ginger and green chili','Rs 1,050'],['Chicken Tikka Leg','Smoky, spicy, bone-in','Rs 650']],
 'Karahi':[['Chicken Karahi (full)','Tomato, ginger, green chili','Rs 2,400'],['Mutton Karahi (full)','Slow-cooked, bold and rich','Rs 3,900'],['Namkeen Gosht','Salt, pepper and nothing else','Rs 3,600']],
 'Breads & Sides':[['Tandoori Naan','Fresh from the tandoor wall','Rs 70'],['Garlic Naan','Butter and roasted garlic','Rs 130'],['Raita and Salad','Cool and crunchy','Rs 150']],
 'Drinks':[['Kashmiri Chai','Pink, creamy and nutty','Rs 280'],['Mint Margarita','Lemon, mint and soda','Rs 320'],['Lassi (sweet/salty)','Thick and cold','Rs 300']]
};
const tabs=document.getElementById('tabs'),items=document.getElementById('items');
function show(k){
 [...tabs.children].forEach(b=>{const selected=b.textContent===k;b.classList.toggle('on',selected);b.setAttribute('aria-pressed',String(selected))});
 items.innerHTML=MENU[k].map(([n,d,p])=>`<div class="mi rv in"><div><h3>${n}</h3><p>${d}</p></div><span class="dots-l"></span><span class="pr">${p}</span><button class="add" data-n="${n}" data-p="${p}" aria-label="Add ${n} to order">+</button></div>`).join('');
}
Object.keys(MENU).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});
show('BBQ');observe();

// Validate booking request and show confirmation
document.getElementById('form').addEventListener('submit',e=>{
 e.preventDefault();const statusEl=document.getElementById('status');
 const nameInput=document.getElementById('name'),emailInput=document.getElementById('email'),dateInput=document.getElementById('date'),timeInput=document.getElementById('time');
 const nm=nameInput.value.trim(),em=emailInput.value.trim(),dateOk=/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/20\d{2}$/.test(dateInput.value);
 if(!nm||!/^\S+@\S+\.\S+$/.test(em)||!dateOk||!timeInput.value){statusEl.style.color='#ff9a7a';statusEl.textContent='Enter your name, valid email, date in DD/MM/YYYY format, and preferred time.';return}
 const dateValue=dateInput.value,timeValue=timeInput.value;
 document.getElementById('bookingSuccessText').textContent=`Thanks, ${nm}. Your booking request for ${dateValue} at ${timeValue} has been received.`;
 e.currentTarget.hidden=true;document.getElementById('bookingSuccess').hidden=false;
 e.currentTarget.reset();
});
document.getElementById('anotherBooking').addEventListener('click',()=>{document.getElementById('bookingSuccess').hidden=true;const f=document.getElementById('form');f.hidden=false;document.getElementById('status').textContent='';f.querySelector('input').focus()});

// Auto-format booking date as DD/MM/YYYY
const bookingDate=document.getElementById('date');bookingDate.addEventListener('input',()=>{let v=bookingDate.value.replace(/\D/g,'').slice(0,8);if(v.length>4)v=v.slice(0,2)+'/'+v.slice(2,4)+'/'+v.slice(4);else if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);bookingDate.value=v});

// ---- Order builder ----
const cart={},rs=n=>'Rs '+n.toLocaleString('en');
items.addEventListener('click',e=>{
 const b=e.target.closest('.add');if(!b)return;
 const n=b.dataset.n;(cart[n]=cart[n]||{q:0,p:+b.dataset.p.replace(/\D/g,'')}).q++;drawCart();
});
document.getElementById('cl').addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 const n=b.dataset.n;cart[n].q+=b.dataset.a==='+'?1:-1;if(cart[n].q<1)delete cart[n];drawCart();
});
function drawCart(){
 const k=Object.keys(cart),box=document.getElementById('cart');box.hidden=!k.length;
 document.getElementById('cl').innerHTML=k.map(n=>`<div class="cl"><span>${n}</span><button data-a="-" data-n="${n}" aria-label="Less">-</button><b>${cart[n].q}</b><button data-a="+" data-n="${n}" aria-label="More">+</button><span>${rs(cart[n].p*cart[n].q)}</span></div>`).join('');
 document.getElementById('tot').textContent=rs(k.reduce((t,n)=>t+cart[n].p*cart[n].q,0));
}
document.getElementById('clr').onclick=()=>{for(const n in cart)delete cart[n];drawCart()};
document.getElementById('send').onclick=e=>{
 const k=Object.keys(cart);if(!k.length)return;
 const b=e.currentTarget,old=b.textContent;b.textContent='Order summary ready ✓';
 setTimeout(()=>b.textContent=old,2200);
};

// ---- Lightweight desktop-only parallax and cursor glow ----
if(angaarDesktop&&!angaarReducedMotion){
 const pc=document.querySelector('.hero .container');let parallaxTick=false;
 addEventListener('scroll',()=>{if(parallaxTick||scrollY>=innerHeight)return;parallaxTick=true;requestAnimationFrame(()=>{pc.style.transform=`translateY(${scrollY*.16}px)`;pc.style.opacity=1-scrollY/(innerHeight*.9);parallaxTick=false})},{passive:true});
 if(angaarHover){const g=document.getElementById('glow');addEventListener('pointermove',e=>{g.style.opacity=1;g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`},{passive:true})}
}

// Load the map only when a visitor approaches it, not during initial page load.
const locationMap=document.querySelector('iframe[data-src]');
if(locationMap){
 const loadMap=()=>{locationMap.src=locationMap.dataset.src;delete locationMap.dataset.src};
 if('IntersectionObserver' in window){
  const mapObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){loadMap();mapObserver.disconnect()}},{rootMargin:'300px'});
  mapObserver.observe(document.getElementById('contact'));
 }else loadMap();
}
