import { defaultConfig } from '@main/config'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const importLowdb = async () => {
  return import('lowdb')
}

const dataJsonFilePath = `${defaultConfig.desktop.dirPath}/data.json`
const adapter = new JSONFile(dataJsonFilePath)
const defaultData = { posts: [] }
const db = new Low(adapter, defaultData)
