import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

// /secretcategory/treeList
const URL_SECRET_CATEGORY_TREELIST = '/secretcategory/treeList'
const API_SECRET_CATEGORY_TREELIST: ApiDescription = {
  desc: '分类树状列表',
  url: URL_SECRET_CATEGORY_TREELIST,
  method: METHOD.GET
}

export { API_SECRET_CATEGORY_TREELIST, URL_SECRET_CATEGORY_TREELIST }

// /secretcategory/list
const URL_SECRET_CATEGORY_LIST = '/secretcategory/list'
const API_SECRET_CATEGORY_LIST: ApiDescription = {
  desc: '分类列表',
  url: URL_SECRET_CATEGORY_LIST,
  method: METHOD.GET
}

export { API_SECRET_CATEGORY_LIST, URL_SECRET_CATEGORY_LIST }

// /secretcategory/create
const URL_CREATE_SECRET_CATEGORY = '/secretcategory/create'
const API_CREATE_SECRET_CATEGORY: ApiDescription = {
  desc: '创建分类',
  url: URL_CREATE_SECRET_CATEGORY,
  method: METHOD.POST
}

export { API_CREATE_SECRET_CATEGORY, URL_CREATE_SECRET_CATEGORY }

// /secretcategory/delete
const URL_DELETE_SECRET_CATEGORY = '/secretcategory/delete'
const API_DELETE_SECRET_CATEGORY: ApiDescription = {
  desc: '删除分类',
  url: URL_DELETE_SECRET_CATEGORY,
  method: METHOD.POST
}

export { API_DELETE_SECRET_CATEGORY, URL_DELETE_SECRET_CATEGORY }
