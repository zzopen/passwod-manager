import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_LIST } from './define'
import { isEmptyArray } from '@common/utils'
import { getMenuItem, SettingOutlined, type ItemType } from '@renderer/shared'

export interface GetListBySecretCategoryIdRequest {
  secret_category_id?: string
  [propName: string]: any
}

export const getListBySecretCategoryIdAction = async (
  p: GetListBySecretCategoryIdRequest
): Promise<ZZ.API.SecretBooks> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_LIST)
  const [err, res] = await req.request<ZZ.API.SecretCategorys>(apiDescription, {
    config: { params: p }
  })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transfer(res.data)
  // return getMockMenuList()
}

function transfer(data: any[]): ZZ.API.SecretBooks {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: ZZ.API.SecretBooks = []
  if (data.length <= 0) {
    return res
  }

  res = transfer(data)
  return res
}

function transferCategoryList(data: any[]): ZZ.API.SecretCategorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: ZZ.API.SecretCategorys = []
  if (data.length <= 0) {
    return res
  }

  res = transfer(data)
  return res
}

function transfer(items: any): ZZ.API.SecretCategorys {
  const res: ZZ.API.SecretCategorys = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const caetgory: ZZ.API.SecretCategory = {
      id: item.id ?? '',
      pid: item.pid ?? '',
      name: item.name ?? item.name,
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? '',
      children: []
    }

    if (item.children && !isEmptyArray(item)) {
      caetgory.children = transfer(item.children)
    }

    res.push(caetgory)
  }

  return res
}
