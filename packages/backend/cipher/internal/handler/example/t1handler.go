package example

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"zz-cipher/cipher/internal/logic/example"
	"zz-cipher/cipher/internal/svc"
)

func T1Handler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		l := example.NewT1Logic(r.Context(), svcCtx)
		resp, err := l.T1()
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
