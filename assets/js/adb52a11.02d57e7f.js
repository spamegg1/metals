"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],s={id:"releasing",title:"Making a release"},o=void 0,p={unversionedId:"contributors/releasing",id:"contributors/releasing",title:"Making a release",description:"Metals",source:"@site/target/docs/contributors/releasing.md",sourceDirName:"contributors",slug:"/contributors/releasing",permalink:"/metals/docs/contributors/releasing",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/contributors/releasing.md",tags:[],version:"current",frontMatter:{id:"releasing",title:"Making a release"},sidebar:"docs",previous:{title:"Contributing to the website",permalink:"/metals/docs/contributors/updating-website"},next:{title:"Remote Language Servers",permalink:"/metals/docs/integrations/remote-language-server"}},m={},u=[{value:"Metals",id:"metals",level:2},{value:"Tag the release",id:"tag-the-release",level:3},{value:"Draft the release notes",id:"draft-the-release-notes",level:3},{value:"Update Metals version",id:"update-metals-version",level:3},{value:"Open a PR with release notes",id:"open-a-pr-with-release-notes",level:3},{value:"Start the release process:",id:"start-the-release-process",level:3},{value:"Before release announcement",id:"before-release-announcement",level:3},{value:"Official release",id:"official-release",level:3},{value:"Sanity check",id:"sanity-check",level:2},{value:"Add new Scala version support to the existing release",id:"add-new-scala-version-support-to-the-existing-release",level:2}],c={toc:u},d="wrapper";function h(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metals"},"Metals"),(0,i.kt)("h3",{id:"tag-the-release"},"Tag the release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose the right version number:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.0.0")," should not be used unless Metals is totally reworked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.y.0")," is reserved for changes that require adjustments in the plugins for\ndifferent editors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.y.z")," is reserved in remaining cases, where the changes do not require any\nadjustments in the plugins.")),(0,i.kt)("p",{parentName:"li"},"For most releases bumping ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," is enough especially that Metals not being used\nas a library anywhere and do not have a public API."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The tag must be called ",(0,i.kt)("inlineCode",{parentName:"li"},"vx.y.z"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v3.0.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'git tag -a vx.y.z -m "vx.y.z"'))),(0,i.kt)("p",{parentName:"li"},"You will need the tag to fill in some information in the release notes. It can\nalways be deleted and tagged again if you want to include more commits.\n",(0,i.kt)("inlineCode",{parentName:"p"},"git tag -d vx.y.z")),(0,i.kt)("p",{parentName:"li"},"Please wait with pushing the tag until the release notes are accepted."))),(0,i.kt)("h3",{id:"draft-the-release-notes"},"Draft the release notes"),(0,i.kt)("p",null,"First of all, if you are bumping the minor part of the version choose a new\nmetal or an alloy as a new for the release! Use that in the release notes and in\nthe release title on GitHub. Otherwie, use the metals from the previous release."),(0,i.kt)("p",null,"You might use the ",(0,i.kt)("inlineCode",{parentName:"p"},"./bin/merged_prs.sc")," script to generate merged PRs list\nbetween two last release tags. It can be run using scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cs install scala-cli\nscala-cli ./bin/merged_prs.scala -- <tag1> <tag2> "<github_api_token>"\n')),(0,i.kt)("p",null,"It will need a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"basic github API token"),"\n(don't need any additional scopes) to run, which may be specified via the last\nargument."),(0,i.kt)("p",null,"The script will generate a new markdown file in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog")," filled with a\nbasic release template."),(0,i.kt)("p",null,"You can fill in the number of closed issues from the last milestone, though you\nwill need to make sure everything is included there."),(0,i.kt)("h3",{id:"update-metals-version"},"Update Metals version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build.sbt")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"localSnapshotVersion")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mimaPreviousArtifacts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".github/ISSUE_TEMPLATE/bug_report.yml")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"Version of Metals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh")," - remove any unsupported Scala versions and add newly\nsupported ones. This will be needed later to test the new release."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/mtags-auto-release.yml")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"metals_version")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"metals_ref"))),(0,i.kt)("h3",{id:"open-a-pr-with-release-notes"},"Open a PR with release notes"),(0,i.kt)("p",null,"Open the PR to the repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/releases/new"},"https://github.com/scalameta/metals/releases/new"),"."),(0,i.kt)("h3",{id:"start-the-release-process"},"Start the release process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git push upstream --tags")," will trigger release workflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not create a release on GitHub just yet. Creating a release on GitHub sends\nout a notification to repository watchers, and the release isn't ready for\nthat yet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wait for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/actions?query=workflow%3ARelease"},"the Github Actions job"),"\nto build the binaries and stage them to Sonatype.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While waiting for Github Actions, update the milestones:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/milestones"},"https://github.com/scalameta/metals/milestones")),(0,i.kt)("li",{parentName:"ul"},"Close the milestone or milestones corresponding to the release. For example,\nfor a v3.3.0 release, we close both 3.3.0 and 3.2.1 (because we never\nreleased 3.2.1, so all its tickets went straight to 3.3.0)."),(0,i.kt)("li",{parentName:"ul"},"Create the milestone or milestones corresponding to future releases. For\nexample, for a v3.3.0 release, we create both v3.3.1 and v3.4.0.")))),(0,i.kt)("h3",{id:"before-release-announcement"},"Before release announcement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify the Sonatype release:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make sure that the release shows up at\n",(0,i.kt)("a",{parentName:"li",href:"https://oss.sonatype.org/content/repositories/releases/org/scalameta/"},"https://oss.sonatype.org/content/repositories/releases/org/scalameta/"),"."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh $VERSION")," to ensure that all artifacts have\nsuccessfully been released. It's important to ensure that this script passes\nbefore announcing the release since it takes a while for all published\nartifacts to sync with Maven Central. You might need to update the script if\nthe list of supported versions changed in the meantime."),(0,i.kt)("li",{parentName:"ul"},"To check that the release to Sonatype succeed even if the artifacts are not\nyet available on Maven Central run:\n",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh $VERSION -r sonatype:public")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure all docs are up to date.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upgrade downstream projects:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-vscode"},"https://github.com/scalameta/metals-vscode"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"generate metals website with ",(0,i.kt)("inlineCode",{parentName:"li"},"sbt docs/run")),(0,i.kt)("li",{parentName:"ul"},"open ",(0,i.kt)("inlineCode",{parentName:"li"},"website/target/docs/editors/vscode.md"),' and copy everything from\n"Requirements" over to the scalameta/metals-vscode README',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'remove "Using latest SNAPSHOT" section, this table is only up-to-date on\nthe website'))),(0,i.kt)("li",{parentName:"ul"},"check or update ",(0,i.kt)("inlineCode",{parentName:"li"},"enum")," values of ",(0,i.kt)("inlineCode",{parentName:"li"},"fallbackScalaVersion")," property in\n",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),". They should be the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"V.supportedScalaVersions")," in\n",(0,i.kt)("inlineCode",{parentName:"li"},"build.sbt")),(0,i.kt)("li",{parentName:"ul"},"open a PR, feel free to merge after CI is green"),(0,i.kt)("li",{parentName:"ul"},"open the last generated release draft, tag with a new version and publish\nthe release. This will start github actions job and publish the extension\nto both the Visual Studio Code Code Marketplace and openvsx.")))))),(0,i.kt)("h3",{id:"official-release"},"Official release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Publish the release on GitHub:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/releases"},"https://github.com/scalameta/metals/releases")),(0,i.kt)("li",{parentName:"ul"},"Copy-paste the release from the website blog"),(0,i.kt)("li",{parentName:"ul"},"In the dropdown, pick the recently pushed tag."),(0,i.kt)("li",{parentName:"ul"},"In the release title, say ",(0,i.kt)("inlineCode",{parentName:"li"},"Metals vX.Y.Z"),"."),(0,i.kt)("li",{parentName:"ul"},'Once the VS Code extension has been updated on the Marketplace, click\n"Publish release".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Announce the new release with the link to the release notes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/RFpSVth"},"Discord"))))),(0,i.kt)("h2",{id:"sanity-check"},"Sanity check"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","draft release notes and create with PR with them"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","bump Metals version"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","push a tag to the repository"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","merge PR with release notes"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","check if artifacts are published to the sonatype"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update downstream projects like metals-vscode"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","do release on GitHub"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","announce it")),(0,i.kt)("h2",{id:"add-new-scala-version-support-to-the-existing-release"},"Add new Scala version support to the existing release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it's a Scala2 you need to release semanticdb plugin for it first."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Find out which scalameta version the existing release uses"),(0,i.kt)("li",{parentName:"ul"},"In scalameta project:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"checkout on the tag for this version"),(0,i.kt)("li",{parentName:"ul"},"apply required changes for supporting new Scala2 compiler"),(0,i.kt)("li",{parentName:"ul"},"create and push tag with the following name:\n",(0,i.kt)("inlineCode",{parentName:"li"},"semanticdb_v${existing-scalameta-version}_${scala-version}")," Notice this\ntag should include\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/scalameta/pull/2562/commits/1dfc99677659f5a9919c0dc9166547a0b332d35c"},"these changes in ",(0,i.kt)("inlineCode",{parentName:"a"},"release.yml"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Release mtags artifact. Open\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/actions/workflows/mtags-auto-release.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"Mtags auto release")," action page"),",\nclick ",(0,i.kt)("inlineCode",{parentName:"p"},"Run Workflow"),", specify Scala version and confirm."))))}h.isMDXComponent=!0}}]);