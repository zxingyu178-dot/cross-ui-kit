# @kit/patterns-mini · 小端页面模板（小程序 / H5）

## 场景清单（与 web/native 对齐，另含小端特有页）

| 场景 | 目录 | 关键要素 |
|---|---|---|
| 启动页 | `launch-page/` | 品牌、登录态分流、隐私弹窗 |
| 登录/验证码 | `login-page/` | 验证码倒计时、表单校验、提交锁 |
| 首页框架 | `home-feed/` | Tabbar、顶部 NavBar、feed 流、下拉刷新 |
| 列表页 | `list-page/` | 搜索栏 + 触底加载 + 四态 + 滚动位置保持 |
| 详情页 | `detail-page/` | NavBar 返回、长内容、底部操作栏 |
| 表单页 | `form-page/` | 校验时机、草稿、键盘类型、防重复提交 |
| 搜索 | `search-page/` | 历史、联想、取消、空结果 |
| 我的 | `profile-page/` | 头像信息、功能宫格、设置入口 |
| 设置 | `settings-page/` | 分组、开关、退出登录（二次确认） |
| 结果/异常 | `result-page/` / `error-page/` | 断网页、重试、空状态 |

## 规则

- 每个列表页必须有下拉刷新 + 触底加载（距底 200px 预加载）+ "没有更多了"；
- 表单页处理键盘遮挡、安全区、未保存离开拦截；
- 只编排 ui-mini 已登记组件，数据走 core hooks；
- 登记到 registry/mini/registry.json（type: template）。
