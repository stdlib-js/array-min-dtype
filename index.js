// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=Math.floor,e=function(e){return t(e)===e},r=Number,n=r.NEGATIVE_INFINITY,o=n,i=function(t){return 0===t&&1/t===o},a="function"==typeof Object.defineProperty?Object.defineProperty:null,u=function(){try{return a({},"x",{}),!0}catch(t){return!1}},l=Object.defineProperty,f=Object.prototype,c=f.toString,p=f.__defineGetter__,y=f.__defineSetter__,m=f.__lookupGetter__,b=f.__lookupSetter__,s=l,h=function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===c.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(m.call(t,e)||b.call(t,e)?(n=t.__proto__,t.__proto__=f,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,e,r.get),a&&y&&y.call(t,e,r.set),t},v=u()?s:h,d=v,_=function(t,e,r){d(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},w=function(t){return"number"==typeof t},E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=function(){return E&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,S=T,j=function(t){return S.call(t)},N=Object.prototype.hasOwnProperty,P=function(t,e){return null!=t&&N.call(t,e)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=P,A=I,F=T,V=j,x=function(t){var e,r,n;if(null==t)return F.call(t);r=t[A],e=O(t,A);try{t[A]=void 0}catch(e){return F.call(t)}return n=F.call(t),e?t[A]=r:delete t[A],n},M=g()?x:V,L=r.prototype.toString,R=M,Y=r,C=function(t){try{return L.call(t),!0}catch(t){return!1}},k=g(),B=function(t){return"object"==typeof t&&(t instanceof Y||(k?C(t):"[object Number]"===R(t)))},G=w,J=B,D=_,q=function(t){return G(t)||J(t)},z=B;D(q,"isPrimitive",w),D(q,"isObject",z);var H=q,K=H.isPrimitive,Q=v,U=_,W=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},X=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function Z(t,e){if(!(this instanceof Z))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!K(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!K(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}U(Z,"BYTES_PER_ELEMENT",8),U(Z.prototype,"BYTES_PER_ELEMENT",8),U(Z.prototype,"byteLength",16),U(Z.prototype,"toString",W),U(Z.prototype,"toJSON",X);var $=Z,tt="function"==typeof Math.fround?Math.fround:null,et=M,rt="function"==typeof Float32Array,nt=function(t){return rt&&t instanceof Float32Array||"[object Float32Array]"===et(t)},ot=Number.POSITIVE_INFINITY,it="function"==typeof Float32Array?Float32Array:null,at=nt,ut=ot,lt=it,ft="function"==typeof Float32Array?Float32Array:void 0,ct=function(){throw new Error("not implemented")},pt=new(function(){var t,e;if("function"!=typeof lt)return!1;try{e=new lt([1,3.14,-3.14,5e40]),t=at(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ut}catch(e){t=!1}return t}()?ft:ct)(1),yt=tt;"function"!=typeof yt&&(yt=function(t){return pt[0]=t,pt[0]});var mt=H.isPrimitive,bt=v,st=_,ht=yt,vt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},dt=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function _t(t,e){if(!(this instanceof _t))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!mt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!mt(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return bt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ht(t)}),bt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ht(e)}),this}st(_t,"BYTES_PER_ELEMENT",4),st(_t.prototype,"BYTES_PER_ELEMENT",4),st(_t.prototype,"byteLength",8),st(_t.prototype,"toString",vt),st(_t.prototype,"toJSON",dt);var wt=$,Et=_t,gt=function(t){return t instanceof wt||t instanceof Et||"object"==typeof t&&null!==t&&"number"==typeof t.re&&"number"==typeof t.im},Tt=1401298464324817e-60;function St(t){return t!=t||t===ot||t===n?"float32":e(t)?t>=-16777215&&t<=16777215?"float32":"float64":t>-Tt&&t<Tt?"float64":"float32"}return function(t){return"number"!=typeof t?gt(t)?"float64"===St(t.re)||"float64"===St(t.im)?"complex128":"complex64":"generic":t!=t||t===ot||t===n?"float32":e(t)?0===t&&i(t)?"float32":t<0?t>=-128?"int8":t>=-32768?"int16":t>=-2147483648?"int32":"float64":t<=255?"uint8":t<=65535?"uint16":t<=4294967295?"uint32":"float64":t>-Tt&&t<Tt?"float64":"float32"}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).minDataType=e();
//# sourceMappingURL=index.js.map
