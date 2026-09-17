# Segmented 分段控制器（mini）

受控优先，选项切换，选中态高亮，整体/单项禁用，三尺寸。View+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { Segmented } from '@kit/ui-mini'

<Segmented
  value={mode}
  onChange={setMode}
  options={[
    { label: '日', value: 'day' },
    { label: '周', value: 'week' },
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控值 |
| defaultValue | string | — | 非受控默认值 |
| onChange | (value: string) => void | — | 值变化回调 |
| options | SegmentedOption[] | — | 选项列表 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| disabled | boolean | false | 整体禁用 |
| className | string | — | 外层容器类名 |
