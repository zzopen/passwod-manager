import { req } from '@renderer/apis/instance'
import { API_CREATE_SECRET_BOOK } from './define'

export interface ArpCreateSecretBook {
  title: string
  website: string
  username: string
  password: string
  remark?: string
  mobile?: string
  email?: string
  secret_category_id?: string
  [propName: string]: any
}

export const createSecretBookAction = async (p: ArpCreateSecretBook): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_CREATE_SECRET_BOOK)
  const { mark } = await req!.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
