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
- [x] 完善app window的开启和关闭逻辑
- [x] 数据库敏感内容采用AES加密
- [x] 系统设置
- [x] 右键菜单,考虑到ipc通信麻烦，使用浏览器的右键菜单组件。
- [ ] 使用github actions 打包发布各个平台
- [ ] 完善应用图标，包括开发环境，打包过程
- [ ] 源代码加密
- [ ] 本地数据导入导出，go服务直接导出，不考虑显示进度等需求
- [ ] axios重新封装，参考github
- [ ] mac app签名
- [ ] 图标一开始是默认的，然后突然变成自定义的
- [ ] electron-store 存储位置 userData  /Users/xulei/Library/Application Support/@zzopen/music-desktop
- [ ] 数据版本更新升级方案
- [ ] app自动更新方案
- [ ] 前端打包配置需要根据依赖拆分
