import{l as c,k as o,j as e,b as s,F as n,L as m}from"./index-9bc05931.js";import{b as h,h as t}from"./moment-387ae4ca.js";import{Table as u}from"./Table-2aa6dc19.js";import{u as b}from"./util.service-da6b4ce7.js";import{u as p}from"./useScheduleHandlers-d124efad.js";import"./useMachineHandlers-1158984c.js";import"./sweetalert2.all-8ace2233.js";import"./machinesSlice-42b37ca9.js";import"./constants-a8526393.js";import"./useDragDropManager-6429935c.js";const H=({})=>{const l=c(),d=o(),{data:a}=h(l.scheduleId),{handleDelete:r,handleToExcel:i}=p();return e("section",{className:"schedule-dashboard dashboard",children:a?s(n,{children:[s("div",{className:"dashboard-header",children:[s("div",{className:"header-details",children:[s("h2",{className:"title",children:[e("span",{className:"material-symbols-outlined back-icon",onClick:()=>d("/schedules"),children:""}),b.formatDateRange(a.date.from,a.date.to)]}),s("div",{className:"actions",children:[e(m,{to:`/edit/${a._id}`,children:e("button",{className:"pill-btn",children:"עריכה"})}),e("button",{className:"pill-btn",onClick:()=>i(a),children:"ייצוא לאקסל"}),e("button",{className:"pill-btn danger",onClick:r,children:"מחיקה"})]})]}),e("p",{className:"header-sub-details",children:`הסידור עודכן לאחרונה בתאריך ${t(a.updatedAt).format("DD/MM/YY")} בשעה ${t(a.updatedAt).format("HH:mm")}`})]}),e("div",{className:"stat table-stat",children:e(u,{table:a.table})})]}):null})};export{H as ScheduleDashboard,H as default};