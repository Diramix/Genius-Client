(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{85241:function(e,t,a){Promise.resolve().then(a.bind(a,29284))},29284:function(e,t,a){"use strict";a.r(t);var n=a(95660),r=a(97667),i=a(95414);t.default=()=>{let e=(0,r.useSearchParams)().get("artistId");return e||(0,r.notFound)(),(0,n.jsx)(i.pr,{artistId:e,variant:i.MX.ALBUMS})}},42040:function(e,t,a){"use strict";a.d(t,{HS:function(){return u.AfishaWidget},aD:function(){return m.a},kb:function(){return C.ConcertCard},CS:function(){return p.ConcertDate},Z:function(){return d},m:function(){return _.ConcertsBlock},zj:function(){return c},eU:function(){return i}});var n=a(97898);let r=/[+-]\d{2}:?\d{2}/,i=e=>null==e?void 0:e.replace(r,""),s=e=>{if(e)return{value:e.value,currency:e.currency}},c=e=>{var t,a;return(0,n.pj)({id:e.id,dataSessionId:null!==(a=e["data-session-id"])&&void 0!==a?a:"",datetime:e.datetime&&i(e.datetime),city:e.city,place:e.place,contentRating:e.contentRating,price:s(e.minPrice),cashbackTitle:null===(t=e.cashback)||void 0===t?void 0:t.title})};var o=a(20794);let l=n.V5.model("Price",{value:n.V5.number,currency:n.V5.string}),d=n.V5.model("Concert",{id:n.V5.string,dataSessionId:n.V5.maybe(n.V5.string),datetime:n.V5.maybe(n.V5.string),city:n.V5.maybe(n.V5.string),place:n.V5.maybe(n.V5.string),contentRating:n.V5.maybe(n.V5.string),price:n.V5.maybe(l),cashbackTitle:n.V5.maybe(n.V5.string)}).views(e=>({get isCashbackExperimentEnabled(){let{experiments:t}=(0,n.yj)(e);return t.checkExperiment(o.peG.WebNextConcertsCashback,"on")}}));var u=a(65027),m=a(51201),C=a(60142),p=a(82134),_=a(2960)},21283:function(e,t,a){"use strict";a.d(t,{x:function(){return s}});var n=a(71859),r=a(51739),i=a(20794);let s=e=>{let{artistId:t,viewUuid:a}=e,c=(0,i.z$f)(),{hash:o}=(0,i.RQn)(),{pageId:l}=(0,i.lVB)(),{objectsCount:d,objectType:u,objectId:m,objectPosX:C,objectPosY:p,objectPos:_}=(0,i.rKX)(),h=(0,i.wLl)(),f=(0,n.useCallback)(e=>{let a=(0,i.KOr)({params:{hash:o,artistId:t,objectsCount:d,objectType:u,objectId:m,objectPosX:C,objectPosY:p,to:e},logger:h,context:s.name});c&&a&&(0,r.f7)(c.evgenInstance,a)},[c,t,o,h,m,C,p,u,d]),v=(0,n.useCallback)(e=>{let n=(0,i.KOr)({params:{hash:o,artistId:t,viewUuid:a,objectId:m,objectPos:_,to:e},logger:h,context:s.name});c&&n&&a&&(0,r.Mn)(c.evgenInstance,n)},[c,t,o,h,m,_,a]);return(0,n.useCallback)(e=>{if(c&&l&&i.$PW.includes(l))switch(l){case i.Rhz.ARTIST:f(e);break;case i.Rhz.ARTIST_CONCERTS:v(e)}},[c,l,v,f])}},65027:function(e,t,a){"use strict";a.d(t,{AfishaWidget:function(){return m}});var n=a(95660),r=a(71859),i=a(36621),s=a(93062),c=a(52074),o=a(22899),l=a(20794),d=a(4151),u=a.n(d);let m=e=>{let{dataSessionId:t,isOpened:a,onOpen:d,onClose:m}=e,C=(0,l.uK4)().get(l.U5t),{formatMessage:p}=(0,i.Z)(),_=(0,r.useCallback)(e=>{e.origin===C.afisha.host&&"close"===e.data.type&&m()},[m,C.afisha.host]);(0,r.useEffect)(()=>(window.addEventListener("message",_),()=>{window.removeEventListener("message",_)}),[_]);let h=(0,r.useCallback)(e=>{e?d():m()},[m,d]),f="".concat(C.afisha.host,"/w/sessions/").concat(t,"?clientKey=").concat(C.afisha.clientId);return(0,n.jsxs)(c.u,{size:"fitContent",placement:"center",open:a,onOpenChange:h,onClose:m,showHeader:!1,className:u().widget,contentClassName:u().content,overlayColor:"full",children:[(0,n.jsx)(o.y,{children:(0,n.jsx)(s.z,{"aria-label":p({id:"interface-actions.close"}),onClick:m})}),(0,n.jsx)("iframe",{src:f,className:u().root,referrerPolicy:"no-referrer",sandbox:"allow-forms allow-modals allow-popups allow-scripts allow-same-origin",allow:"clipboard-read clipboard-write"})]})}},51201:function(e,t,a){"use strict";a.d(t,{a:function(){return l}});var n=a(95660),r=a(23974),i=a(15706),s=a(42255),c=a(52838),o=a.n(c);let l=e=>{let{title:t,className:a}=e;return(0,n.jsxs)("div",{className:(0,r.W)(o().root,a),children:[(0,n.jsx)(i.Icon,{"aria-hidden":!0,className:o().icon,variant:"plus",size:"xxxs"}),(0,n.jsx)(s.Caption,{variant:"span",type:"text",size:"m",weight:"medium",lineClamp:1,className:o().title,children:t})]})}},60142:function(e,t,a){"use strict";a.d(t,{ConcertCard:function(){return x}});var n=a(95660),r=a(71859),i=a(36621),s=a(51739),c=a(81014),o=a(39661),l=a(93062),d=a(67061),u=a(42255),m=a(20794),C=a(21283);let p=e=>{let{artistId:t,viewUuid:a}=e,n=(0,m.z$f)(),{hash:i}=(0,m.RQn)(),{pageId:c}=(0,m.lVB)(),{objectsCount:o,objectType:l,objectId:d,objectPosX:u,objectPosY:C,objectPos:_}=(0,m.rKX)(),h=(0,m.wLl)(),f=(0,r.useCallback)(()=>{let e=(0,m.KOr)({params:{hash:i,artistId:t,objectsCount:o,objectType:l,objectId:d,objectPosX:u,objectPosY:C},logger:h,context:p.name});n&&e&&(0,s.F5)(n.evgenInstance,e)},[n,t,i,h,d,u,C,l,o]),v=(0,r.useCallback)(()=>{let e=(0,m.KOr)({params:{hash:i,artistId:t,viewUuid:a,objectId:d,objectPos:_},logger:h,context:p.name});n&&e&&a&&(0,s.b5)(n.evgenInstance,e)},[n,t,i,h,d,_,a]);return(0,r.useCallback)(()=>{if(n&&c&&m.$PW.includes(c))switch(c){case m.Rhz.ARTIST:f();break;case m.Rhz.ARTIST_CONCERTS:v()}},[n,c,v,f])};var _=a(65027),h=a(82134),f=a(51201),v=a(23026),b=a.n(v);let x=e=>{var t,a;let{artistId:v,concert:x,viewUuid:g}=e,{formatDate:k,formatNumber:y,formatMessage:w}=(0,i.Z)(),{state:j,toggleTrue:N,toggleFalse:R}=(0,c.O)(!1),V=p({artistId:v,viewUuid:g}),S=(0,C.x)({artistId:v,viewUuid:g}),{ref:I,intersectionPropertyId:A}=(0,m.VfV)({callback:V,singleEvent:!0}),z=(0,r.useId)(),E=(0,r.useId)(),T=(0,r.useMemo)(()=>{let e=(0,n.jsx)(u.Caption,{variant:"span",size:"m",weight:"medium","aria-hidden":!0,children:"•"}),t=[];return x.place&&t.push((0,n.jsx)(u.Caption,{variant:"span",size:"m",weight:"medium",lineClamp:1,children:x.place})),x.datetime&&(t.push(e),t.push((0,n.jsx)(u.Caption,{variant:"span",size:"m",weight:"medium",children:k(x.datetime,(0,m.Svi)())}))),x.contentRating&&(t.push(e),t.push((0,n.jsx)(u.Caption,{variant:"span",size:"m",weight:"medium",children:x.contentRating}))),(0,n.jsx)("div",{className:b().info,children:t.map((e,t)=>(0,r.cloneElement)(e,{key:t}))})},[x.contentRating,x.datetime,x.place,k]),W=(0,r.useMemo)(()=>{var e,t;return(null===(e=x.price)||void 0===e?void 0:e.value)?w({id:"payment.min-price"},{value:y(x.price.value,{style:"currency",currency:null===(t=x.price)||void 0===t?void 0:t.currency,maximumFractionDigits:0})}):w({id:"payment.buy"})},[null===(t=x.price)||void 0===t?void 0:t.currency,null===(a=x.price)||void 0===a?void 0:a.value,w,y]),B=(0,r.useCallback)(e=>{(0,o.m)(e,b().ripple)},[]),P=(0,r.useCallback)(e=>{N(),S(s.Ks.ConcertPurchaseScreen),e.stopPropagation()},[N,S]);return(0,n.jsxs)(d.Paper,{radius:"l",className:b().root,onClick:B,ref:I,"data-intersection-property-id":A,children:[x.datetime&&(0,n.jsx)(h.ConcertDate,{datetime:x.datetime,id:z,className:b().date,dayClassName:b().dateColor,monthClassName:b().dateColor}),(0,n.jsxs)("div",{className:b().meta,id:E,children:[(0,n.jsx)(u.Caption,{variant:"div",size:"m",weight:"medium",className:b().city,lineClamp:1,children:x.city}),T,x.isCashbackExperimentEnabled&&x.cashbackTitle&&(0,n.jsx)(f.a,{className:b().cashback,title:x.cashbackTitle})]}),x.dataSessionId&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.z,{color:"primary",radius:"xxxl",className:b().button,"aria-describedby":"".concat(z," ").concat(E),"aria-label":W,onClick:P,children:W}),(0,n.jsx)(_.AfishaWidget,{dataSessionId:x.dataSessionId,isOpened:j,onOpen:N,onClose:R})]})]})}},82134:function(e,t,a){"use strict";a.d(t,{ConcertDate:function(){return u}});var n=a(95660),r=a(23974),i=a(36621),s=a(9883),c=a(42255),o=a(20794),l=a(11986),d=a.n(l);let u=e=>{let{datetime:t,className:a,monthClassName:l,dayClassName:u,withWeekday:m=!0,...C}=e,{formatDate:p}=(0,i.Z)(),_=(0,o.KR6)(t);return(0,n.jsxs)("div",{className:(0,r.W)(d().root,a),"aria-label":p(t,(0,o.YTW)()),...C,...(0,s.BA)(s.FK.concerts.CONCERT_DATE),children:[(0,n.jsx)(c.Caption,{variant:"div",size:"xs",weight:"bold",className:(0,r.W)(d().month,l),children:_}),(0,n.jsx)(c.Caption,{variant:"div",className:(0,r.W)(d().day,u),children:p(t,(0,o.GL9)())}),m&&(0,n.jsx)(c.Caption,{variant:"div",size:"xs",weight:"bold",className:d().weekday,children:p(t,{weekday:"short"})})]})}},2960:function(e,t,a){"use strict";a.d(t,{ConcertsBlock:function(){return _}});var n=a(95660),r=a(23974),i=a(6657),s=a(71859),c=a(51739),o=a(63778),l=a(96235),d=a(21283),u=a(36184),m=a.n(u);let C=()=>Array.from({length:2},(e,t)=>(0,n.jsx)("div",{className:m().concertsColumn,children:(0,l.M4)(2)},t)),p=e=>{let{artistId:t,forwardRef:a,isLoading:u,title:p,viewAllActionLink:_,children:h,className:f,containerClassName:v,headerClassName:b,itemClassName:x,headingVariant:g,...k}=e,y=(0,s.useId)(),w=(0,s.useRef)(null),j=(0,d.x)({artistId:t}),N=(0,s.useCallback)(()=>{j(c.Ks.ArtistConcertsScreen)},[j]),R=(0,s.useMemo)(()=>(0,i.Z)(h,2).slice(0,4).map((e,t)=>(0,n.jsx)("div",{className:m().concertsColumn,children:e},t)),[h]);return(0,n.jsxs)("section",{ref:a,className:(0,r.W)(m().root,f),...k,children:[(0,n.jsx)(l.ti,{className:b,labeledForId:y,title:p,viewAllActionLink:_,onViewAllAction:N,controls:(0,n.jsx)(l.J8,{className:m().controls,carouselRef:w}),headingVariant:g}),(0,n.jsx)(o.l,{itemClassName:(0,r.W)(m().item,{[m().item_singleColumn]:2>=s.Children.count(h)},x),className:(0,r.W)(v,{[m().preventScroll]:u}),ref:w,"aria-labelledby":y,children:u?C():R})]})},_=(0,s.forwardRef)((e,t)=>(0,n.jsx)(p,{forwardRef:t,...e}))},4151:function(e){e.exports={root:"AfishaWidget_root__Fu9a6",content:"AfishaWidget_content__YFmbs",widget:"AfishaWidget_widget__ZdvqS"}},52838:function(e){e.exports={root:"CashbackBadge_root__hStMF",icon:"CashbackBadge_icon__RJ6qe",title:"CashbackBadge_title__neGD7"}},23026:function(e){e.exports={root:"ConcertCard_root__fcR9B",ripple:"ConcertCard_ripple__PW4xI",date:"ConcertCard_date__ECoa3",dateColor:"ConcertCard_dateColor__muPRD",meta:"ConcertCard_meta__9uMgy",city:"ConcertCard_city__Pgt4S",info:"ConcertCard_info___mAu4",button:"ConcertCard_button__GQxNL",cashback:"ConcertCard_cashback__DVwFY"}},11986:function(e){e.exports={root:"ConcertDate_root__xnVG1",month:"ConcertDate_month__ti5Na",day:"ConcertDate_day__YibpP",weekday:"ConcertDate_weekday__fBZXo"}},36184:function(e){e.exports={root:"ConcertsBlock_root__d_1G3",controls:"ConcertsBlock_controls__oULxu",item:"ConcertsBlock_item__jMAX9",item_singleColumn:"ConcertsBlock_item_singleColumn__p8ilp",preventScroll:"ConcertsBlock_preventScroll__YeeZH",concertsColumn:"ConcertsBlock_concertsColumn__2M2t_"}},50022:function(e,t){"use strict";t.Z=function(e){return void 0===e}}},function(e){e.O(0,[4361,5087,1522,6736,336,2498,5453,7873,7888,6891,5872,6235,1990,7924,476,5708,4275,4146,8641,1737,4751,4532,5414,4205,5134,1744],function(){return e(e.s=85241)}),_N_E=e.O()}]);