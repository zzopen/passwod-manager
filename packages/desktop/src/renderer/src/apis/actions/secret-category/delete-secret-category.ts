import { req } from '@renderer/apis/instance'
import { API_DELETE_SECRET_CATEGORY } from './define'

export interface ArpDeleteSecretCategory {
  id: string
}

export const deleteSecretCategoryAction = async (p: ArpDeleteSecretCategory): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_DELETE_SECRET_CATEGORY)
  const { mark } = await req.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
