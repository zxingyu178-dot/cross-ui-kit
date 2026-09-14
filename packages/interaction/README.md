# @kit/interaction · 交互规范实现

把 [`docs/07-interaction-spec.md`](../../docs/07-interaction-spec.md) 的规范落成可复用代码，避免每页各写一套。

## 规划（P2 起）

| 能力 | 形态 | 说明 |
|---|---|---|
| 四态容器 StateContainer | 三栈组件（同名同 props） | 接 core 的 useRequest/useTable 返回值，统一渲染骨架/空/错/正常 |
| 骨架屏 Skeleton | 三栈组件 | 布局与真实内容一致，300ms 延迟显示规则在 core 控制 |
| 空状态 Empty / 错误态 ErrorState | 三栈组件 | 行动按钮、断网区分、403/404/5xx 区分 |
| Toast/通知 | core hooks + 三栈渲染 | 同类单例、时长标准、成功/错误分级 |
| 二次确认 | web Popconfirm / mini ActionSheet / native BottomSheet 封装 | 危险操作强制 |
| 提交锁 | core `useSubmitLock` | loading 期间禁用、防重复提交 |
| 下拉刷新/触底加载 | mini/native hooks | 距底 200px 预加载、"没有更多了" |
| 表单草稿 | core `useFormDraft` | 长表单离开拦截与自动草稿 |
| 断网横幅 | core 网络状态 + 三栈 UI | 恢复自动刷新 |
| 动效 | motion token 消费 | 时长/缓动只取 token，尊重"减少动效"设置 |

## 规则

- 行为逻辑（延迟、阈值、重试策略）放 core；视图按栈实现；
- 所有页面/数据组件必须使用 StateContainer，禁止自行 if-else 拼四态。
