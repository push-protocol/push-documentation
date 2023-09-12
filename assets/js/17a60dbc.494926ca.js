"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[8324],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(d,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),d=n(1980),p=n(7392),s=n(12);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function u(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??m(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function g(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function c(t){let{queryString:e=!1,groupId:n}=t;const a=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=u(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[d,p]=c({queryString:n,groupId:a}),[m,k]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&l.set(t)}),[n,l])]}({groupId:a}),N=(()=>{const t=d??m;return g({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!g({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),p(t),k(t)}),[p,k,l]),tabValues:l}}var N=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:n,selectedValue:o,selectValue:d,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=t=>{const e=t.currentTarget,n=s.indexOf(e),a=p[n].value;a!==o&&(m(e),d(a))},g=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=s.indexOf(t.currentTarget)+1;e=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(t.currentTarget)-1;e=s[n]??s[s.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>s.push(t),onKeyDown:g,onClick:u},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===e})}),n??e)})))}function b(t){let{lazy:e,children:n,selectedValue:a}=t;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function T(t){const e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(f,(0,a.Z)({},t,e)),r.createElement(b,(0,a.Z)({},t,e)))}function y(t){const e=(0,N.Z)();return r.createElement(T,(0,a.Z)({key:String(e)},t))}},9889:(t,e,n)=>{n.d(e,{JU:()=>k,xk:()=>c,wb:()=>s,v:()=>m,F0:()=>N,Ar:()=>T,cO:()=>f,AB:()=>y,OA:()=>g});var a=n(508);const r=`(max-width: ${"375px"})`,l=`(max-width: ${"768px"})`,i=`(max-width: ${"1024px"})`,o={DESKTOP:{TOP:"120px",RIGHT:"40px",BOTTOM:"120px",LEFT:"40px"},TABLET:{TOP:"60px",RIGHT:"25px",BOTTOM:"60px",LEFT:"25px"},MOBILE:{TOP:"40px",RIGHT:"20px",BOTTOM:"40px",LEFT:"20px"}},d={LINKS:{IOS_APP:"https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",ANDROID_APP:"https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US"},STORAGE:{},CONSTANTS:{HEADER_HEIGHT:70,LEFT_BAR_WIDTH:260},ADJUSTMENTS:{PADDING:{HUGE:"60px",BIG:"40px",SMALL:"20px"},MARGIN:{VERTICAL:"30px",HORIZONTAL:"20px",DEFAULT:{DESKTOP:`${o.DESKTOP.TOP} ${o.DESKTOP.RIGHT} ${o.DESKTOP.BOTTOM} ${o.DESKTOP.LEFT}`,TABLET:`${o.TABLET.TOP} ${o.TABLET.RIGHT} ${o.TABLET.BOTTOM} ${o.TABLET.LEFT}`,MOBILE:`${o.MOBILE.TOP} ${o.MOBILE.RIGHT} ${o.MOBILE.BOTTOM} ${o.MOBILE.LEFT}`}},RADIUS:{LARGE:"48px",MID:"32px",SMALL:"16px"},BLUR:{DEFAULT:5,HEADER:10},FONT:{PRIMARY_HEADING:{DESKTOP:"62px",TABLET:"42px",MOBILE:"34px"},HEADING:{DESKTOP:"32px",TABLET:"28px",MOBILE:"26px"},HIGHLIGHTED_TEXT:{DESKTOP:"48px",TABLET:"40px",MOBILE:"32px"},NORMAL_TEXT:{DESKTOP:"20px",TABLET:"16px",MOBILE:"14px"}}},COLORS:{HIGHLIGHT:"#DD44B9",FONT_LIGHT:"#000",FONT_LIGHT_SECONDARY:"000",FONT_DARK:"#121315",FONT_DARK_SECONDARY:"#303C5E",BG_LIGHT:"#FFF",BG_DARK:"#121315",HEADER_BG_LIGHT:"#FFFFFFCC",HEADER_BG_DARK:"#121315CC",BG_DARK_SECONDARY:"#2A2A39",BG_LIGHT_SECONDARY:"#F0DCFF",BG_HIGHLIGHTED_LIGHT_TRANSPARENT:"rgba(219, 171, 255, 0.7);",BG_HIGHLIGHTED_MID_TRANSPARENT:"rgba(235, 216, 249, 0.5);",BG_GRADIENT_PRIMARY:"linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);"}},p=(a.ZP.h1`
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
`),s=a.ZP.div`
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
`,m=(0,a.ZP)(s)`
  flex: ${t=>t.flex||"1"};
  flex-direction: ${t=>t.flexDirection||"column"};

  ${p} {
    height: 0;
    width: auto;
  }
