# Slider 滑块（mini）

基于 Taro 原生 Slider 封装，受控优先，min/max/step，禁用态。

## 用法

```tsx
import { Slider } from '@kit/ui-mini'

<Slider value={val} onChange={setVal} min={0} max={100} step={1} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | — | 受控值 |
| defaultValue | number | 0 | 非受控默认值 |
| onChange | (value: number) => void | — | 值变化回调 |
| min | number | 0 | 最小值 |
| max | number | 100 | 最大值 |
| step | number | 1 | 步长 |
| disabled | boolean | false | 是否禁用 |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | 方向 |
| className | string | — | 外层容器类名 |
