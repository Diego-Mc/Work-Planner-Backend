import{r as c,j as s,F as f,d as t}from"./index-e8d0ac3f.js";import{b as p,I as r}from"./constants-310db9be.js";import{d as N}from"./moment-5ed9d0ca.js";import"./useDragDropManager-d58e32a0.js";const l=({worker:e,isUsed:i})=>{const a=c.useRef(null),[n,m]=c.useState(!!i);N();const[{isDragging:h},u,v]=p(()=>({type:r.WORKER,collect:d=>({isDragging:!!d.isDragging()}),item:()=>({_id:e._id,shiftTime:e.shiftTime,name:e.name}),canDrag(){return!n},end(d,g){n||m(g.didDrop())}}),[i,n]);return u(a),s(f,{children:s("article",{ref:a,className:`worker-item
        ${e.name?"":"empty"}
        ${n?"locked":""}
        ${h?"drag":""}`,children:e.name})})},D=({workers:e})=>t("div",{className:"worker-list",children:[s("h2",{className:"worker-list-title",children:"שיוכים מקוריים"}),t("div",{className:"time-shifts-lists",children:[t("div",{className:"morning-list",children:[s("h3",{className:"list-section-title",children:"בוקר"}),t("div",{className:"list-section-list",children:[e.unused.map(i=>i.shiftTime==="morning"?s(l,{isUsed:!1,worker:i},i._id):null),e.used.map(i=>i.shiftTime==="morning"?s(l,{isUsed:!0,worker:i},i._id):null)]})]}),t("div",{className:"evening-list",children:[s("h3",{className:"list-section-title",children:"ערב"}),t("div",{className:"list-section-list",children:[e.unused.map(i=>i.shiftTime==="evening"?s(l,{isUsed:!1,worker:i},i._id):null),e.used.map(i=>i.shiftTime==="evening"?s(l,{isUsed:!0,worker:i},i._id):null)]})]}),t("div",{className:"night-list",children:[s("h3",{className:"list-section-title",children:"לילה"}),t("div",{className:"list-section-list",children:[e.unused.map(i=>i.shiftTime==="night"?s(l,{isUsed:!1,worker:i},i._id):null),e.used.map(i=>i.shiftTime==="night"?s(l,{isUsed:!0,worker:i},i._id):null)]})]}),t("div",{className:"night-list",children:[s("h3",{className:"list-section-title",children:"ללא שיוך"}),t("div",{className:"list-section-list",children:[e.unused.map(i=>i.shiftTime?null:s(l,{isUsed:!1,worker:i},i._id)),e.used.map(i=>i.shiftTime?null:s(l,{isUsed:!0,worker:i},i._id))]})]})]})]});export{D as WorkerList,D as default};