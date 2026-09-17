# Cascader 级联选择（web）

div 容器 + 输入框 + 级联面板（多列），受控优先，支持任意层级，点击叶子节点确认。

## 用法

```tsx
import { Cascader } from '@kit/ui-web'

const [val, setVal] = useState<string[]>([])
<Cascader
  value={val}
  onChange={setVal}
  options={[
    { value: 'js', label: '江苏', children: [
      { value: 'xz', label: '徐州', children: [
        { value: 'ql', label: '泉山区' },
      ]},
    ]},
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string[] | — | 受控值（每级选中的 value） |
| defaultValue | string[] | [] | 非受控默认值 |
| onChange | (value: string[]) => void | — | 值变化回调 |
| options | CascaderOption[] | — | 选项树（value/label/children） |
| placeholder | string | '请选择' | 占位文本 |
| className | string | — | 外层容器类名 |
