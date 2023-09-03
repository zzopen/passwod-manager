import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_DETAIL } from './define'
import { isEmptyArray } from '@common/utils'

export interface SecretBookDetailRequest {
  id: string
  [propName: string]: any
}

export const secretBookDetailAction = async (
  p: SecretBookDetailRequest
): Promise<ZZ.API.SecretBooks> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_DETAIL)
  const [err, res] = await req.request<ZZ.API.SecretCategorys>(apiDescription, {
    config: { params: p }
  })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transfer(res.data)
}

function transfer(data: any[]): ZZ.API.SecretBooks {
  if (!data || isEmptyArray(data)) {
    return []
  }

  const res: ZZ.API.SecretBooks = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const book: ZZ.API.SecretBook = {
      id: item.id ?? '',
      title: item.title ?? '',
      website: item.website ?? '',
      account: item.account ?? '',
      password: item.password ?? '',
      mobile: item.mobile ?? '',
      email: item.email ?? '',
      remark: item.remark ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? ''
    }

    res.push(book)
  }

  return res
}