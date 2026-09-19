# NoticeBar 通知栏（mini）

顶部通知条，支持语义色、图标、操作、关闭。

## 用法

```tsx
import { NoticeBar } from '@kit/ui-mini'
<NoticeBar content="系统维护" tone="warning" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| content | ReactNode | — | 内容（必填） |
| icon | ReactNode | — | 左侧图标 |
| action | ReactNode | — | 右侧操作 |
| onClose | () => void | — | 关闭 |
| tone | 'info'\\|'success'\\|'warning'\\|'danger' | 'info' | 语义色 |
| scrollable | boolean | false | 是否滚动 |
| className | string | — | 外层容器类名 |
