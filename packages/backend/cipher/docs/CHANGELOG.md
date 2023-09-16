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
- 数据版本升级怎么办？


# 功能
- 导出
```text
1. 只导出通过secret-book表自定义的数据，没有导出secret-category表。
2. 格式支持json,csv。
3. 只导出未删除数据

```
- 备份（定时任务）
```text
1. 因为本地数据比较重要，需要有一个备份数据库的计划
2. 还得支持能备份到云端，比如 服务器，github,gitee,gitlab等
```

- 数据版本升级怎么办
