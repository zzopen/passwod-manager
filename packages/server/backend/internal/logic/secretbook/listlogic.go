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

type ListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type ListItem struct {
	Id                 uint64 `json:"id"`
	Title              string `json:"title"`
	Website            string `json:"website"`
	Username           string `json:"username"`
	Password           string `json:"password"`
	Mobile             string `json:"mobile"`
	Email              string `json:"email"`
	Remark             string `json:"remark"`
	CreatedAt          string `json:"created_at"`
	UpdatedAt          string `json:"updated_at"`
	DataUpdatedAt      string `json:"data_updated_at"`
	SecretCategoryId   string `json:"secret_category_id"`
	SecretCategoryName string `json:"secret_category_name"`
}

func NewListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ListLogic {
	return &ListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ListLogic) List(req *types.SecretBookListReq) (resp *types.Reply, err error) {
	var secretBookList []*model.SecretBook
	var secretCategory *model.SecretCategory
	res := tool.EmptySlice[*ListItem]()
	isTopLevel := req.SecretCategoryId == "0"
	isSecretCategoryIdEmpty := req.SecretCategoryId == ""
	var secretCategoryId uint64

	if !isSecretCategoryIdEmpty && !isTopLevel {
		secretCategoryId, _ = tool.StringToUint64(req.SecretCategoryId)
		if !(secretCategoryId > 0) {
			return nil, response.FailWithMsg(response.RequestParameterInValidMsg("secret_category_id"))
		}

		secretCategory, _ = l.svcCtx.SecretCategoryRepository.GetById(secretCategoryId)
		if secretCategory == nil {
			return response.SuccessWithData(res), nil
		}
	}

	if !isSecretCategoryIdEmpty {
		secretBookList, _ = l.svcCtx.SecretBookRepository.GetListBySecretCategoryId(secretCategoryId)
	} else {
		secretBookList, _ = l.svcCtx.SecretBookRepository.GetAll()
	}

	if secretBookList == nil {
		return response.SuccessWithData(res), nil
	}

	for _, v := range secretBookList {
		item := &ListItem{
			Id:               v.Id,
			Title:            v.Title,
			Website:          v.Website,
			Username:         v.Username,
			Password:         v.Password,
			CreatedAt:        v.CreatedAt.String(),
			UpdatedAt:        v.UpdatedAt.String(),
			DataUpdatedAt:    v.DataUpdatedAt.String(),
			SecretCategoryId: tool.Uint64ToString(v.SecretCategoryId),
		}
		if v.SecretCategory != nil {
			item.SecretCategoryName = v.SecretCategory.Name
		}

		res = append(res, item)
	}

	return response.SuccessWithData(res), nil
}
