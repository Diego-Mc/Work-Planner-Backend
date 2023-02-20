import{r as u,_ as k,o as b,b as i,j as a}from"./index-9fc7feec.js";import{a as y,h as d}from"./moment-d7b1a6e5.js";import{u as N}from"./machinesSlice-7f69dc83.js";import{u as _,b as w,c as v}from"./workersSlice-0cbf3377.js";const A=u.lazy(()=>k(()=>import("./ShiftTimesSettingsList-06ffbcba.js"),["assets/ShiftTimesSettingsList-06ffbcba.js","assets/index-9fc7feec.js","assets/index-631c72a2.css"])),E=({})=>{const{data:e}=_(),{data:l}=N(),[h]=w(),[f]=v(),[m]=y(),g=b(),p=(s,n)=>{const r=e==null?void 0:e.find(t=>t._id===s);r&&(r.shiftTime===n&&(n=""),h({workerId:s,shiftTime:n}))},S=s=>{f()},o=async()=>{if(!l||!e)return;const s=[];l.forEach(t=>{s.push({machine:t._id,data:{morning:new Array(t.amountOfWorkers).fill(null),evening:new Array(t.amountOfWorkers).fill(null),night:new Array(t.amountOfWorkers).fill(null)},locked:{morning:new Array(t.amountOfWorkers).fill(!1),evening:new Array(t.amountOfWorkers).fill(!1),night:new Array(t.amountOfWorkers).fill(!1)}})});const n=await m({date:{from:+d().day(6),to:+d().day(5+7)},table:s,workers:{used:[],unused:e}});if(!("data"in n))return;const r=n.data._id;g(`/edit/${r}`)},c=(e==null?void 0:e.reduce((s,n)=>s+(n.shiftTime===""?0:1),0))||0;return i("section",{className:"workers-shift-setup-view",children:[i("section",{className:"first-step",children:[i("header",{className:"worker-shift-header",children:[a("h2",{className:"title",children:"זמן משמרת"}),i("div",{className:"btns",children:[a("button",{className:"pill-btn danger",onClick:S,children:"אתחול"}),a("button",{className:"pill-btn continue-btn",onClick:o,children:"המשך"})]})]}),e?a(u.Suspense,{children:a(A,{handleToggleShift:p,workers:e})}):null]}),i("section",{className:"next-step",children:[e?c<e.length?a("p",{children:`שייכת זמני משמרת ל${c} עובדים מתוך ${e.length}, עוד קצת ומסיימים!`}):a("p",{children:"כולם משויכים, אפשר להתקדם!"}):null,a("button",{className:"btn outlined continue-btn",onClick:o,children:"המשך"})]})]})};export{E as ScheduleSettings,E as default};