import { req } from '@renderer/apis/instance'
import { API_CATEGORY_TREELIST } from './define'

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

  const res: ZZ.API.Categorys = []
  if (data.length <= 0) {
    return res
  }

  for (const item of data) {
    const songsheet: ZZ.API.Categorys = {
      id: item.id ?? '',
      name: item.name ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? ''
    }
  }

  return res
}

function convert(items: any, parentId = null) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const newItem = {
      id: item.id,
      name: item.name,
      parentId: parentId,
      children: []
    }

    if (item.children) {
      convert(item.children, item.id)
      newItem.children = item.children.map((child) => child.id)
    }

    result.push(newItem)
  }
}
