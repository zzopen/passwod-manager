import { App } from 'vue'
import { router } from './router'
import { setupRouterGuard } from '@renderer/routers/guard'
import { router } from '@renderer/routers'
export default {
  install(app: App) {
    setupRouter(app)
  }
}

export function setupRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
}
