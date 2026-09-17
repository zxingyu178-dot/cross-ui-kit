# Rate 评分（web）

受控优先，星星点击选择，hover 预览，allowHalf 半星，禁用态，三尺寸，自定义字符。

## 用法

```tsx
import { Rate } from '@kit/ui-web'

const [score, setScore] = useState(3)
<Rate value={score} onChange={setScore} />
<Rate defaultValue={4} allowHalf />
<Rate defaultValue={3} disabled />
<Rate defaultValue={4} count={10} character="♥" />
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
| className | string | — | 外层容器类名 |
