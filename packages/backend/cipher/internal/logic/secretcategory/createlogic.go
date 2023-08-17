package secretcategory

import (
	"context"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/response"
	"zz-cipher/common/core/tool"

	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
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

func (l *CreateLogic) Create(req *types.SecretCategoryCreateReq) (resp *response.ApiResponse, err error) {
	var secretCategoryParent *model.SecretCategory
	isTopLevel := req.Pid == "0"
	isPidEmpty := req.Pid == ""
	if !isPidEmpty && !isTopLevel {
		secretCategoryPid, _ := tool.StringToUint64(req.Pid)
		if !(secretCategoryPid > 0) {
			return nil, response.FailWithMsg(response.RequestParameterInValidMsg("pid"))
		}

		secretCategoryParent, _ = l.svcCtx.SecretCategoryRepository.GetById(secretCategoryPid)
		if secretCategoryParent == nil || secretCategoryParent.IsDelete() {
			return nil, response.FailWithMsg("请先创建父级分类")
		}
	}

	if l.svcCtx.SecretCategoryRepository.IsExists(req.Name) {
		return nil, response.FailWithMsg("分类已存在")
	}

	secretCategory := &model.SecretCategory{Name: req.Name}

	if secretCategoryParent != nil {
		secretCategory.Pid = secretCategoryParent.Id
		secretCategory.PidChain = secretCategoryParent.InheritChain()
	} else if isTopLevel {
		secretCategory.Pid = 0
	}

	if err = l.svcCtx.SecretCategoryRepository.Create(secretCategory); err != nil {
		return nil, response.FailWithMsg(response.CreateFailMsg())
	}

	return response.Success(), nil
}
