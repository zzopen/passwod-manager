import fs from 'node:fs'
import YAML from 'yaml'

interface DevServerOpt {
  host: string
  port: number
  user: string
  pwd: string
  clean: boolean
  id: string
}
interface LogOpt {
  host: string
  port: number
  user: string
  pwd: string
  database: string
}

interface AuthOpt {
  host: string
  port: number
  pwd: string
  db: number
}

interface SqliteOpt {
  host: string
  port: number
  pwd: string
  db: number
}

export { DevServerOpt, LogOpt, AuthOpt, SqliteOpt, Config }

class Config {
  devServer!: DevServerOpt
  dbsql: DBConnOpt
  redis: RedisConnOpt
  /**
   * http 端口
   */
  http: number
  /**
   * rpcUrl 服务器地址
   */
  rpcUrl: string
  /**
   * 是否启用mqtt
   */
  enableMqtt: boolean
  /**
   * 是否启用sqlServer或者mysql数据库
   */
  enableDB: boolean
  /**
   * 是否启用redis
   */
  enableRedis: boolean
  /**
   * 是否启用websocket
   */
  enableWS: boolean
  /**
   * 是否启用RPC
   */
  enableRPC: boolean
  /**
   * 离线超时时间, 毫秒
   */
  offlineTimeout: number
  /**
   * 缓存存储间隔, 毫秒
   */
  cacheInterval: number

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
