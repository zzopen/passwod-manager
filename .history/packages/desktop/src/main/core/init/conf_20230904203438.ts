import {
  app,
  consoleLog,
  getAvailablePorts,
  nodePath,
  nodeProcess,
  fse,
  readFromYaml,
  writeToYaml
} from '@main/shared'
import { defaultConfig, defaultBackendConfig } from '@main/config'

async function init() {
  consoleLog('init-config', 'start')
  await _fillConfig()
  consoleLog('init-config', 'defaultConfig', defaultConfig)
  await makeDir()
  consoleLog('init-config', 'end')
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

  defaultConfig.backend.port = ports[0]
}

const makeDir = async () => {
  const options = { mode: 0o2755 }
  if (defaultConfig.homePath) {
    await fse.ensureDir(defaultConfig.homePath, options)
  }

  if (defaultConfig.dbDirPath) {
    await fse.ensureDir(defaultConfig.dbDirPath, options)
  }

  if (defaultConfig.backend.logFilePath) {
    await fse.ensureDir(defaultConfig.backend.logFilePath, options)
  }

  await _rewriteBackendConf()
}

async function _rewriteBackendConf() {
  defaultBackendConfig.Port = defaultConfig.backend.port
  defaultBackendConfig.Port = defaultConfig.backend.port
  await writeToYaml(defaultConfig.backend.confFilePath, defaultBackendConfig)
  // const backendConfig = await readBackendConfig()
  // backendConfig.Host = shareState.backend.host
  // backendConfig.Port = Number(shareState.backend.port)
  // backendConfig.DevServer.Port = Number(shareState.backend.healthPort)
  // backendConfig.Sqlite.DbFilePath = shareState.backend.sqlite.dbFilePath
  // await backendConfig.write()
}

export { init as initConfig }
