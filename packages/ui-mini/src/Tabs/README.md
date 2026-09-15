# Tabs 选项卡（mini：小程序 / 移动 H5）

基于 **NutUI `Tabs` + `TabPane`** 封装，line（下划线）形态，用于同层级内容平级切换。激活色通过 `activeColor` 传主色 CSS 变量，其余视觉在 `Tabs.scss` 全量 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{ value: string; label: ReactNode; disabled?: boolean; content?: ReactNode }[]` | - | 选项卡列表（必填） |
| value | string | - | 受控激活值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 激活值变化（NutUI onChange 适配为 string） |
| size | `'sm'|'md'` | `'md'` | 标签头字号 |
| className | string | - | 容器类名（仅允许 token 化样式） |

## 行为约定

- 受控 `value`+`onValueChange`，非受控 `defaultValue`；`items[i].content` 提供时渲染面板，缺省只渲染标签头。
- 切换动画时长固定 250ms（与 token `motion-duration-base` 对齐；NutUI duration 为数字 prop，无法用 CSS 变量）。
- **标签头标题仅支持文本**：NutUI `TabPane.title` 为 SimpleValue，`label` 会被 `String()` 转换；需要节点级标签头时后续走 NutUI `title` 自定义渲染。

## 视觉与 token（Tabs.scss）

- 标签栏底线 `--kit-color-border-default`；未选文字 `--kit-color-text-tertiary`，激活文字/下划线主色 `--kit-color-primary-default`；
- 面板文字 `--kit-color-text-primary / body-md`；标签头字号 md=`body-sm`、sm=`caption`，字重 `medium`。

## 前置依赖（壳工程）

NutUI Tabs 布局/交互样式由 NutUI 全局样式提供，壳工程（play-miniapp）需在入口引入 `@nutui/nutui-react-taro/dist/style.css`。

## 示例

`__examples__/States.tsx`：受控带内容、非受控、小号、含禁用项、纯头导航。
