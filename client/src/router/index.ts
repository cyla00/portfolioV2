import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/Main.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import { nextTick } from 'vue'
const axios = require('axios').default

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: async (to, from) => {
      if(localStorage.length == 0 || localStorage.getItem('id') == "") return { name: 'Login' }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from) => {
      if(localStorage.getItem('id')) return { name: 'Admin' }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
