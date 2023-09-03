import { ElectronLog } from '@main/shared'

function consoleLog(scope = 'log', ...msgs: any[]) {
  ElectronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
