import { nodePath, nodeProcess, is } from '@main/shared'
import { BrowserWindow } from 'electron'

let hideWindow: BrowserWindow

function createWindow(): BrowserWindow {
  hideWindow = new BrowserWindow({
    show: false
  })

  windowListener()

  if (is.dev && nodeProcess.env['ELECTRON_RENDERER_URL']) {
    hideWindow.loadURL(nodeProcess.env['ELECTRON_RENDERER_URL'])
  } else {
    hideWindow.loadFile(nodePath.join(__dirname, '../renderer/index.html'))
  }

  return hideWindow
}

function windowListener() {
  if (!hideWindow) {
    return
  }
}

function getHideWindow() {
  return hideWindow
}

function closeHideWindow() {
  hideWindow && hideWindow.close()
}

export { createWindow as createHideWindow, getHideWindow, closeHideWindow }
