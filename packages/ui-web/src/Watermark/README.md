# Watermark 水印（web）

纯 CSS 背景图实现，覆盖在子元素上方。

## 用法

```tsx
import { Watermark } from '@kit/ui-web'

<Watermark text="机密文件">
  <div>内容区域</div>
</Watermark>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| text | string | 'Watermark' | 水印文字 |
| color | string | 'rgba(0,0,0,0.15)' | 水印文字颜色 |
| fontSize | number | 14 | 水印文字大小（px） |
| rotate | number | -22 | 水印旋转角度（deg） |
| gap | number | 100 | 水印间距（px） |
| opacity | number | 1 | 水印透明度（0-1） |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
