import process from 'node:process'
import { delay } from '@common/shared'

console.log(process.pid)
process.on('uncaughtException', (error) => {
  console.log('uncaughtException', error)
  // process.exit(-1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection', reason)
  console.log('unhandledRejection', promise)
})

process.on('SIGINT', async (signal) => {
  console.log(444)
  console.log('SIGINT', signal)
})

process.on('beforeExit', async (code: number) => {
  console.log(555)
  await delay(5000)
  console.log('exit', code)
})
console.log(222)
