"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[2833,148],{12833:(F,U,s)=>{s.d(U,{ProtectedCreateView:()=>$});var t=s(92132),P=s(55506),m=s(82437),v=s(3001),A=s(80148),g=s(21272),c=s(55151),D=s(79077),_=s(48176),O=s(15126),d=s(63299),a=s(67014),N=s(59080),z=s(79275),y=s(14718),j=s(61535),C=s(5790),f=s(12083),x=s(35223),R=s(5409),l=s(74930),Z=s(2600),H=s(48940),X=s(41286),w=s(56336),b=s(13426),q=s(84624),ss=s(77965),ts=s(54257),_s=s(71210),ns=s(51187),as=s(39404),Es=s(58692),os=s(501),rs=s(57646),es=s(23120),ds=s(44414),is=s(25962),Ms=s(14664),Ps=s(42588),Ds=s(90325),Os=s(62785),ls=s(87443),Ts=s(41032),ms=s(22957),vs=s(93179),As=s(73055),Cs=s(15747),Rs=s(85306),Is=s(26509),Ls=s(32058),Bs=s(81185),Us=s(82261),fs=s(1607),Ws=s(98842);const $=()=>{const G=(0,m.d4)(v.s);return(0,t.jsx)(P.kz,{permissions:G.settings?.["transfer-tokens"].create,children:(0,t.jsx)(A.w,{})})}},80148:(F,U,s)=>{s.d(U,{ProtectedEditView:()=>hs,w:()=>Y});var t=s(92132),P=s(21272),m=s(38413),v=s(4198),A=s(83997),g=s(94061),c=s(30893),D=s(90151),_=s(68074),O=s(55356),d=s(85963),a=s(55506),N=s(54514),z=s(61535),y=s(54894),j=s(17703),C=s(12083),f=s(48176),x=s(1607),R=s(99831),l=s(98842),Z=s(15126),H=s(63299),X=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),ns=s(5409),as=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(56336),ds=s(13426),is=s(84624),Ms=s(77965),Ps=s(54257),Ds=s(71210),Os=s(51187),ls=s(39404),Ts=s(58692),ms=s(501),vs=s(57646),As=s(23120),Cs=s(44414),Rs=s(25962),Is=s(14664),Ls=s(42588),Bs=s(90325),Us=s(62785),fs=s(87443),Ws=s(41032),$=s(22957),G=s(93179),Ns=s(73055),zs=s(15747),$s=s(85306),Gs=s(26509),Ys=s(32058),Js=s(81185),Qs=s(82261);const Ks=C.Ik().shape({name:C.Yj().max(100).required(a.iW.required),description:C.Yj().nullable(),lifespan:C.ai().integer().min(0).nullable().defined(a.iW.required),permissions:C.Yj().required(a.iW.required)}),Y=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:r,unlockApp:W}=(0,a.MA)(),i=(0,a.hN)(),I=(0,j.W6)(),{state:K}=(0,j.zy)(),[E,L]=P.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,a.z1)(),{setCurrentStep:ys}=(0,a.Cx)(),js=(0,f.j)(e=>e.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:xs,canUpdate:ps,canRegenerate:us}}=(0,a.ec)(js),p=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,M=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:J}=(0,a.wq)();P.useEffect(()=>{T(M?"didAddTokenFromList":"didEditTokenFromList",{tokenType:R.T})},[M,T]);const{data:S,error:V}=(0,x.u)(p,{skip:M||E!==null||!p});P.useEffect(()=>{V&&i({type:"warning",message:u(V)})},[V,u,i]),P.useEffect(()=>{S&&L(S)},[S]);const[Ss]=(0,x.a)(),[Vs]=(0,x.b)(),Fs=async(e,B)=>{T(M?"willCreateToken":"willEditToken",{tokenType:R.T}),r();const h=e.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(M){const n=await Ss({...e,lifespan:e?.lifespan||null,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(J(n.error)):i({type:"warning",message:u(n.error)});return}L(n.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:R.T}),I.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),ys("transferTokens.success")}else{const n=await Vs({id:p,name:e.name,description:e.description,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(J(n.error)):i({type:"warning",message:u(n.error)});return}L(n.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:R.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{W()}},Q=ps&&!M||xs&&M;return!M&&!E?(0,t.jsx)(cs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(z.l1,{validationSchema:Ks,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan||null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(e,B)=>Fs(e,B),children:({errors:e,handleChange:B,isSubmitting:h,values:k})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:L,canEditInputs:Q,canRegenerate:us,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:R.T}),(0,t.jsx)(gs,{errors:e,onChange:B,canEditInputs:Q,isCreating:M,values:k,transferToken:E})]})})]})})]})},hs=()=>{const o=(0,f.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(Y,{})})},gs=({errors:o={},onChange:r,canEditInputs:W,isCreating:i,values:I,transferToken:K={}})=>{const{formatMessage:E}=(0,y.A)(),L=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:I.name,canEditInputs:W,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:I.description,canEditInputs:W,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:i,error:o.lifespan,value:I.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:I.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:L,canEditInputs:W})},"permissions")]})]})})},cs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.A)();return(0,a.L4)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(O.Q,{primaryAction:(0,t.jsx)(d.$,{disabled:!0,startIcon:(0,t.jsx)(N.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(a.Bl,{})})]})}},1607:(F,U,s)=>{s.d(U,{a:()=>A,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(48176);const P=t.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:d})=>({type:"TransferToken",id:d}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:d})=>[{type:"TransferToken",id:d}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:A,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=P}}]);
