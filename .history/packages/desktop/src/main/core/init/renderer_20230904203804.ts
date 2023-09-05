import { consoleLog } from '@main/shared'
import { createMainWindow } from '@main/core/wins/main-win'

async function init() {
  consoleLog('init-renderer', 'start')
  createMainWindow()
  consoleLog('init-renderer', 'end')
}

export { init as initRenderer }
