import {
  shell,
  BrowserWindow,
  globalShortcut,
  nodePath,
  nodeProcess,
  is,
  nativeImage
} from '@main/shared/deps'
import type { Event } from '@main/shared/deps'
import { isDev, logger } from '@main/shared'
import icon from '@resources/icons/icon.ico?asset'

import type { Nullable } from '@common/types'
import { defaultConfig } from '@main/config'

let mainWindow: Nullable<BrowserWindow>

const MAIN_WINDOW_MIN_WIDTH = 1045
const MAIN_WINDOW_MIN_HEIGHT = 670

const createWindow = async (): Promise<BrowserWindow> => {
  mainWindow = new BrowserWindow({
    width: MAIN_WINDOW_MIN_WIDTH,
    height: MAIN_WINDOW_MIN_HEIGHT,
    minWidth: MAIN_WINDOW_MIN_WIDTH,
    minHeight: MAIN_WINDOW_MIN_HEIGHT,
    x: 200,
    y: 90,
    show: false,
    frame: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hiddenInset', //没有标题栏，只有关闭和最小化那三个按钮
    title: '',
    icon: nativeImage.createFromPath(icon),
    webPreferences: {
      preload: nodePath.join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: true,
      contextIsolation: true, // 是否开启隔离上下文
      nodeIntegrationInWorker: false
      // nodeIntegration: true // 渲染进程使用Node API
    }
  })

  windowListener()

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && nodeProcess.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(nodeProcess.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(nodePath.join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

function windowListener() {
  if (!mainWindow) {
    return
  }

  mainWindow.setMenu(null)

  globalShortcut.register('CommandOrControl+Shift+j', function () {
    if (isDev) {
      switchMainWindowDevTools()
    }
  })

  // Test active push message to Renderer-process.
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  mainWindow.on('ready-to-show', () => {
    logger.info('主窗口准备好显示了', 'mainWindow ready-to-show')
    showMainWindow()
  })

  mainWindow.on('close', (event: Event) => {
    logger.info('', 'mainWindow close')
    if (defaultConfig.appWillQuit) {
      mainWindow = null
    } else {
      event.preventDefault()
      mainWindow?.hide()
    }
  })

  mainWindow.on('closed', () => {
    logger.info('', 'mainWindow closed')
    mainWindow = null
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.on('will-resize', (event, newBounds, details) => {
    logger.info(event, 'mainWindow will-resize-event')
    logger.info(newBounds, 'mainWindow will-resize-newBounds')
    logger.info(details, 'mainWindow will-resize-details')
  })

  mainWindow.on('resized', () => {
    logger.info('', 'mainWindow resized')
  })
}

function getMainWindow() {
  return mainWindow
}

function showMainWindow() {
  if (!mainWindow) {
    return
  }

  mainWindow.show()
}

function closeMainWindow() {
  if (!mainWindow) {
    return
  }

  mainWindow.close()
}

function switchMainWindowDevTools() {
  if (!mainWindow) {
    return
  }

  if (defaultConfig.openDevTools) {
    mainWindow.webContents.closeDevTools()
    defaultConfig.openDevTools = false
  } else {
    mainWindow.webContents.openDevTools()
    defaultConfig.openDevTools = true
  }
}

export {
  createWindow as createMainWindow,
  getMainWindow,
  closeMainWindow,
  switchMainWindowDevTools,
  showMainWindow
}
