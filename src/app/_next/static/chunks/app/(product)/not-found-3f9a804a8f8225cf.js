(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6412],{3650:function(t,n,o){Promise.resolve().then(o.bind(o,8964))},55784:function(t,n,o){"use strict";o.d(n,{h:function(){return r.h},n:function(){return i.n}});var i=o(33861),r=o(34906)},34906:function(t,n,o){"use strict";o.d(n,{h:function(){return a}});var i=o(98780),r=o(98639),e=o(38527);let a=t=>{let n=(0,e.k67)(),o=(0,r.useMemo)(()=>(0,i.Z)(()=>{if(t&&!n.canBack){n.replaceState({href:t});return}null==n||n.back()},200),[n,t]),a=(0,r.useMemo)(()=>(0,i.Z)(()=>{null==n||n.forward()},200),[n]);return{canBack:!!t||n.canBack,canForward:n.canForward,moveBack:o,moveForward:a}}},33861:function(t,n,o){"use strict";o.d(n,{n:function(){return v}});var i=o(9753),r=o(60836),e=o(9544),a=o(98639),s=o(80542),u=o(39513),c=o(28852),l=o(34906),d=o(68042),f=o.n(d);let v=(0,e.Pi)(t=>{let{withBackwardControl:n=!0,withForwardControl:o=!0,className:e,withBackwardFallback:d,buttonSize:v="xxs"}=t,{formatMessage:_}=(0,s.Z)(),{canBack:x,canForward:p,moveBack:m,moveForward:h}=(0,l.h)(d),g=(0,a.useRef)(null),k=(0,a.useCallback)(t=>{t.stopPropagation(),m()},[m]),N=(0,a.useCallback)(t=>{t.stopPropagation(),h()},[h]);return(0,a.useEffect)(()=>{g.current&&x&&g.current.focus()},[x]),(0,i.jsxs)("div",{className:(0,r.W)(f().root,e),children:[n&&(0,i.jsx)(u.z,{ref:g,"aria-label":_({id:"navigation.go-back"}),radius:"round",disabled:!x,size:v,icon:(0,i.jsx)(c.J,{size:"xxs",variant:"arrowLeft"}),onClick:k}),o&&(0,i.jsx)(u.z,{"aria-label":_({id:"navigation.go-forward"}),radius:"round",disabled:!p,size:v,icon:(0,i.jsx)(c.J,{size:"xxs",variant:"arrowRight"}),onClick:N})]})})},8964:function(t,n,o){"use strict";o.d(n,{NotFound:function(){return _}});var i=o(9753),r=o(60836),e=o(9544),a=o(31014),s=o(39513),u=o(28852),c=o(2570),l=o(55784),d=o(38527),f=o(23067),v=o.n(f);let _=(0,e.Pi)(t=>{let{className:n}=t,{contentRef:o}=(0,d.$Y6)(),e=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,i.jsxs)("div",{className:(0,r.W)(v().root,{[v().root_desktop]:!o},n),children:[(0,i.jsx)(l.n,{withBackwardFallback:"/",className:v().navigation,withForwardControl:!1}),(0,i.jsxs)("div",{className:v().content,children:[(0,i.jsx)(u.J,{className:v().icon,variant:"musicLogo",size:"xxl"}),(0,i.jsx)(c.Heading,{className:(0,r.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,i.jsx)(a.Z,{id:"page-error.page-does-not-exist"})}),(0,i.jsx)(c.Caption,{className:(0,r.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,i.jsx)(a.Z,{id:"page-error.page-does-not-exist-description"})}),(0,i.jsx)(s.z,{onClick:e,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,i.jsx)(c.Caption,{type:"controls",variant:"span",size:"m",children:(0,i.jsx)(a.Z,{id:"navigation.page-main"})})})]})]})})},68042:function(t){t.exports={root:"NavigationControls_root__uCVfX"}},23067:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},98780:function(t,n,o){"use strict";o.d(n,{Z:function(){return c}});var i=o(51866),r=o(12933),e=function(){return r.Z.Date.now()},a=o(87882),s=Math.max,u=Math.min,c=function(t,n,o){var r,c,l,d,f,v,_=0,x=!1,p=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function h(n){var o=r,i=c;return r=c=void 0,_=n,d=t.apply(i,o)}function g(t){var o=t-v,i=t-_;return void 0===v||o>=n||o<0||p&&i>=l}function k(){var t,o,i,r=e();if(g(r))return N(r);f=setTimeout(k,(t=r-v,o=r-_,i=n-t,p?u(i,l-o):i))}function N(t){return(f=void 0,m&&r)?h(t):(r=c=void 0,d)}function b(){var t,o=e(),i=g(o);if(r=arguments,c=this,v=o,i){if(void 0===f)return _=t=v,f=setTimeout(k,n),x?h(t):d;if(p)return clearTimeout(f),f=setTimeout(k,n),h(v)}return void 0===f&&(f=setTimeout(k,n)),d}return n=(0,a.Z)(n)||0,(0,i.Z)(o)&&(x=!!o.leading,l=(p="maxWait"in o)?s((0,a.Z)(o.maxWait)||0,n):l,m="trailing"in o?!!o.trailing:m),b.cancel=function(){void 0!==f&&clearTimeout(f),_=0,r=v=c=f=void 0},b.flush=function(){return void 0===f?d:N(e())},b}},41279:function(t,n,o){"use strict";var i=o(30014),r=o(2495);n.Z=function(t){return"symbol"==typeof t||(0,r.Z)(t)&&"[object Symbol]"==(0,i.Z)(t)}},87882:function(t,n,o){"use strict";o.d(n,{Z:function(){return v}});var i=/\s/,r=function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n},e=/^\s+/,a=o(51866),s=o(41279),u=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,v=function(t){if("number"==typeof t)return t;if((0,s.Z)(t))return u;if((0,a.Z)(t)){var n,o="function"==typeof t.valueOf?t.valueOf():t;t=(0,a.Z)(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=(n=t)?n.slice(0,r(n)+1).replace(e,""):n;var i=l.test(t);return i||d.test(t)?f(t.slice(2),i?2:8):c.test(t)?u:+t}}},function(t){t.O(0,[5219,4500,7606,2498,7873,919,8527,2171,361,1744],function(){return t(t.s=3650)}),_N_E=t.O()}]);