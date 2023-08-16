package secretcategory

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/response"
	"github.com/zzopen/password-manager/backend/internal/core/tool"

	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type ListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type ListItem struct {
	Id            string `json:"id"`
	Name          string `json:"name"`
	Pid           string `json:"pid"`
	CreatedAt     string `json:"created_at"`
	UpdatedAt     string `json:"updated_at"`
	DataUpdatedAt string `json:"data_updated_at"`
}

func NewListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ListLogic {
	return &ListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ListLogic) List(req *types.SecretCategoryListReq) (resp *types.Reply, err error) {
	res := tool.EmptySlice[*ListItem]()
	secretCategoryList, _ := l.svcCtx.SecretCategoryRepository.GetAll()
	if secretCategoryList == nil {
		return response.SuccessWithData(res), nil
	}

	for _, v := range secretCategoryList {
		item := &ListItem{
			Id:            tool.Uint64ToString(v.Id),
			Name:          v.Name,
			Pid:           tool.Uint64ToString(v.Pid),
			CreatedAt:     v.CreatedAt.String(),
			UpdatedAt:     v.UpdatedAt.String(),
			DataUpdatedAt: v.DataUpdatedAt.String(),
		}

		res = append(res, item)
	}

	return response.SuccessWithData(res), nil
}
