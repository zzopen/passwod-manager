export {}

import type { ShareState } from '@main/typings'
const defaultShareState: ShareState = {
  exeDirPath: '',
  appDataDirPath: '',
  userDataDirPath: '',
  configDirPath: '',
  dataDirPath: '',
  isDev: true,
  worker: undefined,
  backend: {}
}

export { defaultShareState }
