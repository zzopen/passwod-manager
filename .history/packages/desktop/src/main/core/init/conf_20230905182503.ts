import { consoleLog, getAvailablePorts, fse, writeToYaml } from '@main/shared'
import { defaultConfig, defaultBackendConfig } from '@main/config'

async function init() {
  consoleLog('init-config', 'start')
  await _fillConfig()
  consoleLog('init-config', 'defaultConfig', defaultConfig)
  await makeDir()
  consoleLog('init-config', 'end')
}

const _fillConfig = async () => {
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

  if (defaultConfig.backend.logDirPath) {
    await fse.ensureDir(defaultConfig.backend.logDirPath, options)
  }

  await _rewriteBackendConf()
}

async function _rewriteBackendConf() {
  // 此处动态修改conf
  defaultBackendConfig.Port = defaultConfig.backend.port
  defaultBackendConfig.Log!.Path = defaultConfig.backend.logFilePath
  defaultBackendConfig.Sqlite!.DbFilePath = defaultConfig.backend.dbFilePath

  // 创建yaml配置文件
  await writeToYaml(defaultConfig.backend.confFilePath, defaultBackendConfig)
}

export { init as initConfig }
