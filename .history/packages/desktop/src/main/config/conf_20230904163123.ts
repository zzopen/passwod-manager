import { getCustomHomePath, getAppDataPath, getAppUserDataPath, getAppExePath } from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExePath: string
  homePath: string
  dbPath: string
  backendPort: number
}

export const defaultConfig: Config = {
  homePath: getCustomHomePath(),
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExePath: getAppExePath(),
  backendPort: -1
}
