package tool

const FlagNormal = 0
const FlagDelete = 1

func IsNormal(status uint8) bool {
	return status == FlagNormal
}

func IsDelete(flag uint8) bool {
	return flag == FlagDelete
}
