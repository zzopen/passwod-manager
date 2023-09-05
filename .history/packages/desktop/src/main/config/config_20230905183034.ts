import {
  getCustomDataDirPath,
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getDbDirPath,
  getBackendConfFilePath,
  getAppHomeDirPath,
  getDbFilePath,
  getBackendDirPath,
  getBackendLogDirPath
} from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExeDirPath: string
  appHomeDirPath: string
  dataDirPath: string
  dbDirPath: string
  backend: Backend
  desktop: Desktop
}

export interface Backend {
  dirPath: string
  confFilePath: string
  dbFilePath: string
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
  dataDirPath: getCustomDataDirPath(),
  dbDirPath: getDbDirPath(),
  desktop: {
    dirPath: ''
  },
  backend: {
    dirPath: getBackendDirPath(),
    dbFilePath: getDbFilePath(),
    confFilePath: getBackendConfFilePath(),
    logDirPath: getBackendLogDirPath()
  }
}
