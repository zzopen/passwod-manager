import { logger, getAvailablePorts, fse, writeToYaml, appQuit } from '@main/shared'
import { defaultConfig, defaultBackendConfig } from '@main/config'

async function init() {
  logger.info('start', 'init-config')
  await _rewriteBackendConf()
  logger.info(['defaultConfig', defaultConfig], 'init-config')
  logger.info('end', 'init-config')
}

const _findPorts = async () => {
  const ports = await getAvailablePorts(50000, 50100, 2)
  if (ports.length === 0) {
    throw new Error('无可用端口')
  }

  defaultConfig.backend.port = ports[0]
}

async function _rewriteBackendConf() {
  await _findPorts()
  // 此处动态修改conf
  defaultBackendConfig.Port = defaultConfig.backend.port
  defaultBackendConfig.Log!.Path = defaultConfig.backend.logDirPath
  defaultBackendConfig.Sqlite!.DbFilePath = defaultConfig.backend.dbFilePath

  // 创建yaml配置文件
  const res = await writeToYaml(defaultConfig.backend.confFilePath, defaultBackendConfig)
  if (!res) {
    appQuit()
  }
}

export const makeDir = async () => {
  const options = { mode: 0o2755 }

  const paths = [
    defaultConfig.dataDirPath,
    defaultConfig.backend.dirPath,
    defaultConfig.desktop.dirPath,
    defaultConfig.desktop.logDirPath,
    defaultConfig.backend.dbDirPath,
    defaultConfig.backend.logDirPath
  ]

  for (const _path of paths) {
    if (_path) {
      await fse.ensureDir(_path, options)
    }
  }
}

export { init as initConfig }
