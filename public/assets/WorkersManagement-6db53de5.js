import{r as o,_ as d,k as m,d as r,j as e,F as s,N as c,l as p,R as k,m as u}from"./index-6e080c71.js";import{S as h}from"./sweetalert2.all-ea6aa349.js";import{u as w,a as b}from"./workersSlice-99c465b6.js";const N=o.lazy(()=>d(()=>import("./WorkerDashboard-bf9b7f08.js"),["assets/WorkerDashboard-bf9b7f08.js","assets/index-6e080c71.js","assets/index-704cebe8.css","assets/sweetalert2.all-ea6aa349.js","assets/machinesSlice-7ef1c114.js","assets/statisticsSlice-e93402b6.js","assets/workersSlice-99c465b6.js","assets/useWindowSize-0b99b8ed.js","assets/index-4d501b15.js"])),x=({})=>{const{data:n}=w(),[t]=b(),i=!!m().workerId;return r("section",{className:`workers-management-view management-view ${i?"open":""}`,children:[e("section",{className:"workers-list management-items-list",children:r("div",{className:"side-links",children:[r("button",{className:"management-item-link add-btn",onClick:async()=>{const{value:a}=await h.fire({title:"🎉עובד חדש!🎉",input:"text",inputLabel:"איך קוראים לו?",inputPlaceholder:"הכנס את שם העובד",confirmButtonColor:"#545454"});a&&t(a)},children:[e("span",{className:"material-symbols-outlined",children:"add"}),"הוסף עובד"]}),n?e(s,{children:n.map(a=>e(c,{className:"worker-link management-item-link",to:`/workers/${a._id}`,children:({isActive:l})=>r(s,{children:[e("span",{className:`material-symbols-outlined ${l?"":"outlined"}`,children:"person"}),a.name]})},a._id))}):null]})}),e("section",{className:"worker-dashboard-wrapper dashboard-wrapper",children:e(o.Suspense,{fallback:r(s,{children:[e("section",{className:"worker-dashboard-wrapper dashboard-wrapper"}),e(p,{})]}),children:e(k,{children:e(u,{path:":workerId",element:e(N,{})})})})})]})};export{x as WorkersManagement,x as default};
