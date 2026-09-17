# Rate 评分（native）

受控优先，点击选择，allowHalf 半星，禁用态，三尺寸，自定义字符。Tamagui XStack+Text 自建。

## 用法

```tsx
import { Rate } from '@kit/ui-native'

<Rate value={score} onChange={setScore} />
<Rate defaultValue={4} allowHalf />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | — | 受控值 |
| defaultValue | number | 0 | 非受控默认值 |
| onChange | (value: number) => void | — | 值变化回调 |
| count | number | 5 | 星星总数 |
| allowHalf | boolean | false | 是否允许半星 |
| disabled | boolean | false | 是否禁用 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| character | ReactNode | '★' | 自定义字符 |
| style | ViewStyle | — | 外层容器样式 |
