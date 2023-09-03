import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

// /secretbook/list
const URL_SECRET_BOOK_LIST = '/secretbook/list'
const API_CATEGORY_TREELIST: ApiDescription = {
  desc: '获取某个分类下的所有密码记录',
  url: URL_SECRET_BOOK_LIST,
  method: METHOD.GET
}

export { API_CATEGORY_TREELIST, URL_SECRET_BOOK_LIST }
