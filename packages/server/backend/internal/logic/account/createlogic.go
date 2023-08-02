package account

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/query"
	"github.com/zzopen/password-manager/backend/internal/core/response/responsex"
	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type CreateLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewCreateLogic(ctx context.Context, svcCtx *svc.ServiceContext) *CreateLogic {
	return &CreateLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *CreateLogic) Create(req *types.AccountCreateReq) (resp *types.Reply, err error) {
	q := query.Account

	account := &model.Account{Website: req.Website, Account: req.Account, Password: req.Password, Remark: req.Remark, Mobile: req.Mobile, Email: req.Email}
	err = q.WithContext(l.ctx).Create(account)
	if err != nil {
		return responsex.Fail(), nil
	}
	return responsex.Success(), nil
}
