import { app } from 'electron'
import { initGlobalData, initAppOn, initRenderer } from '@main/core/init'
import { consoleLog } from '@main/shared'

const beforeReady = async () => {
  initAppOn()
  await initGlobalData()
  // initIpcMain()
}

const whenReady = async () => {
  consoleLog('whenReady', '结束')
  await app.whenReady()
  consoleLog('whenReady', '结束')
  initRenderer()
}

const startApp = async () => {
  beforeReady()
  //whenReady()
}

export { startApp }
