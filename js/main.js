const app=Vue.createApp({mixins:Object.values(mixins),data:()=>({loading:!0,hiddenMenu:!1,showMenuItems:!1,menuColor:!1,scrollTop:0,renderers:[]}),created(){document.addEventListener("DOMContentLoaded",(()=>{this.loading=!1}))},mounted(){window.addEventListener("scroll",this.handleScroll,!0),this.render()},methods:{render(){for(let e of this.renderers)e()},handleScroll(){let e=this.$refs.homePostsWrap,t=document.documentElement.scrollTop;this.scrollTop<t?(this.hiddenMenu=!0,this.showMenuItems=!1):this.hiddenMenu=!1,e&&(t<=window.innerHeight-100?this.menuColor=!0:this.menuColor=!1,e.style.top=t<=400?"-"+t/5+"px":"-80px"),this.scrollTop=t}}});app.mount("#layout");