`,u=a.ZP.h1`
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
`,g=((0,a.ZP)(u)`
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
`),c=a.ZP.button`
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
`,k=(a.ZP.a`
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
`),N=(0,a.ZP)(s)`
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
`,b=(0,a.ZP)(h)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`,T=(0,a.ZP)(b)`
  max-width: 160px;
  align-self: stretch;
  flex: 1;

`,y=(0,a.ZP)(s)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`},9266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);n(9889);const o={id:"devs-chat-develop-fetch-chats",title:"Fetch Chats",hide_title:!0,slug:"./fetch-chats",displayed_sidebar:"pushChatSidebar",sidebar_position:3},d="Fetch chats overview",p={unversionedId:"devs/chat/build/devs-chat-develop-fetch-chats",id:"devs/chat/build/devs-chat-develop-fetch-chats",title:"Fetch Chats",description:"These APIs are useful for fetching list of all chats (or chat requests) that a user might have, along with providing calls to get latest message or historical messages between two users (or from a group).",source:"@site/docs/devs/chat/build/03-Develop-Fetch-Chats.mdx",sourceDirName:"devs/chat/build",slug:"/devs/chat/build/fetch-chats",permalink:"/devs/chat/build/fetch-chats",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/devs/chat/build/03-Develop-Fetch-Chats.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"devs-chat-develop-fetch-chats",title:"Fetch Chats",hide_title:!0,slug:"./fetch-chats",displayed_sidebar:"pushChatSidebar",sidebar_position:3},sidebar:"pushChatSidebar",previous:{title:"Initialize User",permalink:"/devs/chat/build/initialize-user"},next:{title:"Chat Requests",permalink:"/devs/chat/build/chat-requests"}},s={},m=[{value:"Chat list API",id:"chat-list-api",level:2},{value:"Chat list parameters",id:"chat-list-parameters",level:3},{value:"Fetch latest chat API",id:"fetch-latest-chat-api",level:2},{value:"Fetch latest chat parameters",id:"fetch-latest-chat-parameters",level:3},{value:"Fetch chat history API",id:"fetch-chat-history-api",level:2},{value:"Fetch chat history parameters",id:"fetch-chat-history-parameters",level:3}],u={toc:m},g="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetch-chats-overview"},"Fetch chats overview"),(0,r.kt)("p",null,"These APIs are useful for fetching list of all chats (or chat requests) that a user might have, along with providing calls to get latest message or historical messages between two users (or from a group)."),(0,r.kt)("head",null,(0,r.kt)("title",null,"Fetch Chats | Push Chat | Push Documentation")),(0,r.kt)("h2",{id:"chat-list-api"},"Chat list API"),(0,r.kt)("p",null,"List all chats that the user are already messaging with, called ",(0,r.kt)("strong",{parentName:"p"},"chat connections"),". While ",(0,r.kt)("strong",{parentName:"p"},"chat requests")," are request from other users (or invite from group) that you haven't accepted yet. See ",(0,r.kt)("a",{parentName:"p",href:"/devs/chat/build/chat-requests"},"chat requests")," for more info."),(0,r.kt)(l.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.list(type, {options?})\nconst aliceChats = await userAlice.chat.list('CHATS');\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chat-list-parameters"},"Chat list parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"type"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHATS")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"REQUESTS")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of Chats to be listed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional configuration properties for listing chat"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.page")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"The page number for pagination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of items to retrieve per page")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  {\n    chatId: '6168440929ced5109c50534d40bb98a5e109ebf1d33df966ae898f002fac8973',\n    about: null,\n    did: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n    intent: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n    intentSentBy: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n    intentTimestamp: '2023-08-29T08:05:03.000Z',\n    publicKey:\n      '{\"key\":\"-----BEGIN PGP PUBLIC KEY BLOCK-----\\\\n\\\\nxsBNBGTt9AcBCADXjt9OEXDQyE7w2veaHqTUN9fALt7c+cubz2nhWfmD07M1\\\\n5Spm3ScT/4HdlPpUBYnGUKlCT09g663RvvmDzp8442vZhfYeKbetrcNFxfnp\\\\n+ePQGiLDY0h2FmjQGkmZGP43ZLyhNT4eCIGPcPSpzaWAKw4wgE/tW2hli5m/\\\\n7e8HFno+bHp2ycNoPJpdqhY77CJL9zPqFdctCPxI5r1/+xkVLcf+NZ+vD7mz\\\\nq8xVpu3Tij5Jb5ShDPQ3qqPsqdCcB/fpnEtAOT/Ryuf5Qqic/bDrzImfaIO9\\\\nYmdnuc6uQBR1s8WbLHmOsQvJhe2D8MtggV5HwHbkPqxXBmpGIJnMeLHZABEB\\\\nAAHNAMLAigQQAQgAPgWCZO30BwQLCQcICZBvKHl019glPAMVCAoEFgACAQIZ\\\\nAQKbAwIeARYhBEyKE1gcoT4IIxerrG8oeXTX2CU8AADltgf/dREUaHmfMnwa\\\\nWwcoGxfya7xeSeqGLWoWsCDg55lq0rf59IFKw59AKL+4kKQrmVDW0x6oo844\\\\nxBv3NBq7OssNbRr4XYIXJN4oP8g0SdOYinTTcnHFjJcRHfTIa+lmlf7fwc7d\\\\n2DRW3Kyu66OGq9sLzcgI3Q4Fg3VOQGRDdVGF4zJGjPEpnHsJuGCVnbn5L94p\\\\nMZHEMIahYrYg2asglSByNUZIH+r0Y8rCzKp8rs37X/Q8RBrmW/oTnE/bb+xo\\\\n1jHgRR3MUs2Ea0oAqv/TwqpBRzMIWQ8tGKfEaJ22p02FJaE5q9KMbLp0mMIe\\\\nd33xGwOezLKoK5L9cHKg7wmz4sWvUs7ATQRk7fQHAQgApXcZbj43S5sr7v8d\\\\nq9JwcXkSdpRuzGw5zyauxUUElq2RLKPvsP8En+OJQceKWQcpvz16xLjnSoZI\\\\nfgIl1wXUaEb2T45rUrWmnoO+Csy2h6FePNmlHOerY2/C0GHQX3XP/B0t41By\\\\nG/o4losESsBaHEYugHIg5kXhgsGnlgoC3Bu4zHFmIvLlZXjCWYUG2JnhNHlG\\\\nrD67/Xuox1FO+Hh/rR7sSsWIH6S+SFgG/P4bwiW0JAYQP6bC4tbXfzvKJk2R\\\\ndeySnppEAwdn/3lCU5QscYIIUXSaPoV3Q6hg+wRigBk2ixkqdOTJmJROTOo3\\\\nUdnaeGSwP23USJIUncZWgcIokwARAQABwsB2BBgBCAAqBYJk7fQHCZBvKHl0\\\\n19glPAKbDBYhBEyKE1gcoT4IIxerrG8oeXTX2CU8AABx6Af/XRamjQ4T79rf\\\\nhNArQt3VuHvpIUP860MCg0aW5rMtZ8q4+TwOyjiEgOUIFx215Yprb3R3NTKV\\\\nQWJr8n++ZGDmQ8iro8nrRMRELmoEJzyWp3yr0dyr2lx01//bud+vVw+ARPLt\\\\nVUnX8eguLKRrltQmIRwCqX01PCTiN2RDB2Akd+zlBGRiHoavW9dDdGGBY9wW\\\\nA2Pyw73BeMzVA3akiGzLsdRIshO0DBALaX0G5ytqyIf3QjXOqO6C7gp9XW7R\\\\njXhRhzvR9NjZPmSXEeYqYw2CUPxzaLsKoSP4dbXE7Hl+sYJptzke7LE1StzH\\\\nG64gRgEYMCKvRZaPXYnPJXAZwDhijw==\\\\n=8aQd\\\\n-----END PGP PUBLIC KEY BLOCK-----\\\\n\",\"signature\":\"DEPRECATED\"}',\n    profilePicture:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAsklEQVR4AcXBQY0DMRBE0Z+SCRhCsBhGAJiAYQwBgzGmZuDk2pPDSKPsqt57zNfzTVKPxX+K0ciEmTATZqXuSRajkdVjkcVoXKnHIovRyOqeZMJMmAmzEurcUffkF6FOJsyEmTAr3BTqXKks7hBmwkyYFb7UPflLdU+yUCcTZsJMmBW+hDong5O6J1diNE7EJWEmzIRZqccii9G4Eur8oh6LTJgJM2H2mK/nGyNhJsyE2QfJZChdHLm7QQAAAABJRU5ErkJggg==',\n    threadhash: 'bafyreiewla5iyd7rnvjw2c5w6dbab4zkyf2desbowzouijoea2jzakxz6i',\n    wallets: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n    combinedDID:\n      'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562_eip155:0x84a9385e9b97df87b80c2e689997133703853874',\n    name: null,\n    groupInformation: null,\n    msg: {\n      fromDID: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n      toDID: 'eip155:0x84a9385e9b97df87b80c2e689997133703853874',\n      messageObj: [Object],\n      messageContent: 'Hello Alice!',\n      messageType: 'Text',\n      timestamp: 1693316103747,\n      fromCAIP10: 'eip155:0x14727F96dF61105661E78275D1A03C4F8aeff562',\n      toCAIP10: 'eip155:0x84a9385e9b97df87b80c2e689997133703853874',\n      encryptedSecret:\n        '-----BEGIN PGP MESSAGE-----\\n' +\n        '\\n' +\n        'wcBMA3d9z8TNUuddAQf/U2hMcybh5mUt9FFen5tfZ52PaB0vc2G+wYYIsBfu\\n' +\n        'zg58rgLy8uGMxvzhtCWhpIE91G62d8M4OmaDa+PLjs8SqyRoyih/9pt8P4cw\\n' +\n        'UJVHHDcJNC9r6/AV4aZySdz5u5utE7o3iB1FU0Sr9HEQsImmOM7J6LZJ3xWJ\\n' +\n        'V+o4ToLbqUFYKg2uY1kUXpyX+D6JRinagnAosh4zCICLUqrEkKNqbyV2mr+5\\n' +\n        'FK+fClWBGCwpf38L220FqHYPQ4bQXks0N07yW4OVjVpCTZVuNttr7PIEqcyZ\\n' +\n        'qIovbQbkltiDpsb/yYysEHTwBtvugna7xMW7SRY34x3iWm/HBNJmfBG7LnjI\\n' +\n        '6cHATAMrTKobmmcFTAEH/20nW6aNzfj1vn/5GIWjZ5Z4Rw6G3Syt+0NxPUix\\n' +\n        'dpKIFOR0/BEJkafGMdlk/vRElsyluKbzykBlIQ0hHGRpGMNEW8s8GrJeiXvV\\n' +\n        'JSNZ24u5DDk8DIBaJWJnyWM7XzgcmOmn9rvVbvc9qgNNgtDeMIZwUpiDipnA\\n' +\n        '++7n72h0JSs8dWFQ62FSf5ACHC0UVbPiL3TRrRBEo7vQp4JsJyXp70CUclqU\\n' +\n        '3ANLvNhINV6GGtpXEKnsBVkkg35HR92nIzk+8HL86SsRUYfXkufzXdkPpmRn\\n' +\n        'SG7MoDecNf/bwoqP8/l2X2h3R1c+WTQFb6Z+eK/NsJ/AnSErFZh3yEHAi1Rz\\n' +\n        'yIXSQAEA2KupLnBVC9fqZqhUySvOW/Hs/hD6iEEGIl+U/RC9AwdG2jpg4sVi\\n' +\n        'f9PhBJ5Tanynb3aHngRKtIzjP5m223A=\\n' +\n        '=5w+B\\n' +\n        '-----END PGP MESSAGE-----\\n',\n      encType: 'pgp',\n      signature:\n        '-----BEGIN PGP SIGNATURE-----\\n' +\n        '\\n' +\n        'wsBzBAEBCAAnBYJk7fQHCZBvKHl019glPBYhBEyKE1gcoT4IIxerrG8oeXTX\\n' +\n        '2CU8AACRLQf/bbeJoUNwRkJYz100R3ULO27HGjKnFeOaMZWRNF8JqWzNmCBL\\n' +\n        'Cj3aIBkDuCUj7avBsanScbSa7tD8Mc8PZgpSkd22nNH5iHiDJqlPtySJ2KoZ\\n' +\n        '3ekVXfOgfLlHtN78ghTxABewYQRuB6kwtv3XQW8X9sCL2jEF4NIIl5eXZvIT\\n' +\n        'nhbHhhOR47k2E0hiHjPv2t3ggrwkrw6ISDgV8qYcrnf7vEFeGHpeSc25QLJH\\n' +\n        'pXCeeHhH7h4C9L3PEdMt8T+Ne36cfNiwTGdOavin/yfNES6k0kqZxP44hn1M\\n' +\n        'ZBk4jfyaDUh70mv4FtxdPcdb1TGQsPC1YYAIh/059EBqkdJFhVF4+A==\\n' +\n        '=DBch\\n' +\n        '-----END PGP SIGNATURE-----\\n',\n      sigType: 'pgpv2',\n      verificationProof:\n        'pgpv2:-----BEGIN PGP SIGNATURE-----\\n' +\n        '\\n' +\n        'wsBzBAEBCAAnBYJk7fQHCZBvKHl019glPBYhBEyKE1gcoT4IIxerrG8oeXTX\\n' +\n        '2CU8AADsmwf/UpJCmnqztJLt1Ltg0OD7xoDvumitRwkfhnXzUdBWxM3i7vj4\\n' +\n        'cfjtcpQI2R5W0TXj9e2fymimIc98kjUqpDiUIaVAuD0OnEbJdIluGLBTJeks\\n' +\n        'YTRikqkgjFJT9Y6/2VRQj59IR0rgC0sec8mSKPlxuhixkdSS7Wec0+84cGmX\\n' +\n        'aieskReKeitKacYkU4Uf82Klc7Ft8+duBsaMGR3TS22PzHfYIHmy+8Z3b1SK\\n' +\n        'pMyJ8NBXCG2F+05WdoUsXBR+lO74RjSDWnWZlgRngWjjvSXQuZ/QznIyBVmQ\\n' +\n        'oOxJM5LSCCwH6ch5J/HmXudJG+3wsCINchvSQx0LntZUoeSp8cezvg==\\n' +\n        '=KUqZ\\n' +\n        '-----END PGP SIGNATURE-----\\n',\n      link: null,\n    },\n  },\n];\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IMessageIPFS")),(0,r.kt)("td",{parentName:"tr",align:null},"message object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"did"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"user DID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wallets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"user wallets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profilePicture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"user profile picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"user public key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"about"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"user description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threadhash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"cid from the latest message sent on this conversation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"addresses concatenated from the users who have approved the intent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intentSentBy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"address of the user who sent the intent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intentTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp of the intent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"combinedDID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"concatenated addresses of the members of this chat (for DM the 2 addresses and from Group the addresses from all group members)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"content identifier on IPFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chatId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"chat identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupInformation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GroupDTO")),(0,r.kt)("td",{parentName:"tr",align:null},"if group chat, all group information"))))),(0,r.kt)("h2",{id:"fetch-latest-chat-api"},"Fetch latest chat API"),(0,r.kt)("p",null,"Fetches latest chat between your instantiated user and any other user (or group)."),(0,r.kt)(l.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.latest(recipient)\nconst aliceChats = await userAlice.chat.latest(bobAddress);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetch-latest-chat-parameters"},"Fetch latest chat parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"recipient"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./types-of-recipient"},"Recipient supports a number of address format")," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  {\n    link: 'bafyreibfikschwlfi275hr7lrfqgj73mf6absailazh4sm5fwihspy2ky4',\n    toDID: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    encType: 'pgp',\n    fromDID: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    sigType: 'pgp',\n    toCAIP10: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    signature:\n      '-----BEGIN PGP SIGNATURE-----\\n' +\n      '\\n' +\n      'wsBzBAEBCAAnBQJjh5tjCRBaJmgmByp5FRYhBJC23yBJT2d/pTAID1omaCYH\\n' +\n      'KnkVAAAZmwf/buPLw6caSZmYnw6D3/p6HF1kWlkGUOTP4RasaU/6dkeDaZs9\\n' +\n      'SJlz2wC8oOpBGWHMJ/5n3ZWmU71E6U7IKIY793MyIv5t32vTNkwsRHUX7IIn\\n' +\n      'QFF+FzTIEtHHVTRlnkqNR2YUk1kqcpZCZWHfahi5W2d/WkXlFNdvyyFH4W8L\\n' +\n      'd03FGhOyXbWwU3xicBz5mSBpIFaaSCXl1SdgJDPXLSk3b65EEOjCOaiz85xC\\n' +\n      'G+6SW4RUzCGSDcOd9F2EXvvY5H9LgQNi1jjlZn6JrPTPJTJ+wXZXzcZmtOXG\\n' +\n      'EKcwvPbbPY9wd+gavRSOgYLYn5xoZQW/o3hW7AQlbC5Kj6js48Z0HQ==\\n' +\n      '=qLiJ\\n' +\n      '-----END PGP SIGNATURE-----\\n',\n    timestamp: 1669831523684,\n    fromCAIP10: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    messageType: 'Text',\n    messageContent: 'Hi',\n    encryptedSecret:\n      '-----BEGIN PGP MESSAGE-----\\n' +\n      '\\n' +\n      'wcBMA1fn1CNqxQ7nAQgArlo75qe54WerfRKFv1+F9j4NRMvSTgUztvIe51eg\\n' +\n      'd5MVuj6RYxKERr2bTuBt5cMDJMlNuTnBBkPe4L8+SlsI46L9wmXV9xLoZq1a\\n' +\n      '94JdxD98RGMF99Jde/3hC/X6GS1yVqPpKPKdWx/tkOPeyqeO/wFF7kqShgIi\\n' +\n      'Wgq6hGz1fzD3GZhKGY0VSLuC3s0aUy/qw5En1Xd0uX0jdXBl07IIj8p1G2zx\\n' +\n      '9BuVlksSK34yvIc0RQfCeRadMHkxbA0Hyj31Wrr+Y310YLTppL0s5bQR9APL\\n' +\n      'WHsIztJ1fHTnXsPhnA7YG0SQpHTyJhuX3rgBjxGrvbZBArmZ+R/Pq9IkOkJe\\n' +\n      'z8HATAMOsbaZjGN5JwEH/jYjLN6AFRWeaB5CSBSAF+CvHsUgadGmxTdSHBM6\\n' +\n      'LM9rfGg/MCnpRBuHckA0NNZh+wepq6TDA54ZopsdP14gHj4MKCdfqZr86Jft\\n' +\n      'ldtjeSgPTFEEJxPMJ4/Z3UeFU9rvOgfxX6l0eHWS0MYwJ3sVYvSyqqHir1K5\\n' +\n      'TRdEIgtQ3NvLTKkX4bKTSU+SInrvDA+wsc2BcBsbgNhRiGb+XYrbqXBshL1a\\n' +\n      'lIdpnomkAQgOZMO2n347uURYoruH3OtFeNABJ9D/nEU+LdhDOPGZPefvPBc5\\n' +\n      'BxK4ExKZ2Wo/TZw8lgC53uqOljsGV63Hp71LkyesKWu5/+vdVrYx/vU63shh\\n' +\n      'x/TSQAEiaFYEfkWSOthtH0nrJHhkY7FWgjp/1bj/J4J9HCQrVtt2WlQfhowZ\\n' +\n      'ILxhKk/vep0sJviM3SfJ4hPtoYpZESc=\\n' +\n      '=43Ta\\n' +\n      '-----END PGP MESSAGE-----\\n',\n  },\n];\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromCAIP10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"sender address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toCAIP10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"receiver address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromDID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"sender did")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toDID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"receiver did")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"message type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageContent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"message content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"signature of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sigType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"signature type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"link")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"content identifier of the previous messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"encryption type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encryptedSecret")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"encrypted secret"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fetch-chat-history-api"},"Fetch chat history API"),(0,r.kt)("p",null,"Fetches historical messages between your instantiated user and any other user (or group)."),(0,r.kt)(l.Z,{className:"codetabs",groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// userAlice.chat.history(recipient. {options?})\nconst aliceChatHistoryWithBob = await userAlice.chat.history(bobAddress);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetch-chat-history-parameters"},"Fetch chat history parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Subtype"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"recipient"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Target DID ( For Group Chats target is chatId, for 1 To 1 chat target is Push DID )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional Configuration for fetching chat history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Refers to message refernce hash from where the previous messages are fetched. If null, messages are fetched from latest message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"No. of messages to be loaded")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Parameters ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"in this style"))," are mandatory.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Expected response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  {\n    link: 'bafyreibfikschwlfi275hr7lrfqgj73mf6absailazh4sm5fwihspy2ky4',\n    toDID: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    encType: 'pgp',\n    fromDID: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    sigType: 'pgp',\n    toCAIP10: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    signature:\n      '-----BEGIN PGP SIGNATURE-----\\n' +\n      '\\n' +\n      'wsBzBAEBCAAnBQJjh5tjCRBaJmgmByp5FRYhBJC23yBJT2d/pTAID1omaCYH\\n' +\n      'KnkVAAAZmwf/buPLw6caSZmYnw6D3/p6HF1kWlkGUOTP4RasaU/6dkeDaZs9\\n' +\n      'SJlz2wC8oOpBGWHMJ/5n3ZWmU71E6U7IKIY793MyIv5t32vTNkwsRHUX7IIn\\n' +\n      'QFF+FzTIEtHHVTRlnkqNR2YUk1kqcpZCZWHfahi5W2d/WkXlFNdvyyFH4W8L\\n' +\n      'd03FGhOyXbWwU3xicBz5mSBpIFaaSCXl1SdgJDPXLSk3b65EEOjCOaiz85xC\\n' +\n      'G+6SW4RUzCGSDcOd9F2EXvvY5H9LgQNi1jjlZn6JrPTPJTJ+wXZXzcZmtOXG\\n' +\n      'EKcwvPbbPY9wd+gavRSOgYLYn5xoZQW/o3hW7AQlbC5Kj6js48Z0HQ==\\n' +\n      '=qLiJ\\n' +\n      '-----END PGP SIGNATURE-----\\n',\n    timestamp: 1669831523684,\n    fromCAIP10: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    messageType: 'Text',\n    messageContent: 'Hi',\n    encryptedSecret:\n      '-----BEGIN PGP MESSAGE-----\\n' +\n      '\\n' +\n      'wcBMA1fn1CNqxQ7nAQgArlo75qe54WerfRKFv1+F9j4NRMvSTgUztvIe51eg\\n' +\n      'd5MVuj6RYxKERr2bTuBt5cMDJMlNuTnBBkPe4L8+SlsI46L9wmXV9xLoZq1a\\n' +\n      '94JdxD98RGMF99Jde/3hC/X6GS1yVqPpKPKdWx/tkOPeyqeO/wFF7kqShgIi\\n' +\n      'Wgq6hGz1fzD3GZhKGY0VSLuC3s0aUy/qw5En1Xd0uX0jdXBl07IIj8p1G2zx\\n' +\n      '9BuVlksSK34yvIc0RQfCeRadMHkxbA0Hyj31Wrr+Y310YLTppL0s5bQR9APL\\n' +\n      'WHsIztJ1fHTnXsPhnA7YG0SQpHTyJhuX3rgBjxGrvbZBArmZ+R/Pq9IkOkJe\\n' +\n      'z8HATAMOsbaZjGN5JwEH/jYjLN6AFRWeaB5CSBSAF+CvHsUgadGmxTdSHBM6\\n' +\n      'LM9rfGg/MCnpRBuHckA0NNZh+wepq6TDA54ZopsdP14gHj4MKCdfqZr86Jft\\n' +\n      'ldtjeSgPTFEEJxPMJ4/Z3UeFU9rvOgfxX6l0eHWS0MYwJ3sVYvSyqqHir1K5\\n' +\n      'TRdEIgtQ3NvLTKkX4bKTSU+SInrvDA+wsc2BcBsbgNhRiGb+XYrbqXBshL1a\\n' +\n      'lIdpnomkAQgOZMO2n347uURYoruH3OtFeNABJ9D/nEU+LdhDOPGZPefvPBc5\\n' +\n      'BxK4ExKZ2Wo/TZw8lgC53uqOljsGV63Hp71LkyesKWu5/+vdVrYx/vU63shh\\n' +\n      'x/TSQAEiaFYEfkWSOthtH0nrJHhkY7FWgjp/1bj/J4J9HCQrVtt2WlQfhowZ\\n' +\n      'ILxhKk/vep0sJviM3SfJ4hPtoYpZESc=\\n' +\n      '=43Ta\\n' +\n      '-----END PGP MESSAGE-----\\n',\n  },\n  {\n    link: null,\n    toDID: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    encType: 'PlainText',\n    fromDID: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    sigType: '',\n    toCAIP10: 'eip155:0x0F1AAC847B5720DDf01BFa07B7a8Ee641690816d',\n    signature: '',\n    timestamp: 1669831499724,\n    fromCAIP10: 'eip155:0xb340E384FC4549591bc7994b0f90074753dEC72a',\n    messageType: 'Text',\n    messageContent: 'Hey Fabio!',\n    encryptedSecret: '',\n  },\n];\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromCAIP10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"sender address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toCAIP10")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"receiver address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromDID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"sender did")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toDID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"receiver did")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"message type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageContent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"message content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"signature of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sigType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"signature type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"link")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"content identifier of the previous messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"encryption type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encryptedSecret")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"encrypted secret"))))))}c.isMDXComponent=!0}}]);