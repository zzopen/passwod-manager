import { App } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import GlobalComponents from '@renderer/components'
import 'virtual:uno.css'

export default {
  install(app: App) {
    setupGlobal(app)
  }
}

export function setupGlobal(app: App) {
  app.use(GlobalComponents)
  app.use(VueDOMPurifyHTML)
}
