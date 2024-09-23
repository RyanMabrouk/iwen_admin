"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{71477:function(e,t,n){let r;n.d(t,{XB:function(){return p}});var o=n(22988),i=n(2265),l=n(78149),a=n(18676),u=n(1584),s=n(75137),d=n(66486);let c="dismissableLayer.update",f=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:h,onPointerDownOutside:E,onFocusOutside:y,onInteractOutside:g,onDismiss:b,...w}=e,x=(0,i.useContext)(f),[P,C]=(0,i.useState)(null),O=null!==(n=null==P?void 0:P.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,L]=(0,i.useState)({}),D=(0,u.e)(t,e=>C(e)),T=Array.from(x.layers),[S]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),W=T.indexOf(S),A=P?T.indexOf(P):-1,F=x.layersWithOutsidePointerEventsDisabled.size>0,R=A>=W,_=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,s.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){m("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!R||n||(null==E||E(e),null==g||g(e),e.defaultPrevented||null==b||b())},O),N=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,s.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==y||y(e),null==g||g(e),e.defaultPrevented||null==b||b())},O);return(0,d.e)(e=>{A!==x.layers.size-1||(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},O),(0,i.useEffect)(()=>{if(P)return p&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(P)),x.layers.add(P),v(),()=>{p&&1===x.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[P,O,p,x]),(0,i.useEffect)(()=>()=>{P&&(x.layers.delete(P),x.layersWithOutsidePointerEventsDisabled.delete(P),v())},[P,x]),(0,i.useEffect)(()=>{let e=()=>L({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,i.createElement)(a.WV.div,(0,o.Z)({},w,{ref:D,style:{pointerEvents:F?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,_.onPointerDownCapture)}))});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.jH)(o,i):o.dispatchEvent(i)}},80467:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(22988),i=n(2265),l=n(1584),a=n(18676),u=n(75137);let s="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",c={bubbles:!1,cancelable:!0},f=(0,i.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:E,...y}=e,[g,b]=(0,i.useState)(null),w=(0,u.W)(f),x=(0,u.W)(E),P=(0,i.useRef)(null),C=(0,l.e)(t,e=>b(e)),O=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(r){function e(e){if(O.paused||!g)return;let t=e.target;g.contains(t)?P.current=t:m(P.current,{select:!0})}function t(e){if(O.paused||!g)return;let t=e.relatedTarget;null===t||g.contains(t)||m(P.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=g&&g.contains(t))&&m(g)});return g&&n.observe(g,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,g,O.paused]),(0,i.useEffect)(()=>{if(g){h.add(O);let e=document.activeElement;if(!g.contains(e)){let t=new CustomEvent(s,c);g.addEventListener(s,w),g.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(p(g).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(g))}return()=>{g.removeEventListener(s,w),setTimeout(()=>{let t=new CustomEvent(d,c);g.addEventListener(d,x),g.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),g.removeEventListener(d,x),h.remove(O)},0)}}},[g,w,x,O]);let L=(0,i.useCallback)(e=>{if(!n&&!r||O.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=p(e);return[v(t,e),v(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(i,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,O.paused]);return(0,i.createElement)(a.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:C,onKeyDown:L}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=E(r,e)).unshift(e)},remove(e){var t;null===(t=(r=E(r,e))[0])||void 0===t||t.resume()}});function E(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},73893:function(e,t,n){n.d(t,{D7:function(){return E},Eh:function(){return R},VY:function(){return F},ee:function(){return A},fC:function(){return W}});var r=n(22988),o=n(2265),i=n(94674),l=n(55497),a=n(20151),u=n(46441),s=n(1584),d=n(98324),c=n(18676),f=n(75137),p=n(1336),v=n(75238);let m="Popper",[h,E]=(0,d.b)(m),[y,g]=h(m),b=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:i,...l}=e,a=g("PopperAnchor",n),u=(0,o.useRef)(null),d=(0,s.e)(t,u);return(0,o.useEffect)(()=>{a.onAnchorChange((null==i?void 0:i.current)||u.current)}),i?null:(0,o.createElement)(c.WV.div,(0,r.Z)({},l,{ref:d}))}),w="PopperContent",[x,P]=h(w),C=(0,o.forwardRef)((e,t)=>{var n,u,d,m,h,E,y,b;let{__scopePopper:P,side:C="bottom",sideOffset:O=0,align:L="center",alignOffset:W=0,arrowPadding:A=0,collisionBoundary:F=[],collisionPadding:R=0,sticky:_="partial",hideWhenDetached:N=!1,avoidCollisions:k=!0,onPlaced:I,...$}=e,M=g(w,P),[H,K]=(0,o.useState)(null),Y=(0,s.e)(t,e=>K(e)),[B,z]=(0,o.useState)(null),V=(0,v.t)(B),Z=null!==(n=null==V?void 0:V.width)&&void 0!==n?n:0,X=null!==(u=null==V?void 0:V.height)&&void 0!==u?u:0,U="number"==typeof R?R:{top:0,right:0,bottom:0,left:0,...R},j=Array.isArray(F)?F:[F],q=j.length>0,G={padding:U,boundary:j.filter(D),altBoundary:q},{refs:J,floatingStyles:Q,placement:ee,isPositioned:et,middlewareData:en}=(0,i.YF)({strategy:"fixed",placement:C+("center"!==L?"-"+L:""),whileElementsMounted:l.Me,elements:{reference:M.anchor},middleware:[(0,a.cv)({mainAxis:O+X,alignmentAxis:W}),k&&(0,a.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===_?(0,a.dr)():void 0,...G}),k&&(0,a.RR)({...G}),(0,a.dp)({...G,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),B&&(0,i.x7)({element:B,padding:A}),T({arrowWidth:Z,arrowHeight:X}),N&&(0,a.Cp)({strategy:"referenceHidden"})]}),[er,eo]=S(ee),ei=(0,f.W)(I);(0,p.b)(()=>{et&&(null==ei||ei())},[et,ei]);let el=null===(d=en.arrow)||void 0===d?void 0:d.x,ea=null===(m=en.arrow)||void 0===m?void 0:m.y,eu=(null===(h=en.arrow)||void 0===h?void 0:h.centerOffset)!==0,[es,ed]=(0,o.useState)();return(0,p.b)(()=>{H&&ed(window.getComputedStyle(H).zIndex)},[H]),(0,o.createElement)("div",{ref:J.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:et?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:es,"--radix-popper-transform-origin":[null===(E=en.transformOrigin)||void 0===E?void 0:E.x,null===(y=en.transformOrigin)||void 0===y?void 0:y.y].join(" ")},dir:e.dir},(0,o.createElement)(x,{scope:P,placedSide:er,onArrowChange:z,arrowX:el,arrowY:ea,shouldHideArrow:eu},(0,o.createElement)(c.WV.div,(0,r.Z)({"data-side":er,"data-align":eo},$,{ref:Y,style:{...$.style,animation:et?void 0:"none",opacity:null!==(b=en.hide)&&void 0!==b&&b.referenceHidden?0:void 0}}))))}),O={top:"bottom",right:"left",bottom:"top",left:"right"},L=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...i}=e,l=P("PopperArrow",n),a=O[l.placedSide];return(0,o.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(u.f,(0,r.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))});function D(e){return null!==e}let T=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:a,rects:u,middlewareData:s}=t,d=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[p,v]=S(a),m={start:"0%",center:"50%",end:"100%"}[v],h=(null!==(r=null===(o=s.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+c/2,E=(null!==(i=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+f/2,y="",g="";return"bottom"===p?(y=d?m:`${h}px`,g=`${-f}px`):"top"===p?(y=d?m:`${h}px`,g=`${u.floating.height+f}px`):"right"===p?(y=`${-f}px`,g=d?m:`${E}px`):"left"===p&&(y=`${u.floating.width+f}px`,g=d?m:`${E}px`),{data:{x:y,y:g}}}});function S(e){let[t,n="center"]=e.split("-");return[t,n]}let W=e=>{let{__scopePopper:t,children:n}=e,[r,i]=(0,o.useState)(null);return(0,o.createElement)(y,{scope:t,anchor:r,onAnchorChange:i},n)},A=b,F=C,R=L},56935:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(22988),o=n(2265),i=n(54887),l=n(18676);let a=(0,o.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...u}=e;return a?i.createPortal((0,o.createElement)(l.WV.div,(0,r.Z)({},u,{ref:t})),a):null})}}]);