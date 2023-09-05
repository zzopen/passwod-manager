import { spawn, nodeProcess, isExecutable, consoleLog } from '@main/shared'

export const customExec = async (cmd, ...args): Promise<boolean> => {
  const res = await isExecutable(cmd)
  if (!res) {
    return false
  }

  const spawnRes = new Promise<boolean>((resolve) => {
    const run = spawn(cmd, args, { stdio: 'ignore' })

    let out = ''

    run.stdout?.on('data', (data) => {
      consoleLog('customExec stderr', `${data.toString().trimEnd()}`)
      out += data.toString()
    })

    run.stderr?.on('data', (data) => {
      consoleLog('customExec stderr', `${data.toString().trimEnd()}`)
    })

    run.on('exit', function (code) {
      if (code === 0) {
        consoleLog('customExec exit', `child process exited 执行正常`)
        resolve(true)
      } else {
        consoleLog('customExec exit', `child process exited 执行失败 ${code?.toString()}`)
        resolve(false)
      }
    })

    process.kill(run.pid, 'SIGINT')
  })

  return await spawnRes
}
