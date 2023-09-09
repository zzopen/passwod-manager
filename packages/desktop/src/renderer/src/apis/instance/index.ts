export * from './types'
import { AxiosRequest } from './request'

let req: AxiosRequest | undefined

export const initReq = async () => {
  const baseUrl = await window.preloadContext.mix.getAxiosBaseUrl()
  req = new AxiosRequest({ baseURL: baseUrl })
}

export { req }
