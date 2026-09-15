# Result 结果态（web）

四态之 **error** 的承载组件，亦覆盖成功/信息/警告/404 等**结果反馈页**。`status` 驱动语义色圆底 + 状态符号，纯组合布局，操作经 `action`/`extra` slot 传入。是否渲染由父级（StateContainer，规划中）按数据状态控制。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| status | `'success'|'info'|'warning'|'error'|'notFound'` | `'info'` | 结果状态，决定默认图标与语义色 |
| title | ReactNode | - | 主标题（title-sm、text-primary） |
| description | ReactNode | - | 次要描述，最大宽度 300（body-sm、text-secondary） |
| icon | ReactNode | 按 status 生成 | 自定义图标，替换默认状态图标 |
| action | ReactNode | - | 主操作区（通常放 `Button`，如「重试」），可并排多个 |
| extra | ReactNode | - | 次要操作区（如「联系客服」），位于主操作下方 |
| accessibilityLabel / className / id | - | - | 透传 |

## status 语义（默认图标 / 圆底 / 符号色）

| status | 圆底 | 符号 | 典型场景 |
|---|---|---|---|
| success | `bg-success-bg` | 对勾（success-default） | 提交/操作成功 |
| info | `bg-info-bg` | i（info-default） | 已是最新、无更多内容 |
| warning | `bg-warning-bg` | 感叹号（warning-default） | 权限/条件受限 |
| error | `bg-danger-bg` | 叉（danger-default） | 加载失败、网络异常（含重试） |
| notFound | `bg-bg-active` | 404 文字（text-tertiary） | 404、资源不存在 |

## 组合约定

- 重试/返回等按钮经 `action` slot 传入（组合优先），不在组件内写死按钮或回调；
- 网络异常、接口报错统一用 `status="error"` + 重试 action；404 用 `notFound`；
- 文案由业务传入（走 i18n），组件不内置文案；自定义插画经 `icon` 替换。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（五种 status + 自定义图标 + 双操作）
- Storybook：`Result.stories.tsx`

## Do / Don't

- Do：错误/成功/404 等整页或区块结果用 Result；重试按钮放 `action`。
- Don't：不在业务里内联结果态布局；不在 Result 内发请求或写状态分支；不硬编码颜色/尺寸。
