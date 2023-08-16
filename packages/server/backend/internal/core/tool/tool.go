package tool

import "strconv"

func EmptySlice[T any]() []T {
	return make([]T, 0)
}

func StringToUint64(s string) (uint64, error) {
	return strconv.ParseUint(s, 10, 64)
}

func Uint64ToString(n uint64) string {
	return strconv.FormatUint(n, 10)
}

/**** sql 相关****/

func UpdateFieldWithValue(m map[string]any, field string, value any) map[string]any {
	if m == nil {
		m = map[string]any{}
	}

	if _, ok := m[field]; !ok {
		m[field] = value
	}
  return m
}

func UpdateFieldWithNowLocalDateTime(m map[string]any, field string) map[string]any {
	return UpdateFieldWithValue(m, field, NowLocalDateTime())
}

func UpdateUpdatedAt(m map[string]any) map[string]any {
	return UpdateFieldWithNowLocalDateTime(m, "updated_at")
}

func UpdateDataUpdatedAt(m map[string]any) map[string]any {
	return UpdateFieldWithNowLocalDateTime(m, "data_updated_at")
}

func UpdateDeleted(m map[string]any) map[string]any{
  return UpdateFieldWithNowLocalDateTime(m, "deleted_at")
}

func UpdateIsDel(m map[string]any) map[string]any{
	return UpdateFieldWithValue(m, "is_del", FlagDelete)
}

func UpdateDelete(m map[string]any) map[string]any{
  UpdateDeleted(m)
  return UpdateIsDel(m)
}
