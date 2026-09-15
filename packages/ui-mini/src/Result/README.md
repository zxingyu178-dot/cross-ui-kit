# Result 结果态（mini：小程序 / 移动 H5）

四态之 **error** 的承载组件，亦覆盖成功/信息/警告/404 等结果反馈。Taro `View`/`Text` 纯组合布局；默认状态图标用几何条/点拼出 check/x/!/i（notFound 为 404 文字），语义色在 `Result.scss` 按 status 修饰类全量 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| status | `'success'|'info'|'warning'|'error'|'notFound'` | `'info'` | 结果状态，决定默认图标与语义色 |
| title | ReactNode | - | 主标题（title-sm、text-primary） |
| description | ReactNode | - | 次要描述，最大宽 300（body-sm、text-secondary） |
| icon | ReactNode | 按 status 生成 | 自定义图标，替换默认状态图标 |
| action | ReactNode | - | 主操作区（通常放 `Button`，如「重试」），可并排多个 |
| extra | ReactNode | - | 次要操作区（如「联系客服」），位于主操作下方 |
| accessibilityLabel / className | - | - | 透传 |

## status 语义（圆底 / 符号色）

| status | 圆底 | 符号 | 典型场景 |
|---|---|---|---|
| success | `--kit-color-success-bg` | 对勾（success-default） | 提交/操作成功 |
| info | `--kit-color-info-bg` | i（info-default） | 已是最新、无更多内容 |
| warning | `--kit-color-warning-bg` | 感叹号（warning-default） | 权限/条件受限 |
| error | `--kit-color-danger-bg` | 叉（danger-default） | 加载失败、网络异常（含重试） |
| notFound | `--kit-color-bg-active` | 404 文字（text-tertiary） | 404、资源不存在 |

## 组合约定

- 重试/返回等按钮经 `action` slot 传入；网络异常、接口报错统一 `status="error"` + 重试 action；
- 文案由业务传入（走 i18n），组件不内置文案；自定义插画经 `icon` 替换。

## 示例

`__examples__/States.tsx`：五种 status + 自定义图标 + 双操作。

## Do / Don't

- Do：错误/成功/404 等结果用 Result；重试按钮放 `action`。
- Don't：不在业务里内联结果态布局；不在 Result 内发请求；不硬编码颜色/尺寸。
