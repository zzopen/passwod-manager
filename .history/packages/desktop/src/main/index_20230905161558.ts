// import { startApp } from '@main/core/app'

// startApp()

import process, { kill } from 'process'

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.')
})

setTimeout(() => {
  console.log('Exiting.')
  process.exit(0)
}, 100)

kill(process.pid, 'SIGHUP')

// process.on('uncaughtException', (error) => {
//   console.error('Caught exception:', error)
// })

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason)
// })
