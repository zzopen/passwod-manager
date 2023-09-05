const USER_DATA_DIR_NAME = 'data'
const USER_DB_DIR_NAME = 'db'
const USER_DEFAULT_DB_NAME = 'password'

export { USER_DATA_DIR_NAME, USER_DB_DIR_NAME, USER_DEFAULT_DB_NAME }

export interface Config {
  sysDataDirName: string
  sysDataDirPath: string
  dbDataDirName: string
  dbDataDirPath: string
}

export const defaultConfig: Config = {
  sysDataDirName: '.Cipher',
  sysDataDirPath: '',
  dbDataDirName: 'db',
  dbDataDirPath: ''
}
