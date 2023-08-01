package account

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"github.com/zzopen/z-note/backend/internal/logic/account"
	"github.com/zzopen/z-note/backend/internal/svc"
	"github.com/zzopen/z-note/backend/internal/types"
)

func UpdateHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.AccountUpdateReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := account.NewUpdateLogic(r.Context(), svcCtx)
		resp, err := l.Update(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
