import {
  getCustomHomePath,
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
  homePath: string
  dbDirPath: string
  backend: Backend
}

export interface Backend {
  dirPath: string
  confFilePath: string
  dbFilePath: string
  logFilePath?: string
  port?: number
  pid?: number
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  homePath: getCustomHomePath(),
  dbDirPath: getDbDirPath(),
  backend: {
    dirPath: getBackendDirPath(),
    dbFilePath: getDbFilePath(),
    confFilePath: getBackendConfFilePath(),
    logFilePath: getBackendLogDirPath()
  }
}
