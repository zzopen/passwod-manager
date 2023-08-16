package sqlite

import (
	"github.com/zzopen/password-manager/backend/internal/config"
	"github.com/zzopen/password-manager/backend/internal/core/tool"
	"log"
	"os"
	"time"

	"gorm.io/gorm/logger"
)

func NewDbLogger(conf config.Config) logger.Interface {
  // db log name
	suffix := tool.NowDateStr()
	file, err := os.Create(conf.Log.Path + "sql.log" + "-" + suffix)
	if err != nil {
		panic(err)
	}

  // db log level
	var confLogLevel = conf.Sqlite.Log.Level
	var logLevel logger.LogLevel
	if confLogLevel == "Silent" {
		logLevel = logger.Silent
	} else if confLogLevel == "Error" {
		logLevel = logger.Error
	} else if confLogLevel == "Warn" {
		logLevel = logger.Warn
	} else if confLogLevel == "Info" {
		logLevel = logger.Info
	}

	fileLogger := log.New(file, "\r\n", log.LstdFlags)
	// stdOutLogger := log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
	var newLogger = logger.New(
		fileLogger,
		logger.Config{
			SlowThreshold:             time.Second,
			LogLevel:                  logLevel,
			IgnoreRecordNotFoundError: true,
			ParameterizedQueries:      false,
			Colorful:                  false,
		},
	)

	return newLogger
}
