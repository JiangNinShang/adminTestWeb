import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import czmm from '@/components/czmm.vue'
import home from '@/components/home.vue'
import info from '@/components/info.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/czmm',
      name: 'czmm',
      component: czmm
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
