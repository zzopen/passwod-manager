import log4js from 'log4js'
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cipher.log' } },
  categories: { default: { appenders: ['cipher'], level: 'error' } }
})
const logger = log4js.getLogger()
logger.level = 'debug'
logger.debug('Some debug messages')
