(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9813],{62221:function(e,t,i){Promise.resolve().then(i.bind(i,38464))},38464:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return C}});var n=i(95660),s=i(97667),r=i(39535),a=i(44744),o=i(71859),l=i(36621),c=i(71037),u=i(64275),d=i(42255),_=i(93596),m=i(98836),x=i(30476),g=i(20794),h=i(96235),N=i(12051),v=i.n(N);let p=(0,a.Pi)(()=>{let{mixes:e}=(0,g.oR4)(),{contentScrollRef:t,setContentScrollRef:i}=(0,g.$Y6)(),r=(0,g.k67)(),{formatMessage:a}=(0,l.Z)();return(e.isNotFound&&(0,s.notFound)(),e.loadingState===g.Gui.IDLE&&(0,o.use)(e.getMixes(!0)),(0,g.NOh)(e.loadingState===g.Gui.RESOLVE),e.loadingState===g.Gui.REJECT)?(0,n.jsx)(m.D,{}):(0,n.jsxs)(x.I7,{scrollElement:t,outerTitle:a({id:"entity-names.mixes"}),children:[(0,n.jsx)(h.h4,{variant:"text",withForwardControl:!1,withBackwardControl:r.canBack,children:(0,n.jsx)(d.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:(0,n.jsx)(c.Z,{id:"entity-names.mixes"})})}),(0,n.jsx)(u.t,{ref:i,className:v().root,containerClassName:v().scrollableContainer,children:(0,n.jsxs)("div",{className:v().container,children:[(0,n.jsx)(_.RB,{isShimmerVisible:e.isLoading,isShimmerActive:!0,mixes:e.items,shimmerCount:10}),(0,n.jsx)(h.$_,{className:v().footer})]})})]})});var C=()=>{let e=(0,s.useSearchParams)().get("navigationId");return e?(0,n.jsx)(r.rx,{navigationId:e}):(0,n.jsx)(p,{})}},99565:function(e,t,i){"use strict";i.d(t,{mH:function(){return o.Genre},fm:function(){return a},uG:function(){return s}});var n=i(97898);let s=e=>({tag:e.tag,title:e.title,subGenres:(0,n.pj)((e.leaves||[]).map(e=>({tag:e.tag,title:e.title})))}),r=n.V5.model("GenreListItemSubGenreModel",{tag:n.V5.string,title:n.V5.string}),a=n.V5.model("GenreListItemModel",{tag:n.V5.string,title:n.V5.string,subGenres:n.V5.array(r)});var o=i(96194)},96194:function(e,t,i){"use strict";i.d(t,{Genre:function(){return c}});var n=i(95660),s=i(44744),r=i(42255),a=i(96235),o=i(60396),l=i.n(o);let c=(0,s.Pi)(e=>{let{tag:t,title:i,subGenres:s}=e;return(0,n.jsxs)("div",{className:l().root,children:[(0,n.jsx)(a.rU,{className:l().link,href:"/genre/".concat(t),children:(0,n.jsx)(r.Heading,{variant:"h2",size:"m",lineClamp:1,className:l().linkTitle,children:i})}),s.length>0&&(0,n.jsx)("div",{className:l().list,children:s.map(e=>(0,n.jsx)("div",{className:l().item,children:(0,n.jsx)(a.rU,{className:l().link,href:"/genre/".concat(e.tag),children:(0,n.jsx)(r.Caption,{variant:"span",size:"l",lineClamp:1,className:l().linkTitle,children:e.title})})},e.tag))})]})})},90535:function(e,t,i){"use strict";i.d(t,{GX:function(){return o.MixCard},zn:function(){return a},Fh:function(){return s}});var n=i(97898);let s=e=>({id:e.id,title:e.title,weblink:e.action.weblink,covers:(0,n.pj)(e.covers||[]),imagesLayoutType:e.style.imagesLayoutType});var r=i(65628);let a=n.V5.model("MixItem",{id:n.V5.string,title:n.V5.string,weblink:n.V5.string,covers:n.V5.maybe(n.V5.array(n.V5.string)),imagesLayoutType:n.V5.enumeration(Object.values(r.n))});var o=i(8263)},8263:function(e,t,i){"use strict";i.d(t,{MixCard:function(){return x}});var n=i(95660),s=i(23974),r=i(44744),a=i(9883),o=i(65628),l=i(28227),c=i(67061),u=i(42255),d=i(96235),_=i(78048),m=i.n(_);let x=(0,r.Pi)(e=>{let{className:t,title:i,weblink:r,covers:_=[],coverSize:x=100,imagesLayoutType:g,headingVariant:h="h3"}=e;return(0,n.jsx)(d.rU,{href:r,...(0,a.BA)(a.FK.mix.MIX_CARD),children:(0,n.jsxs)(c.Paper,{className:(0,s.W)(m().root,t),radius:"l",children:[(0,n.jsx)("div",{className:m().header,children:(0,n.jsx)(u.Heading,{variant:h,size:"xs",weight:"bold",className:m().title,lineClamp:2,...(0,a.BA)(a.FK.mix.MIX_CARD_HEADER),children:i})}),(0,n.jsxs)("div",{className:(0,s.W)(m().covers,{[m().covers_radial]:g===o.n.RADIAL,[m().covers_stack]:g===o.n.STACK}),...(0,a.BA)(a.FK.mix.MIX_CARD_COVERS),children:[(0,n.jsx)(l.Image,{src:_[2],withAvatarReplace:!0,fit:"contain",className:m().cover,size:x,...(0,a.BA)(a.FK.mix.MIX_CARD_COVER_IMAGE_3)}),(0,n.jsx)(l.Image,{src:_[1],withAvatarReplace:!0,fit:"contain",className:m().cover,size:x,...(0,a.BA)(a.FK.mix.MIX_CARD_COVER_IMAGE_2)}),(0,n.jsx)(l.Image,{src:_[0],withAvatarReplace:!0,fit:"contain",className:m().cover,size:x,...(0,a.BA)(a.FK.mix.MIX_CARD_COVER_IMAGE_1)})]})]})})})},39535:function(e,t,i){"use strict";i.d(t,{rx:function(){return l.GenresPage},EU:function(){return o}});var n=i(97898),s=i(23874),r=i(99565),a=i(20794);let o=n.V5.model("GenresPageModel",{title:n.V5.maybeNull(n.V5.string),items:n.V5.array(r.fm),loadingState:n.V5.enumeration(Object.values(a.Gui)),errorStatusCode:n.V5.maybeNull(n.V5.number)}).views(e=>({get isLoading(){return e.loadingState===a.Gui.IDLE||e.loadingState===a.Gui.PENDING},get isNotFound(){let t=e.loadingState===a.Gui.RESOLVE&&0===e.items.length;return e.errorStatusCode===s.CN.NOT_FOUND||t}})).actions(e=>({getData:(0,n.ls)(function*(t){let{landing3Resource:i,modelActionsLogger:o}=(0,n.dU)(e);if(e.loadingState!==a.Gui.PENDING)try{e.loadingState=a.Gui.PENDING;let o=(yield i.getMetatags({})).trees.find(e=>e.navigationId===t);if(!o){e.errorStatusCode=s.CN.NOT_FOUND;return}e.title=o.title,e.items=(0,n.pj)(o.leaves.map(r.uG)),e.loadingState!==a.Gui.IDLE&&(e.loadingState=a.Gui.RESOLVE)}catch(t){o.error(t),t instanceof s.du&&(t.statusCode===s.CN.NOT_FOUND||t.statusCode===s.CN.BAD_REQUEST)&&(e.errorStatusCode=s.CN.NOT_FOUND),e.loadingState!==a.Gui.IDLE&&(e.loadingState=a.Gui.REJECT)}}),reset(){e.loadingState=a.Gui.IDLE,e.title=null,e.items=(0,n.pj)([]),e.errorStatusCode=null}}));i(83511);var l=i(65190)},83511:function(e,t,i){"use strict";i.d(t,{GenresNotFoundPage:function(){return r}});var n=i(95660),s=i(33558);let r=()=>(0,n.jsx)(s.T,{})},65190:function(e,t,i){"use strict";i.d(t,{GenresPage:function(){return h}});var n=i(95660),s=i(44744),r=i(97667),a=i(71859),o=i(64275),l=i(42255),c=i(98836),u=i(30476),d=i(99565),_=i(20794),m=i(96235),x=i(12997),g=i.n(x);let h=(0,s.Pi)(e=>{let{navigationId:t}=e,{genres:i}=(0,_.oR4)(),{contentScrollRef:s,setContentScrollRef:x}=(0,_.$Y6)(),h=(0,_.k67)();return((0,a.useEffect)(()=>()=>{i.reset()},[i,t]),i.isNotFound&&(0,r.notFound)(),t&&i.loadingState===_.Gui.IDLE&&(0,a.use)(i.getData(t)),(0,_.NOh)(i.loadingState===_.Gui.RESOLVE),i.loadingState===_.Gui.REJECT)?(0,n.jsx)(c.D,{}):(0,n.jsxs)(u.I7,{scrollElement:s,outerTitle:i.title,children:[(0,n.jsx)(m.h4,{variant:"text",withForwardControl:!1,withBackwardControl:h.canBack,children:(0,n.jsx)(l.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:i.title})}),(0,n.jsx)(o.t,{className:g().root,containerClassName:g().content,ref:x,children:(0,n.jsx)("div",{className:g().list,children:i.items.map(e=>(0,n.jsx)(d.mH,{tag:e.tag,title:e.title,subGenres:e.subGenres},e.tag))})})]})})},93596:function(e,t,i){"use strict";i.d(t,{JG:function(){return u.Mixes},RB:function(){return d.MixesGrid},ZP:function(){return c}});var n=i(97898),s=i(23874),r=i(79153),a=i(90535),o=i(20794);let l=e=>({items:(0,n.pj)(e.items.map(e=>(0,a.Fh)(e.data)))}),c=n.V5.model("Mixes",{loadingState:n.V5.enumeration(Object.values(o.Gui)),items:n.V5.array(a.zn),errorStatusCode:n.V5.maybeNull(n.V5.number)}).actions(e=>({getMixes:(0,n.ls)(function*(t){let{landingResource:i,modelActionsLogger:a}=(0,n.dU)(e);if(e.loadingState!==o.Gui.PENDING)try{e.loadingState=o.Gui.PENDING;let n=yield i.getBlock({uri:"/landing/block/mixes",fullList:t},r.g.MIXES);e.items=l(n).items,e.loadingState=o.Gui.RESOLVE}catch(t){a.error(t),t instanceof s.du&&(t.statusCode===s.CN.NOT_FOUND||t.statusCode===s.CN.BAD_REQUEST)&&(e.errorStatusCode=s.CN.NOT_FOUND),e.loadingState!==o.Gui.IDLE&&(e.loadingState=o.Gui.REJECT)}})})).views(e=>({get isLoading(){return e.loadingState===o.Gui.IDLE||e.loadingState===o.Gui.PENDING},get isRejected(){return e.loadingState===o.Gui.REJECT},get isNotFound(){let t=e.loadingState===o.Gui.RESOLVE&&0===e.items.length;return e.errorStatusCode===s.CN.NOT_FOUND||t}}));var u=i(67022),d=i(78228)},67022:function(e,t,i){"use strict";i.d(t,{Mixes:function(){return g}});var n=i(95660),s=i(44744),r=i(71859),a=i(20794),o=i(36621),l=i(63778),c=i(90535),u=i(96235),d=i(38080),_=i.n(d);let m=(0,s.Pi)(e=>{let{isShimmerVisible:t,isShimmerActive:i,mixes:s}=e,{formatMessage:a}=(0,o.Z)(),d=(0,r.useMemo)(()=>t?(0,u.Cl)({isActive:i,withInfo:!1}):s.map(e=>(0,n.jsx)(c.GX,{title:e.title,weblink:e.weblink,covers:e.covers,coverSize:80,imagesLayoutType:e.imagesLayoutType},e.id)),[i,t,s]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.ti,{className:_().carouselHeader,title:a({id:"entity-names.mixes"}),titleSize:"xs",viewAllActionLink:"/mixes"}),(0,n.jsx)(l.l,{className:_().carouselBlock,itemClassName:_().mixItem,children:d})]})});var x=i(78228);let g=(0,s.Pi)(()=>{let{settings:e,search:t}=(0,a.oR4)(),i=e.layout===a.t8m.Mobile;return(t.mixes.loadingState===a.Gui.IDLE&&(0,r.use)(t.mixes.getMixes(!1)),i)?(0,n.jsx)(m,{isShimmerVisible:t.mixes.isLoading||t.mixes.isRejected,isShimmerActive:t.mixes.isLoading,mixes:t.mixes.items}):(0,n.jsx)(x.MixesGrid,{isShimmerVisible:t.mixes.isLoading||t.mixes.isRejected,isShimmerActive:t.mixes.isLoading,mixes:t.mixes.items,withTitle:!0})})},78228:function(e,t,i){"use strict";i.d(t,{MixesGrid:function(){return m}});var n=i(95660),s=i(44744),r=i(71859),a=i(71037),o=i(9883),l=i(42255),c=i(90535),u=i(96235),d=i(29986),_=i.n(d);let m=(0,s.Pi)(e=>{let{isShimmerVisible:t,isShimmerActive:i,withTitle:s,mixes:d,shimmerCount:m=5}=e,x=(0,r.useMemo)(()=>t?(0,n.jsx)(u.Wm,{isActive:i,round:!1,centered:!1,withInfo:!1,count:m}):d.map(e=>(0,n.jsx)(c.GX,{title:e.title,weblink:e.weblink,covers:e.covers,imagesLayoutType:e.imagesLayoutType},e.id)),[i,t,d,m]);return(0,n.jsxs)("div",{...(0,o.BA)(o.QM.mixes.MIXES_GRID_CONTAINER),children:[s&&(0,n.jsx)(l.Heading,{className:_().mixesTitle,size:"s",weight:"bold",variant:"h3",...(0,o.BA)(o.QM.mixes.MIXES_GRID_HEADER),children:(0,n.jsx)(a.Z,{id:"entity-names.mixes"})}),(0,n.jsx)("div",{className:_().mixesGrid,children:x})]})})},33558:function(e,t,i){"use strict";i.d(t,{T:function(){return n.NotFound}});var n=i(74836)},74836:function(e,t,i){"use strict";i.d(t,{NotFound:function(){return x}});var n=i(95660),s=i(23974),r=i(44744),a=i(71037),o=i(93062),l=i(15706),c=i(42255),u=i(20794),d=i(96235),_=i(18552),m=i.n(_);let x=(0,r.Pi)(e=>{let{className:t}=e,{contentRef:i}=(0,u.$Y6)(),r=(0,u.s0h)("/");return(0,u.ZP4)(!0),(0,n.jsxs)("div",{className:(0,s.W)(m().root,{[m().root_desktop]:!i},t),children:[(0,n.jsx)(d.nP,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:m().content,children:[(0,n.jsx)(l.Icon,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(c.Heading,{className:(0,s.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,n.jsx)(a.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(c.Caption,{className:(0,s.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(a.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(o.z,{onClick:r,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(c.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(a.Z,{id:"navigation.page-main"})})})]})]})})},98836:function(e,t,i){"use strict";i.d(t,{D:function(){return n.SomethingWentWrong}});var n=i(27610)},27610:function(e,t,i){"use strict";i.d(t,{SomethingWentWrong:function(){return g}});var n=i(95660),s=i(23974),r=i(44744),a=i(71859),o=i(71037),l=i(93062),c=i(15706),u=i(42255),d=i(20794),_=i(96235),m=i(51740),x=i.n(m);let g=(0,r.Pi)(e=>{let{className:t,withBackwardControl:i=!0}=e,r=(0,a.useCallback)(()=>{window.location.href="/"},[]),{contentRef:m}=(0,d.$Y6)();return(0,n.jsxs)("div",{className:(0,s.W)(x().root,t),children:[i&&(0,n.jsx)(_.nP,{withBackwardFallback:"/",className:(0,s.W)(x().navigation,{[x().navigation_desktop]:!m}),withForwardControl:!1}),(0,n.jsxs)("div",{className:(0,s.W)(x().content,{[x().content_shrink]:!i}),children:[(0,n.jsx)(c.Icon,{className:x().icon,variant:"attention",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,s.W)(x().title,x().important),variant:"h3",size:"xs",children:(0,n.jsx)(o.Z,{id:"error-messages.something-went-wrong"})}),(0,n.jsxs)(u.Caption,{className:(0,s.W)(x().text,x().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.try-to-restart-app"})]}),(0,n.jsx)(l.z,{onClick:r,className:x().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsxs)(u.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.restart-app-button"})]})})]})]})})},60396:function(e){e.exports={root:"Genre_root__80dlk",link:"Genre_link__Wewaq",linkTitle:"Genre_linkTitle__ORAsw",list:"Genre_list__C2Pxf"}},78048:function(e){e.exports={root:"MixCard_root__9tPLV",header:"MixCard_header__j7Zpo",title:"MixCard_title__nhghp",cover:"MixCard_cover__oSu73",covers:"MixCard_covers__S61hz",covers_stack:"MixCard_covers_stack__VeHDp",covers_radial:"MixCard_covers_radial__orE40"}},12997:function(e){e.exports={root:"GenresPage_root__LhP_S",shimmerTitle:"GenresPage_shimmerTitle__4j8uH",content:"GenresPage_content__yhKrQ",list:"GenresPage_list__l2Cuc"}},12051:function(e){e.exports={root:"MixesPage_root__mp_Eq",scrollableContainer:"MixesPage_scrollableContainer__S0b76",container:"MixesPage_container__1b_3H",shimmerContainer:"MixesPage_shimmerContainer__su53n",footer:"MixesPage_footer__jCcAN"}},38080:function(e){e.exports={carouselBlock:"MixesCarousel_carouselBlock__ZpMU2",carouselHeader:"MixesCarousel_carouselHeader__6mMHX",mixItem:"MixesCarousel_mixItem__YNSsB"}},29986:function(e){e.exports={mixesTitle:"MixesGrid_mixesTitle__QawnL",mixesGrid:"MixesGrid_mixesGrid__uZQtt"}},18552:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},51740:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}},44848:function(e,t,i){"use strict";i.d(t,{d:function(){return r}});var n=i(29397),s=i(11802);class r extends s.e{constructor(e,t){super(e,{code:"E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",cause:t.cause}),(0,n._)(this,"name","HttpErrorException"),(0,n._)(this,"statusCode",void 0),this.statusCode=t.statusCode,Object.setPrototypeOf(this,r.prototype)}}},11802:function(e,t,i){"use strict";i.d(t,{e:function(){return r}});var n=i(29397),s=i(4106);class r extends s.y{constructor(e="Http Client error",{code:t="E_HTTP_CLIENT",...i}={}){super(e,{code:t,...i}),(0,n._)(this,"name","HttpException"),Object.setPrototypeOf(this,r.prototype)}}},23874:function(e,t,i){"use strict";i.d(t,{CN:function(){return n.C},du:function(){return r.d},eY:function(){return s.e}});var n=i(5828),s=i(11802),r=i(44848)},5828:function(e,t,i){"use strict";var n,s;i.d(t,{C:function(){return n}}),(s=n||(n={}))[s.NOT_FOUND=404]="NOT_FOUND",s[s.BAD_REQUEST=400]="BAD_REQUEST",s[s.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",s[s.PRECONDITION_FAILED=412]="PRECONDITION_FAILED"},65628:function(e,t,i){"use strict";var n,s;i.d(t,{n:function(){return n}}),(s=n||(n={})).RADIAL="RADIAL",s.STACK="STACK"}},function(e){e.O(0,[5087,4361,336,1522,8924,4315,2498,5453,7873,6891,6235,476,4275,4205,5134,1744],function(){return e(e.s=62221)}),_N_E=e.O()}]);