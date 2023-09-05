export interface BackendConfig {
  Name?: string
  Host?: string
  Port?: number
  Mode?: string
  Timeout?: number
  Stat?: boolean
  KeepDays?: number
  DevServer?: {
    Enabled?: boolean
    Port?: number
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
    AccessExpire?: number
  }
  Sqlite?: {
    DbFilePath?: string
    Log?: {
      Level?: string
    }
  }
}

export const defaultBackendConfig: BackendConfig = {
  Name: 'cipher-api',
  Host: '0.0.0.0',
  Port: undefined,
  Timeout: 10000,
  KeepDays: 15,
  Stat: false,
  Mode: 'pro',
  DevServer: {
    Enabled: true,
    Port: 7001,
    HealthPath: '/health'
  },
  Log: {
    ServiceName: 'cipher-api',
    Mode: 'file',
    Encoding: 'json',
    Path: 'logs/cipher-api/',
    TimeFormat: '2006-01-02 15:04:05',
    Level: 'error'
  },
  Auth: {
    AccessSecret: 'abcdefghijklmn',
    AccessExpire: 2592000
  },
  Sqlite: {
    DbFilePath: '',
    Log: {
      Level: 'error'
    }
  }
}
