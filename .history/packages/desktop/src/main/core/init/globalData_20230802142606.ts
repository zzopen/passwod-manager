import { app } from 'electron'
import {
  isWin,
  isDev,
  consoleLog,
  shareState,
  getSqliteFilePath,
  backendConfig,
  portfinder,
  nodePath,
  nodeProcess,
  fse
} from '@main/utils'
import { USER_DATA_DIR_NAME, USER_DB_DIR_NAME, USER_DEFAULT_DB_NAME } from '@common/configs'

async function init() {
  consoleLog('globalData init', '触发')
  await Promise.all([initShareState(), getAvailablePort()])
  _log()
}

async function initShareState() {
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
    parentDirPath = nodePath.resolve('/Users/xulei/Downloads')
  }

  shareState.parentDirPath = parentDirPath
  shareState.customUserDataDirPath = nodePath.join(
    shareState.parentDirPath,
    `/${USER_DATA_DIR_NAME}`
  )
  shareState.backend.sqlite.dbName = USER_DEFAULT_DB_NAME
  shareState.backend.sqlite.dirPath = USER_DB_DIR_NAME
  shareState.backend.sqlite.dbFilePath = getSqliteFilePath()

  const options = { mode: 0o2755 }
  await fse.ensureDir(shareState.customUserDataDirPath, options)
  await fse.ensureDir(shareState.backend.sqlite.dirPath, options)

  global.shareState = shareState
}

async function getAvailablePort() {
  const getPortsPromise = new Promise((resolve, reject) => {
    portfinder.getPorts(2, { port: 7000, stopPort: 9000 }, (err, ports) => {
      if (err) {
        reject()
      }

      resolve(ports)
    })
  })

  const port = (await getPortsPromise) as number[]
  consoleLog('getAvailablePort', port)
  global.shareState.backend.port = port[0].toString()
  global.shareState.backend.healthPort = port[1].toString()
}

async function writeBackendConfig() {
  backendConfig.Port = Number(global.shareState.backend.port)
  backendConfig.DevServer.Port = Number(global.shareState.backend.healthPort)

  backendConfig.Sqlite.DbFilePath = global.shareState.backend.sqliteDbFilePath

  backendConfig.save()
}

function _log() {
  consoleLog('shareState', global.shareState)
}

export { init as initGlobalData }
