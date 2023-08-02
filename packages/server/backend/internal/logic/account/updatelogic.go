package account

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/query"
	"github.com/zzopen/password-manager/backend/internal/core/response/responsex"
	"github.com/zzopen/password-manager/backend/internal/core/service/accountservice"
	"strconv"

	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type UpdateLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewUpdateLogic(ctx context.Context, svcCtx *svc.ServiceContext) *UpdateLogic {
	return &UpdateLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *UpdateLogic) Update(req *types.AccountUpdateReq) (resp *types.Reply, err error) {
	id, err := strconv.ParseUint(req.Id, 10, 64)
	if err != nil {
		return responsex.Fail(), nil
	}

	if !(id > 0) {
		return responsex.Fail(), nil
	}

	account := accountservice.GetById(l.ctx, id)
	if account == nil {
		return responsex.FailWithMsg("记录不存在"), nil
	}

	data := map[string]interface{}{}
	data["website"] = req.Website
	data["account"] = req.Account
	data["password"] = req.Password
	data["mobile"] = req.Mobile
	data["email"] = req.Email
	data["remark"] = req.Remark

	q := query.Account
	_, err = q.WithContext(l.ctx).Where(q.Id.Eq(id)).Updates(data)
	if err != nil {
		return responsex.Fail(), nil
	}

	return responsex.Success(), nil
}
