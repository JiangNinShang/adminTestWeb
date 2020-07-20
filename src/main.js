// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.axios = axios
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http.defaults.baseURL = 'http://192.168.56.1:8090/'
require('echarts')
Vue.use(ElementUI)
Vue.component('chart', ECharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
