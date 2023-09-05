export interface BackendConf {
  Name: string
  Host: string
  Port: string
  Mode: string
  Timeout: string
  Stat: boolean
  KeepDays: string
  DevServer: {
    Enabled: string
    Port: string
    HealthPath: string
  }
  Log: {
    ServiceName: string
    Mode: string
    Encoding: string
    Path: string
    TimeFormat: string
    Level: string
  }
Auth: {
  AccessSecret: string
  AccessExpire: string
}
Sqlite:{

  DbFilePath: /Users/xulei/Downloads/password-manager/data/db/password.db
  Log: {
Level: error
  }

}
}
