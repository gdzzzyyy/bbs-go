import{j as O,b as K,a as Q}from"./index.db022209.js";import{d as P,e as B,r as S,B as y,aD as T,aG as a,aH as e,u as t,aL as p,b4 as $,b5 as q,bE as H,bF as M,b8 as j,a$ as W,c as X,o as Y,C as Z,F as x,aM as A,ab as ee,aV as te,a5 as ae,bI as oe,bA as le,bJ as se}from"./arco.bfc06e8a.js";import{g as J,b as h,x as I,w as ue}from"./index.f0ca126f.js";/* empty css              *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import"./chart.8d130ef7.js";import"./vue.203b0a99.js";const ne=P({__name:"Edit",emits:["ok"],setup(R,{expose:f,emit:b}){const g=b,n=J(),i=B(),d=S({visible:!1,isCreate:!1,title:""}),s=B({name:void 0,code:void 0,sortNo:0,remark:void 0,status:0}),C={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801"}],status:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001"}]},E=()=>{i.value.resetFields(),d.isCreate=!0,d.title="\u65B0\u589E",d.visible=!0},V=async l=>{i.value.resetFields(),d.isCreate=!1,d.title="\u7F16\u8F91";try{s.value=await h.get(`/api/admin/role/${l}`)}catch(o){I(o)}d.visible=!0},k=()=>{i.value.resetFields()},w=async l=>{if(await i.value.validate()){l(!1);return}try{const r=d.isCreate?"/api/admin/role/create":"/api/admin/role/update";await h.postForm(r,O(s.value)),ue("\u63D0\u4EA4\u6210\u529F"),g("ok"),l(!0)}catch(r){I(r),l(!1)}};return f({show:E,showEdit:V}),(l,o)=>{const r=$,c=q,F=H,z=M,D=j,v=W;return y(),T(v,{visible:t(d).visible,"onUpdate:visible":o[4]||(o[4]=m=>t(d).visible=m),title:t(d).title,size:t(n).table.size,onCancel:k,onBeforeOk:w},{default:a(()=>[e(D,{ref_key:"formRef",ref:i,model:t(s),rules:C},{default:a(()=>[e(c,{label:"\u89D2\u8272\u540D\u79F0",field:"name"},{default:a(()=>[e(r,{modelValue:t(s).name,"onUpdate:modelValue":o[0]||(o[0]=m=>t(s).name=m)},null,8,["modelValue"])]),_:1}),e(c,{label:"\u89D2\u8272\u7F16\u7801",field:"code"},{default:a(()=>[e(r,{modelValue:t(s).code,"onUpdate:modelValue":o[1]||(o[1]=m=>t(s).code=m)},null,8,["modelValue"])]),_:1}),e(c,{label:"\u5907\u6CE8",field:"remark"},{default:a(()=>[e(r,{modelValue:t(s).remark,"onUpdate:modelValue":o[2]||(o[2]=m=>t(s).remark=m)},null,8,["modelValue"])]),_:1}),e(c,{label:"\u72B6\u6001",field:"status"},{default:a(()=>[e(z,{modelValue:t(s).status,"onUpdate:modelValue":o[3]||(o[3]=m=>t(s).status=m)},{default:a(()=>[e(F,{value:0},{default:a(()=>[p("\u6B63\u5E38")]),_:1}),e(F,{value:1},{default:a(()=>[p("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","size"])}}}),ie={class:"container"},de={class:"container-header"},re={class:"action-btns"},me={class:"container-main"},N=0,Ee=P({__name:"index",setup(R){const f=J(),b=B(!1),g=B(),n=S({limit:20,page:1,name:void 0,code:void 0,status:0}),i=S({page:{page:1,limit:20,total:0},results:[]}),d=X(()=>({total:i.page.total,current:i.page.page,pageSize:i.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));Y(()=>{K()});const s=async()=>{b.value=!0;try{const l=await h.postForm("/api/admin/role/list",O(n));i.page=l.page,i.results=l.results}finally{b.value=!1}};s();const C=()=>{g.value.show()},E=l=>{g.value.showEdit(l)},V=async l=>{const o=[];l.forEach(r=>{o.push(r.id)}),await h.post("/api/admin/role/update_sort",o),await s()},k=l=>{n.page=l,s()},w=l=>{n.limit=l,s()};return(l,o)=>{const r=$,c=q,F=H,z=M,D=ee,v=te,m=j,G=ae,_=oe,U=le,L=se;return y(),Z("div",ie,[x("div",de,[e(m,{model:t(n),layout:"inline",size:t(f).table.size},{default:a(()=>[e(c,null,{default:a(()=>[e(r,{modelValue:t(n).name,"onUpdate:modelValue":o[0]||(o[0]=u=>t(n).name=u),placeholder:"\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(c,null,{default:a(()=>[e(r,{modelValue:t(n).code,"onUpdate:modelValue":o[1]||(o[1]=u=>t(n).code=u),placeholder:"\u89D2\u8272\u7F16\u7801"},null,8,["modelValue"])]),_:1}),e(c,null,{default:a(()=>[e(z,{modelValue:t(n).status,"onUpdate:modelValue":o[2]||(o[2]=u=>t(n).status=u),placeholder:"\u72B6\u6001","allow-clear":"",onChange:s},{default:a(()=>[e(F,{value:0,label:"\u6B63\u5E38"}),e(F,{value:1,label:"\u7981\u7528"})]),_:1},8,["modelValue"])]),_:1}),e(c,null,{default:a(()=>[e(v,{type:"primary","html-type":"submit",onClick:s},{icon:a(()=>[e(D)]),default:a(()=>[p(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),x("div",re,[e(v,{type:"primary",size:t(f).table.size,onClick:C},{icon:a(()=>[e(G)]),default:a(()=>[p(" \u65B0\u589E ")]),_:1},8,["size"])])]),x("div",me,[e(L,{loading:t(b),data:t(i).results,size:t(f).table.size,bordered:t(f).table.bordered,pagination:t(d),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",draggable:{type:"handle",width:40},"row-key":"id",onChange:V,onPageChange:k,onPageSizeChange:w},{columns:a(()=>[e(_,{title:"\u7F16\u53F7","data-index":"id"}),e(_,{title:"\u540D\u79F0","data-index":"name"}),e(_,{title:"\u89D2\u8272\u7F16\u7801","data-index":"code"}),e(_,{title:"\u7C7B\u578B","data-index":"name"},{cell:a(({record:u})=>[u.type===N?(y(),T(U,{key:0,color:"blue"},{default:a(()=>[p("\u7CFB\u7EDF")]),_:1})):(y(),T(U,{key:1},{default:a(()=>[p("\u81EA\u5B9A\u4E49")]),_:1}))]),_:1}),e(_,{title:"\u5907\u6CE8","data-index":"remark"}),e(_,{title:"\u72B6\u6001","data-index":"status"},{cell:a(({record:u})=>[p(A(u.status===0?"\u6B63\u5E38":"\u7981\u7528"),1)]),_:1}),e(_,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"},{cell:a(({record:u})=>[p(A(("useFormatDate"in l?l.useFormatDate:t(Q))(u.createTime)),1)]),_:1}),e(_,{title:"\u64CD\u4F5C"},{cell:a(({record:u})=>[e(v,{type:"primary",size:t(f).table.size,disabled:u.type===N,onClick:ce=>E(u.id)},{default:a(()=>[p("\u7F16\u8F91")]),_:2},1032,["size","disabled","onClick"])]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])]),e(ne,{ref_key:"edit",ref:g,onOk:s},null,512)])}}});export{Ee as default};
