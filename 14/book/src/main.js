import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = Axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  components:{
    ElementUI,
  }
}).$mount('#app')
