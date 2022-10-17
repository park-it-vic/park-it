/*! For license information please see shiny_app.js.LICENSE.txt */
!function(){"use strict";!function(){var t=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelector("[data-value='Dimmer'].tab-pane");return t&&t.classList.remove("active"),t&&e&&n.classList.remove("dim"),n.replaceWith(n.cloneNode(!0)),!0};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function h(){}function p(){}function v(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(I([])));g&&g!==n&&o.call(g,i)&&(y=g);var w=v.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,n){function r(a,i,c,u){var s=f(t[a],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,s(w,"constructor",v),s(v,"constructor",p),p.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))}}var i=function(){var t=a(r().mark((function t(e){var n,o,a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a in n=new URL("https://nominatim.openstreetmap.org/search"),o={format:"json",countrycodes:"au",viewbox:"144.93366,-37.79264,144.97670,-37.82391",bounded:"1",q:e})n.searchParams.append(a,o[a]);return console.log("Query URL: ".concat(n)),l(),t.next=7,fetch(n).then((function(t){if(200!=t.status)throw new Error("Bad Server Response");return t.json()})).then((function(t){return t})).catch((function(t){return console.log("Error in query: ".concat(t)),[]})).finally((function(){f()}));case 7:return i=t.sent,console.log("Response JSON:",i),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=document.querySelector("[data-value='SearchResults'].tab-pane"),e=document.getElementById("search-input").closest(".wrapper").getBoundingClientRect(),n=e.bottom,r=e.width;t.style.top="".concat(n,"px"),t.style.width="".concat(r,"px"),t.classList.add("active")},u=function(){document.querySelector("[data-value='SearchResults'].tab-pane").classList.remove("active")},s=function(){var t=a(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("search-input").value,t.next=3,i(e);case 3:o=t.sent,a=void 0,(a=document.querySelector("[data-value='SearchResults'].tab-pane")).innerHTML="",a.append.apply(a,function(t){if(Array.isArray(t))return n(t)}(r=o.map((function(t){var e=document.createElement("div");e.classList.add("result-wrapper");var n,r=(n=t).display_name&&n.display_name.split(",")||[];e.addEventListener("click",(function(e){var n=document.getElementById("search-input");n.dispatchEvent(new CustomEvent("set:loc",{detail:t})),document.querySelector("[data-value='SearchResults'].tab-pane").dispatchEvent(new CustomEvent("close:panel",{detail:t})),n.value=r[0]||"Unknown name",u()}));var o=document.createElement("div");o.classList.add("result-name"),o.innerHTML=r[0]||"Unknown name";var a=document.createElement("div");return a.classList.add("result-loc"),a.innerHTML=r[1]||"Unknown location",e.appendChild(o),e.appendChild(a),e})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c();case 5:case"end":return t.stop()}var r,o,a}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=document.querySelector("[data-value='Search'].tab-pane");t&&t.classList.add("busy"),document.getElementById("search-input").dispatchEvent(new CustomEvent("search:busy"))},f=function(){var t=document.querySelector("[data-value='Search'].tab-pane");t&&t.classList.remove("busy"),document.getElementById("search-input").dispatchEvent(new CustomEvent("search:done"))},d=function(){var e=document.querySelector("[data-value='Filters'].tab-pane");e.classList.contains("active")&&t(e)||function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=document.querySelector("[data-value='Dimmer'].tab-pane");e&&e.classList.add("active"),e&&n&&r.classList.add("dim"),r.addEventListener("click",(function(){return t(e)}))}(e)};function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(t){window.onload=function(){navigator.userAgent.includes("QtWebEngine")&&window.alert("For best effect, please use an external browser."),window.search=i},t(document).on("shiny:sessioninitialized",(function(t){document.getElementById("filters-show-hide").addEventListener("click",d),document.getElementById("button-search").addEventListener("click",s),document.getElementById("search-input").addEventListener("keydown",(function(t){switch(t.key){case"Enter":t.preventDefault(),t.stopPropagation(),s();break;case"Escape":t.preventDefault(),t.stopPropagation(),t.target.blur(),u()}})),document.addEventListener("click",(function(t){var e=document.querySelector("[data-value='SearchResults'].tab-pane");t.target!=e&&u()})),function(){document.querySelector("[data-value='SearchResults'].tab-pane");var t=document.getElementById("search-input");t.addEventListener("search:busy",(function(t){})),t.addEventListener("search:done",(function(t){})),t.addEventListener("set:loc",(function(t){var e=t.detail;e&&Shiny&&Shiny.setInputValue("js_set_loc",e)}))}(),function(){console.log("Update slider context labels");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(document.getElementsByClassName("irs-grid-text"));try{for(e.s();!(t=e.n()).done;){var n=t.value;try{var r=parseFloat(n.innerHTML);r<1&&(n.innerHTML="".concat(parseInt(1e3*r)," m")),r>=1&&(n.innerHTML="".concat(parseInt(r)," km"))}catch(t){continue}}}catch(t){e.e(t)}finally{e.f()}}()}))}($)}()}();
//# sourceMappingURL=shiny_app.js.map