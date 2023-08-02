import { app } from 'electron'
import { portfinder, nodePath, nodeProcess, fse } from '@main/utils'
import { isWin, isDev, consoleLog, shareState, getSqliteFilePath, backendConfig } from '@main/utils'
import { USER_DATA_DIR_NAME, USER_DB_DIR_NAME, USER_DEFAULT_DB_NAME } from '@common/configs'

async function init() {
  consoleLog('global-data', '触发')
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

  let configDirPath = ''
  if (isWin) {
    configDirPath = shareState.exeDirPath
  } else {
    configDirPath = shareState.userDataDirPath
  }

  if (isDev) {
    configDirPath = nodePath.resolve('/Users/xulei/Downloads')
  }

  shareState.configDirPath = configDirPath
  shareState.dataDirPath = nodePath.join(configDirPath, `/${USER_DATA_DIR_NAME}`)
  shareState.backend.sqliteDbName = USER_DEFAULT_DB_NAME
  shareState.backend.sqliteDirPath = USER_DB_DIR_NAME
  shareState.backend.sqliteDbFilePath = getSqliteFilePath()

  const options = { mode: 0o2755 }
  await fse.ensureDir(shareState.dataDirPath, options)
  await fse.ensureDir(shareState.backend.sqliteDirPath, options)

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
