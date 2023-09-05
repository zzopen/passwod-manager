import { fse } from '@main/shared'

export const isExecutable = (_path: string): boolean => {
  if (!_path) {
    return false
  }

  fse.stat(_path, (err, stats) => {})
}
