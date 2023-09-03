package repository

import (
	"context"
	"errors"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/query"
	"zz-cipher/common/core/tool"
)

type SecretBookRepository struct {
	*query.Query
	ctx context.Context
}

func NewSecretBookRepository(ctx context.Context, q *query.Query) *SecretBookRepository {
	return &SecretBookRepository{Query: q, ctx: ctx}
}

// Create 创建单条记录
func (repo *SecretBookRepository) Create(m *model.SecretBook) error {
	return repo.SecretBook.WithContext(repo.ctx).Create(m)
}

// GetById 根据主键查询单条记录
func (repo *SecretBookRepository) GetById(id uint64) (*model.SecretBook, error) {
	q := repo.SecretBook
	return q.WithContext(repo.ctx).Where(q.Id.Eq(id)).Take()
}

// GetListBySecretCategoryId 根据分类ID获取记录
func (repo *SecretBookRepository) GetListBySecretCategoryId(secretCategoryId uint64) ([]*model.SecretBook, error) {
	if secretCategoryId < 0 {
		return nil, nil
	}

	q := repo.SecretBook
	res, err := q.WithContext(repo.ctx).Where(q.SecretCategoryId.Eq(secretCategoryId), q.IsDel.Eq(tool.FlagNormal)).Preload(q.SecretCategory).Find()
	if err != nil {
		return nil, err
	}

	return res, nil
}

// GetAll 获取全部记录
func (repo *SecretBookRepository) GetAll() ([]*model.SecretBook, error) {
	q := repo.SecretBook
	res, err := q.WithContext(repo.ctx).Where(q.IsDel.Eq(tool.FlagNormal)).Preload(q.SecretCategory).Find()
	if err != nil {
		return nil, err
	}

	return res, nil
}

// DeleteById 根据id删除
func (repo *SecretBookRepository) DeleteById(id uint64, m map[string]any) error {
	if id <= 0 {
		return errors.New("id 参数无效")
	}

	q := repo.SecretBook
	tool.UpdateDelete(m)
	_, err := q.WithContext(repo.ctx).Where(q.Id.Eq(id)).Updates(m)
	if err != nil {
		return err
	}

	return nil
}

// UpdateById 根据id修改
func (repo *SecretBookRepository) UpdateById(id uint64, m map[string]any) error {
	if id <= 0 {
		return errors.New("id 参数无效")
	}

	q := repo.SecretBook
	_, err := q.WithContext(repo.ctx).Where(q.Id.Eq(id)).Updates(m)
	if err != nil {
		return err
	}

	return nil
}
