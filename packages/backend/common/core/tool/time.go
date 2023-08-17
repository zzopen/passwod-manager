package tool

import (
  "time"
  "zz-cipher/common/core/model/datatypes"
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
