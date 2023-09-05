package model

import "gorm.io/gorm"

type User struct {
	PrimaryKeyField
	Name     string `gorm:"column:name;type:TEXT;not null;default:'';comment:姓名" json:"name"`
	Username string `gorm:"column:username;type:TEXT;not null;default:'';comment:账号" json:"username"`
	Password string `gorm:"column:password;type:TEXT;not null;default:'';comment:密码(密文)" json:"password"`
	Salt     string `gorm:"column:salt;type:TEXT;not null;default:'';comment:加密盐" json:"salt"`
	CreatedAtField
	CreatedByField
	UpdatedAtField
	UpdatedByField
	DataUpdatedAtField
	DeletableModel
}

func (m *User) TableName() string {
	return "user"
}

func (m *User) BeforeCreate(tx *gorm.DB) error {
	_ = m.CreatedAtField.beforeCreate(tx)
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}

func (m *User) BeforeUpdate(tx *gorm.DB) error {
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}
