// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).exponent=t()}(this,(function(){"use strict";var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty;var f=function(n,t){return null!=n&&i.call(n,t)},a="function"==typeof Symbol?Symbol.toStringTag:"",u=f,c=a,y=r;var l=e,p=function(n){var t,r,o;if(null==n)return y.call(n);r=n[c],t=u(n,c);try{n[c]=void 0}catch(t){return y.call(n)}return o=y.call(n),t?n[c]=r:delete n[c],o},v=t()?p:l,A=v,U="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null,b=function(n){return U&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},m=d;var w=function(){var n,t;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=b(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var s="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},S=w()?s:h,g=v,j="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null,E=function(n){return j&&n instanceof Float64Array||"[object Float64Array]"===g(n)},T=F;var x=function(){var n,t;if("function"!=typeof T)return!1;try{t=new T([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n};var O="function"==typeof Float64Array?Float64Array:void 0,N=function(){throw new Error("not implemented")},P=x()?O:N,k=v,q="function"==typeof Uint8Array;var z="function"==typeof Uint8Array?Uint8Array:null,B=function(n){return q&&n instanceof Uint8Array||"[object Uint8Array]"===k(n)},C=z;var D=function(){var n,t;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,256,257]),n=B(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var G="function"==typeof Uint8Array?Uint8Array:void 0,H=function(){throw new Error("not implemented")},I=D()?G:H,J=v,K="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null,M=function(n){return K&&n instanceof Uint16Array||"[object Uint16Array]"===J(n)},Q=L;var R=function(){var n,t;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,65536,65537]),n=M(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var V,W="function"==typeof Uint16Array?Uint16Array:void 0,X=function(){throw new Error("not implemented")},Y={uint16:R()?W:X,uint8:I};(V=new Y.uint16(1))[0]=4660;var Z=S,$=!0===(52===new Y.uint8(V.buffer)[0])?1:0,_=new P(1),nn=new Z(_.buffer);var tn=function(n){return _[0]=n,nn[$]};var rn=function(n){var t=tn(n);return(t=(2146435072&t)>>>20)-1023|0};return rn}));
//# sourceMappingURL=bundle.js.map
