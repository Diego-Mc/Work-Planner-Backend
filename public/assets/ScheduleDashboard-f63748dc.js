import{k as o,o as c,j as e,b as s,F as n,L as m}from"./index-36625d61.js";import{b as h,h as t}from"./moment-2b928665.js";import{Table as u}from"./Table-6897bba9.js";import{u as b}from"./util.service-db7a6aa8.js";import{u as p}from"./useScheduleHandlers-609d5956.js";import"./useMachineHandlers-98437150.js";import"./sweetalert2.all-de4d19d0.js";import"./machinesSlice-9d6db005.js";import"./constants-bf1c1e66.js";import"./useDragDropManager-64895e7d.js";const H=({})=>{const l=o(),d=c(),{data:a}=h(l.scheduleId),{handleDelete:r,handleToExcel:i}=p();return e("section",{className:"schedule-dashboard dashboard",children:a?s(n,{children:[s("div",{className:"dashboard-header",children:[s("div",{className:"header-details",children:[s("h2",{className:"title",children:[e("span",{className:"material-symbols-outlined back-icon",onClick:()=>d("/schedules"),children:""}),b.formatDateRange(a.date.from,a.date.to)]}),s("div",{className:"actions",children:[e(m,{to:`/edit/${a._id}`,children:e("button",{className:"pill-btn",children:"עריכה"})}),e("button",{className:"pill-btn",onClick:()=>i(a),children:"ייצוא לאקסל"}),e("button",{className:"pill-btn danger",onClick:r,children:"מחיקה"})]})]}),e("p",{className:"header-sub-details",children:`הסידור עודכן לאחרונה בתאריך ${t(a.updatedAt).format("DD/MM/YY")} בשעה ${t(a.updatedAt).format("HH:mm")}`})]}),e("div",{className:"stat table-stat",children:e(u,{table:a.table})})]}):null})};export{H as ScheduleDashboard,H as default};
