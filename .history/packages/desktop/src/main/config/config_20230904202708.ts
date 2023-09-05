import {
  getCustomHomePath,
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getDbDirPath,
  getBackendConfPath,
  getAppHomeDirPath,
  getDbFilePath
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
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  homePath: getCustomHomePath(),
  dbDirPath: getDbDirPath(),
  backend: {
    dirPath: '',
    dbFilePath: getDbFilePath(),
    confFilePath: getBackendConfPath()
  }
}
