import { customExec, consoleLog, ChildProcess } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

let childProcess: ChildProcess | undefined

export const startBackend = async () => {
  // 检查是不是已经启动了服务，防止后台有多个服务
  await stopBackend()
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())

  const binCommand = `${exePath} -f ${defaultConfig.backend.confFilePath} >cipher.stdout.log 2>cipher.stderr.log &`
  const [child, res] = await customExec(binCommand)
  if (!res || !child) {
    return false
  }

  childProcess = child
  childProcess?.on('SIGHUP', () => {
    consoleLog('startBackend', '接收到了stop信号')
  })

  defaultConfig.backend.pid = childProcess.pid
  return true
}

export const stopBackend = async () => {
  if (childProcess) {
    consoleLog('stopBackend', `pid:${childProcess.pid}`)
    childProcess.kill('SIGINT')
    childProcess = undefined
    defaultConfig.backend.pid = undefined
  }
}
