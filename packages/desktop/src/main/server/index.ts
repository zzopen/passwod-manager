import { ChildProcess } from '@main/shared/deps'
import { getBackendExecutePath, customExec, logger } from '@main/shared'
import { defaultConfig } from '@main/config'

let childProcess: ChildProcess | undefined

export const startServer = async () => {
  // 检查是不是已经启动了服务，防止后台有多个服务
  await stopServer()
  const exePath = getBackendExecutePath()
  logger.info(['exePath:', getBackendExecutePath()], 'startBackend')

  const command = `nohup ${exePath} -f '${defaultConfig.backend.confFilePath}' >cipher.stdout.log 2>cipher.stderr.log &`
  const [child, res] = await customExec('sh', ['-c', command])
  if (!res || !child) {
    return false
  }

  childProcess = child
  childProcess?.on('SIGHUP', () => {
    logger.info('接收到了stop信号', 'startBackend')
  })

  defaultConfig.backend.pid = childProcess.pid
  return true
}

export const stopServer = async () => {
  if (childProcess) {
    logger.info(`pid:${childProcess.pid}`, 'stopBackend')
    childProcess.kill('SIGINT')
    childProcess = undefined
    defaultConfig.backend.pid = undefined
  }
}
