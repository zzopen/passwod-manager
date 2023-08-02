import type { ShareState } from '@main/typings'

const defaultShareState: ShareState = {
  exeDirPath: '',
  appDataDirPath: '',
  userDataDirPath: '',
  parentDirPath: '',
  customUserDataDirPath: '',
  isDev: true,
  backend: {
    host: '',
    port: '',
    healthPort: '',
    sqlite: {
      dirPath: '',
      dbName: '',
      dbFilePath: ''
    }
  }
}

const shareState: ShareState = { ...defaultShareState }

export { defaultShareState, shareState }

function getBackend() {
  return global.shareState.backend
}

function getSqliteFilePath() {
  return `${global.shareState.backend.sqliteDirPath}/${global.shareState.backend.sqliteDbName}.db`
}

export { getBackend, getSqliteFilePath }
