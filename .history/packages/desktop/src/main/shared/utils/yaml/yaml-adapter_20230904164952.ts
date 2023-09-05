import { YAML, TextFile } from '@common/shared/deps'

export class YAMLAdapter {
  adapter: TextFile
  constructor(filePath) {
    this.adapter = new TextFile(filfilePathename)
  }

  async read() {
    const data = await this.adapter.read()
    if (data === null) {
      return null
    } else {
      return YAML.parse(data)
    }
  }

  write(obj) {
    return this.adapter.write(YAML.stringify(obj))
  }
}

// const adapter = new YAMLFile('file.yaml')
// const db = new Low(adapter)
