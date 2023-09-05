import { getCustomHomePath, getAppDataPath, getUserDataPath, getExePath } from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExePath: string
  homePath: string
}

export const defaultConfig: Config = {
  homePath: getCustomHomePath(),
  appDataPath: getAppDataPath(),
  appUserDataPath: getUserDataPath(),
  appExePath: getExePath()
}
