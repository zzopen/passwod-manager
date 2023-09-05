import { fse, consoleLog } from '@main/shared'

export const isExecutable = async (_path: string): boolean => {
  if (!_path) {
    return false
  }

  try {
    await fse.stat(_path)
  } catch (error) {
    consoleLog('isExecutable', error)
    return false
  }
}
