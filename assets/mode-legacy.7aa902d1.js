System.register(["./vendor-legacy.de6210dc.js"],(function(e){"use strict";var n,t,r,u,o,c,i,l;return{setters:[function(e){n=e.a,t=e.b,r=e.c,u=e.e,o=e.h,c=e.k,i=e.U,l=e.X}],execute:function(){var s=e("default",{components:{dialogVue:{expose:[],props:["title"],setup:function(e){var c=e.title,i={render:function(){return o("button",{style:{color:"#333",border:"1px solid #ccc"},class:"",id:"",onClick:s},[o("p",l.value),o("span",c)])}},l=n(0),s=function(){l.value++};return function(e,n){return t(),r("div",null,[u(i)])}}}},data:function(){return{}}}),a=l(" render组件模式 "),d=l(" 命令式调用组件 "),f=l("调用");s.render=function(e,n,o,l,s,v){var p=c("dialogVue"),g=c("el-button");return t(),r("div",null,[a,u(p,{title:"我是测试传值"}),d,u(g,{onClick:n[1]||(n[1]=function(n){return e.$msg("测试",2e3)})},{default:i((function(){return[f]})),_:1})])}}}}));
