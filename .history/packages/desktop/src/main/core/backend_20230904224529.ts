import { exec, isExecutable } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  if (!isExecutable(exePath)) {
    return
  }

  // const args = ['-f', defaultConfig.backend.confFilePath]
  // const result = await exec(`${exePath} ${args.join(' ')}`)
  // if (result.error) {
  //   console.error(`执行的错误: ${error}`)
  //   return
  // }
  // console.log(`stdout: ${stdout}`)
  // console.error(`stderr: ${stderr}`)
}

console.log('getBackendExecutePath:', getBackendExecutePath())
