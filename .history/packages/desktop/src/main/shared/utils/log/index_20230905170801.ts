import { ElectronLog } from '@main/shared/deps'
import { now } from '@common/shared'
import { isDev, isProd } from '../env'

function consoleLog(scope = 'log', ...msgs: any[]) {
  if (isDev) {
    ElectronLog.debug(`[${now()}] [${scope}]:`, ...msgs)
  }

  if (isProd) {
    ElectronLog.info(`[${now()}] [${scope}]:`, ...msgs)
  }
}

const info = () => {}

export const logger = {}

export { consoleLog }
