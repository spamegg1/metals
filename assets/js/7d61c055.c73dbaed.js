"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6575:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>u});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"overview",title:"Build Tools Overview",sidebar_label:"Overview"},s={unversionedId:"build-tools/overview",id:"build-tools/overview",isDocsHomePage:!1,title:"Build Tools Overview",description:"Metals works with the following build tools with varying degrees of",source:"@site/target/docs/build-tools/overview.md",sourceDirName:"build-tools",slug:"/build-tools/overview",permalink:"/metals/docs/build-tools/overview",editUrl:"https://github.com/scalameta/metals/edit/main/docs/target/docs/build-tools/overview.md",version:"current",sidebar_label:"Overview",frontMatter:{id:"overview",title:"Build Tools Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Metals User Configuration",permalink:"/metals/docs/editors/user-configuration"},next:{title:"Bloop",permalink:"/metals/docs/build-tools/bloop"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Goto library dependencies",id:"goto-library-dependencies",children:[]},{value:"Find references",id:"find-references",children:[]},{value:"Integrating a new build tool",id:"integrating-a-new-build-tool",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metals works with the following build tools with varying degrees of\nfunctionality."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Installation"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Goto library dependencies"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Find references"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sbt"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic via Bloop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maven"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic via Bloop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Semi-automatic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gradle"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic via Bloop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mill"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic via Bloop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bloop"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Semi-automatic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Semi-automatic")))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automatic via Bloop"),": you can import the build directly from the language\nserver without the need for running custom steps in the terminal. The build is\nexported to ",(0,o.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop"),", a Scala build server\nthat provides fast incremental compilation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automatic"),": you can import the build directly from the language server\nwithout the need for running custom steps in the terminal. To use automatic\ninstallation start the Metals language server in the root directory of your\nbuild."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manual"),": setting up Metals requires a few manual steps to generate\n",(0,o.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop"},"Bloop")," JSON files. In addition to normal\nBloop installation, Metals requires that the project sources are compiled with\nthe\n",(0,o.kt)("a",{parentName:"p",href:"https://scalameta.org/docs/semanticdb/guide.html#producing-semanticdb"},"semanticdb-scalac"),"\ncompiler plugin and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Yrangepos")," option enabled."),(0,o.kt)("h2",{id:"goto-library-dependencies"},"Goto library dependencies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automatic"),': it is possible to navigate Scala+Java library dependencies using\n"Goto definition".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Semi-automatic"),": navigation in library dependency sources works as long as\nthe\n",(0,o.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/docs/configuration-format/"},"Bloop JSON files"),"\nare populated with ",(0,o.kt)("inlineCode",{parentName:"p"},"*-sources.jar"),"."),(0,o.kt)("h2",{id:"find-references"},"Find references"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automatic"),": it is possible to find all references to a symbol in the project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Semi-automatic"),": it is possible to 'Find symbol references' as soon the\nSemanticDB compiler plugin is manually enabled in the build, check separate\nbuild tool pages for details."),(0,o.kt)("h2",{id:"integrating-a-new-build-tool"},"Integrating a new build tool"),(0,o.kt)("p",null,"Metals works with any build tool that supports the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/bsp/blob/master/docs/bsp.md"},"Build Server Protocol"),".\nFor more information, see the\n",(0,o.kt)("a",{parentName:"p",href:"/metals/docs/integrations/new-build-tool"},"guide to integrate new build tools"),"."))}u.isMDXComponent=!0}}]);