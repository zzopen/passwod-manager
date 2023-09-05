import { ElectronLog } from '@main/shared/deps'
import { now } from '@common/shared'
import { isDev } from '../env'

function consoleLog(scope = 'log', ...msgs: any[]) {
  if (isDev) {
  }
  ElectronLog.debug(`[${now()}] [${scope}]:`, ...msgs)
}

export { consoleLog }
