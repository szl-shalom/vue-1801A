import Vue from 'vue'
import App from './App.vue'
// 引入Axios
import Axios from "axios";

// 添加原型属性  $http 
Vue.prototype.$http = Axios

// 来一个公共事件管理
Vue.prototype.$bus = new Vue();


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
