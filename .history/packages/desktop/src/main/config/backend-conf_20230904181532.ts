export interface BackendConf {
  Name: string
  Host: string
  Port: string
  Mode: string
  Timeout: string
  Stat: boolean
  KeepDays: number
  DevServer: {
    Enabled: string
    Port: string
    HealthPath: string
  }
}
