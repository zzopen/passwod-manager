package secretbook

import (
	"context"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/response"
	"github.com/zzopen/password-manager/backend/internal/core/tool"
	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"
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

func (l *UpdateLogic) Update(req *types.SecretBookUpdateReq) (resp *types.Reply, err error) {
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
	m["username"] = req.Username
	m["password"] = req.Password
	m["mobile"] = req.Mobile
	m["email"] = req.Email
	m["remark"] = req.Remark
	if secretCategory != nil {
		m["secret_category_id"] = secretCategory.Id
	} else {
		m["secret_category_id"] = 0
	}

	if err = l.svcCtx.SecretBookRepository.UpdateById(secretBook.Id, m); err != nil {
		return nil, response.FailWithMsg(response.UpdateFailMsg())
	}

	return response.Success(), nil
}
