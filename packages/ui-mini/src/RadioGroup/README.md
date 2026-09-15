# RadioGroup 单选组（mini：小程序 / 移动 H5）

基于 **NutUI `<RadioGroup>` + `<Radio>`** 封装，通过自建 `icon/activeIcon` 接管圆圈视觉（颜色全走 `--kit-*` token，不使用 NutUI 默认主题色）。`onValueChange` 统一为 string 值回调。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| options | `{ value: string; label: ReactNode; disabled?: boolean }[]` | - | 选项列表（必填） |
| value | string | - | 受控选中值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 选中值变化（NutUI onChange 适配为 string） |
| disabled | boolean | false | 整组禁用 |
| direction | `'vertical'|'horizontal'` | `'vertical'` | 排列方向（横向自动换行） |
| size | `'sm'|'md'` | `'md'` | 圆圈/内点尺寸（md 20/10、sm 16/8，与 web 对齐） |
| className | string | - | 容器类名（仅允许 token 化样式） |

## 行为约定

- 单选互斥，再次点击已选项不取消；受控用 `value` + `onValueChange`，非受控用 `defaultValue`。
- 单项禁用走 `options[i].disabled`，整组禁用走 `disabled`。
- 圆圈/内点为自建节点（`RadioIcon/RadioActiveIcon`），选中态只改圆圈描边与内点为主色。

## 视觉与 token（RadioGroup.scss）

- 圆圈：未选 `--kit-color-bg-card` + `--kit-color-border-default`，选中描边 `--kit-color-primary-default`，内点主色实心；
- 禁用圆圈底 `--kit-color-bg-hover`，文本 `--kit-color-text-disabled`；
- 文本 `--kit-font-size-body-md / text-primary`；组间距用 `--kit-spacing-*`。

## 前置依赖（壳工程）

NutUI Radio 的布局/交互样式由 NutUI 全局样式提供，壳工程（play-miniapp）需在入口引入 `@nutui/nutui-react-taro/dist/style.css`。

## 示例

`__examples__/States.tsx`：受控/非受控、横向、小号、单项与整组禁用。
