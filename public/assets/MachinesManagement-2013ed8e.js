import{r as t,_ as m,l,b as s,j as a,N as d,F as i,m as h,R as p,n as u}from"./index-13cd8867.js";import{S as b}from"./sweetalert2.all-c491c07a.js";import{L as N}from"./ListSkeletonLoader-410661c3.js";import{u as M,a as _}from"./machinesSlice-2e088a50.js";const f=t.lazy(()=>m(()=>import("./MachineDashboard-d8bb4e1c.js"),["assets/MachineDashboard-d8bb4e1c.js","assets/index-13cd8867.js","assets/index-b2394aa6.css","assets/machinesSlice-2e088a50.js","assets/statisticsSlice-be32e808.js","assets/workersSlice-97561ec9.js","assets/useMachineHandlers-985818d3.js","assets/sweetalert2.all-c491c07a.js","assets/useWindowSize-61fdba2f.js","assets/index-4d501b15.js"])),y=({})=>{const{data:n}=M(),[r]=_(),o=!!l().machineId;return s("section",{className:`machines-management-view management-view ${o?"open":""}`,children:[a("section",{className:"machines-list management-items-list",children:s("div",{className:"side-links",children:[s("button",{className:"management-item-link add-btn",onClick:async()=>{const{value:e}=await b.fire({title:"🎉מכונה חדשה!🎉",input:"text",inputLabel:"מה שם המכונה?",inputPlaceholder:"הכנס את שם המכונה",confirmButtonColor:"#545454"});e&&r(e)},children:[a("span",{className:"material-symbols-outlined",children:""}),"הוסף מכונה"]}),n?n==null?void 0:n.map(e=>a(d,{className:"machine-link management-item-link",to:`/machines/${e._id}`,children:({isActive:c})=>s(i,{children:[a("span",{className:`material-symbols-outlined ${c?"":"outlined"}`,children:""}),e.name]})},e._id)):a(N,{})]})}),a("section",{className:"machine-dashboard-wrapper dashboard-wrapper",children:a(t.Suspense,{fallback:s(i,{children:[a("section",{className:"machine-dashboard-wrapper dashboard-wrapper"}),a(h,{})]}),children:a(p,{children:a(u,{path:":machineId",element:a(f,{})})})})})]})};export{y as MachinesManagement,y as default};