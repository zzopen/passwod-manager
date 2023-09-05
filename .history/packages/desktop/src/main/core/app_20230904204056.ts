import { app, consoleLog } from '@main/shared'
import { initConfig, initAppOn, initRenderer } from '@main/core/init'

const beforeReady = async () => {
  consoleLog('beforeReady', 'start')
  await initAppOn()
  await initConfig()
  consoleLog('beforeReady', 'end')
}

const whenReady = async () => {
  consoleLog('whenReady', 'start')
  await app.whenReady()
  consoleLog('whenReady', 'end')
  initRenderer()
}

const startApp = async () => {
  beforeReady()
  whenReady()
}

export { startApp }
