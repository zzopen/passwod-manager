package svc

import (
	"context"
	"github.com/zeromicro/go-zero/rest"
	"github.com/zzopen/password-manager/backend/internal/config"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/query"
	"github.com/zzopen/password-manager/backend/internal/core/repository"
	"github.com/zzopen/password-manager/backend/internal/db/sqlite"

	"gorm.io/gorm"
)

type ServiceContext struct {
	Config                   config.Config
	SqliteDb                 *gorm.DB
	Auth                     rest.Middleware
	Ctx                      context.Context
	SecretBookRepository     *repository.SecretBookRepository
	SecretCategoryRepository *repository.SecretCategoryRepository
}

func NewServiceContext(c config.Config) *ServiceContext {
	ctx := context.Background()

	sqliteDb := sqlite.NewDb(c)
	query.SetDefault(sqliteDb)
	_ = sqliteDb.AutoMigrate(&model.SecretBook{}, &model.SecretCategory{}, model.MyTest{})

	return &ServiceContext{
		Ctx:                      ctx,
		Config:                   c,
		SqliteDb:                 sqliteDb,
		SecretBookRepository:     repository.NewSecretBookRepository(ctx, query.Q),
		SecretCategoryRepository: repository.NewSecretCategoryRepository(ctx, query.Q),
	}
}
