(()=>{var e={};e.id=544,e.ids=[544],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},55698:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(2264),r(97226),r(67260),r(96560);var a=r(23191),s=r(88716),n=r(37922),l=r.n(n),o=r(95231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["dashboard",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2264)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\profile\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,97226)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,67260)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,96560)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\profile\\page.tsx"],m="/dashboard/profile/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/profile/page",pathname:"/dashboard/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},68624:(e,t,r)=>{Promise.resolve().then(r.bind(r,34160)),Promise.resolve().then(r.bind(r,65685))},34160:(e,t,r)=>{"use strict";r.d(t,{CreateProfileOne:()=>eg});var a=r(10326),s=r(17577),n=r(45353),l=r(93095),o=r(73866),i=r(48051),d=r(82561),c=r(52067),m=r(77335),u=r(65819),p=r(9815),x=r(88957);let f="Collapsible",[h,j]=(0,l.b)(f),[b,g]=h(f),y=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:l,disabled:o,onOpenChange:i,...d}=e,[u=!1,p]=(0,c.T)({prop:a,defaultProp:l,onChange:i});return(0,s.createElement)(b,{scope:r,disabled:o,contentId:(0,x.M)(),open:u,onOpenToggle:(0,s.useCallback)(()=>p(e=>!e),[p])},(0,s.createElement)(m.WV.div,(0,n.Z)({"data-state":k(u),"data-disabled":o?"":void 0},d,{ref:t})))}),v=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...a}=e,l=g("CollapsibleTrigger",r);return(0,s.createElement)(m.WV.button,(0,n.Z)({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":k(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},a,{ref:t,onClick:(0,d.M)(e.onClick,l.onOpenToggle)}))}),w="CollapsibleContent",N=(0,s.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,l=g(w,e.__scopeCollapsible);return(0,s.createElement)(p.z,{present:r||l.open},({present:e})=>(0,s.createElement)(C,(0,n.Z)({},a,{ref:t,present:e})))}),C=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:a,children:l,...o}=e,d=g(w,r),[c,p]=(0,s.useState)(a),x=(0,s.useRef)(null),f=(0,i.e)(t,x),h=(0,s.useRef)(0),j=h.current,b=(0,s.useRef)(0),y=b.current,v=d.open||c,N=(0,s.useRef)(v),C=(0,s.useRef)();return(0,s.useEffect)(()=>{let e=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=x.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,b.current=t.width,N.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),p(a)}},[d.open,a]),(0,s.createElement)(m.WV.div,(0,n.Z)({"data-state":k(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!v},o,{ref:f,style:{"--radix-collapsible-content-height":j?`${j}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style}}),v&&l)});function k(e){return e?"open":"closed"}var _=r(17124);let E="Accordion",I=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,R,V]=(0,o.B)(E),[A,Z]=(0,l.b)(E,[V,j]),z=j(),S=s.forwardRef((e,t)=>{let{type:r,...a}=e;return s.createElement(P.Provider,{scope:e.__scopeAccordion},"multiple"===r?s.createElement(W,(0,n.Z)({},a,{ref:t})):s.createElement(G,(0,n.Z)({},a,{ref:t})))});S.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[O,D]=A(E),[q,$]=A(E,{collapsible:!1}),G=s.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},collapsible:o=!1,...i}=e,[d,m]=(0,c.T)({prop:r,defaultProp:a,onChange:l});return s.createElement(O,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:m,onItemClose:s.useCallback(()=>o&&m(""),[o,m])},s.createElement(q,{scope:e.__scopeAccordion,collapsible:o},s.createElement(J,(0,n.Z)({},i,{ref:t}))))}),W=s.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},...o}=e,[i=[],d]=(0,c.T)({prop:r,defaultProp:a,onChange:l}),m=s.useCallback(e=>d((t=[])=>[...t,e]),[d]),u=s.useCallback(e=>d((t=[])=>t.filter(t=>t!==e)),[d]);return s.createElement(O,{scope:e.__scopeAccordion,value:i,onItemOpen:m,onItemClose:u},s.createElement(q,{scope:e.__scopeAccordion,collapsible:!0},s.createElement(J,(0,n.Z)({},o,{ref:t}))))}),[F,M]=A(E),J=s.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:l,orientation:o="vertical",...c}=e,u=s.useRef(null),p=(0,i.e)(u,t),x=R(r),f="ltr"===(0,_.gm)(l),h=(0,d.M)(e.onKeyDown,e=>{var t;if(!I.includes(e.key))return;let r=e.target,a=x().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),s=a.findIndex(e=>e.ref.current===r),n=a.length;if(-1===s)return;e.preventDefault();let l=s,i=n-1,d=()=>{(l=s+1)>i&&(l=0)},c=()=>{(l=s-1)<0&&(l=i)};switch(e.key){case"Home":l=0;break;case"End":l=i;break;case"ArrowRight":"horizontal"===o&&(f?d():c());break;case"ArrowDown":"vertical"===o&&d();break;case"ArrowLeft":"horizontal"===o&&(f?c():d());break;case"ArrowUp":"vertical"===o&&c()}null===(t=a[l%n].ref.current)||void 0===t||t.focus()});return s.createElement(F,{scope:r,disabled:a,direction:l,orientation:o},s.createElement(P.Slot,{scope:r},s.createElement(m.WV.div,(0,n.Z)({},c,{"data-orientation":o,ref:p,onKeyDown:a?void 0:h}))))}),L="AccordionItem",[X,B]=A(L),T=s.forwardRef((e,t)=>{let{__scopeAccordion:r,value:a,...l}=e,o=M(L,r),i=D(L,r),d=z(r),c=(0,x.M)(),m=a&&i.value.includes(a)||!1,u=o.disabled||e.disabled;return s.createElement(X,{scope:r,open:m,disabled:u,triggerId:c},s.createElement(y,(0,n.Z)({"data-orientation":o.orientation,"data-state":K(m)},d,l,{ref:t,disabled:u,open:m,onOpenChange:e=>{e?i.onItemOpen(a):i.onItemClose(a)}})))}),Y=s.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=M(E,r),o=B("AccordionHeader",r);return s.createElement(m.WV.h3,(0,n.Z)({"data-orientation":l.orientation,"data-state":K(o.open),"data-disabled":o.disabled?"":void 0},a,{ref:t}))}),U="AccordionTrigger",Q=s.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=M(E,r),o=B(U,r),i=$(U,r),d=z(r);return s.createElement(P.ItemSlot,{scope:r},s.createElement(v,(0,n.Z)({"aria-disabled":o.open&&!i.collapsible||void 0,"data-orientation":l.orientation,id:o.triggerId},d,a,{ref:t})))}),H=s.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=M(E,r),o=B("AccordionContent",r),i=z(r);return s.createElement(N,(0,n.Z)({role:"region","aria-labelledby":o.triggerId,"data-orientation":l.orientation},i,a,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function K(e){return e?"open":"closed"}var ee=r(76812),et=r(77863);let er=s.forwardRef(({className:e,...t},r)=>a.jsx(T,{ref:r,className:(0,et.cn)("border-b",e),...t}));er.displayName="AccordionItem";let ea=s.forwardRef(({className:e,children:t,...r},s)=>a.jsx(Y,{className:"flex",children:(0,a.jsxs)(Q,{ref:s,className:(0,et.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...r,children:[t,a.jsx(ee.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));ea.displayName=Q.displayName;let es=s.forwardRef(({className:e,children:t,...r},s)=>a.jsx(H,{ref:s,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:a.jsx("div",{className:(0,et.cn)("pb-4 pt-0",e),children:t})}));es.displayName=H.displayName;var en=r(90772),el=r(29270),eo=r(36955),ei=r(54432),ed=r(34474),ec=r(8281),em=r(27256);let eu=em.Ry({firstname:em.Z_().min(3,{message:"Product Name must be at least 3 characters"}),lastname:em.Z_().min(3,{message:"Product Name must be at least 3 characters"}),email:em.Z_().email({message:"Product Name must be at least 3 characters"}),contactno:em.oQ.number(),country:em.Z_().min(1,{message:"Please select a category"}),city:em.Z_().min(1,{message:"Please select a category"}),jobs:em.IX(em.Ry({jobcountry:em.Z_().min(1,{message:"Please select a category"}),jobcity:em.Z_().min(1,{message:"Please select a category"}),jobtitle:em.Z_().min(3,{message:"Product Name must be at least 3 characters"}),employer:em.Z_().min(3,{message:"Product Name must be at least 3 characters"}),startdate:em.Z_().refine(e=>/^\d{4}-\d{2}-\d{2}$/.test(e),{message:"Start date should be in the format YYYY-MM-DD"}),enddate:em.Z_().refine(e=>/^\d{4}-\d{2}-\d{2}$/.test(e),{message:"End date should be in the format YYYY-MM-DD"})}))});var ep=r(74064),ex=r(47035);let ef=(0,r(76557).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var eh=r(37202),ej=r(35047),eb=r(74723);let eg=({initialData:e,categories:t})=>{(0,ej.useParams)(),(0,ej.useRouter)();let[r,n]=(0,s.useState)(!1),[l,o]=(0,s.useState)(!1),[i,d]=(0,s.useState)(!1),[c,m]=(0,s.useState)(0),[u,p]=(0,s.useState)(0),[x,f]=(0,s.useState)({}),h=(0,eb.cI)({resolver:(0,ep.F)(eu),defaultValues:{jobs:[{jobtitle:"",employer:"",startdate:"",enddate:"",jobcountry:"",jobcity:""}]},mode:"onChange"}),{control:j,formState:{errors:b}}=h,{append:g,remove:y,fields:v}=(0,eb.Dq)({control:j,name:"jobs"}),w=e=>{console.log("data ==>",e),f(e)},N=[{id:"Step 1",name:"Personal Information",fields:["firstname","lastname","email","contactno","country","city"]},{id:"Step 2",name:"Professional Informations",fields:v?.map((e,t)=>[`jobs.${t}.jobtitle`,`jobs.${t}.employer`,`jobs.${t}.startdate`,`jobs.${t}.enddate`,`jobs.${t}.jobcountry`,`jobs.${t}.jobcity`]).flat()},{id:"Step 3",name:"Complete"}],C=async()=>{let e=N[u].fields;await h.trigger(e,{shouldFocus:!0})&&u<N.length-1&&(u===N.length-2&&await h.handleSubmit(w)(),m(u),p(e=>e+1))},k=[{id:"wow",name:"india"}],_=[{id:"2",name:"kerala"}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[a.jsx(eo.X,{title:e?"Edit product":"Create Your Profile",description:e?"Edit a product.":"To create your resume, we first need some basic information about you."}),e&&a.jsx(en.z,{disabled:l,variant:"destructive",size:"sm",onClick:()=>n(!0),children:a.jsx(ex.Z,{className:"h-4 w-4"})})]}),a.jsx(ec.Separator,{}),a.jsx("div",{children:a.jsx("ul",{className:"flex gap-4",children:N.map((e,t)=>a.jsx("li",{className:"md:flex-1",children:u>t?(0,a.jsxs)("div",{className:"group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",children:[a.jsx("span",{className:"text-sm font-medium text-sky-600 transition-colors ",children:e.id}),a.jsx("span",{className:"text-sm font-medium",children:e.name})]}):u===t?(0,a.jsxs)("div",{className:"flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4","aria-current":"step",children:[a.jsx("span",{className:"text-sm font-medium text-sky-600",children:e.id}),a.jsx("span",{className:"text-sm font-medium",children:e.name})]}):(0,a.jsxs)("div",{className:"group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 transition-colors",children:e.id}),a.jsx("span",{className:"text-sm font-medium",children:e.name})]})},e.name))})}),a.jsx(ec.Separator,{}),a.jsx(el.l0,{...h,children:a.jsx("form",{onSubmit:h.handleSubmit(w),className:"w-full space-y-8",children:(0,a.jsxs)("div",{className:(0,et.cn)(1===u?"w-full md:inline-block":"gap-8 md:grid md:grid-cols-3"),children:[0===u&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(el.Wi,{control:h.control,name:"firstname",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"First Name"}),a.jsx(el.NI,{children:a.jsx(ei.I,{disabled:l,placeholder:"John",...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:"lastname",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"Last Name"}),a.jsx(el.NI,{children:a.jsx(ei.I,{disabled:l,placeholder:"Doe",...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:"email",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"Email"}),a.jsx(el.NI,{children:a.jsx(ei.I,{disabled:l,placeholder:"johndoe@gmail.com",...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:"contactno",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"Contact Number"}),a.jsx(el.NI,{children:a.jsx(ei.I,{type:"number",placeholder:"Enter you contact number",disabled:l,...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:"country",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"Country"}),(0,a.jsxs)(ed.Ph,{disabled:l,onValueChange:e.onChange,value:e.value,defaultValue:e.value,children:[a.jsx(el.NI,{children:a.jsx(ed.i4,{children:a.jsx(ed.ki,{defaultValue:e.value,placeholder:"Select a country"})})}),a.jsx(ed.Bw,{children:k.map(e=>a.jsx(ed.Ql,{value:e.id,children:e.name},e.id))})]}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:"city",render:({field:e})=>(0,a.jsxs)(el.xJ,{children:[a.jsx(el.lX,{children:"City"}),(0,a.jsxs)(ed.Ph,{disabled:l,onValueChange:e.onChange,value:e.value,defaultValue:e.value,children:[a.jsx(el.NI,{children:a.jsx(ed.i4,{children:a.jsx(ed.ki,{defaultValue:e.value,placeholder:"Select a city"})})}),a.jsx(ed.Bw,{children:_.map(e=>a.jsx(ed.Ql,{value:e.id,children:e.name},e.id))})]}),a.jsx(el.zG,{})]})})]}),1===u&&(0,a.jsxs)(a.Fragment,{children:[v?.map((e,t)=>a.jsx(S,{type:"single",collapsible:!0,defaultValue:"item-1",children:a.jsxs(er,{value:"item-1",children:[a.jsxs(ea,{className:et.cn("relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden",b?.jobs?.[t]&&"text-red-700"),children:[`Work Experience ${t+1}`,a.jsx(en.z,{variant:"outline",size:"icon",className:"absolute right-8",onClick:()=>y(t),children:a.jsx(ef,{className:"h-4 w-4 "})}),b?.jobs?.[t]&&a.jsx("span",{className:"alert absolute right-8",children:a.jsx(eh.Z,{className:"h-4 w-4   text-red-700"})})]}),a.jsx(es,{children:a.jsxs("div",{className:et.cn("relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3"),children:[a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.jobtitle`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"Job title"}),a.jsx(el.NI,{children:a.jsx(ei.I,{type:"text",disabled:l,...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.employer`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"Employer"}),a.jsx(el.NI,{children:a.jsx(ei.I,{type:"text",disabled:l,...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.startdate`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"Start date"}),a.jsx(el.NI,{children:a.jsx(ei.I,{type:"date",disabled:l,...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.enddate`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"End date"}),a.jsx(el.NI,{children:a.jsx(ei.I,{type:"date",disabled:l,...e})}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.jobcountry`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"Job country"}),a.jsxs(ed.Ph,{disabled:l,onValueChange:e.onChange,value:e.value,defaultValue:e.value,children:[a.jsx(el.NI,{children:a.jsx(ed.i4,{children:a.jsx(ed.ki,{defaultValue:e.value,placeholder:"Select your job country"})})}),a.jsx(ed.Bw,{children:k.map(e=>a.jsx(ed.Ql,{value:e.id,children:e.name},e.id))})]}),a.jsx(el.zG,{})]})}),a.jsx(el.Wi,{control:h.control,name:`jobs.${t}.jobcity`,render:({field:e})=>a.jsxs(el.xJ,{children:[a.jsx(el.lX,{children:"Job city"}),a.jsxs(ed.Ph,{disabled:l,onValueChange:e.onChange,value:e.value,defaultValue:e.value,children:[a.jsx(el.NI,{children:a.jsx(ed.i4,{children:a.jsx(ed.ki,{defaultValue:e.value,placeholder:"Select your job city"})})}),a.jsx(ed.Bw,{children:_.map(e=>a.jsx(ed.Ql,{value:e.id,children:e.name},e.id))})]}),a.jsx(el.zG,{})]})})]})})]})},e.id)),a.jsx("div",{className:"mt-4 flex justify-center",children:a.jsx(en.z,{type:"button",className:"flex justify-center",size:"lg",onClick:()=>g({jobtitle:"",employer:"",startdate:"",enddate:"",jobcountry:"",jobcity:""}),children:"Add More"})})]}),2===u&&(0,a.jsxs)("div",{children:[a.jsx("h1",{children:"Completed"}),a.jsx("pre",{className:"whitespace-pre-wrap",children:JSON.stringify(x)})]})]})})}),a.jsx("div",{className:"mt-8 pt-5",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[a.jsx("button",{type:"button",onClick:()=>{u>0&&(m(u),p(e=>e-1))},disabled:0===u,className:"rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),a.jsx("button",{type:"button",onClick:C,disabled:u===N.length-1,className:"rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})})]})}},29270:(e,t,r)=>{"use strict";r.d(t,{l0:()=>m,NI:()=>b,Wi:()=>p,xJ:()=>h,lX:()=>j,zG:()=>g});var a=r(10326),s=r(17577),n=r(99469),l=r(74723),o=r(77863),i=r(34478);let d=(0,r(79360).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef(({className:e,...t},r)=>a.jsx(i.f,{ref:r,className:(0,o.cn)(d(),e),...t}));c.displayName=i.f.displayName;let m=l.RV,u=s.createContext({}),p=({...e})=>a.jsx(u.Provider,{value:{name:e.name},children:a.jsx(l.Qr,{...e})}),x=()=>{let e=s.useContext(u),t=s.useContext(f),{getFieldState:r,formState:a}=(0,l.Gc)(),n=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...n}},f=s.createContext({}),h=s.forwardRef(({className:e,...t},r)=>{let n=s.useId();return a.jsx(f.Provider,{value:{id:n},children:a.jsx("div",{ref:r,className:(0,o.cn)("mb-2 space-y-2 lg:mb-0",e),...t})})});h.displayName="FormItem";let j=s.forwardRef(({className:e,...t},r)=>{let{error:s,formItemId:n}=x();return a.jsx(c,{ref:r,className:(0,o.cn)(s&&"text-destructive",e),htmlFor:n,...t})});j.displayName="FormLabel";let b=s.forwardRef(({...e},t)=>{let{error:r,formItemId:s,formDescriptionId:l,formMessageId:o}=x();return a.jsx(n.g7,{ref:t,id:s,"aria-describedby":r?`${l} ${o}`:`${l}`,"aria-invalid":!!r,...e})});b.displayName="FormControl",s.forwardRef(({className:e,...t},r)=>{let{formDescriptionId:s}=x();return a.jsx("p",{ref:r,id:s,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",e),...t})}).displayName="FormDescription";let g=s.forwardRef(({className:e,children:t,...r},s)=>{let{error:n,formMessageId:l}=x(),i=n?String(n?.message):t;return i?a.jsx("p",{ref:s,id:l,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",e),...r,children:i}):null});g.displayName="FormMessage"},36955:(e,t,r)=>{"use strict";r.d(t,{X:()=>s});var a=r(10326);let s=({title:e,description:t})=>(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:e}),a.jsx("p",{className:"text-sm text-muted-foreground",children:t})]})},54432:(e,t,r)=>{"use strict";r.d(t,{I:()=>l});var a=r(10326),s=r(17577),n=r(77863);let l=s.forwardRef(({className:e,type:t,...r},s)=>a.jsx("input",{type:t,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...r}));l.displayName="Input"},34474:(e,t,r)=>{"use strict";r.d(t,{Bw:()=>m,Ph:()=>i,Ql:()=>u,i4:()=>c,ki:()=>d});var a=r(10326),s=r(17577),n=r(76812),l=r(75334),o=r(77863);let i=l.fC;l.ZA;let d=l.B4,c=s.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(l.xz,{ref:s,className:(0,o.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),...r,children:[t,a.jsx(l.JO,{asChild:!0,children:a.jsx(n.jnn,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=l.xz.displayName;let m=s.forwardRef(({className:e,children:t,position:r="popper",...s},n)=>a.jsx(l.h_,{children:a.jsx(l.VY,{ref:n,className:(0,o.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...s,children:a.jsx(l.l_,{className:(0,o.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t})})}));m.displayName=l.VY.displayName,s.forwardRef(({className:e,...t},r)=>a.jsx(l.__,{ref:r,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=l.__.displayName;let u=s.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(l.ck,{ref:s,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[a.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(l.wU,{children:a.jsx(n.nQG,{className:"h-4 w-4"})})}),a.jsx(l.eT,{children:t})]}));u.displayName=l.ck.displayName,s.forwardRef(({className:e,...t},r)=>a.jsx(l.Z0,{ref:r,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=l.Z0.displayName},8281:(e,t,r)=>{"use strict";r.d(t,{Separator:()=>o});var a=r(10326),s=r(17577),n=r(90220),l=r(77863);let o=s.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...s},o)=>a.jsx(n.f,{ref:o,decorative:r,orientation:t,className:(0,l.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...s}));o.displayName=n.f.displayName},2264:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(19510),s=r(19801),n=r(68570);let l=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\forms\user-profile-stepper\create-profile.tsx`),{__esModule:o,$$typeof:i}=l;l.default;let d=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\forms\user-profile-stepper\create-profile.tsx#CreateProfileOne`);var c=r(38509);let m=[{title:"Dashboard",link:"/dashboard"},{title:"Profile",link:"/dashboard/profile"}];function u(){return a.jsx(c.Z,{scrollable:!0,children:(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx(s.O,{items:m}),a.jsx(d,{categories:[],initialData:null})]})})}},19801:(e,t,r)=>{"use strict";r.d(t,{O:()=>f});var a=r(19510),s=r(71159),n=r(30973),l=r(22813),o=r(50650);let i=s.forwardRef(({...e},t)=>a.jsx("nav",{ref:t,"aria-label":"breadcrumb",...e}));i.displayName="Breadcrumb";let d=s.forwardRef(({className:e,...t},r)=>a.jsx("ol",{ref:r,className:(0,o.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...t}));d.displayName="BreadcrumbList";let c=s.forwardRef(({className:e,...t},r)=>a.jsx("li",{ref:r,className:(0,o.cn)("inline-flex items-center gap-1.5",e),...t}));c.displayName="BreadcrumbItem";let m=s.forwardRef(({asChild:e,className:t,...r},s)=>{let n=e?l.g7:"a";return a.jsx(n,{ref:s,className:(0,o.cn)("transition-colors hover:text-foreground",t),...r})});m.displayName="BreadcrumbLink";let u=s.forwardRef(({className:e,...t},r)=>a.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:(0,o.cn)("font-normal text-foreground",e),...t}));u.displayName="BreadcrumbPage";let p=({children:e,className:t,...r})=>a.jsx("li",{role:"presentation","aria-hidden":"true",className:(0,o.cn)("[&>svg]:size-3.5",t),...r,children:e??a.jsx(n.XCv,{})});p.displayName="BreadcrumbSeparator";var x=r(79458);function f({items:e}){return a.jsx(i,{children:a.jsx(d,{children:e.map((t,r)=>(0,a.jsxs)(s.Fragment,{children:[r!==e.length-1&&a.jsx(c,{children:a.jsx(m,{href:t.link,children:t.title})}),r<e.length-1&&a.jsx(p,{children:a.jsx(x.Z,{})}),r===e.length-1&&a.jsx(u,{children:t.title})]},t.title))})})}},38509:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(19510);r(71159);var s=r(91179);function n({children:e,scrollable:t=!1}){return a.jsx(a.Fragment,{children:t?a.jsx(s.x,{className:"h-[calc(100dvh-52px)]",children:a.jsx("div",{className:"h-full  p-4 md:px-8",children:e})}):a.jsx("div",{className:"h-full  p-4 md:px-8",children:e})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,925,364,331,137,997,908,881,274,220],()=>r(55698));module.exports=a})();