import { app, BrowserWindow } from 'electron'
import { createMainWindow } from '@main/core/wins/main-win'
import { consoleLog, electronApp, optimizer } from '@main/shared'
import { getMainWindow } from '@main/core/wins'

async function init() {
  consoleLog('init-app-on', 'start')
  singleInstance()
  electronAppSet()
  browserWindowCreated()
  windowAllClosed()
  activate()
  consoleLog('init-app-on', 'end')
}

const electronAppSet = () => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.cipher')
}

const browserWindowCreated = () => {
  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
}

const activate = () => {
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
}
const windowAllClosed = () => {
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}

const singleInstance = () => {
  const gotTheLock = app.requestSingleInstanceLock()
  if (!gotTheLock) {
    app.quit()
  } else {
    app.on('second-instance', () => {
      const mainWindow = getMainWindow()
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore()
        }
        mainWindow.focus()
      }
    })
  }
}

export { init as initAppOn }
