// import { startApp } from '@main/core/app'

// startApp()

const t = async () => {
  const { execa } = await import('execa')
  const { stdout, exitCode } = await execa('ls', ['-l'])
  console.log(stdout)
  console.log('exitCode:', exitCode)
  //=> 'unicorns'
}

t()
