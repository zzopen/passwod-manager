import { nodePath } from '@main/shared/deps'
import { isMac, isDev, isProd, isLinux, isWin } from './env'
import { getAppHomeDirPath, getAppExeDirPath } from './electron'
import * as constant from '@main/config/constant'
import { getAvailablePorts } from './port'
import { BUILD_SERVER_DIR_NAME } from '@main/config'

export const getPackagesDirPath = (): string => {
  return nodePath.resolve(__dirname, '../../../')
}

export const getDesktopProjectDirPath = (): string => {
  return nodePath.resolve(getPackagesDirPath(), `./${constant.DESKTOP_PROJECT_DIR_NAME}`)
}

export const getServerProjectDirPath = (): string => {
  return nodePath.resolve(getPackagesDirPath(), `./${constant.SERVER_PROJECT_DIR_NAME}`)
}

export const getMainDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopProjectDirPath(), `./src/main`)
}

export const getResourcesDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopProjectDirPath(), './resources')
}

/**** 用户数据自定义存储路径 ****/
export const getLocalDataDirPath = (): string => {
  let rootPath = '/'
  if (isDev) {
    rootPath = getDesktopProjectDirPath()
  } else if (isProd) {
    if (isMac || isLinux) {
      rootPath = getAppHomeDirPath()
    } else if (isWin) {
      rootPath = getAppExeDirPath()
    }
  }

  const dataDirPath = `${rootPath}/${constant.LOCAL_DATA_DIR_NAME}`
  return nodePath.resolve(dataDirPath)
}

export const getLdServerDirPath = (): string => {
  return `${getLocalDataDirPath()}/${constant.LD_SERVER_DIR_NAME}`
}

export const getLdServerDbDirPath = (): string => {
  return `${getLdServerDirPath()}/${constant.LD_SERVER_DB_DIR_NAME}`
}

export const getLdServerDbFilePath = (): string => {
  return `${getLdServerDbDirPath()}/${constant.LD_SERVER_DB_FILE_NAME}`
}

export const getLdServerConfFilePath = (): string => {
  return `${getLdServerDirPath()}/${constant.LD_SERVER_CONF_FILE_NAME}`
}

export const getLdServerLogDirPath = (): string => {
  return `${getLdServerDirPath()}/${constant.LD_SERVER_LOG_DIR_NAME}`
}

export const getLdDesktopDirPath = (): string => {
  return `${getLocalDataDirPath()}/${constant.LD_DESKTOP_DIR_NAME}`
}

export const getLdDesktopLogDirPath = (): string => {
  return `${getLdDesktopDirPath()}/${constant.LD_DESKTOP_LOG_DIR_NAME}`
}

export const getServerExecuteableFileName = (): string => {
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

  return binName
}

export const getServerExecuteableDirPath = (): string => {
  if (isDev) {
    return getResourcesDirAbsPath()
  }

  if (isMac) {
    return nodePath.resolve(getAppExeDirPath(), `../${BUILD_SERVER_DIR_NAME}`)
  }

  return `${getAppExeDirPath()}/${BUILD_SERVER_DIR_NAME}`
}

export const getServerExecuteableFilePath = (): string => {
  return nodePath.resolve(getServerExecuteableDirPath(), getServerExecuteableFileName())
}

export const getServerPort = async () => {
  if (isDev) {
    return [50000]
  }

  const ports = await getAvailablePorts(50000, 50100, 2)
  if (ports.length === 0) {
    throw new Error('无可用端口')
  }

  return ports
}

export const getServerBaseUrl = (port: number) => {
  return `http://127.0.0.1:${port}`
}
