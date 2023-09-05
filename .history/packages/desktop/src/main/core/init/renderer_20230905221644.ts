import { logger } from '@main/shared'
import { createMainWindow } from '@main/core/wins/main-win'

async function init() {
  logger.info('start', 'init-renderer')
  createMainWindow()
  logger.info('init-renderer', 'end')
}

export { init as initRenderer }
