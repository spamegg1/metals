"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9185],{720:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=i(4848),s=i(8453);const r={id:"overview",title:"Text Editors",sidebar_label:"Overview",slug:"/"},l=void 0,d={id:"editors/overview",title:"Text Editors",description:"Latest Metals server versions",source:"@site/target/docs/editors/overview.md",sourceDirName:"editors",slug:"/",permalink:"/metals/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Text Editors",sidebar_label:"Overview",slug:"/"},sidebar:"docs",next:{title:"VS Code",permalink:"/metals/docs/editors/vscode"}},c={},o=[{value:"Latest Metals server versions",id:"latest-metals-server-versions",level:2},{value:"Editor support",id:"editor-support",level:2},{value:"Installation",id:"installation",level:2},{value:"Build import",id:"build-import",level:2},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Known limitations",id:"known-limitations",level:3},{value:"Goto definition",id:"goto-definition",level:2},{value:"Known limitations",id:"known-limitations-1",level:3},{value:"Completions",id:"completions",level:2},{value:"Known limitations",id:"known-limitations-2",level:3},{value:"Hover (aka. type at point)",id:"hover-aka-type-at-point",level:2},{value:"Signature help (aka. parameter hints)",id:"signature-help-aka-parameter-hints",level:2},{value:"Find references",id:"find-references",level:2},{value:"Known limitations",id:"known-limitations-3",level:3},{value:"Worksheets",id:"worksheets",level:2},{value:"Document symbols",id:"document-symbols",level:2},{value:"Workspace symbols",id:"workspace-symbols",level:2},{value:"Formatting",id:"formatting",level:2},{value:"Code folding",id:"code-folding",level:2},{value:"Document highlight",id:"document-highlight",level:2},{value:"Package explorer",id:"package-explorer",level:2},{value:"Test Explorer",id:"test-explorer",level:2},{value:"Running Tests",id:"running-tests",level:3},{value:"Metals Extensions",id:"metals-extensions",level:2},{value:"Implicit decorations",id:"implicit-decorations",level:2},{value:"Additional file types",id:"additional-file-types",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"latest-metals-server-versions",children:"Latest Metals server versions"}),"\n",(0,t.jsx)(n.p,{children:"To find out how to set the version in your editor please check out the editor\nspecific sections."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Version"}),(0,t.jsx)("th",{children:"Published"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1.3.0"}),(0,t.jsx)("td",{children:"15 Apr 2024 12:36"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1.3.0+10-22cd0048-SNAPSHOT"}),(0,t.jsx)("td",{children:"17 Apr 2024 15:38"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Snapshot releases are not guaranteed to work."}),"\n",(0,t.jsx)(n.h2,{id:"editor-support",children:"Editor support"}),"\n",(0,t.jsx)(n.p,{children:"Metals works with the following text editors with varying degree of\nfunctionality."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{align:"center",children:"Visual Studio Code"}),(0,t.jsx)("td",{align:"center",children:"Vim"}),(0,t.jsx)("td",{align:"center",children:"Sublime Text"}),(0,t.jsx)("td",{align:"center",children:"Emacs"}),(0,t.jsx)("td",{align:"center",children:"Helix"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Installation"}),(0,t.jsx)("td",{align:"center",children:"Single click"}),(0,t.jsx)("td",{align:"center",children:"Single click"}),(0,t.jsx)("td",{align:"center",children:"Single click"}),(0,t.jsx)("td",{align:"center",children:"Single click"}),(0,t.jsx)("td",{align:"center",children:"Manual"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Build import"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Diagnostics"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Goto definition"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Goto type definition"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Completions"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705*"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hover"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hover for selection"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Parameter hints"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Find references"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Run/Debug"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Find implementations"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Rename symbol"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Code actions"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Worksheets"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Document symbols"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"Flat"}),(0,t.jsx)("td",{align:"center",children:"Flat"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"Flat"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Workspace symbols"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Formatting"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Folding"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Highlight"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Metals Extensions"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"Status bar, Input box, Decoration protocol, Did focus"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Organize imports"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Implicit decorations"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"Shown in hover"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Source file analyzer"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Find text in dependency JAR files"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Run scalafix rules"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Single click"}),": Metals is easy to install and requires minimal configuration\nout-of-the-box."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Few steps"}),": installing Metals requires a few custom steps and minimal\nconfiguration to work."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You can find instructions on how to install Metals for your editor on its\nspecific page."})}),"\n",(0,t.jsx)(n.h2,{id:"build-import",children:"Build import"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": it is possible to import a build such as an sbt project directly from\nthe editor."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Requires browser"}),": importing a build requires additional steps in a web\nbrowser using a localhost server. It is not possible to import a build within\nthe editor."]}),"\n",(0,t.jsx)(n.h2,{id:"diagnostics",children:"Diagnostics"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": Diagnostics are correctly published on compile."]}),"\n",(0,t.jsx)(n.p,{children:"Compile errors are reported as red squiggles in the editor. Compilation is\ntriggered on file save for the build target (project/module) containing the\nfocused text file."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/48774587-f4d5c780-ecca-11e8-8087-acca5a05ca78.png",alt:"Diagnostics"})}),"\n",(0,t.jsx)(n.h3,{id:"known-limitations",children:"Known limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Slow feedback for type errors. Syntax errors are published as you type but\ntype errors are handled by the build tool, meaning diagnostics may take a\nwhile to publish for large projects."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"goto-definition",children:"Goto definition"}),"\n",(0,t.jsx)(n.p,{children:"Navigate to symbol definitions for project sources and Scala/Java library\ndependencies."}),"\n",(0,t.jsx)(n.p,{children:"Symbols are resolved according to the last successful compilation in the build\ntool and navigation continues to work despite syntax errors in the open unsaved\nbuffer."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/48776422-1f764f00-ecd0-11e8-96d1-170f2354d50e.gif",alt:"Goto Definition"})}),"\n",(0,t.jsx)(n.h3,{id:"known-limitations-1",children:"Known limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Navigation does not work for buffers that do not tokenize, for example due to\nunclosed string literals."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/scalameta/scalameta/issues/1802",children:"scalameta/scalameta#1802"}),"\nreflective invocations (methods calls on structural types) do not resolve to a\ndefinition."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"completions",children:"Completions"}),"\n",(0,t.jsx)(n.p,{children:"Use code completions to explore APIs, implement interfaces, generate exhaustive\npattern matches and more."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/56036958-725bac00-5d2e-11e9-9cf7-46249125494a.gif",alt:"2019-04-12 14 19 39"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto-import"}),": imports are inserted at the bottom of the global import list.\nImports still need to be sorted and grouped manually, we are exploring ways to\nautomate this workflow in the future."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Override def"}),": implement methods from the super class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Exhaustive match"}),": generate an exhaustive pattern match for sealed types."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"String interpolator"}),": automatically convert string literals into string\ninterpolators."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Filename"}),": complete classnames based on the enclosing file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Documentation"}),": read the docstring for method symbols by pressing\nctrl+space in VS Code."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"known-limitations-2",children:"Known limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"completion results don't include symbols that have just been typed in separate\nfiles without a successful compilation in the build tool."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hover-aka-type-at-point",children:"Hover (aka. type at point)"}),"\n",(0,t.jsx)(n.p,{children:"See the expression type and symbol signature under the cursor."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/2MfQvsM.gif",alt:""})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Expression type"}),": shows the non-generic type of the highlighted expression."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Symbol signature"}),": shows the generic signature of symbol under the cursor\nalong with its docstring, if available."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"signature-help-aka-parameter-hints",children:"Signature help (aka. parameter hints)"}),"\n",(0,t.jsx)(n.p,{children:"View a method signature and method overloads as you fill in the arguments."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/DAWIrHu.gif",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"find-references",children:"Find references"}),"\n",(0,t.jsxs)(n.p,{children:["Find symbol references in project sources. References include implicits,\ninferred ",(0,t.jsx)(n.code,{children:".apply"}),", desugared ",(0,t.jsx)(n.code,{children:".flatMap"})," from for comprehensions and other\nsymbols that may not be explicitly written in source, making it possible to\ndiscover usages of difficult-to-grep symbols. The Metals navigation index is\nlow-overhead and should only require a few megabytes of memory even for large\nprojects."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/51089190-75fc8880-1769-11e9-819c-95262205e95c.png",alt:"Find references"})}),"\n",(0,t.jsx)(n.h3,{id:"known-limitations-3",children:"Known limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['References to overridden methods are not included in the results. For example,\nif you run "find references" on the method ',(0,t.jsx)(n.code,{children:"Dog.name()"})," then it won't include\nreferences to the super method ",(0,t.jsx)(n.code,{children:"Animal.name()"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"worksheets",children:"Worksheets"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": Worksheets work via the Decoration protocol and are added as a\nnon-editable side decoration."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Comments"}),": Worksheets work via ",(0,t.jsx)(n.code,{children:"workspace/applyEdit"})," by adding comments to\nthe source code and support hover to show larger output. You can find more\ninformation about worksheets under the editor specific worksheet section. For\nexample, ",(0,t.jsx)(n.a,{href:"/metals/docs/editors/vscode#worksheets",children:"here for VS Code"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"document-symbols",children:"Document symbols"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": Document symbols are displayed in a hierarchical outline."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Flat"}),": Document symbols are displayed in a flat outline."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/50635569-014c7180-0f53-11e9-8898-62803898781c.gif",alt:"Document Symbols"})}),"\n",(0,t.jsx)(n.h2,{id:"workspace-symbols",children:"Workspace symbols"}),"\n",(0,t.jsx)(n.p,{children:"Fuzzy search a symbol in the workspace of library dependencies by its name."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All-lowercase queries are treated as case-insensitive searches."}),"\n",(0,t.jsxs)(n.li,{children:["Queries ending with a dot ",(0,t.jsx)(n.code,{children:"."})," list nested symbols."]}),"\n",(0,t.jsxs)(n.li,{children:["Queries containing a semicolon ",(0,t.jsx)(n.code,{children:";"})," search library dependencies."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/w5yrK1w.gif",alt:"Fuzzy symbol search example"})}),"\n",(0,t.jsx)(n.h2,{id:"formatting",children:"Formatting"}),"\n",(0,t.jsxs)(n.p,{children:["Metals uses Scalafmt to respond to formatting requests from the editor,\naccording to the configuration defined in ",(0,t.jsx)(n.code,{children:".scalafmt.conf"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Learn how to configure Scalafmt at\n",(0,t.jsx)(n.a,{href:"https://scalameta.org/scalafmt/docs/configuration.html",children:"https://scalameta.org/scalafmt/docs/configuration.html"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/50635748-b0894880-0f53-11e9-913b-acfd5f505351.gif",alt:"Formatting"})}),"\n",(0,t.jsx)(n.h2,{id:"code-folding",children:"Code folding"}),"\n",(0,t.jsx)(n.p,{children:"Fold ranges such as large multi-line expressions, import groups and comments."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://camo.githubusercontent.com/3fdd7ae28907ac61c0a1ac5fdc07d085245957aa/68747470733a2f2f692e696d6775722e636f6d2f667149554a54472e676966",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"document-highlight",children:"Document highlight"}),"\n",(0,t.jsx)(n.p,{children:"Highlight references to the same symbol in the open file."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/0uhc9P5.gif",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"package-explorer",children:"Package explorer"}),"\n",(0,t.jsx)(n.p,{children:"Browse packages, classes and methods in the workspace and library dependencies\nusing the Metals sidebar. This feature is only implemented in VS Code."}),"\n",(0,t.jsx)(n.h2,{id:"test-explorer",children:"Test Explorer"}),"\n",(0,t.jsxs)(n.p,{children:["Test Explorer is a feature that allows editors to display tests as a separate\ntree representation of tests. Although it was implemented in order to use Visual\nStudio Code's\n",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/api/extension-guides/testing",children:"Testing API"}),". The\nTest Explorer API is editor agnostic and can be used by other editors than just\nVS Code. ",(0,t.jsx)(n.img,{src:"https://i.imgur.com/Z3VtS0O.gif",alt:"test-explorer"})]}),"\n",(0,t.jsx)(n.p,{children:"Work on the Test Explorer is still in progress and the feature has some known\nlimitations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test Explorer is able to discover single test cases only for JUnit4 test\nclasses. Support for other test frameworks is being worked on."}),"\n",(0,t.jsxs)(n.li,{children:["detecting suites in cross scala-version projects is inconsistent, see\n",(0,t.jsx)(n.a,{href:"https://github.com/scalameta/metals/issues/3503",children:"this issue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["there is no support for JS and Native platforms. For any changes subscribe to\nthe related\n",(0,t.jsx)(n.a,{href:"https://github.com/scalameta/metals-feature-requests/issues/256",children:"feature request"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find more information about Test Explorer under the\n",(0,t.jsx)(n.a,{href:"/metals/docs/editors/vscode#test-explorer",children:"VS Code"})," specific section."]}),"\n",(0,t.jsx)(n.h3,{id:"running-tests",children:"Running Tests"}),"\n",(0,t.jsxs)(n.p,{children:["Both run and debug under the hood use BSP's debug request. More information\nabout it can be found at\n",(0,t.jsx)(n.a,{href:"https://github.com/scalacenter/bloop/blob/master/docs/assets/dap-example-metals.png",children:"Bloop DAP diagram"}),"\nor\n",(0,t.jsx)(n.a,{href:"https://build-server-protocol.github.io/docs/specification.html#debug-request",children:"BSP specification"}),"\nwebsite."]}),"\n",(0,t.jsx)(n.h2,{id:"metals-extensions",children:"Metals Extensions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Status bar"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/status"})," notification."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Decoration protocol"}),": Editor client implements the\n",(0,t.jsx)(n.a,{href:"/metals/docs/integrations/decoration-protocol",children:"Decoration Protocol"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tree view"}),": Editor client implements the\n",(0,t.jsx)(n.a,{href:"/metals/docs/integrations/tree-view-protocol",children:"Tree View Protocol"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Did focus"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/didFocusTextDocument"}),"\nnotification."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Slow task"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/slowTask"})," request."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input box"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/inputBox"})," request."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Quick pick"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/quickPick"})," request."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Window state"}),": Editor client implements the ",(0,t.jsx)(n.code,{children:"metals/windowStateDidChange"}),"\nnotification."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": Editor implements all Metals extension endpoints."]}),"\n",(0,t.jsxs)(n.p,{children:["The Metals language server supports custom extensions that are not part of the\nLanguage Server Protocol (LSP). These extensions are not necessary for Metals to\nfunction but they improve the user experience. To learn more about Metals\nextensions, see ",(0,t.jsx)(n.a,{href:"/metals/docs/integrations/new-editor",children:"integrating a new editor"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"implicit-decorations",children:"Implicit decorations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u2705"}),": Additional information inferred from the code can be show within the\ncode using virtual text."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shown in hover"}),": Additional information inferred from the code can be show\nwhen hovering over a specific line. That hover only shows the additional symbols\non the current line."]}),"\n",(0,t.jsx)(n.h2,{id:"additional-file-types",children:"Additional file types"}),"\n",(0,t.jsx)(n.p,{children:"Not all features are supported in all possible scenarios, especially when it\ncomes to non-standard Scala files like Ammonite scripts, worksheets or sbt\nscripts."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{align:"center",children:"sbt scripts"}),(0,t.jsx)("td",{align:"center",children:"Worksheets"}),(0,t.jsx)("td",{align:"center",children:"Ammonite scripts*"}),(0,t.jsx)("td",{align:"center",children:"Standalone Scala files"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Diagnostics"}),(0,t.jsx)("td",{align:"center",children:"\u2705*"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705*"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Goto definition"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Completions"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hover"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Parameter hints"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Find references"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Run/Debug"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Find implementations"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Rename symbol"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Code actions"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Document symbols"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Workspace symbols"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"All symbols are local"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Formatting"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Folding"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Highlight"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Organize imports"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Implicit decorations"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center",children:"\u2705"}),(0,t.jsx)("td",{align:"center",children:"\u2705"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Decode file (cfr, semanticdb, tasty, javap)"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"}),(0,t.jsx)("td",{align:"center"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["* Note that there are some specific Ammonite features that aren't supported\nlike ",(0,t.jsx)(n.a,{href:"https://ammonite.io/#Multi-stageScripts",children:"multi-stage"})," scripts. Currently\nAmmonite support is also limited to Scala 2."]}),"\n",(0,t.jsx)(n.p,{children:"* Diagnostics for sbt script and standalone Scala files will only show parsing\nerrors, but not diagnostics coming from the compiler."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);