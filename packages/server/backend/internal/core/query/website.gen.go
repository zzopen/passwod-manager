// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/zzopen/z-note/backend/internal/core/model"
)

func newWebsite(db *gorm.DB, opts ...gen.DOOption) website {
	_website := website{}

	_website.websiteDo.UseDB(db, opts...)
	_website.websiteDo.UseModel(&model.Website{})

	tableName := _website.websiteDo.TableName()
	_website.ALL = field.NewAsterisk(tableName)
	_website.Id = field.NewUint64(tableName, "id")
	_website.Creater = field.NewString(tableName, "creater")
	_website.Updater = field.NewString(tableName, "updater")
	_website.CreatedAt = field.NewField(tableName, "created_at")
	_website.UpdatedAt = field.NewField(tableName, "updated_at")
	_website.DataUpdatedAt = field.NewField(tableName, "data_updated_at")
	_website.Website = field.NewString(tableName, "website")
	_website.Alias_ = field.NewString(tableName, "alias")
	_website.Remark = field.NewString(tableName, "remark")

	_website.fillFieldMap()

	return _website
}

type website struct {
	websiteDo

	ALL           field.Asterisk
	Id            field.Uint64
	Creater       field.String
	Updater       field.String
	CreatedAt     field.Field
	UpdatedAt     field.Field
	DataUpdatedAt field.Field
	Website       field.String
	Alias_        field.String
	Remark        field.String

	fieldMap map[string]field.Expr
}

func (w website) Table(newTableName string) *website {
	w.websiteDo.UseTable(newTableName)
	return w.updateTableName(newTableName)
}

func (w website) As(alias string) *website {
	w.websiteDo.DO = *(w.websiteDo.As(alias).(*gen.DO))
	return w.updateTableName(alias)
}

func (w *website) updateTableName(table string) *website {
	w.ALL = field.NewAsterisk(table)
	w.Id = field.NewUint64(table, "id")
	w.Creater = field.NewString(table, "creater")
	w.Updater = field.NewString(table, "updater")
	w.CreatedAt = field.NewField(table, "created_at")
	w.UpdatedAt = field.NewField(table, "updated_at")
	w.DataUpdatedAt = field.NewField(table, "data_updated_at")
	w.Website = field.NewString(table, "website")
	w.Alias_ = field.NewString(table, "alias")
	w.Remark = field.NewString(table, "remark")

	w.fillFieldMap()

	return w
}

func (w *website) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := w.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (w *website) fillFieldMap() {
	w.fieldMap = make(map[string]field.Expr, 9)
	w.fieldMap["id"] = w.Id
	w.fieldMap["creater"] = w.Creater
	w.fieldMap["updater"] = w.Updater
	w.fieldMap["created_at"] = w.CreatedAt
	w.fieldMap["updated_at"] = w.UpdatedAt
	w.fieldMap["data_updated_at"] = w.DataUpdatedAt
	w.fieldMap["website"] = w.Website
	w.fieldMap["alias"] = w.Alias_
	w.fieldMap["remark"] = w.Remark
}

func (w website) clone(db *gorm.DB) website {
	w.websiteDo.ReplaceConnPool(db.Statement.ConnPool)
	return w
}

func (w website) replaceDB(db *gorm.DB) website {
	w.websiteDo.ReplaceDB(db)
	return w
}

type websiteDo struct{ gen.DO }

type IWebsiteDo interface {
	gen.SubQuery
	Debug() IWebsiteDo
	WithContext(ctx context.Context) IWebsiteDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IWebsiteDo
	WriteDB() IWebsiteDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IWebsiteDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IWebsiteDo
	Not(conds ...gen.Condition) IWebsiteDo
	Or(conds ...gen.Condition) IWebsiteDo
	Select(conds ...field.Expr) IWebsiteDo
	Where(conds ...gen.Condition) IWebsiteDo
	Order(conds ...field.Expr) IWebsiteDo
	Distinct(cols ...field.Expr) IWebsiteDo
	Omit(cols ...field.Expr) IWebsiteDo
	Join(table schema.Tabler, on ...field.Expr) IWebsiteDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IWebsiteDo
	RightJoin(table schema.Tabler, on ...field.Expr) IWebsiteDo
	Group(cols ...field.Expr) IWebsiteDo
	Having(conds ...gen.Condition) IWebsiteDo
	Limit(limit int) IWebsiteDo
	Offset(offset int) IWebsiteDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IWebsiteDo
	Unscoped() IWebsiteDo
	Create(values ...*model.Website) error
	CreateInBatches(values []*model.Website, batchSize int) error
	Save(values ...*model.Website) error
	First() (*model.Website, error)
	Take() (*model.Website, error)
	Last() (*model.Website, error)
	Find() ([]*model.Website, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Website, err error)
	FindInBatches(result *[]*model.Website, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*model.Website) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IWebsiteDo
	Assign(attrs ...field.AssignExpr) IWebsiteDo
	Joins(fields ...field.RelationField) IWebsiteDo
	Preload(fields ...field.RelationField) IWebsiteDo
	FirstOrInit() (*model.Website, error)
	FirstOrCreate() (*model.Website, error)
	FindByPage(offset int, limit int) (result []*model.Website, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IWebsiteDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	FilterWithNameAndRole(name string, role string) (result []model.Website, err error)
}

// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
func (w websiteDo) FilterWithNameAndRole(name string, role string) (result []model.Website, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, name)
	generateSQL.WriteString("SELECT * FROM website WHERE name = ? ")
	if role != "" {
		params = append(params, role)
		generateSQL.WriteString("AND role = ? ")
	}

	var executeSQL *gorm.DB
	executeSQL = w.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (w websiteDo) Debug() IWebsiteDo {
	return w.withDO(w.DO.Debug())
}

func (w websiteDo) WithContext(ctx context.Context) IWebsiteDo {
	return w.withDO(w.DO.WithContext(ctx))
}

func (w websiteDo) ReadDB() IWebsiteDo {
	return w.Clauses(dbresolver.Read)
}

func (w websiteDo) WriteDB() IWebsiteDo {
	return w.Clauses(dbresolver.Write)
}

func (w websiteDo) Session(config *gorm.Session) IWebsiteDo {
	return w.withDO(w.DO.Session(config))
}

func (w websiteDo) Clauses(conds ...clause.Expression) IWebsiteDo {
	return w.withDO(w.DO.Clauses(conds...))
}

func (w websiteDo) Returning(value interface{}, columns ...string) IWebsiteDo {
	return w.withDO(w.DO.Returning(value, columns...))
}

func (w websiteDo) Not(conds ...gen.Condition) IWebsiteDo {
	return w.withDO(w.DO.Not(conds...))
}

func (w websiteDo) Or(conds ...gen.Condition) IWebsiteDo {
	return w.withDO(w.DO.Or(conds...))
}

func (w websiteDo) Select(conds ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Select(conds...))
}

