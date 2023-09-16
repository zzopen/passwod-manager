package migrate

import (
	"context"
	"gorm.io/gorm"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/query"
)

func AutoMigrate(db *gorm.DB) bool {
	_ = db.AutoMigrate(&model.SecretBook{}, &model.SecretCategory{}, model.MyTest{})
	if !migrateSecretCategory(db) {
		return false
	}

	return true
}

func migrateSecretCategory(db *gorm.DB) bool {
	if !db.Migrator().HasTable(&model.SecretCategory{}) {
		return false
	}

	secretCategory := &model.SecretCategory{}
	secretCategory.Id = model.DefaultSecretCategoryId
	secretCategory.Name = model.DefaultSecretCategoryName

	q := query.Q.SecretCategory
	ctx := context.Background()
	res, _ := q.WithContext(ctx).Where(q.Id.Eq(secretCategory.Id), q.Name.Eq(secretCategory.Name)).Take()
	if res != nil {
		return true
	}

	if err := q.WithContext(ctx).Create(secretCategory); err != nil {
		return false
	}

	return true
}
