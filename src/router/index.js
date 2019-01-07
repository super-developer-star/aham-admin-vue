import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard'
import TestPage from '../views/TestPage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'test-page',
          name: 'test-page',
          component: TestPage
        }
      ]
    }
  ]
})

export default router
