# Empty 空态（native：iOS / Android）

四态之 **empty**：列表/搜索结果等区块无数据时的占位。Tamagui `YStack`/`Stack`/`Text` 纯组合布局，颜色/间距/圆角只引用 token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | - | 主说明（如「暂无数据」），弱化居中 |
| description | ReactNode | - | 次要描述，最大宽度 280 防超长 |
| icon | ReactNode | 内置空文档图形 | 自定义图标/插画，替换默认图形 |
| action | ReactNode | - | 操作区，组合传入（通常放一个 `Button`） |
| accessibilityLabel | string | - | 无障碍标签 |

## 视觉与 token

- 根：纵向居中，内边距 `$10`(40) / `$6`(24)；
- 默认图形：圆底 96（`$bgActive` 全圆）+ 空文档轮廓（38×34，描边 `$textTertiary` 2px、圆角 `$md`）+ 内横线（16×2）；
- title `$bodyMd` + `$textSecondary`；description `$caption` + `$textTertiary`；操作区上间距 `$5`(20)。

## 组合约定

- 操作按钮经 `action` slot 传入；搜索/断网/错误等场景经 `icon` 传对应图形；
- Empty 只表达 empty 态；错误（含重试）用后续 Result/ErrorState，加载中用 Skeleton/Spinner。

## 示例

`__examples__/States.tsx`：基础、带操作、仅标题、自定义放大镜图标。

## Do / Don't

- Do：无列表/无搜索结果/空收藏用 Empty；操作放 `action` slot。
- Don't：不在业务里内联空态布局；不在 Empty 内发请求；不硬编码颜色/尺寸。
