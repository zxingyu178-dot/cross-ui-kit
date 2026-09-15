# Empty 空态（mini：小程序 / 移动 H5）

四态之 **empty**：列表/搜索结果等区块无数据时的占位。Taro `View`/`Text` 纯组合布局，图形与布局在 `Empty.scss` 全量 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | - | 主说明（如「暂无数据」），弱化居中 |
| description | ReactNode | - | 次要描述，最大宽度 280 防超长 |
| icon | ReactNode | 内置空文档图形 | 自定义图标/插画，替换默认图形 |
| action | ReactNode | - | 操作区，组合传入（通常放一个 `Button`） |
| accessibilityLabel | string | - | H5 映射 aria-label |
| className | string | - | 透传 |

## 视觉与 token

- 根：纵向居中、文字居中，内边距 40×24；
- 默认图形：圆底 96（`--kit-color-bg-active` 全圆）+ 空文档轮廓（38×34，描边 `--kit-color-text-tertiary` 2px、圆角 md）+ 内横线（16×2）；
- title `--kit-font-size-body-md` + `text-secondary`；description `caption` + `text-tertiary`；操作区上间距 20。

## 组合约定

- 操作按钮经 `action` slot 传入，不在组件内声明按钮数据；搜索/断网/错误等场景经 `icon` 传对应图形；
- Empty 只表达 empty 态；错误（含重试）用后续 Result/ErrorState，加载中用 Skeleton/Spinner。

## 示例

`__examples__/States.tsx`：基础、带操作、仅标题、自定义放大镜图标。

## Do / Don't

- Do：无列表/无搜索结果/空收藏用 Empty；操作放 `action` slot。
- Don't：不在业务里内联空态布局；不在 Empty 内发请求；不硬编码颜色/尺寸。
