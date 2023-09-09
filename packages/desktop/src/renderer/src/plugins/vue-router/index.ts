import { App } from 'vue'
import { setupRouterGuard } from '@renderer/routers/guard'
import { router } from '@renderer/routers'

export default {
  install(app: App) {
    setupRouter(app)
  }
}

export const setupRouter = async (app: App) => {
  app.use(router)
  setupRouterGuard(router)
}
