import { app } from 'electron'
import { initGlobalData, initAppListenEvent, initRenderer, initIpcMain } from '@main/core/init'
import { nodeProcess, threadId } from '@main/shared'
import { consoleLog } from '@main/shared'

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
  consoleLog('process.pid:', nodeProcess.pid)
  consoleLog('init threadId:', threadId)
  beforeReady()
  whenReady()
}

export { startApp }
