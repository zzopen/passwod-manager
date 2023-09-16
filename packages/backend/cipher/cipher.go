package main

import (
	"flag"
	"fmt"
	"net/http"
	"runtime/debug"
	"zz-cipher/cipher/static"
	"zz-cipher/common/core/validator"

	"github.com/zeromicro/go-zero/core/conf"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/rest"
	handler2 "github.com/zeromicro/go-zero/rest/handler"
	"github.com/zeromicro/go-zero/rest/httpx"

	"zz-cipher/cipher/internal/config"
	"zz-cipher/cipher/internal/handler"
	"zz-cipher/cipher/internal/svc"
	"zz-cipher/common/core/response"
)

var configFile = flag.String("f", "etc/cipher-api.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)

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

	static.MustNewStaticServer(server)
	handler.RegisterHandlers(server, sc)
	globalHandler(server)
	fmt.Printf("Starting server at %s:%d...\n", c.Host, c.Port)
	server.Start()
}

func globalHandler(server *rest.Server) {
	httpx.SetValidator(validator.NewValidator())

	// 全局错误处理器
	httpx.SetErrorHandler(func(err error) (int, any) {
		logx.Info("err:%#v", err)
		logx.Info(string(debug.Stack()))

		switch e := err.(type) {
		case *response.ApiError:
			return http.StatusOK, e.Data()
		case error:
			return http.StatusOK, response.NewDefaultApiErrorData(e.Error())
		default:
			return http.StatusInternalServerError, err
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
		httpx.Error(w, response.FailWithMsg("路由不存在"))
		return
	}
}

// 不允许访问
func notAllowedHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		httpx.Error(w, response.FailWithMsg("禁止访问"))
		return
	}
}

// JWT授权不通过,http code 401
func unauthorizedCallback() handler2.UnauthorizedCallback {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		httpx.Error(w, response.FailWithMsg("JWT授权不通过"))
		return
	}
}
