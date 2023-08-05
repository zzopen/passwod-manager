import { type App } from 'vue'
import { router } from '@renderer/routers'
import { setupRouterGuard } from '@renderer/routers/guard'

export default {
  install(app: App) {
    setupRouter(app)
  }
}

export function setupRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
}
