import { getCustomHomePath } from './helper'

export interface Config {
  appDataPath: string
  homePath: string
}

export const defaultConfig: Config = {
  homePath: getCustomHomePath()
}
