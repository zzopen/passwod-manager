import { getCustomHomePath } from './helper'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExePath: string
  homePath: string
}

export const defaultConfig: Config = {
  homePath: getCustomHomePath()
}
