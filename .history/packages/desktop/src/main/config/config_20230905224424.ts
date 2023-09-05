import {
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getLocalDataDirPath,
  getBackendDirPath,
  getDbDirPath,
  getBackendConfFilePath,
  getAppHomeDirPath,
  getDbFilePath,
  getBackendLogDirPath,
  getDesktopDirPath
} from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExeDirPath: string
  appHomeDirPath: string
  dataDirPath: string
  backend: Backend
  desktop: Desktop
}

export interface Backend {
  dirPath: string
  dbDirPath: string
  dbFilePath: string
  confFilePath: string
  logDirPath?: string
  port?: number
  pid?: number
}

export interface Desktop {
  dirPath: string
  logDirPath?: string
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  dataDirPath: getLocalDataDirPath(),
  desktop: {
    dirPath: getDesktopDirPath()
  },
  backend: {
    dirPath: getBackendDirPath(),
    dbDirPath: getDbDirPath(),
    dbFilePath: getDbFilePath(),
    confFilePath: getBackendConfFilePath(),
    logDirPath: getBackendLogDirPath()
  }
}
