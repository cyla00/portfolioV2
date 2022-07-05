import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/Main.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
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
    beforeEnter: (to, from) => {
      if(localStorage.length == 0) return { name: 'Login' }
      
      console.log(localStorage.length)
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
