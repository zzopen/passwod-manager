import { consoleLog } from '@main/shared/utils'
import { createMainWindow } from '@main/core/modules/main-win'

async function init() {
  consoleLog('business-init', '触发')
  createMainWindow()
}

export { init as initRenderer }
