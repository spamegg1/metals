"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4015],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var l=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=l.createContext({}),m=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),h=m(a),u=r,k=h["".concat(s,".").concat(u)]||h[u]||c[u]||n;return a?l.createElement(k,i(i({ref:e},o),{},{components:a})):l.createElement(k,i({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=h;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5470:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>p,metadata:()=>s,toc:()=>m,default:()=>c});var l=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],p={author:"Tomasz Godzik",title:"Metals v0.9.10 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s={permalink:"/metals/blog/2021/01/19/lithium",source:"@site/blog/2021-01-19-lithium.md",title:"Metals v0.9.10 - Lithium",description:"We're happy to announce the release of Metals v0.9.10, which contains a number",date:"2021-01-19T00:00:00.000Z",formattedDate:"January 19, 2021",tags:[],readingTime:2.645,truncated:!1,prevItem:{title:"A Metals Retrospective (Part 1)",permalink:"/metals/blog/2021/02/02/metals-retro-part1"},nextItem:{title:"Metals v0.9.8 - Lithium",permalink:"/metals/blog/2020/12/19/lithium"}},m=[{value:"TL;DR",id:"tldr",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.9.9 (2021-01-19)",id:"v099-2021-01-19",children:[]}],o={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We're happy to announce the release of Metals v0.9.10, which contains a number\nof fixes and more importantly support for Scala 2.12.13. We're skipping over\nthe v0.9.9 release due to a significant bug that showed up after the release."),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Commits since last release"),(0,n.kt)("td",{align:"center"},"90")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Merged PRs"),(0,n.kt)("td",{align:"center"},"35")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Contributors"),(0,n.kt)("td",{align:"center"},"6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Closed issues"),(0,n.kt)("td",{align:"center"},"13")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"New features"),(0,n.kt)("td",{align:"center"})))),(0,n.kt)("p",null,"For full details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/33?closed=1"},"https://github.com/scalameta/metals/milestone/33?closed=1")),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,n.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for Scala 2.12.13."),(0,n.kt)("li",{parentName:"ul"},"Added named argument completion for Scala 3 (thanks\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),"!)."),(0,n.kt)("li",{parentName:"ul"},"Fix worksheet decorations to show up on focus."),(0,n.kt)("li",{parentName:"ul"},"Allow find references and rename for standalone files."),(0,n.kt)("li",{parentName:"ul"},"Fix compatibility with sbt < 1.3.0 builds.")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.9.8..v0.9.10\nChris Kipp\nTomasz Godzik\nDavid Strawn\nCheng Lian\nRikito Taniguchi\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("h2",{id:"v099-2021-01-19"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.9.10"},"v0.9.9")," (2021-01-19)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.9.8...v0.9.10"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bump mdoc to 2.2.15\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2409"},"#","2409"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Update Metals Scala 2.12 version to 2.12.13\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2404"},"#","2404"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Look for clientInfo in intializeParams instead of serverConfig.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2402"},"#","2402"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Ensure semanticdbVersion can be overwritten.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2401"},"#","2401"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},'Revert "Add release notes for Metals 0.9.9"\n',(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2397"},"#","2397"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes for Metals 0.9.9\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2396"},"#","2396"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for Scala 2.12.13\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2383"},"#","2383"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Clean up --version output.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2393"},"#","2393"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Avoid NPE when there is no ",(0,n.kt)("inlineCode",{parentName:"li"},"rootUri"),".\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2391"},"#","2391"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Bare minimum arg completion for scala3\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2369"},"#","2369"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 7.5.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2389"},"#","2389"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scribe, scribe-slf4j to 3.1.9\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2387"},"#","2387"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update jackson-databind to 2.12.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2386"},"#","2386"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.6-21-464e4ec4\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2385"},"#","2385"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix wrong name being displayed for a selected server\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2377"},"#","2377"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Make sure that worksheet decorations are shown again when the focused\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2372"},"#","2372"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Update Vim mappings and add reference to nvim-metals.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2367"},"#","2367"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Add in CopyWorksheetOutput to all so it's in the docs.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2368"},"#","2368"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Refactor doctor and make sure issues with sbt are properly reported\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2339"},"#","2339"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove Atom from the docs.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2364"},"#","2364"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.4\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2361"},"#","2361"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update munit-docs, sbt-munit to 0.7.20\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2360"},"#","2360"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update mdoc, sbt-mdoc to 2.2.14\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2359"},"#","2359"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.4.6\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2358"},"#","2358"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 7.3.2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2357"},"#","2357"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update coursier to 2.0.8\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2355"},"#","2355"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update directories to 23\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2354"},"#","2354"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scribe, scribe-slf4j to 3.1.8\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2353"},"#","2353"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Calculate semanticdb for standalone files\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2345"},"#","2345"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix incompatibility between currently used Bloop and sbt versions < 1.3.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2350"},"#","2350"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Bump Ammonite to the 2.13.4 published version.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2331"},"#","2331"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix an OrganizeImports configuration typo\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2342"},"#","2342"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/liancheng"},"liancheng"),")"),(0,n.kt)("li",{parentName:"ul"},"Update Deprecated Usage Of ",(0,n.kt)("inlineCode",{parentName:"li"},"setDeprecated")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"lsp4j"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2334"},"#","2334"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/isomarcte"},"isomarcte"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"-XX:+CMSClassUnloadingEnabled")," From ",(0,n.kt)("inlineCode",{parentName:"li"},".jvmopts"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2335"},"#","2335"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/isomarcte"},"isomarcte"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes for 0.9.8\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2332"},"#","2332"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}c.isMDXComponent=!0}}]);