import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Page from '../views/Page.vue'
import SystemConfig from '../views/SystemConfig.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name:'home',
      path: '/',
      component: Home
    },
    {
      path: '/page',
      component: Page
    },
    {
      path: '/system_config',
      component: SystemConfig
    }
  ]
})
