import { req } from '@renderer/apis/instance'
import { API_EXPORT_DATA } from './define'

export interface ArpExportData {
  format: string
  encrypt: string
  out_dir: string
  file_name: string
  [propName: string]: any
}

export const exportDataAction = async (p: ArpExportData): Promise<boolean> => {
  const apiDescription = Object.assign({}, API_EXPORT_DATA)
  const { mark } = await req!.request(apiDescription, { data: p })
  if (!mark) {
    return false
  }

  return true
}
