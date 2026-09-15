# StateContainer 四态编排容器（mini：小程序 / 移动 H5）

铁律#6「四态必齐」的一站式收口：受控 `status` 在 loading / empty / error / success 间切换，默认用 `Skeleton`（或 `Spinner`）、`Empty`、`Result` 兜底，success 渲染业务内容；各占位态可经 slot 整体覆盖。视图只做切换，数据与重试逻辑在 `@kit/core` 或父级。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| status | `'loading'|'empty'|'error'|'success'` | 必填 | 当前状态（受控，通常由请求 hook 输出） |
| loadingMode | `'skeleton'|'spinner'` | `'skeleton'` | loading 态呈现：骨架屏或居中转圈 |
| loading | ReactNode | 默认骨架/转圈 | 自定义 loading 视图 |
| empty | ReactNode | 默认 `Empty` | 自定义空态视图 |
| error | ReactNode | 默认 `Result(error)` | 自定义错误视图 |
| onRetry | `() => void` | - | 默认错误视图的重试回调（按钮用 `onPress`）；传入才显示「重试」 |
| children | ReactNode | 必填 | success（normal）态内容 |
| accessibilityLabel / className | - | - | 透传 |

## 默认兜底

- loading + skeleton：24px 内边距下 4 行文本骨架；loading + spinner：居中 `Spinner tone="muted"`；
- empty：`Empty`（标题「暂无数据」）；error：`Result status="error"`（有 `onRetry` 才出现重试按钮）。

> 默认中文文案仅为兜底；生产应通过 `empty`/`error` slot 传入走 i18n 的视图。

## 组合约定

- 容器不发请求、不写业务分支；小端按钮事件统一 `onPress`；完全自定义错误用 `error` slot。

## 示例

`__examples__/States.tsx`：可交互四态切换、loading 形态切换、重试（loading→success）。

## Do / Don't

- Do：承载数据的区块用 StateContainer 包裹，四态交给它切换。
- Don't：不在页面里各写一套 loading/empty/error 判断；不在容器内发请求；不硬编码颜色/尺寸。
