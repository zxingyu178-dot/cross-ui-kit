# Result 结果态（native：iOS / Android）

四态之 **error** 的承载组件，亦覆盖成功/信息/警告/404 等结果反馈。Tamagui `Stack`/`Text` 纯组合布局；默认状态图标用几何条/点（`transform` 旋转）拼出 check/x/!/i（notFound 为 404 文字），颜色/间距/圆角只引用 token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| status | `'success'|'info'|'warning'|'error'|'notFound'` | `'info'` | 结果状态，决定默认图标与语义色 |
| title | ReactNode | - | 主标题（`$titleSm`、`$textPrimary`） |
| description | ReactNode | - | 次要描述，最大宽 300（`$bodySm`、`$textSecondary`） |
| icon | ReactNode | 按 status 生成 | 自定义图标，替换默认状态图标 |
| action | ReactNode | - | 主操作区（通常放 `Button`，如「重试」），可并排多个 |
| extra | ReactNode | - | 次要操作区（如「联系客服」），位于主操作下方 |
| accessibilityLabel | string | - | 无障碍标签 |

## status 语义（圆底 / 符号色 token）

| status | 圆底 | 符号 | 典型场景 |
|---|---|---|---|
| success | `$successBg` | 对勾（`$successDefault`） | 提交/操作成功 |
| info | `$infoBg` | i（`$infoDefault`） | 已是最新、无更多内容 |
| warning | `$warningBg` | 感叹号（`$warningDefault`） | 权限/条件受限 |
| error | `$dangerBg` | 叉（`$dangerDefault`） | 加载失败、网络异常（含重试） |
| notFound | `$bgActive` | 404 文字（`$textTertiary`） | 404、资源不存在 |

## 组合约定

- 重试/返回等按钮经 `action` slot 传入；网络异常、接口报错统一 `status="error"` + 重试 action；
- 文案由业务传入（走 i18n），组件不内置文案；自定义插画经 `icon` 替换。

## 示例

`__examples__/States.tsx`：五种 status + 自定义图标 + 双操作。

## Do / Don't

- Do：错误/成功/404 等结果用 Result；重试按钮放 `action`。
- Don't：不在业务里内联结果态布局；不在 Result 内发请求；不硬编码颜色/尺寸。
