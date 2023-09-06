import { nodePath } from '@main/shared/deps'
import { isMac, isDev, isProd, isLinux, isWin } from './env'
import { getAppHomeDirPath, getAppExeDirPath } from './electron'
import {
  LOCAL_DATA_DIR_NAME,
  DB_DIR_NAME,
  BACKEND_CONF_FILE_NAME,
  DB_FILE_NAME,
  BACKEND_DIR_NAME,
  BACKEND_LOG_DIR_NAME,
  DESKTOP_DIR_NAME,
  DESKTOP_LOG_DIR_NAME
} from '@main/config/constant'

export const getDesktopDirAbsPath = (): string => {
  return nodePath.resolve(__dirname, '../../')
}

export const getMainDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopDirAbsPath(), '../main')
}

export const getBackendDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopDirAbsPath(), '../backend')
}

/**** 自定义存储路径 ****/
export const getLocalDataDirPath = (): string => {
  let rootDirPath = '/'
  if (isDev) {
    rootDirPath = getDesktopDirAbsPath()
  } else if (isProd) {
    if (isMac || isLinux) {
      rootDirPath = getAppHomeDirPath()
    } else if (isWin) {
      rootDirPath = getAppExeDirPath()
    }
  }

  const dataDirPath = `${rootDirPath}/${LOCAL_DATA_DIR_NAME}`
  return nodePath.resolve(dataDirPath)
}

export const getBackendDirPath = (): string => {
  return `${getLocalDataDirPath()}/${BACKEND_DIR_NAME}`
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

export const getBackendLogDirPath = (): string => {
  return `${getBackendDirPath()}/${BACKEND_LOG_DIR_NAME}`
}

export const getBackendOutDirAbsPath = (): string => {
  return nodePath.resolve(getBackendDirAbsPath(), 'cli/cipher-out')
}

export const getDesktopDirPath = (): string => {
  return `${getLocalDataDirPath()}/${DESKTOP_DIR_NAME}`
}

export const getDesktopLogDirPath = (): string => {
  return `${getDesktopDirPath()}/${DESKTOP_LOG_DIR_NAME}`
}

export const getBackendExecutePath = (): string => {
  let binName = ''
  if (isMac) {
    binName = 'cipher-darwin'
  } else if (isWin) {
    binName = 'cipher-win'
  } else if (isLinux) {
    binName = 'cipher-linux'
  } else {
    return ''
  }

  return nodePath.resolve(getBackendOutDirAbsPath(), binName)
}
