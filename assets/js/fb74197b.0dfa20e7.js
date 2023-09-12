"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[3255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(d,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),d=n(1980),p=n(7392),s=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,p]=c({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),N=(()=>{const e=d??u;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var N=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:d,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=p[n].value;a!==o&&(u(t),d(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:g,onClick:m},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function A(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function T(e){const t=(0,N.Z)();return r.createElement(A,(0,a.Z)({key:String(t)},e))}},9889:(e,t,n)=>{n.d(t,{JU:()=>g,F0:()=>c,Ar:()=>b,cO:()=>N,AB:()=>h});var a=n(508);const r=`(max-width: ${"375px"})`,i=`(max-width: ${"768px"})`,l=`(max-width: ${"1024px"})`,o={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},d={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${o.DESKTOP.TOP} ${o.DESKTOP.RIGHT} ${o.DESKTOP.BOTTOM} ${o.DESKTOP.LEFT}`,TABLET:`${o.TABLET.TOP} ${o.TABLET.RIGHT} ${o.TABLET.BOTTOM} ${o.TABLET.LEFT}`,MOBILE:`${o.MOBILE.TOP} ${o.MOBILE.RIGHT} ${o.MOBILE.BOTTOM} ${o.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},p=(a.ZP.h1`
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
  padding: ${e=>e.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP};

  @media ${l} {
    padding: ${e=>e.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.TABLET};
  }

  @media ${r} {
    padding: ${e=>e.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE};
  }
`,a.ZP.div`
  flex-basis: 100%;
`),s=a.ZP.div`
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

  ${p} {
    width: 0;
  }
`,u=((0,a.ZP)(s)`
  flex: ${e=>e.flex||"1"};
  flex-direction: ${e=>e.flexDirection||"column"};

  ${p} {
    height: 0;
    width: auto;
  }
