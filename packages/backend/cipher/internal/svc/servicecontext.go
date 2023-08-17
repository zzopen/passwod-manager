package svc

import (
  "context"
  "github.com/zeromicro/go-zero/rest"
  "zz-cipher/cipher/internal/config"
  "zz-cipher/cipher/internal/db/sqlite"
  "zz-cipher/common/core/model"
  "zz-cipher/common/core/query"
  "zz-cipher/common/core/repository"

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
