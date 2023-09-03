/**** 全局共享对象 ****/
export interface ShareState {
  exeDirPath: string
  userDataDirPath: string
  appDataDirPath: string
  parentDirPath: string
  customUserDataDirPath: string
  backend: Backend
  isDev: boolean
  Worker?: any
}

export interface Backend {
  host: string
  port: string
  healthPort: string
  sqlite: Sqlite
}

export interface Sqlite {
  dirPath: string
  dbName: string
  dbFilePath: string
}
