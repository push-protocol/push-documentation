"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[6883],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(i),u=a,f=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return i?n.createElement(f,r(r({ref:t},d),{},{components:i})):n.createElement(f,r({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var h=2;h<o;h++)r[h]=i[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9889:(e,t,i)=>{i.d(t,{JU:()=>u,F0:()=>f,Ar:()=>y,cO:()=>m,AB:()=>v});var n=i(508);const a=`(max-width: ${"375px"})`,o=`(max-width: ${"768px"})`,r=`(max-width: ${"1024px"})`,s={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},l={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${s.DESKTOP.TOP} ${s.DESKTOP.RIGHT} ${s.DESKTOP.BOTTOM} ${s.DESKTOP.LEFT}`,TABLET:`${s.TABLET.TOP} ${s.TABLET.RIGHT} ${s.TABLET.BOTTOM} ${s.TABLET.LEFT}`,MOBILE:`${s.MOBILE.TOP} ${s.MOBILE.RIGHT} ${s.MOBILE.BOTTOM} ${s.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},h=(n.ZP.h1`
  font-family: 'Strawford';
  font-size: 68px;
  line-height: 110%;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: left;
  text-transform: none;
  text-shadow: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  @media ${o} {
    font-size: 36px;
  }
`,n.ZP.section`
  align-items: ${e=>e.alignItems||"center"};
  align-self: ${e=>e.alignSelf||"stretch"};
  background: ${e=>e.gradient?e.gradient:e.background?e.background:"transparent"};
  display: ${e=>e.display||"flex"};
  flex: ${e=>e.flex||"1"};
  flex-direction: ${e=>e.flexDirection||"row"};
  justify-content: ${e=>e.justifyContent||"center"};
  width: ${e=>e.width||"auto"};
  margin: ${e=>e.margin||"0px"};
  min-height: ${e=>e.minHeight||"auto"};
  overflow: ${e=>e.overflow||"initial"};
  padding: ${e=>e.padding||"0px"};
  position: ${e=>e.position||"relative"};
`,n.ZP.div`
  display: ${e=>e.display||"flex"};
  flex-direction: ${e=>e.flexDirection||"column"};
  position: ${e=>e.position||"relative"};

  flex: ${e=>e.flex||"1"};
  align-self: ${e=>e.alignSelf||"stretch"};
  max-width: 1213px;
  // max-width: 1140px;
  display: flex;
  justify-content: center;
  box-sizing: ${e=>e.boxSizing||"content-box"};
  padding: ${e=>e.padding||l.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP};

  @media ${r} {
    padding: ${e=>e.padding||l.ADJUSTMENTS.MARGIN.DEFAULT.TABLET};
  }

  @media ${a} {
    padding: ${e=>e.padding||l.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE};
  }
`,n.ZP.div`
  flex-basis: 100%;
`),d=n.ZP.div`
  align-items: ${e=>e.alignItems||"center"};
  align-self: ${e=>e.alignSelf||"stretch"};
  background: ${e=>e.gradient?e.gradient:e.background?e.background:"transparent"};
  border: ${e=>e.border||"initial"};
  border-radius: ${e=>e.borderRadius||"initial"};
  bottom: ${e=>e.bottom||"auto"};
  box-shadow: ${e=>e.boxShadow||"initial"};
  display: ${e=>e.display||"flex"};
  filter: ${e=>e.filter||"initial"};
  flex: ${e=>e.flex||"1"};
  flex-basis: ${e=>e.flexBasis||"auto"};
  flex-direction: ${e=>e.flexDirection||"row"};
  flex-wrap: ${e=>e.flexWrap||"wrap"};
  gap: ${e=>e.gap||"normal"};
  font-size: ${e=>e.fontSize||"initial"};
  height: ${e=>e.height||"auto"};
  min-height: ${e=>e.minHeight||"initial"};
  justify-content: ${e=>e.justifyContent||"center"};
  left: ${e=>e.left||"auto"};
  margin: ${e=>e.margin||"0px"};
  max-width: ${e=>e.maxWidth||"initial"};
  min-width: ${e=>e.minWidth||"auto"};
  overflow: ${e=>e.overflow||"initial"};
  padding: ${e=>e.padding||"0px"};
  position: ${e=>e.position||"relative"};
  right: ${e=>e.right||"auto"};
  text-align: ${e=>e.textAlign||"initial"};
  top: ${e=>e.top||"auto"};
  width: ${e=>e.width||"auto"};
  z-index: ${e=>e.zIndex||"auto"};

  &:hover & {
    filter: ${e=>(e.filterHover?e.filterHover:e.hover?e.hover:"none")||"none"};
  }

  ${h} {
    width: 0;
  }
