# Affix 固钉（web）

监听滚动，当元素距离视口顶部/底部达到偏移量时固定定位。

## 用法

```tsx
import { Affix } from '@kit/ui-web'
import { Button } from '@kit/ui-web'

<Affix offsetTop={20}>
  <Button>固定在顶部 20px</Button>
</Affix>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| offsetTop | number | — | 距离窗口顶部达到指定偏移量后触发 |
| offsetBottom | number | — | 距离窗口底部达到指定偏移量后触发 |
| onChange | (affixed: boolean) => void | — | 固定状态改变时触发回调 |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
