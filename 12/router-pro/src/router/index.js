import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  // 一般根路径都会重定向
  {
    path: "/",
    // 重定向
    redirect: "/home"
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    // 配置参数
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 将路由的参数解构到props属性
    props: true,

  },
  // 匹配404页面
  {
    path: "*",
    component: () => import("../views/NotDefind.vue"),
  },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
