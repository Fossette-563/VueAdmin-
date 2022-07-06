/**
 * 登录鉴权
 */

import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const menu = store.getters.hasNav
  if (store.getters.token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!menu) {
        const data = await store.dispatch('user/getNav')
        const routes = await store.dispatch('permission/filterRoutes', data)
        routes.forEach((item) => {
          router.addRoute(item)
        })
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
