(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4378],{8097:function(t,e,i){Promise.resolve().then(i.bind(i,76605))},76605:function(t,e,i){"use strict";i.r(e);var n=i(95660),l=i(97667),r=i(37129);e.default=()=>{let t=(0,l.useSearchParams)().get("metatagId");return t||(0,l.notFound)(),(0,n.jsx)(r.eq,{metatagId:t})}},24136:function(t,e,i){"use strict";i.d(e,{IT:function(){return c.ArtistCard},xG:function(){return d.ArtistContextMenu},o9:function(){return u},v2:function(){return a.useArtistDisclaimer}});var n=i(97667),l=i(71859),r=i(20794);(0,l.cache)(async t=>{try{let{container:e,backendHostTld:i,locale:l,host:a,fullUrl:o,requestUrl:s}=await (0,r.rbP)(),u=e.get(r.na2),c=await u.getBriefInfo({artistId:t});return"not-found"===c.error&&(0,n.notFound)(),{artist:c,backendHostTld:i,locale:l,host:a,fullUrl:o,requestUrl:s}}catch(t){return{artist:void 0,backendHostTld:"",locale:null,host:"",fullUrl:null,requestUrl:null}}});var a=i(78724),o=i(97898),s=i(11232);let u=o.V5.model("ArtistMeta",{artist:s.Go,lastMonthListeners:o.V5.maybe(o.V5.number)});var c=i(46051),d=i(4805)},78724:function(t,e,i){"use strict";i.d(e,{useArtistDisclaimer:function(){return a}});var n=i(71859),l=i(71833),r=i(20794);let a=t=>{let{artist:e,callback:i,shouldHistoryBack:a}=t,{disclaimer:o,modals:{disclaimerModal:s}}=(0,r.oR4)(),u=(0,n.useRef)(String((0,l.Z)())),c=(0,n.useRef)(!1),d=(0,r.uK4)().get(r.ceh);return(0,n.useEffect)(()=>{o.isUnsafeDisclaimerConfirmed&&o.id===u.current&&!c.current&&(null==i||i(),c.current=!0)},[i,o.id,o.isUnsafeDisclaimerConfirmed]),(0,n.useCallback)(async t=>{let n=d.get(r.BUb.ExEx);if((null==e?void 0:e.isUnsafeLegal)&&(null==n?void 0:n.includes("".concat(r.coP.ARTIST,"_").concat(e.id)))){null==i||i();return}if((null==e?void 0:e.isLegalRejected)||(null==e?void 0:e.isUnsafeLegal)){null==t||t.preventDefault(),await o.getArtistDisclaimer({artistId:e.id}),e.isUnsafeLegal&&o.setType(r.Gq.UNSAFE),o.setId(u.current),o.setEntityId(e.id),o.setEntityType(r.coP.ARTIST),o.setShouldHistoryBack(!!a),c.current=!1,s.open();return}null==t||t.preventDefault(),null==i||i()},[null==e?void 0:e.id,null==e?void 0:e.isLegalRejected,null==e?void 0:e.isUnsafeLegal,i,o,s,d,a])}},46051:function(t,e,i){"use strict";i.d(e,{ArtistCard:function(){return g}});var n=i(95660),l=i(23974),r=i(44744),a=i(71859),o=i(36621),s=i(51739),u=i(9883),c=i(20062),d=i(1559),m=i(15706),v=i(67061),_=i(42255),p=i(11232),x=i(20794),y=i(96235),k=i(78724),C=i(4805),h=i(64543),f=i.n(h);let g=(0,r.Pi)(t=>{let{artist:e,className:i,children:r,contentLinesCount:h}=t,{ref:g,intersectionPropertyId:P}=(0,x.VfV)(),{trailer:b,advert:A}=(0,x.oR4)(),{notify:B}=(0,x.d$W)(),{from:j,utmLink:L}=(0,x.MhG)({contextId:e.id,contextType:c.A.Artist}),{formatMessage:N}=(0,o.Z)(),[S,T]=(0,a.useState)(!1),[w,W]=(0,a.useState)(!1),[I,R]=(0,a.useState)(!1),{sendLikeSearchFeedback:E,sendNavigateSearchFeedback:F,sendPlaySearchFeedback:z}=(0,x.sAF)(),M=(0,x.zxW)(),O=(0,p.SB)(e),V=(0,p.BV)(e),{id:U,name:G,coverUri:K,isLiked:Z}=e,D=(0,x.s0h)(e.url),q=(0,x.s0h)(e.url,!0),[Y,H]=(0,a.useState)(!1),$=(0,x.FTC)(),X=(0,a.useCallback)(t=>{if(t.stopPropagation(),A.isAdvertShown){t.preventDefault(),B((0,n.jsx)(y.vd,{}),{containerId:x.W$x.INFO});return}b.openArtistTrailer(e.id),$(s.OB.Artist,e.id)},[e.id,$,b,A.isAdvertShown,B]),J=(0,a.useMemo)(()=>{let t=N({id:"entity-names.artist-name"},{artistName:G}),e=Z?N({id:"entity-names.has-your-like"}):"";return"".concat(t," ").concat(e)},[G,Z,N]),{isPlaying:Q,togglePlay:tt}=(0,x.qmq)({playContextParams:{contextData:{type:c.A.Artist,meta:{id:Number(U)},from:j,utmLink:L},loadContextMeta:!0}}),te=(0,k.useArtistDisclaimer)({artist:e,callback:D}),ti=(0,k.useArtistDisclaimer)({artist:e,callback:q}),tn=(0,k.useArtistDisclaimer)({artist:e,callback:tt}),tl=(0,p.ik)(ti,te),tr=(0,a.useCallback)(t=>{null==F||F(),M({to:s.qU.ArtistScreen}),tl(t)},[F,M,tl]),ta=(0,a.useCallback)(t=>{tr(t)},[tr]),to=(0,a.useCallback)(()=>{S||Q||(T(!0),null==z||z()),tn()},[Q,S,z,tn]),ts=(0,a.useCallback)(()=>{w||Z||(W(!0),null==E||E()),O()},[Z,O,w,E]),tu=(0,a.useCallback)(t=>{t.preventDefault(),t.stopPropagation()},[]),tc=(0,a.useCallback)(()=>{R(!I),H(!I)},[I]),td=(0,a.useMemo)(()=>(0,n.jsx)(C.ArtistContextMenu,{artist:e,onOpenChange:tc,open:I,onClick:tu,className:(0,l.W)(f().menuButton,f().control),size:"s",icon:(0,n.jsx)(m.Icon,{size:"xxs",variant:"more"})},e.getKey("ArtistContextMenu")),[e,tu,tc,I]),tm=(0,a.useMemo)(()=>{var t;if(null==e?void 0:null===(t=e.trailer)||void 0===t?void 0:t.canShow)return(0,n.jsx)(y.xf,{children:(0,n.jsx)(y.eP,{className:(0,l.W)(f().trailerButton,f().control),radius:"round",size:"s",iconSize:"xxs",onClick:X},e.getKey("TrailerButton"))})},[e,X]),tv=(0,a.useMemo)(()=>{if(e.isAvailable)return(0,n.jsx)(d.kk,{isVisible:I||Y,className:f().controls,radius:"round",playControl:(0,n.jsx)(y.JM,{buttonVariant:"default",withHover:!1,className:(0,l.W)(f().playButton,f().control),iconSize:"xl",variant:"filled",onClick:to,isPlaying:Q,disabled:!e.isAvailableForPlaying},e.getKey("PlayButton")),likeControl:(0,n.jsx)(y.dJ,{className:(0,l.W)(f().likeButton,f().control),isLiked:Z,onClick:ts,variant:"default",size:"s",iconSize:"xxs"},e.getKey("LikeButton")),menuControl:td,pinControl:(0,n.jsx)(y.RT,{onClick:V,isPinned:e.isPinned,className:(0,l.W)(f().pinButton,f().control),withRipple:!1},e.getKey("PinButton")),trailerControl:tm})},[e,I,Y,to,Q,Z,ts,td,V,tm]),t_=(0,a.useMemo)(()=>(0,n.jsx)(v.Paper,{className:f().cover,radius:"round",withShadow:!0,...(0,u.BA)(u.bG.artist.ARTIST_CARD),children:(0,n.jsxs)("div",{className:f().coverBlock,onClick:ta,children:[(0,n.jsx)(y.BE,{className:f().image,src:K,size:200,fit:"cover",alt:J,withAvatarReplace:!0,isAvailable:e.isAvailable,"aria-hidden":!0}),tv]})}),[ta,K,J,e.isAvailable,tv]);return(0,n.jsx)(d.m7,{ref:g,className:(0,l.W)(f().root,i),textPosition:"center","aria-label":J,title:(0,n.jsx)(_.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,n.jsx)(y.rU,{className:f().titleLink,href:e.url,"aria-label":J,onClick:tr,...(0,u.BA)(u.bG.artist.ARTIST_TITLE),children:G})}),srTitle:(0,n.jsx)(y.rU,{href:e.url,onClick:tr,children:J}),"data-intersection-property-id":P,contentLinesCount:h,view:t_,...(0,u.BA)(u.bG.artist.ARTIST_ITEM),children:r})})},4805:function(t,e,i){"use strict";i.d(e,{ArtistContextMenu:function(){return _}});var n=i(95660),l=i(44744),r=i(71859),a=i(36621),o=i(51739),s=i(9883),u=i(20062),c=i(83317),d=i(11232),m=i(20794),v=i(96235);let _=(0,l.Pi)(t=>{var e,i,l;let{artist:_,onOpenChange:p,open:x,...y}=t,{shouldShowBuySubscriptionModal:k,showBuySubscriptionModal:C}=(0,m.vLf)(),{settings:h,trailer:f,advert:g,user:P}=(0,m.oR4)(),{notify:b}=(0,m.d$W)(),A=(0,d.BV)(_),B=(0,d.SB)(_),j=(0,m.FTC)(),L="".concat(m.aUg.ARTIST,"-").concat(null==_?void 0:_.id),N=h.layout===m.t8m.Mobile,{formatMessage:S}=(0,a.Z)(),{utmLink:T}=(0,m.MhG)({blockId:m.aUg.ARTIST,contextType:u.A.Artist,contextId:null==_?void 0:_.id}),{href:w}=(0,m.qKB)(null!==(i=null==_?void 0:_.url)&&void 0!==i?i:""),{isPlaying:W,togglePlay:I}=(0,m.QhE)({seeds:null!==(l=null==_?void 0:_.seeds)&&void 0!==l?l:[],pageIdForFrom:m.Rhz.RADIO,blockIdForFrom:L}),R=(0,r.useCallback)(()=>{if(k&&P.isAuthorized){C();return}W||I()},[W,k,C,I,P.isAuthorized]),E=(0,r.useCallback)(()=>{if(k){C();return}if(g.isAdvertShown){b((0,n.jsx)(v.vd,{}),{containerId:m.W$x.INFO});return}(null==_?void 0:_.id)&&(f.setUtmLink(T),f.openArtistTrailer(_.id),j(o.OB.Artist,_.id))},[k,g.isAdvertShown,null==_?void 0:_.id,C,b,f,T,j]);return(0,m.ZP4)(x),(0,n.jsxs)(c.v2,{isMobile:N,offsetOptions:10,open:x,onOpenChange:p,ariaLabel:S({id:"interface-actions.context-menu"}),containerProps:(0,s.BA)(s.bG.artist.ARTIST_CONTEXT_MENU),...y,children:[!N&&(0,n.jsx)(v.Zd,{onClick:A,isPinned:null==_?void 0:_.isPinned}),(0,n.jsx)(v.xZ,{onClick:B,isLiked:null==_?void 0:_.isLiked,disabled:!(null==_?void 0:_.isAvailable)}),(null==_?void 0:null===(e=_.trailer)||void 0===e?void 0:e.canShow)&&(0,n.jsx)(v.NB,{onClick:E}),(0,n.jsx)(v.GQ,{onClick:R,disabled:!(null==_?void 0:_.isAvailable),variant:m.xIL.ARTIST}),(0,n.jsx)(v.zq,{disabled:!_,shareLink:w,entityVariant:"artist",entityTitle:null==_?void 0:_.name})]})})},82621:function(t,e,i){"use strict";i.d(e,{vY:function(){return g.EmptyPlaylistBlock},ZL:function(){return P.PlaylistCard},Nn:function(){return h},d2:function(){return f},VD:function(){return b.PlaylistsCarousel},RE:function(){return r},Q9:function(){return d},VB:function(){return v},PB:function(){return p}});var n=i(97898),l=i(20794);let r=t=>{var e,i;let{playlist:r,generatedPlaylistType:a,likesCount:o,trailer:s}=t;return(0,n.pj)({isAvailable:null===(i=r.available)||void 0===i||i,uuid:r.playlistUuid,title:r.title,uid:r.uid,kind:r.kind,coverUri:null===(e=r.cover)||void 0===e?void 0:e.uri,generatedPlaylistType:a,likesCount:o,trailer:(0,l.GFX)(s)})};var a=i(97667),o=i(71859);(0,o.cache)(async(t,e)=>{try{let{container:i,backendHostTld:n,locale:r,host:o,fullUrl:s,requestUrl:u}=await (0,l.rbP)(),c=i.get(l.Eug),d=await c.getPlaylistWithTracksIds({userId:t,playlistKind:e,resumeStream:!1});return"not-found"===d.error&&(0,a.notFound)(),{playlist:d,backendHostTld:n,locale:r,host:o,fullUrl:s,requestUrl:u}}catch(t){return{playlist:void 0,backendHostTld:"",locale:null,host:"",fullUrl:null,requestUrl:null}}}),(0,o.cache)(async t=>{try{let{container:e,backendHostTld:i,locale:n,host:r,fullUrl:o,requestUrl:s}=await (0,l.rbP)(),u=e.get(l.lkR),c=await u.getPlaylist({playlistUuid:t,resumeStream:!1});return"not-found"===c.error&&(0,a.notFound)(),{playlist:c,backendHostTld:i,locale:n,host:r,fullUrl:o,requestUrl:s}}catch(t){return{playlist:void 0,backendHostTld:"",locale:null,host:"",fullUrl:null,requestUrl:null}}});var s=i(39583);let u=t=>({uid:t.uid,login:t.login,name:t.name,sex:t.sex,verified:t.verified}),c=t=>(0,n.pj)({userInfo:t.userInfo?u(t.userInfo):null,caseForms:t.caseForms?(0,l.GA0)(t.caseForms):null}),d=t=>(0,n.pj)({...(0,s.PV)(t),owner:t.owner?u(t.owner):void 0,description:t.description,modified:t.modified,madeFor:t.madeFor?c(t.madeFor):null});var m=i(11232);let v=t=>{var e,i;return(0,n.pj)({...(0,s.PV)(t),artists:null!==(i=null==t?void 0:null===(e=t.artists)||void 0===e?void 0:e.map(m.d))&&void 0!==i?i:[]})};var _=i(44022);let p=t=>{var e,i;return(0,n.pj)({...(0,s.PV)(t),tracks:null!==(i=null==t?void 0:null===(e=t.tracks)||void 0===e?void 0:e.map(_.wM))&&void 0!==i?i:[]})};var x=i(15526),y=i(73056);let k=n.V5.model("PlaylistOwner",{uid:n.V5.number,login:n.V5.string,name:n.V5.string,sex:n.V5.enumeration(Object.values(y.o)),verified:n.V5.boolean}),C=n.V5.model("PlaylistOwner",{userInfo:n.V5.maybeNull(k),caseForms:n.V5.maybeNull(x.S2)}),h=s.Cd.props({owner:n.V5.maybe(k),modified:n.V5.string,description:n.V5.maybe(n.V5.string),madeFor:n.V5.maybeNull(C)}).views(t=>({get seeds(){var e;return["playlist:".concat(null===(e=t.owner)||void 0===e?void 0:e.login,"_").concat(t.kind)]}})).actions(t=>({changeDescription:(0,n.ls)(function*(e){if(!(0,n.fh)(t))return l.SLo.ERROR;if(t.description===e)return l.SLo.OK;if(e.length>s.Zn)return l.SLo.ERROR;let{usersResource:i,modelActionsLogger:r}=(0,n.dU)(t);if(t.canUserChange){let n=t.description;t.description=e;try{let n=yield i.changePlaylistDescription({description:e,userId:t.uid,playlistKind:t.kind});return t.description=n.description,l.SLo.OK}catch(e){t.description=n,r.error(e)}}return l.SLo.ERROR}),changePlaylistCover:(0,n.ls)(function*(e){if(!(0,n.fh)(t))return l.SLo.ERROR;let{usersResource:i,modelActionsLogger:r}=(0,n.dU)(t);try{return yield i.uploadPlaylistCover({userId:t.uid,formData:e,playlistKind:t.kind}),l.SLo.OK}catch(t){r.error(t)}return l.SLo.ERROR})})),f=s.$h.props({artists:n.V5.maybe(n.V5.array(m.Go))});var g=i(86759),P=i(94039),b=i(62938)},86759:function(t,e,i){"use strict";i.d(e,{EmptyPlaylistBlock:function(){return m}});var n=i(95660),l=i(23974),r=i(71859),a=i(71037),o=i(9883),s=i(15706),u=i(42255),c=i(99366),d=i.n(c);let m=t=>{let{className:e,isEmptySearch:i}=t,c=(0,r.useMemo)(()=>i?(0,n.jsx)(a.Z,{id:"search-results.not-found-title"}):(0,n.jsx)(a.Z,{id:"error-messages.empty-collection-playlist-title"}),[i]),m=(0,r.useMemo)(()=>i?(0,n.jsx)(a.Z,{id:"search-results.not-found-description"}):(0,n.jsx)(a.Z,{id:"error-messages.empty-collection-playlist-description"}),[i]);return(0,n.jsxs)("div",{className:(0,l.W)(d().root,e),...(0,o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK),children:[(0,n.jsx)("div",{className:d().iconBackground,children:(0,n.jsx)(s.Icon,{variant:"search",size:"l",className:d().icon,...(0,o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON)})}),(0,n.jsx)(u.Heading,{variant:"h3",size:"xs",className:d().title,...(0,o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),children:c}),(0,n.jsx)(u.Caption,{variant:"span",size:"l",className:d().subtitle,...(0,o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),children:m})]})}},94039:function(t,e,i){"use strict";i.d(e,{PlaylistCard:function(){return b}});var n=i(95660),l=i(23974),r=i(44744),a=i(71859),o=i(36621),s=i(51739),u=i(9883),c=i(20062),d=i(1559),m=i(15706),v=i(67061),_=i(42255),p=i(11232),x=i(39583),y=i(20794),k=i(96235);let C=t=>{let{formatMessage:e}=(0,o.Z)();return(0,a.useMemo)(()=>{let i="";t.isLiked&&!t.actualLikesCount?i=e({id:"entity-names.has-your-like"}):"number"==typeof t.actualLikesCount&&(i=t.actualLikesCount>0?e({id:"entity-names.likes-counter"},{counter:t.actualLikesCount}):e({id:"entity-names.likes-counter-empty"}));let n=e({id:"entity-names.playlist-name"},{playlistName:t.title});return"".concat(n," ").concat(i)},[e,t])};var h=i(83317);let f=(0,r.Pi)(t=>{var e;let{playlist:i,onOpenChange:l,open:r,...c}=t,{shouldShowBuySubscriptionModal:d,showBuySubscriptionModal:m}=(0,y.vLf)(),{settings:v,trailer:_,advert:p}=(0,y.oR4)(),{notify:C}=(0,y.d$W)(),f=(0,x.SB)(i),g=(0,x.BV)(i),P=(0,y.FTC)(),b=v.layout===y.t8m.Mobile,{formatMessage:A}=(0,o.Z)();(0,y.ZP4)(r);let B=(0,a.useCallback)(()=>{if(d){m();return}if(p.isAdvertShown){C((0,n.jsx)(k.vd,{}),{containerId:y.W$x.INFO});return}_.openPlaylistTrailer(i.id),P(s.OB.Playlist,i.id)},[d,p.isAdvertShown,_,i.id,P,m,C]);return(0,n.jsxs)(h.v2,{title:i.title,onOpenChange:l,open:r,offsetOptions:10,isMobile:b,ariaLabel:A({id:"interface-actions.context-menu"}),containerProps:(0,u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU),...c,children:[!b&&(0,n.jsx)(k.Zd,{onClick:g,isPinned:i.isPinned}),!i.isFavouritePlaylist&&(0,n.jsx)(k.xZ,{onClick:f,isLiked:i.isLiked}),(null===(e=i.trailer)||void 0===e?void 0:e.canShow)&&(0,n.jsx)(k.NB,{onClick:B,disabled:!i.isAvailable})]})});var g=i(6275),P=i.n(g);let b=(0,r.Pi)(t=>{let{className:e,playlist:i,children:r,contentLinesCount:h,customDescription:g}=t,{ref:b,intersectionPropertyId:A}=(0,y.VfV)(),{trailer:B,advert:j}=(0,y.oR4)(),{notify:L}=(0,y.d$W)(),{from:N,utmLink:S}=(0,y.MhG)({contextId:i.uuid,contextType:c.A.Playlist}),{formatMessage:T}=(0,o.Z)(),{sendLikeSearchFeedback:w,sendNavigateSearchFeedback:W,sendPlaySearchFeedback:I}=(0,y.sAF)(),[R,E]=(0,a.useState)(!1),[F,z]=(0,a.useState)(!1),[M,O]=(0,a.useState)(!1),V=C(i),U=(0,x.SB)(i),G=(0,x.BV)(i),K=(0,y.zxW)(),Z=(0,y.s0h)(i.url),D=(0,y.s0h)(i.url,!0),q=(0,p.ik)(D,Z),Y=(0,y.FTC)(),H=(0,a.useCallback)(t=>{if(t.stopPropagation(),j.isAdvertShown){t.preventDefault(),L((0,n.jsx)(k.vd,{}),{containerId:y.W$x.INFO});return}B.setUtmLink(S),B.openPlaylistTrailer(i.id),Y(s.OB.Playlist,i.id)},[i.id,Y,B,S,j.isAdvertShown,L]),[$,X]=(0,a.useState)(!1),{isPlaying:J,togglePlay:Q}=(0,y.qmq)({playContextParams:{contextData:{type:c.A.Playlist,meta:{id:i.id,uuid:i.uuid},from:N,utmLink:S},loadContextMeta:!0}}),tt=(0,a.useCallback)(()=>{K({to:s.qU.PlaylistScreen}),null==W||W()},[K,W]),te=(0,a.useCallback)(t=>{tt(),q(t)},[q,tt]),ti=(0,a.useCallback)(()=>{R||J||(E(!0),null==I||I()),Q()},[J,R,I,Q]),tn=(0,a.useCallback)(()=>{F||i.isLiked||(z(!0),null==w||w()),U()},[U,F,i.isLiked,w]),tl=(0,a.useCallback)(t=>{t.preventDefault(),t.stopPropagation()},[]),tr=(0,a.useCallback)(()=>{O(!M),X(!M)},[M]),ta=(0,a.useMemo)(()=>{var t;return g?(0,n.jsx)(_.Caption,{variant:"span",type:"entity",size:"s",weight:"medium",lineClamp:2,children:g},i.getKey("description")):(null===(t=i.artists)||void 0===t?void 0:t.length)?(0,n.jsx)(p.jO,{className:P().artists,artists:i.artists,lineClamp:1,linkClassName:P().artistLink,captionSize:"s"},i.getKey("description")):void 0},[g,i]),to=(0,a.useMemo)(()=>{if(!i.isFavouritePlaylist)return(0,n.jsx)(k.dJ,{className:(0,l.W)(P().likeButton,P().control),isLiked:i.isLiked,onClick:tn,variant:"default",size:"s",iconSize:"xxs"},i.getKey("LikeButton"))},[tn,i]),ts=(0,a.useMemo)(()=>{var t;if(null==i?void 0:null===(t=i.trailer)||void 0===t?void 0:t.canShow)return(0,n.jsx)(k.xf,{children:(0,n.jsx)(k.eP,{className:(0,l.W)(P().trailerButton,P().control),radius:"round",size:"s",iconSize:"xxs",onClick:H},i.getKey("TrailerButton"))})},[H,i]),tu=(0,a.useMemo)(()=>(0,n.jsx)(v.Paper,{className:P().cover,radius:"s",withShadow:!0,...(0,u.BA)(u.bG.playlist.PLAYLIST_CARD),children:(0,n.jsxs)("div",{className:P().coverBlock,onClick:te,children:[(0,n.jsx)(k.BE,{className:P().image,src:i.coverUri,size:200,fit:"cover",alt:V,withAvatarReplace:!0,"aria-hidden":!0}),(0,n.jsx)(d.kk,{isVisible:M||$,className:P().controls,playControl:(0,n.jsx)(k.JM,{className:(0,l.W)(P().playButton,P().control),buttonVariant:"default",withHover:!1,iconSize:"xl",variant:"filled",onClick:ti,isPlaying:J,disabled:!i.isAvailable},i.getKey("PlayButton")),likeControl:to,menuControl:(0,n.jsx)(f,{playlist:i,onOpenChange:tr,open:M,onClick:tl,className:(0,l.W)(P().menuButton,P().control),icon:(0,n.jsx)(m.Icon,{size:"xxs",variant:"more"}),size:"s",...(0,u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON)},i.getKey("PlaylistContextMenu")),pinControl:(0,n.jsx)(k.RT,{onClick:G,isPinned:i.isPinned,className:(0,l.W)(P().pinButton,P().control),withRipple:!1},i.getKey("PinButton")),trailerControl:ts})]})}),[te,i,V,M,$,ti,J,to,tr,tl,G,ts]),tc=!!i.actualLikesCount&&!i.isLikesCountHidden;return(0,n.jsxs)(d.m7,{ref:b,"aria-label":V,className:(0,l.W)(P().root,e),title:(0,n.jsx)(_.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,...(0,u.BA)(u.bG.playlist.PLAYLIST_TITLE),children:(0,n.jsx)(k.rU,{className:P().titleLink,href:i.url,onClick:tt,children:i.title})}),srTitle:(0,n.jsx)(k.rU,{href:i.url,onClick:tt,children:i.title}),"data-intersection-property-id":A,contentLinesCount:h,view:tu,description:ta,...(0,u.BA)(u.bG.playlist.PLAYLIST_ITEM),children:[tc&&(0,n.jsx)(k.DB,{ariaLabel:T({id:"entity-names.likes-counter"},{counter:i.actualLikesCount}),likesCount:i.actualLikesCount,isLiked:i.isLiked,handleLikeClick:U}),r]})})},62938:function(t,e,i){"use strict";i.d(e,{PlaylistsCarousel:function(){return s}});var n=i(95660),l=i(71859),r=i(96235),a=i(94039);let o=t=>{let{forwardRef:e,isShimmerVisible:i,isShimmerActive:l,title:o,description:s,playlists:u,containerClassName:c,className:d,headerClassName:m,viewAllActionLink:v,headingVariant:_,...p}=t;return(0,n.jsx)(r.HY,{isShimmerVisible:i,isShimmerActive:l,className:d,headerClassName:m,containerClassName:c,ref:e,title:o,description:s,viewAllActionLink:v,headingVariant:_,...p,children:null==u?void 0:u.map(t=>(0,n.jsx)(a.PlaylistCard,{playlist:t,contentLinesCount:3},t.key))})},s=(0,l.forwardRef)((t,e)=>(0,n.jsx)(o,{forwardRef:e,...t}))},33558:function(t,e,i){"use strict";i.d(e,{T:function(){return n.NotFound}});var n=i(74836)},74836:function(t,e,i){"use strict";i.d(e,{NotFound:function(){return _}});var n=i(95660),l=i(23974),r=i(44744),a=i(71037),o=i(93062),s=i(15706),u=i(42255),c=i(20794),d=i(96235),m=i(18552),v=i.n(m);let _=(0,r.Pi)(t=>{let{className:e}=t,{contentRef:i}=(0,c.$Y6)(),r=(0,c.s0h)("/");return(0,c.ZP4)(!0),(0,n.jsxs)("div",{className:(0,l.W)(v().root,{[v().root_desktop]:!i},e),children:[(0,n.jsx)(d.nP,{withBackwardFallback:"/",className:v().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:v().content,children:[(0,n.jsx)(s.Icon,{className:v().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,l.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,n.jsx)(a.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(u.Caption,{className:(0,l.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(a.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(o.z,{onClick:r,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(a.Z,{id:"navigation.page-main"})})})]})]})})},98836:function(t,e,i){"use strict";i.d(e,{D:function(){return n.SomethingWentWrong}});var n=i(27610)},27610:function(t,e,i){"use strict";i.d(e,{SomethingWentWrong:function(){return p}});var n=i(95660),l=i(23974),r=i(44744),a=i(71859),o=i(71037),s=i(93062),u=i(15706),c=i(42255),d=i(20794),m=i(96235),v=i(51740),_=i.n(v);let p=(0,r.Pi)(t=>{let{className:e,withBackwardControl:i=!0}=t,r=(0,a.useCallback)(()=>{window.location.href="/"},[]),{contentRef:v}=(0,d.$Y6)();return(0,n.jsxs)("div",{className:(0,l.W)(_().root,e),children:[i&&(0,n.jsx)(m.nP,{withBackwardFallback:"/",className:(0,l.W)(_().navigation,{[_().navigation_desktop]:!v}),withForwardControl:!1}),(0,n.jsxs)("div",{className:(0,l.W)(_().content,{[_().content_shrink]:!i}),children:[(0,n.jsx)(u.Icon,{className:_().icon,variant:"attention",size:"xxl"}),(0,n.jsx)(c.Heading,{className:(0,l.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,n.jsx)(o.Z,{id:"error-messages.something-went-wrong"})}),(0,n.jsxs)(c.Caption,{className:(0,l.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.try-to-restart-app"})]}),(0,n.jsx)(s.z,{onClick:r,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsxs)(c.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.restart-app-button"})]})})]})]})})},64543:function(t){t.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",trailerButton:"ArtistCard_trailerButton__a2NHm",control:"ArtistCard_control___qv5j"}},99366:function(t){t.exports={root:"EmptyPlaylistBlock_root__wpA0j",iconBackground:"EmptyPlaylistBlock_iconBackground__pnUlz",title:"EmptyPlaylistBlock_title__pQQLf",subtitle:"EmptyPlaylistBlock_subtitle__P4Q7x"}},6275:function(t){t.exports={root:"PlaylistCard_root__i3pR4",controls:"PlaylistCard_controls__Ej8Rz",cover:"PlaylistCard_cover__tpK5L",coverBlock:"PlaylistCard_coverBlock__1slsN",image:"PlaylistCard_image__Li6oy",titleLink:"PlaylistCard_titleLink__H8qEc",artists:"PlaylistCard_artists__HtVIF",artistLink:"PlaylistCard_artistLink__jx3KB",playButton:"PlaylistCard_playButton__eaduk",likeButton:"PlaylistCard_likeButton__RYXJz",menuButton:"PlaylistCard_menuButton__jFcWr",pinButton:"PlaylistCard_pinButton__jhWnL",trailerButton:"PlaylistCard_trailerButton__Qjg_U",control:"PlaylistCard_control__73YUq"}},18552:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},51740:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}},73056:function(t,e,i){"use strict";var n,l;i.d(e,{o:function(){return n}}),(l=n||(n={})).UNKNOWN="unknown",l.MALE="male",l.FEMALE="female"}},function(t){t.O(0,[4361,5087,1522,440,336,2498,5453,7873,6891,6235,1990,7924,476,5708,4275,9905,7129,4205,5134,1744],function(){return t(t.s=8097)}),_N_E=t.O()}]);