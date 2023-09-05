import { getDataLDbIns } from '@main/shared/utils/store'
import { defaultConfig } from './config'
import { makeDir } from './core/init'

const t = async () => {
  console.log(defaultConfig)
  await makeDir()
  const db = await getDataLDbIns()
  await db.read()
  console.log()
  db.data.user.id = '2'
  await db.write()
}

t()
