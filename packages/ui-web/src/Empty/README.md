# Empty 空态（web）

四态之 **empty**：列表、卡片、搜索结果等区块**无数据**时的占位。纯组合布局，居中展示「图标 + 标题 + 描述 + 可选操作」。是否渲染由父级（StateContainer，规划中）按数据状态控制，Empty 只负责空态视觉。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | - | 主说明（如「暂无数据」），弱化居中 |
| description | ReactNode | - | 次要描述，最大宽度 280 防超长 |
| icon | ReactNode | 内置空文档图形 | 自定义图标/插画，替换默认图形 |
| action | ReactNode | - | 操作区，组合传入（通常放一个 `Button`） |
| accessibilityLabel | string | - | 映射 aria-label |
| className / id | string | - | 透传 |

## 视觉与 token

- 根：纵向居中、文字居中，内边距 px-6(24)/py-10(40)；
- 默认图形：圆底 96（`bg-bg-active` 全圆）+ 空文档轮廓（38×34，`border-text-tertiary` 2px、圆角 md）+ 内横线（16×2 `bg-text-tertiary`），纯几何零依赖、暗色自适应；
- title `text-body-md` + `text-text-secondary`；description `text-caption` + `text-text-tertiary`；操作区上间距 mt-5(20)。

## 组合约定

- 操作按钮经 `action` slot 传入（组合优先），不在 Empty 内部声明按钮数据，天然继承 Button 的加载/禁用态；
- 搜索无结果、网络异常、错误等场景通过 `icon` 传入对应图形（统一图标库 `@kit/icons` 建成后直接取用）；
- Empty 只表达 empty 态；错误（含重试）用后续的 Result/ErrorState，加载中用 Skeleton/Spinner。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（基础、带操作、仅标题、自定义图标）
- Storybook：`Empty.stories.tsx`

## Do / Don't

- Do：无列表/无搜索结果/空收藏等场景用 Empty；操作放 `action` slot；超长描述交给组件限宽换行。
- Don't：不在业务里内联写空态布局（用本组件）；不在 Empty 内发请求或写状态分支；不硬编码颜色/尺寸。
