import log4js from 'log4js'

const filePattern = '%d{yyyy-MM-dd HH:mm:ss}' // 日期和时间格式

log4js.configure({
  appenders: {
    normal: { type: 'file', filename: `cipher.${filePattern}.log` },
    error: { type: 'file', filename: `cipher-error.${filePattern}.log` }
  },
  categories: { default: { appenders: ['error'], level: 'error' } }
})

const logger = log4js.getLogger('normal')
const errorLogger = log4js.getLogger('error')

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
