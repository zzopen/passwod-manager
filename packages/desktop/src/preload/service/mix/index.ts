import {
  rendererInvoke,
  rendererSend,
  IPC_EVENT_GET_AXIOS_BASE_URL,
  IPC_EVENT_APP_QUIT,
  IPC_EVENT_SWITCH_DEVTOOLS,
  IPC_EVENT_EXPORT_DATA,
  IPC_EVENT_IMPORT_DATA,
  IPC_EVENT_GET_APP_DOWNLOAD_DIR_PATH,
  IPC_EVENT_APP_CHECK_UPDATER
} from '@common/ipc'

export const getAxiosBaseUrl = async () => {
  return await rendererInvoke<undefined, string>(IPC_EVENT_GET_AXIOS_BASE_URL)
}

export const appQuit = async () => {
  rendererSend<undefined>(IPC_EVENT_APP_QUIT)
}

export const switchDevTools = async () => {
  rendererSend<undefined>(IPC_EVENT_SWITCH_DEVTOOLS)
}

export const exportData = async () => {
  rendererSend<undefined>(IPC_EVENT_EXPORT_DATA)
}

export const importData = async () => {
  rendererSend<undefined>(IPC_EVENT_IMPORT_DATA)
}

export const getAppDownloadDirPath = async () => {
  return await rendererInvoke<undefined, string>(IPC_EVENT_GET_APP_DOWNLOAD_DIR_PATH)
}

export const appCheckUpdater = async () => {
  rendererSend<undefined>(IPC_EVENT_APP_CHECK_UPDATER)
}

export const mixRenderService = {
  getAxiosBaseUrl,
  appQuit,
  switchDevTools,
  exportData,
  importData,
  getAppDownloadDirPath,
  appCheckUpdater
}

export type MixRenderService = typeof mixRenderService
