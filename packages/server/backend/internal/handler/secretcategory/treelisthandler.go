package secretcategory

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"github.com/zzopen/password-manager/backend/internal/logic/secretcategory"
	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"
)

func TreeListHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.SecretCategoryTreeListReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := secretcategory.NewTreeListLogic(r.Context(), svcCtx)
		resp, err := l.TreeList(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
