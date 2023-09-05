import { app } from 'electron'
import {
  isWin,
  isDev,
  consoleLog,
  shareState,
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

async function _fillConfig() {
  nodeProcess.env.DIST = nodePath.join(__dirname, '../dist')
  nodeProcess.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : nodePath.join(nodeProcess.env.DIST, '../public')

  const options = { mode: 0o2755 }
  await fse.ensureDir(shareState.customUserDataDirPath, options)
  await fse.ensureDir(shareState.backend.sqlite.dirPath, options)
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
  shareState.backend.port = port[0].toString()
  shareState.backend.healthPort = port[1].toString()
}

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
