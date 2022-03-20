(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{12666:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r,o,c=n(52209),s=(n(67294),n(29163)),a=n(61296),i=n(9811),l=n(85893),d=function(e){var t=e.intro,n=e.topper,r=e.toc,o=e.children,c=e.className;return(0,l.jsxs)(u,{className:c,children:[n&&(0,l.jsx)(a.Z,{gridArea:"topper",children:n}),r&&(0,l.jsx)(f,{gridArea:"sidebar",alignSelf:"flex-start",className:"border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0",children:r}),t&&(0,l.jsx)(a.Z,{gridArea:"intro",children:t}),(0,l.jsx)(a.Z,{gridArea:"content","data-search":"article-body",children:o})]})},u=(0,s.ZP)(a.Z)(r||(r=(0,c.Z)(["\n  max-width: 720px;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-areas:\n    'topper'\n    'intro'\n    'sidebar'\n    'content';\n\n  row-gap: ",";\n\n  @media (min-width: ",") {\n    max-width: none;\n    padding-top: ",";\n    grid-template-rows: auto 1fr;\n    grid-template-columns: minmax(500px, 720px) minmax(220px, 1fr);\n    grid-template-areas:\n      'topper sidebar'\n      'intro sidebar'\n      'content sidebar';\n    column-gap: ",";\n    row-gap: 0;\n  }\n"])),(0,i.U2)("space.2"),(0,i.U2)("breakpoints.3"),(0,i.U2)("space.4"),(0,i.U2)("space.9")),f=(0,s.ZP)(a.Z)(o||(o=(0,c.Z)(["\n  @media (min-width: ",") {\n    position: sticky;\n    padding-top: ",";\n    top: 4em;\n    max-height: 75vh;\n    overflow-y: auto;\n    padding-bottom: ",";\n  }\n"])),(0,i.U2)("breakpoints.3"),(0,i.U2)("space.4"),(0,i.U2)("space.4"))},62417:function(e,t,n){"use strict";n.d(t,{D:function(){return Y}});var r=n(67294),o=n(11163),c=n(5152),s=n(85529),a=n(4932),i=n(46359),l=n(31762),d=n(98178),u=n(93707),f=n(28558),p=n(83976),m=n(775),h=n(97527),b=n(12666),j=n(92809),g=n(31955),x=n(90009),y=n(97335),v=n(41141),O=n(83169),w=n(7547),P=n(85893);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=[{id:"mac",label:"Mac"},{id:"windows",label:"Windows"},{id:"linux",label:"Linux"}];function _(e){Array.from(document.querySelectorAll(".extended-markdown")).filter((function(e){return S.some((function(t){return e.classList.contains(t.id)}))})).forEach((function(t){t.style.display=t.classList.contains(e)?"":"none"})),Array.from(document.querySelectorAll(S.map((function(e){return".platform-".concat(e.id)})).join(", "))).forEach((function(t){t.style.display=t.classList.contains("platform-".concat(e))?"":"none"}))}var Z=function(e){var t=e.variant,n=void 0===t?"subnav":t,c=(0,u.$Y)(),s=c.defaultPlatform,a=c.detectedPlatforms,i=(0,r.useState)(s||""),l=i[0],d=i[1],f=(0,o.useRouter)().asPath;(0,r.useEffect)((function(){var e=(0,w.Z)().os;"ios"===e&&(e="mac");var t=s||g.Z.get("osPreferred")||e||"linux";d(t),_(t)}),[f]),(0,r.useEffect)((function(){l&&!a.includes(l)&&d(function(e){var t=S.find((function(t){return e.includes(t.id)}));return(null===t||void 0===t?void 0:t.id)||"linux"}(a))}),[l,a.join(",")]);var p=function(e){d(e),_(e),(0,O.qP)({type:O.tw.preference,preference_name:"os",preference_value:e}),g.Z.set("osPreferred",e,{sameSite:"strict",secure:!0})},m=S.filter((function(e){return a.includes(e.id)})),h={"data-testid":"platform-picker","aria-label":"Platform picker","data-default-platform":s,className:"mb-4"};return"subnav"===n?(0,P.jsx)(x.Z,N(N({},h),{},{children:(0,P.jsx)(x.Z.Links,{children:m.map((function(e){return(0,P.jsx)(x.Z.Link,{"data-platform":e.id,as:"button",selected:e.id===l,onClick:function(){p(e.id)},children:e.label},e.id)}))})})):"underlinenav"===n?(0,P.jsx)(y.Z,N(N({},h),{},{children:m.map((function(e){return(0,P.jsx)(y.Z.Link,{"data-platform":e.id,as:"button",selected:e.id===l,sx:{color:"var(--color-fg-default)","&.selected":{color:"var(--color-fg-default)"},":hover":{color:"var(--color-fg-default)"},":focus":{color:"var(--color-fg-default)",outline:"-webkit-focus-ring-color auto 1px;"}},onClick:function(){p(e.id)},children:e.label},e.id)}))})):(0,P.jsx)(v.Z,N(N({},h),{},{children:m.map((function(e){return(0,P.jsx)(v.Z.Link,{"data-platform":e.id,as:"button",selected:e.id===l,onClick:function(){p(e.id)},children:e.label},e.id)}))}))},L=n(96776);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=["cli","desktop","webui","curl","codespaces","vscode","importer_cli","graphql"],C={webui:"Web browser",cli:"GitHub CLI",curl:"cURL",desktop:"Desktop",codespaces:"Codespaces",vscode:"Visual Studio Code",importer_cli:"GitHub Enterprise Importer CLI",graphql:"GraphQL API"};var T=function(e){var t=e.variant,n=void 0===t?"subnav":t,o=(0,u.$Y)(),c=o.defaultTool,s=o.detectedTools,a=(0,r.useState)(function(e,t){return e&&t.includes(e)?e:t.includes("webui")?"webui":t.includes("cli")?"cli":t[0]}(c,s)),i=a[0],l=a[1],d={"data-testid":"tool-picker","aria-label":"Tool picker","data-default-tool":c,className:"mb-4"};return(0,r.useEffect)((function(){var e=g.Z.get("toolPreferred");e&&s.includes(e)&&l(e)}),[]),(0,r.useEffect)((function(){(0,L._8)(document,(function(){var e;e=i,Array.from(document.querySelectorAll(".extended-markdown")).filter((function(e){return E.some((function(t){return e.classList.contains(t)}))})).forEach((function(t){t.style.display=t.classList.contains(e)?"":"none"})),Array.from(document.querySelectorAll(E.map((function(e){return".tool-".concat(e)})).join(", "))).forEach((function(t){t.style.display=t.classList.contains("tool-".concat(e))?"":"none"}))}))}),[i]),"underlinenav"===n?(0,P.jsx)(y.Z,D(D({},d),{},{children:s.map((function(e){return(0,P.jsx)(y.Z.Link,{"data-tool":e,as:"button",selected:e===i,sx:{color:"var(--color-fg-default)","&.selected":{color:"var(--color-fg-default)"},":hover":{color:"var(--color-fg-default)"},":focus":{color:"var(--color-fg-default)",outline:"-webkit-focus-ring-color auto 1px;"}},onClick:function(){!function(e){l(e),(0,O.qP)({type:O.tw.preference,preference_name:"application",preference_value:e}),g.Z.set("toolPreferred",e,{sameSite:"strict",secure:!0})}(e)},children:C[e]},e)}))})):null},A=n(94184),H=n.n(A),U=n(52972),M=n(92646),q=function e(t){return(0,P.jsx)(U.S.Item,{as:"li",className:t.platform,sx:{listStyle:"none",padding:"2px"},children:(0,P.jsxs)("div",{className:H()("lh-condensed d-block width-full"),children:[(0,P.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contents}}),t.items&&t.items.length>0?(0,P.jsx)("ul",{className:"ml-3",children:t.items.map(e)}):null]})},t.contents)};function G(e){var t=e.pageTitle,n=e.miniTocItems,r=(0,f.$)("pages").t;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M.Z,{as:"h2",id:"in-this-article",className:"mb-1",sx:{fontSize:1},children:(0,P.jsx)(i.r,{href:"#in-this-article",children:r("miniToc")})}),(0,P.jsx)(U.S,{items:n.map((function(e,n){return{key:t+n,text:t,renderItem:function(){return(0,P.jsx)("ul",{children:q(e)})}}}))},t)]})}var $=(0,c.default)((function(){return Promise.all([n.e(865),n.e(37)]).then(n.bind(n,61037))}),{ssr:!1,loadableGenerated:{webpack:function(){return[61037]},modules:["../components/article/ArticlePage.tsx -> ./ClientSideHighlightJS"]}}),F={"/actions/automating-builds-and-tests/building-and-testing-nodejs":{href:"/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=nodejs"},"/actions/automating-builds-and-tests/building-and-testing-python":{href:"/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=python"},"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-nodejs-project-for-codespaces":{href:"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=nodejs"},"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-dotnet-project-for-codespaces":{href:"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=dotnet"},"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-java-project-for-codespaces":{href:"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=java"},"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-python-project-for-codespaces":{href:"/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=py"}},Y=function(e){var t=e.children,n=(0,o.useRouter)().asPath,c=(0,u.$Y)(),j=c.title,g=c.intro,x=c.effectiveDate,y=c.renderedPage,v=c.contributor,O=c.permissions,w=c.includesPlatformSpecificContent,k=c.includesToolSpecificContent,N=c.product,S=c.miniTocItems,_=c.currentLearningTrack,L=(0,f.$)("pages").t,I=n.split("?")[0],D=(0,r.useState)(!1),E=D[0],C=D[1];return(0,r.useEffect)((function(){document.querySelector("[data-highlight]")&&C(!0)}),[n]),(0,P.jsxs)(l.H,{children:[E&&(0,P.jsx)($,{}),(0,P.jsxs)("div",{className:"container-xl px-3 px-md-6 my-4",children:[(0,P.jsx)(b.A,{topper:(0,P.jsx)(d.j,{children:j}),intro:(0,P.jsxs)(P.Fragment,{children:[v&&(0,P.jsx)(a.U,{variant:"info",className:"mb-3",children:(0,P.jsxs)("p",{children:[(0,P.jsx)("span",{className:"mr-2",children:(0,P.jsx)(s.InfoIcon,{})}),L("contributor_callout")," ",(0,P.jsx)("a",{href:v.URL,children:v.name}),"."]})}),g&&(0,P.jsx)(h.r,{"data-testid":"lead","data-search":"lead",children:g}),O&&(0,P.jsxs)("div",{className:"permissions-statement d-table",children:[(0,P.jsx)("div",{className:"d-table-cell pr-2",children:(0,P.jsx)(s.ShieldLockIcon,{size:16})}),(0,P.jsx)("div",{className:"d-table-cell",dangerouslySetInnerHTML:{__html:O}})]}),w&&(0,P.jsx)(Z,{variant:"underlinenav"}),k&&(0,P.jsx)(T,{variant:"underlinenav"}),N&&(0,P.jsx)(a.U,{variant:"success",className:"mb-4",dangerouslySetInnerHTML:{__html:N}})]}),toc:(0,P.jsxs)(P.Fragment,{children:[!!F[I]&&(0,P.jsxs)("div",{className:"flash mb-3",children:[(0,P.jsx)(s.ZapIcon,{className:"mr-2"}),(0,P.jsx)(i.r,{href:F[I].href,children:"Try the new interactive article"})]}),S.length>1&&(0,P.jsx)(G,{pageTitle:j,miniTocItems:S})]}),children:(0,P.jsxs)("div",{id:"article-contents",children:[(0,P.jsx)(m.S,{children:t||y}),x&&(0,P.jsxs)("div",{className:"mt-4",id:"effectiveDate",children:["Effective as of:"," ",(0,P.jsx)("time",{dateTime:new Date(x).toISOString(),children:new Date(x).toDateString()})]})]})}),null!==_&&void 0!==_&&_.trackName?(0,P.jsx)("div",{className:"mt-4",children:(0,P.jsx)(p.V,{track:_})}):null]})]})}},98178:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(85893),o=function(e){var t=e.children;return(0,r.jsx)("div",{className:"d-flex flex-items-baseline flex-justify-between",children:(0,r.jsx)("h1",{className:"border-bottom-0",children:t})})}},83976:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var r=n(28558),o=n(85893);function c(e){var t=e.track,n=(0,r.$)("learning_track_nav").t,c=t.prevGuide,s=t.nextGuide,a=t.trackName,i=t.trackProduct;return(0,o.jsxs)("div",{"data-testid":"learning-track-nav",className:"py-3 px-4 rounded color-bg-default border d-flex flex-justify-between",children:[(0,o.jsx)("span",{className:"d-flex flex-column",children:c&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"f6 color-fg-muted",children:n("prevGuide")}),(0,o.jsx)("a",{href:"".concat(c.href,"?learn=").concat(a,"&learnProduct=").concat(i),className:"text-bold color-fg-muted",children:c.title})]})}),(0,o.jsx)("span",{className:"d-flex flex-column flex-items-end",children:s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"f6 color-fg-muted",children:n("nextGuide")}),(0,o.jsx)("a",{href:"".concat(s.href,"?learn=").concat(a,"&learnProduct=").concat(i),className:"text-bold color-fg-muted text-right f4",children:s.title})]})})]})}},93707:function(e,t,n){"use strict";n.d(t,{Q3:function(){return o},$Y:function(){return c}});var r=n(67294),o=(0,r.createContext)(null),c=function(){var e=(0,r.useContext)(o);if(!e)throw new Error('"useArticleContext" may only be used inside "ArticleContext.Provider"');return e}},4932:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(94184),o=n.n(r),c=n(55784),s=n.n(c),a=n(85893),i=function(e){var t=e.variant,n=e.className,r=e.dangerouslySetInnerHTML,c=e.children;return(0,a.jsx)("div",{"data-testid":"callout",className:o()(n,s().container,"border rounded-1 p-3 f5","success"===t&&"color-border-success color-bg-success","info"===t&&"color-border-accent-emphasis color-bg-accent","warning"===t&&"color-bg-attention color-border-attention-emphasis"),dangerouslySetInnerHTML:r,children:c})}},97527:function(e,t,n){"use strict";n.d(t,{r:function(){return p}});var r=n(92809),o=n(10219),c=n(94184),s=n.n(c),a=n(48072),i=n.n(a),l=n(85893),d=["children","className","as"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=e.children,n=e.className,r=e.as,c=void 0===r?"div":r,a=(0,o.Z)(e,d);return(0,l.jsx)(c,f(f({className:s()("f2 color-fg-muted mb-3",i().container,n)},a),"string"===typeof t?{dangerouslySetInnerHTML:{__html:t}}:{children:t}))}},775:function(e,t,n){"use strict";n.d(t,{S:function(){return p}});var r=n(92809),o=n(10219),c=n(94184),s=n.n(c),a=n(59267),i=n.n(a),l=n(85893),d=["children","as","className"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.children,n=e.as,r=void 0===n?"div":n,c=e.className,a=(0,o.Z)(e,d);return(0,l.jsx)(r,f(f({},a),{},{className:s()(i().markdownBody,"markdown-body",c)},"string"===typeof t?{dangerouslySetInnerHTML:{__html:t}}:{children:t}))}},55784:function(e){e.exports={container:"Callout_container__ppasH"}},48072:function(e){e.exports={container:"Lead_container__7YW6Y"}},59267:function(e){e.exports={markdownBody:"MarkdownContent_markdownBody__2Fa4B","has-nested-table":"MarkdownContent_has-nested-table__LPfu3"}}}]);