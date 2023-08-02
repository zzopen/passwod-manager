import { ElectronLog } from '@main/utils'

function consoleLog(scope = 'log', ...msgs: any[]) {
  ElectronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
