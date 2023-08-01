package model

type Category struct {
	BaseModel
	Name string `gorm:"column:name;type:varchar(200);not null;default:'';comment:类别名称" json:"name"`
}

func (Category) TableName() string {
	return "category"
}
