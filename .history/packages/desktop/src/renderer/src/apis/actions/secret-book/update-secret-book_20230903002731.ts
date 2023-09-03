import { req } from '@renderer/apis/instance'
import { API_UPDATE_SECRET_BOOK } from './define'

export interface ArpUpdateSecretBook {
  id: string
  title: string
  website: string
  username: string
  password: string
  secret_category_id: string
  remark?: string
  mobile?: string
  email?: string
  [propName: string]: any
}

export const updateSecretBookAction = async (p: ArpUpdateSecretBook): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_UPDATE)
  const { mark } = await req.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
