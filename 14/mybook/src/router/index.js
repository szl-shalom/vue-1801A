import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index')
  },
  {
    path: '/list',
    name: 'Lndex',
    component: () => import('@/views/List')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    children: [
      // 二级路由重定向   一般匹配父级路径
      {
        path: "/login",
        redirect: "/login/userLogin"
      },
      {
        path: "/login/userLogin",
        name: "UserLogin",
        component: () => import("@/components/UserLogin")
      },
      {
        path: "/login/userRegister",
        name: "UserRegister",
        component: () => import("@/components/UserRegister")
      }
    ]
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail'),
    // 导航守卫
    beforeEnter: (to, from, next) => {
      // to 要跳转的路由
      // from 从哪里跳转
      // console.log(to, from)
      if (from.path === "/list") {
        // 继续往下执行
        next();
      } else {
        next("/")
      }
      // next();
    }
  }, {
    path: "/read",
    name: "Read",
    component: () => import("@/views/Read.vue"),
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem("user");
      user ? next() : next("/login")
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router