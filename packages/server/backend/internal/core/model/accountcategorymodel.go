package model

type AccountCategory struct {
	BaseModel
	CategoryId uint64 `gorm:"column:category_id;type:int;not null;default:0;comment:分类id" json:"category_id"`
	AccountId  uint64 `gorm:"column:account_id;type:int;not null;default:0;comment:账号id" json:"account_id"`
	Status     uint8    `gorm:"column:status;type:int;not null;default:0;comment:状态 1-有效,2-无效" json:"status"`
}

func (AccountCategory) TableName() string {
	return "account_category"
}
