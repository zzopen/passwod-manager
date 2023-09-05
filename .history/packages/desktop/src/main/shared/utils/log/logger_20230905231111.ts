import log4js, { type Appender, type Log4js, type Logger } from 'log4js'
import { defaultConfig } from '@main/config'

// 参考: https://blog.csdn.net/weixin_42214717/article/details/128332445

let localLog4js: Log4js | undefined
let defaultLogger: Logger
let errorLogger: Logger
let stdoutLogger: Logger

// 内容格式，一种json
const jsonPattern =
  '{"datetime":"%d{yyyy-MM-dd hh:mm:ss}","level":"%p","host":"%h","pid":"%z","message":"%m"}'
// 另外一种常规
// const filePattern = '[%d{yyyy-MM-dd hh:mm:ss}] ["%p"] ["%h"] ["%z"] "%m"'

export const initLogger = async () => {
  const logDirPath = defaultConfig.desktop.logDirPath

  const defaultAdapter: Appender = {
    type: 'dateFile',
    encoding: 'utf-8',
    maxLogSize: 1024 * 1024 * 20, // 每个文件的最大大小为 5MB
    numBackups: 5, // 保留最近 5 个文件
    backups: 5,
    pattern: 'yyyy-MM-dd.log',
    layout: {
      type: 'pattern',
      parttern: jsonPattern
    },
    keepFileExt: true,
    alwaysIncludePattern: true,
    compress: true // 压缩旧文件
  }

  localLog4js = log4js.configure({
    appenders: {
      stdout: { type: 'console' },
      normal: { ...defaultAdapter, filename: `${logDirPath}/cipher` },
      error: { ...defaultAdapter, filename: `${logDirPath}/cipher-error` }
    },
    categories: { default: { appenders: ['normal'], level: 'debug' } }
  })

  defaultLogger = localLog4js?.getLogger('normal')
  errorLogger = localLog4js?.getLogger('error')
  stdoutLogger = localLog4js?.getLogger('stdout')
  if (defaultLogger) {
    defaultLogger.level = 'debug'
  }

  if (errorLogger) {
    errorLogger.level = 'error'
  }
}

const formatter = (msg: any[] | any, scope = 'default') => {
  if (!Array.isArray(msg)) {
    return `[${scope}] ${msg}`
  }

  return `[${scope}] ${msg.join(' ')}`
}

const info = (msg: any[] | any, scope = 'default') => {
  defaultLogger?.info(formatter(msg, scope))
}

const debug = (msg: any[] | any, scope = 'default') => {
  defaultLogger?.debug(formatter(msg, scope))
}

const warn = (msg: any[] | any, scope = 'default') => {
  errorLogger?.warn(formatter(msg, scope))
}

const error = (msg: any[] | any, scope = 'default') => {
  errorLogger?.error(formatter(msg, scope))
}

const fatal = (msg: any[] | any, scope = 'default') => {
  errorLogger?.fatal(formatter(msg, scope))
}

export const logger = {
  debug,
  info,
  warn,
  error,
  fatal
}

export const stdoutlogger = {
  debug,
  info,
  warn,
  error,
  fatal
}
