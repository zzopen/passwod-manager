import { req } from '@renderer/apis/instance'
import { API_DELETE_SECRET_BOOK } from './define'

export interface ArpDeleteSecretBook {
  id: string
}

export const deleteSecretBookAction = async (p: ArpDeleteSecretBook): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_DELETE_SECRET_BOOK)
  const { mark } = await req.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
