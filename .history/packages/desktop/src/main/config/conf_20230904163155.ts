import {
  getCustomHomePath,
  getAppDataPath,
  getAppUserDataPath,
  getAppExePath,
  getDbRootPath
} from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExePath: string
  homePath: string
  dbPath: string
  backendPort: number
}

export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExePath: getAppExePath(),
  homePath: getCustomHomePath(),
  dbPath: getDbRootPath(),
  backendPort: -1
}
