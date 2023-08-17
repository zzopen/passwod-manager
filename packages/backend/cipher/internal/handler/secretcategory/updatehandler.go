package secretcategory

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"zz-cipher/cipher/internal/logic/secretcategory"
	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"
)

func UpdateHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.SecretCategoryUpdateReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := secretcategory.NewUpdateLogic(r.Context(), svcCtx)
		resp, err := l.Update(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
