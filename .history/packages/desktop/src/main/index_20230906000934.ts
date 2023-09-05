// import { startApp } from '@main/core/app'

// startApp()

import { getDataLDbIns } from '@main/shared/utils/store'
import { defaultConfig } from './config'
import { makeDir } from './core/init'

const t = async () => {
  await makeDir()
  console.log(defaultConfig)
  const db = await getDataLDbIns()
  await db.read()

  db.data.user.id = '2'
  await db.write()
}

t()
