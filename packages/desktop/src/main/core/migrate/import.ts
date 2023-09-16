import { dialog } from '@main/shared/deps'

export const importData = async () => {
  const result = await dialog.showOpenDialog({
    title: '导入',
    defaultPath: global.last_path,
    filters: [
      { name: 'JSON', extensions: ['json'] },
      { name: 'SQL', extensions: ['sql'] },
      { name: 'CSV', extensions: ['csv'] },
      { name: 'EXCEL', extensions: ['excel'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile']
  })

  if (result.canceled) {
    return null
  }

  return

  // let paths = result.filePaths
  // let fn = paths[0]
  // let content = await fs.readFile(fn, 'utf-8')

  // let data: any
  // try {
  //   data = JSON.parse(content)
  // } catch (e) {
  //   console.error(e)
  //   return 'parse_error'
  // }

  // if (typeof data !== 'object' || !data.version || !Array.isArray(data.version)) {
  //   return 'invalid_data'
  // }

  // let { version } = data
  // if (version[0] === 3) {
  //   // import v3 data
  //   try {
  //     await importV3Data(data)
  //   } catch (e) {
  //     console.error(e)
  //     return 'invalid_v3_data'
  //   }

  //   return true
  // }

  // if (version[0] > 4) {
  //   return 'new_version'
  // }

  // if (!data.data || typeof data.data !== 'object') {
  //   return 'invalid_data_key'
  // }

  // await swhdb.loadJSON(data.data)

  // return true
}
