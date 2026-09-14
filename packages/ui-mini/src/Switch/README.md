# Switch 开关（mini：小程序 / 移动 H5）

基于 **NutUI `<Switch>`（受控 checked + onChange）** 封装，轨道/滑块视觉由 `Switch.scss` 全量覆盖为 `--kit-*` token（不使用 NutUI 默认主题红）。`onCheckedChange` 统一为 boolean 值回调。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| checked | boolean | - | 受控开关态 |
| defaultChecked | boolean | - | 非受控初值 |
| onCheckedChange | (checked:boolean)=>void | - | 开关态变化（boolean 值回调） |
| disabled | boolean | false | 禁用 |
| loading | boolean | false | 异步切换中：拦截操作并显示 loading，不置灰，状态待外部确认后再变 |
| size | `'sm'|'md'` | `'md'` | 尺寸（md 44×24 / sm 36×20，与 web 档对齐） |
| label | ReactNode | - | 右侧文本（受控时可点文字切换） |
| className | string | - | 外层类名（仅允许 token 化样式） |

## 行为约定

- **受控优先**：异步场景用 `checked` + `loading`，请求成功后再更新 `checked`；loading 期间组件拦截 `onChange`，不自行改态、不置灰。
- 开关用于"即时生效"设置项；需明确提交的多选场景用 `Checkbox`。
- 滑块为中性白（`--kit-color-primary-text`，三栈统一）；轨道开态主色、关态 `--kit-color-bg-hover`。

## 视觉与 token（Switch.scss）

- 轨道：开 `--kit-color-primary-default`、关 `--kit-color-bg-hover`、禁用开 `--kit-color-primary-disabled`；胶囊圆角；
- 滑块：`--kit-color-primary-text` 白底圆形；loading 图标染 `--kit-color-primary-default`；
- 隐藏 NutUI 关态中间横线装饰；结构尺寸（宽高/位移）与 web 档对齐。

## 触控热区

开关视觉高度（20/24）小于最小触控热区 44px，布局时应通过外层容器留白/点击区域补足热区（壳层布局规范）。

## 示例

`__examples__/States.tsx`：受控/非受控、两种尺寸、禁用、异步 loading、带标签。
