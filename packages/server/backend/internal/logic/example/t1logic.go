package example

import (
	"context"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zzopen/z-note/backend/internal/core/response/responsex"
	"github.com/zzopen/z-note/backend/internal/svc"
	"github.com/zzopen/z-note/backend/internal/types"
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
	res := testSearch()
	if res {
		return responsex.Success(), nil
	}

	return responsex.Fail(), nil
}

func testInsert() bool {

	return true
}

func testSearch() bool {

	return true
}
