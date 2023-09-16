import { app, nodePath, BrowserWindow, IpcMainEvent } from '@main/shared/deps'

export const appQuit = async () => {
  app.quit()
}

export const appExit = async () => {
  app.exit()
}

export const getAppPath = (): string => {
  return app.getAppPath()
}

export const getAppDataPath = (): string => {
  return app.getPath('appData')
}

export const getAppUserDataPath = (): string => {
  return app.getPath('userData')
}

export const getAppExeDirPath = (): string => {
  return nodePath.dirname(app.getPath('exe'))
}

export const getAppHomeDirPath = (): string => {
  return app.getPath('home')
}

export const getAppDownloadDirPath = (): string => {
  return app.getPath('downloads')
}

export const getAppDesktopDirPath = (): string => {
  return app.getPath('desktop')
}

export const getWindowByEvent = (event: IpcMainEvent): BrowserWindow | undefined => {
  const webContentsId = event.sender.id
  for (const currentWin of BrowserWindow.getAllWindows()) {
    if (currentWin.webContents.id === webContentsId) {
      return currentWin
    }
  }

  return
}
