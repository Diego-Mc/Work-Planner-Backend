import{u as l,j as s,a as e,F as r,N as d,O as m,S as c}from"./index-f02a5516.js";import{u as p,c as u}from"./workersSlice-5c6aa889.js";const b=({})=>{const{data:n}=p(),[t]=u(),o=!!l().workerId;return s("section",{className:`workers-management-view management-view ${o?"open":""}`,children:[e("section",{className:"workers-list management-items-list",children:s("div",{className:"side-links",children:[s("button",{className:"management-item-link add-btn",onClick:async()=>{const{value:a}=await c.fire({title:"🎉עובד חדש!🎉",input:"text",inputLabel:"איך קוראים לו?",inputPlaceholder:"הכנס את שם העובד",confirmButtonColor:"#545454"});a&&t(a)},children:[e("span",{className:"material-symbols-outlined",children:"add"}),"הוסף עובד"]}),n?e(r,{children:n.map(a=>e(d,{className:"worker-link management-item-link",to:`/workers/${a._id}`,children:({isActive:i})=>s(r,{children:[e("span",{className:`material-symbols-outlined ${i?"":"outlined"}`,children:"person"}),a.name]})},a._id))}):null]})}),e("section",{className:"worker-dashboard-wrapper dashboard-wrapper",children:e(m,{})})]})};export{b as WorkersManagement,b as default};