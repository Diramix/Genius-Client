"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7872],{77872:function(e,t,r){r.d(t,{createClientContainer:function(){return A}});var i=r(45919),n=r(9617),a=r(23645),o=r(45113),s=r(31256),l=r(40193),g=r(40350),c=r(66337),u=r(8655),p=r(97230),m=r(49080),d=r(38885);class f extends d.z{getRedirectUri(){let e="".concat(this.pathname).concat(this.searchParams?"?".concat(this.searchParams):"");return encodeURIComponent("https://".concat(this.host).concat(e))}get authorizationUrl(){if(!this.host||!this.tld)return;let{passportCredentials:{host:e,origin:t}}=this.config,r=(0,i.zJ)(e,this.tld,m.M),n=this.getRedirectUri();return"".concat(r,"/auth?origin=").concat(t,"&retpath=").concat(n,"&language=").concat(this.language)}get token(){}constructor(e,t,r){super(e,t),(0,u._)(this,"language",void 0),this.language=r}}class h extends f{setPassportLoginCookieObserver(){setInterval(this.checkPassportLoginCookieChange.bind(this),5e3)}checkPassportLoginCookieChange(){this.passportLogin!==this.passportLoginCached&&(this.passportLoginCached=this.passportLogin,this.reloadPage())}reloadPage(){window.location.reload()}redirectToAuthorizationUrl(){this.authorizationUrl&&(window.location.href=this.authorizationUrl)}get passportLogin(){return this.storage.get(p.B.YandexLogin,!1)||void 0}get hasAuthorizationCredentials(){return!!this.storage.get(p.B.YandexLogin,!1)}async check(){}constructor(e,t,r){super(e,t,r),(0,u._)(this,"passportLoginCached",void 0),this.passportLoginCached=this.passportLogin,this.setPassportLoginCookieObserver()}}var U=r(81541);class x{onChangeLanguage(e){if("string"==typeof this.token&&this.token.length>0){let t="https://yandex.".concat(this.tld,"/portal/set/lang/"),r=encodeURIComponent(window.location.href),i="".concat(t,"?intl=").concat(e,"&retpath=").concat(r,"&sk=").concat(this.token);window.location.assign(i)}else window.location.reload()}constructor(e,t){(0,u._)(this,"tld",void 0),(0,u._)(this,"token",void 0),this.tld=e,this.token=t}}var w=r(8234),L=r(2188),R=r(5066),y=r(42461),v=r(20958);let E=e=>{if(e&&"object"==typeof e&&"type"in e&&"captcha"===e.type){let{captcha:t}=e;if(t&&t["captcha-page"])return!0}return!1},k=e=>{let t;try{let r=e.map(e=>{let t=new URL(e);return"".concat(t.protocol).concat(t.hostname.split(".").slice(-2).join("."))});t=r.every(e=>e===r[0])}catch(e){t=!1}return t},z=/^application\/json(;\s?charset=\S+)?$/;class S{async afterResponse(e){try{if(!e.headers["content-range"]&&e.headers["content-type"]&&z.test(e.headers["content-type"])){let t=await e.clone().json();if(E(t)){let{captcha:e}=t;window.location.replace(e["captcha-page"])}}}catch(e){e instanceof Error&&this.logger.error(e)}return e}beforeRequest(e){let t=window.location.href;k([t,e.url])&&(e.headers.set("X-Requested-With","XMLHttpRequest"),e.headers.set("X-Retpath-Y",t))}get afterResponseHook(){return this.afterResponse.bind(this)}get beforeRequestHook(){return this.beforeRequest.bind(this)}constructor(e){(0,u._)(this,"logger",void 0),this.logger=e}}var M=r(36648);async function A(e){let{tld:t,env:r,serverDetectedLocale:u,changeLanguageToken:d}=e,f=(0,M.n)(await (0,U.i)(r));return new n.s1().registerMany({[v.U5]:(0,n.ri)(()=>f),[v.Hz]:(0,n.ri)(()=>new y.E),[v.P0]:(0,n.ri)(()=>new s.j({maxLogLevel:o.B$.DEBUG,secureFields:R.B,disableLogToConsole:!0})),[v.DR]:(0,n.ri)(()=>new((0,L.c)(s.j))({maxLogLevel:o.B$.DEBUG,secureFields:R.B,disableLogToConsole:!0})),[v.V0]:(0,n.ri)(()=>new g.NS),[v.Xt]:(0,n.ri)(()=>new g.NS),[v.ce]:(0,n.ri)(()=>new g.JC),[v.Ar]:(0,n.ri)(()=>new g.$V),[v.SL]:(0,n.ri)(e=>{let r=e.get(v.V0),i=e.get(v.P0);return new w.h({serverDetectedLocale:u,logger:i,enableLanguageChanging:"on"===r.get(p.B.EnableChangingLanguage),changeLanguageHandler:new x(t,d),storage:{get:()=>r.get(p.B.SavedUserLanguage,!1),set(e){r.set(p.B.SavedUserLanguage,e,{path:"/",domain:"".concat("yandex",".").concat(t)},!1)}}})})}).registerMany({[v.pI]:(0,n.d5)(e=>function(){var t,r,i,n,o,s;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},g=e.get(v.P0),{resources:{musicExternalApi:c}}=e.get(v.U5),u=e.get(v.Hz),p=new R.D(g,u),m=new S(g);return l.timeout=c.defaultTimeout,l.hooks={afterResponse:[m.afterResponseHook,...(null==l?void 0:null===(t=l.hooks)||void 0===t?void 0:t.afterResponse)||[]],afterTimeout:[p.afterTimeoutHook,...(null==l?void 0:null===(r=l.hooks)||void 0===r?void 0:r.afterTimeout)||[]],beforeError:[p.beforeErrorHook,...(null==l?void 0:null===(i=l.hooks)||void 0===i?void 0:i.beforeError)||[]],beforeRequest:[m.beforeRequestHook,...(null==l?void 0:null===(n=l.hooks)||void 0===n?void 0:n.beforeRequest)||[]],beforeRetry:[p.beforeRetryHook,...(null==l?void 0:null===(o=l.hooks)||void 0===o?void 0:o.beforeRetry)||[]],onRequestDone:[...(null==l?void 0:null===(s=l.hooks)||void 0===s?void 0:s.onRequestDone)||[]]},new a.w(l)}),[v.Dw]:(0,n.d5)(e=>function(){var t,r,i,n,o,s;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},g=e.get(v.P0),{resources:{musicExternalApi:c}}=e.get(v.U5),u=e.get(v.Hz),p=new R.D(g,u);return l.timeout=c.defaultTimeout,l.hooks={afterResponse:[...(null==l?void 0:null===(t=l.hooks)||void 0===t?void 0:t.afterResponse)||[]],afterTimeout:[p.afterTimeoutHook,...(null==l?void 0:null===(r=l.hooks)||void 0===r?void 0:r.afterTimeout)||[]],beforeError:[p.beforeErrorHook,...(null==l?void 0:null===(i=l.hooks)||void 0===i?void 0:i.beforeError)||[]],beforeRequest:[...(null==l?void 0:null===(n=l.hooks)||void 0===n?void 0:n.beforeRequest)||[]],beforeRetry:[p.beforeRetryHook,...(null==l?void 0:null===(o=l.hooks)||void 0===o?void 0:o.beforeRetry)||[]],onRequestDone:[...(null==l?void 0:null===(s=l.hooks)||void 0===s?void 0:s.onRequestDone)||[]]},new a.w(l)}),[v.xi]:(0,n.ri)(e=>new h(e.get(v.Xt),e.get(v.U5),e.get(v.SL).getLanguage()))}).registerMany({[v.c5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Rc(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.accountResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.Eu]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Vn(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.usersResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.YR]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o,landing:s}=r.musicExternalApi,g=e.get(v.SL).getLanguage(),u=e.get(v.pI)({credentials:"include"});return new l.Fr(u,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},...s?{landing:{...s,prefixUrl:(0,i.zJ)(s.prefixUrl,t,m.M)}}:{},retryPolicyConfig:a,timeouts:n.landingResource,params:{common:{client:(0,c.$)(),language:g}}})}),[v.cG]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.pi(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.landing3Resource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.qV]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.SZ(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.landingResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.OT]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.TA(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.libraryResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.g5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.HZ(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.tracksResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.q2]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.O3(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.topResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.n]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.cn(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.artistsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.Ci]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.tz(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.slidesResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.w5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Ud(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.rotorResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.Rt]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.xW(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.searchResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.zQ]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Po(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.searchResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.lk]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Bl(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.playlistResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.SR]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.m3(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.playlistsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.vl]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.mD(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.pinResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.ZO]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.kF(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.metatagsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.jb]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.cp(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.tagResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.dk]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.l(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.feedResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.X8]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.IW(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.pinsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.O_]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.E6(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.musicHistoryResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.EN]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Y7(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.dynamicPagesResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.sD]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.UN(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.chartResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.m_]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.VL(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.clipsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.Ve]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.Ai(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.lyricViewsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.o]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.hP(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.nonMusicResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.uR]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.BS(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.donationResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.aH]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.hd(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.streamsResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.yO]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.kC(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.loaderResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.qs]:(0,n.ri)(e=>{let{resources:t}=e.get(v.U5),{timeouts:r,retryPolicyConfig:i,gateway:n}=t.musicExternalApi,a=e.get(v.SL).getLanguage(),o=e.get(v.Dw)({credentials:"same-origin"});return new l.Gu(o,{gateway:{...n,prefixUrl:""},retryPolicyConfig:i,timeouts:r.prefixlessResource,params:{common:{client:(0,c.$)(),language:a}}})}),[v.cl]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.TH(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.filtersResource,params:{common:{client:(0,c.$)(),language:s}}})}),[v.Mq]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:n,retryPolicyConfig:a,externalGateway:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),g=e.get(v.pI)({credentials:"include"});return new l.mC(g,{gateway:{...o,prefixUrl:(0,i.zJ)(o.prefixUrl,t,m.M)},retryPolicyConfig:a,timeouts:n.offersResource,params:{common:{client:(0,c.$)(),language:s}}})})})}}}]);