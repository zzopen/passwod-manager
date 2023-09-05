import { getDataLDbIns } from '@main/shared/utils/store'
import { defaultConfig } from './config'
import { makeDir } from './core/init'

const t = async () => {
  console.log(defaultConfig)
  await makeDir()
  const db = await getDataLDbIns()
  console.log('read之前', db.data)
  await db.read()
  console.log('read之后', db.data)
  db.data.user.id = '2'
  await db.write()
}

t()
