"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[5400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),m=(()=>{const e=s??p;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var m=n(2389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:u},o,{className:(0,i.Z)("tabs__item",T.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function $(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",T.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(x,(0,a.Z)({},e,t)))}function E(e){const t=(0,m.Z)();return r.createElement($,(0,a.Z)({key:String(t)},e))}},9889:(e,t,n)=>{n.d(t,{JU:()=>f,F0:()=>h,Ar:()=>b,cO:()=>m,AB:()=>x});var a=n(508);const r=`(max-width: ${"375px"})`,i=`(max-width: ${"768px"})`,o=`(max-width: ${"1024px"})`,l={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},s={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${l.DESKTOP.TOP} ${l.DESKTOP.RIGHT} ${l.DESKTOP.BOTTOM} ${l.DESKTOP.LEFT}`,TABLET:`${l.TABLET.TOP} ${l.TABLET.RIGHT} ${l.TABLET.BOTTOM} ${l.TABLET.LEFT}`,MOBILE:`${l.MOBILE.TOP} ${l.MOBILE.RIGHT} ${l.MOBILE.BOTTOM} ${l.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},c=(a.ZP.h1`
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

  @media ${i} {
    font-size: 36px;
  }
`,a.ZP.section`
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
`,a.ZP.div`
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
  padding: ${e=>e.padding||s.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP};

  @media ${o} {
    padding: ${e=>e.padding||s.ADJUSTMENTS.MARGIN.DEFAULT.TABLET};
  }

  @media ${r} {
    padding: ${e=>e.padding||s.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE};
  }
`,a.ZP.div`
  flex-basis: 100%;
`),d=a.ZP.div`
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

  ${c} {
    width: 0;
  }
`,p=((0,a.ZP)(d)`
  flex: ${e=>e.flex||"1"};
  flex-direction: ${e=>e.flexDirection||"column"};

  ${c} {
    height: 0;
    width: auto;
  }
`,a.ZP.h1`
  color: ${e=>e.color||s.COLORS.FONT_LIGHT};
  font-weight: ${e=>e.fontWeight||700};
  font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
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

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`),u=((0,a.ZP)(p)`
  color: ${e=>e.color||s.COLORS.FONT_DARK};
  text-shadow: none;
  font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING};
  letter-spacing: ${e=>e.letterSpacing||"-0.02em"};

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,(0,a.ZP)(p)`
  font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING};

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,a.ZP.img`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  display: ${e=>e.display||"flex"};
`,a.ZP.img`
  width: 125%;
  height: auto;
  display: flex;
`,a.ZP.span`
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

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }
`,a.ZP.button`
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
  background: ${e=>e.background||s.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||s.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};
  font-family: ${e=>e.fontFamily||"Strawford, Helvetica, sans-serif"};

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
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
`),f=(a.ZP.a`
  display: ${e=>e.display||"initial"};
  line-height: ${e=>e.lineHeight||"26px"};
  flex: ${e=>e.flex||"initial"};
  align-self: ${e=>e.alignSelf||"auto"};
  align-items: ${e=>e.alignItems||"center"};
  justify-content: ${e=>e.justifyContent||"center"};
  font-weight: ${e=>e.fontWeight||500};
  font-size: ${e=>e.fontSize||"inherit"};
  color: ${e=>e.color||"#fff"};
  background: ${e=>e.background||s.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||s.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};

  @media ${o} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||s.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
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
`,a.ZP.a`
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
`),h=(0,a.ZP)(d)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`,g=(0,a.ZP)(u)`
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
`,m=(0,a.ZP)(g)`
`,T=(0,a.ZP)(g)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,b=(0,a.ZP)(T)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,x=(0,a.ZP)(d)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},1638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);n(9889);const l={id:"devs-chat-develop-stream-chats",title:"Stream Chats",hide_title:!0,slug:"./stream-chats",displayed_sidebar:"pushChatSidebar",sidebar_position:12},s="Stream chats overview",c={unversionedId:"devs/chat/build/devs-chat-develop-stream-chats",id:"devs/chat/build/devs-chat-develop-stream-chats",title:"Stream Chats",description:"These APIs enable you to receive chat payloads or chat request / group invites in real time without polling the API. Push Chat achieves this by the use of sockets.",source:"@site/docs/devs/chat/build/12-Develop-Stream-Chat.mdx",sourceDirName:"devs/chat/build",slug:"/devs/chat/build/stream-chats",permalink:"/devs/chat/build/stream-chats",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/build/12-Develop-Stream-Chat.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"devs-chat-develop-stream-chats",title:"Stream Chats",hide_title:!0,slug:"./stream-chats",displayed_sidebar:"pushChatSidebar",sidebar_position:12},sidebar:"pushChatSidebar",previous:{title:"Manage Group",permalink:"/devs/chat/build/manage-group"},next:{title:"Message Types",permalink:"/devs/chat/message-types"}},d={},p=[{value:"Stream Chat API",id:"stream-chat-api",level:2},{value:"Stream chat parameters",id:"stream-chat-parameters",level:3}],u={toc:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stream-chats-overview"},"Stream chats overview"),(0,r.kt)("p",null,"These APIs enable you to receive chat payloads or chat request / group invites in real time without polling the API. Push Chat achieves this by the use of sockets."),(0,r.kt)("head",null,(0,r.kt)("title",null,"Stream Chats | Push Chat | Push Documentation")),(0,r.kt)("h2",{id:"stream-chat-api"},"Stream Chat API"),(0,r.kt)(i.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  // Import Push SDK & Ethers\n  import { createSocketConnection, EVENTS } from '@pushprotocol/socket';\n\n  // Create Socket to Listen to incoming messages\n  const pushSDKSocket = createSocketConnection({\n    user: signer.wallet,\n    socketType: 'chat',\n    socketOptions: { autoConnect: true, reconnectionAttempts: 3 },\n    env: 'staging',\n  });\n\n  // React to socket getting connected\n  pushSDKSocket.on(EVENTS.CONNECT, async () => {\n    console.log('Socket connected... queue in confetti!');\n  });\n\n  // React to message payload getting recieved\n  pushSDKSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message) => {\n    console.log(message);\n  });\n\n  // React to message payload getting recieved\n  pushSDKSocket.on(EVENT.CHAT_GROUPS, (object) => {\n    console.log('A chat group is created or updated');\n  });\n\n  // React to socket getting disconnected\n  pushSDKSocket.on(EVENTS.DISCONNECT, () => {\n    console.log('Socket disconnected');\n  });\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stream-chat-parameters"},"Stream chat parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"When is it triggered?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EVENTS")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONNECT")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever the socket is connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISCONNECT")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever the socket is disconneted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHAT_RECEIVED_MESSAGE")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever a new message is received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHAT_GROUPS")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever a group is created or updated")))))}h.isMDXComponent=!0}}]);