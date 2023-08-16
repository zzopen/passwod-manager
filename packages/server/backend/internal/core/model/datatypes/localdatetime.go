package datatypes

import (
	"database/sql"
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"time"
)

const TimeZone = "Asia/Shanghai"
const ZeroDateTimeStr = "0000-00-00 00:00:00"

// 确保按照约定实现接口
var _ sql.Scanner = (*LocalDateTime)(nil)
var _ driver.Valuer = (*LocalDateTime)(nil)

type LocalDateTime time.Time

func toTime(localDateTime *LocalDateTime) time.Time {
	return time.Time(*localDateTime)
}

func toLocalDateTime(t time.Time) LocalDateTime {
	if t.IsZero() {
		return LocalDateTime{}
	}

	return LocalDateTime(t)
}

func (localDateTime *LocalDateTime) IsZero() bool {
	return toTime(localDateTime).IsZero()
}

func (localDateTime *LocalDateTime) String() string {
	if localDateTime.IsZero() {
		return ZeroDateTimeStr
	}

	return toTime(localDateTime).Format(time.DateTime)
}

func (localDateTime *LocalDateTime) Scan(value any) (err error) {
	var str string
	switch v := value.(type) {
	case []byte:
		str = string(v)
	case string:
		str = v
	case time.Time:
		*localDateTime = toLocalDateTime(v)
		return nil
	default:
		return errors.New(fmt.Sprintf("failed to scan localDateTime value: %v", v))
	}

	if str == ZeroDateTimeStr {
		*localDateTime = LocalDateTime{}
		return nil
	}

	t, err := time.Parse(time.DateTime, str)
	if err != nil {
		return err
	}

	*localDateTime = LocalDateTime(t)
	return nil
}

func (localDateTime LocalDateTime) Value() (driver.Value, error) {
	return localDateTime.String(), nil
}

// GormDataType gorm common data type
func (localDateTime *LocalDateTime) GormDataType() string {
	return "datetime"
}

// GormDBDataType returns gorm DB data type based on the current using database.
func (*LocalDateTime) GormDBDataType(db *gorm.DB, field *schema.Field) string {
	switch db.Dialector.Name() {
	case "mysql":
		return "DATETIME"
	case "postgres":
		return "DATETIME"
	case "sqlserver":
		return "DATETIME"
	case "sqlite":
		return "TEXT"
	default:
		return ""
	}
}

func (localDateTime *LocalDateTime) GobEncode() ([]byte, error) {
	return time.Time(*localDateTime).GobEncode()
}

func (localDateTime *LocalDateTime) GobDecode(b []byte) error {
	fmt.Printf("localDateTime 2 %+v, %+v", localDateTime, string(b))
	return (*time.Time)(localDateTime).GobDecode(b)
}

func (localDateTime *LocalDateTime) MarshalJSON() ([]byte, error) {
	return json.Marshal(localDateTime.String())
}

func (localDateTime *LocalDateTime) UnmarshalJSON(b []byte) error {
	fmt.Printf("localDateTime 4 %+v, %+v", localDateTime, string(b))
	return (*time.Time)(localDateTime).UnmarshalJSON(b)
}
