package secretcategory

import (
	"context"
	"zz-cipher/common/core/response"
	"zz-cipher/common/core/tool"

	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"

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

func (l *DeleteLogic) Delete(req *types.SecretCategoryDeleteReq) (resp *response.ApiResponse, err error) {
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
