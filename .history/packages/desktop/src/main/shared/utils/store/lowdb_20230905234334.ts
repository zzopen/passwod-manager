import { defaultConfig } from '@main/config'
import { JSONFile } from 'lowdb/node'

const importLowdb = async () => {
  return import('lowdb')
}

const dataJsonFilePath = `${defaultConfig.desktop.dirPath}/data.json`
const adapter = new JSONFile(dataJsonFilePath)
const defaultData = { posts: [] }

export const getDb = async () => {
  const lowdb = await importLowdb()
  return new lowdb.Low(adapter, defaultData)
}
