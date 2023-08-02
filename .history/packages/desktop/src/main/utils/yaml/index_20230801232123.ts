import fs from 'node:fs'
import YAML from 'yaml'

function getBackendConfig() {
  const buffer = fs.readFileSync('config.yaml', 'utf8')
  const config = YAML.parse(buffer)
}
