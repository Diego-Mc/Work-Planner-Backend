import{r,_ as c,l as m,k as h,b as a,j as e,F as n,N as u,m as p,R as b,n as N}from"./index-13cd8867.js";import{L as g}from"./ListSkeletonLoader-410661c3.js";import{u as _}from"./moment-45f7da79.js";import{u as k}from"./util.service-8a7bed8a.js";const v=r.lazy(()=>c(()=>import("./ScheduleDashboard-3d953c48.js"),["assets/ScheduleDashboard-3d953c48.js","assets/index-13cd8867.js","assets/index-b2394aa6.css","assets/moment-45f7da79.js","assets/Table-415bf890.js","assets/useMachineHandlers-985818d3.js","assets/sweetalert2.all-c491c07a.js","assets/machinesSlice-2e088a50.js","assets/useScheduleHandlers-9352707d.js","assets/util.service-8a7bed8a.js","assets/constants-aeeeae2b.js","assets/useDragDropManager-f30c6e35.js"])),R=({})=>{const{data:t}=_(),l=m(),i=h(),d=!!l.scheduleId;return a("section",{className:`schedules-management-view management-view ${d?"open":""}`,children:[e("section",{className:"schedules-list management-items-list",children:a("div",{className:"side-links",children:[a("button",{className:"management-item-link add-btn",onClick:()=>i("/new"),children:[e("span",{className:"material-symbols-outlined",children:""}),"הוסף סידור"]}),t?e(n,{children:t.map(s=>e(u,{className:"schedule-link management-item-link",to:`/schedules/${s._id}`,children:({isActive:o})=>a(n,{children:[e("span",{className:`material-symbols-outlined ${o?"":"outlined"}`,children:""}),k.formatDateRange(s.date.from,s.date.to)]})},s._id))}):e(g,{})]})}),e("section",{className:"schedule-dashboard-wrapper dashboard-wrapper",children:e(r.Suspense,{fallback:a(n,{children:[e("section",{className:"schedule-dashboard-wrapper dashboard-wrapper"}),e(p,{})]}),children:e(b,{children:e(N,{path:":scheduleId",element:e(v,{})})})})})]})};export{R as SchedulesManagement,R as default};