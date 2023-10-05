"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[4765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),i=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(b,c(c({ref:n},s),{},{components:t})):r.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,l={unversionedId:"dev/chat/ui-components/Theme",id:"dev/chat/ui-components/Theme",title:"Theme",description:"- Theme",source:"@site/docs/dev/chat/ui-components/07-Theme.mdx",sourceDirName:"dev/chat/ui-components",slug:"/dev/chat/ui-components/Theme",permalink:"/dev/chat/ui-components/Theme",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/dev/chat/ui-components/07-Theme.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"pushChatSidebar",previous:{title:"ChatViewComponent",permalink:"/dev/chat/ui-components/ChatViewComponent"},next:{title:"Tutorials",permalink:"/dev/chat/tutorials"}},d={},i=[],s={toc:i},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Theme"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const lightChatTheme: IChatTheme = {\n  borderRadius: {\n    chatViewComponent: '24px',\n    chatProfile: '32px',\n    messageInput: '13px',\n    searchInput: '99px',\n    modal: '16px',\n    modalInnerComponents:'12px'\n  },\n\n  backgroundColor: {\n    chatViewComponentBackground:\n      'linear-gradient(179.97deg, #EEF5FF 0.02%, #ECE9FA 123.25%)',\n    chatProfileBackground: '#fff',\n    messageInputBackground: '#fff',\n    chatSentBubbleBackground: 'rgb(202, 89, 155)',\n    chatReceivedBubbleBackground: '#fff',\n    encryptionMessageBackground: '#fff',\n    buttonBackground: 'rgb(202, 89, 155)',\n    searchInputBackground: 'rgb(244, 245, 250)',\n    modalBackground:'#fff',\n    modalInputBackground:'transparent',\n    modalHoverBackground:'rgb(244, 245, 250)'\n  },\n\n  fontSize: {\n    chatProfileText: '17px',\n    messageInputText: '16px',\n    chatSentBubbleText: '16px',\n    chatReceivedBubbleText: '16px',\n    timestamp: '12px',\n    encryptionMessageText: '13px',\n    chatReceivedBubbleAddressText: '16px',\n    chatReceivedBubbleTimestampText: '12px',\n    chatSentBubbleTimestampText: '12px',\n    searchInputText:'16px',\n    searchPlaceholderText:'16px'\n  },\n\n  fontWeight: {\n    chatProfileText: '300',\n    messageInputText: '400',\n    chatSentBubbleText: '400',\n    chatReceivedBubbleText: '400',\n    timestamp: '400',\n    encryptionMessageText: '400',\n    chatReceivedBubbleAddressText: '300',\n    chatReceivedBubbleTimestampText: '400',\n    chatSentBubbleTimestampText: '400',\n    searchInputText:'400',\n    searchPlaceholderText:'400'\n  },\n\n  fontFamily: 'inherit',\n\n  border: {\n    chatViewComponent: 'none',\n    chatProfile: 'none',\n    messageInput: 'none',\n    searchInput:'1px solid transparent',\n    modal:'1px solid rgb(229, 232, 246)',\n    modalInnerComponents:'1px solid rgb(194, 203, 219)'\n  },\n\n  iconColor: {\n    emoji: 'rgb(101, 119, 149)',\n    attachment: 'rgb(101, 119, 149)',\n    sendButton: 'rgb(101, 119, 149)',\n    groupSettings: 'rgb(101, 119, 149)',\n  },\n  textColor: {\n    chatProfileText: '#000',\n    messageInputText: '#000',\n    chatSentBubbleText: '#fff',\n    chatReceivedBubbleText: '#000',\n    timestamp: '400',\n    encryptionMessageText: '#000',\n    buttonText: '#fff',\n    chatReceivedBubbleAddressText: '#000',\n    chatReceivedBubbleTimestampText: '#000',\n    chatSentBubbleTimestampText: '#fff',\n    searchInputText:'#000',\n    searchPlaceholderText:'rgb(101, 119, 149)',\n    modalHeadingText:'#000',\n    modalSubHeadingText:'rgb(101, 119, 149)'\n  },\n  backdropFilter: 'none',\n  spinnerColor: 'rgb(202, 89, 155)',\n  scrollbarColor: 'rgb(202, 89, 155)',\n  //the rest param needs to be included in categories\n  modalBackgroundColor:'#fff',\n  modalPrimaryTextColor: '#1E1E1E',\n  modalSearchBarBorderColor: '#BAC4D6',\n  modalSearchBarBackground: '#FFF',\n  snapFocusBg: '#F4F5FA',\n  groupButtonBackgroundColor: '#ADB0BE',\n  groupButtonTextColor: '#FFF',\n  modalConfirmButtonBorder: '1px solid #F4DCEA',\n  groupSearchProfilBackground: '#F4F5FA',\n  modalInputBorderColor: '#C2CBDB',\n  snackbarBorderText: '#000',\n  snackbarBorderIcon: 'none',\n  modalContentBackground: '#FFFFFF',\n  modalProfileTextColor: '#1E1E1E',\n  toastSuccessBackground:\n    'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)',\n  toastErrorBackground:\n    'linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)',\n  toastShadowColor: '#ccc',\n  toastBorderColor: '#F4F3FF',\n  mainBg: '#fff',\n  modalBorderColor: '#E5E8F6',\n  modalDescriptionTextColor: '#575D73',\n  modalIconColor: '#657795',\n  pendingCardBackground: 'rgba(173, 176, 190, 0.12)',\n  modalHeadingColor: '#333333',\n  defaultBorder: '#E5E8F6',\n};\n\nexport const darkChatTheme: IChatTheme = {\n  borderRadius: {\n    chatViewComponent: '24px',\n    chatProfile: '32px',\n    messageInput: '13px',\n    searchInput: '99px',\n    modal: '16px',\n    modalInnerComponents:'12px'\n  },\n\n  backgroundColor: {\n    chatViewComponentBackground: 'rgb(40, 42, 46);',\n    chatProfileBackground: 'rgb(64, 70, 80);',\n    messageInputBackground: 'rgb(64, 70, 80);',\n    chatSentBubbleBackground: 'rgb(202, 89, 155)',\n    chatReceivedBubbleBackground: 'rgb(64, 70, 80);',\n    encryptionMessageBackground: 'rgb(64, 70, 80);',\n    buttonBackground: 'rgb(202, 89, 155)',\n    modalBackground:'rgb(47, 49, 55)',\n    modalInputBackground:'rgb(40, 42, 46)',\n    modalHoverBackground:'rgb(64, 70, 80)'\n  },\n\n  fontSize: {\n    chatProfileText: '17px',\n    messageInputText: '16px',\n    chatSentBubbleText: '16px',\n    chatReceivedBubbleText: '16px',\n    timestamp: '12px',\n    encryptionMessageText: '13px',\n    chatReceivedBubbleAddressText: '16px',\n    chatReceivedBubbleTimestampText: '12px',\n    chatSentBubbleTimestampText: '12px',\n    searchInputText:'16px',\n    searchPlaceholderText:'16px'\n  },\n\n  fontWeight: {\n    chatProfileText: '300',\n    messageInputText: '400',\n    chatSentBubbleText: '400',\n    chatReceivedBubbleText: '400',\n    timestamp: '400',\n    encryptionMessageText: '400',\n    chatReceivedBubbleAddressText: '300',\n    chatReceivedBubbleTimestampText: '400',\n    chatSentBubbleTimestampText: '400',\n    searchInputText:'400',\n    searchPlaceholderText:'400'\n  },\n\n  fontFamily: 'inherit',\n\n  border: {\n    chatViewComponent: 'none',\n    chatProfile: 'none',\n    messageInput: 'none',\n    searchInput:'1px solid transparent',\n    modal:'1px solid rgb(74, 79, 103)',\n    modalInnerComponents:'1px solid rgb(74, 79, 103)'\n  },\n\n  iconColor: {\n    emoji: 'rgba(120, 126, 153, 1)',\n    attachment: 'rgba(120, 126, 153, 1)',\n    sendButton: 'rgba(120, 126, 153, 1)',\n    groupSettings: 'rgba(120, 126, 153, 1)',\n  },\n  textColor: {\n    chatProfileText: 'rgb(182, 188, 214)',\n    messageInputText: 'rgb(182, 188, 214)',\n    chatSentBubbleText: '#fff',\n    chatReceivedBubbleText: 'rgb(182, 188, 214)',\n    timestamp: 'rgb(182, 188, 214)',\n    encryptionMessageText: 'rgb(182, 188, 214)',\n    buttonText: '#fff',\n    chatReceivedBubbleAddressText: 'rgb(182, 188, 214)',\n    chatReceivedBubbleTimestampText: 'rgb(182, 188, 214)',\n    chatSentBubbleTimestampText: '#fff',\n    searchInputText:'#fff',\n    searchPlaceholderText:'rgb(101, 119, 149)',\n    modalHeadingText:'#fff',\n    modalSubHeadingText:'rgb(182, 188, 214)'\n  },\n  backdropFilter: 'none',\n  spinnerColor: 'rgb(202, 89, 155)',\n  scrollbarColor: 'rgb(202, 89, 155)',\n  //the rest param needs to be included in categories\n  modalBackgroundColor:'rgba(47, 49, 55, 1)',\n  modalPrimaryTextColor: '#B6BCD6',\n  modalSearchBarBorderColor: '#4A4F67',\n  modalSearchBarBackground: '#282A2E',\n  snapFocusBg: '#404650',\n  groupButtonBackgroundColor: '#2F3137',\n  groupButtonTextColor: '#787E99',\n  modalConfirmButtonBorder: '1px solid #787E99',\n  groupSearchProfilBackground: '#404650',\n  modalInputBorderColor: '#4A4F67',\n  snackbarBorderText: '#B6BCD6',\n  snackbarBorderIcon:\n    'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',\n  modalContentBackground: '#2F3137',\n  modalProfileTextColor: '#B6BCD6',\n  toastSuccessBackground:\n    'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',\n  toastErrorBackground:\n    'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',\n  toastShadowColor: '#00000010',\n  toastBorderColor: '#4A4F67',\n  mainBg: '#000',\n  modalBorderColor: '#4A4F67',\n  modalDescriptionTextColor: '#787E99',\n  modalIconColor: '#787E99',\n  pendingCardBackground: 'rgba(173, 176, 190, 0.08)',\n  modalHeadingColor: '#B6BCD6',\n  defaultBorder: '#4A4F67',\n};\n")))))}p.isMDXComponent=!0}}]);