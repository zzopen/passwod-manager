import log4js, { type DateFileAppender } from 'log4js'
import { isDev, isProd } from '@main/shared'

const filePattern = '%d{yyyy-MM-dd HH:mm:ss}' // 日期和时间格式

const defautlFileAdapter: DateFileAppender = {
  type: 'dateFile',
  encoding: 'utf-8',
  layout: { type: 'pattern', pattern: filePattern },
  filename: `${filePattern}.log`, // 将日期和时间作为文件名的一部分
  maxLogSize: 1024 * 1024 * 5, // 每个文件的最大大小为 5MB
  numBackups: 5, // 保留最近 5 个文件
  compress: true // 压缩旧文件
}

log4js.configure({
  appenders: {
    stdout: { type: 'stdout' },
    normal: { ...defautlFileAdapter, filename: `cipher.log` },
    error: { ...defautlFileAdapter, filename: `cipher-error.log` }
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
