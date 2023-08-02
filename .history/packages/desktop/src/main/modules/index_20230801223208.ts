import { registMainWindow } from './main-win'
import { registHideWindow } from './hide-win'

let isRegister = false
async function registerModules() {
  if (isRegister) {
    return
  }

  registMainWindow()
  // registHideWindow()
  isRegister = true
}

export { registerModules }
