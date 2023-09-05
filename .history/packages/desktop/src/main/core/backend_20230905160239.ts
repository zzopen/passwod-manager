import { customExec, consoleLog, nodeProcess, ChildProcess } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

let childProcess: ChildProcess | undefined

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())

  const bin = `nohup ${exePath} -f ${defaultConfig.backend.confFilePath} >apicode.stdout.log 2>apicode.stderr.log &`
  const [child, res] = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

  childProcess = child

  if (child) {
    defaultConfig.backend.pid = child.pid
  }

  return true
}

export const stopBackend = async () => {
  if (defaultConfig.backend.pid) {
    nodeProcess.kill(defaultConfig.backend.pid, 'SIGINT')
  }
}
