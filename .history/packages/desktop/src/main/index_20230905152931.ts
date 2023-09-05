// import { startApp } from '@main/core/app'

// startApp()

const t = async () => {
  const { execaCommand } = await import('execa')
  const results = await execaCommand('echo', ['222'])
  console.log(results.pid)
  console.log('exitCode:', results.exitCode)
  //=> 'unicorns'
}

t()

process.on('uncaughtException', (error) => {
  console.error('Caught exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
