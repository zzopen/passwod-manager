import { customExec, consoleLog } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())
  const [child, res] = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

  if (child) {
    defaultConfig.backend.pid = child.pid
  }

  return true
}

export const stopBackend = () => {
  kill(1234, 'SIGINT')
}
