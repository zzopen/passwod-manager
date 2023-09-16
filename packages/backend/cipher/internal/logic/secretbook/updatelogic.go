package secretbook

import (
	"context"
	"github.com/zeromicro/go-zero/core/logx"
	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"
	"zz-cipher/common/core/crypt/aes"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/response"
	"zz-cipher/common/core/tool"
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

func (l *UpdateLogic) Update(req *types.SecretBookUpdateReq) (resp *response.ApiResponse, err error) {
	id, _ := tool.StringToUint64(req.Id)
	if !(id > 0) {
		return nil, response.FailWithMsg(response.RequestParameterInValidMsg("id"))
	}

	secretBook, _ := l.svcCtx.SecretBookRepository.GetById(id)
	if secretBook == nil {
		return nil, response.FailWithMsg(response.SearchFailMsg())
	}

	// 检查类别是否要修改
	var secretCategory *model.SecretCategory
	if req.SecretCategoryId != "" {
		secretCategoryId, _ := tool.StringToUint64(req.SecretCategoryId)
		if !(secretCategoryId > 0) {
			return nil, response.FailWithMsg(response.RequestParameterInValidMsg("secret_category_id"))
		}

		secretCategory, _ = l.svcCtx.SecretCategoryRepository.GetById(secretCategoryId)
		if secretCategory == nil {
			return nil, response.FailWithMsg("请先创建分类")
		}
	}

	m := make(map[string]any)
	m["title"] = req.Title
	m["website"] = req.Website
	m["mobile"] = req.Mobile
	m["email"] = req.Email
	m["remark"] = req.Remark
	if secretCategory != nil {
		m["secret_category_id"] = secretCategory.Id
	} else {
		m["secret_category_id"] = model.DefaultSecretCategoryId
	}

	if l.svcCtx.Config.Custom.SaveEncrypt {
		m["username"] = aes.CbcEncrypt(req.Username, l.svcCtx.Config.Custom.AesKey)
		m["password"] = aes.CbcEncrypt(req.Password, l.svcCtx.Config.Custom.AesKey)
	} else {
		m["username"] = req.Username
		m["password"] = req.Password
	}

	if err = l.svcCtx.SecretBookRepository.UpdateById(secretBook.Id, m); err != nil {
		return nil, response.FailWithMsg(response.UpdateFailMsg())
	}

	return response.Success(), nil
}
