import log4js, { type Appender } from 'log4js'
import { isDev, isProd } from '@main/shared'
import { defaultConfig } from '@main/config'

// 参考: https://blog.csdn.net/weixin_42214717/article/details/128332445

let localLog4js:

// 内容格式，一种json，一种常规
const jsonPattern =
  '{"datetime":"%d{yyyy-MM-dd hh:mm:ss}","level":"%p","host":"%h","pid":"%z","message":"%m"}'
// const filePattern = '[%d{yyyy-MM-dd hh:mm:ss}] ["%p"] ["%h"] ["%z"] "%m"'

const parttern = jsonPattern

const defautlFileAdapter: Appender = {
  type: 'dateFile',
  encoding: 'utf-8',
  maxLogSize: 1024 * 1024 * 20, // 每个文件的最大大小为 5MB
  numBackups: 5, // 保留最近 5 个文件
  backups: 5,
  pattern: 'yyyy-MM-dd.log',
  layout: {
    type: 'pattern',
    pattern: parttern
  },
  keepFileExt: true,
  alwaysIncludePattern: true,
  compress: true // 压缩旧文件
}

const defaultLogger = log4js.getLogger('normal')
const errorLogger = log4js.getLogger('error')

if (isDev) {
  defaultLogger.level = 'debug'
  errorLogger.level = 'debug'
} else if (isProd) {
  defaultLogger.level = 'error'
  errorLogger.level = 'error'
}

const formatter = (msg: any[] | any, scope = 'default') => {
  if (!Array.isArray(msg)) {
    return `[${scope}] ${msg}`
  }

  return `[${scope}] ${msg.join(' ')}`
}

const info = (msg: any[] | any, scope = 'default') => {
  defaultLogger.info(formatter(msg, scope))
}

const trace = (msg: any[] | any, scope = 'default') => {
  defaultLogger.trace(formatter(msg, scope))
}

const debug = (msg: any[] | any, scope = 'default') => {
  defaultLogger.debug(formatter(msg, scope))
}

const warn = (msg: any[] | any, scope = 'default') => {
  errorLogger.warn(formatter(msg, scope))
}

const error = (msg: any[] | any, scope = 'default') => {
  errorLogger.error(formatter(msg, scope))
}

const fatal = (msg: any[] | any, scope = 'default') => {
  errorLogger.fatal(formatter(msg, scope))
}

export const initLogger = () => {
  const logDirPath = defaultConfig.desktop.logDirPath

  log4js.configure({
    appenders: {
      stdout: { type: 'console' },
      normal: { ...defautlFileAdapter, filename: `${logDirPath}/cipher` },
      error: { ...defautlFileAdapter, filename: `${logDirPath}/cipher-error` }
    },
    categories: { default: { appenders: ['normal'], level: 'debug' } }
  })
}

export const stdoutLogger = log4js.getLogger('stdout')
export const logger = {
  info,
  warn,
  debug,
  error,
  trace,
  fatal
}
