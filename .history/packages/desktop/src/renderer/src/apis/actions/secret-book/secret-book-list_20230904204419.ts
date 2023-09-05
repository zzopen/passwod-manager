import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_LIST } from './define'
import { isEmptyArray } from '@common/shared'
import type { SecretBooks, SecretCategorys, SecretBook } from '@common/types'

export interface ArpGetSecretBookList {
  secret_category_id?: string
  [propName: string]: any
}

export const getSecretBookListAction = async (p: ArpGetSecretBookList): Promise<SecretBooks> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_LIST)
  const { data, mark } = await req.request<SecretCategorys>(apiDescription, {
    config: { params: p }
  })

  if (!mark || !data) {
    return []
  }

  return transfer(data)
}

function transfer(data: any[]): SecretBooks {
  if (!data || isEmptyArray(data)) {
    return []
  }

  const res: SecretBooks = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const book: SecretBook = {
      id: item.id ?? '',
      title: item.title ?? '',
      website: item.website ?? '',
      username: item.username ?? '',
      password: item.password ?? '',
      mobile: item.mobile ?? '',
      email: item.email ?? '',
      remark: item.remark ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? '',
      secretCategoryId: item.secret_category_id ?? '',
      secretCategoryName: item.secret_category_name ?? ''
    }

    res.push(book)
  }

  return res
}
