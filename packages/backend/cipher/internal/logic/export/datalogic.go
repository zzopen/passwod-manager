package export

import (
  "context"
  "github.com/zeromicro/go-zero/core/logx"
  "zz-cipher/cipher/internal/logic/export/exp"
  "zz-cipher/cipher/internal/svc"
  "zz-cipher/cipher/internal/types"
  "zz-cipher/common/core/response"
)

type DataLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewDataLogic(ctx context.Context, svcCtx *svc.ServiceContext) *DataLogic {
	return &DataLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *DataLogic) Data(req *types.ExportDataReq) (resp *response.ApiResponse, err error) {
	exporter := exp.NewExporter(l.ctx, l.svcCtx, req)
	err = exporter.Do()
	if err != nil {
		return nil, response.FailWithMsg("导出失败")
	}

	return response.Success(), nil
}
