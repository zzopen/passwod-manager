import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_UPDATE } from './define'

export interface ArpDeleteSecretBook {
  id: string
}

export const deleteSecretBookAction = async (p: ArpDeleteSecretBook): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_UPDATE)
  const { mark } = await req.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
