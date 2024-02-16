"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4786],{677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},c=void 0,a={id:"diagrams/instruction",title:"instruction",description:"Getting started",source:"@site/target/docs/diagrams/instruction.md",sourceDirName:"diagrams",slug:"/diagrams/instruction",permalink:"/metals/docs/diagrams/instruction",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/diagrams/instruction.md",tags:[],version:"current",frontMatter:{}},o={},l=[{value:"Getting started",id:"getting-started",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install plantuml ",(0,s.jsx)(n.code,{children:"cs install --contrib plantuml"})]}),"\n",(0,s.jsxs)(n.li,{children:["vscode has extension which allows to preview creating diagram - ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml",children:"PlantUML"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Documentation can be found on the ",(0,s.jsx)(n.a,{href:"https://plantuml.com/command-line",children:"website"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The most basic way to run it is ",(0,s.jsx)(n.code,{children:"plantuml file1 file2 file3"}),". This will look for @startXYZ into file1, file2 and file3. For each diagram, a .png file will be created."]}),"\n",(0,s.jsx)(n.p,{children:"For processing a whole directory, you can use:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'plantum "c:/directory1" "c:/directory2"'}),"\nThis command will search for @startXYZ and @endXYZ in ",(0,s.jsx)(n.code,{children:".pu"})," files of the ",(0,s.jsx)(n.code,{children:"c:/directory1"})," and ",(0,s.jsx)(n.code,{children:"c:/directory2"})," directories."]}),"\n",(0,s.jsx)(n.p,{children:"In terms of Metals docs layout one can run:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plantuml ./docs/diagrams ./docs/diagrams/out"})," from workspace"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plantuml . -o ./out/"})," from ",(0,s.jsx)(n.code,{children:"workspace/docs/diagrams"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"to regenerate diagrams."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);