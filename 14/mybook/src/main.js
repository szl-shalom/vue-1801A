import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from "axios";
// 引入element
import ElementUI from 'element-ui';
// 引入element样式
import 'element-ui/lib/theme-chalk/index.css';


// 使用elementUi插件
Vue.use(ElementUI);

Vue.prototype.$http = Axios;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
