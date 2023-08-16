package secretbook

import (
  "context"
  "github.com/zeromicro/go-zero/core/logx"
  "github.com/zzopen/password-manager/backend/internal/core/response"
  "github.com/zzopen/password-manager/backend/internal/core/tool"
  "github.com/zzopen/password-manager/backend/internal/svc"
  "github.com/zzopen/password-manager/backend/internal/types"
)

type DetailLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

type DetailResponseData struct {
	Id                 string `json:"id"`
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

func NewDetailLogic(ctx context.Context, svcCtx *svc.ServiceContext) *DetailLogic {
	return &DetailLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *DetailLogic) Detail(req *types.SecretBookDetailReq) (resp *types.Reply, err error) {
	id, _ := tool.StringToUint64(req.Id)
	if !(id > 0) {
		return nil, response.FailWithMsg(response.RequestParameterInValidMsg("id"))
	}

	secretBook, _ := l.svcCtx.SecretBookRepository.GetById(id)
	logx.Info(secretBook)
	if secretBook == nil || secretBook.IsDelete() {
		return nil, response.FailWithMsg(response.SearchFailMsg())
	}

	res := &DetailResponseData{
		Id:               tool.Uint64ToString(secretBook.Id),
		Title:            secretBook.Title,
		Website:          secretBook.Website,
		Username:         secretBook.Username,
		Password:         secretBook.Password,
		Email:            secretBook.Email,
		Mobile:           secretBook.Mobile,
		Remark:           secretBook.Remark,
		CreatedAt:        secretBook.CreatedAt.String(),
		UpdatedAt:        secretBook.UpdatedAt.String(),
		DataUpdatedAt:    secretBook.DataUpdatedAt.String(),
		SecretCategoryId: tool.Uint64ToString(secretBook.SecretCategoryId),
	}

  secretCategory, _ := l.svcCtx.SecretCategoryRepository.GetById(id)
	if secretCategory != nil {
		res.SecretCategoryName = secretCategory.Name
	}

	return response.SuccessWithData(res), nil
}
