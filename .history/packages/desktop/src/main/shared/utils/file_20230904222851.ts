import { fse, consoleLog } from '@main/shared'

export const isExecutable = async (_path: string): boolean => {
  if (!_path) {
    return false
  }

  try {
    const stats = await fse.stat(_path)
    if (!stats.isFile()) {
      consoleLog('isExecutable', '不是一个文件')
      return false
    }

    const filePermissions = stats.mode.toString(8)
    // 检查文件是否具有可执行权限
    if (stats.mode.toString(8) & 0o100) {
      console.log(`${filePath} 是一个可执行文件`)
    } else {
      console.log(`${filePath} 不是一个可执行文件`)
    }
  } catch (error) {
    consoleLog('isExecutable', error)
    return false
  }
}
