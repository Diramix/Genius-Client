(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2286],{12286:function(e,t,r){"use strict";r.r(t);var o=r(8759),n=r(35338),s=r(99616),i=r(92318),l=r(89788),a=r(5674),u=r(37500),c=r.n(u),d=r(21535);t.default=e=>{let{children:t}=e,{state:r,toggleTrue:u}=(0,i.O)(!1),{state:h,toggleTrue:p}=(0,i.O)(!1),f=(0,s.useMemo)(()=>{let e=new l.JC;return(0,a.NK)(e.get(a.BU.Theme),(0,a.Q$)())},[]),w=(0,s.useCallback)(e=>{let t=d.env.ASSET_PREFIX||"";return"".concat(t,"/video/splash_screen/splash_screen_").concat(f,".").concat(e)},[f]),_=(0,s.useMemo)(()=>({isVisible:!r}),[r]);return(0,o.jsxs)(a.IP.Provider,{value:_,children:[!r&&(0,o.jsx)("div",{className:(0,n.W)(c().root,c()["root_".concat(f)],{[c().root_hidden]:h}),onAnimationEnd:u,children:(0,o.jsxs)("video",{className:c().video,autoPlay:!0,muted:!0,playsInline:!0,onEnded:p,onError:u,children:[(0,o.jsx)("source",{src:w("webm"),type:"video/webm"}),(0,o.jsx)("source",{src:w("mp4"),type:"video/mp4"})]})}),t]})}},37500:function(e){e.exports={root:"SplashScreen_root__3jzFk",root_dark:"SplashScreen_root_dark__0OcZj",root_light:"SplashScreen_root_light__XAJTf",root_hidden:"SplashScreen_root_hidden__BO7tp","fade-out":"SplashScreen_fade-out__uNMY4",video:"SplashScreen_video__wFSy5"}},89788:function(e,t,r){"use strict";r.d(t,{NS:function(){return s},JC:function(){return l},$V:function(){return d},tg:function(){return c}}),r(94739);var o=r(26424);function n(e){if(!e)return null;try{return JSON.parse(e)}catch(e){return console.error(e),null}}class s{get(e,t=!0){let r=(0,o.U2)(e);return t?n(r)?.value??null:r||null}set(e,t,r,n=!0){try{let s=n?JSON.stringify({value:t}):t;(0,o.t8)(e,s,r)}catch(e){console.error(e)}}has(e){return!!this.get(e)}remove(e){(0,o.Od)(e)}}let i=e=>864e5*e;class l{get(e){if("undefined"!=typeof window){let t=window.localStorage.getItem(e)||void 0,r=n(t);if(!r)return null;let o=r?.value??null;return r?.expires&&Date.now()>new Date(r.expires).getTime()?(this.remove(e),null):o}return null}set(e,t,r){if("number"==typeof r?.expires){let e=new Date;e.setMilliseconds(e.getMilliseconds()+i(r.expires)),r.expires=e}"undefined"!=typeof window&&window.localStorage.setItem(e,JSON.stringify({value:t,...r}))}has(e){return!!this.get(e)}remove(e){"undefined"!=typeof window&&window.localStorage.removeItem(e)}}var a=r(63278);class u extends a.y{name="Storage Exception";constructor(e,t,{code:r="E_STORAGE",...o}={}){super(`There is no ${t} storage on the ${e} platform`,{code:r,...o}),Object.setPrototypeOf(this,u.prototype)}}class c{platform="";type="";constructor(e,t){this.platform=e,this.type=t}get(e){throw new u(this.platform,this.type)}set(e,t,r){throw new u(this.platform,this.type)}has(e){throw new u(this.platform,this.type)}remove(e){throw new u(this.platform,this.type)}}class d{get(e){let t=window.sessionStorage.getItem(e)??void 0;return n(t)?.value??null}set(e,t){window.sessionStorage.setItem(e,JSON.stringify({value:t}))}has(e){return!!this.get(e)}remove(e){window.sessionStorage.removeItem(e)}}}}]);