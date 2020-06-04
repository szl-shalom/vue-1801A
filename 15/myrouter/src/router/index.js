import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/index"
  },
  {
    path: "/list",
    name: "List",
    component: () => import("@/views/List"),
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   console.log(from.path === "/index")
    //   from.path === "/index" ? next() : next("/index")
    // }
  }, {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index")
  }, {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home"),
    children: [{
        path: "/home",
        redirect: "/home/login"
      },
      {
        path: "/home/register",
        name: "Register",
        component: () => import("@/components/Register")
      }, {
        path: "/home/login",
        name: "Login",
        component: () => import("@/components/Login")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {

  // 路由拦截  拦截 /list
  // if (to.path === "/list") {

  //   // 必须登录
  //   let user = localStorage.getItem("user");
  //   console.log(12312)
  //   user ? next() : next("/home/login")

  //   // 必须是从首页调转
  //   // console.log(from.path === "/index")
  //   // from.path === "/index" ? next() : next("/index") 

  // }

  // 默认跳转路由
  next();
})

export default router