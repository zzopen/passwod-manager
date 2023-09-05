import { consoleLog } from '@main/shared'
import { createMainWindow } from '@main/core/wins/main-win'

async function init() {
  consoleLog('init-renderer', '触发')
  createMainWindow()
}

export { init as initRenderer }
