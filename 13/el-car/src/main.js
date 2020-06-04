import Vue from 'vue'
import App from './App.vue'
import router from './router'

import footerNav from "@/components/footerNav"
import headerNav from "@/components/headerNav"
import "@babel/polyfill";
import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.prototype.$bus = new Vue();

Vue.component("footer-nav", footerNav)
Vue.component("header-nav", headerNav)
Vue.config.errorHandler = false
Vue.config.productionTip = false;

import "@/assets/scss/reset.scss";



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
