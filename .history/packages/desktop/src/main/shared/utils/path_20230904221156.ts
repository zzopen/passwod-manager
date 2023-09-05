import { nodePath } from '@main/shared/deps'

export const getDesktopDirAbsPath = (): string => {
  return nodePath.resolve(__dirname, '../../../')
}

export const getMainDirAbsPath = (): string => {
  return nodePath.resolve(__dirname, '../../../')
}
