import { app, BrowserWindow, electronApp, optimizer, Menu, nativeImage } from '@main/shared/deps'
import type { Event } from '@main/shared/deps'
import { logger, appQuit, appExit, isMac } from '@main/shared'
import { getMainWindow, createMainWindow } from '@main/core/wins'
import { stopServer } from './server'
import { delay } from '@common/shared'
import { defaultConfig } from '@main/config'
import macIcon from '@build/icon.png?asset'

const init = async () => {
  logger.info('start', 'init-app-on')
  singleInstance()
  electronAppSet()
  browserWindowCreated()
  windowAllClosed()
  activate()
  beforeQuit()
  willQuit()
  setDockIcon()
  logger.info('end', 'init-app-on')
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
    logger.info(['window数量为:', BrowserWindow.getAllWindows().length], 'activate window')

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
    logger.info('window全部关闭', 'window-all-closed')
    if (isMac) {
      return
    }

    appQuit()
  })
}

const beforeQuit = () => {
  app.on('before-quit', async () => {
    logger.info('start', 'beforeQuit')
    defaultConfig.appWillQuit = true
    logger.info('end', 'beforeQuit')
  })
}

const willQuit = () => {
  app.on('will-quit', async (event: Event) => {
    event.preventDefault()
    logger.info('start', 'willQuit')
    await stopServer()
    await delay(1000)
    logger.info('end', 'willQuit')
    appExit()
  })
}

const singleInstance = () => {
  if (!app.requestSingleInstanceLock()) {
    appQuit()
  } else {
    app.on('second-instance', () => {
      console.log('second-instance')
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

const setDockIcon = async () => {
  const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      click() {}
    },
    {
      label: 'New Window with Settings',
      submenu: [{ label: 'Basic' }, { label: 'Pro' }]
    },
    { label: 'New Command...' }
  ])

  if (isMac) {
    if (app.dock) {
      app.dock.setMenu(dockMenu)
      // 代码里使用icon.icns无效，可能是专门给打包工具使用的吧
      app.dock.setIcon(nativeImage.createFromPath(macIcon))
      app.dock.show().catch((e) => console.error('显示dock抛出异常:', e))
    }
  }
}

export { init as initAppOn }
