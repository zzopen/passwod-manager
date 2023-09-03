import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

// /secretbook/list
const URL_SECRET_BOOK_LIST = '/secretbook/list'
const API_SECRET_BOOK_LIST: ApiDescription = {
  desc: '获取某个分类下的所有密码记录',
  url: URL_SECRET_BOOK_LIST,
  method: METHOD.GET
}

export { API_SECRET_BOOK_LIST, URL_SECRET_BOOK_LIST }
