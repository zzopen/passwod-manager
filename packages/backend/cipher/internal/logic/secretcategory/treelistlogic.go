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

type TreeListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type TreeListItem struct {
	Id            string          `json:"id"`
	Name          string          `json:"name"`
	Pid           string          `json:"pid"`
	CreatedAt     string          `json:"created_at"`
	UpdatedAt     string          `json:"updated_at"`
	DataUpdatedAt string          `json:"data_updated_at"`
	Children      []*TreeListItem `json:"children"`
}

func NewTreeListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *TreeListLogic {
	return &TreeListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *TreeListLogic) TreeList(req *types.SecretCategoryTreeListReq) (resp *response.ApiResponse, err error) {
	res := tool.EmptySlice[*TreeListItem]()
	secretCategoryList, _ := l.svcCtx.SecretCategoryRepository.GetAll()
	if secretCategoryList == nil {
		return response.SuccessWithData(res), nil
	}

	res = buildTree(secretCategoryList, 0)
	return response.SuccessWithData(res), nil
}

// buildTree 根据list组装tree
func buildTree(items []*model.SecretCategory, pid uint64) []*TreeListItem {
	var res []*TreeListItem
	for _, v := range items {
		if v.Pid == pid {
			child := buildTree(items, v.Id)
			node := secretCategoryModelToTreeListItem(v)
			node.Children = child
			res = append(res, node)
		}
	}

	if res == nil {
		return tool.EmptySlice[*TreeListItem]()
	}

	return res
}

func secretCategoryModelToTreeListItem(v *model.SecretCategory) *TreeListItem {
	if v == nil {
		return nil
	}

	return &TreeListItem{
		Id:            tool.Uint64ToString(v.Id),
		Name:          v.Name,
		Pid:           tool.Uint64ToString(v.Pid),
		CreatedAt:     v.CreatedAt.String(),
		UpdatedAt:     v.UpdatedAt.String(),
		DataUpdatedAt: v.DataUpdatedAt.String(),
		Children:      tool.EmptySlice[*TreeListItem](),
	}
}
