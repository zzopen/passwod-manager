import log4js from 'log4js'
log4js.configure({
  appenders: { cipher: { type: 'file', filename: 'cipher.log' } },
  categories: { default: { level: 'error' } }
})

const logger = log4js.getLogger('cipher')
logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Comté.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')
