import { exec } from '@main/shared'

const exePath = '/path/to/your/file.exe'

exec(`${exePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})
