import { exec, isExecutable } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  if (!isExecutable(exePath)) {
    return
  }

  const args = ['-f', defaultConfig.backend.confFilePath]
  const result = await exec(`${exePath} ${args.join(' ')}`)
}

console.log('getBackendExecutePath:', getBackendExecutePath())
