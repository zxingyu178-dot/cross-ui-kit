# Segmented 分段控制器（web）

受控优先，选项切换，选中态高亮卡片，整体/单项禁用，三尺寸。

## 用法

```tsx
import { Segmented } from '@kit/ui-web'

const [mode, setMode] = useState('day')
<Segmented
  value={mode}
  onChange={setMode}
  options={[
    { label: '日', value: 'day' },
    { label: '周', value: 'week' },
    { label: '月', value: 'month', disabled: true },
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控值 |
| defaultValue | string | — | 非受控默认值 |
| onChange | (value: string) => void | — | 值变化回调 |
| options | SegmentedOption[] | — | 选项列表（label/value/disabled） |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| disabled | boolean | false | 整体禁用 |
| className | string | — | 外层容器类名 |
