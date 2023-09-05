import { app, isMac, isLinux, isWin } from '@main/shared'
// 获取自定义数据目录
export const getCustomHomePath = () => {
  if (isMac || isLinux) {
    return '~'
  } else {
  }
}
