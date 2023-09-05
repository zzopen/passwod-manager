import { app, isMac, isLinux, isWin } from '@main/shared'
import { CUSTOM_HOME_DIR_NAME, DB_DIR_NAME } from './constant'

// 获取自定义数据目录
export const getCustomHomePath = (): string => {
  if (isMac || isLinux) {
    return `~/${CUSTOM_HOME_DIR_NAME}`
  } else if (isWin) {
    return `${getExePath()}/${CUSTOM_HOME_DIR_NAME}`
  } else {
    return ``
  }
}

export const getDbRootPath = (): string => {
  return `${getCustomHomePath()}/${DB_DIR_NAME}`
}

export const getAppDataPath = (): string => {
  return app.getPath('appData')
}

export const getUserDataPath = (): string => {
  return app.getPath('userData')
}

export const getExePath = (): string => {
  return app.getPath('exe')
}
