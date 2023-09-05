import { nodePath } from '@main/shared/deps'

export const getMainDirAbsPath = (): string => {
  return nodePath.resolve(__dirname, '../../../')
}
