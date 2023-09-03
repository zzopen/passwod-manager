import { consoleLog } from '@main/shared/utils'
import { createMainWindow } from '@main/core/wins/main-win'

async function init() {
  consoleLog('business-init', '触发')
  createMainWindow()
}

export { init as initRenderer }
