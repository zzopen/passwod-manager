import fs from 'node:fs'
import YAML from 'yaml'

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
  DirPath: string
  DbName: string
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
      const buffer = fs.readFileSync('config.yaml', 'utf8')
      const config = YAML.parse(buffer)
      this.rxmqtt = config['rxmqtt']
      this.dbsql = config['dbsql']
      this.redis = config['redis']
      this.http = config['http']
      this.rpcUrl = config['rpcUrl']
      this.enableMqtt = config['enableMqtt']
      this.enableDB = config['enableDB']
      this.enableRedis = config['enableRedis']
      this.enableWS = config['enableWS']
      this.enableRPC = config['enableRPC']
      this.offlineTimeout = config['offlineTimeout']
      this.cacheInterval = config['cacheInterval']
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * save
   */
  public save() {
    try {
      fs.writeFileSync('config.yaml', YAML.stringify(this))
    } catch (err) {
      console.log(err)
    }
  }
}

function getConfigPath() {}

export type { DevServerOpt, LogOpt, AuthOpt, SqliteOpt }
export const backendConfig = new Config()
