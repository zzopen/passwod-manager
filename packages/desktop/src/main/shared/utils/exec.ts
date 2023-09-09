import { spawn, ChildProcess } from '@main/shared/deps'
import { logger } from './log'
import { isWin } from './env'

export const backgroundRun = async (
  cmd: string,
  args: any[]
): Promise<[ChildProcess | undefined, boolean]> => {
  if (!cmd) {
    return [undefined, false]
  }

  const spawnPromise = new Promise<[ChildProcess | undefined, boolean]>((resolve) => {
    const run = spawn(cmd, args, { stdio: 'ignore', shell: isWin ? true : false, detached: true })
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
      } else {
        logger.info(`child process exited 执行失败 ${code?.toString()}`, 'customExec close')
        //resolve([undefined, false])
      }
    })

    run.unref()
    resolve([run, true])
  })

  return await spawnPromise
}
