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

function getSqlite() {
  return global.shareState.backend.sqlite
}

export { getBackend, getSqlite }
