import { fse, nodePath, YAML } from '@main/shared/deps'

export const readFromYaml = async (file: string): Promise<any> => {
  const buffer = await fse.readFile(file, 'utf8')
  return YAML.parse(buffer)
}

export const writeToYaml = async (file: string, data: any): Promise<boolean> => {
  try {
    await fse.writeFile(file, YAML.stringify(data, { keepSourceTokens: true }))
    return true
  } catch (error) {
    return false
  }
}
