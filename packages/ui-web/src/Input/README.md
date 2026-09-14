# Input 输入框（web）

单行文本输入，shadcn/ui 模式（cva + 原生 input 薄封装），视觉全部走 `@kit/tokens` CSS 变量。

## 何时使用

- 表单中的单行文本录入；多行用 Textarea（后续组件），带选项的选择用 Select。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| value / defaultValue | `string` | — | 受控值 / 非受控初值 |
| type | `text\|password\|number\|tel\|email\|search` | `text` | 输入类型 |
| size | `sm\|md\|lg` | `md` | 高度取 `control-height-*`（32/40/48px） |
| placeholder | `string` | — | 占位文本（颜色 `text-tertiary`） |
| error | `boolean \| string` | `false` | `true` 仅红色边框高亮；字符串同时在下方显示错误文案（`role="alert"`） |
| disabled | `boolean` | `false` | 禁用（背景变 hover 色、禁止输入） |
| readOnly | `boolean` | `false` | 只读（可聚焦复制，不可改） |
| prefixIcon / suffixIcon | `ReactNode` | — | 左/右侧图标槽（自动留 padding） |
| maxLength | `number` | — | 原生最大长度 |
| onChange | `(value: string) => void` | — | **值回调**（内部从 event.target.value 归一，三栈统一） |
| className | `string` | — | 经 `cn()` 合并 |
| 其余 | `InputHTMLAttributes` | — | 原生属性透传（id、name、autoComplete、onFocus/onBlur 等） |

## 设计与交互要点

- token：边框 `border-default`、错误 `border-danger` + `text-danger`、聚焦 `outline-border-focus`、背景 `bg-card`、禁用 `bg-hover`；
- 聚焦：focus-visible 2px 焦点环；错误态焦点环为 danger 色；
- 无障碍：错误时 `aria-invalid` 并以 `aria-describedby` 关联错误文案（`role="alert"`）；图标槽为装饰性（`aria-hidden`），输入框须有 label 或 `aria-label`；
- 暗色：全部语义 CSS 变量，根节点切 `.dark` 自动换肤；
- 受控优先：表单场景配合 react-hook-form + zod（catalog 已锁定）。

## 示例

`__examples__/States.tsx`：基础 / 尺寸 / 密码 / 图标 / 实时校验错误 / 禁用 / 只读。
