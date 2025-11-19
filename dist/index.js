"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var w=c(function(L,m){
var j=require("path").resolve,z=require('@stdlib/fs-read-wasm/dist').sync,B=z(j(__dirname,"..","src","main.wasm"));m.exports=B
});var q=c(function(P,_){
var E=require('@stdlib/assert-is-wasm-memory/dist'),M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/wasm-module-wrapper/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),k=w();function o(e){if(!(this instanceof o))return new o(e);if(!E(e))throw new TypeError(V('2GBH0',e));return x.call(this,k,e,{env:{memory:e}}),this}T(o,x);M(o.prototype,"main",function(r,s,a,t,n,i){return this._instance.exports.c_sdsdot(r,s,a,t,n,i)});M(o.prototype,"ndarray",function(r,s,a,t,n,i,p,l){return this._instance.exports.c_sdsdot_ndarray(r,s,a,t,n,i,p,l)});_.exports=o
});var O=c(function(Q,A){
var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),D=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),R=require('@stdlib/wasm-base-strided2object/dist'),f=q();function u(){return this instanceof u?(f.call(this,new D({initial:0})),this):new u}C(u,f);W(u.prototype,"main",function(r,s,a,t,n,i){return this.ndarray(r,s,a,t,b(r,t),n,i,b(r,i))});W(u.prototype,"ndarray",function(r,s,a,t,n,i,p,l){var y,d,v;return y=F(this,[R(r,a,t,n),R(r,i,p,l)]),d=y[0],v=y[1],f.prototype.ndarray.call(this,r,s,d.ptr,d.stride,d.offset,v.ptr,v.stride,v.offset)});A.exports=u
});var g=c(function(U,S){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=O(),I=q(),h=new H;h.initializeSync();G(h,"Module",I.bind(null));S.exports=h
});var J=g();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
