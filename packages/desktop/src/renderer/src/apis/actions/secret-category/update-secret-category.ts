import { req } from '@renderer/apis/instance'
import { API_UPDATE_SECRET_CATEGORY } from './define'

export interface ArpUpdateSecretCategory {
  id: string
  name: string
  pid?: string
  [propName: string]: any
}

export const updateSecretCategoryAction = async (p: ArpUpdateSecretCategory): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_UPDATE_SECRET_CATEGORY)
  const { mark } = await req!.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
