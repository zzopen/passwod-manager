import { initConfig, initAppOn, initRenderer } from '@main/core/init'
import { app, consoleLog } from '@main/shared'
import { startBackend } from './backend'

const beforeReady = async () => {
  consoleLog('beforeReady', 'start')
  await initAppOn()
  await initConfig()
  if (!(await startBackend())) {
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
  beforeReady()
  whenReady()
}

export { startApp }
