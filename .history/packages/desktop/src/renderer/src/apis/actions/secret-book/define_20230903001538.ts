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

// /secretbook/detail
const URL_SECRET_BOOK_DETAIL = '/secretbook/detail'
const API_SECRET_BOOK_DETAIL: ApiDescription = {
  desc: '获取密码记录详情',
  url: URL_SECRET_BOOK_DETAIL,
  method: METHOD.GET
}

export { URL_SECRET_BOOK_DETAIL, API_SECRET_BOOK_DETAIL }

// /secretbook/update
const URL_SECRET_BOOK_UPDATE = '/secretbook/update'
const API_SECRET_BOOK_UPDATE: ApiDescription = {
  desc: '修改密码记录',
  url: URL_SECRET_BOOK_UPDATE,
  method: METHOD.POST
}

export { URL_SECRET_BOOK_UPDATE, API_SECRET_BOOK_UPDATE }

// /secretbook/delete
const URL_SECRET_BOOK_DELETE = '/secretbook/delete'
const API_SECRET_BOOK_DELETE: ApiDescription = {
  desc: '删除密码记录',
  url: URL_SECRET_BOOK_DELETE,
  method: METHOD.POST
}

export { URL_SECRET_BOOK_DELETE, API_SECRET_BOOK_DELETE }
