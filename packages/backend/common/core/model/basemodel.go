package model

import (
  "gorm.io/gorm"
  "zz-cipher/common/core/model/datatypes"
  "zz-cipher/common/core/tool"
)

// https://www.printlove.cn/tools/sql2gorm

type BaseModel struct {
  PrimaryKeyField
  CreatedByField
  UpdatedByField
  CreatedAtField
  UpdatedAtField
}

type PrimaryKeyField struct {
  Id uint64 `gorm:"column:id;type:INTEGER;primaryKey;unique;autoIncrement;not null;comment:主键Id" json:"id"`
}

type CreatedByField struct {
  CreatedBy string `gorm:"column:created_by;type:TEXT;not null;default:'';comment:创建者" json:"created_by"`
}

type UpdatedByField struct {
  UpdatedBy string `gorm:"column:updated_by;type:TEXT;not null;default:'';comment:更新者" json:"updated_by"`
}

type CreatedAtField struct {
  CreatedAt datatypes.LocalDateTime `gorm:"autoCreateTime:false;column:created_at;not null;comment:创建时间;" json:"created_at"`
}

func (f *CreatedAtField) beforeCreate(tx *gorm.DB) error {
  tx.Statement.SetColumn("created_at", tool.NowLocalDateTime())
  return nil
}

type UpdatedAtField struct {
  UpdatedAt datatypes.LocalDateTime `gorm:"autoUpdateTime:false;column:updated_at;not null;comment:更新时间;" json:"updated_at"`
}

func (f *UpdatedAtField) beforeCreate(tx *gorm.DB) error {
  tx.Statement.SetColumn("updated_at", tool.NowLocalDateTime())
  return nil
}

type DataUpdatedAtField struct {
  DataUpdatedAt datatypes.LocalDateTime `gorm:"autoUpdateTime:false;column:data_updated_at;not null;comment:数据更新时间;" json:"data_updated_at"`
}

func (f *DataUpdatedAtField) beforeCreate(tx *gorm.DB) error {
  tx.Statement.SetColumn("data_updated_at", tool.NowLocalDateTime())
  return nil
}

type DeletableModel struct {
  IsDelField
  DeletedAtField
  DeletedByField
}

func (s *DeletableModel) IsDelete() bool {
  return tool.IsDelete(s.IsDel)
}

type IsDelField struct {
  IsDel uint8 `gorm:"column:is_del;type:INTEGER;not null;default:0;comment:删除标记,0-未删除，1-已删除;" json:"is_del"`
}

func (f *IsDelField) beforeDelete(tx *gorm.DB) error {
  tx.Statement.SetColumn("is_del", tool.FlagDelete)
  return nil
}

type DeletedByField struct {
  DeletedBy string `gorm:"column:deleted_by;type:TEXT;not null;default:'';comment:删除者" json:"deleted_by"`
}

type DeletedAtField struct {
  DeletedAt datatypes.LocalDateTime `gorm:"autoUpdateTime:false;column:deleted_at;not null;comment:删除时间;" json:"deleted_at"`
}

func (f *DeletedAtField) beforeDelete(tx *gorm.DB) error {
  tx.Statement.SetColumn("deleted_at", tool.NowLocalDateTime())
  return nil
}
