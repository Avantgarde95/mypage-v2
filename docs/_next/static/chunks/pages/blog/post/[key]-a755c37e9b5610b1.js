(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{1898:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/[key]",function(){return e(5974)}])},2029:function(n,t,e){"use strict";function r(n){return function(n){var t=n.getFullYear(),e=n.getMonth()+1,r=n.getDate();return"".concat("".concat(t).padStart(4,"0"),"-").concat("".concat(e).padStart(2,"0"),"-").concat("".concat(r).padStart(2,"0"))}(new Date(n))}function o(n){var t=n.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return t&&11===t[7].length?t[7]:null}e.d(t,{gx:function(){return o},mr:function(){return r}})},5974:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return J},default:function(){return Q}});var r=e(2925),o=e(7969),i=e(6655),c=e(405),u=e(9773),a=e(8426),l=e(1320),f=e(6431),g=e(3954),s=e(3579),p=e(3591),d=e(3570),b=e(2797),h=e(9258),m=e(6033),Z=e(9899),v=e(2029),y=e(3223),w=e(7981);function x(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){x(n,t,e[t])}))}return n}function j(n,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):function(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n}function P(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function _(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function k(){var n=_(["\n  box-sizing: border-box;\n  vertical-align: middle;\n\n  font-size: 13px;\n  padding: 0 2px;\n  line-height: 16px;\n  background-color: ",";\n"]);return k=function(){return n},n}function z(){var n=_(["\n  max-width: 100%;\n"]);return z=function(){return n},n}function S(){var n=_(["\n  overflow-x: auto;\n\n  width: 100%;\n"]);return S=function(){return n},n}function L(){var n=_(["\n  box-sizing: border-box;\n\n  width: 100%;\n  padding: 0 21px;\n"]);return L=function(){return n},n}function E(){var n=_(["\n  margin-bottom: 2px;\n  font-size: 20px;\n  font-weight: bold;\n"]);return E=function(){return n},n}function N(){var n=_(["\n  margin-bottom: 16px;\n  font-size: 16px;\n"]);return N=function(){return n},n}function D(){var n=_(["\n  word-break: break-all;\n\n  width: 100%;\n  margin-bottom: 8px;\n  font-size: 16px;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n\n  h1 {\n    font-size: 20px;\n  }\n\n  h2 {\n    font-size: 18px;\n  }\n\n  h3 {\n    font-size: 16px;\n  }\n\n  ul {\n    padding-left: 24px;\n  }\n\n  a {\n    cursor: pointer;\n\n    font-weight: normal;\n    color: ",";\n  }\n\n  table {\n    box-sizing: border-box;\n\n    border-collapse: collapse;\n    border: 1px solid ",";\n\n    th,\n    td {\n      box-sizing: border-box;\n\n      padding: 8px;\n      border: 1px solid ",';\n    }\n  }\n\n  code {\n    font-family: "SF Mono", monospace !important;\n  }\n']);return D=function(){return n},n}function C(){var n=_(["\n  margin-bottom: 16px;\n  font-size: 16px;\n"]);return C=function(){return n},n}function X(){var n=_(["\n  ","\n\n  color: ",";\n"]);return X=function(){return n},n}f.Z.registerLanguage("js",s.Z),f.Z.registerLanguage("javascript",s.Z),f.Z.registerLanguage("ts",p.Z),f.Z.registerLanguage("typescript",p.Z),f.Z.registerLanguage("jsx",d.Z),f.Z.registerLanguage("tsx",b.Z),f.Z.registerLanguage("cpp",h.Z),f.Z.registerLanguage("python",m.Z),f.Z.registerLanguage("bash",Z.Z);var B={code:function(n){n.node;var t=n.inline,e=n.className,o=n.children,i=P(n,["node","inline","className","children"]),c=/language-(\w+)/.exec(e||"");return!t&&c?(0,r.tZ)(f.Z,j(O({style:g.Z,language:c[1].toLowerCase()},i),{children:String(o).replace(/\n$/,"")})):(0,r.tZ)(F,j(O({className:e},i),{children:o}))},a:function(n){n.node;var t,e=P(n,["node"]),o=(0,v.gx)(null!==(t=e.href)&&void 0!==t?t:"");return null===o?(0,r.tZ)(y.Z,O({},e)):(0,r.tZ)(G,{width:560,height:315,frameBorder:0,allowFullScreen:!0,src:"https://www.youtube.com/embed/".concat(o)})},img:function(n){n.node;var t=n.src,e=n.alt,o=P(n,["node","src","alt"]);return(0,r.tZ)(M,{children:(0,r.tZ)("img",O({src:t,alt:e},o))})}},F=i.Z.code(k(),(function(n){var t=n.theme;return(0,c.m4)(t.color.gray3,.7)})),G=i.Z.iframe(z()),M=i.Z.div(S()),T=i.Z.div(L()),q=i.Z.div(E()),A=i.Z.div(N()),H=i.Z.div(D(),(function(n){return n.theme.color.gray2}),(function(n){return n.theme.color.gray2}),(function(n){return n.theme.color.blue}),(function(n){return n.theme.color.gray2}),(function(n){return n.theme.color.gray2})),I=i.Z.div(C()),K=(0,i.Z)(y.Z)(X(),w.GX,(function(n){return n.theme.color.blue})),Y=function(n){var t=n.post;return(0,r.BX)(T,{children:[(0,r.tZ)(q,{children:t.title}),(0,r.tZ)(A,{children:(0,v.mr)(t.time)}),(0,r.tZ)(H,{children:(0,r.tZ)(u.D,{components:B,remarkPlugins:[a.Z],rehypePlugins:[l.Z],skipHtml:!0,children:t.content})}),(0,r.BX)(I,{children:["Category: ",(0,r.tZ)(K,{href:"/blog/category/".concat(t.category.toLowerCase()),children:t.category})]}),(0,r.tZ)(o.qw,{shortname:"Avantgarde95",config:{url:"https://avantgarde95.github.io/blog/".concat(t.key),identifier:t.title,title:t.title}})]})},$=e(5594),J=!0,Q=function(n){var t=n.post;return(0,r.tZ)($.Z,{title:{Korean:"\ube14\ub85c\uadf8",English:"Blog"},children:t&&(0,r.tZ)(Y,{post:t})})}}},function(n){n.O(0,[98,789,594,774,888,179],(function(){return t=1898,n(n.s=t);var t}));var t=n.O();_N_E=t}]);