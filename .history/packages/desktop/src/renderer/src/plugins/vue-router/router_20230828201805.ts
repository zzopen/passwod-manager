import { createRouter, createWebHashHistory } from 'vue-router'
import { BUILT_IN_ROUTES, ROOT_ROUTE, CIPHER_ROUTE } from '@renderer/routers'
import type { AppRouteRecordRaw } from '@renderer/routers'

const routes: AppRouteRecordRaw = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: CIPHER_ROUTE.path,
  component: () => import('@renderer/views/layout/layout-default'),
  meta: { title: '项目根路径' },
  children: [
    {
      path: CIPHER_ROUTE.path,
      name: CIPHER_ROUTE.name,
      component: () => import('@renderer/views/cipher/cipher-page')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@renderer/views/example')
    }
  ]
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...BUILT_IN_ROUTES, routes] as unknown as AppRouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }
