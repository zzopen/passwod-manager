import { exec, isExecutable } from '@main/shared'
import { getBackendExecutePath, defaultBackendConfig } from '@main/config'

export const startBackend = () => {
  const exePath = getBackendExecutePath()
  if (!isExecutable(exePath)) {
    return
  }

  const args = ['-f']
  exec(`${exePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行的错误: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
}

console.log('getBackendExecutePath:', getBackendExecutePath())
