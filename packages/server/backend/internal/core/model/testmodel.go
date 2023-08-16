package model

import (
	d "github.com/zzopen/password-manager/backend/internal/core/model/datatypes"
	"github.com/zzopen/password-manager/backend/internal/core/tool"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type MyTest struct {
	PrimaryKeyField
	Title string `gorm:"column:title;type:TEXT;not null;default:'';comment:标题" json:"title"`
	CreatedAtField
	UpdatedAt  d.LocalDateTime `gorm:"autoUpdateTime;column:updated_at;not null;comment:更新时间;" json:"updated_at"`
	UpdatedAt2 datatypes.Time  `gorm:"autoUpdateTime;column:updated_at2;not null;comment:更新时间;" json:"updated_at2"`
}

func (*MyTest) TableName() string {
	return "my_test"
}

func (m *MyTest) BeforeCreate(tx *gorm.DB) error {
	nowLocalDateTime := tool.NowLocalDateTime()
	tx.Statement.SetColumn("created_at", nowLocalDateTime)
	tx.Statement.SetColumn("updated_at", nowLocalDateTime)
	tx.Statement.SetColumn("updated_at2", nowLocalDateTime)
	return nil
}
