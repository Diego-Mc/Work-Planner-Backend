import{u as b,b as f,c as N,j as t,a as e}from"./index-f02a5516.js";import{u as g}from"./machinesSlice-d86a53fd.js";import{u as y}from"./workersSlice-5c6aa889.js";import{u as W}from"./useMachineHandlers-b27b2fd9.js";import{u as w,V as v,a as C,b as x,c as V}from"./useWindowSize-068aa69c.js";import"./last-f7fd26fe.js";const P=({})=>{const d=b(),m=f(),{data:a}=g(d.machineId),{data:l}=y(),{data:c}=N(),n=w(),{handleAmountOfWorkersChange:h,handleDelete:u,handleImportanceChange:k,handleNameChange:p}=W(),i=[];if(c&&l&&a){const s=c.amountWorkedPerMachine[a._id];l.forEach(r=>{var o;i.push({worker:r.name,amountWorked:((o=s==null?void 0:s[r._id])==null?void 0:o.length)||0})}),i.sort((r,o)=>r.amountWorked-o.amountWorked)}return t("section",{className:"machine-dashboard dashboard",children:[a?t("div",{className:"dashboard-header",children:[t("div",{className:"header-details",children:[t("h2",{className:"title",children:[e("span",{className:"material-symbols-outlined back-icon",onClick:()=>m("/machines"),children:"chevron_right"}),a.name]}),t("div",{className:"actions",children:[e("button",{className:"pill-btn",onClick:()=>h(a),children:"יעד עובדים"}),e("button",{className:"pill-btn",onClick:()=>k(a),children:"חשיבות"}),e("button",{className:"pill-btn",onClick:()=>p(a),children:"שינוי שם"}),e("button",{className:"pill-btn danger",onClick:()=>u(a),children:"ניתוק"})]})]}),a.amountOfWorkers===1?t("p",{className:"header-sub-details",children:["המכונה מיועדת לעובד אחד ובעלת חשיבות ",a.importance,"."]}):t("p",{className:"header-sub-details",children:["המכונה מיועדת ל",e("span",{className:"workers-amount-cta",children:a.amountOfWorkers})," ","עובדים ובעלת חשיבות ",a.importance,"."]})]}):null,e("div",{className:"stat",children:t("div",{className:"main-stat",children:[e("h3",{className:"stat-title",children:"כמות סבבי עבודה של כל עובד במכונה"}),e("div",{className:"stat-wrapper",children:t(v,{horizontal:!0,domainPadding:16,padding:{top:30,bottom:30,left:120,right:60},width:((n==null?void 0:n.width)||1200)<720?n.width:((n==null?void 0:n.width)||1200)-400,height:i.length*80,children:[e(C,{theme:x.material,style:{data:{fill:"#ffa600"},labels:{fontFamily:"Rubik",fontSize:16}},data:i,labels:({datum:s})=>s.amountWorked?`${s.amountWorked}`:"",x:"worker",y:"amountWorked"}),e(V,{tickFormat:s=>`${s}`,style:{tickLabels:{padding:10,fontSize:16,fontFamily:"Rubik"}}})]})})]})})]})};export{P as MachineDashboard,P as default};