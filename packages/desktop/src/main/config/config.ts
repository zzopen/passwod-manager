import {
  getAppDataPath,
  getAppUserDataPath,
  getAppExeDirPath,
  getLocalDataDirPath,
  getLdServerDirPath,
  getLdServerDbDirPath,
  getLdServerConfFilePath,
  getAppHomeDirPath,
  getLdServerDbFilePath,
  getLdServerLogDirPath,
  getLdDesktopDirPath,
  getLdDesktopLogDirPath,
  isDev
} from '@main/shared'

export interface Config {
  appDataPath: string
  appUserDataPath: string
  appExeDirPath: string
  appHomeDirPath: string
  dataDirPath: string
  appWillQuit: boolean
  openDevTools: boolean
  server: Server
  desktop: Desktop
}

export interface Server {
  dirPath: string
  dbDirPath: string
  dbFilePath: string
  confFilePath: string
  logDirPath?: string
  callLocal: boolean
  callBinary: boolean
  executableFileName?: string
  executableFilePath?: string
  host: string
  port?: number
  pid?: number
  baseUrl: string
}

export interface Desktop {
  dirPath: string
  logDirPath?: string
}

export let defaultConfig: Config = {} as Config

export const initDefaultConfig = async () => {
  defaultConfig = {
    appDataPath: getAppDataPath(),
    appUserDataPath: getAppUserDataPath(),
    appExeDirPath: getAppExeDirPath(),
    appHomeDirPath: getAppHomeDirPath(),
    dataDirPath: getLocalDataDirPath(),
    appWillQuit: false,
    openDevTools: false,
    desktop: {
      dirPath: getLdDesktopDirPath(),
      logDirPath: getLdDesktopLogDirPath()
    },
    server: {
      host: '0.0.0.0',
      baseUrl: '',
      port: 50000,
      dirPath: getLdServerDirPath(),
      dbDirPath: getLdServerDbDirPath(),
      dbFilePath: getLdServerDbFilePath(),
      confFilePath: getLdServerConfFilePath(),
      logDirPath: getLdServerLogDirPath(),
      executableFileName: '',
      executableFilePath: '',
      callBinary: true,
      callLocal: false
    }
  }

  if (isDev) {
    defaultConfig.server.callLocal = true
    defaultConfig.server.callBinary = false
  }
}
