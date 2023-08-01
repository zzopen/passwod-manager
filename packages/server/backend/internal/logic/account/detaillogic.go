package account

import (
  "context"
  "github.com/zzopen/z-note/backend/internal/core/response/responsex"
  "github.com/zzopen/z-note/backend/internal/core/service/accountservice"
  "strconv"

  "github.com/zzopen/z-note/backend/internal/svc"
  "github.com/zzopen/z-note/backend/internal/types"

  "github.com/zeromicro/go-zero/core/logx"
)

type DetailLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type DetailResponseData struct {
	Id            uint64 `json:"id"`
	Website       string `json:"website"`
	Account       string `json:"account"`
	Password      string `json:"password"`
	CreatedAt     string `json:"created_at"`
	UpdatedAt     string `json:"updated_at"`
	DataUpdatedAt string `json:"data_updated_at"`
}

func NewDetailLogic(ctx context.Context, svcCtx *svc.ServiceContext) *DetailLogic {
	return &DetailLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *DetailLogic) Detail(req *types.AccountDetailReq) (resp *types.Reply, err error) {
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

	res := &DetailResponseData{
		Id:            account.Id,
		Website:       account.Website,
		Account:       account.Account,
		Password:      account.Password,
		CreatedAt:     account.CreatedAt.String(),
		UpdatedAt:     account.UpdatedAt.String(),
		DataUpdatedAt: account.DataUpdatedAt.String(),
	}

	return responsex.SuccessWithData(res), nil
}
