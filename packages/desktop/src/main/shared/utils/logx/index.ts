import { ElectronLog } from '@main/shared/deps'

function consoleLog(scope = 'log', ...msgs: any[]) {
  ElectronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
