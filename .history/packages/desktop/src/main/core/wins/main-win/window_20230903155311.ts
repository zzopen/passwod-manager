import { app, nodePath, nodeProcess, is, nativeImage, isLinux, isMac, isWin } from '@main/shared'
import { shell, BrowserWindow, globalShortcut } from 'electron'
import cipherIco from './cipher.ico?asset'

let mainWindow: BrowserWindow
const MAIN_WINDOW_MIN_WIDTH = 1045
const MAIN_WINDOW_MIN_HEIGHT = 670

function createWindow(): BrowserWindow {
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

  const iconNativeImg = nativeImage.createFromPath(cipherIco)
  if (isLinux || isWin) {
    mainWindow.setIcon(iconNativeImg)
  } else if (isMac) {
    if (app.dock) {
      console.log('asdads:', iconNativeImg)
      app.dock.setIcon(cipherIco)
      app.dock.show().catch((e) => console.error(e))
    }
  }

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
    openDevTools()
  })

  // Test active push message to Renderer-process.
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  mainWindow.on('ready-to-show', () => {
    console.log('主窗口准备好显示了')
    showMainWindow()
    openDevTools()
    // console.log(app.getAppMetrics())
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.on('will-resize', (event, newBounds, details) => {
    console.log('-------- will-resize --------')
    console.log('event:', event)
    console.log('newBounds:', newBounds)
    console.log('details:', details)
  })

  mainWindow.on('resized', () => {
    console.log('-------- resized --------')
  })
}

function getMainWindow() {
  return mainWindow
}

function showMainWindow() {
  mainWindow && mainWindow.show()
}

function closeMainWindow() {
  mainWindow && mainWindow.close()
}

function openDevTools() {
  mainWindow && mainWindow.webContents.openDevTools()
}

export {
  createWindow as createMainWindow,
  getMainWindow,
  closeMainWindow,
  openDevTools,
  showMainWindow
}
