"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1021,435,4960,7456,685],{70435:function(t,e,n){n.d(e,{config:function(){return i}});var o=n(49080),r=n(21535);let a=()=>({rumId:"ru.music.frontend",project:"music.frontend.desktop",service:"frontend-desktop",platform:"desktop"}),c=()=>({project:"music.frontend.desktop",platform:"desktop"}),i=()=>{var t,e;return{client:"YandexMusicWeb/1.0",dev:{panel:window.IS_DEVTOOLS_ENABLED ?? !1,allowOverwriteExperiments:window.IS_DEVTOOLS_ENABLED ?? !1},logger:{uaDisabled:t=!!r.env.SERVER_UNIFIED_AGENT_DISABLED,uaServerAddress:null!==(e=r.env.SERVER_UNIFIED_AGENT_ADDRESS)&&void 0!==e?e:"http://localhost:12344",errorBooster:{...c(),page:"window.location.pathname",version:r.env.APP_VERSION||"",environment:"production",unhandledRejection:!0,uncaughtException:!0,resourceFails:!0}},oauthCredentials:{host:"https://oauth.yandex.".concat(o.M),clientId:"97fe03033fa34407ac9bcf91d5afed5b"},tvm:{tvmtoolAuthToken:r.env.TVMTOOL_LOCAL_AUTHTOKEN,self:"music_test",destinations:["blackbox"],host:"http://localhost:8001",enabled:!1},rumSettings:{...a(),page:"window.location.pathname",heroElement:"body",version:r.env.APP_VERSION||"",environment:"production"},passportCredentials:{host:"https://passport.yandex.".concat(o.M),origin:"music_desktop"},blackbox:{host:"http://blackbox.envoy.localhost:9080",enabled:!1},payment:{environment:"testing"},i18n:{cookieExpirationDays:365},ynisonConnectionConfig:{ynisonHost:"ynison.music.yandex.ru",redirectorPath:"/redirector.YnisonRedirectService/GetRedirectToYnison",hubConnectioPath:"/ynison_state.YnisonStateService/PutYnisonState",reconnectTimeout:2e3,reconnectAttempts:2}}}},1021:function(t,e,n){n.d(e,{config:function(){return p}});var o=n(31436),r=n(45919),a=n(43845),c=n(65713),i=n(49080),s=n(70435),u=n(34960),f=n(64069),l=n(80685),d=n(21535);let p=()=>{let{LOCAL_PROD_BUILD:t}=d.env,e=t?"https://api.music.qa.yandex.net":"http://music-backend-music-api-gateway.envoy.localhost:9080",n="https://api.music.qa.yandex.".concat(i.M);return(0,o.Z)((0,s.config)(),{resources:{musicExternalApi:{gateway:{prefixUrl:(0,l.s)(e)},externalGateway:{prefixUrl:(0,l.s)(n)},retryPolicyConfig:u.c,defaultTimeout:a.ys,timeouts:a.mZ}},player:{overembed:!1,secretKey:(0,c.S)(),externalDomain:"next.qa.music.yandex.ru",gateway:{prefixUrl:(0,l.s)(n)}},blackbox:{...(0,r.sw)(t)?{host:"http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox"}:{},enabled:!0},tvm:{enabled:(0,r.sw)(t)},dev:{panel:window.IS_DEVTOOLS_ENABLED ?? !1,allowOverwriteExperiments:window.IS_DEVTOOLS_ENABLED ?? !1},oldWebHost:"music.qa.yandex.".concat(i.M),afisha:{clientId:(0,f.$)(),host:"https://widget.afisha.tst.yandex.ru"},features:{nonMusic:!0}})}},34960:function(t,e,n){n.d(e,{c:function(){return o}});let o={statusCodes:{408:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},429:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},500:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},502:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},503:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},504:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},NON_HTTP_ERROR:{retryPolicy:"constant-backoff",attempts:[1e3,1e3]},TIMEOUT:{retryPolicy:"constant-backoff",attempts:[500]}},totalRequestsLimit:3}},64069:function(t,e,n){n.d(e,{$:function(){return i}});var o=n(35188),r=n(3872),a=n(21749);let c={MACOS:"05c45ae8-b869-4ec1-848c-4b314fbadc17",WINDOWS:"0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",WEB:"b200fd55-5a52-4fa2-b5db-d163e986a61d"},i=()=>{switch((0,r.y)((0,o.X)())){case a.B.MACOS:return c.MACOS;case a.B.WINDOWS:return c.WINDOWS}return c.WEB}},80685:function(t,e,n){n.d(e,{s:function(){return r}});var o=n(21535);let r=t=>{if(o.env.NEXT_PUBLIC_USE_BFF){var e;let t=null!==(e=o.env.NEXT_PUBLIC_BFF_HOST)&&void 0!==e?e:"";return"".concat(t,"/api")}return t}},69947:function(t,e,n){n.d(e,{Z:function(){return o}});var o=function(t,e,n){for(var o=-1,r=Object(t),a=n(t),c=a.length;c--;){var i=a[++o];if(!1===e(r[i],i,r))break}return t}},9506:function(t,e,n){n.d(e,{Z:function(){return d}});var o,r,a=n(68064),c=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},i=Math.max,s=n(28207),u=s.Z?function(t,e){return(0,s.Z)(t,"toString",{configurable:!0,enumerable:!1,value:function(){return e},writable:!0})}:a.Z,f=Date.now,l=(o=0,r=0,function(){var t=f(),e=16-(t-r);if(r=t,e>0){if(++o>=800)return arguments[0]}else o=0;return u.apply(void 0,arguments)}),d=function(t,e){var n,o;return l((n=e,o=a.Z,n=i(void 0===n?t.length-1:n,0),function(){for(var e=arguments,r=-1,a=i(e.length-n,0),s=Array(a);++r<a;)s[r]=e[n+r];r=-1;for(var u=Array(n+1);++r<n;)u[r]=e[r];return u[n]=o(s),c(t,this,u)}),t+"")}},68064:function(t,e){e.Z=function(t){return t}},24149:function(t,e,n){var o=n(77163),r=n(2495);e.Z=function(t){return(0,r.Z)(t)&&(0,o.Z)(t)}},31436:function(t,e,n){n.d(e,{Z:function(){return D}});var o,r=n(46334),a=n(10085),c=n(92089),i=function(t,e,n){(void 0===n||(0,c.Z)(t[e],n))&&(void 0!==n||e in t)||(0,a.Z)(t,e,n)},s=n(69947),u=n(52992),f=n(45155),l=n(80190),d=n(46726),p=n(16938),v=n(65856),y=n(24149),b=n(27661),m=n(79627),h=n(51866),Z=n(30014),_=n(85770),E=n(2495),g=Object.prototype,k=Function.prototype.toString,x=g.hasOwnProperty,O=k.call(Object),S=function(t){if(!(0,E.Z)(t)||"[object Object]"!=(0,Z.Z)(t))return!1;var e=(0,_.Z)(t);if(null===e)return!0;var n=x.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&k.call(n)==O},w=n(67109),P=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]},A=n(78141),T=n(42146),I=function(t,e,n,o,r,a,c){var s=P(t,n),Z=P(e,n),_=c.get(Z);if(_){i(t,n,_);return}var E=a?a(s,Z,n+"",t,e,c):void 0,g=void 0===E;if(g){var k=(0,v.Z)(Z),x=!k&&(0,b.Z)(Z),O=!k&&!x&&(0,w.Z)(Z);(E=Z,k||x||O)?(0,v.Z)(s)?E=s:(0,y.Z)(s)?E=(0,l.Z)(s):x?(g=!1,E=(0,u.Z)(Z,!0)):O?(g=!1,E=(0,f.Z)(Z,!0)):E=[]:S(Z)||(0,p.Z)(Z)?(E=s,(0,p.Z)(s))?E=(0,A.Z)(s,(0,T.Z)(s)):(!(0,h.Z)(s)||(0,m.Z)(s))&&(E=(0,d.Z)(Z)):g=!1}g&&(c.set(Z,E),r(E,Z,o,a,c),c.delete(Z)),i(t,n,E)},N=function t(e,n,o,a,c){e!==n&&(0,s.Z)(n,function(s,u){if(c||(c=new r.Z),(0,h.Z)(s))I(e,n,u,o,t,a,c);else{var f=a?a(P(e,u),s,u+"",e,n,c):void 0;void 0===f&&(f=s),i(e,u,f)}},T.Z)},C=n(9506),R=n(61747),D=(o=function(t,e,n){N(t,e,n)},(0,C.Z)(function(t,e){var n=-1,r=e.length,a=r>1?e[r-1]:void 0,c=r>2?e[2]:void 0;for(a=o.length>3&&"function"==typeof a?(r--,a):void 0,c&&(0,R.Z)(e[0],e[1],c)&&(a=r<3?void 0:a,r=1),t=Object(t);++n<r;){var i=e[n];i&&o(t,i,n,a)}return t}))}}]);
