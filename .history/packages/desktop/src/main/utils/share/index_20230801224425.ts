import type { ShareState, Backend } from '@main/typings'

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

function getBackend(): Backend {}
export { defaultShareState }
const shareState: ShareState = { ...defaultShareState }
export { shareState }
