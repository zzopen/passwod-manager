import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_DETAIL } from './define'

export interface SecretBookDetailRequest {
  id: string
  [propName: string]: any
}

export const secretBookDetailAction = async (
  p: SecretBookDetailRequest
): Promise<Nullable<ZZ.API.SecretBook>> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_DETAIL)
  const [err, res] = await req.request<ZZ.API.SecretCategorys>(apiDescription, {
    config: { params: p }
  })
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transfer(res.data)
}

function transfer(data: any): Nullable<ZZ.API.SecretBook> {
  if (!data) {
    return null
  }

  const res: ZZ.API.SecretBook = {
    id: data.id ?? '',
    title: data.title ?? '',
    website: data.website ?? '',
    account: data.account ?? '',
    password: data.password ?? '',
    mobile: data.mobile ?? '',
    email: data.email ?? '',
    remark: data.remark ?? '',
    createdAt: data.created_at ?? '',
    updatedAt: data.updated_at ?? '',
    dataUpdatedAt: data.data_updated_at ?? ''
  }

  return res
}
