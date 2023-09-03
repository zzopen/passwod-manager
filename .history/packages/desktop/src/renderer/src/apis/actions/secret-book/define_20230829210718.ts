import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

// /secretcategory/treeList
const URL_CATEGORY_TREELIST = '/secretcategory/treeList'
const API_CATEGORY_TREELIST: ApiDescription = {
  desc: '分类树状列表',
  url: URL_CATEGORY_TREELIST,
  method: METHOD.GET
}

export { API_CATEGORY_TREELIST, URL_CATEGORY_TREELIST }

// /secretcategory/list
const URL_CATEGORY_LIST = '/secretcategory/list'
const API_CATEGORY_LIST: ApiDescription = {
  desc: '分类列表',
  url: URL_CATEGORY_LIST,
  method: METHOD.GET
}

export { API_CATEGORY_LIST, URL_CATEGORY_LIST }

// /secretcategory/create
const URL_CREATE_CATEGORY = '/secretcategory/create'
const API_CREATE_CATEGORY: ApiDescription = {
  desc: '创建分类',
  url: URL_CREATE_CATEGORY,
  method: METHOD.POST
}

export { API_CREATE_CATEGORY, URL_CREATE_CATEGORY }
