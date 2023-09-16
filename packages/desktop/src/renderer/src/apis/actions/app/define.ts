import type { ApiDescription } from '@renderer/apis/instance'
import { METHOD } from '@renderer/apis/instance'

const URL_EXPORT_DATA = '/export/data'
const API_EXPORT_DATA: ApiDescription = {
  desc: '导出数据',
  url: URL_EXPORT_DATA,
  method: METHOD.POST
}

export { API_EXPORT_DATA, URL_EXPORT_DATA }
