"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=c(function(L,h){
var z=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,E=B(z(__dirname,"..","src","main.wasm"));h.exports=E
});var q=c(function(P,x){
var T=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),k=require('@stdlib/error-tools-fmtprodmsg/dist'),C=m();function o(e){if(!(this instanceof o))return new o(e);if(!T(e))throw new TypeError(k('2GBH0',e));return M.call(this,C,e,{env:{memory:e}}),this}V(o,M);w(o.prototype,"main",function(r,i,a,t,n,s){return this._instance.exports.c_sdsdot(r,i,a,t,n,s)});w(o.prototype,"ndarray",function(r,i,a,t,n,s,p,l){return this._instance.exports.c_sdsdot_ndarray(r,i,a,t,n,s,p,l)});x.exports=o
});var A=c(function(Q,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),F=require('@stdlib/wasm-memory/dist'),G=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),f=q();function u(){return this instanceof u?(f.call(this,new F({initial:0})),this):new u}D(u,f);R(u.prototype,"main",function(r,i,a,t,n,s){return this.ndarray(r,i,a,t,_(r,t),n,s,_(r,s))});R(u.prototype,"ndarray",function(r,i,a,t,n,s,p,l){var y,d,v;return y=G(this,[b(r,a,t,n),b(r,s,p,l)]),d=y[0],v=y[1],f.prototype.ndarray.call(this,r,i,d.ptr,d.stride,d.offset,v.ptr,v.stride,v.offset)});W.exports=u
});var g=c(function(U,S){
var H=A(),O=new H;O.initializeSync();S.exports=O
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),J=q();I(j,"Module",J);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
