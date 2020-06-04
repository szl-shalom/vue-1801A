import Vue from 'vue'
import App from './App.vue'
// 引入注册表
import router from "./router/index.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//挂载路由
}).$mount('#app')
