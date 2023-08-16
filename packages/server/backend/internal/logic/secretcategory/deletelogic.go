package secretcategory

import (
	"context"
  "github.com/zzopen/password-manager/backend/internal/core/response"
  "github.com/zzopen/password-manager/backend/internal/core/tool"

  "github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

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

func (l *DeleteLogic) Delete(req *types.SecretCategoryDeleteReq) (resp *types.Reply, err error) {
  id, _ := tool.StringToUint64(req.Id)
  if !(id > 0) {
    return nil, response.FailWithMsg(response.RequestParameterInValidMsg("id"))
  }

  secretCategory, _ := l.svcCtx.SecretCategoryRepository.GetById(id)
  if secretCategory == nil || secretCategory.IsDelete() {
    return response.Success(), nil
  }

  m := make(map[string]any)
  m["deleted_by"] = "管理员"

  if err = l.svcCtx.SecretCategoryRepository.DeleteById(id, m); err != nil {
    return nil, response.FailWithMsg(response.DeleteFailMsg())
  }

  return response.Success(), nil
}
