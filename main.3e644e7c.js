parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=!1;function t(t){!1===e&&window.requestAnimationFrame(function(){s(t),e=!1}),e=!0}window.addEventListener("scroll",t,!1),document.addEventListener("DOMContentLoaded",s,!1);var i=document.querySelector("#description"),c=document.querySelector("#title"),n=document.querySelector(".header__button"),o=document.querySelectorAll(".product__card"),a=document.querySelector(".about-us");function s(e){d(i)?i.classList.add("_active"):i.classList.remove("_active"),d(c)?c.classList.add("_active"):c.classList.remove("_active"),r(n)?n.classList.add("_active"):n.classList.remove("_active");for(var t=0;t<o.length;t++)r(o[t])?o[t].classList.add("_active"):o[t].classList.remove("_active");r(a)?a.classList.add("_active"):a.classList.remove("_active")}function r(e){var t=e.getBoundingClientRect(),i=t.top,c=t.bottom,n=t.height;return i+n>=0&&n+window.innerHeight>=c}function d(e){var t=e.getBoundingClientRect(),i=t.top,c=t.bottom;return i>=0&&c<=window.innerHeight}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3e644e7c.js.map