`,c=((0,n.ZP)(d)`
  flex: ${e=>e.flex||"1"};
  flex-direction: ${e=>e.flexDirection||"column"};

  ${h} {
    height: 0;
    width: auto;
  }
`,n.ZP.h1`
  color: ${e=>e.color||l.COLORS.FONT_LIGHT};
  font-weight: ${e=>e.fontWeight||700};
  font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
  text-transform: ${e=>e.textTransform||"inherit"};
  margin: ${e=>e.margin||"0px"};
  padding: ${e=>e.padding||"0px"};
  letter-spacing: ${e=>e.letterSpacing||"-0.03em"};
  font-family: ${e=>e.fontFamily||"Strawford, Helvetica, sans-serif"};
  text-align: ${e=>e.textAlign||"inherit"};
  line-height: ${e=>e.lineHeight||"110%"};
  /* text-shadow: 0 0 20px rgb(255 255 255 / 60%); */
  text-shadow: none;
  z-index: ${e=>e.zIndex||"auto"};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`),p=((0,n.ZP)(c)`
  color: ${e=>e.color||l.COLORS.FONT_DARK};
  text-shadow: none;
  font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING};
  letter-spacing: ${e=>e.letterSpacing||"-0.02em"};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,(0,n.ZP)(c)`
  font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,n.ZP.img`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  display: ${e=>e.display||"flex"};
`,n.ZP.img`
  width: 125%;
  height: auto;
  display: flex;
`,n.ZP.span`
  flex: ${e=>e.flex||"initial"};
  align-self: ${e=>e.alignSelf||"auto"};
  color: ${e=>e.color||"initial"};
  background: ${e=>e.background||"transparent"};
  font-weight: ${e=>e.fontWeight||400};
  font-size: ${e=>e.fontSize||"inherit"};
  text-transform: ${e=>e.textTransform||"inherit"};
  margin: ${e=>e.margin||"0px"};
  padding: ${e=>e.padding||"0px"};
  letter-spacing: ${e=>e.letterSpacing||"-0.03em"};
  text-align: ${e=>e.textAlign||"initial"};
  line-height: ${e=>e.lineHeight||"142%"};
  position: ${e=>e.position||"initial"};
  right: ${e=>e.right||"auto"};
  left: ${e=>e.left||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  top: ${e=>e.top||"auto"};
  z-index: ${e=>e.zIndex||"auto"};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }
