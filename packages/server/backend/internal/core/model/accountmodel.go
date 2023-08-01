package model

type Account struct {
	BaseModel
	Website   string `gorm:"column:website;type:varchar(255);not null;default:'';comment:网址" json:"website"`
	Account   string `gorm:"column:account;type:varchar(255);not null;default:'';comment:账号" json:"account"`
	Password  string `gorm:"column:password;type:varchar(255);not null;default:'';comment:密码" json:"password"`
	Plaintext string `gorm:"column:plaintext;type:varchar(255);not null;default:'';comment:明文密码" json:"plaintext"`
	Email string `gorm:"column:email;type:varchar(40);not null;default:'';comment:邮箱" json:"email"`
	Mobile string `gorm:"column:mobile;type:varchar(20);not null;default:'';comment:手机号" json:"mobile"`
	Remark string `gorm:"column:remark;type:varchar(255);not null;default:'';comment:备注" json:"remark"`
}

func (Account) TableName() string {
	return "account"
}
