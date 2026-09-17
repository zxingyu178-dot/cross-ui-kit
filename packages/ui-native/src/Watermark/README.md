# Watermark 水印（native）

Tamagui XStack+YStack+Text 自建，绝对定位覆盖在子元素上方，重复文字。

## 用法

```tsx
import { Watermark } from '@kit/ui-native'

<Watermark text="机密文件">
  <YStack>内容区域</YStack>
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
| style | ViewStyle | — | 外层容器样式 |
