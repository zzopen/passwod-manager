// import { startApp } from '@main/core/app'

// startApp()

const t = async () => {
  const { execa } = await import('execa')
  const results = await execa('pwd')
  console.log(results)
  console.log('exitCode:', results.exitCode)
  //=> 'unicorns'
}

t()
