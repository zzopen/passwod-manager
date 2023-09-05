import { spawn, ChildProcess, nodeProcess, isExecutable, consoleLog } from '@main/shared'

export const customExec = async (cmd, ...args): Promise<[ChildProcess | undefined, boolean]> => {
  const res = await isExecutable(cmd)
  if (!res) {
    return [undefined, false]
  }

  const spawnRes = new Promise<[ChildProcess | undefined, boolean]>((resolve) => {
    const run = spawn(cmd, args, { stdio: 'ignore' })
    consoleLog('customExec', `pid: ${run.pid}`)
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
        resolve([run, true])
      } else {
        consoleLog('customExec exit', `child process exited 执行失败 ${code?.toString()}`)
        resolve([undefined, false])
      }
    })
  })

  return await spawnRes
}
