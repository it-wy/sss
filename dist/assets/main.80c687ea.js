var e=Object.assign;import{am as t,an as l,f as s,w as n,n as a,a as o,b as i,c,W as r,H as u,a6 as d,R as h,S as m,u as v,V as f,Z as p,e as b,U as g,j as k,a3 as C,ao as x,T as w}from"./vendor.7d9f00ad.js";import{u as A,a as F,s as y,m as E,E as L,b as R}from"./index.a25be628.js";import{_ as T}from"./AnimatedFlash.7056a91d.js";const _=b();t("data-v-5abaa4bc");const P={class:"nav-list"},S={class:"nav-ul"};l();const $={expose:[],setup(e){const t=A();F();const l=s((()=>({navList:[...y.state.routes]}))),b=(e,l)=>{null!=l&&null!=e.path?(t.push(`${l.path}/${e.path}`),e.isActive=!0):(e.children.length>1||e.hidden)&&(e.isActive=!e.isActive)},g=e=>{l.value.navList.forEach((t=>{const l=t;if(l.children&&e.includes(t.path)){if(l.children.some((t=>"/home"==e&&"home"==t.path?l.isActive=!0:l.isActive=e.includes(t.path.substr(0,t.path.indexOf(":")))&&"home"!=t.path)),l.isActive)for(const s of l.children){if(e.split("/").length-1>=3&&e.includes(s.path.substr(0,s.path.indexOf(":"))))return void(s.isActive=!0);s.isActive=e.includes(s.path)}}else l.isActive=t.path===e;return l}))},k=s((()=>y.state.skinChoose));return n((()=>t.currentRoute.value),(e=>{g(e.path)})),a((()=>{g(t.currentRoute.value.path)})),_(((e,s)=>{const n=o("el-collapse-transition");return i(),c("aside",{class:"nav",style:{background:v(k).asideBackground}},[r("ul",P,[(i(!0),c(u,null,d(v(l).navList,((e,l)=>h((i(),c("li",{class:["nav-item flex-center",{active:e.isActive&&e.children&&!e.hidden}],key:l,onClick:l=>{return s=e,void(t.currentRoute.value.path.split("/").length-1>=3&&s.children.length>1||s.children.length>1&&t.currentRoute.value.path.includes(s.path)||t.push(s.path));var s},style:{background:v(k).asideBackground}},[r("div",{class:[e.hidden?"nav-flex-child":"nav-flex-1","flex-a"],onClick:t=>b(e)},[r("i",{class:["icon-l",e.meta.icon],style:{color:!e.isActive||e.hidden?v(k).asideColor:v(k).activeColor}},null,6),r("span",{style:{color:v(k).asideColor}},f(e.meta.title),5),h(r("i",{style:{color:v(k).asideColor},class:["ri-arrow-right-s-line","ml-9",{rolatex:e.isActive,rolatey:!e.isActive}]},null,6),[[m,e.children&&e.hidden]])],10,["onClick"]),r(n,null,{default:_((()=>[h(r("ul",S,[(i(!0),c(u,null,d(e.children,((t,l)=>h((i(),c("li",{onClick:p((l=>b(t,e)),["stop"]),key:l,class:{active:t.isActive},style:{background:v(k).asideBackground,color:v(k).asideColor}},f(t.meta.title),15,["onClick"])),[[m,t.meta.hidden]]))),128))],512),[[m,e.isActive&&e.hidden]])])),_:2},1024)],14,["onClick"])),[[m,(null==e?void 0:e.children)||!1]]))),128))])],4)}))},__scopeId:"data-v-5abaa4bc"},I=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],z=(()=>{const e=I[0],t={};for(const l of I){if((null==l?void 0:l[1])in document){for(const[s,n]of l.entries())t[e[s]]=n;return t}}return!1})(),q={change:z.fullscreenchange,error:z.fullscreenerror};let B={request:(e=document.documentElement,t)=>new Promise(((l,s)=>{const n=()=>{B.off("change",n),l()};B.on("change",n);const a=e[z.requestFullscreen](t);a instanceof Promise&&a.then(n).catch(s)})),exit:()=>new Promise(((e,t)=>{if(!B.isFullscreen)return void e();const l=()=>{B.off("change",l),e()};B.on("change",l);const s=document[z.exitFullscreen]();s instanceof Promise&&s.then(l).catch(t)})),toggle:(e,t)=>B.isFullscreen?B.exit():B.request(e,t),onchange(e){B.on("change",e)},onerror(e){B.on("error",e)},on(e,t){const l=q[e];l&&document.addEventListener(l,t,!1)},off(e,t){const l=q[e];l&&document.removeEventListener(l,t,!1)},raw:z};Object.defineProperties(B,{isFullscreen:{get:()=>Boolean(document[z.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[z.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[z.fullscreenEnabled])}}),z||(B={isEnabled:!1});var j=B;const M={data:()=>({show:!1,idx:-1}),components:{AnimatedFlash:T},computed:e({},E({skinChoose:e=>e.skinChoose})),methods:{toScreenfull(){j.toggle()},close(){L.confirm("此操作将退出系统, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{R({type:"success",message:"退出成功!",duration:200}),setTimeout((()=>{localStorage.setItem("user",""),localStorage.setItem("Admin-Token",""),this.$router.push("/login")}),200)})).catch((()=>{R({type:"info",message:"已取消"})}))}}},O=b();t("data-v-c2fb1f5e");const H=r("p",null,"Purer-Admin",-1),D={class:"flex-box-a"},N=r("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"},null,-1);l();const U=O(((e,t,l,s,n,a)=>{const u=o("AnimatedFlash");return i(),c("div",{class:"head",style:{background:e.skinChoose.asideBackground}},[r("div",{class:"head-txt",style:{color:e.skinChoose.asideColor}},[H],4),r("div",D,[r("i",{class:"ri-fullscreen-fill",onClick:t[1]||(t[1]=(...e)=>a.toScreenfull&&a.toScreenfull(...e)),style:{color:e.skinChoose.asideColor}},null,4),r("div",{class:"avatar",alt:"",onMousemove:t[6]||(t[6]=e=>n.show=!0),onMouseleave:t[7]||(t[7]=e=>n.show=!1),style:{"margin-left":"20px"}},[N,h(r(u,{animateName:"fadeInDown",duration:"0.3",speed:"ease",count:"1",style:{position:"relative","z-index":"999"}},{default:O((()=>[r("ul",null,[r("li",null,[r("span",{onMousemove:t[2]||(t[2]=e=>n.idx=1),class:{active:1==n.idx}},"工具箱",34)]),r("li",null,[r("span",{onMousemove:t[3]||(t[3]=e=>n.idx=2),class:{active:2==n.idx}},"个人中心",34)]),r("li",null,[r("span",{onMousemove:t[4]||(t[4]=e=>n.idx=3),class:{active:3==n.idx},onClick:t[5]||(t[5]=(...e)=>a.close&&a.close(...e))},"退出",34)])])])),_:1},512),[[m,n.show]])],32)])],4)}));M.render=U,M.__scopeId="data-v-c2fb1f5e";const V={data:()=>({}),computed:e({},E({tabActive:e=>e.app.tabActive,tabsList:e=>e.app.tabsList,keepAliveRoutes:e=>e.user.keepAliveRoutes})),created(){this.$store.dispatch("initTabs")},methods:{tabClick(e){this.$store.dispatch("clickTab",e.index)},tabRemove(e){let t=this.keepAliveRoutes;const l=this.tabsList.findIndex((t=>t.fullPath==e));let s=this.tabsList[l].name;const n=t.findIndex((e=>e==s));t.splice(n,1),e==this.$route.fullPath?this.$store.dispatch("closeCurrentTab",{fullPath:e,type:"current"}):this.$store.dispatch("closeCurrentTab",{fullPath:e,type:"other"})},closeCurrent(){if(1==this.tabsList.length)return R("最少保留一个标签哦！");let e=this.keepAliveRoutes;const t=e.findIndex((e=>e==this.$route.name));e.splice(t,1),this.$store.dispatch("closeCurrentTab",{fullPath:this.$route.fullPath,type:"current"})},closeOther(){this.$store.dispatch("closeOtherTabs",{fullPath:this.$route.fullPath})}}},W=b();t("data-v-711f6549");const Z={class:"tabs-box"},G={class:"tabs-left"},J={class:"tab-label"},K={style:{"margin-left":"5px"}},Q=r("div",{class:"tabs-menu"},[r("i",{class:"ri-apps-fill",style:{"font-size":"20px"}})],-1),X=g("关闭当前"),Y=g("关闭其他");l();const ee=W(((e,t,l,s,n,a)=>{const h=o("el-tab-pane"),m=o("el-tabs"),v=o("el-dropdown-item"),p=o("el-dropdown-menu"),b=o("el-dropdown");return i(),c("div",Z,[r("div",G,[r(m,{"model-value":e.tabActive,type:"card",closable:e.tabsList.length>1,onTabRemove:a.tabRemove,onTabClick:a.tabClick},{default:W((()=>[(i(!0),c(u,null,d(e.tabsList,(e=>(i(),c(h,{key:e.fullPath,name:e.fullPath},{label:W((()=>[r("div",J,[r("i",{class:e.meta.icon},null,2),r("span",K,f(e.meta.title),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["model-value","closable","onTabRemove","onTabClick"])]),r(b,{placement:"bottom-start"},{dropdown:W((()=>[r(p,null,{default:W((()=>[r(v,{onClick:a.closeCurrent,disabled:!(e.tabsList.length>1)},{default:W((()=>[X])),_:1},8,["onClick","disabled"]),r(v,{onClick:a.closeOther,disabled:!(e.tabsList.length>1)},{default:W((()=>[Y])),_:1},8,["onClick","disabled"])])),_:1})])),default:W((()=>[Q])),_:1})])}));V.render=ee,V.__scopeId="data-v-711f6549";const te={components:{Aside:$,Header:M,Tabs:V},data:()=>({pictLoading:!0}),setup(){const e=A(),t=k(!1),l=e=>{t.value=!0,setTimeout((()=>{t.value=!1}),200)};return n((()=>e.currentRoute.value),(e=>{l(e.path)})),a((()=>{l(e.currentRoute.value.path)})),{pictLoading:t}}},le=b();t("data-v-27a623c7");const se={class:"main"},ne={class:"header"},ae={class:"wrap"},oe={class:"left"},ie={class:"content"};l();const ce=le(((e,t,l,s,n,a)=>{const u=o("Header"),d=o("Aside"),v=o("Tabs"),f=o("router-view"),p=o("el-main"),b=C("loading");return i(),c("div",se,[r("div",ne,[r(u)]),r("div",ae,[r("div",oe,[r(d)]),r("div",ie,[r(v),h(r(p,{class:"container","element-loading-background":"rgba(0, 0, 0, 0.1)","element-loading-text":"页面正在加载中"},{default:le((()=>[h(r(f,null,{default:le((({Component:e})=>[(i(),c(x,null,[(i(),c(w(e)))],1024))])),_:1},512),[[m,!s.pictLoading]])])),_:1},512),[[b,s.pictLoading]])])])])}));te.render=ce,te.__scopeId="data-v-27a623c7";export default te;
