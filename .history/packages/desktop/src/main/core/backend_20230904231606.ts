import { customExec, consoleLog } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())
  const res = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

  return true
}
