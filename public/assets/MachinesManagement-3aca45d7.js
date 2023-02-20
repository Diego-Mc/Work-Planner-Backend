import{r as t,_ as m,k as l,b as s,j as a,N as d,F as i,l as h,R as p,m as u}from"./index-36625d61.js";import{S as b}from"./sweetalert2.all-de4d19d0.js";import{L as N}from"./ListSkeletonLoader-319655cd.js";import{u as M,a as _}from"./machinesSlice-9d6db005.js";const f=t.lazy(()=>m(()=>import("./MachineDashboard-3e057fdd.js"),["assets/MachineDashboard-3e057fdd.js","assets/index-36625d61.js","assets/index-bfbd1e22.css","assets/machinesSlice-9d6db005.js","assets/statisticsSlice-6c48c23d.js","assets/workersSlice-728e0fdf.js","assets/useMachineHandlers-98437150.js","assets/sweetalert2.all-de4d19d0.js","assets/useWindowSize-cccf29e6.js","assets/index-4d501b15.js"])),y=({})=>{const{data:n}=M(),[r]=_(),o=!!l().machineId;return s("section",{className:`machines-management-view management-view ${o?"open":""}`,children:[a("section",{className:"machines-list management-items-list",children:s("div",{className:"side-links",children:[s("button",{className:"management-item-link add-btn",onClick:async()=>{const{value:e}=await b.fire({title:"🎉מכונה חדשה!🎉",input:"text",inputLabel:"מה שם המכונה?",inputPlaceholder:"הכנס את שם המכונה",confirmButtonColor:"#545454"});e&&r(e)},children:[a("span",{className:"material-symbols-outlined",children:""}),"הוסף מכונה"]}),n?n==null?void 0:n.map(e=>a(d,{className:"machine-link management-item-link",to:`/machines/${e._id}`,children:({isActive:c})=>s(i,{children:[a("span",{className:`material-symbols-outlined ${c?"":"outlined"}`,children:""}),e.name]})},e._id)):a(N,{})]})}),a("section",{className:"machine-dashboard-wrapper dashboard-wrapper",children:a(t.Suspense,{fallback:s(i,{children:[a("section",{className:"machine-dashboard-wrapper dashboard-wrapper"}),a(h,{})]}),children:a(p,{children:a(u,{path:":machineId",element:a(f,{})})})})})]})};export{y as MachinesManagement,y as default};
