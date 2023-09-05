import { spawn, isExecutable, consoleLog } from '@main/shared'

export const customExec = async (cmd, ...args) => {
  const res = await isExecutable(cmd)
  if (!res) {
    return false
  }

  return new Promise((resolve, reject) => {
    const run = spawn(cmd, args)

    let out = ''

    run.stdout.on('data', (data) => {
      consoleLog(`[customExec stdout]: ${data.toString().trimEnd()}`)
      out += data.toString()
    })

    run.stderr.on('data', (data) => {
      consoleLog(`[customExec stderr]: ${data.toString().trimEnd()}`)
    })

    run.on('exit', function (code) {
      consoleLog(`child process exited with code ${code?.toString()}`)
      if (code === 0) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
