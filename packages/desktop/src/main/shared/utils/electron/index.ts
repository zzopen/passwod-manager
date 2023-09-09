import { app, nodePath } from '@main/shared/deps'

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
