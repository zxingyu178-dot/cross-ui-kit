# ColorPicker 颜色选择器（web）

输入框 + 颜色选择面板（预设色板 + 自定义颜色），受控优先，点击外部关闭。

## 用法

```tsx
import { ColorPicker } from '@kit/ui-web'

const [color, setColor] = useState('#2563eb')
<ColorPicker value={color} onChange={setColor} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控颜色值（如 "#2563eb"） |
| defaultValue | string | — | 非受控默认颜色值 |
| onChange | (color: string) => void | — | 颜色变化回调 |
| presetColors | string[] | 10 色预设 | 预设颜色列表 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | '请选择颜色' | 占位文本 |
| className | string | — | 外层容器类名 |
