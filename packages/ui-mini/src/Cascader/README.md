# Cascader 级联选择（mini）

View+Text 自建，多列级联面板，受控优先，支持任意层级，点击叶子节点确认。

## 用法

```tsx
import { Cascader } from '@kit/ui-mini'

const [val, setVal] = useState<string[]>([])
<Cascader value={val} onChange={setVal} options={options} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string[] | — | 受控值 |
| defaultValue | string[] | [] | 非受控默认值 |
| onChange | (value: string[]) => void | — | 值变化回调 |
| options | CascaderOption[] | — | 选项树 |
| placeholder | string | '请选择' | 占位文本 |
| className | string | — | 外层容器类名 |
