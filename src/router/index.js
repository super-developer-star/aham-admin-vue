import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Dashboard from '../views/Dashboard'

import LearnersList from '../views/ManagePeople/Learners/LearnersList'
import LearnerEdit from '../views/ManagePeople/Learners/LearnerEdit'

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
          path: 'learners',
          component: Main,
          children: [
            {
              path: '',
              name: 'learners',
              component: LearnersList
            },
            {
              path: ':id',
              name: 'learner-edit',
              component: LearnerEdit
            }
          ]
        },
        {
          path: 'manage-money',
          name: 'manage-money',
          component: Dashboard
        },
        {
          path: 'manage-locations',
          name: 'manage-locations',
          component: Dashboard
        },
        {
          path: 'catalogue',
          component: Main,
          children: [
            {
              path: '',
              name: 'catalogue',
              component: Catalogue
            }
          ]
        }
      ]
    }
  ]
})

export default router
