import { customExec, consoleLog, nodeProcess, ChildProcess } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

let childProcess: ChildProcess | undefined

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())

  const bin = `nohup ${exePath} -f ${defaultConfig.backend.confFilePath} >cipher.stdout.log 2>cipher.stderr.log &`
  const [child, res] = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

  childProcess = child
  if (childProcess) {
    defaultConfig.backend.pid = childProcess.pid
  }

  return true
}

export const stopBackend = async () => {
  if (defaultConfig.backend.pid) {
    nodeProcess.kill(defaultConfig.backend.pid, 'SIGINT')
  }
}
