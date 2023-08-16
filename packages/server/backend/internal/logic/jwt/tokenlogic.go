package jwt

import (
	"context"
	"github.com/zzopen/password-manager/backend/internal/core/response"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/zzopen/password-manager/backend/internal/svc"
	"github.com/zzopen/password-manager/backend/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type TokenLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewTokenLogic(ctx context.Context, svcCtx *svc.ServiceContext) *TokenLogic {
	return &TokenLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *TokenLogic) Token(req *types.JwtTokenRequest) (resp *types.Reply, err error) {
	accessExpire := l.svcCtx.Config.Auth.AccessExpire

	now := time.Now().Unix()
	accessToken, err := l.GenToken(now, l.svcCtx.Config.Auth.AccessSecret, nil, accessExpire)
	if err != nil {
		return nil, response.FailWithMsg("token 获取失败")
	}

	res := &types.JwtTokenInfo{
		AccessToken:  accessToken,
		AccessExpire: now + accessExpire,
		RefreshAfter: now + accessExpire/2,
	}
	return response.SuccessWithData(res), nil
}

func (l *TokenLogic) GenToken(iat int64, secretKey string, payloads map[string]any, seconds int64) (string, error) {
	claims := make(jwt.MapClaims)
	claims["exp"] = iat + seconds
	claims["iat"] = iat
	for k, v := range payloads {
		claims[k] = v
	}

	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims = claims

	return token.SignedString([]byte(secretKey))
}
