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
  dbFilePath: string
  backendConfFilePath: string
  backendPort: number
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  homePath: getCustomHomePath(),
  dbDirPath: getDbDirPath(),
  dbFilePath: getDbFilePath(),
  backendConfFilePath: getBackendConfPath(),
  backendPort: -1
}
