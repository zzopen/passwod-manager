import { req } from '@renderer/apis/instance'
import { API_CATEGORY_TREELIST } from './define'
import { isEmptyArray } from '@common/utils'

export interface CategoryTreeListRequest {
  [propName: string]: any
}

export const categoryTreeListAction = async (
  p?: CategoryTreeListRequest
): Promise<ZZ.API.Categorys> => {
  const apiDescription = Object.assign({}, API_CATEGORY_TREELIST)
  const [err, res] = await req.request<ZZ.API.Categorys>(apiDescription)
  if (!res) {
    return Promise.reject(err!.msg)
  }

  return transferCategoryTreeList(res.data)
}

function transferCategoryTreeList(data: any[]): ZZ.API.Categorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  let res: ZZ.API.Categorys = []
  if (data.length <= 0) {
    return res
  }

  res = convert(data)
  return res
}

function convert(items: any): ZZ.API.Categorys {
  const res: ZZ.API.Categorys = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const caetgory: ZZ.API.Category = {
      id: item.id ?? '',
      pid: item.pid ?? '',
      name: item.name ?? item.name,
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? '',
      children: []
    }

    if (item.children && !isEmptyArray(item)) {
      caetgory.children = convert(item.children)
    }

    res.push(caetgory)
  }

  return res
}
