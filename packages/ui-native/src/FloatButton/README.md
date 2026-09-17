# FloatButton 悬浮按钮（native）

Tamagui XStack+Text 自建，absolute 定位按钮，支持图标、形状。

## 用法

```tsx
import { FloatButton } from '@kit/ui-native'

<FloatButton icon={<Text>+</Text>} onClick={() => {}} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| icon | ReactNode | '+' | 图标 |
| onClick | () => void | — | 点击回调 |
| type | 'primary' \| 'default' | 'primary' | 类型 |
| shape | 'circle' \| 'square' | 'circle' | 形状 |
| tooltip | string | — | 提示文字（native 暂不支持） |
| bottom | number | 24 | 距底部距离（px） |
| right | number | 24 | 距右侧距离（px） |
| style | ViewStyle | — | 外层容器样式 |
