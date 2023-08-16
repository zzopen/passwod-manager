package secretcategory

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/model"
	"github.com/zzopen/password-manager/backend/internal/core/response"
	"github.com/zzopen/password-manager/backend/internal/core/tool"

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

func (l *UpdateLogic) Update(req *types.SecretCategoryUpdateReq) (resp *types.Reply, err error) {
	id, _ := tool.StringToUint64(req.Id)
	if !(id > 0) {
		return nil, response.FailWithMsg(response.RequestParameterInValidMsg("id"))
	}

	secretCategory, _ := l.svcCtx.SecretCategoryRepository.GetById(id)
	if secretCategory == nil || secretCategory.IsDelete() {
		return nil, response.FailWithMsg(response.SearchFailMsg())
	}

	// 检查类别是否要修改
	var secretCategoryParent *model.SecretCategory
	var isTopLevel = req.Pid == "0"
	isPidEmpty := req.Pid == ""
	if !isPidEmpty && !isTopLevel {
		secretCategoryPid, _ := tool.StringToUint64(req.Pid)
		if !(secretCategoryPid > 0) {
			return nil, response.FailWithMsg(response.RequestParameterInValidMsg("pid"))
		}

		secretCategoryParent, _ = l.svcCtx.SecretCategoryRepository.GetById(secretCategoryPid)
		if secretCategoryParent == nil || secretCategoryParent.IsDelete() {
			return nil, response.FailWithMsg("父级分类非法，请重新选择")
		}

		if secretCategoryParent.IsSuperior(secretCategory.Id) {
			return nil, response.FailWithMsg("请选择非下级分类")
		}
	}

	m := make(map[string]any)
	m["name"] = req.Name
	if isTopLevel {
		m["pid"] = 0
	} else if secretCategoryParent != nil {
		m["pid"] = secretCategoryParent.Id
	}

	if err = l.svcCtx.SecretCategoryRepository.UpdateById(secretCategory.Id, m); err != nil {
		return nil, response.FailWithMsg(response.UpdateFailMsg())
	}

	return response.Success(), nil
}
