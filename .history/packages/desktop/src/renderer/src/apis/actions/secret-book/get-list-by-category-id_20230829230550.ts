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
  if (!data || isEmptyArray(data)) {
    return []
  }

  const res: ZZ.API.SecretBooks = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const caetgory: ZZ.API.SecretBook = {
      id: item.id ?? '',
      title: item.title ?? '',
      website: item.website ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? ''
    }

    res.push(caetgory)
  }

  return res
}
