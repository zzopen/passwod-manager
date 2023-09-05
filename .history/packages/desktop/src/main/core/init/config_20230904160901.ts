import { app } from 'electron'
import {
  isWin,
  isDev,
  consoleLog,
  shareState,
  // readBackendConfig,
  // portfinder,
  nodePath,
  nodeProcess,
  fse
} from '@main/shared'
import { defaultConfig } from '@main/config'

async function init() {
  consoleLog('init-config', 'start')
  await Promise.all([initShareState(), modifyBackendConfig()])
  global.shareState = shareState
  _log()
  consoleLog('init-config', 'end')
}

async function _fillConfig() {
  nodeProcess.env.DIST = nodePath.join(__dirname, '../dist')
  nodeProcess.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : nodePath.join(nodeProcess.env.DIST, '../public')

  shareState.isDev = isDev
  shareState.appDataDirPath = app.getPath('appData')
  shareState.userDataDirPath = app.getPath('userData')
  shareState.exeDirPath = nodePath.dirname(app.getPath('exe'))

  let parentDirPath = ''
  if (isWin) {
    parentDirPath = shareState.exeDirPath
  } else {
    parentDirPath = shareState.userDataDirPath
  }

  if (isDev) {
    parentDirPath = nodePath.resolve('/Users/xulei/Downloads/password-manager')
  }

  shareState.parentDirPath = parentDirPath
  shareState.customUserDataDirPath = nodePath.join(
    shareState.parentDirPath,
    `/${USER_DATA_DIR_NAME}`
  )
  shareState.backend.sqlite.dbName = USER_DEFAULT_DB_NAME
  shareState.backend.sqlite.dirPath = nodePath.join(
    shareState.customUserDataDirPath,
    shareState.backend.sqlite.dirPath,
    USER_DB_DIR_NAME
  )
  shareState.backend.sqlite.dbFilePath = nodePath.join(
    shareState.backend.sqlite.dirPath,
    `${shareState.backend.sqlite.dbName}.db`
  )

  const options = { mode: 0o2755 }
  await fse.ensureDir(shareState.customUserDataDirPath, options)
  await fse.ensureDir(shareState.backend.sqlite.dirPath, options)
}

// async function getAvailablePort() {
//   const getPortsPromise = new Promise((resolve, reject) => {
//     portfinder.getPorts(2, { port: 7000, stopPort: 9000 }, (err, ports) => {
//       if (err) {
//         reject()
//       }

//       resolve(ports)
//     })
//   })

//   const port = (await getPortsPromise) as number[]
//   consoleLog('getAvailablePort', port)
//   shareState.backend.port = port[0].toString()
//   shareState.backend.healthPort = port[1].toString()
// }

async function modifyBackendConfig() {
  // await getAvailablePort()
  // const backendConfig = await readBackendConfig()
  // backendConfig.Host = shareState.backend.host
  // backendConfig.Port = Number(shareState.backend.port)
  // backendConfig.DevServer.Port = Number(shareState.backend.healthPort)
  // backendConfig.Sqlite.DbFilePath = shareState.backend.sqlite.dbFilePath
  // await backendConfig.write()
}

function _log() {
  consoleLog('shareState', global.shareState)
}

export { init as initConfig }
