package tool

import "encoding/base64"

func EmptySlice[T any]() []T {
	return make([]T, 0)
}

func IsBase64(str string) bool {
	_, err := base64.StdEncoding.DecodeString(str)
	return err == nil
}
