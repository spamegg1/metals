"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=m(a),c=r,f=h["".concat(p,".").concat(c)]||h[c]||u[c]||n;return a?l.createElement(f,i(i({ref:t},s),{},{components:a})):l.createElement(f,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9976:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>m,default:()=>u});var l=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],o={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.5.0 - Mercury",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},p={permalink:"/metals/blog/2019/04/12/mercury",source:"@site/blog/2019-04-12-mercury.md",title:"Metals v0.5.0 - Mercury",description:'We are excited to announce the release of Metals v0.5, codename "Mercury" \ud83c\udf89',date:"2019-04-12T00:00:00.000Z",formattedDate:"April 12, 2019",tags:[],readingTime:6.49,truncated:!1,prevItem:{title:"Metals v0.5.1 - Mercury",permalink:"/metals/blog/2019/04/26/mercury"},nextItem:{title:"Metals v0.4.4 - Tin",permalink:"/metals/blog/2019/02/01/tin"}},m=[{value:"Code completions",id:"code-completions",children:[]},{value:"Hover (aka. type at point)",id:"hover-aka-type-at-point",children:[]},{value:"Signature help (aka. parameter hints)",id:"signature-help-aka-parameter-hints",children:[]},{value:"Code folding",id:"code-folding",children:[]},{value:"Document highlight",id:"document-highlight",children:[]},{value:"Faster and more relevant fuzzy symbol search",id:"faster-and-more-relevant-fuzzy-symbol-search",children:[]},{value:"Goto definition for in-memory edits",id:"goto-definition-for-in-memory-edits",children:[]},{value:"Standalone Scala files outside a build tool",id:"standalone-scala-files-outside-a-build-tool",children:[]},{value:"New collaboration with VirtusLab",id:"new-collaboration-with-virtuslab",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]}],s={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'We are excited to announce the release of Metals v0.5, codename "Mercury" \ud83c\udf89\nThis release introduces new features, performance improvements and bug fixes\nwith highlights including:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"code completions"),(0,n.kt)("li",{parentName:"ul"},"parameter hints"),(0,n.kt)("li",{parentName:"ul"},"show type at point"),(0,n.kt)("li",{parentName:"ul"},"code folding"),(0,n.kt)("li",{parentName:"ul"},"document highlight")),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Atom, Vim,\nSublime Text and Emacs. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," along with contributors from the\ncommunity."),(0,n.kt)("p",null,"In this milestone we merged 76 PRs and closed 26 issues, full details:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/4?closed=1"},"https://github.com/scalameta/metals/milestone/4?closed=1"),"."),(0,n.kt)("h2",{id:"code-completions"},"Code completions"),(0,n.kt)("p",null,"It's now possible to use code completions to explore APIs, implement interfaces,\ngenerate exhaustive pattern matches and more."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/56036958-725bac00-5d2e-11e9-9cf7-46249125494a.gif",alt:"2019-04-12 14 19 39"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auto-import"),": symbols that are not in scope are automatically imported\nlocally. Imports still need to be organized manually, we are exploring ways to\nautomate this workflow in the future."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Override def"),": implement methods from the super class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exhaustive match"),": generate an exhaustive pattern match for sealed types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"String interpolator"),": automatically convert string literals into string\ninterpolators."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Filename"),": complete classnames based on the enclosing file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Documentation"),": read the docstring for method symbols by pressing\nctrl+space in VS Code.")),(0,n.kt)("h2",{id:"hover-aka-type-at-point"},"Hover (aka. type at point)"),(0,n.kt)("p",null,"It's now possible to see the expression type and symbol signature under the\ncursor."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/2MfQvsM.gif",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Expression type"),": shows the non-generic type of the highlighted expression."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Symbol signature"),": shows the generic signature of symbol under the cursor\nalong with its docstring, if available.")),(0,n.kt)("h2",{id:"signature-help-aka-parameter-hints"},"Signature help (aka. parameter hints)"),(0,n.kt)("p",null,"It's now possible to view a method signature and overloads as you fill in\narguments."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/DAWIrHu.gif",alt:null})),(0,n.kt)("h2",{id:"code-folding"},"Code folding"),(0,n.kt)("p",null,"It's now possible to fold ranges such as large expressions, import groups and\ncomments."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/3fdd7ae28907ac61c0a1ac5fdc07d085245957aa/68747470733a2f2f692e696d6775722e636f6d2f667149554a54472e676966",alt:null})),(0,n.kt)("p",null,"Big thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/marek1840"},"@marek1840")," for contributing this\nfeature!"),(0,n.kt)("h2",{id:"document-highlight"},"Document highlight"),(0,n.kt)("p",null,"It's now possible to highlight references to the same symbol in the open file."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/0uhc9P5.gif",alt:null})),(0,n.kt)("p",null,"Big thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tgodzik"},"@tgodzik")," for contributing this\nfeature!"),(0,n.kt)("h2",{id:"faster-and-more-relevant-fuzzy-symbol-search"},"Faster and more relevant fuzzy symbol search"),(0,n.kt)("p",null,"Previously, fuzzy symbol search (",(0,n.kt)("inlineCode",{parentName:"p"},"workspace/symbol")," in LSP) always returned\nresults from both the workspace and library dependencies. Now, fuzzy symbol\nsearch returns only results from the workspace unless the query contains a\nsemicolon character ",(0,n.kt)("inlineCode",{parentName:"p"},";"),". For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'query "Future": workspace only, with fallback to library dependencies if\nworkspace contains 0 results'),(0,n.kt)("li",{parentName:"ul"},'queries "Future;" or ";Future" or "Fut;ure": workspace + library dependencies.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/w5yrK1w.gif",alt:null})),(0,n.kt)("p",null,"This change improves the quality for the search results since most often you\nwant to navigate to symbols defined in the workspace. A nice side-effect is that\nworkspace-only searches are faster because we avoid redundant work by not\nlooking at library dependencies."),(0,n.kt)("p",null,"In addition, this release introduces a new in-memory index for workspace-only\nsymbol queries resulting in even better performance compared to the last\nrelease."),(0,n.kt)("h2",{id:"goto-definition-for-in-memory-edits"},"Goto definition for in-memory edits"),(0,n.kt)("p",null,"Previously, goto definition worked only for identifiers that had been saved and\nsuccessfully compiled in the build tool. Now, you can use goto definition for\nsymbols that you just typed even if the source file hasn't been saved or\ncontains type errors."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/63PYPhX.gif",alt:null})),(0,n.kt)("h2",{id:"standalone-scala-files-outside-a-build-tool"},"Standalone Scala files outside a build tool"),(0,n.kt)("p",null,"Previously, semantic features like goto definition worked only for sources that\nbelong to a build project. Now, Metals provides completions, parameter hints,\nhover and definition for local symbols in standalone Scala files. The classpath\nfor standalone Scala files includes the JDK and the Scala standard library so\nfeatures like completion will not understand symbols from external library\ndependencies."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Known limitation"),": only syntax errors are published for standalone Scala\nfiles, the file must belong to a build in order to see type errors."),(0,n.kt)("h2",{id:"new-collaboration-with-virtuslab"},"New collaboration with VirtusLab"),(0,n.kt)("p",null,"As part of a new collaboration between ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com/"},"VirtusLab")," and\nthe Scala Center, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/marek1840"},"Marek \u017barnowski (@marek1840)"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tgodzik"},"Tomasz Godzik (@tgodzik)")," will be contributing\nto Metals development for the coming months. They have already contributed\nseveral impressive pull requests:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textDocument/foldingRange"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/632"},"(#632)"),": code folding that\nunderstands Scala syntax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textDocument/documentHighlight"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/621"},"(#621)"),": highlight occurrences\nof a symbol in the current file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textDocument/completion"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/640"},"(#640)"),': override def\ncompletions from without the need to type "override def ".')),(0,n.kt)("p",null,"It is our pleasure to welcome them to the team and we look forward to working\ntogether with them to improve the Scala editing experience :)"),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release! In particular, big\nthanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jvican/"},"@jvican")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gabro/"},"@gabro")," for invaluable feedback both online and\noffline."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.4.4..v0.5.0\n\xd3lafur P\xe1ll Geirsson\nMarek \u017barnowski\nJohan Muedsam\nJesusMtnez\nTomasz Godzik\nTim Nieradzik\nAyoub Benali\nEric Peters\nAlexey Alekhin\nkeiSunagawa\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement goto definition fallback with the presentation compiler.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/645"},"#","645"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Generate exhaustive pattern match for sealed types.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/643"},"#","643"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Improve quality and performance of workspace/symbol, fixes ","#","639.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/642"},"#","642"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Enable workspace query to match package object\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/641"},"#","641"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mudsam"},"mudsam"),")"),(0,n.kt)("li",{parentName:"ul"},"Make completions work on overr\\<COMPLETE",">"," and def\\<COMPLETE",">",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/640"},"#","640"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Give CompletionPosition finer control over sorting, fixes ","#","619.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/638"},"#","638"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Several UX improvements ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/637"},"#","637"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Use fallback presentation compiler for missing build target.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/634"},"#","634"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix six bugs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/633"},"#","633"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement textDocument/foldingRange\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/632"},"#","632"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/marek1840"},"marek1840"),")"),(0,n.kt)("li",{parentName:"ul"},"Provide fuzzier type member matching and more polished sorting.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/629"},"#","629"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Sort symbols defined in the current file to the top, fixes ","#","618.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/628"},"#","628"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Render @see as links. Improve inline link handling and update test cases.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/627"},"#","627"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mudsam"},"mudsam"),")"),(0,n.kt)("li",{parentName:"ul"},"Disable macro-paradise compiler plugin, fixes ","#","622.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/625"},"#","625"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Improve completion snippets, fixes ","#","610.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/623"},"#","623"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement textDocument/documentHighlight\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/621"},"#","621"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Handle exceptions when computing completion position.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/616"},"#","616"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't eagerly load presentation compiler during tests.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/614"},"#","614"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Eagerly load presentation compiler for open buffers.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/605"},"#","605"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Eagerly load Scalafmt during initialized\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/604"},"#","604"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Complete filename when defining toplevel class/trait/object\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/603"},"#","603"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove signature help fallback in hover.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/602"},"#","602"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix ","#","599, don't insert import above generated parameter accessors\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/600"},"#","600"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Several small fixes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/597"},"#","597"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Support navigation for library dependencies in Scala versions.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/596"},"#","596"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement hover ","(","aka. type at point",")",".\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/595"},"#","595"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix auto-import position around definition annotations, fixes ","#","593\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/594"},"#","594"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Provide completions on ",(0,n.kt)("inlineCode",{parentName:"li"},"case")," for valid subclasses.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/592"},"#","592"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Polish snippets when completing with existing parentheses and braces\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/590"},"#","590"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Handle generic unapply signatures in signature help.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/589"},"#","589"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Explicitly set filter text for all completions.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/588"},"#","588"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Add server property config to disable features.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/587"},"#","587"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for non-Lightbend compilers\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/586"},"#","586"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tindzk"},"tindzk"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix signature help bug for tuple patterns.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/585"},"#","585"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Escape keyword identifier in packag prefixes.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/584"},"#","584"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Filter out ensuring and -",">"," extension methods from Predef.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/583"},"#","583"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Include method signature in completion item label.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/581"},"#","581"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Two completion improvements\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/579"},"#","579"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Insert local import when completing workspace symbol.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/578"},"#","578"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Update Sublime Text doc regarding Goto symbol in workspace\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/577"},"#","577"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,n.kt)("li",{parentName:"ul"},"Include ",(0,n.kt)("inlineCode",{parentName:"li"},"case")," completion when writing partial function on tuples.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/576"},"#","576"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Restart the presentation compile more aggressively.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/575"},"#","575"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix ","#","573, provide unique filter text for each interpolator completion item\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/574"},"#","574"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix ","#","569, remove completion items with ",(0,n.kt)("inlineCode",{parentName:"li"},"\\_CURSOR\\_")," name.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/572"},"#","572"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement ",(0,n.kt)("inlineCode",{parentName:"li"},"override def")," completions.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/570"},"#","570"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Make bloop server startup more robust, reuse sockets wherever possible.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/566"},"#","566"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mudsam"},"mudsam"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement type member selection in string interpolators.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/563"},"#","563"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Update Atom info ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/561"},"#","561"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/laughedelic"},"laughedelic"),")"),(0,n.kt)("li",{parentName:"ul"},"Improve string interpolator completions\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/560"},"#","560"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove root package from completion results.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/559"},"#","559"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Resolve mtags from Sonatype Snapshots, fixes ","#","554.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/558"},"#","558"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Disable ",(0,n.kt)("inlineCode",{parentName:"li"},"\\(")," as commit character.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/557"},"#","557"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Wrap identifiers in backticks when necessary.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/556"},"#","556"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Trigger parameter hints command after completion, if supported.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/552"},"#","552"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Cross-publish mtags for all supported Scala versions.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/541"},"#","541"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Implement completions and signature help.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/527"},"#","527"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")")))}u.isMDXComponent=!0}}]);