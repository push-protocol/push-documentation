"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[4961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),d=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,d]=g({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==l&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9889:(e,t,n)=>{n.d(t,{JU:()=>m,F0:()=>g,Ar:()=>N,cO:()=>f,AB:()=>b});var a=n(508);const r=`(max-width: ${"375px"})`,i=`(max-width: ${"768px"})`,o=`(max-width: ${"1024px"})`,l={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},s={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${l.DESKTOP.TOP} ${l.DESKTOP.RIGHT} ${l.DESKTOP.BOTTOM} ${l.DESKTOP.LEFT}`,TABLET:`${l.TABLET.TOP} ${l.TABLET.RIGHT} ${l.TABLET.BOTTOM} ${l.TABLET.LEFT}`,MOBILE:`${l.MOBILE.TOP} ${l.MOBILE.RIGHT} ${l.MOBILE.BOTTOM} ${l.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},d=(a.ZP.h1`
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
`),p=a.ZP.div`
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

  ${d} {
    width: 0;
  }
`,u=((0,a.ZP)(p)`
  flex: ${e=>e.flex||"1"};
  flex-direction: ${e=>e.flexDirection||"column"};

  ${d} {
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
`),c=((0,a.ZP)(u)`
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
`,(0,a.ZP)(u)`
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
`),m=(a.ZP.a`
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
`),g=(0,a.ZP)(p)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`,h=(0,a.ZP)(c)`
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
`,f=(0,a.ZP)(h)`
`,k=(0,a.ZP)(h)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,N=(0,a.ZP)(k)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,b=(0,a.ZP)(p)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},2650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162),n(9889);const i={id:"devs-chat-develop-conditional-rules-for-group",title:"Conditional Rules for Group",hide_title:!0,slug:"./conditional-rules-for-group",displayed_sidebar:"pushChatSidebar",sidebar_position:10},o="What is conditional gating",l={unversionedId:"devs/chat/build/devs-chat-develop-conditional-rules-for-group",id:"devs/chat/build/devs-chat-develop-conditional-rules-for-group",title:"Conditional Rules for Group",description:"Conditonal gating allows you to define rules for the members of the group for different priveleges / permissions such as entry or chat. It is driven by Push Chat rules engine which is inpired by json rules engine and allows you to create powerful dynamics guiding communication for your community. Some examples of what you can achieve with it \u2014",source:"@site/docs/devs/chat/build/10-Develop-Conditional-Rule-For-Groups.mdx",sourceDirName:"devs/chat/build",slug:"/devs/chat/build/conditional-rules-for-group",permalink:"/devs/chat/build/conditional-rules-for-group",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/build/10-Develop-Conditional-Rule-For-Groups.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"devs-chat-develop-conditional-rules-for-group",title:"Conditional Rules for Group",hide_title:!0,slug:"./conditional-rules-for-group",displayed_sidebar:"pushChatSidebar",sidebar_position:10},sidebar:"pushChatSidebar",previous:{title:"Group Permissions",permalink:"/devs/chat/build/group-permissions"},next:{title:"Manage Group",permalink:"/devs/chat/build/manage-group"}},s={},d=[{value:"Understanding the rules object",id:"understanding-the-rules-object",level:2},{value:"Overview",id:"overview",level:3},{value:"Rules object Parameters",id:"rules-object-parameters",level:3},{value:"Criteria object Parameters",id:"criteria-object-parameters",level:3},{value:"When using type - <code>PUSH</code>",id:"when-using-type---push",level:4},{value:"Use Case Example - Token gated community",id:"use-case-example---token-gated-community",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3},{value:"Token gated group and send message example",id:"token-gated-group-and-send-message-example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-conditional-gating"},"What is conditional gating"),(0,r.kt)("p",null,"Conditonal gating allows you to define rules for the members of the group for different priveleges / permissions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"chat"),". It is driven by Push Chat rules engine which is inpired by json rules engine and allows you to create powerful dynamics guiding communication for your community. Some examples of what you can achieve with it \u2014"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creating token gated group")," - ie: user needs to hold XX token to join the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creating nft gated group")," - ie: user needs to hold XX NFT to join the gorup"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Defining multi-chain conditions")," - ie: user can join the group if they have 5 tokens on Ethereum or 10 tokens on Polygon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Defining sending message conditions")," - ie: user needs 1 token to join the group but 100 to send message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Defining non-web3 conditions using Guild")," - ie: user needs to follow ",(0,r.kt)("inlineCode",{parentName:"li"},"@pushprotocol")," on twitter to be able to join the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creating game theories by combining one or multiple conditions")," - ie: you need 1 token on any chain to join the group but sending messages require you to hold 1000 tokens or 1 NFT or 20 POAPs, etc")),(0,r.kt)("head",null,(0,r.kt)("title",null,"Conditional Gating of Group | Push Chat | Push Documentation")),(0,r.kt)("h2",{id:"understanding-the-rules-object"},"Understanding the rules object"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"rules")," object is an optional parameter that you pass in ",(0,r.kt)("a",{parentName:"p",href:"./create-group"},"create group API call")," to conditional gate ",(0,r.kt)("strong",{parentName:"p"},"joining")," or ",(0,r.kt)("strong",{parentName:"p"},"sending message")," in group chat."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rules"),(0,r.kt)("br",null),"\n\u251c ",(0,r.kt)("inlineCode",{parentName:"p"},"permission")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"chat"),(0,r.kt)("br",null),"\n","\u2003","\u2514 ",(0,r.kt)("inlineCode",{parentName:"p"},"conditions"),(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2514",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2514",(0,r.kt)("inlineCode",{parentName:"p"},"criteria 1"),(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2514",(0,r.kt)("inlineCode",{parentName:"p"},"criteria 2"),(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2514",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2514",(0,r.kt)("inlineCode",{parentName:"p"},"criteria 3"),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"rules"))," object is made up of individual ",(0,r.kt)("strong",{parentName:"p"},"permissions")," that define privilages of the group. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"permission"))," object contains ",(0,r.kt)("strong",{parentName:"p"},"conditions")," that needs to be satisfied."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"conditions"))," object is an array of one or more ",(0,r.kt)("strong",{parentName:"p"},"operator"),", ALL of which needs to be fulfilled for permission to be granted."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"operator"))," contains array of ",(0,r.kt)("strong",{parentName:"p"},"criteria"),", the namespace of operator (",(0,r.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),") decides if all criterias or anyone of the criteria needs to be fulfilled."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"criteria"))," is the atomic condition that has ",(0,r.kt)("strong",{parentName:"p"},"type"),", ",(0,r.kt)("strong",{parentName:"p"},"category"),", ",(0,r.kt)("strong",{parentName:"p"},"subcategory")," and ",(0,r.kt)("strong",{parentName:"p"},"data"),", based on which a particular condition is deemed as completed or failed."),(0,r.kt)("p",null,"To summarize, a list of ",(0,r.kt)("strong",{parentName:"p"},"criteria")," is created by you that is then defined inside ",(0,r.kt)("strong",{parentName:"p"},"operator")," to define their logical operation which is then passed in ",(0,r.kt)("strong",{parentName:"p"},"conditions")," of a particular ",(0,r.kt)("strong",{parentName:"p"},"permission"),". The list of individual ",(0,r.kt)("strong",{parentName:"p"},"permission")," is then attached to ",(0,r.kt)("strong",{parentName:"p"},"rules")," of the group to enable Push Chat rule engine to create dynamic communities with creative game theories."),(0,r.kt)("h3",{id:"rules-object-parameters"},"Rules object Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Rules object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions object for specific privilege of the group. Multiple permission object can reside within ",(0,r.kt)("inlineCode",{parentName:"td"},"rules")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entry")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions object for specific privilege of the group. ",(0,r.kt)("inlineCode",{parentName:"td"},"entry")," permission conditionalizes joining a group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions object for specific privilege of the group. ",(0,r.kt)("inlineCode",{parentName:"td"},"chat")," permission conditionalizes sending a message in that group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array of objects")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains array of all ",(0,r.kt)("inlineCode",{parentName:"td"},"operator")," objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions.[operator]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array of objects")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains lists of criteria objects defined by ",(0,r.kt)("inlineCode",{parentName:"td"},"operator")," key, Valid ",(0,r.kt)("inlineCode",{parentName:"td"},"operator")," keys are ",(0,r.kt)("inlineCode",{parentName:"td"},"any")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"any")," will mean only one criteria needs to be fulfilled, ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," means all criteria should pass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")," will mean only one criteria needs to be fulfilled from ",(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions.[operator]")," array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")," will mean only one criteria needs to be fulfilled from ",(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions.[operator]")," array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions.[operator].[criteria]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Individual criteria inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"rules.[permission].conditions.[operator]")," array")))),(0,r.kt)("h3",{id:"criteria-object-parameters"},"Criteria object Parameters"),(0,r.kt)("p",null,"Criteria object supports multiple access control protocols which can have different conditions and rules, currently Push Chat supports ",(0,r.kt)("inlineCode",{parentName:"p"},"PUSH")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GUILD")," type in criteria, owing to the way each individual protocol handles their respective ",(0,r.kt)("strong",{parentName:"p"},"type"),", ",(0,r.kt)("strong",{parentName:"p"},"category"),", ",(0,r.kt)("strong",{parentName:"p"},"subcategory")," and ",(0,r.kt)("strong",{parentName:"p"},"data"),", we are segregating the options and what they do for clarity."),(0,r.kt)("h4",{id:"when-using-type---push"},"When using type - ",(0,r.kt)("inlineCode",{parentName:"h4"},"PUSH")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[criteria]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," of the criteria, needs to be ",(0,r.kt)("inlineCode",{parentName:"td"},"PUSH")," for below category, subcategory to be applicable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - can be ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"CustomEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the category of the criteria, ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20")," means ERC-20 or normal token, ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," means ERC-721 or NFT tokens, ",(0,r.kt)("inlineCode",{parentName:"td"},"CustomEndpoint")," means a URL will be provided that results in 200 OK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subcategory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Further narrows down the condition that you want to run. For ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," - supported conditions are ",(0,r.kt)("inlineCode",{parentName:"td"},"holder")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"owner")," which means that the criteria will check if a wallet is owner or holder. For ",(0,r.kt)("inlineCode",{parentName:"td"},"CustomEndpoint"),", the subcategory is ",(0,r.kt)("inlineCode",{parentName:"td"},"GET")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"POST")," depending upon what HTTP request you want to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"define the data to be passed for checking conditions of criteria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contract")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Only used for ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," category. Remember to define the contract in chain agnostic fashion. ",(0,r.kt)("strong",{parentName:"td"},"{chain_standard}:{chain_id}:{contract_address}"),", for example: ",(0,r.kt)("inlineCode",{parentName:"td"},"eip155:1:0xf418588522d5dd018b425E472991E52EBBeEEEEE")," points to $PUSH token on Ethereum mainnet while ",(0,r.kt)("inlineCode",{parentName:"td"},"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1")," points to $PUSH token on Polygon mainnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"comparision")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - supports ",(0,r.kt)("inlineCode",{parentName:"td"},"<="),", ",(0,r.kt)("inlineCode",{parentName:"td"},">="),", ",(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Only used for ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," category. Define what comparision to use while comparing the data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Only used for ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC20")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ERC721")," category. Define the number to be passed in the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Only used for ",(0,r.kt)("inlineCode",{parentName:"td"},"CustomEndpoint")," category. Pass in the URL that when polled will return 200 OK for succes. API url are automatically appended with ",(0,r.kt)("inlineCode",{parentName:"td"},"{{user_address}}/checkAccess")," while checking access")))),(0,r.kt)("h2",{id:"use-case-example---token-gated-community"},"Use Case Example - Token gated community"),(0,r.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"We want to create a group that whose content is not visible to anyone outside our community of $PUSH. Furthermore, we want to make sure that the group can be viewed by anyone who has atleast 1 $PUSH on Ethereum or on Polygon."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Let's break down the problem statement into individual requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visibility:")," Creating a group that is not visible to anyone outside it's member is simple, we need to set up ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," flag in ",(0,r.kt)("a",{parentName:"p",href:"create-group#create-group-api"},"create group API"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group Join Permission:")," We have two criteria over here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Criteria 1"),": User should have 1 $PUSH on Ethereum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Criteria 2"),": User should have 1 $PUSH on Polygon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Push token on Ethereum Criteria\n{\n  type: "PUSH", // define type that rules engine should go for\n  category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n  subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n  data: { \n    "contract": "eip155:1:0xf418588522d5dd018b425E472991E52EBBeEEEEE", // $PUSH address on ETH\n    "comparison": ">=", // what comparision needs to pass\n    "amount": 1 // amount that needs to passed\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Push token on Polygon Criteria\n{\n  type: "PUSH", // define type that rules engine should go for\n  category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n  subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n  data: { \n    "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n    "comparison": ">=", // what comparision needs to pass\n    "amount": 1 // amount that needs to passed\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Either of criteria should be able to allow user to join the group, this means that the ",(0,r.kt)("strong",{parentName:"li"},"operator")," to use to combine these criterias would be ",(0,r.kt)("inlineCode",{parentName:"li"},"any"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Operator object - \'any\' since either condition should allow access\nany: [\n  {\n    type: "PUSH", // define type that rules engine should go for\n    category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n    subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n    data: { \n      "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n      "comparison": ">=", // what comparision needs to pass\n      "amount": 1 // amount that needs to passed\n    }\n  },\n  {\n    type: "PUSH", // define type that rules engine should go for\n    category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n    subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n    data: { \n      "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n      "comparison": ">=", // what comparision needs to pass\n      "amount": 1 // amount that needs to passed\n    }\n  }\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since there are no other conditions that are required, create the entire rules object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  rules: {\n    entry: { // permission object\n      conditions: [ // conditions object\n        any: [ // operator object\n          { // criteia object\n            type: "PUSH", // define type that rules engine should go for\n            category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n            subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n            data: { \n              "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n              "comparison": ">=", // what comparision needs to pass\n              "amount": 1 // amount that needs to passed\n            }\n          },\n          { // criteia object\n            type: "PUSH", // define type that rules engine should go for\n            category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n            subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n            data: { \n              "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n              "comparison": ">=", // what comparision needs to pass\n              "amount": 1 // amount that needs to passed\n            }\n          }\n        ]\n      ]\n    }\n    chat: {} // no permission condition is defined for chat access\n  }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally pass this rules object into the group that we are creating using the ",(0,r.kt)("a",{parentName:"li",href:"./create-group"},"create group API call"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  // Creating your token gated community\n  const createTokenGatedGroup = await userAlice.chat.group.create(\'Push Community\', {\n    description: \'Token gated web3 native chat example\', // provide short description of group\n    image: \'data:image/png;base64,iVBORw0K...\', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // not needed as per problem statement, can omit\n    private: true,\n    rules: {\n      entry: { // permission object\n        conditions: [ // conditions object\n          any: [ // operator object\n            { // criteia object\n              type: "PUSH", // define type that rules engine should go for\n              category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n              subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n              data: { \n                "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n                "comparison": ">=", // what comparision needs to pass\n                "amount": 1 // amount that needs to passed\n              }\n            },\n            { // criteia object\n              type: "PUSH", // define type that rules engine should go for\n              category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n              subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n              data: { \n                "contract": "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH\n                "comparison": ">=", // what comparision needs to pass\n                "amount": 1 // amount that needs to passed\n              }\n            }\n          ]\n        ]\n      }\n      chat: {} // no permission condition is defined for chat access\n    }\n  }\n')),(0,r.kt)("h2",{id:"token-gated-group-and-send-message-example"},"Token gated group and send message example"),(0,r.kt)("p",null,"Below is an advance version of gated controls that are applied to both ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," to the group as well as sending ",(0,r.kt)("inlineCode",{parentName:"p"},"chat")," in the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  // We are going to create a group that is:\n  // Private - All conversations in this group is encrypted and visible only to members of the group\n  // Gated entry by either of two rules \n  // Gated entry - Rule 1 - It takes 10 $XYZ token on Ethereum or on Polygon to join the group\n  // Gated chat by rule of having $1000 XYZ on Ethereum token to allow sending chat in the group\n  const myTokenGatedGroup = await userAlice.chat.group.create(\'BRB Chat\', {\n    description: \'This is your DAO community native web3 chat\', // provide short description of group\n    image: \'data:image/png;base64,iVBORw0K...\', // provide base64 encoded image\n    members: [\'0x123...\', \'0xABC...\', \'eip155:0x754...\'], // see types of recipient to learn more\n    admins: [\'nft:eip155:5:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528\'], // NFT addresses are supported as well\n    private: true, // ensures chat within group is encrypted and is only visible to members of the group\n    rules: { // define rules to gate different permissions of the group, ie: joining group or sending messages\n      entry: { // define condition for joining the group\n        conditions: [ // set of all conditions that should be fulfilled to join the group\n          any: [ // set operator to \'any\', if \'and\' then all rules need to be fulfilled\n            { // define criteria 1\n              type: "PUSH", // define type that rules engine should go for, currently supports PUSH or GUILD\n              category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n              subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n              data: { // define the data check\n                "contract": "eip155:1:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9", // pass {blockchain_standard}:{chain_id}:{address} as a shorthand\n                "comparison": ">=", // what comparision needs to pass\n                "amount": 10 // amount that needs to passed\n              }\n            },\n            { // define criteria 2\n              type: "PUSH", // define type that rules engine should go for, currently supports PUSH or GUILD\n              category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n              subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n              data: { // define the data check\n                "contract": "eip155:137:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9", // assuming $XYZ contract address is 0xBE18197d1c071b72fb2460B1652C96C22d40F1D9\n                "comparison": ">=", // what comparision needs to pass\n                "amount": 10 // amount that needs to passed\n              }\n            }\n          ]\n        ]\n      },\n      chat: {\n        conditions: [ // define condition for sending message in the group\n          any: [ // set operator to \'any\', if \'and\' then all rules need to be fulfilled\n            { // define criteria 1\n              type: "PUSH", // define type that rules engine should go for, currently supports PUSH or GUILD\n              category: "ERC20", // define it\'s ERC20 token that you want to check, supports ERC721 as well\n              subcategory: "holder", // define if you are checking \'holder\' or \'owner\'\n              data: { // define the data check\n                "contract": "eip155:1:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9", // pass {blockchain_standard}:{chain_id}:{address} as a shorthand\n                "comparison": ">=", // what comparision needs to pass\n                "amount": 1000 // amount that needs to passed\n              }\n            }\n          ]\n        ]\n      }\n    }\n  });\n\n')))}c.isMDXComponent=!0}}]);