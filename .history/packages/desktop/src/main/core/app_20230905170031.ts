import { initConfig, initAppOn, initRenderer } from '@main/core/init'
import { app, consoleLog } from '@main/shared'
import { startServer, stopServer } from '@main/server'

const beforeReady = async () => {
  consoleLog('beforeReady', 'start')
  initAppOn()
  await initConfig()
  if (!(await startServer())) {
    app.quit()
  }

  consoleLog('beforeReady', 'end')
}

const whenReady = async () => {
  consoleLog('whenReady', 'start')
  await app.whenReady()
  consoleLog('whenReady', 'end')
  //initRenderer()
}

const startApp = async () => {
  handleGlobalException()
  beforeReady()
  whenReady()
}

const handleGlobalException = async () => {
  process.on('uncaughtException', (error) => {
    consoleLog('Caught exception:', error)
    process.exit(-1)
  })

  process.on('unhandledRejection', (reason, promise) => {
    consoleLog('Unhandled Rejection at:', promise, 'reason:', reason)
  })

  process.on('exit', async (code: number) => {
    consoleLog('主进程 退出:', code)
    await stopServer()
  })
}

export { startApp }
