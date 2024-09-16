"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8261,435,4960,7456,685],{70435:function(t,n,e){e.d(n,{config:function(){return i}});var o=e(49080),r=e(21535);let c=()=>({rumId:"ru.music.frontend",project:"music.frontend.desktop",service:"frontend-desktop",platform:"desktop"}),a=()=>({project:"music.frontend.desktop",platform:"desktop"}),i=()=>{var t,n;return{client:"YandexMusicWeb/1.0",dev:{panel:window.IS_DEVTOOLS_ENABLED},logger:{uaDisabled:t=!!r.env.SERVER_UNIFIED_AGENT_DISABLED,uaServerAddress:null!==(n=r.env.SERVER_UNIFIED_AGENT_ADDRESS)&&void 0!==n?n:"http://localhost:12344",errorBooster:{...a(),page:"window.location.pathname",version:r.env.APP_VERSION||"",environment:"production",unhandledRejection:!0,uncaughtException:!0,resourceFails:!0}},oauthCredentials:{host:"https://oauth.yandex.".concat(o.M),clientId:"97fe03033fa34407ac9bcf91d5afed5b"},tvm:{tvmtoolAuthToken:r.env.TVMTOOL_LOCAL_AUTHTOKEN,self:"music_test",destinations:["blackbox"],host:"http://localhost:8001",enabled:!1},rumSettings:{...c(),page:"window.location.pathname",heroElement:"body",version:r.env.APP_VERSION||"",environment:"production"},passportCredentials:{host:"https://passport.yandex.".concat(o.M),origin:"music_desktop"},blackbox:{host:"http://blackbox.envoy.localhost:9080",enabled:!1}}}},34960:function(t,n,e){e.d(n,{c:function(){return o}});let o={statusCodes:{408:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},429:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},500:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},502:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},503:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},504:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},NON_HTTP_ERROR:{retryPolicy:"constant-backoff",attempts:[1e3,1e3]},TIMEOUT:{retryPolicy:"constant-backoff",attempts:[500]}},totalRequestsLimit:3}},64069:function(t,n,e){e.d(n,{$:function(){return i}});var o=e(35188),r=e(3872),c=e(21749);let a={MACOS:"05c45ae8-b869-4ec1-848c-4b314fbadc17",WINDOWS:"0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",WEB:"b200fd55-5a52-4fa2-b5db-d163e986a61d"},i=()=>{switch((0,r.y)((0,o.X)())){case c.B.MACOS:return a.MACOS;case c.B.WINDOWS:return a.WINDOWS}return a.WEB}},80685:function(t,n,e){e.d(n,{s:function(){return r}});var o=e(21535);let r=t=>{if(o.env.NEXT_PUBLIC_USE_BFF){var n;let t=null!==(n=o.env.NEXT_PUBLIC_BFF_HOST)&&void 0!==n?n:"";return"".concat(t,"/api")}return t}},69947:function(t,n,e){e.d(n,{Z:function(){return o}});var o=function(t,n,e){for(var o=-1,r=Object(t),c=e(t),a=c.length;a--;){var i=c[++o];if(!1===n(r[i],i,r))break}return t}},61747:function(t,n,e){var o=e(92089),r=e(77163),c=e(62503),a=e(51866);n.Z=function(t,n,e){if(!(0,a.Z)(e))return!1;var i=typeof n;return("number"==i?!!((0,r.Z)(e)&&(0,c.Z)(n,e.length)):"string"==i&&n in e)&&(0,o.Z)(e[n],t)}},68064:function(t,n){n.Z=function(t){return t}},16147:function(t,n,e){e.d(n,{Z:function(){return q}});var o,r,c,a,i,u,f,s=e(46334),l=e(10085),d=e(92089),v=function(t,n,e){(void 0===e||(0,d.Z)(t[n],e))&&(void 0!==e||n in t)||(0,l.Z)(t,n,e)},p=e(69947),b=e(52992),Z=e(45155),h=e(80190),y=e(46726),m=e(16938),_=e(65856),E=e(77163),k=e(2495),O=e(27661),g=e(79627),S=e(51866),N=e(30014),P=e(85770),A=Object.prototype,I=Function.prototype.toString,T=A.hasOwnProperty,w=I.call(Object),R=function(t){if(!(0,k.Z)(t)||"[object Object]"!=(0,N.Z)(t))return!1;var n=(0,P.Z)(t);if(null===n)return!0;var e=T.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&I.call(e)==w},C=e(67109),D=function(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]},B=e(78141),j=e(42146),M=function(t,n,e,o,r,c,a){var i=D(t,e),u=D(n,e),f=a.get(u);if(f){v(t,e,f);return}var s=c?c(i,u,e+"",t,n,a):void 0,l=void 0===s;if(l){var d=(0,_.Z)(u),p=!d&&(0,O.Z)(u),N=!d&&!p&&(0,C.Z)(u);(s=u,d||p||N)?(0,_.Z)(i)?s=i:(0,k.Z)(i)&&(0,E.Z)(i)?s=(0,h.Z)(i):p?(l=!1,s=(0,b.Z)(u,!0)):N?(l=!1,s=(0,Z.Z)(u,!0)):s=[]:R(u)||(0,m.Z)(u)?(s=i,(0,m.Z)(i))?s=(0,B.Z)(i,(0,j.Z)(i)):(!(0,S.Z)(i)||(0,g.Z)(i))&&(s=(0,y.Z)(u)):l=!1}l&&(a.set(u,s),r(s,u,o,c,a),a.delete(u)),v(t,e,s)},W=function t(n,e,o,r,c){n!==e&&(0,p.Z)(e,function(a,i){if(c||(c=new s.Z),(0,S.Z)(a))M(n,e,i,o,t,r,c);else{var u=r?r(D(n,i),a,i+"",n,e,c):void 0;void 0===u&&(u=a),v(n,i,u)}},j.Z)},x=e(68064),F=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)},L=Math.max,U=e(28207),V=U.Z?function(t,n){return(0,U.Z)(t,"toString",{configurable:!0,enumerable:!1,value:function(){return n},writable:!0})}:x.Z,H=Date.now,X=(i=0,u=0,function(){var t=H(),n=16-(t-u);if(u=t,n>0){if(++i>=800)return arguments[0]}else i=0;return V.apply(void 0,arguments)}),G=e(61747),q=(f=function(t,n,e){W(t,n,e)},o=function(t,n){var e=-1,o=n.length,r=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(r=f.length>3&&"function"==typeof r?(o--,r):void 0,c&&(0,G.Z)(n[0],n[1],c)&&(r=o<3?void 0:r,o=1),t=Object(t);++e<o;){var a=n[e];a&&f(t,a,e,r)}return t},X((c=r,a=x.Z,c=L(void 0===c?o.length-1:c,0),function(){for(var t=arguments,n=-1,e=L(t.length-c,0),r=Array(e);++n<e;)r[n]=t[c+n];n=-1;for(var i=Array(c+1);++n<c;)i[n]=t[n];return i[c]=a(r),F(o,this,i)}),o+""))}}]);
