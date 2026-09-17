# Grid 栅格（native）

24 栅格系统，Row + Col，Tamagui XStack/YStack，支持间距/对齐/换行/偏移/排序。

## 用法

```tsx
import { Row, Col } from '@kit/ui-native'

<Row gutter={16}>
  <Col span={12}><YStack>col-12</YStack></Col>
  <Col span={12}><YStack>col-12</YStack></Col>
</Row>
```

## Row Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| gutter | number \| [number, number] | 0 | 栅格间距 |
| justify | 'start' \| 'center' \| 'end' \| 'between' \| 'around' | 'start' | 水平对齐 |
| align | 'top' \| 'middle' \| 'bottom' | 'top' | 垂直对齐 |
| wrap | boolean | true | 是否换行 |

## Col Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| span | number | 24 | 栅格占位（1-24） |
| offset | number | 0 | 栅格偏移（1-24） |
| order | number | — | 排序 |
