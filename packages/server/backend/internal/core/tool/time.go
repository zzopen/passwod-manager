package tool

import (
	"github.com/zzopen/password-manager/backend/internal/core/model/datatypes"
	"time"
)

func NowDateTimeStr() string {
	return time.Now().Format(time.DateTime)
}

func NowDateStr() string {
  return time.Now().Format(time.DateOnly)
}

func NowLocalDateTime() datatypes.LocalDateTime {
	return datatypes.LocalDateTime(time.Now())
}
