import { req } from '@renderer/apis/instance'
import { API_CATEGORY_TREELIST } from './define'

export interface CategoryTreeListRequest {
  [propName: string]: any
}

const categoryTreeListAction = async (p?: CategoryTreeListRequest): Promise<ZZ.API.Categorys> => {
  const apiDescription = Object.assign({}, API_CATEGORY_TREELIST)
  const [err, res] = await req.request<ZZ.DTO.SongList>(apiDescription)
  if (err) {
    return Promise.reject(err.msg)
  }

  return transferCategoryTreeList(res.data)
}

function transferCategoryTreeList(data: any[]): ZZ.API.Categorys {
  if (!data || !Array.isArray(data)) {
    return []
  }

  const res: ZZ.DTO.SongsheetList = []
  if (data.length <= 0) {
    return res
  }

  for (const item of data) {
    const songsheet: ZZ.DTO.Songsheet = {
      id: item.id ?? '',
      name: item.name ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? ''
    }

    res.push(songsheet)
  }

  return res
}
