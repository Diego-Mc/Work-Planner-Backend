import{S as n}from"./sweetalert2.all-de4d19d0.js";import{b as s}from"./machinesSlice-9d6db005.js";import{o as f}from"./index-36625d61.js";const C=()=>{const[r]=s(),i=f(),a=async(t,o=!0)=>{if(!t)return;const{value:e}=await n.fire({title:"לכמה עובדים המכונה מיועדת?",input:"number",inputPlaceholder:"הכנס את מספר העובדים",confirmButtonColor:"#545454"});return e&&(r({machineDetails:{...t,amountOfWorkers:+e},machineId:t._id}),o&&n.fire({title:"השינוי בוצע בהצלחה!",text:`כמות העובדים העדכנית היא ${e}`,confirmButtonColor:"#545454",icon:"success"})),e},c=async(t,o=!0)=>{if(!t)return;const{value:e}=await n.fire({title:"מה חשיבות המכונה?",text:"חשיבות המכונה היא דירוג מ0 ומעלה, מכונה שתדורג גבוה יותר תקבל איוש מדויק יותר.",input:"number",inputPlaceholder:"הכנס את חשיבות המכונה",confirmButtonColor:"#545454"});return e&&(r({machineDetails:{...t,importance:+e},machineId:t._id}),o&&n.fire({title:"השינוי בוצע בהצלחה!",text:`חשיבות המכונה העדכנית היא ${e}`,confirmButtonColor:"#545454",icon:"success"})),e},u=async(t,o=!0)=>{if(!t)return;const{value:e}=await n.fire({title:"מה השם העדכני של המכונה?",text:"השינוי ישתקף בכל הסידורים, גם בעתיד וגם בעבר!",input:"text",inputPlaceholder:"הכנס את שם המכונה העדכני",confirmButtonColor:"#545454"});return e&&(r({machineDetails:{...t,name:e},machineId:t._id}),o&&n.fire({title:"השינוי בוצע בהצלחה!",text:`שם המכונה העדכני הוא ${e}`,confirmButtonColor:"#545454",icon:"success"})),e},l=async(t,o=!0)=>{if(!t)return;const{isConfirmed:e}=await n.fire({title:"אתה בטוח?",text:"המכונה לא תופיע בסידורים הבאים וגם לא בנתונים הסטטיסטיים - הסידורים הקודמים בהם הופיעה לא יושפעו.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3c82f6",cancelButtonColor:"tomato",confirmButtonText:"אני בטוח",cancelButtonText:"ביטול"});return e&&(r({machineDetails:{...t,ownerId:null},machineId:t._id}),o&&n.fire({title:"המכונה נותקה בהצלחה",confirmButtonColor:"#545454",icon:"success"}),i("/machines")),e};return{handleAmountOfWorkersChange:t=>a(t),handleImportanceChange:t=>c(t),handleNameChange:t=>u(t),handleDelete:t=>l(t)}};export{C as u};
