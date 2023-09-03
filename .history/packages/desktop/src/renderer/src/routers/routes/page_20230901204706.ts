import { createRouter, createWebHashHistory } from 'vue-router'
import { BUILT_IN_ROUTES, ROOT_ROUTE, CIPHER_ROUTE } from './route'
import type { AppRouteRecordRaw } from '@renderer/types'

const routes: AppRouteRecordRaw = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: CIPHER_ROUTE.path,
  // redirect: '/example',
  component: () => import('@renderer/views/default/layout/layout-default'),
  meta: { title: '项目根路径' },
  children: [
    {
      path: CIPHER_ROUTE.path,
      name: CIPHER_ROUTE.name,
      component: () => import('@renderer/views/default/layout/cipher-page')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@renderer/views/example')
    }
  ]
}

const getRoutes = (): AppRouteRecordRaw[] => {
  return [...BUILT_IN_ROUTES, routes]
}
