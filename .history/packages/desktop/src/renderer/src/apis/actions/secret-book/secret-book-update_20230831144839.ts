import { req } from '@renderer/apis/instance'
import { API_SECRET_BOOK_UPDATE } from './define'

export interface SecretBookUpdateRequest {
  id: string
  title: string
  website: string
  username: string
  password: string
  remark?: string
  mobile?: string
  email?: string
  [propName: string]: any
}

export const secretBookUpdateAction = async (p: SecretBookUpdateRequest): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_SECRET_BOOK_UPDATE)
  const [err, res] = await req.request<void>(apiDescription, p)
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
    username: data.username ?? '',
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
