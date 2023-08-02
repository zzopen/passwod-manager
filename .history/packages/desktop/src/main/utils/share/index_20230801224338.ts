import type { ShareState } from '@main/typings'
const defaultShareState: ShareState = {
  exeDirPath: '',
  appDataDirPath: '',
  userDataDirPath: '',
  configDirPath: '',
  dataDirPath: '',
  isDev: true,
  backend: {
    host: '',
    port: '',
    healthPort: '',
    sqliteDirPath: '',
    sqliteDbName: ''
  }
}

export { defaultShareState }
const shareState: ShareState = { ...defaultShareState }
export { shareState }