func (w websiteDo) Where(conds ...gen.Condition) IWebsiteDo {
	return w.withDO(w.DO.Where(conds...))
}

func (w websiteDo) Order(conds ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Order(conds...))
}

func (w websiteDo) Distinct(cols ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Distinct(cols...))
}

func (w websiteDo) Omit(cols ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Omit(cols...))
}

func (w websiteDo) Join(table schema.Tabler, on ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Join(table, on...))
}

func (w websiteDo) LeftJoin(table schema.Tabler, on ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.LeftJoin(table, on...))
}

func (w websiteDo) RightJoin(table schema.Tabler, on ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.RightJoin(table, on...))
}

func (w websiteDo) Group(cols ...field.Expr) IWebsiteDo {
	return w.withDO(w.DO.Group(cols...))
}

func (w websiteDo) Having(conds ...gen.Condition) IWebsiteDo {
	return w.withDO(w.DO.Having(conds...))
}

func (w websiteDo) Limit(limit int) IWebsiteDo {
	return w.withDO(w.DO.Limit(limit))
}

func (w websiteDo) Offset(offset int) IWebsiteDo {
	return w.withDO(w.DO.Offset(offset))
}

func (w websiteDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IWebsiteDo {
	return w.withDO(w.DO.Scopes(funcs...))
}

func (w websiteDo) Unscoped() IWebsiteDo {
	return w.withDO(w.DO.Unscoped())
}

func (w websiteDo) Create(values ...*model.Website) error {
	if len(values) == 0 {
		return nil
	}
	return w.DO.Create(values)
}

func (w websiteDo) CreateInBatches(values []*model.Website, batchSize int) error {
	return w.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (w websiteDo) Save(values ...*model.Website) error {
	if len(values) == 0 {
		return nil
	}
	return w.DO.Save(values)
}

func (w websiteDo) First() (*model.Website, error) {
	if result, err := w.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.Website), nil
	}
}

func (w websiteDo) Take() (*model.Website, error) {
	if result, err := w.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.Website), nil
	}
}

func (w websiteDo) Last() (*model.Website, error) {
	if result, err := w.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.Website), nil
	}
}

func (w websiteDo) Find() ([]*model.Website, error) {
	result, err := w.DO.Find()
	return result.([]*model.Website), err
}

func (w websiteDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Website, err error) {
	buf := make([]*model.Website, 0, batchSize)
	err = w.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (w websiteDo) FindInBatches(result *[]*model.Website, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return w.DO.FindInBatches(result, batchSize, fc)
}

func (w websiteDo) Attrs(attrs ...field.AssignExpr) IWebsiteDo {
	return w.withDO(w.DO.Attrs(attrs...))
}

func (w websiteDo) Assign(attrs ...field.AssignExpr) IWebsiteDo {
	return w.withDO(w.DO.Assign(attrs...))
}

func (w websiteDo) Joins(fields ...field.RelationField) IWebsiteDo {
	for _, _f := range fields {
		w = *w.withDO(w.DO.Joins(_f))
	}
	return &w
}

func (w websiteDo) Preload(fields ...field.RelationField) IWebsiteDo {
	for _, _f := range fields {
		w = *w.withDO(w.DO.Preload(_f))
	}
	return &w
}

func (w websiteDo) FirstOrInit() (*model.Website, error) {
	if result, err := w.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.Website), nil
	}
}

func (w websiteDo) FirstOrCreate() (*model.Website, error) {
	if result, err := w.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.Website), nil
	}
}

func (w websiteDo) FindByPage(offset int, limit int) (result []*model.Website, count int64, err error) {
	result, err = w.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = w.Offset(-1).Limit(-1).Count()
	return
}

func (w websiteDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = w.Count()
	if err != nil {
		return
	}

	err = w.Offset(offset).Limit(limit).Scan(result)
	return
}

func (w websiteDo) Scan(result interface{}) (err error) {
	return w.DO.Scan(result)
}

func (w websiteDo) Delete(models ...*model.Website) (result gen.ResultInfo, err error) {
	return w.DO.Delete(models)
}

func (w *websiteDo) withDO(do gen.Dao) *websiteDo {
	w.DO = *do.(*gen.DO)
	return w
}
