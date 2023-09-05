import { app } from 'electron'
import { initGlobalData, initAppListenEvent, initRenderer } from '@main/core/init'
import { consoleLog, nodeProcess, threadId } from '@main/shared'

const beforeReady = async () => {
  initAppListenEvent()
  await initGlobalData()
  // initIpcMain()
}

const whenReady = async () => {
  await app.whenReady()
  consoleLog('whenReady', '触发')
  initRenderer()
}

const startApp = async () => {
  beforeReady()
  //whenReady()
}

export { startApp }
