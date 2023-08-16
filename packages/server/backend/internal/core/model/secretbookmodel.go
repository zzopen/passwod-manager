package model

import "gorm.io/gorm"

type SecretBook struct {
	PrimaryKeyField
	SecretCategoryId uint64          `gorm:"column:secret_category_id;type:INTEGER;not null;default:0;comment:分类id" json:"secret_category_id"`
	Title            string          `gorm:"column:title;type:TEXT;not null;default:'';comment:标题" json:"title"`
	Website          string          `gorm:"column:website;type:TEXT;not null;default:'';comment:网址" json:"website"`
	Username         string          `gorm:"column:username;type:TEXT;not null;default:'';comment:账号" json:"username"`
	Password         string          `gorm:"column:password;type:TEXT;not null;default:'';comment:密码(明文)" json:"password"`
	Email            string          `gorm:"column:email;type:TEXT;not null;default:'';comment:邮箱" json:"email"`
	Mobile           string          `gorm:"column:mobile;type:TEXT;not null;default:'';comment:手机号" json:"mobile"`
	Remark           string          `gorm:"column:remark;type:TEXT;not null;default:'';comment:备注" json:"remark"`
	SecretCategory   *SecretCategory `gorm:"foreignKey:SecretCategoryId"`
	CreatedAtField
	CreatedByField
	UpdatedAtField
	UpdatedByField
	DataUpdatedAtField
	DeletableModel
}

func (m *SecretBook) TableName() string {
	return "secret_book"
}

func (m *SecretBook) BeforeCreate(tx *gorm.DB) error {
	_ = m.CreatedAtField.beforeCreate(tx)
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}

func (m *SecretBook) BeforeUpdate(tx *gorm.DB) error {
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}
