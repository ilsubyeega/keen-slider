!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var d=l(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:g(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var s=l(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(0),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"html{scroll-behavior:smooth}button{padding:0;background:transparent;border:none}button:focus{outline:none;box-shadow:none}.slider-wrapper{color:#fff;display:inline-block;position:relative}.keen-slider{width:calc(100vw - 30px);height:70vw}@media(min-width: 576px){.keen-slider{width:450px;height:220px}}@media(min-width: 768px){.keen-slider{width:600px;height:294px}}@media(min-width: 990px){.keen-slider{width:900px;height:440px}}.slide{height:100%;width:100%;display:flex;justify-content:center;align-items:center;position:relative}.slide img{border:none;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:auto;height:100%}@media(min-width: 576px){.slide img{width:100%;height:auto}}.fade-virtual{position:absolute;width:100%;height:100%}.arrow{position:absolute;left:5px;top:50%;transform:translateY(-50%);color:#fff;cursor:pointer;font-size:3em}.arrow.right{left:auto;right:5px}.arrow.disabled{color:gray}.svg-icon{display:inline-block;vertical-align:text-bottom}.svg-icon svg{overflow:hidden;vertical-align:middle}#dots{display:flex;padding:10px 0;justify-content:center}#dots .dot{width:10px;height:10px;background:#c5c5c5;border-radius:50%;margin:0 5px;padding:5px}#dots .dot.active{background:#000}.code-link-title{font-style:italic}.stack-group{display:flex;flex-wrap:wrap;justify-content:center}.stack-group .stack-link{font-size:2.5rem;margin:.3rem .6rem;text-decoration:none}.stack-group .stack-link.vuejs{color:#4fc08d}.stack-group .stack-link.angular{color:#dd0031}.stack-group .stack-link.react{color:#61dafb}.stack-group .stack-link.js{color:#f0db4f}.stack-group .stack-link span{font-size:.7rem;display:block;color:#212529;font-weight:bold;margin-top:-5px}.footer{font-size:.8rem}.links{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.links>.btn{margin:.3rem .3rem}",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,".keen-slider{display:block;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.keen-slider__track{display:flex;height:100%}.keen-slider__slide{height:100%;overflow:hidden}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(3),n(5);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var i=function(e,t){var n={changed:null,created:null,dragEnd:null,dragStart:null,initialSlide:0,loop:!0,move:null,moveDuration:500,moveEasing:function(e){return--e*e*e+1},selectorSlide:".keen-slider__slide",selectorTrack:".keen-slider__track",touchControl:!0,virtualSlides:null},i=null,a=null,l=null,c=[],u=null,s=[],d=null,f=!1,p=null,h=null,v=0,g=null,m=null,b=null,y=null,w=null,k=null,x=0,S=null,j=0,E=null,T=null;function M(e){var t;null!==k&&i.loop&&(k<-B()*F()-B()/2&&(x-=F(),k=-B()+B()/2-(-B()*F()-B()/2-k)),k>-B()/2&&(x+=F(),k=-B()*R()+B()/2+(k- -B()/2))),w=k,k-=e,i.loop||(k=L(k,-B()*R(),0)),i.move&&i.move.call(ue,(t=k,{direction:Math.sign(t-w),progress:X(t),progressSlides:Y(t),currentSlide:Math.abs(Math.round(H(t))),targetSlide:le(x)})),W()||(l.style.transform="translate3d(".concat(k,"px, 0, 0)"))}function O(e){return L(e,0,R())}function L(e,t,n){return Math.min(Math.max(e,t),n)}function A(e){f||(i.dragStart&&i.dragStart.call(ue),f=!0,y=function(e){return void 0===e.targetTouches?"default":e.targetTouches[0].identifier}(e),Z(),p=D(e),h=p,v=0,g=k)}function C(e){if(null!==p&&f&&function(e){return void 0===e.targetTouches||e.targetTouches[0].identifier===y}(e)){var t=D(e);!function(e){if(void 0===e.targetTouches)return;var t=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY;null===m&&(m=t);null===b&&(b=n);if(Math.abs(b-n)>=Math.abs(m-t))return m=t,b=n,!0}(e)?(e.preventDefault(),v=t-h,d=h?Math.sign(t-h):Math.sign(v-p),M(h-t),h=t):h=t}}function _(e){f&&function(e){return void 0===e.changedTouches||e.changedTouches[0].identifier===y}(e)&&(i.dragEnd&&i.dragEnd.call(ue),f=!1,V(function(e){if(e<0&&d<0)return x+1;if(e>0&&d>0)return x-1;return x}(k-g)))}function N(){return console.error("keen-slider error: markup not correct"),!1}function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Array.isArray(e))e.forEach((function(e){P(e,t,n,r)}));else{if(!e||!e.addEventListener)return console.info("event handler could not be assigned");e.addEventListener(t,n,r),s.push([e,t,n])}}function I(){P(a,"dragstart",(function(e){e.preventDefault()})),P(a,"mousedown",A),P(a,"mousemove",C),P(a,"mouseleave",_),P(a,"mouseup",_),P(a,"touchstart",A),P(a,"touchmove",C),P(a,"touchend",_),P(a,"touchcancel",_),P(a,"touchleave",_),P(window,"wheel",ce,{passive:!1}),P(window,"scroll",ie)}function q(){s.forEach((function(e,t){e[0].removeEventListener(e[1],e[2]),delete s[t]}))}function B(){return a.offsetWidth}function D(e){return void 0===e.targetTouches?e.pageX:e.targetTouches[0].screenX}function F(){return i.loop?U()-2:U()}function z(){return U()}function R(){return U()-1}function U(){return W()?i.loop?i.virtualSlides+2:i.virtualSlides:c.length}function H(e){var t=parseFloat(Math.abs(-e/B()).toFixed(10),10);return i.loop?-1===(t-=1)?t+F():t===R()-1?t-F():t:t}function X(e){return i.loop&&(e+=B()),parseFloat(-(e/(B()*(F()-1))).toFixed(10),10)}function Y(e){e=H(e);for(var t=[],n=0;n<F();n++){var r=n-e,o=r>F()-1?r-F():r<-(F()-1)?r+F():r,i=1-Math.abs(o);t[n]={distance:o,progress:i<0||i>1?0:i}}return t}function J(){return document.hidden}function W(){return null!==i.virtualSlides}function G(e){oe(e,!0);var t=function(e){return-B()*L(e,0,R())}(e);M(k-t)}function K(e){ne(),i.touchControl&&I(),P(window,"orientationchange",$),P(window,"resize",$),i.loop&&function(){if(!W()){var e=c[0].parentNode,t=c[0].cloneNode(!0),n=c[R()].cloneNode(!0);t.setAttribute("data-ke-sl-lo",!0),n.setAttribute("data-ke-sl-lo",!0),e.appendChild(t),e.insertBefore(n,e.firstChild),ne()}}(),G(e),te()}function Q(e){j||(j=e);var t=e-j;if(t>=i.moveDuration)return j=null,void M(E-T);var n,r=(n=t,E*i.moveEasing(n/i.moveDuration)-T);T+=r,M(r),S=window.requestAnimationFrame(Q)}function V(e){oe(e,!i.loop),Z(),E=-(function(e){return-B()*e}(e)-k),T=0,window.requestAnimationFrame(Q)}function Z(){S&&(window.cancelAnimationFrame(S),S=null),j=null}function $(){te(),setTimeout(te,500),setTimeout(te,2e3)}function ee(){i.loop&&function(){for(var e=l.querySelectorAll("[data-ke-sl-lo]"),t=0;t<e.length;t++){var n=e[t];n.parentNode.removeChild(n)}}(),q()}function te(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=window.innerWidth;if(t!==u||e){var n=B();W()||(l.style.width=n*U()+"px",re(B())),u=t,f||G(x)}}function ne(){c="function"!=typeof i.selectorSlide?a.querySelectorAll(i.selectorSlide):i.selectorSlide()}function re(e){for(var t=0;t<U();t++)c[t].style.width=e+"px"}function oe(e,t){x=t?O(e):e,i.changed&&i.changed.call(ue,le(x))}function ie(e){f&&(f=!1,i.dragEnd&&i.dragEnd.call(ue),V(x))}function ae(e){return i.loop?e+1:e}function le(e){return i.loop?(0===e&&(e=z()-2),e===z()-1&&(e=1),(e-=1)%F()):e}function ce(e){f&&e.preventDefault()}var ue={destroy:function(){ee()},prev:function(){J()||V(x-1)},next:function(){J()||V(x+1)},moveToSlide:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O(ae(e));return t?G(n):V(n)},reset:function(){ee(),K(x)},updateLoop:function(){if(!W()){ne();var e=c[0].parentNode,t=c[0],n=c[1].cloneNode(!0),r=c[R()],o=c[R()-1].cloneNode(!0);n.setAttribute("data-ke-sl-lo",!0),o.setAttribute("data-ke-sl-lo",!0),e.replaceChild(n,r),e.replaceChild(o,t)}},resize:function(){te(!0)},setTouchControls:function(e){e?I():q()},get current(){return le(x)},get length(){return F()}};return function(e,t){(a=function(e){if("string"==typeof e)return document.querySelector(e);return e}(e))instanceof HTMLElement==!1?N():(i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},t),(l=function(e){if("string"==typeof e)return a.querySelector(e);return e}(i.selectorTrack))instanceof HTMLElement!=!1||W()?(K(ae(i.initialSlide)),i.created&&i.created.call(ue)):N())}(e,t),ue};window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),new i("#slider-basic"),new i(document.getElementById("slider-with-arrows"),{loop:!1,initialSlide:1,created:function(){var e=this;document.getElementById("arrow-left").addEventListener("click",(function(){e.prev()})),document.getElementById("arrow-right").addEventListener("click",(function(){e.next()})),document.querySelectorAll(".dot").forEach((function(t,n){t.addEventListener("click",(function(){e.moveToSlide(n)}))}))},changed:function(e){var t=this,n=document.getElementById("arrow-left"),r=document.getElementById("arrow-right");0===e?n.classList.add("disabled"):n.classList.remove("disabled"),e===t.length-1?r.classList.add("disabled"):r.classList.remove("disabled"),document.querySelectorAll(".dot").forEach((function(e,n){n===t.current?e.classList.add("active"):e.classList.remove("active")}))}});var a=new i(document.getElementById("slider-autoplay"),{touchControl:!1});setInterval(a.next,2e3);var l=document.getElementById("slider-lazy-load"),c=l.querySelectorAll(".keen-slider__slide");new i(l,{created:function(){u(c[this.current])},changed:function(e){var t=this;u(c[e],(function(){t.updateLoop()}))}});function u(e,t){e&&setTimeout((function(){var n=e.querySelector("img");n.setAttribute("src",n.getAttribute("data-src")),t&&t()}),500)}var s=document.getElementById("slider-virtual"),d=s.querySelectorAll(".slide");new i(s,{virtualSlides:6,move:function(e){d.forEach((function(t,n){t.style.opacity=e.progressSlides[n].progress}))}})}])}));
//# sourceMappingURL=keen-slider.bundle.js.map