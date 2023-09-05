import { exec } from '@main/shared'
import { getBackendExecutePath } from '@main/config'

// const exePath = '/Users/xulei/jungle/githubproject/my/zz-cipher/packages/backend/cli/cipher-out'

// exec(`${exePath}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`执行的错误: ${error}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
//   console.error(`stderr: ${stderr}`)
// })

console.log('getBackendExecutePath:', getBackendExecutePath())
