# Space 间距（mini）

View flex 容器，gap 控制间距，支持水平/垂直/对齐/换行。

## 用法

```tsx
import { Space } from '@kit/ui-mini'
import { Button } from '@kit/ui-mini'

<Space size="md" direction="horizontal">
  <Button>按钮 1</Button>
  <Button>按钮 2</Button>
</Space>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number | 'md' | 间距大小 |
| direction | 'horizontal' \| 'vertical' | 'horizontal' | 方向 |
| align | 'start' \| 'center' \| 'end' \| 'baseline' | — | 对齐方式 |
| wrap | boolean | false | 是否换行 |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
