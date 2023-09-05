import { spawn, ChildProcess, consoleLog, isWin } from '@main/shared'

export const customExec = async (
  cmd: string,
  args: any
): Promise<[ChildProcess | undefined, boolean]> => {
  if (!cmd) {
    return [undefined, false]
  }

  const spawnPromise = new Promise<[ChildProcess | undefined, boolean]>((resolve) => {
    const run = spawn(cmd, args, { stdio: 'inherit', shell: isWin ? true : false })
    consoleLog('customExec', `pid: ${run.pid}`)

    let out = ''

    run.stdout?.on('data', (data) => {
      consoleLog('customExec stdout', `${data.toString().trimEnd()}`)
      out += data.toString()
    })

    run.stderr?.on('data', (data) => {
      consoleLog('customExec stderr', `${data.toString().trimEnd()}`)
    })

    run.on('close', function (code) {
      if (code === 0) {
        consoleLog('customExec close', `child process exited 执行正常`)
        resolve([run, true])
      } else {
        consoleLog('customExec close', `child process exited 执行失败 ${code?.toString()}`)
        resolve([undefined, false])
      }
    })
  })

  return await spawnPromise
}
