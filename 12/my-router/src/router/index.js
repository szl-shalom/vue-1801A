// 路由

// 引入插件 
import VueRouter from "vue-router";
// 引入vue
import Vue from "vue";
// 引入组件
import Home from "../components/Home.vue";

// 使用插件
Vue.use(VueRouter)

// 声明路由注册表
const routes = [{
    // 匹配的路径
    path: "/",
    component: Home
},
{
    // 匹配的路径
    path: "/list",
    component: () => import("../components/List.vue")
},
{
    // 匹配的路径
    path: "/search",
    component: () => import("../components/Search.vue")
}]

// 实例化路由
const router = new VueRouter({
    routes, //名字必须是routes
})


// 抛出
export default router; 
