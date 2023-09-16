import { dialog } from '@main/shared/deps'

export const exportData = async (): Promise<string> => {
  const result = await dialog.showSaveDialog({
    title: '导出',
    defaultPath: 'cipher.json',
    properties: ['createDirectory', 'showOverwriteConfirmation']
  })

  if (result.canceled || !result.filePath) {
    return ''
  }

  return result.filePath

  // const target_dir = result.filePath
  // const data = await swhdb.toJSON()
  // try {
  //   await fs.writeFile(
  //     target_dir,
  //     JSON.stringify({
  //       data,
  //       version
  //     }),
  //     'utf-8'
  //   )
  // } catch (e) {
  //   console.error(e)
  //   return false
  // }
  // return target_dir
}
