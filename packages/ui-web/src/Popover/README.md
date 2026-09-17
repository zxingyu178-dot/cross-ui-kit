# Popover 弹出层（web）

@radix-ui/react-popover 封装，点击触发弹出内容，Portal 渲染，四方向+三对齐，键盘无障碍。

## 用法

```tsx
import { Popover } from '@kit/ui-web'

<Popover
  trigger={<button>悬停/点击 ▼</button>}
  content={<div>弹出内容</div>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| trigger | ReactNode | — | 触发元素（需可转发 ref） |
| content | ReactNode | — | 弹出内容 |
| align | 'start' \| 'center' \| 'end' | 'center' | 对齐方式 |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 弹出方向 |
| className | string | — | 外层容器类名 |
