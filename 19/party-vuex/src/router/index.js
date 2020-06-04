import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/createAction",
}, {
  path: "/createAction",
  name: "CreateAction",
  component: () => import("@/views/CreateAction")
}, {
  path: "/action",
  name: "Action",
  component: () => import("@/views/Action")
}, {
  path: "/signUp/:id",
  name: "SignUp",
  component: () => import("@/views/SignUp")
}, {
  path: "/person/:id",
  name: "Person",
  component: () => import("@/views/Person")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router