import {} from './helper'

export interface Config {
  homePath: string
}

export const defaultConfig: Config = {
  homePath: getCustomHomePath()
}
