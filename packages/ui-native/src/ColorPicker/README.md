# ColorPicker 颜色选择器（native）

Tamagui XStack+YStack+Text 自建，预设色板，受控优先。

## 用法

```tsx
import { ColorPicker } from '@kit/ui-native'

const [color, setColor] = useState('#2563eb')
<ColorPicker value={color} onChange={setColor} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控颜色值 |
| defaultValue | string | — | 非受控默认颜色值 |
| onChange | (color: string) => void | — | 颜色变化回调 |
| presetColors | string[] | 10 色预设 | 预设颜色列表 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | '请选择颜色' | 占位文本 |
| style | ViewStyle | — | 外层容器样式 |
