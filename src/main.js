import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.use(ElementUI,zhLocale);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
