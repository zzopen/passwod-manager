import { fse, nodePath, YAML } from '@main/utils'

interface DevServerOpt {
  Enabled: boolean
  Port: number
  HealthPath: string
}

interface LogOpt {
  ServiceName: string
  Mode: string
  Encoding: string
  Path: string
  TimeFormat: string
}

interface AuthOpt {
  AccessSecret: string
  AccessExpire: number
}

interface SqliteOpt {
  DbFilePath: string
}

class Config {
  Name!: string
  Host!: string
  Port!: number
  Mode!: string
  Timeout!: number

  DevServer!: DevServerOpt
  Log!: LogOpt
  Auth!: AuthOpt
  Sqlite!: SqliteOpt

  constructor(config: any) {
    try {
      // single
      this.Name = config['Name']
      this.Host = config['Host']
      this.Port = config['Port']
      this.Mode = config['Mode']
      this.Timeout = config['Timeout']

      // group
      this.DevServer = config['DevServer']
      this.Log = config['Log']
      this.Auth = config['Auth']
      this.Sqlite = config['Sqlite']
    } catch (err) {
      console.log(err)
    }
  }

  public async write() {
    try {
      await fse.writeFile(getConfigPath(), YAML.stringify(this))
    } catch (err) {
      console.log(err)
    }
  }
}

function getConfigPath() {
  return nodePath.join(__dirname, '../../../../server/backend/etc/backend-api-back.yaml')
}

async function readBackendConfig() {
  const buffer = await fse.readFile(getConfigPath(), 'utf8')
  const config = YAML.parse(buffer)
  return new Config(config)
}

export type { DevServerOpt, LogOpt, AuthOpt, SqliteOpt }
export { readBackendConfig }
