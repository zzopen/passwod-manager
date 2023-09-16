package tool

import "strconv"

func StringToUint64(s string) (uint64, error) {
	return strconv.ParseUint(s, 10, 64)
}

func Uint64ToString(n uint64) string {
	return strconv.FormatUint(n, 10)
}

func Uint8ToString(n uint8) string {
	return strconv.Itoa(int(n))
}
