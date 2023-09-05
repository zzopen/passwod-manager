import log4js from 'log4js'
const filePattern = '%d{yyyy-MM-dd-HH-mm-ss}' // 日期和时间格式

log4js.configure({
  appenders: {
    cipherError: { type: 'file', filename: 'cipher-error.log' }
  },
  categories: { default: { appenders: [], level: 'error' } }
})

const logger = log4js.getLogger('cipher')
logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Comté.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')
