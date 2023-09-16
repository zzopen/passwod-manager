package static

import (
	"github.com/zeromicro/go-zero/rest"
	"net/http"
)

const RootDir = "/Users/xulei/jungle/githubproject/my/zz-cipher/packages/desktop/dist1"

func MustNewStaticServer(server *rest.Server) {
	server.AddRoute(rest.Route{
		Method:  http.MethodGet,
		Path:    "/static/:file",
		Handler: http.StripPrefix("/static/", http.FileServer(http.Dir(RootDir))).ServeHTTP,
	})
}
