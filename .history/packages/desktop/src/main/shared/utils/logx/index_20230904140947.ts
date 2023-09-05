import { ElectronLog } from '@main/shared/deps'
import { now } from '@common/utils'
function consoleLog(scope = 'log', ...msgs: any[]) {
  ElectronLog.debug(`[${scope}]:`, ...msgs)
}

export { consoleLog }
