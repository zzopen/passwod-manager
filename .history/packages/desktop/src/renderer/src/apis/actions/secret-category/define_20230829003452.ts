import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

// /secretcategory/treeList
const URL_CATEGORY_TREELIST = '/secretcategory/treeList'
const API_CATEGORY_TREELIST: ApiDescription = {
  desc: '分类树状列表',
  url: URL_CATEGORY_TREELIST,
  method: METHOD.GET
}

// /secretcategory/list
const URL_CATEGORY_LIST = '/secretcategory/list'
const API_CATEGORY_LIST: ApiDescription = {
  desc: '分类列表',
  url: URL_CATEGORY_LIST,
  method: METHOD.GET
}

export { API_CATEGORY_TREELIST, URL_CATEGORY_TREELIST }
