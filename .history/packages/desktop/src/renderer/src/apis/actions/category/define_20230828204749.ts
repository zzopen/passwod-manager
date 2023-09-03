import type { ApiDescription } from '../../instance'
import { METHOD } from '../../instance'

// /category/treeList
const URL_CATEGORY_TREELIST = '/category/treeList'
const API_CATEGORY_TREELIST: ApiDescription = {
  desc: '分类树状列表',
  url: URL_CATEGORY_TREELIST,
  method: METHOD.GET
}

export { API_CATEGORY_TREELIST, URL_CATEGORY_TREELIST }
