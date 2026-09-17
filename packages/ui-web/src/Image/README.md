# Image 图片（web）

img 标签封装，支持加载/错误状态、占位、圆角、填充方式。

## 用法

```tsx
import { Image } from '@kit/ui-web'

<Image
  src="https://example.com/image.jpg"
  alt="示例图片"
  width={200}
  height={150}
  fit="cover"
  radius={8}
  placeholder={<span>加载中...</span>}
  fallback={<span>加载失败</span>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| src | string | — | 图片地址 |
| alt | string | '' | 替代文本 |
| width | number \| string | — | 宽度 |
| height | number \| string | — | 高度 |
| fit | 'cover' \| 'contain' \| 'fill' \| 'stretch' \| 'center' | 'cover' | 填充方式 |
| radius | number | — | 圆角 |
| placeholder | ReactNode | — | 加载中占位 |
| fallback | ReactNode | — | 加载失败占位 |
| className | string | — | 外层容器类名 |
