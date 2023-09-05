// import { startApp } from '@main/core/app'

// startApp()

const t = async () => {
  const { execa } = await import('execa')
  const { stdout } = await execa('echo', ['unicorns'])
  console.log(stdout)
  //=> 'unicorns'
}

t()
