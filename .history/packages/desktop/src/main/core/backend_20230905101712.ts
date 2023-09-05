import { customExec, consoleLog, nodeProcess } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())

  bin = `nohup /root/deploy/apicode -f  /root/deploy/etc/apicode.yaml >apicode.stdout.log 2>apicode.stderr.log &`
  const [child, res] = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

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
