# QRCode 二维码（mini）

二维码组件，矩阵渲染为色块网格。

## 用法

```tsx
import { QRCode } from '@kit/ui-mini'
<QRCode value="https://example.com" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 编码内容（必填） |
| size | number | 240 | 尺寸（rpx） |
| level | 'L'\|'M'\|'Q'\|'H' | 'M' | 容错级别 |
| color | string | '#0f172a' | 前景色 |
| bgColor | string | '#ffffff' | 背景色 |
| className | string | — | 外层容器类名 |
