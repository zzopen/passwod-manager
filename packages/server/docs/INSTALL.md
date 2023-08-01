# z-note-server

# 安装

```shell
1. mkdir server && cd server

2. GO111MODULE=on go install github.com/zeromicro/go-zero/tools/goctl@latest

3. goctl --version

4. goctl api new backend

5. 安装Goctl插件
```

# 按需修改项目
```shell
1. 修改go.mod module 为 github.com/zzopen/z-note/backend

2. 全局修改import

3.引入 gorm

go get -u gorm.io/gorm

go get -u gorm.io/driver/sqlite

go get -u gorm.io/gen


```

