import { app, isMac, isLinux, isWin } from '@main/shared'
import { CUSTOM_HOME_DIR_NAME } from './constant'

// 获取自定义数据目录
export const getCustomHomePath = (): string => {
  if (isMac || isLinux) {
    return `~/${CUSTOM_HOME_DIR_NAME}`
  } else {
    return ''
  }
}


export const getAppData = () => {
  return app.
}
