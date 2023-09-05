import log4js from 'log4js'

const filePattern = '%d{yyyy-MM-dd HH:mm:ss}' // 日期和时间格式

log4js.configure({
  appenders: {
    normal: { type: 'file', filename: `cipher.${filePattern}.log` },
    error: { type: 'file', filename: `cipher-error.${filePattern}.log` }
  },
  categories: { default: { appenders: ['error'], level: 'error' } }
})

const logger = log4js.getLogger('cipher')

const info = (msg: string) => {}
logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Comté.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')
