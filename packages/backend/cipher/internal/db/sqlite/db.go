package sqlite

import (
  "gorm.io/driver/sqlite"
  "gorm.io/gorm"
  "zz-cipher/cipher/internal/config"
)

func NewDb(c config.Config) *gorm.DB {
  if c.Custom.Sqlite.DbFilePath == "" {
    panic("DbFilePath is empty")
  }

  db, err := gorm.Open(sqlite.Open(c.Custom.Sqlite.DbFilePath+"?mode=wal"), &gorm.Config{
    Logger:                                   NewDbLogger(c),
    SkipDefaultTransaction:                   true,
    DisableForeignKeyConstraintWhenMigrating: true,
  })
  if err != nil {
    panic("failed to connect database")
  }

  return db
}
