import type { App } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate);

export default {
  install(app: App) {
    setupStore(app)
  }
}

export function setupStore(app: App) {
  app.use(pinia)
}
