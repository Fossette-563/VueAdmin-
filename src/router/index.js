import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/index'
import user from './modules/sys/user'
import roles from './modules/sys/roles'
import menu from './modules/sys/menu'
import dict from './modules/sys/dict'
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    redirect: '/index',
    component: layout,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404')
      }
    ]
  }
]
export const privateRoutes = [user, roles, menu, dict]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
