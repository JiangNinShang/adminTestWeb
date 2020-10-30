import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from '@/store/store.js'
import 'element-ui/lib/theme-chalk/index.css'
import {
  pcaa
} from 'area-data-vue'
import 'area-linkage-vue/dist/index.css'
import AreaLinkageVue from 'area-linkage-vue'
Vue.prototype.axios = axios
Vue.prototype.$http = axios
Vue.prototype.store = store
axios.defaults.headers.post['Content-Type'] = 'application/json;Charset=UTF-8'
Vue.prototype.$http.defaults.baseURL = 'http://localhost:8090/'
Vue.prototype.$pcaa = pcaa;
//设置全局的
require('echarts')
Vue.use(ElementUI)
Vue.use(AreaLinkageVue)
Vue.use(axios)
Vue.component('chart', ECharts)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
