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

  constructor() {
    try {
      const buffer = fse.readFileSync(getConfigPath(), 'utf8')
      const config = YAML.parse(buffer)

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

  public save() {
    try {
      fse.writeFileSync(getConfigPath(), YAML.stringify(this))
    } catch (err) {
      console.log(err)
    }
  }
}

function getConfigPath() {
  return nodePath.join(__dirname, '../../../../../server/backend/etc/backend-api-back.yaml')
}

export type { DevServerOpt, LogOpt, AuthOpt, SqliteOpt }
export const backendConfig = new Config()
