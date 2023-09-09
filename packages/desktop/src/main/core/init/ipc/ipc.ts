import {
  mainHandle,
  mainOn,
  IPC_EVENT_GET_AXIOS_BASE_URL,
  IPC_EVENT_APP_QUIT,
  IPC_EVENT_SWITCH_DEVTOOLS
} from '@common/ipc'
import { defaultConfig } from '@main/config'
import { appQuit } from '@main/shared'
import { switchMainWindowDevTools } from '@main/core/wins'

const mainOnAxiosBaseUrl = () => {
  mainHandle<undefined, string>(IPC_EVENT_GET_AXIOS_BASE_URL, async () => {
    return defaultConfig.server.baseUrl
  })
}

const mainOnAppQuit = () => {
  mainOn<undefined, void>(IPC_EVENT_APP_QUIT, async () => {
    appQuit()
  })
}

const mainOnSwitchDevTools = () => {
  mainOn<undefined, void>(IPC_EVENT_SWITCH_DEVTOOLS, async () => {
    switchMainWindowDevTools()
  })
}

const init = async () => {
  mainOnAxiosBaseUrl()
  mainOnAppQuit()
  mainOnSwitchDevTools()
}

export { init as initIpc }
