import { createRouter, createWebHashHistory } from 'vue-router'
import { BUILT_IN_ROUTES, LAYOUT_COMPONENT, ROOT_ROUTE, HOME_ROUTE } from './route'
import type { AppRouteRecordRaw } from './route'

const User = {
  template: '<div>asdasd}</div>'
}

const routes: AppRouteRecordRaw = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: HOME_ROUTE.path,
  component: LAYOUT_COMPONENT,
  meta: { title: '项目根路径' },
  children: [
    {
      path: HOME_ROUTE.path,
      name: HOME_ROUTE.name,
      component: () => User
    }
    // {
    //   path: '/example',
    //   name: 'example',
    //   component: () => import('@renderer/views/example')
    // }
  ]
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...BUILT_IN_ROUTES, routes] as unknown as AppRouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }