# Notification 通知（mini）

View+Text 自建，通知卡片，支持自动关闭、类型、关闭按钮。

## 用法

```tsx
import { Notification } from '@kit/ui-mini'

<Notification
  type="success"
  title="操作成功"
  description="您的操作已成功完成"
  onClose={() => {}}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | string | — | 标题 |
| description | string | — | 描述 |
| type | 'success'\|'info'\|'warning'\|'error' | 'info' | 类型 |
| duration | number | 4500 | 自动关闭时长（ms），0 表示不自动关闭 |
| onClose | () => void | — | 关闭回调 |
| closable | boolean | true | 是否显示关闭按钮 |
| icon | ReactNode | — | 自定义图标 |
| className | string | — | 外层容器类名 |
