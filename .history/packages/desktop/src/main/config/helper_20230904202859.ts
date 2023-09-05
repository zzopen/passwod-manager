import { app, isMac, isLinux, isWin, nodePath } from '@main/shared'
import {
  CUSTOM_HOME_DIR_NAME,
  DB_DIR_NAME,
  BACKEND_CONF_FILE_NAME,
  DB_FILE_NAME,
  BACKEND_DIR_NAME
} from './constant'

// 获取自定义数据目录
export const getCustomHomePath = (): string => {
  let homePath = '/'
  if (isMac || isLinux) {
    homePath = `${getAppHomeDirPath()}/${CUSTOM_HOME_DIR_NAME}`
  } else if (isWin) {
    homePath = `${getAppExeDirPath()}/${CUSTOM_HOME_DIR_NAME}`
  }

  return nodePath.resolve(homePath)
}

export const getBackendDirPath = (): string => {
  return `${getCustomHomePath()}/${BACKEND_DIR_NAME}`
}

export const getDbDirPath = (): string => {
  return `${getBackendDirPath()}/${DB_DIR_NAME}`
}

export const getDbFilePath = (): string => {
  return `${getDbDirPath()}/${DB_FILE_NAME}`
}

export const getBackendConfFilePath = (): string => {
  return `${getBackendDirPath()}/${BACKEND_CONF_FILE_NAME}`
}

/**** app ****/
export const getAppDataPath = (): string => {
  return app.getPath('appData')
}

export const getAppUserDataPath = (): string => {
  return app.getPath('userData')
}

export const getAppExeDirPath = (): string => {
  return nodePath.dirname(app.getPath('exe'))
}

export const getAppHomeDirPath = (): string => {
  return app.getPath('home')
}
