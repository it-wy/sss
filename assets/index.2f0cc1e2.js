import{g as e}from"./index.11967acc.js";import{f as a,a as l,b as o,c as t,W as s,V as r,u as d,Q as u,l as n,U as i}from"./vendor.7d9f00ad.js";const m={style:{"margin-bottom":"15px"}},c=i(" Switch roles: "),p={expose:[],setup(i){const p=e(),f=a((()=>p.state.roles)),g=a({get:()=>f.value[0],set(e){let a=[e];localStorage.setItem("roles",JSON.stringify(a)),location.reload()}});return(e,a)=>{const i=l("el-radio-button"),p=l("el-radio-group");return o(),t("div",null,[s("div",m,"Your roles: "+r(d(f)),1),c,s(p,{modelValue:d(g),"onUpdate:modelValue":a[1]||(a[1]=e=>n(g)?g.value=e:null)},{default:u((()=>[s(i,{label:"editor"}),s(i,{label:"admin"})])),_:1},8,["modelValue"])])}}};export default p;