import type { AxiosRequestConfig, Method } from 'axios'

export interface RequestOption<T = any> {
  data?: T // post参数
  config?: AxiosRequestConfig // axios config
  delayRequestTime?: number
  delayResponseTime?: number
  background?: boolean
  [propName: string]: any
}

export interface ApiDescription {
  desc: string // 描述
  url: string // 对应后端接口地址
  method: Method // 请求方式
}

export interface ApiResponse<T> {
  error: any
  data: ApiResult<T>
  mark: boolean
}

export interface ApiResult<T> {
  code: string
  msg: string
  data: T
  [propName: string]: any
}

export interface ApiError {
  code: string
  msg: string
  [propName: string]: any
}

export const METHOD = {
  GET: 'get' as Method,
  POST: 'post' as Method,
  PUT: 'put' as Method,
  DELETE: 'delete' as Method
}
