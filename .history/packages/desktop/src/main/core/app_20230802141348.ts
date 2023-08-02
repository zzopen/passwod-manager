import { nodeProcess, threadId } from '@main/utils'

import { app } from 'electron'
import { initGlobalData, initAppListenEvent, initRenderer, initIpcMain } from '@main/core/init'
import { consoleLog } from '@main/utils'

consoleLog('process.pid:', nodeProcess.pid)
consoleLog('init threadId:', threadId)

const beforeReady = async () => {
  initAppListenEvent()
  await initGlobalData()
  initIpcMain()
}

const whenReady = async () => {
  await app.whenReady()
  initRenderer()
}

const startApp = async () => {
  beforeReady()
  whenReady()
}

export { startApp }
