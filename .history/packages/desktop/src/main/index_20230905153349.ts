// import { startApp } from '@main/core/app'

// startApp()

const t = async () => {
  const { execaCommand } = await import('execa')
  // const results = await execaCommand('ls -al')
  execaCommand('ls -al').then((pid, a) => {
    console.log('pid:', pid)
  })
  // console.log(results)
  // console.log('exitCode:', results.exitCode)
  //=> 'unicorns'
}

t()

process.on('uncaughtException', (error) => {
  console.error('Caught exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
