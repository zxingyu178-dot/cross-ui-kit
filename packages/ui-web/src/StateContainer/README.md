# StateContainer 四态编排容器（web）

铁律#6「四态必齐」的**一站式收口**：受控 `status` 在 loading / empty / error / success 间切换，内部默认用 `Skeleton`（或 `Spinner`）、`Empty`、`Result` 兜底，success 渲染业务内容；各占位态均可经 slot 整体覆盖。视图只做切换，数据与重试逻辑在 `@kit/core`（如 `useRequest`/`useTable`）或父级。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| status | `'loading'|'empty'|'error'|'success'` | 必填 | 当前状态（受控，通常由请求 hook 输出） |
| loadingMode | `'skeleton'|'spinner'` | `'skeleton'` | loading 态呈现：骨架屏（布局不跳）或居中转圈 |
| loading | ReactNode | 默认骨架/转圈 | 自定义 loading 视图 |
| empty | ReactNode | 默认 `Empty` | 自定义空态视图 |
| error | ReactNode | 默认 `Result(error)` | 自定义错误视图 |
| onRetry | `() => void` | - | 默认错误视图的重试回调；传入才显示「重试」按钮 |
| children | ReactNode | 必填 | success（normal）态内容 |
| accessibilityLabel / className / id | - | - | 透传；loading 态根节点自动带 `aria-busy` |

## 默认兜底

- loading + skeleton：`p-6` 内 4 行文本骨架；loading + spinner：居中 `Spinner tone="muted"`（带「加载中」无障碍标签）；
- empty：`Empty`（标题「暂无数据」）；
- error：`Result status="error"`（标题「加载失败」，有 `onRetry` 才出现重试按钮）。

> 默认中文文案仅为**兜底**；生产环境应通过 `empty`/`error` slot 传入走 i18n 的视图（i18n runtime 落地后默认文案也会切换为 i18n key）。

## 用法

```tsx
const { status, data, retry } = useRequest(fetchList) // status: loading|empty|error|success
return (
  <StateContainer status={status} onRetry={retry}>
    <List data={data} />
  </StateContainer>
)
```

## 组合约定

- 容器不发请求、不内置业务分支；`onRetry` 仅把回调接到默认错误按钮，完全自定义用 `error` slot；
- 需要与默认不同的空态/错误插画、错误码、多按钮，直接传 `empty`/`error`（内部仍用 Empty/Result 组合）。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（可交互四态切换、loading 形态切换、重试、自定义 slot）
- Storybook：`StateContainer.stories.tsx`

## Do / Don't

- Do：任何承载数据的区块用 StateContainer 包裹，四态交给它切换。
- Don't：不在业务页面里各写一套 if-loading/empty/error；不在容器内发请求；不硬编码颜色/尺寸。
