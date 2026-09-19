# Backdrop 遮罩层（web）

全屏半透明遮罩，点击关闭。

## 用法

```tsx
import { Backdrop } from '@kit/ui-web'
<Backdrop open={open} onClose={close}>
  <Card>内容</Card>
</Backdrop>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | false | 是否显示 |
| onClose | () => void | — | 点击遮罩关闭 |
| children | ReactNode | — | 遮罩内容 |
| opacity | number | 0.5 | 遮罩透明度 |
| className | string | — | 外层容器类名 |
