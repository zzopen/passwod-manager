# 设计脑图
- 主进程，与其他进程交互
- 渲染进程，主界面
- 隐藏渲染进程，执行耗时任务
- 本地server,go开发


# 问题
- [x] 完善globalConfig，统一导入，没有使用nodejs的global模块
- [x] 完善应用数据目录，针对开发环境和生产环境做出不同配置
- [x] 完善日志模块，因为异步初始化的问题，注意引入顺序
- [x] 完善electron启动go服务模块，保证一同启动一同退出
- [x] 完善本地json存储数据模块
- [x] 完善后台服务启动，从全局配置中获取baseUrl
- [x] 完善窗体的开启和关闭逻辑
- [x] 数据库敏感内容采用AES加密
- [x] 系统设置
- [ ] 右键菜单
- [ ] 完善应用图标，包括开发环境，打包过程
- [ ] 假设sqlite要更新表结构怎么办呢
- [ ] 测试开发环境和生产环境打包,以及源代码加密
- [ ] 本地数据导入导出，采用websocket实现

- [ ] axios重新封装，参考github
- [ ] electron-store 会报错，卸载了，暂时不会解决，Cannot find module 'ajv/dist/compile/codegen'
- [ ] mac app签名
- [ ] 完善统一打包脚本
- [ ] 图标一开始是默认的，然后突然变成自定义的
- [ ] electron-store 存储位置 userData  /Users/xulei/Library/Application Support/@zzopen/music-desktop
