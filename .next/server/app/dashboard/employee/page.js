(()=>{var e={};e.id=37,e.ids=[37],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},30566:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(33342),t(97226),t(67260),t(96560);var s=t(23191),r=t(88716),l=t(37922),n=t.n(l),i=t(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(a,o);let d=["",{children:["dashboard",{children:["employee",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,33342)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\employee\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,97226)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,67260)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,96560)),"C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\app\\dashboard\\employee\\page.tsx"],m="/dashboard/employee/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/employee/page",pathname:"/dashboard/employee",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21929:(e,a,t)=>{Promise.resolve().then(t.bind(t,37756)),Promise.resolve().then(t.bind(t,60473)),Promise.resolve().then(t.bind(t,65685)),Promise.resolve().then(t.bind(t,8281)),Promise.resolve().then(t.t.bind(t,79404,23))},66653:(e,a,t)=>{"use strict";t.d(a,{V:()=>o});var s=t(10326),r=t(17577),l=t(90772),n=t(62288);let i=({title:e,description:a,isOpen:t,onClose:r,children:l})=>s.jsx(n.Vq,{open:t,onOpenChange:e=>{e||r()},children:(0,s.jsxs)(n.cZ,{children:[(0,s.jsxs)(n.fK,{children:[s.jsx(n.$N,{children:e}),s.jsx(n.Be,{children:a})]}),s.jsx("div",{children:l})]})}),o=({isOpen:e,onClose:a,onConfirm:t,loading:n})=>{let[o,d]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{d(!0)},[]),o)?s.jsx(i,{title:"Are you sure?",description:"This action cannot be undone.",isOpen:e,onClose:a,children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-end space-x-2 pt-6",children:[s.jsx(l.z,{disabled:n,variant:"outline",onClick:a,children:"Cancel"}),s.jsx(l.z,{disabled:n,variant:"destructive",onClick:t,children:"Continue"})]})}):null}},37756:(e,a,t)=>{"use strict";t.d(a,{columns:()=>x});var s=t(10326),r=t(53313),l=t(66653),n=t(90772),i=t(60097),o=t(49216),d=t(70003),c=t(47035),m=t(35047),u=t(17577);let p=({data:e})=>{let[a,t]=(0,u.useState)(!1),[r,p]=(0,u.useState)(!1),x=(0,m.useRouter)(),f=async()=>{};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(l.V,{isOpen:r,onClose:()=>p(!1),onConfirm:f,loading:a}),(0,s.jsxs)(i.h_,{modal:!1,children:[s.jsx(i.$F,{asChild:!0,children:(0,s.jsxs)(n.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[s.jsx("span",{className:"sr-only",children:"Open menu"}),s.jsx(o.Z,{className:"h-4 w-4"})]})}),(0,s.jsxs)(i.AW,{align:"end",children:[s.jsx(i.Ju,{children:"Actions"}),(0,s.jsxs)(i.Xi,{onClick:()=>x.push(`/dashboard/user/${e.id}`),children:[s.jsx(d.Z,{className:"mr-2 h-4 w-4"})," Update"]}),(0,s.jsxs)(i.Xi,{onClick:()=>p(!0),children:[s.jsx(c.Z,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},x=[{id:"select",header:({table:e})=>s.jsx(r.X,{checked:e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a),"aria-label":"Select all"}),cell:({row:e})=>s.jsx(r.X,{checked:e.getIsSelected(),onCheckedChange:a=>e.toggleSelected(!!a),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"NAME"},{accessorKey:"country",header:"COUNTRY"},{accessorKey:"email",header:"EMAIL"},{accessorKey:"job",header:"COMPANY"},{accessorKey:"gender",header:"GENDER"},{id:"actions",cell:({row:e})=>s.jsx(p,{data:e.original})}]},60473:(e,a,t)=>{"use strict";t.d(a,{EmployeeTable:()=>g});var s=t(10326),r=t(86508),l=t(11798),n=t(17577),i=t.n(n),o=t(90772),d=t(54432),c=t(34474),m=t(15940),u=t(76812),p=t(11890),x=t(39183),f=t(35047),h=t(65685);function g({columns:e,data:a,pageNo:t,searchKey:n,totalUsers:g,pageCount:b,pageSizeOptions:j=[10,20,30,40,50]}){(0,f.useRouter)(),(0,f.usePathname)();let y=(0,f.useSearchParams)(),w=Number(y?.get("page")??"1"),N=isNaN(w)||w<1?1:w,v=Number(y?.get("limit")??"10"),C=isNaN(v)?10:v;i().useCallback(e=>{let a=new URLSearchParams(y?.toString());for(let[t,s]of Object.entries(e))null===s?a.delete(t):a.set(t,String(s));return a.toString()},[y]);let[{pageIndex:P,pageSize:k},R]=i().useState({pageIndex:N-1,pageSize:C}),S=(0,r.b7)({data:a,columns:e,pageCount:b??-1,getCoreRowModel:(0,l.sC)(),getFilteredRowModel:(0,l.vL)(),state:{pagination:{pageIndex:P,pageSize:k}},onPaginationChange:R,getPaginationRowModel:(0,l.G_)(),manualPagination:!0,manualFiltering:!0});return S.getColumn(n)?.getFilterValue(),(0,s.jsxs)(s.Fragment,{children:[s.jsx(d.I,{placeholder:`Search ${n}...`,value:S.getColumn(n)?.getFilterValue()??"",onChange:e=>S.getColumn(n)?.setFilterValue(e.target.value),className:"w-full md:max-w-sm"}),(0,s.jsxs)(h.ScrollArea,{className:"h-[calc(80vh-220px)] rounded-md border",children:[(0,s.jsxs)(m.iA,{className:"relative",children:[s.jsx(m.xD,{children:S.getHeaderGroups().map(e=>s.jsx(m.SC,{children:e.headers.map(e=>s.jsx(m.ss,{children:e.isPlaceholder?null:(0,r.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),s.jsx(m.RM,{children:S.getRowModel().rows?.length?S.getRowModel().rows.map(e=>s.jsx(m.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>s.jsx(m.pj,{children:(0,r.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):s.jsx(m.SC,{children:s.jsx(m.pj,{colSpan:e.length,className:"h-24 text-center",children:"No results."})})})]}),s.jsx(h.B,{orientation:"horizontal"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[S.getFilteredSelectedRowModel().rows.length," of"," ",S.getFilteredRowModel().rows.length," row(s) selected."]}),s.jsx("div",{className:"flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx("p",{className:"whitespace-nowrap text-sm font-medium",children:"Rows per page"}),(0,s.jsxs)(c.Ph,{value:`${S.getState().pagination.pageSize}`,onValueChange:e=>{S.setPageSize(Number(e))},children:[s.jsx(c.i4,{className:"h-8 w-[70px]",children:s.jsx(c.ki,{placeholder:S.getState().pagination.pageSize})}),s.jsx(c.Bw,{side:"top",children:j.map(e=>s.jsx(c.Ql,{value:`${e}`,children:e},e))})]})]})})]}),(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-2 sm:justify-end",children:[(0,s.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",S.getState().pagination.pageIndex+1," of"," ",S.getPageCount()]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(o.z,{"aria-label":"Go to first page",variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>S.setPageIndex(0),disabled:!S.getCanPreviousPage(),children:s.jsx(u.kRt,{className:"h-4 w-4","aria-hidden":"true"})}),s.jsx(o.z,{"aria-label":"Go to previous page",variant:"outline",className:"h-8 w-8 p-0",onClick:()=>S.previousPage(),disabled:!S.getCanPreviousPage(),children:s.jsx(p.Z,{className:"h-4 w-4","aria-hidden":"true"})}),s.jsx(o.z,{"aria-label":"Go to next page",variant:"outline",className:"h-8 w-8 p-0",onClick:()=>S.nextPage(),disabled:!S.getCanNextPage(),children:s.jsx(x.Z,{className:"h-4 w-4","aria-hidden":"true"})}),s.jsx(o.z,{"aria-label":"Go to last page",variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>S.setPageIndex(S.getPageCount()-1),disabled:!S.getCanNextPage(),children:s.jsx(u.yr4,{className:"h-4 w-4","aria-hidden":"true"})})]})]})]})]})}},53313:(e,a,t)=>{"use strict";t.d(a,{X:()=>o});var s=t(10326),r=t(17577),l=t(13635),n=t(76812),i=t(77863);let o=r.forwardRef(({className:e,...a},t)=>s.jsx(l.fC,{ref:t,className:(0,i.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...a,children:s.jsx(l.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:s.jsx(n.nQG,{className:"h-4 w-4"})})}));o.displayName=l.fC.displayName},62288:(e,a,t)=>{"use strict";t.d(a,{$N:()=>f,Be:()=>h,Vq:()=>o,cN:()=>x,cZ:()=>u,fK:()=>p,hg:()=>d});var s=t(10326),r=t(17577),l=t(47653),n=t(76812),i=t(77863);let o=l.fC,d=l.xz,c=l.h_;l.x8;let m=r.forwardRef(({className:e,...a},t)=>s.jsx(l.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a}));m.displayName=l.aV.displayName;let u=r.forwardRef(({className:e,children:a,...t},r)=>(0,s.jsxs)(c,{children:[s.jsx(m,{}),(0,s.jsxs)(l.VY,{ref:r,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...t,children:[a,(0,s.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[s.jsx(n.Pxu,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));u.displayName=l.VY.displayName;let p=({className:e,...a})=>s.jsx("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...a});p.displayName="DialogHeader";let x=({className:e,...a})=>s.jsx("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});x.displayName="DialogFooter";let f=r.forwardRef(({className:e,...a},t)=>s.jsx(l.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",e),...a}));f.displayName=l.Dx.displayName;let h=r.forwardRef(({className:e,...a},t)=>s.jsx(l.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",e),...a}));h.displayName=l.dk.displayName},54432:(e,a,t)=>{"use strict";t.d(a,{I:()=>n});var s=t(10326),r=t(17577),l=t(77863);let n=r.forwardRef(({className:e,type:a,...t},r)=>s.jsx("input",{type:a,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));n.displayName="Input"},34474:(e,a,t)=>{"use strict";t.d(a,{Bw:()=>m,Ph:()=>o,Ql:()=>u,i4:()=>c,ki:()=>d});var s=t(10326),r=t(17577),l=t(76812),n=t(75334),i=t(77863);let o=n.fC;n.ZA;let d=n.B4,c=r.forwardRef(({className:e,children:a,...t},r)=>(0,s.jsxs)(n.xz,{ref:r,className:(0,i.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:[a,s.jsx(n.JO,{asChild:!0,children:s.jsx(l.jnn,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=n.xz.displayName;let m=r.forwardRef(({className:e,children:a,position:t="popper",...r},l)=>s.jsx(n.h_,{children:s.jsx(n.VY,{ref:l,className:(0,i.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...r,children:s.jsx(n.l_,{className:(0,i.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})}));m.displayName=n.VY.displayName,r.forwardRef(({className:e,...a},t)=>s.jsx(n.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",e),...a})).displayName=n.__.displayName;let u=r.forwardRef(({className:e,children:a,...t},r)=>(0,s.jsxs)(n.ck,{ref:r,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[s.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(n.wU,{children:s.jsx(l.nQG,{className:"h-4 w-4"})})}),s.jsx(n.eT,{children:a})]}));u.displayName=n.ck.displayName,r.forwardRef(({className:e,...a},t)=>s.jsx(n.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",e),...a})).displayName=n.Z0.displayName},8281:(e,a,t)=>{"use strict";t.d(a,{Separator:()=>i});var s=t(10326),r=t(17577),l=t(90220),n=t(77863);let i=r.forwardRef(({className:e,orientation:a="horizontal",decorative:t=!0,...r},i)=>s.jsx(l.f,{ref:i,decorative:t,orientation:a,className:(0,n.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",e),...r}));i.displayName=l.f.displayName},15940:(e,a,t)=>{"use strict";t.d(a,{RM:()=>o,SC:()=>d,iA:()=>n,pj:()=>m,ss:()=>c,xD:()=>i});var s=t(10326),r=t(17577),l=t(77863);let n=r.forwardRef(({className:e,...a},t)=>s.jsx("div",{className:"w-full overflow-auto",children:s.jsx("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",e),...a})}));n.displayName="Table";let i=r.forwardRef(({className:e,...a},t)=>s.jsx("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",e),...a}));i.displayName="TableHeader";let o=r.forwardRef(({className:e,...a},t)=>s.jsx("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",e),...a}));o.displayName="TableBody",r.forwardRef(({className:e,...a},t)=>s.jsx("tfoot",{ref:t,className:(0,l.cn)("bg-primary font-medium text-primary-foreground",e),...a})).displayName="TableFooter";let d=r.forwardRef(({className:e,...a},t)=>s.jsx("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));d.displayName="TableRow";let c=r.forwardRef(({className:e,...a},t)=>s.jsx("th",{ref:t,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...a}));c.displayName="TableHead";let m=r.forwardRef(({className:e,...a},t)=>s.jsx("td",{ref:t,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...a}));m.displayName="TableCell",r.forwardRef(({className:e,...a},t)=>s.jsx("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},33342:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>P});var s=t(19510),r=t(19801),l=t(38509),n=t(68570);let i=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\tables\employee-tables\columns.tsx`),{__esModule:o,$$typeof:d}=i;i.default;let c=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\tables\employee-tables\columns.tsx#columns`),m=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\tables\employee-tables\employee-table.tsx`),{__esModule:u,$$typeof:p}=m;m.default;let x=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\tables\employee-tables\employee-table.tsx#EmployeeTable`);var f=t(83392),h=t(73347);let g=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\ui\separator.tsx`),{__esModule:b,$$typeof:j}=g;g.default;let y=(0,n.createProxy)(String.raw`C:\Users\LENOVO\Documents\iwan-project\iwan-admin\components\ui\separator.tsx#Separator`);var w=t(50650);let N=(0,t(36478).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var v=t(57371);let C=[{title:"Dashboard",link:"/dashboard"},{title:"Employee",link:"/dashboard/employee"}];async function P({searchParams:e}){let a=Number(e.page)||1,t=Number(e.limit)||10,n=e.search||null,i=(a-1)*t,o=await fetch(`https://api.slingacademy.com/v1/sample-data/users?offset=${i}&limit=${t}`+(n?`&search=${n}`:"")),d=await o.json(),m=d.total_users,u=d.users;return s.jsx(l.Z,{children:(0,s.jsxs)("div",{className:"space-y-4",children:[s.jsx(r.O,{items:C}),(0,s.jsxs)("div",{className:"flex items-start justify-between",children:[s.jsx(h.X,{title:`Employee (${m})`,description:"Manage employees (Server side table functionalities.)"}),(0,s.jsxs)(v.default,{href:"/dashboard/employee/new",className:(0,w.cn)((0,f.d)({variant:"default"})),children:[s.jsx(N,{className:"mr-2 h-4 w-4"})," Add New"]})]}),s.jsx(y,{}),s.jsx(x,{searchKey:"country",pageNo:a,columns:c,totalUsers:m,data:u,pageCount:Math.ceil(m/t)})]})})}},19801:(e,a,t)=>{"use strict";t.d(a,{O:()=>f});var s=t(19510),r=t(71159),l=t(30973),n=t(22813),i=t(50650);let o=r.forwardRef(({...e},a)=>s.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));o.displayName="Breadcrumb";let d=r.forwardRef(({className:e,...a},t)=>s.jsx("ol",{ref:t,className:(0,i.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a}));d.displayName="BreadcrumbList";let c=r.forwardRef(({className:e,...a},t)=>s.jsx("li",{ref:t,className:(0,i.cn)("inline-flex items-center gap-1.5",e),...a}));c.displayName="BreadcrumbItem";let m=r.forwardRef(({asChild:e,className:a,...t},r)=>{let l=e?n.g7:"a";return s.jsx(l,{ref:r,className:(0,i.cn)("transition-colors hover:text-foreground",a),...t})});m.displayName="BreadcrumbLink";let u=r.forwardRef(({className:e,...a},t)=>s.jsx("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,i.cn)("font-normal text-foreground",e),...a}));u.displayName="BreadcrumbPage";let p=({children:e,className:a,...t})=>s.jsx("li",{role:"presentation","aria-hidden":"true",className:(0,i.cn)("[&>svg]:size-3.5",a),...t,children:e??s.jsx(l.XCv,{})});p.displayName="BreadcrumbSeparator";var x=t(79458);function f({items:e}){return s.jsx(o,{children:s.jsx(d,{children:e.map((a,t)=>(0,s.jsxs)(r.Fragment,{children:[t!==e.length-1&&s.jsx(c,{children:s.jsx(m,{href:a.link,children:a.title})}),t<e.length-1&&s.jsx(p,{children:s.jsx(x.Z,{})}),t===e.length-1&&s.jsx(u,{children:a.title})]},a.title))})})}},38509:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var s=t(19510);t(71159);var r=t(91179);function l({children:e,scrollable:a=!1}){return s.jsx(s.Fragment,{children:a?s.jsx(r.x,{className:"h-[calc(100dvh-52px)]",children:s.jsx("div",{className:"h-full  p-4 md:px-8",children:e})}):s.jsx("div",{className:"h-full  p-4 md:px-8",children:e})})}},83392:(e,a,t)=>{"use strict";let s,r;t.d(a,{z:()=>p,d:()=>u});var l=t(19510),n=t(71159),i=t(22813),o=t(55761);let d=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,c=o.W;var m=t(50650);let u=(s="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",r={variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}},e=>{var a;if((null==r?void 0:r.variants)==null)return c(s,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:t,defaultVariants:l}=r,n=Object.keys(t).map(a=>{let s=null==e?void 0:e[a],r=null==l?void 0:l[a];if(null===s)return null;let n=d(s)||d(r);return t[a][n]}),i=e&&Object.entries(e).reduce((e,a)=>{let[t,s]=a;return void 0===s||(e[t]=s),e},{});return c(s,n,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,a)=>{let{class:t,className:s,...r}=a;return Object.entries(r).every(e=>{let[a,t]=e;return Array.isArray(t)?t.includes({...l,...i}[a]):({...l,...i})[a]===t})?[...e,t,s]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),p=n.forwardRef(({className:e,variant:a,size:t,asChild:s=!1,...r},n)=>{let o=s?i.g7:"button";return l.jsx(o,{className:(0,m.cn)(u({variant:a,size:t,className:e})),ref:n,...r})});p.displayName="Button"},73347:(e,a,t)=>{"use strict";t.d(a,{X:()=>r});var s=t(19510);let r=({title:e,description:a})=>(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:e}),s.jsx("p",{className:"text-sm text-muted-foreground",children:a})]})},57371:(e,a,t)=>{"use strict";t.d(a,{default:()=>r.a});var s=t(670),r=t.n(s)},670:(e,a,t)=>{"use strict";let{createProxy:s}=t(68570);e.exports=s("C:\\Users\\LENOVO\\Documents\\iwan-project\\iwan-admin\\node_modules\\next\\dist\\client\\link.js")}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[948,925,364,331,137,997,881,235,274,220],()=>t(30566));module.exports=s})();