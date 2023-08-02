import fs from 'node:fs'
import path from 'node:path'
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
      const buffer = fs.readFileSync(getConfigPath(), 'utf8')
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
      fs.writeFileSync(getConfigPath(), YAML.stringify(this))
    } catch (err) {
      console.log(err)
    }
  }
}

function getConfigPath() {
  return path.join(__dirname, '../../../../../server/backend/etc/backend-api-back.yaml')
}

export type { DevServerOpt, LogOpt, AuthOpt, SqliteOpt }
export const backendConfig = new Config()[
  ({
    no: 1,
    type: '1',
    score: 1.5,
    content: '8. What does Richard do?',
    options: { A: "He's a newsman.", B: "He's a manager.", C: "He's a researcher." },
    answer: ['B']
  },
  {
    no: 2,
    type: '1',
    score: 1.5,
    content: '9. Where is Richard going next week?',
    options: { A: 'Birmingham.', B: 'Mexico City.', C: 'Shanghai.' },
    answer: ['B']
  },
  {
    no: 3,
    type: '1',
    score: 1.5,
    content: '10. What will the speakers do tomorrow?',
    options: { A: 'Eat out together.', B: 'Visit a university.', C: 'See Professor Hayes.' },
    answer: ['A']
  })
]
