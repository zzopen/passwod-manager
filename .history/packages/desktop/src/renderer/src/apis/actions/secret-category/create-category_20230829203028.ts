import { req } from '@renderer/apis/instance'
import { API_CREATE_CATEGORY } from './define'

export interface CreateCategoryRequest {
  name: string
  pid?: string
}

export const categoryListAction = async (p: CreateCategoryRequest): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_CREATE_CATEGORY)
  const [err, res] = await req.request<ZZ.API.Categorys>(apiDescription, { data: p })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return true
}
