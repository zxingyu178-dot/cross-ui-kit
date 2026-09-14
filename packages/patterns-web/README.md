# @kit/patterns-web · 大端页面模板

页面骨架（布局 + 组件编排 + 假数据），**只允许编排已登记组件**，不沉淀可复用组件（应上移 ui-web）。

## 场景清单（三栈目录名一致）

| 场景 | 目录 | 关键要素 |
|---|---|---|
| 登录/注册 | `login-page/` | 表单校验、提交锁、错误提示、redirect 回跳 |
| 仪表盘 | `dashboard-page/` | 统计卡、图表、响应式栅格 |
| 列表页 | `list-page/` | 搜索栏 + DataTable + 分页 + 四态 |
| 详情页 | `detail-page/` | 描述列表、关联 Tab、操作区 |
| 新建/编辑 | `form-page/` | RHF+zod、草稿、防重复提交 |
| 设置 | `settings-page/` | 分组表单、主题切换、危险操作区 |
| 个人中心 | `profile-page/` | 用户信息、权限入口 |
| 搜索 | `search-page/` | 联想、历史、结果四态 |
| 结果页 | `result-page/` | 成功/失败/处理中 + 后续动作 |
| 异常页 | `error-page/` | 403/404/500 + 返回引导 |

## 规则

- 数据一律 core hooks（useTable/useRequest/useForm），页面内不出现 fetch；
- 每个模板提供 normal/loading/empty/error + 超长文本/极值示例；
- 以 `registry:block` / `registry:template` 登记到 registry/web/registry.json，hub 可一键查看与复制。
