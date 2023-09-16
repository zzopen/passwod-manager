import { app, nodeProcess } from '@main/shared/deps'
import { initLogger, appQuit, logger } from '@main/shared'
import { initDefaultConfig } from '@main/config'
import { makeDir, initConfig, initIpc, initAppOn, startServer, initRenderer } from './init'

const whenReady = async () => {
  logger.info('start', 'whenReady')
  await app.whenReady()
  logger.info('end', 'whenReady')
  initRenderer()
}

const startApp = async () => {
  handleGlobalException()
  // 顺序不能修改
  await initDefaultConfig()
  await makeDir()
  await initLogger()
  // await initLowdb()
  initAppOn()
  initIpc()
  await initConfig()
  const startServerSuccess = await startServer()
  if (!startServerSuccess) {
    appQuit()
  }

  whenReady()
}

const handleGlobalException = async () => {
  nodeProcess.on('uncaughtException', (error) => {
    logger.info(error, 'UnCaught exception')
    // process.exit(-1)
  })

  nodeProcess.on('unhandledRejection', (reason, promise) => {
    logger.info(reason, 'Unhandled Rejection reason')
    logger.info(promise, 'Unhandled Rejection promise')
  })
}

export { startApp }