`,a.ZP.h1`
  color: ${e=>e.color||d.COLORS.FONT_LIGHT};
  font-weight: ${e=>e.fontWeight||700};
  font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
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

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`),m=((0,a.ZP)(u)`
  color: ${e=>e.color||d.COLORS.FONT_DARK};
  text-shadow: none;
  font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING};
  letter-spacing: ${e=>e.letterSpacing||"-0.02em"};

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,(0,a.ZP)(u)`
  font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING};

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.HEADING.MOBILE};
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

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
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
  background: ${e=>e.background||d.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||d.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};
  font-family: ${e=>e.fontFamily||"Strawford, Helvetica, sans-serif"};

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
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
`),g=(a.ZP.a`
  display: ${e=>e.display||"initial"};
  line-height: ${e=>e.lineHeight||"26px"};
  flex: ${e=>e.flex||"initial"};
  align-self: ${e=>e.alignSelf||"auto"};
  align-items: ${e=>e.alignItems||"center"};
  justify-content: ${e=>e.justifyContent||"center"};
  font-weight: ${e=>e.fontWeight||500};
  font-size: ${e=>e.fontSize||"inherit"};
  color: ${e=>e.color||"#fff"};
  background: ${e=>e.background||d.COLORS.BG_DARK};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"14px 32px"};
  border: ${e=>e.border||"none"};
  border-radius: ${e=>e.borderRadius||d.ADJUSTMENTS.RADIUS.SMALL};
  position: ${e=>e.position||"relative"};
  text-decoration: ${e=>e.textDecoration||"none"};
  overflow: ${e=>e.overflow||"hidden"};
  z-index: ${e=>e.zIndex||"3"};
  pointer: ${e=>e.pointer||"hand"};
  cursor: ${e=>e.cursor||"pointer"};

  @media ${l} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${e=>e.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
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
`),c=(0,a.ZP)(s)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`,f=(0,a.ZP)(m)`
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
`,N=(0,a.ZP)(f)`
`,k=(0,a.ZP)(f)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,b=(0,a.ZP)(k)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,h=(0,a.ZP)(s)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},6684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162),o=n(9889);const d={id:"devs-chat-develop-create-groups",title:"Create Group",hide_title:!0,slug:"./create-group",displayed_sidebar:"pushChatSidebar",sidebar_position:7},p="Group chat overview",s={unversionedId:"devs/chat/build/devs-chat-develop-create-groups",id:"devs/chat/build/devs-chat-develop-create-groups",title:"Create Group",description:"Group chat is the latest exciting addition to Push Chat, for the first time ever, web3 users are finally able to talk to each other in web3 native groups and have fine-grained controls over them allowing new ways by which community can be engaged besides adding new utilities to your token. Group chat enables protocols or web3 projects to create \u2014",source:"@site/docs/devs/chat/build/07-Develop-Create-Group.mdx",sourceDirName:"devs/chat/build",slug:"/devs/chat/build/create-group",permalink:"/devs/chat/build/create-group",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/build/07-Develop-Create-Group.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"devs-chat-develop-create-groups",title:"Create Group",hide_title:!0,slug:"./create-group",displayed_sidebar:"pushChatSidebar",sidebar_position:7},sidebar:"pushChatSidebar",previous:{title:"Types of Recipient",permalink:"/devs/chat/build/types-of-recipient"},next:{title:"Group Requests",permalink:"/devs/chat/build/group-requests"}},u={},m=[{value:"Create group API",id:"create-group-api",level:2},{value:"Create group parameters",id:"create-group-parameters",level:3},{value:"Create group interface",id:"create-group-interface",level:3}],g={toc:m},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"group-chat-overview"},"Group chat overview"),(0,r.kt)("p",null,"Group chat is the latest exciting addition to Push Chat, for the first time ever, web3 users are finally able to talk to each other in web3 native groups and have fine-grained controls over them allowing new ways by which community can be engaged besides adding new utilities to your token. Group chat enables protocols or web3 projects to create \u2014"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DAO / NFT community"),(0,r.kt)("li",{parentName:"ul"},"Private or public groups"),(0,r.kt)("li",{parentName:"ul"},"Conditional / Gated group for joining or sending message"),(0,r.kt)("li",{parentName:"ul"},"Gating based on tokens, NFTs, social following or custom endpoint"),(0,r.kt)("li",{parentName:"ul"},"Ability to integrate in your UI (web / mobile) without users going to Discord, Telegram or breaking the UX")),(0,r.kt)("head",null,(0,r.kt)("title",null,"Create Group | Push Chat | Push Documentation")),(0,r.kt)("h2",{id:"create-group-api"},"Create group API"),(0,r.kt)(i.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.group.create(name, {options?})\nconst createdGroup = await userAlice.chat.group.create(name);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create-group-parameters"},"Create group parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"name"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the group to be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional Configuration for creating group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.description")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Image for the group in ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")," format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of member recipients. ",(0,r.kt)("a",{parentName:"td",href:"./types-of-recipient"},"Recipient supports a number of address format"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.admins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of admin recipients. ",(0,r.kt)("a",{parentName:"td",href:"./types-of-recipient"},"Recipient supports a number of address format"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.private")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the group is private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Define conditions such as token gating, nft gating, custom endpoint for ",(0,r.kt)("inlineCode",{parentName:"td"},"joining")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sending message")," in a group. See ",(0,r.kt)("a",{parentName:"td",href:"./conditional-rules-for-group"},"conditional group gating")," to understand rule engine and how to fine tune conditional rules of your group")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expected response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'create'\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing pending member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The pending member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the pending member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for ERC20 tokens (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of ERC20 tokens associated. (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressNFT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for NFT tokens (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfNFTTokens")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of NFT tokens associated. (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verificationProof")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Verification proof associated with group data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupImage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Group's image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupDescription")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isPublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the group is public or private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupCreator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Push Profile DID of the group creator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chatId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chat ID associated with the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional metadata (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled start time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleEnd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled end time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the group (default, spaces, live etc).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Status information ( active, expired etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Group-specific moderation rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of event (create, update etc)"))))),(0,r.kt)("p",null,"Learn about ",(0,r.kt)(o.JU,{href:"./conditional-rules-for-group",mdxType:"AFocus"},"conditional rules")," to understand how groups permissions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"joining group")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sending messages")," can be customized for your community or needs."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create-group-interface"},"Create group interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface GroupRules {\n  entry?: { conditions?: any[] };\n  chat?: { conditions?: any[] };\n}\n\ninterface GroupOptions {\n  description?: string;\n  image?: string; // base 64 encoded string\n  members?: string[];\n  admins?: string[];\n  private?: boolean;\n  rules?: GroupRules;\n}\n\ninterface CreateGroupParams {\n  name: string;\n  options?: GroupOptions;\n}\n\nconst createdGroup = async ({ name, options }: CreateGroupParams): Promise<any> => {\n  // Your implementation here\n};\n\n// Example\nconst groupName = "Example Group";\nconst groupDescription = "This is an example group.";\nconst groupImage = "data:image/png;base64,iVBORw0K..."; // example base64 encoded image string\nconst walletAddress1 = "0x123...";\nconst walletAddress2 = "0x456...";\nconst walletAddress3 = "0x789...";\n\nconst newGroup = await userAlice.chat.group.create(groupName, \n  {\n    description: groupDescription,\n    image: groupImage,\n    members: [walletAddress1, walletAddress2, walletAddress3],\n    admins: [],\n    private: false,\n    rules: {\n      entry: { conditions: [] },\n      chat: { conditions: [] },\n    },\n  },\n});\n\n')))}f.isMDXComponent=!0}}]);