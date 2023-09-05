import { customExec, consoleLog } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consolelog('getBackendExecutePath:', getBackendExecutePath())
  const args = ['-f', defaultConfig.backend.confFilePath]
  const res = await customExec(exePath, args)
  if (!res) {
    return false
  }

  return true
}
