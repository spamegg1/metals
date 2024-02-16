"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2810],{6273:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=s(4848),r=s(8453);const i={author:"Vadim Chelyshov",title:"Metals v0.11.4 - Aluminium",authorURL:"https://twitter.com/_dos65",authorImageURL:"https://github.com/dos65.png"},l=void 0,a={permalink:"/metals/blog/2022/04/27/aluminium",source:"@site/blog/2022-04-27-aluminium.md",title:"Metals v0.11.4 - Aluminium",description:"We're happy to announce the release of Metals v0.11.4, which includes the hotfix of the issue with cs install metals.",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[],readingTime:.88,hasTruncateMarker:!1,authors:[{name:"Vadim Chelyshov",url:"https://twitter.com/_dos65",imageURL:"https://github.com/dos65.png"}],frontMatter:{author:"Vadim Chelyshov",title:"Metals v0.11.4 - Aluminium",authorURL:"https://twitter.com/_dos65",authorImageURL:"https://github.com/dos65.png"},unlisted:!1,prevItem:{title:"Metals v0.11.5 - Aluminium",permalink:"/metals/blog/2022/04/28/aluminium"},nextItem:{title:"Metals v0.11.3 - Aluminium",permalink:"/metals/blog/2022/04/26/aluminium"}},h={authorsImageUrls:[void 0]},o=[{value:"TL;DR",id:"tldr",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.11.4 (2022-04-27)",id:"v0114-2022-04-27",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We're happy to announce the release of Metals v0.11.4, which includes the hotfix of ",(0,n.jsxs)(t.a,{href:"https://github.com/coursier/coursier/issues/2406",children:["the issue with ",(0,n.jsx)(t.code,{children:"cs install metals"})]}),"."]}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Commits since last release"}),(0,n.jsx)("td",{align:"center",children:"3"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Merged PRs"}),(0,n.jsx)("td",{align:"center",children:"3"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Contributors"}),(0,n.jsx)("td",{align:"center",children:"2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Closed issues"}),(0,n.jsx)("td",{align:"center",children:"1"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"New features"}),(0,n.jsx)("td",{align:"center",children:"0"})]})]})}),"\n",(0,n.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the\n",(0,n.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,n.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,n.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,n.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,n.jsxs)(t.p,{children:["Check out ",(0,n.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Fix the issue with installing Metals using coursier"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,n.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.11.3..v0.11.4\n2\tKamil Podsiad\u0142o\n1\tVadim Chelyshov\n"})}),"\n",(0,n.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,n.jsxs)(t.h2,{id:"v0114-2022-04-27",children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.11.4",children:"v0.11.4"})," (2022-04-27)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.11.3...v0.11.4",children:"Full Changelog"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["upgrade bsp4j version to a stable one\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3872",children:"#3872"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["chore: update server version after release\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3869",children:"#3869"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["docs: release notes\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/3860",children:"#3860"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);