package main

import (
  "context"
  "flag"
  "fmt"
  "github.com/zeromicro/go-zero/core/conf"
  "github.com/zeromicro/go-zero/core/logx"
  "github.com/zeromicro/go-zero/rest"
  handler2 "github.com/zeromicro/go-zero/rest/handler"
  "github.com/zeromicro/go-zero/rest/httpx"
  "net/http"
  "runtime/debug"

  "github.com/zzopen/z-note/backend/internal/config"
  "github.com/zzopen/z-note/backend/internal/core/response/errorx"
  "github.com/zzopen/z-note/backend/internal/handler"
  "github.com/zzopen/z-note/backend/internal/svc"
)

var configFile = flag.String("f", "etc/backend-api.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)

	ctx := context.Background()

	server := rest.MustNewServer(c.RestConf,
		rest.WithCustomCors(nil, func(w http.ResponseWriter) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Headers", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH")
			w.Header().Set("Access-Control-Expose-Headers", "Content-Length, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers")
			w.Header().Set("Access-Control-Allow-Credentials", "true")
		}, "*"),
		rest.WithUnauthorizedCallback(unauthorizedCallback()),
		rest.WithNotFoundHandler(notFoundHandler()),
		rest.WithNotAllowedHandler(notAllowedHandler()),
	)
	defer server.Stop()

	sc := svc.NewServiceContext(c)
	handler.RegisterHandlers(server, sc)
	globalHandler(server, sc, ctx)
	fmt.Printf("Starting server at %s:%d...\n", c.Host, c.Port)
	server.Start()
}

func globalHandler(server *rest.Server, serverCtx *svc.ServiceContext, ctx context.Context) {
	// 全局错误处理器
	httpx.SetErrorHandler(func(err error) (int, interface{}) {
		logx.Info("err:%#v", err)
    logx.Info(string(debug.Stack()))

		switch e := err.(type) {
		case *errorx.CodeError:
			return http.StatusOK, e.Data()
		case error:
			newErr := errorx.Error(e.Error())
			return http.StatusOK, newErr.Data()
		default:
			return http.StatusInternalServerError, nil
		}
	})

	// 全局中间件
	server.Use(func(next http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			w.Header().Add("X-Middleware", "second")
      logx.Info("全局中间件")
			next(w, r)
		}
	})

}

// 路由不存在, 404
func notFoundHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		httpx.Error(w, errorx.Error("路由不存在"))
		return
	}
}

// 不允许访问
func notAllowedHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		httpx.Error(w, errorx.Error("禁止访问"))
		return
	}
}

// JWT授权不通过,http code 401
func unauthorizedCallback() handler2.UnauthorizedCallback {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		httpx.Error(w, errorx.Error("JWT授权不通过"))
		return
	}
}
