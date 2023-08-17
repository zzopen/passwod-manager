# backend
zz-cipher桌面端后端程序
采用go work管理项目

```shell
mkdir cipher && go mod init zz-cipher/cipher
mkdir common && go mod init zz-cipher/common
mkdir cli && go mod init zz-cipher/cli

go work init ./cipher
go work use ./common
go work use ./cli
```

## cipher
提供http api

## common
公共代码库

## cli
脚手架


# 打包
