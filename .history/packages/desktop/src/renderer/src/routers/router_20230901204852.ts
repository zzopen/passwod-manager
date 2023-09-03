import { createRouter, createWebHashHistory } from '@renderer/shared'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }
