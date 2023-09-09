import { nodeProcess, ChildProcess } from '@main/shared/deps'
import { getServerExecuteableFilePath, backgroundRun, logger } from '@main/shared'
import { defaultConfig } from '@main/config'

let childProcess: ChildProcess | undefined

export const startServer = async () => {
  if (defaultConfig.server.callLocal) {
    return true
  }

  if (!defaultConfig.server.callBinary) {
    return true
  }

  // 检查是不是已经启动了服务，防止后台有多个服务
  await stopServer()
  const exePath = getServerExecuteableFilePath()
  logger.info(['exePath:', getServerExecuteableFilePath()], 'startServer')

  // 经过测试发现，直接启动服务的话，此进程就是服务的进程，而且还跨平台
  // 采用nohup的话，windows平台写法会不一样，需要兼容，而且服务进程和node进程不是一个
  // 还需要想获取服务进程id的办法，需要解决的问题随之增多
  const [child, res] = await backgroundRun(`${exePath}`, ['-f', defaultConfig.server.confFilePath])
  if (!res || !child) {
    return false
  }

  childProcess = child
  childProcess?.on('SIGTERM', () => {
    logger.info('stopServer', '接收到了stop信号')
  })

  defaultConfig.server.pid = childProcess.pid
  return true
}

export const stopServer = async () => {
  if (childProcess) {
    logger.info(`pid:${childProcess.pid}`, 'stopServer')
    nodeProcess.kill(childProcess.pid!, 'SIGTERM')
    childProcess = undefined
    defaultConfig.server.pid = undefined
  }
}
