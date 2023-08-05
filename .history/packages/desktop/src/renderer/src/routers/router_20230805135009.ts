import { createRouter, createWebHashHistory } from 'vue-router'
import { BUILT_IN_ROUTES, LAYOUT_COMPONENT, ROOT_ROUTE, HOME_ROUTE } from './route'
import type { AppRouteRecordRaw } from '@renderer/shared'

const routes: AppRouteRecordRaw = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: HOME_ROUTE.path,
  component: LAYOUT_COMPONENT,
  meta: { title: '项目根路径' },
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@renderer/business/views/components/layout/layout-right')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@renderer/business/views/example')
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
