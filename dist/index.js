"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=a(function(g,i){
var n=require('@stdlib/number-float64-base-get-high-word/dist'),s=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),o=require('@stdlib/constants-float64-exponent-bias/dist');function v(e){var r=n(e);return r=(r&s)>>>20,r-o|0}i.exports=v
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
