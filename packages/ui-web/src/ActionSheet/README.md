# ActionSheet 底部动作面板（web）

底部弹出动作列表，支持危险项与取消。

## 用法

```tsx
import { ActionSheet } from '@kit/ui-web'
<ActionSheet
  open={open}
  actions={[{ key: 'edit', label: '编辑' }, { key: 'del', label: '删除', danger: true }]}
  onSelect={(k) => console.log(k)}
  onClose={() => setOpen(false)}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | — | 是否打开（必填） |
| actions | ActionSheetAction[] | — | 动作列表（必填） |
| title | ReactNode | — | 标题 |
| cancelText | string | '取消' | 关闭按钮文字 |
| onSelect | (key: string) => void | — | 选中动作 |
| onClose | () => void | — | 关闭 |
| className | string | — | 外层容器类名 |

### ActionSheetAction

| 属性 | 类型 | 说明 |
|---|---|---|
| key | string | 唯一键（必填） |
| label | ReactNode | 文字（必填） |
| danger | boolean | 是否危险操作 |
| disabled | boolean | 是否禁用 |
