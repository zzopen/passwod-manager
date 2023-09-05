import { now } from '@common/shared'
import { isDevMode } from '../../env'
import chalk from 'chalk'

function consoleLog(scope = 'log', ...msgs: any[]) {
  if (isDevMode()) {
    console.log(
      `${chalk.bgGreenBright.whiteBright.white.red(now())} [${chalk.blueBright.bold(scope)}]:`,
      ...msgs
    )
  }
}

export { consoleLog }
