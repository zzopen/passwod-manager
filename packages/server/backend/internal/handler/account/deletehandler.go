package account

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"github.com/zzopen/z-note/backend/internal/logic/account"
	"github.com/zzopen/z-note/backend/internal/svc"
	"github.com/zzopen/z-note/backend/internal/types"
)

func DeleteHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.AccountDeleteReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := account.NewDeleteLogic(r.Context(), svcCtx)
		resp, err := l.Delete(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
