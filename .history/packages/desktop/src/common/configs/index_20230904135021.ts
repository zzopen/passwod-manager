const USER_DATA_DIR_NAME = 'data'
const USER_DB_DIR_NAME = 'db'
const USER_DEFAULT_DB_NAME = 'password'

export { USER_DATA_DIR_NAME, USER_DB_DIR_NAME, USER_DEFAULT_DB_NAME }

export interface Config {
  homeDirName: string
  homeDirPath: string
  dbDirName: string
  dbDirPath: string
}

export const defaultConfig: Config = {
  homeDirName: '.Cipher',
  homeDirPath: '',
  dbDirName: 'db',
  dbDirPath: ''
}
