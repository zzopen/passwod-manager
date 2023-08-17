package secretbook

import (
	"context"
	"github.com/zeromicro/go-zero/core/logx"
	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/response"
	"zz-cipher/common/core/tool"
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

func (l *CreateLogic) Create(req *types.SecretBookCreateReq) (resp *response.ApiResponse, err error) {
	var secretCategory *model.SecretCategory
	if req.SecretCategoryId != "" {
		secretCategoryId, _ := tool.StringToUint64(req.SecretCategoryId)
		if !(secretCategoryId > 0) {
			return nil, response.FailWithMsg(response.RequestParameterInValidMsg("secret_category_id"))
		}

		secretCategory, _ = l.svcCtx.SecretCategoryRepository.GetById(secretCategoryId)
		if secretCategory == nil || secretCategory.IsDelete() {
			return nil, response.FailWithMsg("请先创建分类")
		}
	}

	secretBook := &model.SecretBook{
		Title:    req.Title,
		Website:  req.Website,
		Username: req.Username,
		Password: req.Password,
		Remark:   req.Remark,
		Mobile:   req.Mobile,
		Email:    req.Email,
	}

	if secretCategory != nil {
		secretBook.SecretCategoryId = secretCategory.Id
	}

	if err = l.svcCtx.SecretBookRepository.Create(secretBook); err != nil {
		return nil, response.FailWithMsg(response.CreateFailMsg())
	}

	return response.Success(), nil
}
