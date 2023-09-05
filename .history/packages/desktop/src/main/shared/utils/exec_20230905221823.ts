import { spawn, ChildProcess, logger, isWin } from '@main/shared'

export const customExec = async (
  cmd: string,
  args: any[]
): Promise<[ChildProcess | undefined, boolean]> => {
  if (!cmd) {
    return [undefined, false]
  }

  const spawnPromise = new Promise<[ChildProcess | undefined, boolean]>((resolve) => {
    const run = spawn(cmd, args, { stdio: 'inherit', shell: isWin ? true : false })
    logger.info(`pid: ${run.pid}`, 'customExec')

    let out = ''

    run.stdout?.on('data', (data) => {
      logger.info(`${data.toString().trimEnd()}`, 'customExec stdout')
      out += data.toString()
    })

    run.stderr?.on('data', (data) => {
      logger.info(`${data.toString().trimEnd()}`, 'customExec stderr')
    })

    run.on('close', function (code) {
      if (code === 0) {
        logger.info(`child process exited 执行正常`, 'customExec close')
        resolve([run, true])
      } else {
        logger.info(`child process exited 执行失败 ${code?.toString()}`, 'customExec close')
        resolve([undefined, false])
      }
    })
  })

  return await spawnPromise
}
