import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from "axios";
// 引入全局组件
import headerNav from "@/components/HeaderNav";
import footerNav from "@/components/FooterNav";
// 全局注册组件
Vue.component("headerNav", headerNav)
Vue.component("footerNav", footerNav)
// 引入scss文件
import "@/assets/scss/reset.scss";
// 将Axios绑定在原型
Vue.prototype.$http = Axios
// 注册事件中心
Vue.prototype.$bus = new Vue();


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