`,n.ZP.button`
  display: ${e=>e.display||"initial"};
  line-height: ${e=>e.lineHeight||"26px"};
  flex: ${e=>e.flex||"initial"};
  flex-direction: ${e=>e.flexDirection||"row"};
  align-self: ${e=>e.alignSelf||"auto"};
  align-items: ${e=>e.alignItems||"center"};
  justify-content: ${e=>e.justifyContent||"center"};
  font-weight: ${e=>e.fontWeight||400};
  font-size: ${e=>e.fontSize||"inherit"};
  color: ${e=>e.color||"#fff"};
  background: ${e=>e.background||l.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||l.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};
  font-family: ${e=>e.fontFamily||"Strawford, Helvetica, sans-serif"};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${e=>e.hover||(e.background?e.background:"transparent")};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${e=>e.hoverBackground||"#000"};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover {
    border: ${e=>e.hoverBorder||"inherit"};
    
    & svg > path {
      stroke: ${e=>e.hoverSVGPathStroke||"auto"};
    }
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`),u=(n.ZP.a`
  display: ${e=>e.display||"initial"};
  line-height: ${e=>e.lineHeight||"26px"};
  flex: ${e=>e.flex||"initial"};
  align-self: ${e=>e.alignSelf||"auto"};
  align-items: ${e=>e.alignItems||"center"};
  justify-content: ${e=>e.justifyContent||"center"};
  font-weight: ${e=>e.fontWeight||500};
  font-size: ${e=>e.fontSize||"inherit"};
  color: ${e=>e.color||"#fff"};
  background: ${e=>e.background||l.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||l.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};

  @media ${r} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${a} {
    font-size: ${e=>e.fontSize||l.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${e=>e.hover||(e.background?e.background:"transparent")};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${e=>e.hoverBackground||"#000"};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`,n.ZP.a`
  color: #fff;
  background: #dd44b9;
  font-size: 15px;
  padding: 6px 12px 6px 8px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;

  &:before {
    content: '💡 ';
    position: relative;
  }

  &:hover {
    color: #000;
  }
`),f=(0,n.ZP)(d)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`,g=(0,n.ZP)(p)`
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  padding: 12px 16px;
  background: transparent;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 10px;

  & img {
    height: 32px;
    width: auto;
  }

  & span {
    display: flex;
    font-weight: 500;
    color: initial;
    align-self: center;
    align-items: center;
    text-align: center;
    margin: 0px 4px 0px 4px;
    justify-content: center;

    & svg {
      margin-left: 5px;
    }
  }

  &:hover {
    border: 1px solid #d53a94;
    background: transparent;
    
    & svg > path {
      stroke: #d53a94;
    }
  }

  &:hover:after {
    background: transparent;
  }
`,m=(0,n.ZP)(g)`
`,T=(0,n.ZP)(g)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,y=(0,n.ZP)(T)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,v=(0,n.ZP)(d)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},3133:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=i(7462),a=(i(7294),i(3905));i(9889);const o={id:"devs-chat-concepts-architecture-overview",title:"Push Chat Architecture",hide_title:!0,slug:"./push-chat-architecture",displayed_sidebar:"pushChatSidebar",sidebar_position:1},r="Architecture overview",s={unversionedId:"devs/chat/concepts/devs-chat-concepts-architecture-overview",id:"devs/chat/concepts/devs-chat-concepts-architecture-overview",title:"Push Chat Architecture",description:"Push Chat is a web3 messaging protocol that enables wallet addresses to send and receive messages, offering a secure and privacy-focused alternative to traditional messaging apps. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc.",source:"@site/docs/devs/chat/concepts/01-Concepts-Architecture.mdx",sourceDirName:"devs/chat/concepts",slug:"/devs/chat/concepts/push-chat-architecture",permalink:"/devs/chat/concepts/push-chat-architecture",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/concepts/01-Concepts-Architecture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"devs-chat-concepts-architecture-overview",title:"Push Chat Architecture",hide_title:!0,slug:"./push-chat-architecture",displayed_sidebar:"pushChatSidebar",sidebar_position:1},sidebar:"pushChatSidebar",previous:{title:"Concepts",permalink:"/devs/chat/concepts/"},next:{title:"Encryption Version in Push Chat",permalink:"/devs/chat/concepts/encryption-version-in-push-chat"}},l={},h=[{value:"Spam prevention",id:"spam-prevention",level:2},{value:"Chat request",id:"chat-request",level:2},{value:"Sending messages",id:"sending-messages",level:2},{value:"Decentralization",id:"decentralization",level:2},{value:"Verification Proof",id:"verification-proof",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Push Chat SDK",id:"push-chat-sdk",level:2}],d={toc:h},c="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,a.kt)("p",null,"Push Chat is a web3 messaging protocol that enables wallet addresses to send and receive messages, offering a secure and privacy-focused alternative to traditional messaging apps. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc. "),(0,a.kt)("p",null,"Designed for mainstream adoption, Push Chat serves as a protocol that any dApp, web3 wallet, or backend can integrate to provide their users with messaging capabilities. "),(0,a.kt)("p",null,"Additionally, chat messages in Push Chat come with built-in notifications, similar to what users are accustomed to in web2 messaging platforms, ensuring a familiar and convenient user experience. This combination of features makes Push Chat a vital tool for anyone seeking to harness Web3 communication's full potential."),(0,a.kt)("head",null,(0,a.kt)("title",null,"Architecture Overview | Push Chat | Push Documentation")),(0,a.kt)("p",null,"Since Push Protocol started with decentralized notifications, every chat message sent on the protocol has a notification built in. Whenever a message is sent to an address, the receiving address will receive a notification along with the message but only if they have accepted your chat request."),(0,a.kt)("p",null,"Unlike traditional messengers that require users to provide their information to sign up, like their email, phone number, or any other personal data about the user, Push Chat requires no personal information whatsoever to start messaging on the protocol."," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All the user needs is a ",(0,a.kt)("strong",{parentName:"li"},"wallet address.")),(0,a.kt)("li",{parentName:"ul"},"All the messages are stored on IPFS and are encrypted as well as signed."," "),(0,a.kt)("li",{parentName:"ul"},"It's important to note that only the addresses involved in the conversation shall be able to decrypt the messages, and anyone can verify that the message was indeed sent by the sender's address and that the messages are encrypted."),(0,a.kt)("li",{parentName:"ul"},"When sending a message to an address, it is sent through Push Nodes."," ")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Push Nodes"))," are a network of nodes, where each node can have a different role in the network that is responsible for validating each notification and chat message between addresses."," "),(0,a.kt)("p",null,"Their main task is to validate that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"}," ","the payload is following the corresponding payload standard,"),(0,a.kt)("li",{parentName:"ul"},"the sender can actually send the message, and signature validation,"),(0,a.kt)("li",{parentName:"ul"},"if the payload is valid, the Push Nodes will store the message on IPFS and then send a notification (",(0,a.kt)("em",{parentName:"li"},"considering that the address has opt-in"),") to the receiver of the message."," "),(0,a.kt)("li",{parentName:"ul"},"Additionally, to read the messages, the receiver client will query the Push Nodes for any new message that was sent to it.")),(0,a.kt)("h2",{id:"spam-prevention"},"Spam prevention"),(0,a.kt)("p",null,"Spam prevention has always been one of our major priorities."," "),(0,a.kt)("p",null,"There are countless examples of users spamming others with fake giveaways, random messages, or unwanted notifications."),(0,a.kt)("p",null,"For notifications, the core protocol itself adopts a user-centric approach. This means that all the notifications are opt-in or opt-out based."," "),(0,a.kt)("p",null,"This means that users shall only receive notifications from protocols they opt in to. Users can fine-tune which notifications they see the value of and only opt-in for them while every other notification shall land in the user's spam box."," "),(0,a.kt)("p",null,"Chat is no different. We are working on our spam prevention mechanism on the core protocol level (",(0,a.kt)("em",{parentName:"p"},"more information about this soon"),"), but as of today, we have a chat request that enables spam prevention as it requires user acceptance before push notifications for those chats are enabled."),(0,a.kt)("h2",{id:"chat-request"},"Chat request"),(0,a.kt)("p",null,"Push Chat has two types of message groups: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Inbox and Request")),(0,a.kt)("strong",{parentName:"p"},".")," "),(0,a.kt)("p",null,"The very first time an address wants to send a message to another peer, the address must send an intent request. This first message shall not land in this peer Inbox but instead in its Request box."),(0,a.kt)("p",null,"When the user sees this message in its Request box, the user has 2 options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It can accept it and start messaging back the address"),(0,a.kt)("li",{parentName:"ul"},"It can ignore it (blocking users will be launched on the next version)")),(0,a.kt)("p",null,"It must be noted that addresses don\u2019t get notified about messages on the Request box. The notifications are only received if the address accepts the Request to talk to the other peer."," "),(0,a.kt)("p",null,"This prevents users from receiving notifications from any random address that sends them a message. So the user only receives notifications from the chat the user wants to talk to."),(0,a.kt)("h2",{id:"sending-messages"},"Sending messages"),(0,a.kt)("p",null,"The core protocol allows addresses to message any other address on Ethereum or Polygon. If the message is sent to an address that hasn\u2019t authenticated itself yet on the protocol (generate a pair of encryption keys), those messages will be in plain text until the address you are talking to authenticates itself in the protocol. From that moment on, all the following messages will be encrypted."),(0,a.kt)("p",null,"If you send a message to an address that has already been authenticated into the protocol, the messages will be encrypted. The reason for this choice was to allow addresses to send messages to their friends regardless of whether they have accessed the application. This design choice was made for better UX, but it can easily be changed if the community decides to."),(0,a.kt)("h2",{id:"decentralization"},"Decentralization"),(0,a.kt)("p",null,"Chat messages are sent between addresses via the Push Nodes. Push Nodes are the nodes responsible for validating notification and chat payload and for dispatching notifications to addresses. Push Nodes can have different roles in this Communication Network."),(0,a.kt)("p",null,"The vision for Push Protocol is for the Push Nodes to be run by the community and to get rewarded by contributing to the network's decentralization. As of today, Push Nodes are run by Push Protocol, but the team is working on decentralizing the nodes."),(0,a.kt)("p",null,"Although the Push Nodes are run by Push Protocol, users can always verify that the chat messages and notifications haven\u2019t been tampered with and that they have indeed been sent by the correct address. Users can always verify this by the Verification Proof."),(0,a.kt)("h3",{id:"verification-proof"},"Verification Proof"),(0,a.kt)("p",null,"Verification Proof is a property that is sent along with the notifications and chats messages to help the network validate the sender, the chain from which the notification (or message) is sent, and the content of the notification (or message) along with any other validation that might be required."),(0,a.kt)("p",null,"For notifications, the verification proofs differ based on the platform from which they are sent. i.e., Smart contracts verification proof can be validated on-chain, and smart contract-based notifications will usually carry transaction hash proofs while off-chain/gasless notifications usually carry EIP-712 proofs, though they are capable of carrying smart contract verification proof as well, which makes it composable."),(0,a.kt)("h2",{id:"encryption"},"Encryption"),(0,a.kt)("p",null,"When an address logs in to the protocol for the first time, PGP encryption keys are generated for the address."," "),(0,a.kt)("p",null,"The PGP private key is then encrypted with the address\u2019 public key and then sent the encrypted PGP private key, along with the PGP public key, to Push Nodes to get stored."," "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is extensible which means that the PGP key can be encrypted in the future with other methods paving way for a multi-chain future.")),(0,a.kt)("p",null,"Messages are encrypted on the client by using the AES encryption algorithm."," "),(0,a.kt)("p",null,"A different AES secret key is generated for each message. This secret key is then encrypted with the PGP public keys from the parties involved in the conversation and then sent the encrypted AES key is to Push Nodes."," "),(0,a.kt)("p",null,"The message payload content also contains the encrypted AES key in order to decrypt the message."),(0,a.kt)("h2",{id:"push-chat-sdk"},"Push Chat SDK"),(0,a.kt)("p",null,"With the SDK, it will be easy for developers to integrate messaging into their dapps. The use cases are endless:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can provide customer support to your users"),(0,a.kt)("li",{parentName:"ul"},"Create groups to discuss governance proposals without relying on Discord"),(0,a.kt)("li",{parentName:"ul"},"Chat with the community on a web3 game"),(0,a.kt)("li",{parentName:"ul"},"DMs or DAO token gated conversation"),(0,a.kt)("li",{parentName:"ul"},"Any other cool, crazy feature you can think of")),(0,a.kt)("p",null,"Alright. Now that you have a clear picture of the Push Chat and its SDK, let's dive in and try to integrate the push chat into your application."))}p.isMDXComponent=!0}}]);