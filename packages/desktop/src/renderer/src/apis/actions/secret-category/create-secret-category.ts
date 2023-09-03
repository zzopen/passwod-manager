import { req } from '@renderer/apis/instance'
import { API_CREATE_SECRET_CATEGORY } from './define'

export interface ArpCreateSecretCategory {
  name: string
  pid?: string
}

export const createSecretCategoryAction = async (p: ArpCreateSecretCategory): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_CREATE_SECRET_CATEGORY)
  const { mark } = await req.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
