import {
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getLocalDataDirPath,
  getBackendDirPath,
  getDbDirPath,
  getBackendConfFilePath,
  getAppHomeDirPath,
  getDbFilePath,
  getBackendLogDirPath,
  getDesktopDirPath,
  getDesktopLogDirPath
} from '@main/shared'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExeDirPath: string
  appHomeDirPath: string
  dataDirPath: string
  backend: Backend
  desktop: Desktop
}

export interface Backend {
  dirPath: string
  dbDirPath: string
  dbFilePath: string
  confFilePath: string
  logDirPath?: string
  port?: number
  pid?: number
}

export interface Desktop {
  dirPath: string
  logDirPath?: string
}
console.log(444)
export const defaultConfig: Config = {
  appDataPath: getAppDataPath(),
  appUserDataPath: getAppUserDataPath(),
  appExeDirPath: getAppExeDirPath(),
  appHomeDirPath: getAppHomeDirPath(),
  dataDirPath: getLocalDataDirPath(),
  desktop: {
    dirPath: getDesktopDirPath(),
    logDirPath: getDesktopLogDirPath()
  },
  backend: {
    dirPath: getBackendDirPath(),
    dbDirPath: getDbDirPath(),
    dbFilePath: getDbFilePath(),
    confFilePath: getBackendConfFilePath(),
    logDirPath: getBackendLogDirPath()
  }
}
