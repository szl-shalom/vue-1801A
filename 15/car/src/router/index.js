import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/List"
}, {
  path: "/list",
  name: "List",
  component: () => import("@/views/List")
}, {
  path: "/car",
  name: "Car",
  component: () => import("@/views/Car")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router