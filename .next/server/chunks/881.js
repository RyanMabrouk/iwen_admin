"use strict";exports.id=881,exports.ids=[881],exports.modules={75334:(e,t,n)=>{n.d(t,{VY:()=>eC,ZA:()=>eR,JO:()=>eE,ck:()=>eM,wU:()=>eD,eT:()=>e_,__:()=>ek,h_:()=>ex,fC:()=>ew,Z0:()=>eI,xz:()=>ey,B4:()=>eb,l_:()=>eS});var l=n(45353),r=n(17577),o=n(60962),a=n(37125),i=n(82561),d=n(73866),u=n(48051),c=n(93095),s=n(17124),p=n(30703),f=n(80699),v=n(10441),m=n(88957),h=n(92238),g=n(83078),w=n(77335);let y=(0,r.forwardRef)((e,t)=>{let{children:n,...o}=e,a=r.Children.toArray(n),i=a.find(x);if(i){let e=i.props.children,n=a.map(t=>t!==i?t:r.Children.count(e)>1?r.Children.only(null):(0,r.isValidElement)(e)?e.props.children:null);return(0,r.createElement)(b,(0,l.Z)({},o,{ref:t}),(0,r.isValidElement)(e)?(0,r.cloneElement)(e,void 0,n):null)}return(0,r.createElement)(b,(0,l.Z)({},o,{ref:t}),n)});y.displayName="Slot";let b=(0,r.forwardRef)((e,t)=>{let{children:n,...l}=e;return(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{...function(e,t){let n={...t};for(let l in t){let r=e[l],o=t[l];/^on[A-Z]/.test(l)?r&&o?n[l]=(...e)=>{o(...e),r(...e)}:r&&(n[l]=r):"style"===l?n[l]={...r,...o}:"className"===l&&(n[l]=[r,o].filter(Boolean).join(" "))}return{...e,...n}}(l,n.props),ref:t?(0,u.F)(t,n.ref):n.ref}):r.Children.count(n)>1?r.Children.only(null):null});b.displayName="SlotClone";let E=({children:e})=>(0,r.createElement)(r.Fragment,null,e);function x(e){return(0,r.isValidElement)(e)&&e.type===E}var C=n(55049),S=n(52067),R=n(65819),k=n(53405),M=n(6009),_=n(35664),D=n(95011);let I=[" ","Enter","ArrowUp","ArrowDown"],P=[" ","Enter"],T="Select",[V,W,O]=(0,d.B)(T),[Z,L]=(0,c.b)(T,[O,h.D7]),N=(0,h.D7)(),[A,H]=Z(T),[B,K]=Z(T),F=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:o=!1,...a}=e,d=N(n),c=H("SelectTrigger",n),s=c.disabled||o,p=(0,u.e)(t,c.onTriggerChange),f=W(n),[v,m,g]=eh(e=>{let t=f().filter(e=>!e.disabled),n=t.find(e=>e.value===c.value),l=eg(t,e,n);void 0!==l&&c.onValueChange(l.value)}),y=()=>{s||(c.onOpenChange(!0),g())};return(0,r.createElement)(h.ee,(0,l.Z)({asChild:!0},d),(0,r.createElement)(w.WV.button,(0,l.Z)({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":void 0===c.value?"":void 0},a,{ref:p,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(y(),c.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&I.includes(e.key)&&(y(),e.preventDefault())})})))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,className:o,style:a,children:i,placeholder:d,...c}=e,s=H("SelectValue",n),{onValueNodeHasChildrenChange:p}=s,f=void 0!==i,v=(0,u.e)(t,s.onValueNodeChange);return(0,R.b)(()=>{p(f)},[p,f]),(0,r.createElement)(w.WV.span,(0,l.Z)({},c,{ref:v,style:{pointerEvents:"none"}}),void 0===s.value&&void 0!==d?d:i)}),U=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,children:o,...a}=e;return(0,r.createElement)(w.WV.span,(0,l.Z)({"aria-hidden":!0},a,{ref:t}),o||"▼")}),q="SelectContent",j=(0,r.forwardRef)((e,t)=>{let n=H(q,e.__scopeSelect),[a,i]=(0,r.useState)();return((0,R.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,r.createElement)($,(0,l.Z)({},e,{ref:t})):a?(0,o.createPortal)((0,r.createElement)(Y,{scope:e.__scopeSelect},(0,r.createElement)(V.Slot,{scope:e.__scopeSelect},(0,r.createElement)("div",null,e.children))),a):null}),[Y,X]=Z(q),$=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:d,onPointerDownOutside:c,side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:x,hideWhenDetached:C,avoidCollisions:S,...R}=e,k=H(q,n),[M,I]=(0,r.useState)(null),[P,T]=(0,r.useState)(null),V=(0,u.e)(t,e=>I(e)),[O,Z]=(0,r.useState)(null),[L,N]=(0,r.useState)(null),A=W(n),[B,K]=(0,r.useState)(!1),F=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(M)return(0,_.Ry)(M)},[M]),(0,f.EW)();let z=(0,r.useCallback)(e=>{let[t,...n]=A().map(e=>e.ref.current),[l]=n.slice(-1),r=document.activeElement;for(let n of e)if(n===r||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&P&&(P.scrollTop=0),n===l&&P&&(P.scrollTop=P.scrollHeight),null==n||n.focus(),document.activeElement!==r))return},[A,P]),U=(0,r.useCallback)(()=>z([O,M]),[z,O,M]);(0,r.useEffect)(()=>{B&&U()},[B,U]);let{onOpenChange:j,triggerPointerDownPosRef:X}=k;(0,r.useEffect)(()=>{if(M){let e={x:0,y:0},t=t=>{var n,l,r,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(l=X.current)||void 0===l?void 0:l.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(r=null===(o=X.current)||void 0===o?void 0:o.y)&&void 0!==r?r:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():M.contains(n.target)||j(!1),document.removeEventListener("pointermove",t),X.current=null};return null!==X.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[M,j,X]),(0,r.useEffect)(()=>{let e=()=>j(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[j]);let[$,Q]=eh(e=>{let t=A().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),l=eg(t,e,n);l&&setTimeout(()=>l.ref.current.focus())}),ee=(0,r.useCallback)((e,t,n)=>{let l=!F.current&&!n;(void 0!==k.value&&k.value===t||l)&&(Z(e),l&&(F.current=!0))},[k.value]),et=(0,r.useCallback)(()=>null==M?void 0:M.focus(),[M]),en=(0,r.useCallback)((e,t,n)=>{let l=!F.current&&!n;(void 0!==k.value&&k.value===t||l)&&N(e)},[k.value]),el="popper"===o?J:G;return(0,r.createElement)(Y,{scope:n,content:M,viewport:P,onViewportChange:T,itemRefCallback:ee,selectedItem:O,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:U,selectedItemText:L,position:o,isPositioned:B,searchRef:$},(0,r.createElement)(D.Z,{as:y,allowPinchZoom:!0},(0,r.createElement)(v.M,{asChild:!0,trapped:k.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=k.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,r.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>k.onOpenChange(!1)},(0,r.createElement)(el,(0,l.Z)({role:"listbox",id:k.contentId,"data-state":k.open?"open":"closed",dir:k.dir,onContextMenu:e=>e.preventDefault()},R,el===J?{side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:x,hideWhenDetached:C,avoidCollisions:S}:{},{onPlaced:()=>K(!0),ref:V,style:{display:"flex",flexDirection:"column",outline:"none",...R.style},onKeyDown:(0,i.M)(R.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=A().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,l=t.indexOf(n);t=t.slice(l+1)}setTimeout(()=>z(t)),e.preventDefault()}})}))))))}),G=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:o,...i}=e,d=H(q,n),c=X(q,n),[s,p]=(0,r.useState)(null),[f,v]=(0,r.useState)(null),m=(0,u.e)(t,e=>v(e)),h=W(n),g=(0,r.useRef)(!1),y=(0,r.useRef)(!0),{viewport:b,selectedItem:E,selectedItemText:x,focusSelectedItem:C}=c,S=(0,r.useCallback)(()=>{if(d.trigger&&d.valueNode&&s&&f&&b&&E&&x){let e=d.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=d.valueNode.getBoundingClientRect(),l=x.getBoundingClientRect();if("rtl"!==d.dir){let r=l.left-t.left,o=n.left-r,i=e.left-o,d=e.width+i,u=Math.max(d,t.width),c=window.innerWidth-10,p=(0,a.u)(o,[10,c-u]);s.style.minWidth=d+"px",s.style.left=p+"px"}else{let r=t.right-l.right,o=window.innerWidth-n.right-r,i=window.innerWidth-e.right-o,d=e.width+i,u=Math.max(d,t.width),c=window.innerWidth-10,p=(0,a.u)(o,[10,c-u]);s.style.minWidth=d+"px",s.style.right=p+"px"}let r=h(),i=window.innerHeight-20,u=b.scrollHeight,c=window.getComputedStyle(f),p=parseInt(c.borderTopWidth,10),v=parseInt(c.paddingTop,10),m=parseInt(c.borderBottomWidth,10),w=p+v+u+parseInt(c.paddingBottom,10)+m,y=Math.min(5*E.offsetHeight,w),C=window.getComputedStyle(b),S=parseInt(C.paddingTop,10),R=parseInt(C.paddingBottom,10),k=e.top+e.height/2-10,M=E.offsetHeight/2,_=p+v+(E.offsetTop+M);if(_<=k){let e=E===r[r.length-1].ref.current;s.style.bottom="0px";let t=f.clientHeight-b.offsetTop-b.offsetHeight;s.style.height=_+Math.max(i-k,M+(e?R:0)+t+m)+"px"}else{let e=E===r[0].ref.current;s.style.top="0px";let t=Math.max(k,p+b.offsetTop+(e?S:0)+M);s.style.height=t+(w-_)+"px",b.scrollTop=_-k+b.offsetTop}s.style.margin="10px 0",s.style.minHeight=y+"px",s.style.maxHeight=i+"px",null==o||o(),requestAnimationFrame(()=>g.current=!0)}},[h,d.trigger,d.valueNode,s,f,b,E,x,d.dir,o]);(0,R.b)(()=>S(),[S]);let[k,M]=(0,r.useState)();(0,R.b)(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);let _=(0,r.useCallback)(e=>{e&&!0===y.current&&(S(),null==C||C(),y.current=!1)},[S,C]);return(0,r.createElement)(Q,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:_},(0,r.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k}},(0,r.createElement)(w.WV.div,(0,l.Z)({},i,{ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),J=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,align:o="start",collisionPadding:a=10,...i}=e,d=N(n);return(0,r.createElement)(h.VY,(0,l.Z)({},d,i,{ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Q,ee]=Z(q,{}),et="SelectViewport",en=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=X(et,n),d=ee(et,n),c=(0,u.e)(t,a.onViewportChange),s=(0,r.useRef)(0);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,r.createElement)(V.Slot,{scope:n},(0,r.createElement)(w.WV.div,(0,l.Z)({"data-radix-select-viewport":"",role:"presentation"},o,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:l}=d;if(null!=l&&l.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let l=window.innerHeight-20,r=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(r<l){let o=r+e,a=Math.min(l,o),i=o-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[el,er]=Z("SelectGroup"),eo=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=(0,m.M)();return(0,r.createElement)(el,{scope:n,id:a},(0,r.createElement)(w.WV.div,(0,l.Z)({role:"group","aria-labelledby":a},o,{ref:t})))}),ea=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=er("SelectLabel",n);return(0,r.createElement)(w.WV.div,(0,l.Z)({id:a.id},o,{ref:t}))}),ei="SelectItem",[ed,eu]=Z(ei),ec=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,value:o,disabled:a=!1,textValue:d,...c}=e,s=H(ei,n),p=X(ei,n),f=s.value===o,[v,h]=(0,r.useState)(null!=d?d:""),[g,y]=(0,r.useState)(!1),b=(0,u.e)(t,e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,o,a)}),E=(0,m.M)(),x=()=>{a||(s.onValueChange(o),s.onOpenChange(!1))};return(0,r.createElement)(ed,{scope:n,value:o,disabled:a,textId:E,isSelected:f,onItemTextChange:(0,r.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,r.createElement)(V.ItemSlot,{scope:n,value:o,disabled:a,textValue:v},(0,r.createElement)(w.WV.div,(0,l.Z)({role:"option","aria-labelledby":E,"data-highlighted":g?"":void 0,"aria-selected":f&&g,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},c,{ref:b,onFocus:(0,i.M)(c.onFocus,()=>y(!0)),onBlur:(0,i.M)(c.onBlur,()=>y(!1)),onPointerUp:(0,i.M)(c.onPointerUp,x),onPointerMove:(0,i.M)(c.onPointerMove,e=>{if(a){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(c.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}}),onKeyDown:(0,i.M)(c.onKeyDown,e=>{var t;(null===(t=p.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(P.includes(e.key)&&x()," "===e.key&&e.preventDefault())})}))))}),es="SelectItemText",ep=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...d}=e,c=H(es,n),s=X(es,n),p=eu(es,n),f=K(es,n),[v,m]=(0,r.useState)(null),h=(0,u.e)(t,e=>m(e),p.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,p.value,p.disabled)}),g=null==v?void 0:v.textContent,y=(0,r.useMemo)(()=>(0,r.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},g),[p.disabled,p.value,g]),{onNativeOptionAdd:b,onNativeOptionRemove:E}=f;return(0,R.b)(()=>(b(y),()=>E(y)),[b,E,y]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(w.WV.span,(0,l.Z)({id:p.textId},d,{ref:h})),p.isSelected&&c.valueNode&&!c.valueNodeHasChildren?(0,o.createPortal)(d.children,c.valueNode):null)}),ef=(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return eu("SelectItemIndicator",n).isSelected?(0,r.createElement)(w.WV.span,(0,l.Z)({"aria-hidden":!0},o,{ref:t})):null}),ev=((e,t)=>{let{__scopeSelect:n,onAutoScroll:o,...a}=e,d=X("SelectScrollButton",n),u=(0,r.useRef)(null),c=W(n),s=(0,r.useCallback)(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return(0,r.useEffect)(()=>()=>s(),[s]),(0,R.b)(()=>{var e;let t=c().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[c]),(0,r.createElement)(w.WV.div,(0,l.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(o,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=d.onItemLeave)||void 0===e||e.call(d),null===u.current&&(u.current=window.setInterval(o,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))},(0,r.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return(0,r.createElement)(w.WV.div,(0,l.Z)({"aria-hidden":!0},o,{ref:t}))})),em=(0,r.forwardRef)((e,t)=>{let{value:n,...o}=e,a=(0,r.useRef)(null),i=(0,u.e)(t,a),d=(0,k.D)(n);return(0,r.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(d!==n&&t){let l=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(l)}},[d,n]),(0,r.createElement)(M.T,{asChild:!0},(0,r.createElement)("select",(0,l.Z)({},o,{ref:i,defaultValue:n})))});function eh(e){let t=(0,C.W)(e),n=(0,r.useRef)(""),l=(0,r.useRef)(0),o=(0,r.useCallback)(e=>{let r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(r)},[t]),a=(0,r.useCallback)(()=>{n.current="",window.clearTimeout(l.current)},[]);return(0,r.useEffect)(()=>()=>window.clearTimeout(l.current),[]),[n,o,a]}function eg(e,t,n){var l;let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(l=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(l+n)%e.length]));1===r.length&&(o=o.filter(e=>e!==n));let a=o.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return a!==n?a:void 0}em.displayName="BubbleSelect";let ew=e=>{let{__scopeSelect:t,children:n,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:d,onValueChange:u,dir:c,name:p,autoComplete:f,disabled:v,required:g}=e,w=N(t),[y,b]=(0,r.useState)(null),[E,x]=(0,r.useState)(null),[C,R]=(0,r.useState)(!1),k=(0,s.gm)(c),[M=!1,_]=(0,S.T)({prop:l,defaultProp:o,onChange:a}),[D,I]=(0,S.T)({prop:i,defaultProp:d,onChange:u}),P=(0,r.useRef)(null),T=!y||!!y.closest("form"),[W,O]=(0,r.useState)(new Set),Z=Array.from(W).map(e=>e.props.value).join(";");return(0,r.createElement)(h.fC,w,(0,r.createElement)(A,{required:g,scope:t,trigger:y,onTriggerChange:b,valueNode:E,onValueNodeChange:x,valueNodeHasChildren:C,onValueNodeHasChildrenChange:R,contentId:(0,m.M)(),value:D,onValueChange:I,open:M,onOpenChange:_,dir:k,triggerPointerDownPosRef:P,disabled:v},(0,r.createElement)(V.Provider,{scope:t},(0,r.createElement)(B,{scope:e.__scopeSelect,onNativeOptionAdd:(0,r.useCallback)(e=>{O(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,r.useCallback)(e=>{O(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),T?(0,r.createElement)(em,{key:Z,"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:f,value:D,onChange:e=>I(e.target.value),disabled:v},void 0===D?(0,r.createElement)("option",{value:""}):null,Array.from(W)):null))},ey=F,eb=z,eE=U,ex=e=>(0,r.createElement)(g.h,(0,l.Z)({asChild:!0},e)),eC=j,eS=en,eR=eo,ek=ea,eM=ec,e_=ep,eD=ef,eI=ev},90220:(e,t,n)=>{n.d(t,{f:()=>c});var l=n(45353),r=n(17577),o=n(77335);let a="horizontal",i=["horizontal","vertical"],d=(0,r.forwardRef)((e,t)=>{let{decorative:n,orientation:i=a,...d}=e,c=u(i)?i:a;return(0,r.createElement)(o.WV.div,(0,l.Z)({"data-orientation":c},n?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},d,{ref:t}))});function u(e){return i.includes(e)}d.propTypes={orientation(e,t,n){let l=e[t],r=String(l);return l&&!u(l)?Error(`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let c=d},53405:(e,t,n)=>{n.d(t,{D:()=>r});var l=n(17577);function r(e){let t=(0,l.useRef)({value:e,previous:e});return(0,l.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}};