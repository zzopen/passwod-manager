export interface BackendConf {
  Name?: string
  Host?: string
  Port?: string
  Mode?: string
  Timeout?: string
  Stat?: boolean
  KeepDays?: string
  DevServer?: {
    Enabled?: boolean
    Port?: string
    HealthPath?: string
  }
  Log?: {
    ServiceName?: string
    Mode?: string
    Encoding?: string
    Path?: string
    TimeFormat?: string
    Level?: string
  }
  Auth?: {
    AccessSecret?: string
    AccessExpire?: string
  }
  Sqlite?: {
    DbFilePath?: string
    Log?: {
      Level?: string
    }
  }
}

export const defaultBackendConf: BackendConf = {
  Name: 'backend-api',
  Host: '0.0.0.0',
  Port: '7002',
  Mode: 'pro',
  Timeout: '10000',
  Stat: false,
  KeepDays: '15',
  DevServer: {
    Enabled: true,
    Port: '7001',
    HealthPath: '/health'
  },
  Log: {
    ServiceName: 'cipher-api',
    Mode: 'file',
    Encoding: 'json',
    Path: 'logs/backend-api/',
    TimeFormat: '2006-01-02 15:04:05',
    Level: 'error'
  },
  Auth: {
  AccessSecret: 'abcdefghijklmn',
  AccessExpire: '2592000',
  },

Sqlite: {
DbFilePath: /Users/xulei/Downloads/password-manager/data/db/password.db
  Log:
    Level: error
}

}
