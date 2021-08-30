"use strict";(self.webpackChunkasf_doc=self.webpackChunkasf_doc||[]).push([[208],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},c="4. Tooling & automation",s={unversionedId:"implementation/tooling",id:"implementation/tooling",isDocsHomePage:!1,title:"4. Tooling & automation",description:"- Automation is key to keep developers productive and motivated. Indeed, humans are not efficient at repetitive tasks, while computers are brilliant.",source:"@site/docs/implementation/tooling.md",sourceDirName:"implementation",slug:"/implementation/tooling",permalink:"/docs/implementation/tooling",editUrl:"https://github.com/intuitem/asf-doc/edit/main/docs/implementation/tooling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. Adaptive baselines",permalink:"/docs/implementation/baselines"},next:{title:"5. Cyber resilience",permalink:"/docs/implementation/cyber-resilience"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-tooling--automation"},"4. Tooling & automation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automation is key to keep developers productive and motivated. Indeed, humans are not efficient at repetitive tasks, while computers are brilliant."),(0,i.kt)("li",{parentName:"ul"},"Everything that can be automated with a positive ROI in a reasonable time shall be automated."),(0,i.kt)("li",{parentName:"ul"},"Automated code reviews, SAST (Static Application Security Testing) are easy to integrate in the CI/CD pipelines. Popular open source tools include bandit, sonarqube, and many commercial tools are also available."),(0,i.kt)("li",{parentName:"ul"},"Dependency check is also fundamental, considering that most projects involve considerable amount of external code. Popular open source tools include OWASP Dependency Check, Trivy. "),(0,i.kt)("li",{parentName:"ul"},"DAST (Dynamic Application Security Testing) is more difficult to integrate in CI/CD pipelines. However, it can be relatively easy to integrate nmap, Nikto or OpenVAS (or similar commercial product) at integration phase, to provide a safety net in case of error."),(0,i.kt)("li",{parentName:"ul"},'The detection of secrets in code repositories is particularly relevant to automate. As often, there are a bunch of open-source tools (e.g. Truffle Hog) and commercial ones (e.g. GitGuardian) to perform that. It is also worth noting that Github includes a "secret scanning" feature, and Gitlab a "secret detection" feature, that provides that sort of control.'),(0,i.kt)("li",{parentName:"ul"},"Many Compliance checks can also be automated. For example, mitigations foreseen during risk assessment can be traced for effective integration through dedicated stories. Then it is possible to automatically determine if the mitigation is applied or not."),(0,i.kt)("li",{parentName:"ul"},"Reporting shall be fully automated. See section 6 for more details on reporting."),(0,i.kt)("li",{parentName:"ul"},"Apache Airflow is a great tool to manage the automation workflows.")))}m.isMDXComponent=!0}}]);