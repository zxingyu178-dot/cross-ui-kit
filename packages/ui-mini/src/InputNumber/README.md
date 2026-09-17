# InputNumber 数字输入（mini）

受控优先，min/max/step/precision，加减按钮，onBlur 格式化。View+Input+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { InputNumber } from '@kit/ui-mini'

<InputNumber defaultValue={1} min={0} max={10} />
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
