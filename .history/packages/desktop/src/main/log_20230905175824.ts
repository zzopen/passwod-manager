import log4js, { type FileAppender } from 'log4js'
import { isDev, isProd } from '@main/shared'

const filePattern = '%d{yyyy-MM-dd HH:mm:ss}' // 日期和时间格式

const defautlFileAdapter: FileAppender = {
  type: 'file',
  encoding: 'utf-8',
  layout: { type: 'pattern', pattern: filePattern },
  filename: `${filePattern}.log`, // 将日期和时间作为文件名的一部分
  maxLogSize: 1024 * 1024 * 5, // 每个文件的最大大小为 5MB
  backups: 5, // 保留最近 5 个文件
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

const stdoutLogger = log4js.getLogger('stdout')
const logger = log4js.getLogger('normal')
const errorLogger = log4js.getLogger('error')

if (isDev) {
  logger.level = 'debug'
  errorLogger.level = 'debug'
} else if (isProd) {
  logger.level = 'error'
  errorLogger.level = 'error'
}

logger.level = 'error'
errorLogger.level = 'error'

const info = (msg: string) => {
  logger.info(msg)
}

const trace = (msg: string) => {
  logger.trace(msg)
}

const debug = (msg: string) => {
  logger.debug(msg)
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

trace('Entering cheese testing')
debug('Got cheese.')
info('Cheese is Comté.')
warn('Cheese is quite smelly.')
error('Cheese is too ripe!')
fatal('Cheese was breeding ground for listeria.')
