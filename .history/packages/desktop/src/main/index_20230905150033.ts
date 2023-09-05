// import { startApp } from '@main/core/app'

// startApp()

import { execa } from 'execa'

const { stdout } = await execa('echo', ['unicorns'])
console.log(stdout)
//=> 'unicorns'
