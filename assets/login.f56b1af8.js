import{a as e,k as a,b as s,c as o,e as l,U as t,f as r,z as n,X as u}from"./vendor.bf39f86d.js";import{_ as m}from"./AnimatedFlash.2f9ff679.js";const d={components:{AnimatedFlash:m},setup(){const a=e(""),s=e(""),{proxy:o}=n();return{userName:a,password:s,submit:()=>{""!=a.value.trim()&&""!=s.value.trim()&&localStorage.setItem("user",JSON.stringify({userName:a.value,password:s.value}));localStorage.setItem("roles",JSON.stringify(["admin"])),localStorage.setItem("Admin-Token",Math.random(10)),o.$root.$router.push("/")}}}},i={class:"login-wrap"},p={class:"main"},c=l("span",{class:"login-title"},"pure",-1),f=u("登录");d.render=function(e,n,u,m,d,g){const h=a("AnimatedFlash"),v=a("el-input"),N=a("el-button");return s(),o("div",i,[l("div",p,[l(h,{animateName:"zoomIn",count:"1"},{default:t((()=>[c])),_:1}),l(v,{modelValue:m.userName,"onUpdate:modelValue":n[1]||(n[1]=e=>m.userName=e),placeholder:"请输入账号"},null,8,["modelValue"]),l(v,{modelValue:m.password,"onUpdate:modelValue":n[2]||(n[2]=e=>m.password=e),type:"password",placeholder:"请输入密码",onKeyup:r(m.submit,["enter"])},null,8,["modelValue","onKeyup"]),l(N,{onClick:m.submit},{default:t((()=>[f])),_:1},8,["onClick"])])])};export default d;
