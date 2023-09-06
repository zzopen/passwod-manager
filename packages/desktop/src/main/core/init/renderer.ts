import { logger } from '@main/shared'
import { createMainWindow } from '../wins/main-win'

async function init() {
  logger.info('start', 'init-renderer')
  createMainWindow()
  logger.info('end', 'init-renderer')
}

export { init as initRenderer }
