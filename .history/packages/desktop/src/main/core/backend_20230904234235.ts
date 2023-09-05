import { customExec, consoleLog } from '@main/shared'
import { getBackendExecutePath, defaultConfig } from '@main/config'

export const startBackend = async () => {
  const exePath = getBackendExecutePath()
  consoleLog('startBackend', 'exePath', getBackendExecutePath())
  const [child, res] = await customExec(exePath, '-f', defaultConfig.backend.confFilePath)
  if (!res) {
    return false
  }

  if (child) {
    defaultConfig.backend.pid = child?.pid
  }

  return true
}

export const stopBackend = () => {
  // const kill = require("tree-kill")
  // if(serverProcess){
  //   logger.info("kill server process , serverProcess.pid-->",serverProcess.pid);
  //   kill(serverProcess.pid,"SIGTERM",function(){
  //     serverProcess = null;
  //     logger.info("后台服务已关闭...")
  //   })
  // }
}
