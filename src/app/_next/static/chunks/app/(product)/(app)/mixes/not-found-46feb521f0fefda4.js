(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7384],{43038:function(e,n,t){Promise.resolve().then(t.bind(t,69863)),Promise.resolve().then(t.bind(t,86555)),Promise.resolve().then(t.bind(t,49535)),Promise.resolve().then(t.bind(t,95002)),Promise.resolve().then(t.bind(t,86112)),Promise.resolve().then(t.bind(t,59684)),Promise.resolve().then(t.bind(t,8496)),Promise.resolve().then(t.bind(t,11858)),Promise.resolve().then(t.bind(t,97161)),Promise.resolve().then(t.bind(t,91401)),Promise.resolve().then(t.bind(t,84661)),Promise.resolve().then(t.bind(t,30446)),Promise.resolve().then(t.bind(t,77492)),Promise.resolve().then(t.bind(t,91844)),Promise.resolve().then(t.bind(t,82025)),Promise.resolve().then(t.bind(t,47347)),Promise.resolve().then(t.bind(t,34999)),Promise.resolve().then(t.bind(t,19476)),Promise.resolve().then(t.bind(t,58554)),Promise.resolve().then(t.bind(t,96115)),Promise.resolve().then(t.bind(t,85969)),Promise.resolve().then(t.bind(t,94326)),Promise.resolve().then(t.bind(t,87004)),Promise.resolve().then(t.bind(t,68721)),Promise.resolve().then(t.bind(t,82124)),Promise.resolve().then(t.bind(t,44490)),Promise.resolve().then(t.bind(t,64035)),Promise.resolve().then(t.bind(t,98723)),Promise.resolve().then(t.bind(t,92994)),Promise.resolve().then(t.bind(t,91042)),Promise.resolve().then(t.bind(t,79285)),Promise.resolve().then(t.bind(t,30410)),Promise.resolve().then(t.bind(t,92225)),Promise.resolve().then(t.bind(t,41525)),Promise.resolve().then(t.bind(t,21920)),Promise.resolve().then(t.bind(t,5979)),Promise.resolve().then(t.bind(t,85449)),Promise.resolve().then(t.bind(t,37869)),Promise.resolve().then(t.bind(t,11408)),Promise.resolve().then(t.bind(t,54605)),Promise.resolve().then(t.bind(t,38252)),Promise.resolve().then(t.bind(t,47628)),Promise.resolve().then(t.bind(t,4723)),Promise.resolve().then(t.bind(t,15267)),Promise.resolve().then(t.bind(t,18546)),Promise.resolve().then(t.bind(t,29665)),Promise.resolve().then(t.bind(t,90981)),Promise.resolve().then(t.bind(t,1843)),Promise.resolve().then(t.bind(t,89672)),Promise.resolve().then(t.bind(t,89949)),Promise.resolve().then(t.bind(t,82116)),Promise.resolve().then(t.bind(t,17852)),Promise.resolve().then(t.bind(t,55302)),Promise.resolve().then(t.bind(t,56691)),Promise.resolve().then(t.bind(t,13862)),Promise.resolve().then(t.bind(t,69768)),Promise.resolve().then(t.bind(t,55553)),Promise.resolve().then(t.bind(t,695)),Promise.resolve().then(t.bind(t,76100)),Promise.resolve().then(t.bind(t,86745)),Promise.resolve().then(t.bind(t,7106))},76154:function(e,n,t){"use strict";t.d(n,{mH:function(){return l.Genre},fm:function(){return s},uG:function(){return i}});var o=t(42288);let i=e=>({tag:e.tag,title:e.title,subGenres:(0,o.pj)((e.leaves||[]).map(e=>({tag:e.tag,title:e.title})))}),r=o.V5.model("GenreListItemSubGenreModel",{tag:o.V5.string,title:o.V5.string}),s=o.V5.model("GenreListItemModel",{tag:o.V5.string,title:o.V5.string,subGenres:o.V5.array(r)});var l=t(86555)},86555:function(e,n,t){"use strict";t.d(n,{Genre:function(){return d}});var o=t(9753),i=t(9544),r=t(2570),s=t(3084),l=t(78914),a=t.n(l);let d=(0,i.Pi)(e=>{let{tag:n,title:t,subGenres:i}=e;return(0,o.jsxs)("div",{className:a().root,children:[(0,o.jsx)(s.rU,{className:a().link,href:"/genre/".concat(n),children:(0,o.jsx)(r.Heading,{variant:"h2",size:"m",lineClamp:1,className:a().linkTitle,children:t})}),i.length>0&&(0,o.jsx)("div",{className:a().list,children:i.map(e=>(0,o.jsx)("div",{className:a().item,children:(0,o.jsx)(s.rU,{className:a().link,href:"/genre/".concat(e.tag),children:(0,o.jsx)(r.Caption,{variant:"span",size:"l",lineClamp:1,className:a().linkTitle,children:e.title})})},e.tag))})]})})},60424:function(e,n,t){"use strict";t.d(n,{I7:function(){return m},b4:function(){return u},at:function(){return r}}),t(66414);var o=t(98639),i=t(76873);let r=(e,n)=>((0,i.uK4)().get(i.Xt8),[(0,o.useMemo)(()=>{if(void 0===n)return{};let t=n-17;return{"--average-color-background":e,transform:"translateY(".concat(n>=17?0:t,"px)"),opacity:1}},[n,!1,e]),(0,o.useMemo)(()=>({"--average-color-background":e}),[e])]);var s=t(9753),l=t(9544),a=t(22890),d=t(3084);let c=e=>{let{element:n,scrollTop:t,isMobile:o}=e,i=.4*n.clientHeight;return t+(o?56:72)>=n.offsetTop+i},m=(0,l.Pi)(e=>{let{children:n,scrollElement:t,outerTitle:r="",headerElement:l,headerThreshold:m}=e,[u,h]=(0,o.useState)(r),[v,_]=(0,o.useState)(null),[b,g]=(0,o.useState)(!1),[P,x]=(0,o.useState)(!1),{settings:p}=(0,i.oR4)(),f=p.layout===i.t8m.Mobile;(0,o.useLayoutEffect)(()=>{h(r)},[r]);let N=(0,o.useCallback)(()=>{if(!t)return;let e=null!=m?m:10,n=l?Number(l.offsetTop)-e:e;n<0&&(n=0),x(t.scrollTop>n),(null==v?void 0:v.current)&&g(c({element:null==v?void 0:v.current,scrollTop:t.scrollTop,isMobile:f}))},[t,m,l,v,f]);(0,o.useEffect)(()=>{t&&(null==t?void 0:t.scrollTop)!==0||x(!1)},[t,null==t?void 0:t.scrollTop]),(0,a.v)({onScroll:N,elementRef:t});let j=(0,o.useMemo)(()=>({title:u,setTitle:h,titleElement:v,scrollElement:t,setTitleElement:_,isScrolledTitle:b,isScrolling:P}),[u,b,v,t,P]);return(0,s.jsx)(d.pI.Provider,{value:j,children:n})}),u=e=>{let{children:n,title:t,className:i}=e,{setTitleElement:r,setTitle:l}=(0,o.useContext)(d.pI),a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{(null==a?void 0:a.current)&&r(a),t&&l(t)},[a,t,r,l]),(0,o.useEffect)(()=>()=>{l("")},[l]),(0,s.jsx)("div",{ref:a,className:i,children:n})}},49535:function(e,n,t){"use strict";t.d(n,{GenresNotFoundPage:function(){return r}});var o=t(9753),i=t(23948);let r=()=>(0,o.jsx)(i.T,{})},95002:function(e,n,t){"use strict";t.d(n,{GenresPage:function(){return b}});var o=t(9753),i=t(9544),r=t(74717),s=t(98639),l=t(41055),a=t(2570),d=t(68106),c=t(60424),m=t(76154),u=t(76873),h=t(3084),v=t(69836),_=t.n(v);let b=(0,i.Pi)(e=>{let{navigationId:n}=e,{genres:t}=(0,u.oR4)(),{contentScrollRef:i,setContentScrollRef:v}=(0,u.$Y6)(),b=(0,u.k67)();return((0,s.useEffect)(()=>()=>{t.reset()},[t,n]),t.isNotFound&&(0,r.notFound)(),n&&t.loadingState===u.Gui.IDLE&&(0,s.use)(t.getData(n)),(0,u.NOh)(t.loadingState===u.Gui.RESOLVE),t.loadingState===u.Gui.REJECT)?(0,o.jsx)(d.D,{}):(0,o.jsxs)(c.I7,{scrollElement:i,outerTitle:t.title,children:[(0,o.jsx)(h.h4,{variant:"text",withForwardControl:!1,withBackwardControl:b.canBack,children:(0,o.jsx)(a.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:t.title})}),(0,o.jsx)(l.t,{className:_().root,containerClassName:_().content,ref:v,children:(0,o.jsx)("div",{className:_().list,children:t.items.map(e=>(0,o.jsx)(m.mH,{tag:e.tag,title:e.title,subGenres:e.subGenres},e.tag))})})]})})},23948:function(e,n,t){"use strict";t.d(n,{T:function(){return o.NotFound}});var o=t(8964)},8964:function(e,n,t){"use strict";t.d(n,{NotFound:function(){return v}});var o=t(9753),i=t(60836),r=t(9544),s=t(31014),l=t(39513),a=t(28852),d=t(2570),c=t(76873),m=t(3084),u=t(23067),h=t.n(u);let v=(0,r.Pi)(e=>{let{className:n}=e,{contentRef:t}=(0,c.$Y6)(),r=(0,c.s0h)("/");return(0,c.ZP4)(!0),(0,o.jsxs)("div",{className:(0,i.W)(h().root,{[h().root_desktop]:!t},n),children:[(0,o.jsx)(m.nP,{withBackwardFallback:"/",className:h().navigation,withForwardControl:!1}),(0,o.jsxs)("div",{className:h().content,children:[(0,o.jsx)(a.Icon,{className:h().icon,variant:"musicLogo",size:"xxl"}),(0,o.jsx)(d.Heading,{className:(0,i.W)(h().title,h().important),variant:"h3",size:"xs",children:(0,o.jsx)(s.Z,{id:"page-error.page-does-not-exist"})}),(0,o.jsx)(d.Caption,{className:(0,i.W)(h().text,h().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,o.jsx)(s.Z,{id:"page-error.page-does-not-exist-description"})}),(0,o.jsx)(l.z,{onClick:r,className:h().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsx)(d.Caption,{type:"controls",variant:"span",size:"m",children:(0,o.jsx)(s.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(e,n,t){"use strict";t.d(n,{D:function(){return o.SomethingWentWrong}});var o=t(18723)},18723:function(e,n,t){"use strict";t.d(n,{SomethingWentWrong:function(){return _}});var o=t(9753),i=t(60836),r=t(9544),s=t(98639),l=t(31014),a=t(39513),d=t(28852),c=t(2570),m=t(76873),u=t(3084),h=t(88178),v=t.n(h);let _=(0,r.Pi)(e=>{let{className:n,withBackwardControl:t=!0}=e,r=(0,s.useCallback)(()=>{window.location.href="/"},[]),{contentRef:h}=(0,m.$Y6)();return(0,o.jsxs)("div",{className:(0,i.W)(v().root,n),children:[t&&(0,o.jsx)(u.nP,{withBackwardFallback:"/",className:(0,i.W)(v().navigation,{[v().navigation_desktop]:!h}),withForwardControl:!1}),(0,o.jsxs)("div",{className:(0,i.W)(v().content,{[v().content_shrink]:!t}),children:[(0,o.jsx)(d.Icon,{className:v().icon,variant:"attention",size:"xxl"}),(0,o.jsx)(c.Heading,{className:(0,i.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,o.jsx)(l.Z,{id:"error-messages.something-went-wrong"})}),(0,o.jsxs)(c.Caption,{className:(0,i.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,o.jsx)(l.Z,{id:"page-error.try-to-restart-app"})]}),(0,o.jsx)(a.z,{onClick:r,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsxs)(c.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,o.jsx)(l.Z,{id:"page-error.restart-app-button"})]})})]})]})})},78914:function(e){e.exports={root:"Genre_root__80dlk",link:"Genre_link__Wewaq",linkTitle:"Genre_linkTitle__ORAsw",list:"Genre_list__C2Pxf"}},69836:function(e){e.exports={root:"GenresPage_root__LhP_S",shimmerTitle:"GenresPage_shimmerTitle__4j8uH",content:"GenresPage_content__yhKrQ",list:"GenresPage_list__l2Cuc"}},23067:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(e){e.O(0,[2725,6020,2365,589,616,2498,5453,7873,3617,3084,2890,1055,2171,361,1744],function(){return e(e.s=43038)}),_N_E=e.O()}]);