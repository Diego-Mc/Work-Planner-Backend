import{k as o,o as c,j as e,d as s,F as n,L as m}from"./index-e8d0ac3f.js";import{b as h,h as t}from"./moment-5ed9d0ca.js";import{Table as u}from"./Table-f80fc0b2.js";import{u as p}from"./util.service-52267f96.js";import{u as b}from"./useScheduleHandlers-7186ba90.js";import"./useMachineHandlers-367d476d.js";import"./sweetalert2.all-e03a7e5c.js";import"./machinesSlice-5eb0ac0b.js";import"./constants-310db9be.js";import"./useDragDropManager-d58e32a0.js";const H=({})=>{const l=o(),d=c(),{data:a}=h(l.scheduleId),{handleDelete:r,handleToExcel:i}=b();return e("section",{className:"schedule-dashboard dashboard",children:a?s(n,{children:[s("div",{className:"dashboard-header",children:[s("div",{className:"header-details",children:[s("h2",{className:"title",children:[e("span",{className:"material-symbols-outlined back-icon",onClick:()=>d("/schedules"),children:"chevron_right"}),p.formatDateRange(a.date.from,a.date.to)]}),s("div",{className:"actions",children:[e(m,{to:`/edit/${a._id}`,children:e("button",{className:"pill-btn",children:"עריכה"})}),e("button",{className:"pill-btn",onClick:()=>i(a),children:"ייצוא לאקסל"}),e("button",{className:"pill-btn danger",onClick:r,children:"מחיקה"})]})]}),e("p",{className:"header-sub-details",children:`הסידור עודכן לאחרונה בתאריך ${t(a.updatedAt).format("DD/MM/YY")} בשעה ${t(a.updatedAt).format("HH:mm")}`})]}),e("div",{className:"stat table-stat",children:e(u,{table:a.table})})]}):null})};export{H as ScheduleDashboard,H as default};