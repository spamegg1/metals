"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1878],{7750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const a={id:"debug-adapter-protocol",sidebar_label:"Running and debugging",title:"Running and debugging"},o=void 0,r={id:"integrations/debug-adapter-protocol",title:"Running and debugging",description:"Metals implements the Debug Adapter Protocol, which can be used by the editor to",source:"@site/target/docs/integrations/debug-adapter-protocol.md",sourceDirName:"integrations",slug:"/integrations/debug-adapter-protocol",permalink:"/metals/docs/integrations/debug-adapter-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/integrations/debug-adapter-protocol.md",tags:[],version:"current",frontMatter:{id:"debug-adapter-protocol",sidebar_label:"Running and debugging",title:"Running and debugging"},sidebar:"docs",previous:{title:"Decoration Protocol",permalink:"/metals/docs/integrations/decoration-protocol"},next:{title:"Proxy and mirrors",permalink:"/metals/docs/troubleshooting/proxy"}},l={},d=[{value:"How to add support for debugging or running in my editor?",id:"how-to-add-support-for-debugging-or-running-in-my-editor",level:2},{value:"Via code lenses",id:"via-code-lenses",level:3},{value:"Via explicit main or test commands",id:"via-explicit-main-or-test-commands",level:3},{value:"Wiring it all together",id:"wiring-it-all-together",level:3},{value:"Supported Testing Frameworks",id:"supported-testing-frameworks",level:2},{value:"Debugging the connection",id:"debugging-the-connection",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Metals implements the Debug Adapter Protocol, which can be used by the editor to\ncommunicate with JVM to run and debug code. Alternatively, Metals is also able\nto provide editors with all the information needed to run the code (this is\ncurrently supported in run code lenses for main classes)."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-add-support-for-debugging-or-running-in-my-editor",children:"How to add support for debugging or running in my editor?"}),"\n",(0,s.jsx)(n.p,{children:"There are two main ways to add support for debugging depending on the\ncapabilities exposed by the client."}),"\n",(0,s.jsx)(n.h3,{id:"via-code-lenses",children:"Via code lenses"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use DAP the editor needs to handle two commands in its language\nclient extension:\n",(0,s.jsx)(n.a,{href:"https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/metals/ClientCommands.scala",children:(0,s.jsx)(n.code,{children:"metals-run-session-start"})}),"\nand\n",(0,s.jsx)(n.a,{href:"https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/metals/ClientCommands.scala",children:(0,s.jsx)(n.code,{children:"metals-debug-session-start"})}),".\nThese commands should get executed automatically by the LSP client once the user\nactivates a code lens. The difference between them is that the former ignores\nall breakpoints being set while the latter respects them. The procedure of\nstarting the run/debug session is as follows:"]}),"\n",(0,s.jsxs)(n.p,{children:["Then we can request the debug adapter URI from the metals server using the\n",(0,s.jsx)(n.a,{href:"https://github.com/scalameta/metals/blob/master/metals/src/main/scala/scala/meta/internal/metals/ServerCommands.scala",children:(0,s.jsx)(n.code,{children:"debug-adapter-start"})}),"\ncommand."]}),"\n",(0,s.jsxs)(n.p,{children:["Starting a Debug Adapter Protocol session might take some time, since it needs\nto set up all the neccesary utilities for debugging. Metals also provides a\n",(0,s.jsx)(n.code,{children:"shellCommand"})," field, which will be present in the command attached to the run\nmain methods code lenses. This field can be used to simply run the process\nquickly without the debugging capabilities."]}),"\n",(0,s.jsxs)(n.p,{children:["If you can't or won't support DAP, you can use the ",(0,s.jsx)(n.code,{children:"runProvider"})," instead of\n",(0,s.jsx)(n.code,{children:"debugProvider "}),"option in the initialization options sent from the editor to the\nMetals server. This will make sure that only the ",(0,s.jsx)(n.code,{children:"run"})," code lense show up with\nthe needed ",(0,s.jsx)(n.code,{children:"shellCommand"})," field."]}),"\n",(0,s.jsx)(n.h3,{id:"via-explicit-main-or-test-commands",children:"Via explicit main or test commands"}),"\n",(0,s.jsxs)(n.p,{children:["Apart from using code lenses, users can start a debug session by executing the\n",(0,s.jsx)(n.code,{children:"debug-adapter-start"})," command with any of following params:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"for an explicit main class"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "mainClass": "com.foo.App",\n  "buildTarget": "foo",\n  "args": ["bar"],\n  "jvmOptions": ["-Dpropert=123"],\n  "env": { "RETRY": "TRUE" },\n  "envFile": ".env"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"for an explicit test class"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "testClass": "com.foo.FooSuite",\n  "buildTarget": "foo"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"buildTarget"})," is an optional parameter, which might be useful if there are\nidentically named classes in different modules. A URI will be returned that can\nbe used by the DAP client."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"envFile"})," is an optional parameter, which allows you to specify a path to a\n",(0,s.jsx)(n.code,{children:".env"})," file with additional environment variables. The path can be either\nabsolute or relative to your project workspace. The parser supports single line\nas well as multi-line quoted values (without value substitution). Any variables\ndefined in the ",(0,s.jsx)(n.code,{children:"env"})," object take precedence over those from the ",(0,s.jsx)(n.code,{children:".env"})," file.\nHere's an example of a supported ",(0,s.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# single line values\nkey1=value 1\nkey2='value 2'   # ignored inline comment\nkey3=\"value 3\"\n\n# multi-line values\nkey4='line 1\nline 2'\nkey5=\"line 1\nline 2\"\n\n# export statements\nexport key6=value 6\n\n# comma delimiter\nkey7:value 6\n\n# keys cannot contain dots or dashes\na.b.key8=value 8   # will be ignored\na-b-key9=value 9   # will be ignored\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"for Metals discovery"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This option works a bit different than the other two param shapes as you don't\nspecify a test or main class, but rather a ",(0,s.jsx)(n.code,{children:"runType"})," of either ",(0,s.jsx)(n.code,{children:'"run"'}),",\n",(0,s.jsx)(n.code,{children:'"runOrTestFile"'}),", ",(0,s.jsx)(n.code,{children:'"testFile"'}),", or ",(0,s.jsx)(n.code,{children:'"testTarget"'})," and a file URI representing\nyour current location. ",(0,s.jsx)(n.code,{children:'"run"'})," will automatically find any main method in the\nbuild target that belongs to the URI that was sent in. If multiple are found,\nyou will be given the choice of which to run. ",(0,s.jsx)(n.code,{children:'"runOrTestFile"'})," will try to find\na main or test class in your current file and run them. The ",(0,s.jsx)(n.code,{children:'"testFile"'})," option\nwill check for any test classes in your current file and run them. Similarly,\n",(0,s.jsx)(n.code,{children:'"testTarget"'})," will run all test classes found in the build target that the URI\nbelongs to. The ",(0,s.jsx)(n.code,{children:'"args"'}),", ",(0,s.jsx)(n.code,{children:'"jvmOptions"'}),", ",(0,s.jsx)(n.code,{children:'"env"'}),", and ",(0,s.jsx)(n.code,{children:'"envFile"'})," are all valid\nkeys that can be sent as well with the same format as above."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "path": "file:///path/to/my/file.scala",\n  "runType": "testTarget"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Instead of ",(0,s.jsx)(n.code,{children:"debug-adapter-start"})," if you only want to get data about the command\nto run you can use ",(0,s.jsx)(n.code,{children:"discover-jvm-run-command"}),", which takes the same json as\nabove, but instead of starting the DAP session it will return the\n",(0,s.jsx)(n.code,{children:"DebugSessionParams"})," object containing targets that this main class can be run\nfor along with the data about the main class which will take form of:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "targets": ["id1"],\n  "dataKind": "scala-main-class",\n  "data": {\n    "class": "Foo",\n    "arguments": [],\n    "jvmOptions": [],\n    "environmentVariables": [],\n    "shellCommand": "java ..."\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"shellCommand"})," will be the exact command to run if you want to run it on\nyour own without DAP."]}),"\n",(0,s.jsx)(n.h3,{id:"wiring-it-all-together",children:"Wiring it all together"}),"\n",(0,s.jsxs)(n.p,{children:["No matter which method you use, you still need to connect the debug adapter\nextension specific to you editor using the aforementioned URI and let it drive\nthe run/debug session. For reference, take a look at the\n",(0,s.jsx)(n.a,{href:"https://github.com/scalameta/metals-vscode/blob/main/packages/metals-vscode/src/debugger/scalaDebugger.ts",children:"vscode implementation"})]}),"\n",(0,s.jsxs)(n.p,{children:["and how it is\n",(0,s.jsx)(n.a,{href:"https://github.com/scalameta/metals-vscode/blob/main/packages/metals-vscode/src/extension.ts",children:"wired up together"})]}),"\n",(0,s.jsx)(n.h2,{id:"supported-testing-frameworks",children:"Supported Testing Frameworks"}),"\n",(0,s.jsx)(n.p,{children:"NOTE: While Metals detects test suites for most of existing testing\nframeworks, support for recognizing individual tests is more limited.\nMetals supports the current set of test frameworks when it comes to\nindividual test discovery:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Junit"}),"\n",(0,s.jsx)(n.li,{children:"MUnit"}),"\n",(0,s.jsx)(n.li,{children:"Scalatest"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"debugging-the-connection",children:"Debugging the connection"}),"\n",(0,s.jsx)(n.p,{children:"Create the following trace files to spy on incoming/outgoing JSON communication\nbetween the debug server and editor."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# macOS\ntouch ~/Library/Caches/org.scalameta.metals/dap-server.trace.json\ntouch ~/Library/Caches/org.scalameta.metals/dap-client.trace.json\n# Linux\ntouch ~/.cache/metals/dap-server.trace.json\ntouch ~/.cache/metals/dap-client.trace.json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);