import {
  mainHandle,
  mainOn,
  IPC_EVENT_GET_AXIOS_BASE_URL,
  IPC_EVENT_APP_QUIT,
  IPC_EVENT_SWITCH_DEVTOOLS,
  IPC_EVENT_EXPORT_DATA,
  IPC_EVENT_IMPORT_DATA,
  IPC_EVENT_GET_APP_DOWNLOAD_DIR_PATH,
  IPC_EVENT_APP_CHECK_UPDATER
} from '@common/ipc'
import { defaultConfig } from '@main/config'
import { appQuit, getAppDownloadDirPath, getWindowByEvent } from '@main/shared'
import { switchMainWindowDevTools } from '@main/core/wins'
import { importData, exportData } from '@main/core/migrate'
import { appUpdater } from '@main/core/updater'

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

const mainOnExportData = () => {
  mainOn<undefined, void>(IPC_EVENT_EXPORT_DATA, async () => {
    exportData()
  })
}

const mainOnImportData = () => {
  mainOn<undefined, void>(IPC_EVENT_IMPORT_DATA, async () => {
    importData()
  })
}

const mainOnGetAppDownloadDirPath = () => {
  mainHandle<undefined, string>(IPC_EVENT_GET_APP_DOWNLOAD_DIR_PATH, async () => {
    return getAppDownloadDirPath()
  })
}

const mainOnAppCheckUpdater = () => {
  mainOn<undefined, void>(IPC_EVENT_APP_CHECK_UPDATER, async ({ event }) => {
    const currentWin = getWindowByEvent(event)
    appUpdater(currentWin)
  })
}

const init = async () => {
  mainOnAxiosBaseUrl()
  mainOnAppQuit()
  mainOnSwitchDevTools()
  mainOnImportData()
  mainOnExportData()
  mainOnGetAppDownloadDirPath()
  mainOnAppCheckUpdater()
}

export { init as initIpc }
