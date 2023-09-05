import { nodePath } from '@main/shared/deps'

export const getDesktopDirAbsPath = (): string => {
  return nodePath.resolve(__dirname, '../../')
}

export const getMainDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopDirAbsPath(), '../main')
}

export const getBackendDirAbsPath = (): string => {
  return nodePath.resolve(getDesktopDirAbsPath(), '../backend')
}
