package datatypes

import (
  "database/sql"
  "database/sql/driver"
  "fmt"
  "time"
)

const TimeZone = "Asia/Shanghai"

type DateTime time.Time

func (datetime *DateTime) Scan(value interface{}) (err error) {
  nullTime := &sql.NullTime{}
  err = nullTime.Scan(value)
  *datetime = DateTime(nullTime.Time)
  return
}

func (datetime *DateTime) Value() (driver.Value, error) {
  var ti = time.Time(*datetime)
  if ti.IsZero() {
    return nil, nil
  }

  return ti, nil
}

func (datetime *DateTime) String() string {
  return time.Time(*datetime).Format(time.DateTime)
}

func (datetime *DateTime) local() time.Time {
  loc, _ := time.LoadLocation(TimeZone)
  return time.Time(*datetime).In(loc)
}

// GormDataType gorm common data type
func (datetime *DateTime) GormDataType() string {
  return "datetime"
}

func (datetime *DateTime) GobEncode() ([]byte, error) {
  return time.Time(*datetime).GobEncode()
}

func (datetime *DateTime) GobDecode(b []byte) error {
  return (*time.Time)(datetime).GobDecode(b)
}

func (datetime *DateTime) MarshalJSON() ([]byte, error) {
  return []byte(fmt.Sprintf("\"%v\"", datetime.String())), nil
}

func (datetime *DateTime) UnmarshalJSON(b []byte) error {
  now, err := time.ParseInLocation(`"`+time.DateTime+`"`, string(b), time.Local)
  *datetime = DateTime(now)
  return err
}
