import { App } from 'vue'
import { setupGlobal } from './global'
import { setupError } from './error'
import { setupAntDesignVue } from './ant-design'
import { setupStore } from './pinia'
import { setupRouter } from './vue-router'
import { initReq } from '@renderer/apis'

export async function setupPlugins(app: App) {
  await initReq()
  setupGlobal(app)
  setupError(app)
  setupAntDesignVue(app)
  setupStore(app)
  setupRouter(app)
}
