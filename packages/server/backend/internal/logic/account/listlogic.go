package account

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/response/responsex"
	"github.com/zzopen/password-manager/backend/internal/core/service/accountservice"
	"github.com/zzopen/password-manager/backend/internal/core/tool"

	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type ListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type ListResponseData struct {
	Id            uint64 `json:"id"`
	Website       string `json:"website"`
	Account       string `json:"account"`
	Password      string `json:"password"`
	CreatedAt     string `json:"created_at"`
	UpdatedAt     string `json:"updated_at"`
	DataUpdatedAt string `json:"data_updated_at"`
}

func NewListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ListLogic {
	return &ListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ListLogic) List(req *types.AccountListReq) (resp *types.Reply, err error) {
	accountList := accountservice.GetAll(l.ctx)
	if accountList == nil {
		return responsex.SuccessWithData(tool.EmptySlice[*ListResponseData]()), nil
	}

	var res []*ListResponseData
	for _, v := range accountList {
		res = append(res, &ListResponseData{
			Id:            v.Id,
			Website:       v.Website,
			Account:       v.Account,
			Password:      v.Password,
			CreatedAt:     v.CreatedAt.String(),
			UpdatedAt:     v.UpdatedAt.String(),
			DataUpdatedAt: v.DataUpdatedAt.String(),
		})
	}

	return responsex.SuccessWithData(res), nil
}
