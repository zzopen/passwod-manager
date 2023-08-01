package account

import (
	"context"
	"github.com/zzopen/z-note/backend/internal/core/query"
	"github.com/zzopen/z-note/backend/internal/core/response/responsex"
  "github.com/zzopen/z-note/backend/internal/core/service/accountservice"
  "strconv"

	"github.com/zzopen/z-note/backend/internal/svc"
	"github.com/zzopen/z-note/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type DeleteLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewDeleteLogic(ctx context.Context, svcCtx *svc.ServiceContext) *DeleteLogic {
	return &DeleteLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *DeleteLogic) Delete(req *types.AccountDeleteReq) (resp *types.Reply, err error) {
	id, err := strconv.ParseUint(req.Id, 10, 64)
	if err != nil {
		return responsex.Fail(), nil
	}

	if !(id > 0) {
		return responsex.Fail(), nil
	}

  account := accountservice.GetById(l.ctx, id)
  if account == nil {
    return responsex.Success(), nil
  }

	q := query.Account
	_, err = q.WithContext(l.ctx).Where(q.Id.Eq(id)).Delete()
	if err != nil {
		return responsex.Fail(), nil
	}

	return responsex.Success(), nil
}
