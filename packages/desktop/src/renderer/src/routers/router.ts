import { createRouter, createWebHashHistory } from '@renderer/shared/deps'
import { getRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }
