package example

import (
  "context"
  "github.com/zeromicro/go-zero/core/logx"
  "zz-cipher/cipher/internal/svc"
  "zz-cipher/common/core/response"
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

func (l *T1Logic) T1() (resp *response.ApiResponse, err error) {
	//res := testInsert()
	res := testUpdate()
	//res := testSearch()
	if res {
		return response.Success(), nil
	}

	return nil, response.Fail()
}

func testInsert() bool {


	return true
}

func testSearch() bool {

	return true
}

func testUpdate() bool {


	return true
}
