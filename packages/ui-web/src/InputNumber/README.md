# InputNumber 数字输入（web）

受控优先，支持 min/max/step/precision，加减按钮，输入中允许空串，onBlur 格式化。

## 用法

```tsx
import { InputNumber } from '@kit/ui-web'

<InputNumber defaultValue={1} min={0} max={10} step={1} />
<InputNumber value={count} onChange={setCount} precision={2} step={0.1} />
<InputNumber controls={false} placeholder="请输入数量" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number \| null | — | 受控值 |
| defaultValue | number \| null | null | 非受控默认值 |
| onChange | (value: number \| null) => void | — | 值变化回调 |
| min | number | — | 最小值 |
| max | number | — | 最大值 |
| step | number | 1 | 步长 |
| precision | number | — | 小数精度 |
| disabled | boolean | false | 是否禁用 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| placeholder | string | — | 占位文本 |
| controls | boolean | true | 是否显示加减按钮 |
| className | string | — | 外层容器类名 |

## 注意事项

- 受控优先；非受控时内部维护 value。
- onBlur 时自动 clamp 到 min/max 并按 precision 格式化。
- 加减按钮到达边界时自动禁用。
