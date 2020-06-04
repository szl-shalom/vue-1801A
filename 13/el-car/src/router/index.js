import Vue from 'vue'
import VueRouter from 'vue-router'

import Pay from "@/views/Pay.vue";


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: "/list"
  },
  {
    path: '/list',
    name: "List",
    component: () => import("@/views/List"),
  },
  {
    path: '/car',
    name: 'Car',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Car.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "My" */ '@/views/My.vue')
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    // 路由守卫
    beforeEnter: (to, from, next) => {
      // console.log(localStorage.getItem("user"))
      let res = JSON.parse(localStorage.getItem("user"))
      if (res) {
        next()
      } else {
        alert("用户没有登录，请登录！！！")
        next("/my")
      }
    }
  },
  {
    path: "/detail/:spuId",
    name: "Detail",
    component: () => import(/* webpackChunkName: "Detail" */ "@/views/Detail"),
    props: true,
  }
]

routes.push({
  path: "*",
  component: () => import(/* webpackChunkName: "404" */ "@/views/404")
})


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
