# ActionSheet 底部动作面板（native）

底部弹出动作列表，支持危险项与取消。

## 用法

```tsx
import { ActionSheet } from '@kit/ui-native'
<ActionSheet open={open} actions={[{ key: 'edit', label: '编辑' }]} onClose={() => setOpen(false)} />
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
| style | ViewStyle | — | 外层容器样式 |
