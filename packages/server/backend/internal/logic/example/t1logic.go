package example

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/query"
	"github.com/zzopen/password-manager/backend/internal/core/tool"

	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zzopen/password-manager/backend/internal/core/response"
	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"
)

type T1Logic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewT1Logic(ctx context.Context, svcCtx *svc.ServiceContext) *T1Logic {
	return &T1Logic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *T1Logic) T1() (resp *types.Reply, err error) {
	//res := testInsert()
	res := testUpdate()
	//res := testSearch()
	if res {
		return response.Success(), nil
	}

	return nil, response.Fail()
}

func testInsert() bool {
	q := query.MyTest
	m := &model.MyTest{Title: "asdasd"}

	err := q.Create(m)
	if err != nil {
		return false
	}

	return true
}

func testSearch() bool {

	return true
}

func testUpdate() bool {
	q := query.MyTest
	m := map[string]any{
		"title":      "sss",
		"updated_at": tool.NowDateTimeStr(),
	}

	q.UseModel(model.MyTest{})
	_, err := q.Where(q.Id.Eq(1)).Select(q.Title, q.UpdatedAt, q.UpdatedAt2).Updates(m)
	if err != nil {
		return false
	}

	return true
}
