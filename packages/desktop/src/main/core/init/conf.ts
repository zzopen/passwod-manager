import { fse } from '@main/shared/deps'
import { logger, getServerPort, getServerBaseUrl, writeToYaml, appQuit } from '@main/shared'
import { defaultConfig, defaultServerConfFile } from '@main/config'

const init = async () => {
  logger.info('start', 'init-config')
  await _generateServerConfFile()
  logger.info(['defaultConfig', defaultConfig], 'init-config')
  logger.info('end', 'init-config')
}

const _findPorts = async () => {
  const ports = await getServerPort()
  defaultConfig.server.port = ports[0]
  defaultConfig.server.baseUrl = getServerBaseUrl(ports[0])
}

async function _generateServerConfFile() {
  await _findPorts()
  // 此处动态修改conf
  defaultServerConfFile.Host = defaultConfig.server.host
  defaultServerConfFile.Port = defaultConfig.server.port
  defaultServerConfFile.Log!.Path = defaultConfig.server.logDirPath
  defaultServerConfFile.Custom!.Sqlite!.DbFilePath = defaultConfig.server.dbFilePath

  // 创建yaml配置文件
  const res = await writeToYaml(defaultConfig.server.confFilePath, defaultServerConfFile)
  if (!res) {
    appQuit()
  }
}

export const makeDir = async () => {
  const options = { mode: 0o2755 }

  const paths = [
    defaultConfig.dataDirPath,
    defaultConfig.server.dirPath,
    defaultConfig.server.logDirPath,
    defaultConfig.desktop.dirPath,
    defaultConfig.desktop.logDirPath,
    defaultConfig.server.dbDirPath
  ]

  for (const _path of paths) {
    if (_path) {
      await fse.ensureDir(_path, options)
    }
  }
}

export { init as initConfig }
