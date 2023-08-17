package secretcategory

import (
	"context"
	"zz-cipher/common/core/response"
	"zz-cipher/common/core/tool"

	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type DetailLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type DetailResponseData struct {
	Id            string `json:"id"`
	Pid           string `json:"pid"`
	Name          string `json:"name"`
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

func (l *DetailLogic) Detail(req *types.SecretCategoryDetailReq) (resp *response.ApiResponse, err error) {
	id, _ := tool.StringToUint64(req.Id)
	if !(id > 0) {
		return nil, response.FailWithMsg(response.RequestParameterInValidMsg("id"))
	}

	secretCategory, _ := l.svcCtx.SecretCategoryRepository.GetById(id)
	if secretCategory == nil || secretCategory.IsDelete() {
		return nil, response.FailWithMsg(response.SearchFailMsg())
	}

	res := &DetailResponseData{
		Id:            tool.Uint64ToString(secretCategory.Id),
		Pid:           tool.Uint64ToString(secretCategory.Pid),
		Name:          secretCategory.Name,
		CreatedAt:     secretCategory.CreatedAt.String(),
		UpdatedAt:     secretCategory.UpdatedAt.String(),
		DataUpdatedAt: secretCategory.DataUpdatedAt.String(),
	}

	return response.SuccessWithData(res), nil
}
