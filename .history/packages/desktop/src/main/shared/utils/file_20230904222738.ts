import { fse, consoleLog } from '@main/shared'

export const isExecutable = async (_path: string): boolean => {
  if (!_path) {
    return false
  }

  try {
    const stats = await fse.stat(_path)
    if (stats.isFile()) {
      return false
    }
  } catch (error) {
    consoleLog('isExecutable', error)
    return false
  }
}
