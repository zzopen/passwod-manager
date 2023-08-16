package model

import (
	"github.com/duke-git/lancet/v2/slice"
	"github.com/zzopen/password-manager/backend/internal/core/service/secretcategoryservice"
	"github.com/zzopen/password-manager/backend/internal/core/tool"
	"gorm.io/gorm"
)

type SecretCategory struct {
	PrimaryKeyField
	Name     string `gorm:"column:name;type:TEXT;not null;default:'';comment:类目名称" json:"name"`
	Pid      uint64 `gorm:"column:pid;type:INTEGER;not null;default:0;comment:父分类id" json:"pid"`
	PidChain string `gorm:"column:pid_chain;type:TEXT;not null;default:'';comment:父级链" json:"pid_chain"`
	CreatedAtField
	CreatedByField
	UpdatedAtField
	UpdatedByField
	DataUpdatedAtField
	DeletableModel
}

func (m *SecretCategory) TableName() string {
	return "secret_category"
}

func (m *SecretCategory) BeforeCreate(tx *gorm.DB) error {
	_ = m.CreatedAtField.beforeCreate(tx)
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}

func (m *SecretCategory) BeforeUpdate(tx *gorm.DB) error {
	_ = m.UpdatedAtField.beforeCreate(tx)
	_ = m.DataUpdatedAtField.beforeCreate(tx)
	return nil
}

/**** 业务 ****/

// InheritChain 创建 pid_chain,例如：'-1-'
func (m *SecretCategory) InheritChain() string {
	if m == nil {
		return ""
	}

	idStr := tool.Uint64ToString(m.Id)

	if m.PidChain != "" {
		return m.PidChain + idStr + "-"
	}

	return "-" + idStr + "-"
}

func (m *SecretCategory) GetChainIds() []string {
	return secretcategoryservice.ParseChainIds(m.PidChain)
}

func (m *SecretCategory) IsSuperior(pid uint64) bool {
	return slice.IndexOf(m.GetChainIds(), tool.Uint64ToString(pid)) != -1
}
