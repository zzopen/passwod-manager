import { req } from '@renderer/apis/instance'
import { API_SECRET_CATEGORY_DETAIL } from './define'
import type { SecretCategory, Nullable } from '@common/types'

export interface SecretCategoryDetailRequest {
  id: string
  [propName: string]: any
}

export const secretCategoryDetailAction = async (
  p: SecretCategoryDetailRequest
): Promise<Nullable<SecretCategory>> => {
  const apiDescription = Object.assign({}, API_SECRET_CATEGORY_DETAIL)
  const { data, mark } = await req!.request<SecretCategory>(apiDescription, {
    config: { params: p }
  })

  if (!mark || !data) {
    return null
  }

  return transfer(data)
}

function transfer(data: any): Nullable<SecretCategory> {
  if (!data) {
    return null
  }

  const res: SecretCategory = {
    id: data.id ?? '',
    name: data.name ?? '',
    pid: data.pid ?? '',
    createdAt: data.created_at ?? '',
    updatedAt: data.updated_at ?? '',
    dataUpdatedAt: data.data_updated_at ?? '',
    isDefault: data.is_default ?? false
  }

  return res
}
