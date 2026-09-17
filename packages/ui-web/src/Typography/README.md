# Typography 排版（web）

统一文字样式，支持 h1-h4/body/caption 变体。

## 用法

```tsx
import { Typography } from '@kit/ui-web'

<Typography variant="h1">标题 1</Typography>
<Typography variant="body">正文内容</Typography>
<Typography variant="caption" ellipsis>辅助文字</Typography>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | 'h1'\|'h2'\|'h3'\|'h4'\|'body'\|'caption' | 'body' | 变体 |
| color | string | — | 文字颜色 |
| ellipsis | boolean | false | 是否省略（单行） |
| bold | boolean | false | 是否加粗 |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
