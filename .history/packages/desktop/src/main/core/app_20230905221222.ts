import { initConfig, initAppOn, initRenderer } from '@main/core/init'
import { app, logger } from '@main/shared'
import { startServer, stopServer } from '@main/server'

const beforeReady = async () => {
  logger.info('start', 'beforeReady')
  initAppOn()
  await initConfig()
  if (!(await startServer())) {
    app.quit()
  }

  logger.info('end', 'beforeReady')
}

const whenReady = async () => {
  logger.info('start', 'whenReady')
  await app.whenReady()
  logger.info('end', 'whenReady')
  //initRenderer()
}

const startApp = async () => {
  handleGlobalException()
  beforeReady()
  whenReady()
}

const handleGlobalException = async () => {
  process.on('uncaughtException', (error) => {
    logger.info(error, 'Caught exception')
    process.exit(-1)
  })

  process.on('unhandledRejection', (reason, promise) => {
    logger.info('Unhandled Rejection at:', promise, 'reason:', reason)
  })

  process.on('exit', async (code: number) => {
    logger.info('主进程 退出:', code)
    await stopServer()
  })
}

export { startApp }
