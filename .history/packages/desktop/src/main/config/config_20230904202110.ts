import {
  getCustomHomePath,
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getDbRootPath,
  getBackendConfPath,
  getAppHomeDirPath
} from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExeDirPath: string
  appHomeDirPath: string
  homePath: string
  dbDirPath: string
  backendConfFilePath: string
  backendPort: number
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  homePath: getCustomHomePath(),
  dbDirPath: getDbRootPath(),
  backendConfFilePath: getBackendConfPath(),
  backendPort: -1
}
