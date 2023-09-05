import { ElectronLog } from '@main/shared/deps'
import { now } from '@common/shared/utils'

function consoleLog(scope = 'log', ...msgs: any[]) {
  ElectronLog.debug(`[${now()}] [${scope}]:`, ...msgs)
}

export { consoleLog }
