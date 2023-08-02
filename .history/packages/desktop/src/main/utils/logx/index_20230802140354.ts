import { electronLog } from '@main/utils'

function consoleLog(scope = 'log', ...msgs: any[]) {
  electronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
