"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[3927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,b=d["".concat(o,".").concat(p)]||d[p]||m[p]||s;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),i=a(6550),o=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=b({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=o??d;return p({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,s.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},7790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),l=a(5162);const i={id:"devs-chat-message-type-media-embed",title:"Media Embed",hide_title:!0,slug:"./media-embed",displayed_sidebar:"pushChatSidebar",sidebar_position:3},o="Message type - Media embed",u={unversionedId:"devs/chat/message-types/devs-chat-message-type-media-embed",id:"devs/chat/message-types/devs-chat-message-type-media-embed",title:"Media Embed",description:"Enables sending a image URLs or media URLs as a message. You can send GIFs, Tweets, Youtube links, etc. Simply pass in the URL of the media as content.",source:"@site/docs/devs/chat/message-types/03-Message-Type-Media-Embed.mdx",sourceDirName:"devs/chat/message-types",slug:"/devs/chat/message-types/media-embed",permalink:"/docs-v2/devs/chat/message-types/media-embed",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/message-types/03-Message-Type-Media-Embed.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"devs-chat-message-type-media-embed",title:"Media Embed",hide_title:!0,slug:"./media-embed",displayed_sidebar:"pushChatSidebar",sidebar_position:3},sidebar:"pushChatSidebar",previous:{title:"Image",permalink:"/docs-v2/devs/chat/message-types/image"},next:{title:"File",permalink:"/docs-v2/devs/chat/message-types/file"}},c={},d=[{value:"Customization parameters",id:"customization-parameters",level:3}],m={toc:d},p="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"message-type---media-embed"},"Message type - Media embed"),(0,r.kt)("p",null,"Enables sending a image URLs or media URLs as a message. You can send GIFs, Tweets, Youtube links, etc. Simply pass in the URL of the media as content. "),(0,r.kt)("head",null,(0,r.kt)("title",null,"Message Type - Media Embed | Push Chat | Push Documentation")),(0,r.kt)(s.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.send(recipient, message)\n// This section focuses on customization parameters for 'message' object\nconst aliceMessagesBob = await userAlice.chat.send(recipient, {\n  type: 'MediaEmbed',\n  content: 'https://media1.giphy.com/media/FtlUfrq3pVZXVNjoxf/giphy360p.mp4?cid=ecf05e47jk317254v9hbdjrknemduocie4pf54wtsir98xsx&ep=v1_videos_search&rid=giphy360p.mp4&ct=v',\n});\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"customization-parameters"},"Customization parameters"),(0,r.kt)("p",null,"When sending a message, you can customize the following params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"recipient"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./devs/chat/build/types-of-recipient"},"Recipient supports a number of address format")," including wallet address, chain agnostic wallet address, NFT addresses or even chatid which is useful in groups")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"message"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for message to be sent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"message.type"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MediaEmbed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of message Content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"message.content"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Message Content")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")))}b.isMDXComponent=!0}}]);