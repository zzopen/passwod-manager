import { req } from '@renderer/apis/instance'
import { API_CATEGORY_TREELIST } from './define'

export interface CategoryTreeListRequest {
  [propName: string]: any
}

const categoryTreeListAction = async (p?: CategoryTreeListRequest): Promise<ZZ.DTO.SongList> => {
  // restful 形式
  const apiDescription = Object.assign({}, API_SONGSHEET_SONG_LIST)
  apiDescription.url += `/${p.songsheetId}`
  const [err, res] = await req.request<ZZ.DTO.SongList>(apiDescription)
  if (err) {
    return Promise.reject(err.msg)
  }

  return transferSongList(res.data)
}
