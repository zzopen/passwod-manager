export interface BackendConf {
  Name?: string
  Host?: string
  Port?: string
  Mode?: string
  Timeout?: string
  Stat?: boolean
  KeepDays?: string
  DevServer?: {
    Enabled?: string
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
    Port: 7001,
    HealthPath: '/health'
  }
}
