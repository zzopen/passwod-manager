import { nodePath } from '@main/shared/deps'
export const getMainAbsPath = (): string => {
  return nodePath.resolve(__dirname)
}
