# Image 图片（native）

基于 Tamagui Image 组件封装，支持加载/错误状态、占位、圆角、填充方式。

## 用法

```tsx
import { Image } from '@kit/ui-native'

<Image src="https://example.com/image.jpg" width={200} height={150} fit="cover" radius={8} />
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
| style | ViewStyle | — | 外层容器样式 |
