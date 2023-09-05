import log4js, { type Appender } from 'log4js'
import { isDev, isProd } from '@main/shared'

const defautlFileAdapter: Appender = {
  type: 'dateFile',
  encoding: 'utf-8',
  maxLogSize: 1024 * 1024 * 20, // 每个文件的最大大小为 5MB
  numBackups: 5, // 保留最近 5 个文件
  backups: 5,
  pattern: 'yyyy-MM-dd.log',
  layout: {
    type: 'pattern',
    pattern: '[date:%{DATETIME}d] [level:%p] [category:%c] [host:%h] [pid:%z] [data:%m]'
  },
  keepFileExt: true,
  alwaysIncludePattern: true,
  compress: true // 压缩旧文件
}

log4js.configure({
  appenders: {
    stdout: { type: 'console' },
    normal: { ...defautlFileAdapter, filename: `cipher` },
    error: { ...defautlFileAdapter, filename: `cipher-error` }
  },
  categories: { default: { appenders: ['normal'], level: 'debug' } }
})

const defaultLogger = log4js.getLogger('normal')
const errorLogger = log4js.getLogger('error')

if (isDev) {
  defaultLogger.level = 'debug'
  errorLogger.level = 'debug'
} else if (isProd) {
  defaultLogger.level = 'error'
  errorLogger.level = 'error'
}

defaultLogger.level = 'error'
errorLogger.level = 'error'

const info = (msg: string) => {
  defaultLogger.info(msg)
}

const trace = (msg: string) => {
  defaultLogger.trace(msg)
}

const debug = (msg: string) => {
  defaultLogger.debug(msg)
}

const warn = (msg: string) => {
  errorLogger.warn(msg)
}

const error = (msg: string) => {
  errorLogger.error(msg)
}

const fatal = (msg: string) => {
  errorLogger.fatal(msg)
}

export const stdoutLogger = log4js.getLogger('stdout')
export const logger = {
  info,
  warn,
  debug,
  error,
  fatal
}

trace('Entering cheese testing')
debug('Got cheese.')
info('Cheese is Comté.')
warn('Cheese is quite smelly.')
error('Cheese is too ripe!')
fatal('Cheese was breeding ground for listeria.')
