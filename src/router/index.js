import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../entire/home.vue'),
    children: [
      {
        path: '/departmentList',
        name: 'departmentList',
        component: () => import('../views/departmentList'),
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/userList'),
      },
      {
        path: '/roleList',
        name: 'roleList',
        component: () => import('../views/roleList'),
      },
      {
        path: '/menuList',
        name: 'menuList',
        component: () => import('../views/menuList'),
      },
      {
        path: '/goodCategory',
        name: 'goodCategory',
        component: () => import('../views/goodCategory'),
      },
      {
        path: '/goodsBrand',
        name: 'goodsBrand',
        component: () => import('../views/goodsBrand'),
      },
      {
        path: '/systemCode',
        name: 'systemCode',
        component: () => import('../views/systemCode'),
      },
      {
        path: '/document',
        name: 'document',
        component: () => import('../views/document'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
