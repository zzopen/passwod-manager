import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_UPDATE } from './define'

export interface SecretBookUpdateRequest {
  id: string
  title: string
  website: string
  username: string
  password: string
  remark?: string
  mobile?: string
  email?: string
  [propName: string]: any
}

export const secretBookUpdateAction = async (p: SecretBookUpdateRequest): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_UPDATE)
  const [err, res] = await req.request<void>(apiDescription, { data: p })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return true
}
