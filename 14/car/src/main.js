import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.prototype.$bus = new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
