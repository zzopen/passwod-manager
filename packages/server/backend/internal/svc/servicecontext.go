package svc

import (
	"github.com/zeromicro/go-zero/rest"
	"github.com/zzopen/password-manager/backend/internal/config"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/query"
	"github.com/zzopen/password-manager/backend/internal/db/sqlite"

	"gorm.io/gorm"
)

type ServiceContext struct {
	Config   config.Config
	SqliteDb *gorm.DB
	Auth     rest.Middleware
}

func NewServiceContext(c config.Config) *ServiceContext {
	sqliteDb := sqlite.NewDb(c)
	query.SetDefault(sqliteDb)
	_ = sqliteDb.AutoMigrate(&model.Account{}, &model.Category{}, &model.Website{}, &model.AccountCategory{})

	return &ServiceContext{
		Config:   c,
		SqliteDb: sqliteDb,
	}
}