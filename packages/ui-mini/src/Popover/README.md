# Popover 弹出层（mini）

点击触发切换显示，绝对定位弹出内容。View+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { Popover } from '@kit/ui-mini'

<Popover
  trigger={<Text>点击 ▼</Text>}
  content={<View>弹出内容</View>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| trigger | ReactNode | — | 触发元素 |
| content | ReactNode | — | 弹出内容 |
| align | 'start' \| 'center' \| 'end' | 'center' | 对齐方式 |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 弹出方向 |
| className | string | — | 外层容器类名 |
