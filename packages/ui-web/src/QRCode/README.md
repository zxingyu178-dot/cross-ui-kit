# QRCode 二维码（web）

二维码组件，基于 qrcode 矩阵渲染。

## 用法

```tsx
import { QRCode } from '@kit/ui-web'
<QRCode value="https://example.com" size={128} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 编码内容（必填） |
| size | number | 128 | 尺寸（像素） |
| level | 'L'\|'M'\|'Q'\|'H' | 'M' | 容错级别 |
| color | string | '#0f172a' | 前景色 |
| bgColor | string | '#ffffff' | 背景色 |
| className | string | — | 外层容器类名 |
