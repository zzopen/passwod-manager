// import { startApp } from '@main/core/app'

// startApp()

import { getDataLDbIns } from '@main/shared/utils/store'

const t = async () => {
  const db = await getDataLDbIns()
  await db.read()
}

t()
