import {
  getCustomHomePath,
  getAppDataPath,
  getAppUserDataPath,
  getAppExePath,
  getDbRootPath,
  getBackendConfPath
} from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExePath: string
  homePath: string
  dbPath: string
  backendConfFilePath: string
  backendPort: number
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExePath: getAppExePath(),
  homePath: getCustomHomePath(),
  dbPath: getDbRootPath(),
  backendConfFilePath: getBackendConfPath(),
  backendPort: -1
}
