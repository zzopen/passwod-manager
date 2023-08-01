package model

type Website struct {
	BaseModel
	Website string `gorm:"column:website;type:varchar(255);not null;default:'';comment:网址" json:"website"`
	Alias   string `gorm:"column:alias;type:varchar(255);not null;default:'';comment:别名" json:"alias"`
	Remark  string `gorm:"column:remark;type:varchar(255);not null;default:'';comment:备注" json:"remark"`
}

func (Website) TableName() string {
	return "website"
}
