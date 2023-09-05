// import { startApp } from '@main/core/app'

// startApp()

import { getDataLDbIns } from '@main/shared/utils/store'
import { defaultConfig } from './config'

const t = async () => {
  console.log(defaultConfig)
  const db = await getDataLDbIns()
  await db.read()
}

t()
