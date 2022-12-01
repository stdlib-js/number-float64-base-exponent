// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,i,f,y;if(null==t)return r.call(t);e=t[o],y=o,a=null!=(f=t)&&n.call(f,y);try{t[o]=void 0}catch(n){return r.call(t)}return i=r.call(t),a?t[o]=e:delete t[o],i}:function(t){return r.call(t)},e="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var f,y="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var t,r,n;if("function"!=typeof i)return!1;try{r=new i(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(e&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")};var u=f,c="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var p,v="function"==typeof Float64Array?Float64Array:void 0;p=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),n=r,t=(c&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")};var A=p,U="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,256,257]),n=r,t=(U&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?m:function(){throw new Error("not implemented")};var d=b,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var S,F="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var t,r,n;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,65536,65537]),n=r,t=(h&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var j,g={uint16:S,uint8:d};(j=new g.uint16(1))[0]=4660;var E=!0===(52===new g.uint8(j.buffer)[0])?1:0,O=new A(1),N=new u(O.buffer);function T(t){var r=function(t){return O[0]=t,N[E]}(t);return(r=(2146435072&r)>>>20)-1023|0}export{T as default};
//# sourceMappingURL=mod.js.map