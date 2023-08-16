# password-manager

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
1. 修改go.mod module 为 github.com/zzopen/password-manager/backend

2. 全局修改import

3.引入 gorm

go get -u gorm.io/gorm

go get -u gorm.io/driver/sqlite

go get -u gorm.io/gen

```

# 问题
- model,repository,service
- model结构体的字段顺序
- created_at，updated_at。deleted_at自动追踪
- "0000-00-00 00:00:00" LocalDateTime数据类型自定义
- 数据库日志和应用日志
- gorm使用过程中问题很多，包括用法和设计
- model已经定义字段了，但代码中还是有很多需要硬编码字段名称的地方
- hook函数中想修改字段值需要使用setColumn手动设置
- 软删除和硬删除
- 预加载适用于列表，单条的话手动控制
- gorm日志打印到文件中，理想状况应该让go-zero接管
- 日志模式，打包模式都已经设置好了
- http signature加入
