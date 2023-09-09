import { logger } from '@main/shared'
import { createMainWindow } from '../wins/main-win'

const init = async () => {
  logger.info('start', 'init-renderer')
  await createMainWindow()
  logger.info('end', 'init-renderer')
}

export { init as initRenderer }
