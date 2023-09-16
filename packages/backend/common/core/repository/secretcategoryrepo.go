package repository

import (
	"context"
	"errors"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/query"
	"zz-cipher/common/core/tool"
)

type SecretCategoryRepository struct {
	*query.Query
	ctx context.Context
}

func NewSecretCategoryRepository(ctx context.Context, q *query.Query) *SecretCategoryRepository {
	return &SecretCategoryRepository{Query: q, ctx: ctx}
}

// Create 创建单条记录
func (repo *SecretCategoryRepository) Create(m *model.SecretCategory) error {
	return repo.SecretCategory.WithContext(repo.ctx).Create(m)
}

// GetById 根据主键查询单条记录
func (repo *SecretCategoryRepository) GetById(id uint64) (*model.SecretCategory, error) {
	q := repo.SecretCategory
	return q.WithContext(repo.ctx).Where(q.Id.Eq(id)).Take()
}

func (repo *SecretCategoryRepository) GetByName(name string) (*model.SecretCategory, error) {
	q := repo.SecretCategory
	return q.WithContext(repo.ctx).Where(q.Name.Eq(name)).First()
}

func (repo *SecretCategoryRepository) IsExists(name string) bool {
	res, _ := repo.GetByName(name)
	if res == nil {
		return false
	}

	return true
}

// UpdateById 根据id修改
func (repo *SecretCategoryRepository) UpdateById(id uint64, m map[string]any) error {
	if id <= 0 {
		return errors.New("id 参数无效")
	}

	q := repo.SecretCategory
	_, err := q.Debug().WithContext(repo.ctx).Where(q.Id.Eq(id)).Updates(m)
	if err != nil {
		return err
	}

	return nil
}

// GetAllNormal 获取全部正常记录
func (repo *SecretCategoryRepository) GetAllNormal() ([]*model.SecretCategory, error) {
	q := repo.SecretCategory
	res, err := q.WithContext(repo.ctx).Where(q.IsDel.Eq(tool.FlagNormal)).Order(q.Id).Find()
	if err != nil {
		return nil, err
	}

	return res, nil
}

// DeleteById 根据id删除
func (repo *SecretCategoryRepository) DeleteById(id uint64, m map[string]any) error {
	if id <= 0 {
		return errors.New("id 参数无效")
	}

	q := repo.SecretCategory
	tool.UpdateDelete(m)
	_, err := q.WithContext(repo.ctx).Where(q.Id.Eq(id)).Updates(m)
	if err != nil {
		return err
	}

	return nil
}

// GetAll 获取全部记录
func (repo *SecretCategoryRepository) GetAll() ([]*model.SecretCategory, error) {
	q := repo.SecretCategory
	res, err := q.WithContext(repo.ctx).Order(q.Id).Find()
	if err != nil {
		return nil, err
	}

	return res, nil
}

func (repo *SecretCategoryRepository) ToMap(list []*model.SecretCategory) map[string]*model.SecretCategory {
	m := make(map[string]*model.SecretCategory)
	if list == nil {
		return m
	}

	for _, secretCategory := range list {
		m[tool.Uint64ToString(secretCategory.Id)] = secretCategory
	}

	return m
}
