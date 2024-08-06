(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{83697:function(t,e,a){Promise.resolve().then(a.bind(a,35403))},32693:function(t,e,a){"use strict";a.d(e,{Ji:function(){return m}});var r,i,l,o,n=a(9092),s=a(98639),u=a(80542);(r=l||(l={})).formatDate="FormattedDate",r.formatTime="FormattedTime",r.formatNumber="FormattedNumber",r.formatList="FormattedList",r.formatDisplayName="FormattedDisplayName",(i=o||(o={})).formatDate="FormattedDateParts",i.formatTime="FormattedTimeParts",i.formatNumber="FormattedNumberParts",i.formatList="FormattedListParts";var d=function(t){var e=(0,u.Z)(),a=t.value,r=t.children,i=(0,n.__rest)(t,["value","children"]);return r(e.formatNumberToParts(a,i))};function c(t){var e=function(e){var a=(0,u.Z)(),r=e.value,i=e.children,l=(0,n.__rest)(e,["value","children"]),o="string"==typeof r?new Date(r||0):r;return i("formatDate"===t?a.formatDateToParts(o,l):a.formatTimeToParts(o,l))};return e.displayName=o[t],e}function g(t){var e=function(e){var a=(0,u.Z)(),r=e.value,i=e.children,l=(0,n.__rest)(e,["value","children"]),o=a[t](r,l);if("function"==typeof i)return i(o);var d=a.textComponent||s.Fragment;return s.createElement(d,null,o)};return e.displayName=l[t],e}d.displayName="FormattedNumberParts",d.displayName="FormattedNumberParts";var m=g("formatDate");g("formatTime"),g("formatNumber"),g("formatList"),g("formatDisplayName"),c("formatDate"),c("formatTime")},35403:function(t,e,a){"use strict";a.r(e);var r=a(9753),i=a(74717),l=a(96290);e.default=()=>{let t=(0,i.useSearchParams)().get("artistId");return t||(0,i.notFound)(),(0,r.jsx)(l.aG,{artistId:t})}},96290:function(t,e,a){"use strict";a.d(e,{pr:function(){return o.ArtistAlbumsPage},MX:function(){return s.M},aG:function(){return n.ArtistConcertsPage},vQ:function(){return R.ArtistFamiliarPage},xA:function(){return r.ArtistPage},Od:function(){return P},x3:function(){return l.ArtistSimilarPage},hD:function(){return i.ArtistTracksPage}});var r=a(72244),i=a(55908),l=a(99931),o=a(84292),n=a(65295),s=a(38007);a(98171);var u=a(42288),d=a(10542),c=a(51179),g=a(93490),m=a(87908),N=a(31579),E=a(48892),S=a(33589),p=a(76351),b=a(87628);let v=(t,e)=>(0,u.pj)({artist:(0,S.d)(t),lastMonthListeners:null==e?void 0:e.lastMonthListeners}),C=t=>{let e=t.artists.map(S.tR);return(0,u.pj)({playlist:(0,N.RE)({playlist:t.playlist}),artists:e})};var G=a(58421);let D=u.V5.model("ArtistAlbumsPage",{loadingState:u.V5.enumeration(Object.values(b.Gu)),pager:u.V5.maybeNull(G.Vn),variant:u.V5.maybeNull(u.V5.enumeration(Object.values(s.M))),alreadyRequestedPages:u.V5.map(u.V5.number),pendingPages:u.V5.map(u.V5.number),requests:u.V5.maybeNull(u.V5.number),errorStatusCode:u.V5.maybeNull(u.V5.number),items:u.V5.array(u.V5.maybeNull(g.ug))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===b.Gu.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,r=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gu.REJECT&&r||a}})).actions(t=>({setVariant:e=>{t.variant=e},getData:(0,u.ls)(function*(e){let{artistId:a,page:r=0,pageSize:i=20,sort:l}=e,{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t);if(!(t.loadingState===b.Gu.PENDING&&t.pendingPages.has("".concat(r))||t.alreadyRequestedPages.has("".concat(r)))){"number"==typeof r&&t.alreadyRequestedPages.set("".concat(r),r);try{var c;let e;t.loadingState=b.Gu.PENDING,t.pendingPages.set("".concat(r),r);let n={artistId:a,page:r,pageSize:i,sort:{sortBy:null==l?void 0:l.sortBy}};switch(t.variant){case s.M.COMPILATIONS:e=yield o.getAlsoAlbums(n);break;case s.M.DISCOGRAPHY:e=yield o.getDiscographyAlbums(n);break;default:e=yield o.getDirectAlbums(n)}let d={page:r,perPage:i,total:e.pager.total};0===t.items.length&&(t.items=(0,u.pj)(Array.from({length:d.total},()=>null)));let m=e.albums.map(g.ym);(0,b.AG)({items:t.items,mappedRawItems:m,page:r,pageSize:i}),t.pager=d,t.requests=(null!==(c=t.requests)&&void 0!==c?c:0)+1,t.loadingState=b.Gu.RESOLVE}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}finally{t.pendingPages.delete("".concat(r))}}}),reset(){t.loadingState=b.Gu.IDLE,t.pendingPages.clear(),t.pager=null,t.variant=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,u.pj)([])}})),y=u.V5.model("ArtistConcertsPage",{loadingState:u.V5.enumeration(Object.values(b.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),concerts:u.V5.maybeNull(u.V5.array(p.Z))}).views(t=>({get isLoading(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING},get isNotFound(){var e;let a=t.loadingState===b.Gu.RESOLVE&&(null===(e=t.concerts)||void 0===e?void 0:e.length)===0,r=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gu.REJECT&&r||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:r,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==b.Gu.PENDING)try{t.loadingState=b.Gu.PENDING;let{concerts:e}=yield r.getConcerts({artistId:a});t.concerts=(0,u.pj)(e.map(p.zj)),t.loadingState=b.Gu.RESOLVE}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),reset(){t.loadingState=b.Gu.IDLE,t.errorStatusCode=null,t.concerts=null}})),T=t=>(0,u.pj)({...(0,g.cO)({album:t,artists:t.artists}),version:t.version}),h=u.V5.model("ArtistFamiliarPage",{loadingState:u.V5.enumeration(Object.values(b.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),vibeTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionAlbums:u.V5.maybeNull(u.V5.array(g.ug))}).views(t=>({get isLoading(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING},get isLoaded(){return t.loadingState===b.Gu.RESOLVE},get isRejected(){return t.loadingState===b.Gu.REJECT},get isNotFound(){let e=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gu.REJECT&&e},get hasCollectionEntities(){var e,a;return this.isLoaded&&Number(null===(e=t.collectionTracks)||void 0===e?void 0:e.length)>0||Number(null===(a=t.collectionAlbums)||void 0===a?void 0:a.length)>0},get shouldShowTitleBlocks(){var r,i;if(this.isLoading)return!0;return Number(null===(r=t.collectionTracks)||void 0===r?void 0:r.length)>0&&Number(null===(i=t.collectionAlbums)||void 0===i?void 0:i.length)>0},get hasVibeTracks(){var l;return Number(null===(l=t.vibeTracks)||void 0===l?void 0:l.length)>0},get collectionEntitiesData(){var o,n;return null!==(n=null===(o=t.collectionTracks)||void 0===o?void 0:o.map(E.E5))&&void 0!==n?n:[]},get vibeEntitiesData(){var s,u;return null!==(u=null===(s=t.vibeTracks)||void 0===s?void 0:s.map(E.E5))&&void 0!==u?u:[]}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:r,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==b.Gu.PENDING)try{var l,o,n,s,c,g;t.loadingState=b.Gu.PENDING;let e=yield r.getFamiliarYou({artistId:a,waveTracksLimit:100,collectionTracksLimit:100,collectionAlbumsLimit:20});t.vibeTracks=(0,u.pj)(null===(o=e.wave)||void 0===o?void 0:null===(l=o.tracks)||void 0===l?void 0:l.map(t=>(0,E.Vt)(t))),t.collectionTracks=(0,u.pj)(null===(s=e.collection)||void 0===s?void 0:null===(n=s.tracks)||void 0===n?void 0:n.map(t=>(0,E.Vt)(t))),t.collectionAlbums=(0,u.pj)(null===(g=e.collection)||void 0===g?void 0:null===(c=g.albums)||void 0===c?void 0:c.map(T)),t.loadingState=b.Gu.RESOLVE}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),reset(){t.loadingState=b.Gu.IDLE,t.errorStatusCode=null,t.vibeTracks=null,t.collectionTracks=null}}));var V=a(12090);let f=u.V5.model("ArtistPick",{playlist:V.Cd,artists:u.V5.array(S.Go)}),A=u.V5.model("ArtistSimilarArtistsPage",{loadingState:u.V5.enumeration(Object.values(b.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),similarArtists:u.V5.maybeNull(u.V5.array(S.Go))}).views(t=>({get isLoading(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING},get isNotFound(){var e;let a=t.loadingState===b.Gu.RESOLVE&&(null===(e=t.similarArtists)||void 0===e?void 0:e.length)===0,r=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gu.REJECT&&r||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:r,modelActionsLogger:i}=(0,u.dU)(t);try{t.loadingState=b.Gu.PENDING;let e=yield r.getSimilarArtists({artistId:a});t.similarArtists=(0,u.pj)(e.similarArtists.map(S.d)),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.RESOLVE)}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),reset(){t.loadingState=b.Gu.IDLE,t.errorStatusCode=null,t.similarArtists=(0,u.pj)([])}}));var L=a(72587);let k=u.V5.model("FamiliarInfo",{loadingState:u.V5.enumeration(Object.values(b.Gu)),vibeTrackCount:u.V5.optional(u.V5.number,0),collectionTrackCount:u.V5.optional(u.V5.number,0),collectionAlbumCount:u.V5.optional(u.V5.number,0)}).views(t=>({get isLoaded(){return t.loadingState===b.Gu.RESOLVE},get hasTracks(){return this.isLoaded&&(t.collectionTrackCount>0||t.vibeTrackCount>0)},get hasFamiliarInfo(){return this.isLoaded&&(this.hasTracks||t.collectionAlbumCount>0)},get tracksCount(){return t.collectionTrackCount+t.vibeTrackCount},get hasCollectionEntities(){return this.isLoaded&&(t.collectionTrackCount>0||t.collectionAlbumCount>0)},get hasVibeEntities(){return this.isLoaded&&t.vibeTrackCount>0},href(t){return t?this.hasCollectionEntities?"/artist/".concat(t,"/familiar?tab=").concat(L.g.COLLECTION):this.hasVibeEntities?"/artist/".concat(t,"/familiar?tab=").concat(L.g.VIBE):"/artist/".concat(t,"/familiar"):""}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:r,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==b.Gu.PENDING)try{t.loadingState=b.Gu.PENDING;let e=yield r.getFamiliarYouInfo({artistId:a,withWaveInfo:!0,withCollectionInfo:!0});e.collection&&(t.collectionTrackCount=e.collection.trackCount,t.collectionAlbumCount=e.collection.albumCount),e.wave&&(t.vibeTrackCount=e.wave.trackCount),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.RESOLVE)}catch(e){i.error(e),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),reset(){t.loadingState=b.Gu.IDLE,t.vibeTrackCount=0,t.collectionTrackCount=0,t.collectionAlbumCount=0}}));var I=a(75191);let O=u.V5.model("FullTracksList",{loadingState:u.V5.enumeration(Object.values(b.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),ids:u.V5.maybeNull(u.V5.array(u.V5.string)),tracks:u.V5.optional(u.V5.map(E.le),{})}).views(t=>({getTrackByIndex(e){if(!t.ids||!t.ids.length)return null;let a=t.ids[e];return a&&t.tracks.get(a)||null},get isNotFound(){var e;let a=t.loadingState===b.Gu.RESOLVE&&(null===(e=t.ids)||void 0===e?void 0:e.length)===0,r=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gu.REJECT&&r||a}})).actions(t=>({getTracksIds:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:r,modelActionsLogger:i}=(0,u.dU)(t);try{t.loadingState=b.Gu.PENDING;let e=yield r.getArtistTrackIds({artistId:a}),{sonataState:i}=(0,u.yj)(t);i.setUnloadedEntitiesData(e.map(t=>(0,I.RN)(t))),t.ids=(0,u.pj)(e),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.RESOLVE)}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),getTracks:(0,u.ls)(function*(e){let{trackIds:a}=e,{tracksResource:r,modelActionsLogger:i}=(0,u.dU)(t);try{let e=yield r.getTracksMeta({trackIds:a,withProgress:!0});t.tracks.merge(e.reduce((t,e)=>(t[e.id]=(0,E.Vt)(e),t),{}))}catch(t){i.error(t)}}),reset(){let{sonataState:e}=(0,u.yj)(t);e.resetUnloadedEntitiesData(),t.loadingState=b.Gu.IDLE,t.ids=(0,u.pj)([]),t.tracks.clear()}})),P=u.V5.model("ArtistPage",{loadingState:u.V5.enumeration(Object.values(b.Gu)),id:u.V5.maybeNull(u.V5.string),meta:u.V5.maybeNull(m.o9),popularTracks:u.V5.array(E.le),lastRelease:u.V5.maybeNull(g.ug),upcomingAlbum:u.V5.maybeNull(g.W9),concerts:u.V5.maybeNull(u.V5.array(p.Z)),similarArtists:u.V5.array(S.Go),playlists:u.V5.array(N.d2),errorStatusCode:u.V5.maybeNull(u.V5.number),deprecationTargetArtistId:u.V5.maybeNull(u.V5.number),albums:u.V5.array(g.ug),discography:u.V5.array(g.ug),compilations:u.V5.array(g.ug),artistPick:u.V5.maybeNull(f),familiarInfo:k,albumsSubpage:D,fullTracksListSubpage:O,concertsSubpage:y,similarArtistsSubPage:A,familiarSubpage:h}).views(t=>({get isLoading(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING},get hasPopularTracks(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.popularTracks.length>0},get hasAlbums(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.albums.length>0},get hasDiscography(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.discography.length>0},get hasCompilations(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.compilations.length>0},get hasSimilarArtists(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.similarArtists.length>0},get hasPlaylists(){return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.playlists&&t.playlists.length>0},get hasConcerts(){let{experiments:e}=(0,u.yj)(t);return t.loadingState===b.Gu.IDLE||t.loadingState===b.Gu.PENDING||t.concerts&&t.concerts.length>0&&e.checkExperiment(b.pe.WebNewBlockConcerts,"on")},get concertsLink(){var e,a;let{experiments:r}=(0,u.yj)(t);if(r.checkExperiment(b.pe.WebNewConcertsList,"on")&&(null===(e=t.meta)||void 0===e?void 0:e.artist.id)&&t.concerts&&t.concerts.length>3)return"/artist/".concat(null===(a=t.meta)||void 0===a?void 0:a.artist.id,"/concerts");return null},get isNotFound(){return t.loadingState===b.Gu.REJECT&&t.errorStatusCode===d.CN.NOT_FOUND},get isLoaded(){return t.loadingState===b.Gu.RESOLVE},get isRejected(){return t.loadingState===b.Gu.REJECT},get hasReleaseBlock(){return!!(this.isLoading||t.upcomingAlbum||t.lastRelease)}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{slides:r,experiments:i,disclaimer:l}=(0,u.yj)(t),{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t),s=i.checkExperiment(b.pe.WebNextArtistDisableLastReleases,"on"),m=i.checkExperiment(b.pe.WebNextArtistDisablePopularTracks,"on"),G=i.checkExperiment(b.pe.WebNextArtistDisableSimilarArtists,"on"),D=i.checkExperiment(b.pe.WebNextArtistDisablePopularAlbums,"on"),y=i.checkExperiment(b.pe.WebNextArtistDisableDiscography,"on"),T=i.checkExperiment(b.pe.WebNextArtistDisableCompilations,"on"),h=i.checkExperiment(b.pe.WebNextArtistDisablePlaylists,"on"),V=i.checkExperiment(b.pe.WebNextLegalRejectArtist,"on");if(t.id=a,t.loadingState!==b.Gu.PENDING)try{var f,A;t.loadingState=b.Gu.PENDING;let{popularTracks:e,error:i,artist:n,stats:L,albums:k,playlists:I,alsoAlbums:O,similarArtists:P,lastReleases:R,concerts:j,upcomingAlbum:F,discography:_,artistPick:U}=yield o.getBriefInfo({artistId:a,popularTracksCount:5,fetchPlaylistLikesCounts:!0,discographyBlockEnabled:!0});if("not-found"===i||(null==n?void 0:n.error)==="not-found"){t.errorStatusCode=d.CN.NOT_FOUND,t.loadingState=b.Gu.REJECT;return}if(null===(f=n.deprecation)||void 0===f?void 0:f.targetArtistId){t.deprecationTargetArtistId=n.deprecation.targetArtistId,t.loadingState=b.Gu.RESOLVE;return}t.meta=(0,u.pj)(v(n,L));let x=(null!==(A=n.disclaimers)&&void 0!==A?A:[]).includes(c.em.MODAL);if(!n.available&&x&&V&&(yield l.getArtistDisclaimer({artistId:a})),!s&&R&&R.length>0){let e=R[0];e&&k&&k.length>1&&(t.lastRelease=(0,u.pj)((0,g.ym)(e)))}F&&(t.upcomingAlbum=(0,u.pj)((0,g.wq)(F))),j&&(t.concerts=(0,u.pj)(j.map(p.zj))),!m&&e&&e.length>0&&(t.popularTracks=(0,u.pj)(e.slice(0,5).map(t=>(0,E.Vt)(t)))),!G&&P&&P.length>0&&(t.similarArtists=(0,u.pj)(P.slice(0,9).map(S.d))),!D&&Number(null==k?void 0:k.length)>0&&(t.albums=(0,u.pj)(null==k?void 0:k.map(g.ym))),!y&&Number(null==_?void 0:_.length)>0&&(t.discography=(0,u.pj)(null==_?void 0:_.map(g.ym).slice(0,9))),!T&&Number(null==O?void 0:O.length)>0&&(t.compilations=(0,u.pj)(null==O?void 0:O.map(g.ym).slice(0,9))),!h&&I&&I.length>0&&(t.playlists=(0,u.pj)(I.map(N.Q9).slice(0,9))),U&&(t.artistPick=C(U)),r.resetArtist(),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.RESOLVE)}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gu.IDLE&&(t.loadingState=b.Gu.REJECT)}}),reset(){t.loadingState=b.Gu.IDLE,t.id=null,t.meta=null,t.errorStatusCode=null,t.deprecationTargetArtistId=null,t.lastRelease=null,t.upcomingAlbum=null,t.concerts=null,t.artistPick=null,t.popularTracks=(0,u.pj)([]),t.similarArtists=(0,u.pj)([]),t.playlists=(0,u.pj)([]),t.albums=(0,u.pj)([]),t.discography=(0,u.pj)([]),t.compilations=(0,u.pj)([])}}));var R=a(60325)}},function(t){t.O(0,[1438,4030,2968,899,8626,9209,2498,7873,8695,3621,7628,7868,8421,4901,3490,1055,9352,8892,1579,9434,4496,6351,4667,5191,2171,361,1744],function(){return t(t.s=83697)}),_N_E=t.O()}]);