import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 配置路由注册表
const routes = [{
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
  }, {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index")
  }, {
    path: "/myBook",
    name: "MyBook",
    component: () => import("@/views/MyBook"),
    beforeEnter: (to, from, next) => {
      // ...
      // 路由拦截  判断用户是否登录  
      localStorage.getItem("token") ? next() : next("/login")
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router