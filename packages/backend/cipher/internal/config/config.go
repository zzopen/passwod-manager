package config

import "github.com/zeromicro/go-zero/rest"

type Config struct {
	rest.RestConf

	Auth struct { // jwt鉴权配置
		AccessSecret string // jwt密钥
		AccessExpire int64  // 有效期，单位：秒
	}

	Custom struct {
		SaveEncrypt bool
		AesKey      string
		Sqlite      struct {
			DbFilePath string
			Log        struct {
				Level string
			}
		}
	}
}
