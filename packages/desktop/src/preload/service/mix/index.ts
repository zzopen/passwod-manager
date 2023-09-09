import {
  rendererInvoke,
  rendererSend,
  IPC_EVENT_GET_AXIOS_BASE_URL,
  IPC_EVENT_APP_QUIT,
  IPC_EVENT_SWITCH_DEVTOOLS
} from '@common/ipc'

export const getAxiosBaseUrl = async () => {
  return await rendererInvoke<undefined, string>(IPC_EVENT_GET_AXIOS_BASE_URL)
}

export const appQuit = async () => {
  await rendererSend<undefined>(IPC_EVENT_APP_QUIT)
}

export const switchDevTools = async () => {
  await rendererSend<undefined>(IPC_EVENT_SWITCH_DEVTOOLS)
}

export const mixRenderService = {
  getAxiosBaseUrl,
  appQuit,
  switchDevTools
}

export type MixRenderService = typeof mixRenderService
