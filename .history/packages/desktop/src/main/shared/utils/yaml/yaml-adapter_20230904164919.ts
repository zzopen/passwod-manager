import { YAML, Low, TextFile } from '@common/shared/deps'

export class YAMLAdapter {
  adapter: TextFile
  constructor(filename) {
    this.adapter = new TextFile(filename)
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
