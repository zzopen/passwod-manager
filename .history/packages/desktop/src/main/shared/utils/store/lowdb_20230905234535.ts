import { defaultConfig } from '@main/config'
import { JSONFile } from 'lowdb/node'

const dataJsonFilePath = `${defaultConfig.desktop.dirPath}/data.json`
const adapter = new JSONFile(dataJsonFilePath)
const defaultData = { posts: [] }

export interface UserInfo {
  id: string
  loginAt: string
}

export interface DataJsonFile {
  user: UserInfo
}

const importLowdb = async () => {
  return import('lowdb')
}

export const getDb = async () => {
  const lowdb = await importLowdb()
  return new lowdb.Low(adapter, defaultData)
}
