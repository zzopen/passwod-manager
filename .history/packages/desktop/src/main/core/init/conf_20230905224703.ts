import { logger, getAvailablePorts, fse, writeToYaml } from '@main/shared'
import { defaultConfig, defaultBackendConfig } from '@main/config'

async function init() {
  logger.info('start', 'init-config')
  await _fillConfig()
  logger.info(['defaultConfig', defaultConfig], 'init-config')
  await makeDir()
  logger.info('end', 'init-config')
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
  // 确保数据根目录存在
  if (defaultConfig.dataDirPath) {
    await fse.ensureDir(defaultConfig.dataDirPath, options)
  }

  // 确保数据库目录存在
  if (defaultConfig.desktop.logDirPath) {
    await fse.ensureDir(defaultConfig.desktop.logDirPath, options)
  }

  // 确保数据库目录存在
  if (defaultConfig.backend.dbDirPath) {
    await fse.ensureDir(defaultConfig.backend.dbDirPath, options)
  }

  // 确保后端服务的日志目录存在
  if (defaultConfig.backend.logDirPath) {
    await fse.ensureDir(defaultConfig.backend.logDirPath, options)
  }

  await _rewriteBackendConf()
}

async function _rewriteBackendConf() {
  // 此处动态修改conf
  defaultBackendConfig.Port = defaultConfig.backend.port
  defaultBackendConfig.Log!.Path = defaultConfig.backend.logDirPath
  defaultBackendConfig.Sqlite!.DbFilePath = defaultConfig.backend.dbFilePath

  // 创建yaml配置文件
  await writeToYaml(defaultConfig.backend.confFilePath, defaultBackendConfig)
}

export { init as initConfig }
