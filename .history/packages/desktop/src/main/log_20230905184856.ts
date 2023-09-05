import log4js, { type Appender } from 'log4js'
import { isDev, isProd } from '@main/shared'

// 参考: https://blog.csdn.net/weixin_42214717/article/details/128332445

const defautlFileAdapter: Appender = {
  type: 'dateFile',
  encoding: 'utf-8',
  maxLogSize: 1024 * 1024 * 20, // 每个文件的最大大小为 5MB
  numBackups: 5, // 保留最近 5 个文件
  backups: 5,
  pattern: 'yyyy-MM-dd.log',
  layout: {
    type: 'pattern',
    pattern:
      '{"datetime":"%d{yyyy-MM-dd hh:mm:ss}","level":"%p","host":"%h","pid":"%z","message":"%m"}'
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

const formatter = (msg: any[] | string, scope = 'default') => {
  if (typeof msg === 'string') {
    return `[${scope}] ${msg}`
  }

  return `[${scope}] ${msg.join(' ')}`
}

const info = (msg: any[] | string, scope = 'default') => {
  defaultLogger.info(formatter(msg, scope))
}

const trace = (msg: any[] | string, scope = 'default') => {
  defaultLogger.trace(formatter(msg, scope))
}

const debug = (msg: any[] | string, scope = 'default') => {
  defaultLogger.debug(formatter(msg, scope))
}

const warn = (msg: any[] | string, scope = 'default') => {
  errorLogger.warn(formatter(msg, scope)
}

const error = (msg: any[] | string, scope = 'default') => {
  errorLogger.error(formatter(msg, scope))
}

const fatal = (msg: any[] | string, scope = 'default') => {
  errorLogger.fatal(formatter(msg, scope))
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
