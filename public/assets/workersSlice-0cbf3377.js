import{n as y}from"./index-9fc7feec.js";const s=y.injectEndpoints({endpoints:n=>({getWorkers:n.query({queryFn:async(e,t,a,i)=>{const o=(await i("/workers/")).data;return o==null||o.sort((u,d)=>u.name.localeCompare(d.name)),{data:o}},providesTags:e=>e?[...e.map(({_id:t})=>({type:"Workers",id:t})),{type:"Workers",id:"LIST"}]:[{type:"Workers",id:"LIST"}]}),getWorker:n.query({queryFn:async(e,t,a,i)=>({data:(await i(`/workers/${e}`)).data}),providesTags:(e,t,a)=>[{type:"Workers",id:a}]}),addWorker:n.mutation({query:e=>({url:"/workers/",method:"POST",body:{name:e}}),invalidatesTags:["Statistics"],async onQueryStarted(e,{dispatch:t,queryFulfilled:a}){try{const{data:i}=await a;t(s.util.updateQueryData("getWorkers",void 0,r=>{r.push(i)}))}catch(i){console.log("error adding worker, invalidating {Workers - LIST}",i),t(s.util.invalidateTags([{type:"Workers",id:"LIST"}]))}}}),setShiftTime:n.mutation({query:({shiftTime:e,workerId:t})=>({url:`/workers/${t}/set-shift-time`,method:"PATCH",body:{shiftTime:e}}),async onQueryStarted({shiftTime:e,workerId:t},{dispatch:a,queryFulfilled:i}){a(s.util.updateQueryData("getWorker",t,r=>{r.shiftTime=e})),a(s.util.updateQueryData("getWorkers",void 0,r=>{const o=r.find(u=>u._id===t);o&&(o.shiftTime=e)}));try{await i}catch(r){console.log("error toggle lock, invalidating {Workers - workerId}",r),a(s.util.invalidateTags([{type:"Workers",id:t}]))}}}),resetShiftTimes:n.mutation({query:()=>({url:"/workers/reset-shift-times",method:"PATCH"}),invalidatesTags:["Workers"],async onQueryStarted(e,{dispatch:t,queryFulfilled:a}){t(s.util.updateQueryData("getWorkers",void 0,i=>{i.forEach(r=>r.shiftTime="")}));try{await a}catch(i){console.log("error toggle lock, invalidating {Workers - LIST}",i),t(s.util.invalidateTags([{type:"Workers",id:"LIST"}]))}}}),saveWorker:n.mutation({query:({workerDetails:e,workerId:t})=>({url:`/workers/${t}/save`,method:"POST",body:e}),invalidatesTags:["Statistics"],async onQueryStarted({workerDetails:e,workerId:t},{dispatch:a,queryFulfilled:i}){a(s.util.updateQueryData("getWorker",t,r=>{r.name=e.name,r.shiftTime=e.shiftTime,r.ownerId=e.ownerId})),a(s.util.updateQueryData("getWorkers",void 0,r=>{const o=r.findIndex(u=>u._id===e._id);e.ownerId===null?r.splice(o,1):(r[o].shiftTime=e.shiftTime,r[o].name=e.name)}));try{await i}catch(r){console.log("error save, invalidating {Workers - workerId}",r),a(s.util.invalidateTags([{type:"Workers",id:t}]))}}}),deleteWorker:n.mutation({query:e=>({url:`/posts/${e}`,method:"DELETE"}),invalidatesTags:(e,t,a)=>[{type:"Workers",id:a},{type:"Workers",id:"LIST"},{type:"Statistics"}]})}),overrideExisting:!1}),{useAddWorkerMutation:m,useDeleteWorkerMutation:g,useGetWorkerQuery:k,useGetWorkersQuery:W,useSaveWorkerMutation:c,useSetShiftTimeMutation:T,useResetShiftTimesMutation:p}=s;export{m as a,T as b,p as c,k as d,c as e,W as u};