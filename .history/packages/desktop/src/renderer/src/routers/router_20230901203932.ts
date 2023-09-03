import { createRouter, createWebHashHistory } from 'vue-router'

// [...BUILT_IN_ROUTES, routes] as unknown as AppRouteRecordRaw[]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }
