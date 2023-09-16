package tool

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

func UpdateDeleted(m map[string]any) map[string]any {
	return UpdateFieldWithNowLocalDateTime(m, "deleted_at")
}

func UpdateIsDel(m map[string]any) map[string]any {
	return UpdateFieldWithValue(m, "is_del", FlagDelete)
}

func UpdateDelete(m map[string]any) map[string]any {
	UpdateDeleted(m)
	return UpdateIsDel(m)
}
