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
