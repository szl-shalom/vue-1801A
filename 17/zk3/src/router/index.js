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
    component: () => import( /* webpackChunkName: "about" */ '@/views/Index.vue'),
    children: [{
      path: "/index/baoxian",
      name: "Baoxian",
      component: () => import("@/views/Baoxian"),
      beforeEnter: (to, from, next) => {
        localStorage.getItem("user") ? next() : next(false)
      }
    }, {
      path: "/index/list",
      name: "List",
      component: () => import("@/views/List")
    }, {
      path: "/index/air",
      name: "Air",
      component: () => import("@/views/Air")
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router