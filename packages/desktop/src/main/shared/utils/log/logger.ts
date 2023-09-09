import log4js, { type Appender, type Log4js, type Logger } from 'log4js'
import { defaultConfig } from '@main/config'
import { isDev } from '../env'
import { now } from '@common/shared'

// 参考: https://blog.csdn.net/weixin_42214717/article/details/128332445

let localLog4js: Log4js | undefined
let _defaultLogger: Logger
let _errorLogger: Logger
let _consoleLogger: Logger

// 内容格式，一种json
const jsonPattern =
  '{"datetime":"%d{yyyy-MM-dd hh:mm:ss}","level":"%p","host":"%h","pid":"%z","message":"%m"}'
// 另外一种常规
// const filePattern = '[%d{yyyy-MM-dd hh:mm:ss}] ["%p"] ["%h"] ["%z"] "%m"'

export const initLogger = async () => {
  // logger模块依赖一个路径
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
      pattern: jsonPattern
    },
    keepFileExt: true,
    alwaysIncludePattern: true,
    compress: true // 压缩旧文件
  }

  localLog4js = log4js.configure({
    appenders: {
      console: { type: 'console' },
      normal: { ...defaultAdapter, filename: `${logDirPath}/cipher` },
      error: { ...defaultAdapter, filename: `${logDirPath}/cipher-error` }
    },
    categories: { default: { appenders: ['normal'], level: 'debug' } }
  })

  _defaultLogger = localLog4js?.getLogger('normal')
  _errorLogger = localLog4js?.getLogger('error')
  _consoleLogger = localLog4js?.getLogger('console')
  if (_defaultLogger) {
    _defaultLogger.level = 'debug'
  }

  if (_errorLogger) {
    _errorLogger.level = 'error'
  }

  if (_consoleLogger) {
    _consoleLogger.level = 'debug'
  }
}

const formatter = (msg: any[] | any, scope: string) => {
  let content = ''
  let consoleContent: any[] = [now()]
  if (!Array.isArray(msg)) {
    content = `[${scope}] ${msg}`
    consoleContent = [...consoleContent, `[${scope}]`, msg]
  } else {
    content = `[${scope}] ${msg.join(' ')}`
    consoleContent = [...consoleContent, `[${scope}]`, ...msg]
  }

  if (isDev) {
    console.log(...consoleContent)
  }

  return content
}

const info = (_logger: Logger, msg: any[] | any, scope: string) => {
  _logger?.info(formatter(msg, scope))
}

const debug = (_logger: Logger, msg: any[] | any, scope: string) => {
  _logger?.debug(formatter(msg, scope))
}

const warn = (_logger: Logger, msg: any[] | any, scope: string) => {
  _logger?.warn(formatter(msg, scope))
}

const error = (_logger: Logger, msg: any[] | any, scope: string) => {
  _logger?.error(formatter(msg, scope))
}

const fatal = (_logger: Logger, msg: any[] | any, scope: string) => {
  _logger?.fatal(formatter(msg, scope))
}

export const logger = {
  debug: (msg: any[] | any, scope = 'default') => {
    debug(_defaultLogger, msg, scope)
  },
  info: (msg: any[] | any, scope = 'default') => {
    info(_defaultLogger, msg, scope)
  },
  warn: (msg: any[] | any, scope = 'default') => {
    warn(_defaultLogger, msg, scope)
  },
  error: (msg: any[] | any, scope = 'default') => {
    error(_errorLogger, msg, scope)
  },
  fatal: (msg: any[] | any, scope = 'default') => {
    fatal(_errorLogger, msg, scope)
  }
}
