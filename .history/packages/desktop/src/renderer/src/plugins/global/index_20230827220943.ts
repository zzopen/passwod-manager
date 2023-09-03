import { App } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import MyComponents from '@renderer/components'
import 'virtual:uno.css'

export default {
  install(app: App) {
    setupGlobal(app)
  }
}

export function setupGlobal(app: App) {
  app.use(MyComponents)
  app.use(VueDOMPurifyHTML)
}
