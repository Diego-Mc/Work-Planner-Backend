import{r as n,_ as d,l as m,b as r,j as e,F as s,N as c,m as p,R as k,n as h}from"./index-13cd8867.js";import{S as u}from"./sweetalert2.all-c491c07a.js";import{L as w}from"./ListSkeletonLoader-410661c3.js";import{u as b,a as N}from"./workersSlice-97561ec9.js";const _=n.lazy(()=>d(()=>import("./WorkerDashboard-217e8d7b.js"),["assets/WorkerDashboard-217e8d7b.js","assets/index-13cd8867.js","assets/index-b2394aa6.css","assets/sweetalert2.all-c491c07a.js","assets/machinesSlice-2e088a50.js","assets/statisticsSlice-be32e808.js","assets/workersSlice-97561ec9.js","assets/useWindowSize-61fdba2f.js","assets/index-4d501b15.js"])),y=({})=>{const{data:o}=b(),[t]=N(),i=!!m().workerId;return r("section",{className:`workers-management-view management-view ${i?"open":""}`,children:[e("section",{className:"workers-list management-items-list",children:r("div",{className:"side-links",children:[r("button",{className:"management-item-link add-btn",onClick:async()=>{const{value:a}=await u.fire({title:"🎉עובד חדש!🎉",input:"text",inputLabel:"איך קוראים לו?",inputPlaceholder:"הכנס את שם העובד",confirmButtonColor:"#545454"});a&&t(a)},children:[e("span",{className:"material-symbols-outlined",children:""}),"הוסף עובד"]}),o?e(s,{children:o.map(a=>e(c,{className:"worker-link management-item-link",to:`/workers/${a._id}`,children:({isActive:l})=>r(s,{children:[e("span",{className:`material-symbols-outlined ${l?"":"outlined"}`,children:""}),a.name]})},a._id))}):e(w,{})]})}),e("section",{className:"worker-dashboard-wrapper dashboard-wrapper",children:e(n.Suspense,{fallback:r(s,{children:[e("section",{className:"worker-dashboard-wrapper dashboard-wrapper"}),e(p,{})]}),children:e(k,{children:e(h,{path:":workerId",element:e(_,{})})})})})]})};export{y as WorkersManagement,y as default};