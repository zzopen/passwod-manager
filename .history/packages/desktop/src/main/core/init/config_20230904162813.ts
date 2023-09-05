import { app } from 'electron'
import {
  consoleLog,
  getAvailablePorts,
  readBackendConfig,
  portfinder,
  nodePath,
  nodeProcess,
  fse
} from '@main/shared'
import { defaultConfig } from '@main/config'

async function init() {
  consoleLog('init-config', 'start')
  await Promise.all([_fillConfig(), _rewriteBackendConf()])
  global.shareState = shareState
  consoleLog('init-config', 'end')
  consoleLog('init-config', defaultConfig)
}

const _fillConfig = async () => {
  nodeProcess.env.DIST = nodePath.join(__dirname, '../dist')
  nodeProcess.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : nodePath.join(nodeProcess.env.DIST, '../public')

  const ports = await getAvailablePorts(50000, 50100, 2)
  if (ports.length === 0) {
    throw new Error('无可用端口')
  }

  defaultConfig.backendPort = ports[0]

  const options = { mode: 0o2755 }
  await fse.ensureDir(shareState.customUserDataDirPath, options)
  await fse.ensureDir(shareState.backend.sqlite.dirPath, options)
}

async

async function _rewriteBackendConf() {
  // await getAvailablePort()
  // const backendConfig = await readBackendConfig()
  // backendConfig.Host = shareState.backend.host
  // backendConfig.Port = Number(shareState.backend.port)
  // backendConfig.DevServer.Port = Number(shareState.backend.healthPort)
  // backendConfig.Sqlite.DbFilePath = shareState.backend.sqlite.dbFilePath
  // await backendConfig.write()
}

export { init as initConfig }
