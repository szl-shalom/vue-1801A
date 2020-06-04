import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


const routes = [{
    path: "/",
    redirect: "/index"
}, {
    path: "/index",
    name: "Index",
    component: () => import("@/views/index")
}, {
    path: "/list",
    name: "List",
    component: () => import("@/views/list"),
}, {
    path: "/my",
    name: "My",
    component: () => import("@/views/my")
}, {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    children: [{
        path: "/login",
        redirect: "/login/userRegister"
    }, {
        path: "/login/userRegister",
        name: "UserRegister",
        component: () => import("@/views/userRegister")
    },
    {
        path: "/login/userLogin",
        name: "UserLogin",
        component: () => import("@/views/userLogin")
    }]
}, {
    path: "/defail",
    name: "Defail",
    component: () => import("@/views/defail")
}]


const router = new VueRouter({
    routes,
    mode: "history"
})


export default router;