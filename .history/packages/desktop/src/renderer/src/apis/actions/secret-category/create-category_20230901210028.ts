import { req } from '@renderer/apis/instance'
import { API_CREATE_SECRET_CATEGORY } from './define'

export interface CreateSecretCategoryRequest {
  name: string
  pid?: string
}

export const createSecretCategoryAction = async (
  p: CreateSecretCategoryRequest
): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_CREATE_SECRET_CATEGORY)
  const [err, res] = await req.request<void>(apiDescription, { data: p })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return true
}
