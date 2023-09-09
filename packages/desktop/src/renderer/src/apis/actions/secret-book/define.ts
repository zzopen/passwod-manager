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

// /secretbook/create
const URL_CREATE_SECRET_BOOK = '/secretbook/create'
const API_CREATE_SECRET_BOOK: ApiDescription = {
  desc: '创建密码记录',
  url: URL_CREATE_SECRET_BOOK,
  method: METHOD.POST
}

export { URL_CREATE_SECRET_BOOK, API_CREATE_SECRET_BOOK }

// /secretbook/update
const URL_UPDATE_SECRET_BOOK = '/secretbook/update'
const API_UPDATE_SECRET_BOOK: ApiDescription = {
  desc: '修改密码记录',
  url: URL_UPDATE_SECRET_BOOK,
  method: METHOD.POST
}

export { URL_UPDATE_SECRET_BOOK, API_UPDATE_SECRET_BOOK }

// /secretbook/delete
const URL_DELETE_SECRET_BOOK = '/secretbook/delete'
const API_DELETE_SECRET_BOOK: ApiDescription = {
  desc: '删除密码记录',
  url: URL_DELETE_SECRET_BOOK,
  method: METHOD.POST
}

export { URL_DELETE_SECRET_BOOK, API_DELETE_SECRET_BOOK }
