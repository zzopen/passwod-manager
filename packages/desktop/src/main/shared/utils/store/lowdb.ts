import { now } from '@common/shared'
import { defaultConfig } from '@main/config'
import { JSONFile } from 'lowdb/node'
import type { Low } from 'lowdb'

export interface UserInfo {
  id: string
  name: string
  loginAt: string
}

export interface DataJsonFile {
  user: UserInfo
}

let db: Low<DataJsonFile> | undefined

const importLowdb = async () => {
  return import('lowdb')
}

export const initLowdb = async () => {
  if (db) {
    return
  }

  const lowdb = await importLowdb()
  const dataJsonFilePath = `${defaultConfig.desktop.dirPath}/data.json`
  const adapter = new JSONFile<DataJsonFile>(dataJsonFilePath)
  const defaultDataJsonFile: DataJsonFile = { user: { id: '1', name: '许磊', loginAt: now() } }

  db = new lowdb.Low(adapter, defaultDataJsonFile)
}

export const getLowdbIns = async () => {
  if (!db) {
    return undefined
  }

  await db.read()
  return db
}
