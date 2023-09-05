export interface Config {
  sysDataDirName: string // 系统数据目录名
  sysDataDirPath: string // 系统数据全路径
  dbDataDirName: string // 数据库数据目录名
  dbDataDirPath: string // 数据库数据全路径
}

export const defaultConfig: Config = {
  sysDataDirName: '.Cipher',
  sysDataDirPath: '',
  dbDataDirName: 'db',
  dbDataDirPath: ''
}
