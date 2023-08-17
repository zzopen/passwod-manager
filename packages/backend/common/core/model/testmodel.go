package model

type MyTest struct {
}

func (*MyTest) TableName() string {
	return "my_test"
}
