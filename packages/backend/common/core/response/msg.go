package response

import "fmt"

func RequestParameterInValidMsg(field string) string {
	return fmt.Sprintf("参数:%v 无效，请检查", field)
}

func SearchFailMsg() string {
	return fmt.Sprintf("查询失败，请重试")
}

func UpdateFailMsg() string {
	return fmt.Sprintf("更新失败，请重试")
}

func CreateFailMsg() string {
	return fmt.Sprintf("创建失败，请重试")
}

func DeleteFailMsg() string {
	return fmt.Sprintf("删除失败，请重试")
}
