/**** 全局共享对象 ****/
interface ShareState {
  exeDirPath: string
  userDataDirPath: string
  appDataDirPath: string
  parentDirPath: string
  customUserDataDirPath: string
  backend: Backend
  isDev: boolean
  Worker?: any
}

interface Backend {
  host: string
  port: string
  healthPort: string
  sqlite: Sqlite
}

interface Sqlite {
  dirPath: string
  dbName: string
  dbFilePath: string
}

export type { ShareState, Backend, Sqlite }
