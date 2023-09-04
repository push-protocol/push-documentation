"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[5208],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>T});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),d=n(1980),p=n(7392),m=n(12);function u(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function s(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??u(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function g(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:n}=t;const a=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function N(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=s(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[d,p]=k({queryString:n,groupId:a}),[u,N]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,m.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&l.set(t)}),[n,l])]}({groupId:a}),A=(()=>{const t=d??u;return g({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{A&&o(A)}),[A]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!g({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),p(t),N(t)}),[p,N,l]),tabValues:l}}var A=n(2389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:n,selectedValue:o,selectValue:d,tabValues:p}=t;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),s=t=>{const e=t.currentTarget,n=m.indexOf(e),a=p[n].value;a!==o&&(u(e),d(a))},g=t=>{let e=null;switch(t.key){case"Enter":s(t);break;case"ArrowRight":{const n=m.indexOf(t.currentTarget)+1;e=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(t.currentTarget)-1;e=m[n]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>m.push(t),onKeyDown:g,onClick:s},i,{className:(0,l.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":o===e})}),n??e)})))}function f(t){let{lazy:e,children:n,selectedValue:a}=t;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function h(t){const e=N(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",c.tabList)},r.createElement(b,(0,a.Z)({},t,e)),r.createElement(f,(0,a.Z)({},t,e)))}function T(t){const e=(0,A.Z)();return r.createElement(h,(0,a.Z)({key:String(e)},t))}},9889:(t,e,n)=>{n.d(e,{JU:()=>g,F0:()=>k,Ar:()=>b,cO:()=>A,AB:()=>f});var a=n(508);const r=`(max-width: ${"375px"})`,l=`(max-width: ${"768px"})`,i=`(max-width: ${"1024px"})`,o={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},d={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${o.DESKTOP.TOP} ${o.DESKTOP.RIGHT} ${o.DESKTOP.BOTTOM} ${o.DESKTOP.LEFT}`,TABLET:`${o.TABLET.TOP} ${o.TABLET.RIGHT} ${o.TABLET.BOTTOM} ${o.TABLET.LEFT}`,MOBILE:`${o.MOBILE.TOP} ${o.MOBILE.RIGHT} ${o.MOBILE.BOTTOM} ${o.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},p=(a.ZP.h1`
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

  @media ${l} {
    font-size: 36px;
  }
`,a.ZP.section`
  align-items: ${t=>t.alignItems||"center"};
  align-self: ${t=>t.alignSelf||"stretch"};
  background: ${t=>t.gradient?t.gradient:t.background?t.background:"transparent"};
  display: ${t=>t.display||"flex"};
  flex: ${t=>t.flex||"1"};
  flex-direction: ${t=>t.flexDirection||"row"};
  justify-content: ${t=>t.justifyContent||"center"};
  width: ${t=>t.width||"auto"};
  margin: ${t=>t.margin||"0px"};
  min-height: ${t=>t.minHeight||"auto"};
  overflow: ${t=>t.overflow||"initial"};
  padding: ${t=>t.padding||"0px"};
  position: ${t=>t.position||"relative"};
`,a.ZP.div`
  display: ${t=>t.display||"flex"};
  flex-direction: ${t=>t.flexDirection||"column"};
  position: ${t=>t.position||"relative"};

  flex: ${t=>t.flex||"1"};
  align-self: ${t=>t.alignSelf||"stretch"};
  max-width: 1213px;
  // max-width: 1140px;
  display: flex;
  justify-content: center;
  box-sizing: ${t=>t.boxSizing||"content-box"};
  padding: ${t=>t.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP};

  @media ${i} {
    padding: ${t=>t.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.TABLET};
  }

  @media ${r} {
    padding: ${t=>t.padding||d.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE};
  }
`,a.ZP.div`
  flex-basis: 100%;
`),m=a.ZP.div`
  align-items: ${t=>t.alignItems||"center"};
  align-self: ${t=>t.alignSelf||"stretch"};
  background: ${t=>t.gradient?t.gradient:t.background?t.background:"transparent"};
  border: ${t=>t.border||"initial"};
  border-radius: ${t=>t.borderRadius||"initial"};
  bottom: ${t=>t.bottom||"auto"};
  box-shadow: ${t=>t.boxShadow||"initial"};
  display: ${t=>t.display||"flex"};
  filter: ${t=>t.filter||"initial"};
  flex: ${t=>t.flex||"1"};
  flex-basis: ${t=>t.flexBasis||"auto"};
  flex-direction: ${t=>t.flexDirection||"row"};
  flex-wrap: ${t=>t.flexWrap||"wrap"};
  gap: ${t=>t.gap||"normal"};
  font-size: ${t=>t.fontSize||"initial"};
  height: ${t=>t.height||"auto"};
  min-height: ${t=>t.minHeight||"initial"};
  justify-content: ${t=>t.justifyContent||"center"};
  left: ${t=>t.left||"auto"};
  margin: ${t=>t.margin||"0px"};
  max-width: ${t=>t.maxWidth||"initial"};
  min-width: ${t=>t.minWidth||"auto"};
  overflow: ${t=>t.overflow||"initial"};
  padding: ${t=>t.padding||"0px"};
  position: ${t=>t.position||"relative"};
  right: ${t=>t.right||"auto"};
  text-align: ${t=>t.textAlign||"initial"};
  top: ${t=>t.top||"auto"};
  width: ${t=>t.width||"auto"};
  z-index: ${t=>t.zIndex||"auto"};

  &:hover & {
    filter: ${t=>(t.filterHover?t.filterHover:t.hover?t.hover:"none")||"none"};
  }

  ${p} {
    width: 0;
  }
`,u=((0,a.ZP)(m)`
  flex: ${t=>t.flex||"1"};
  flex-direction: ${t=>t.flexDirection||"column"};

  ${p} {
    height: 0;
    width: auto;
  }
`,a.ZP.h1`
  color: ${t=>t.color||d.COLORS.FONT_LIGHT};
  font-weight: ${t=>t.fontWeight||700};
  font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
  text-transform: ${t=>t.textTransform||"inherit"};
  margin: ${t=>t.margin||"0px"};
  padding: ${t=>t.padding||"0px"};
  letter-spacing: ${t=>t.letterSpacing||"-0.03em"};
  font-family: ${t=>t.fontFamily||"Strawford, Helvetica, sans-serif"};
  text-align: ${t=>t.textAlign||"inherit"};
  line-height: ${t=>t.lineHeight||"110%"};
  /* text-shadow: 0 0 20px rgb(255 255 255 / 60%); */
  text-shadow: none;
  z-index: ${t=>t.zIndex||"auto"};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`),s=((0,a.ZP)(u)`
  color: ${t=>t.color||d.COLORS.FONT_DARK};
  text-shadow: none;
  font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING};
  letter-spacing: ${t=>t.letterSpacing||"-0.02em"};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,(0,a.ZP)(u)`
  font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`,a.ZP.img`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"auto"};
  display: ${t=>t.display||"flex"};
`,a.ZP.img`
  width: 125%;
  height: auto;
  display: flex;
`,a.ZP.span`
  flex: ${t=>t.flex||"initial"};
  align-self: ${t=>t.alignSelf||"auto"};
  color: ${t=>t.color||"initial"};
  background: ${t=>t.background||"transparent"};
  font-weight: ${t=>t.fontWeight||400};
  font-size: ${t=>t.fontSize||"inherit"};
  text-transform: ${t=>t.textTransform||"inherit"};
  margin: ${t=>t.margin||"0px"};
  padding: ${t=>t.padding||"0px"};
  letter-spacing: ${t=>t.letterSpacing||"-0.03em"};
  text-align: ${t=>t.textAlign||"initial"};
  line-height: ${t=>t.lineHeight||"142%"};
  position: ${t=>t.position||"initial"};
  right: ${t=>t.right||"auto"};
  left: ${t=>t.left||"auto"};
  bottom: ${t=>t.bottom||"auto"};
  top: ${t=>t.top||"auto"};
  z-index: ${t=>t.zIndex||"auto"};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }
`,a.ZP.button`
  display: ${t=>t.display||"initial"};
  line-height: ${t=>t.lineHeight||"26px"};
  flex: ${t=>t.flex||"initial"};
  flex-direction: ${t=>t.flexDirection||"row"};
  align-self: ${t=>t.alignSelf||"auto"};
  align-items: ${t=>t.alignItems||"center"};
  justify-content: ${t=>t.justifyContent||"center"};
  font-weight: ${t=>t.fontWeight||400};
  font-size: ${t=>t.fontSize||"inherit"};
  color: ${t=>t.color||"#fff"};
  background: ${t=>t.background||d.COLORS.BG_DARK};
  margin: ${t=>t.margin||"0"};
  padding: ${t=>t.padding||"14px 32px"};
  border: ${t=>t.border||"none"};
  border-radius: ${t=>t.borderRadius||d.ADJUSTMENTS.RADIUS.SMALL};
  position: ${t=>t.position||"relative"};
  text-decoration: ${t=>t.textDecoration||"none"};
  overflow: ${t=>t.overflow||"hidden"};
  z-index: ${t=>t.zIndex||"3"};
  pointer: ${t=>t.pointer||"hand"};
  cursor: ${t=>t.cursor||"pointer"};
  font-family: ${t=>t.fontFamily||"Strawford, Helvetica, sans-serif"};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${t=>t.hover||(t.background?t.background:"transparent")};
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
    background: ${t=>t.hoverBackground||"#000"};
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
    border: ${t=>t.hoverBorder||"inherit"};
    
    & svg > path {
      stroke: ${t=>t.hoverSVGPathStroke||"auto"};
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
  display: ${t=>t.display||"initial"};
  line-height: ${t=>t.lineHeight||"26px"};
  flex: ${t=>t.flex||"initial"};
  align-self: ${t=>t.alignSelf||"auto"};
  align-items: ${t=>t.alignItems||"center"};
  justify-content: ${t=>t.justifyContent||"center"};
  font-weight: ${t=>t.fontWeight||500};
  font-size: ${t=>t.fontSize||"inherit"};
  color: ${t=>t.color||"#fff"};
  background: ${t=>t.background||d.COLORS.BG_DARK};
  margin: ${t=>t.margin||"0"};
  padding: ${t=>t.padding||"14px 32px"};
  border: ${t=>t.border||"none"};
  border-radius: ${t=>t.borderRadius||d.ADJUSTMENTS.RADIUS.SMALL};
  position: ${t=>t.position||"relative"};
  text-decoration: ${t=>t.textDecoration||"none"};
  overflow: ${t=>t.overflow||"hidden"};
  z-index: ${t=>t.zIndex||"3"};
  pointer: ${t=>t.pointer||"hand"};
  cursor: ${t=>t.cursor||"pointer"};

  @media ${i} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${r} {
    font-size: ${t=>t.fontSize||d.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${t=>t.hover||(t.background?t.background:"transparent")};
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
    background: ${t=>t.hoverBackground||"#000"};
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
`),k=(0,a.ZP)(m)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`,N=(0,a.ZP)(s)`
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
`,A=(0,a.ZP)(N)`
`,c=(0,a.ZP)(N)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,b=(0,a.ZP)(c)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,f=(0,a.ZP)(m)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},4807:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);n(9889);const o={id:"devs-chat-develop-manage-group",title:"Manage Group",hide_title:!0,slug:"./manage-group",displayed_sidebar:"pushChatSidebar",sidebar_position:11},d="Manage group overview",p={unversionedId:"devs/chat/build/devs-chat-develop-manage-group",id:"devs/chat/build/devs-chat-develop-manage-group",title:"Manage Group",description:"This section covers all APIs related to managing groups including adding / removing members or admins, updating group info or fetching group info.",source:"@site/docs/devs/chat/build/11-Develop-Manage-Group.mdx",sourceDirName:"devs/chat/build",slug:"/devs/chat/build/manage-group",permalink:"/devs/chat/build/manage-group",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/build/11-Develop-Manage-Group.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"devs-chat-develop-manage-group",title:"Manage Group",hide_title:!0,slug:"./manage-group",displayed_sidebar:"pushChatSidebar",sidebar_position:11},sidebar:"pushChatSidebar",previous:{title:"Group Permissions",permalink:"/devs/chat/build/group-permissions"},next:{title:"Stream Chats",permalink:"/devs/chat/build/stream-chats"}},m={},u=[{value:"Get group info API",id:"get-group-info-api",level:2},{value:"Get group info parameters",id:"get-group-info-parameters",level:3},{value:"Update group API",id:"update-group-api",level:2},{value:"Update group parameters",id:"update-group-parameters",level:3},{value:"Add participants to group API",id:"add-participants-to-group-api",level:2},{value:"Add participants to group parameters",id:"add-participants-to-group-parameters",level:3},{value:"Remove participants from group API",id:"remove-participants-from-group-api",level:2},{value:"Remove participants from group parameters",id:"remove-participants-from-group-parameters",level:3}],s={toc:u},g="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-group-overview"},"Manage group overview"),(0,r.kt)("p",null,"This section covers all APIs related to managing groups including adding / removing members or admins, updating group info or fetching group info. "),(0,r.kt)("head",null,(0,r.kt)("title",null,"Manage Group | Push Chat | Push Documentation")),(0,r.kt)("h2",{id:"get-group-info-api"},"Get group info API"),(0,r.kt)(l.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.group.info(chatid)\nconst groupInfo = await userAlice.chat.group.info(chatid);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get-group-info-parameters"},"Get group info parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"chatId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"chatid")," related to that specific group. ",(0,r.kt)("strong",{parentName:"td"},"chatid")," are unique identifiers of the group")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  entry: true,\n  chat: true,\n  rules: { entry: { conditions: [] }, chat: { conditions: [] } }\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entry")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Refers if the Profile has access to enter the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Refers if the Profile has access to chat in the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Moderation rules of the group"))))),(0,r.kt)("h2",{id:"update-group-api"},"Update group API"),(0,r.kt)("p",null,"To update a group created you."),(0,r.kt)(l.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.group.update(chatid, {options?})\nconst updatedGroup = await userAlice.chat.group.update(chatid, options);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update-group-parameters"},"Update group parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"chatId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"chatid")," related to that specific group. ",(0,r.kt)("strong",{parentName:"td"},"chatid")," are unique identifiers of the group"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional Configuration for creating group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.description")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Image for the group in ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")," format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of member recipients. ",(0,r.kt)("a",{parentName:"td",href:"./types-of-recipient"},"Recipient supports a number of address format"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.admins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of admin recipients. ",(0,r.kt)("a",{parentName:"td",href:"./types-of-recipient"},"Recipient supports a number of address format"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.private")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the group is private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Define conditions such as token gating, nft gating, custom endpoint for ",(0,r.kt)("inlineCode",{parentName:"td"},"joining")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sending message")," in a group. See ",(0,r.kt)("a",{parentName:"td",href:"./conditional-rules-for-group"},"conditional group gating")," to understand rule engine and how to fine tune conditional rules of your group")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n"))),(0,r.kt)("h2",{id:"add-participants-to-group-api"},"Add participants to group API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// await userAlice.chat.group.add(chatid, {options?})\nconst addAdminToGroup = await userAlice.chat.group.add(groupChatId, {\n  role: 'ADMIN', // 'ADMIN' or 'MEMBER'\n  accounts: [account1, account2]\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add-participants-to-group-parameters"},"Add participants to group parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"chatId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"chatid")," related to that specific group. ",(0,r.kt)("strong",{parentName:"td"},"chatid")," are unique identifiers of the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for adding participants to group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ADMIN")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"MEMBER")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Role of added participant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accounts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Added participant addresses")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing pending member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The pending member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the pending member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for ERC20 tokens (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of ERC20 tokens associated. (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressNFT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for NFT tokens (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfNFTTokens")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of NFT tokens associated. (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verificationProof")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Verification proof associated with group data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupImage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Group's image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupDescription")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isPublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the group is public or private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupCreator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Push Profile DID of the group creator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chatId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chat ID associated with the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional metadata (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled start time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleEnd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled end time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the group (default, spaces, live etc).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Status information ( active, expired etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Group-specific moderation rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of event (create, update etc)"))))),(0,r.kt)("h2",{id:"remove-participants-from-group-api"},"Remove participants from group API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// await userAlice.chat.group.remove(chatid, {options?})\nconst removeAdminFromGroup = await userAlice.chat.group.remove(groupChatId, {\n  role: 'ADMIN', // 'ADMIN' or 'MEMBER'\n  accounts: [account1, account2]\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove-participants-from-group-parameters"},"Remove participants from group parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"chatId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"chatid")," related to that specific group. ",(0,r.kt)("strong",{parentName:"td"},"chatid")," are unique identifiers of the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for adding participants to group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ADMIN")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"MEMBER")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Role of added participant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accounts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Added participant addresses")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"members.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing pending member objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The wallet address of the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.publicKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The pending member's public PGP key (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.isAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the pending member is an admin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pendingMembers.image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image associated with the pending member.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for ERC20 tokens (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfERC20")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of ERC20 tokens associated. (Used for tokenGating).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddressNFT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Contract address for NFT tokens (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfNFTTokens")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of NFT tokens associated. (Used for tokenGating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verificationProof")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Verification proof associated with group data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupImage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Group's image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupDescription")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isPublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the group is public or private.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupCreator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Push Profile DID of the group creator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chatId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chat ID associated with the group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional metadata (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled start time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduleEnd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled end time (if available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the group (default, spaces, live etc).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Status information ( active, expired etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Group-specific moderation rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of event (create, update etc)"))))))}k.isMDXComponent=!0}}]);