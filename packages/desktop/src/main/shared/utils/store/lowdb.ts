import { now } from '@common/shared'
import { defaultConfig } from '@main/config'
import { JSONFile } from 'lowdb/node'

export interface UserInfo {
  id: string
  name: string
  loginAt: string
}

export interface DataJsonFile {
  user: UserInfo
}

const dataJsonFilePath = `${defaultConfig.desktop.dirPath}/data.json`
const adapter = new JSONFile<DataJsonFile>(dataJsonFilePath)
const defaultDataJsonFile: DataJsonFile = { user: { id: '1', name: '许磊', loginAt: now() } }

const importLowdb = async () => {
  return import('lowdb')
}

export const getDataLDbIns = async () => {
  const lowdb = await importLowdb()
  const db = new lowdb.Low(adapter, defaultDataJsonFile)
  // 直接就是读取完文件之后的数据
  await db.read()
  return db
}
