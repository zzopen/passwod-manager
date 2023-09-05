import { consoleLog, isMac, app, BrowserWindow, electronApp, optimizer } from '@main/shared'
import { getMainWindow, createMainWindow } from '@main/core/wins'
import { stopBackend } from '../backend1'

async function init() {
  consoleLog('init-app-on', 'start')
  singleInstance()
  electronAppSet()
  browserWindowCreated()
  windowAllClosed()
  activate()
  beforeQuit()
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
  app.on('activate', async function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      await createMainWindow()
    }

    const mainWindow = getMainWindow()
    if (!mainWindow) {
      await createMainWindow()
    } else if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }

    mainWindow?.show()
  })
}
const windowAllClosed = () => {
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (isMac) {
      return
    }

    app.quit()
  })
}

const beforeQuit = () => {
  app.on('before-quit', async () => {
    consoleLog('beforeQuit', 'start')
    await stopBackend()
    consoleLog('beforeQuit', 'end')
  })
}

const singleInstance = () => {
  if (!app.requestSingleInstanceLock()) {
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
