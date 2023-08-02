package accountservice

import (
	"context"

	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/query"
)

// GetAll 获取全部账号数据
func GetAll(ctx context.Context) []*model.Account {
	q := query.Account
	res, err := q.WithContext(ctx).Find()
	if err != nil {
		return nil
	}

	return res
}

// GetById 根据id查询account记录
func GetById(ctx context.Context, id uint64) *model.Account {
	q := query.Account
	res, err := q.WithContext(ctx).Where(q.Id.Eq(id)).Take()
	if err != nil {
		return nil
	}

	return res
}
