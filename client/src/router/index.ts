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
      await axios.post(`http://WIN-7OOIKM6PDBD:3000/api/idcheck`, {id: localStorage.getItem('id')}).then((inner_res :any) => {
        if(inner_res.status !== 200) {
          localStorage.removeItem('id')
          return { name: 'Login' }
        }
      })
      .catch((err :any) => {
        localStorage.removeItem('id')
        return { name: 'Login' }
      })
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: async (to, from) => {
      if(!localStorage.getItem('id')) return
      await axios.post(`http://WIN-7OOIKM6PDBD:3000/api/idcheck`, {id: localStorage.getItem('id')}).then((inner_res :any) => {
        if(inner_res.status !== 200) {
          localStorage.removeItem('id')
          return
        }
      })
      .catch((err :any) => {
        localStorage.removeItem('id')
        return
      })
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
