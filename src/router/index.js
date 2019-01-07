import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Dashboard from '../views/Dashboard'
import Catalogue from '../views/ManageContent/Catalogue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'catalogue',
          name: 'catalogue',
          component: Catalogue
        }
      ]
    }
  ]
})

export default router
