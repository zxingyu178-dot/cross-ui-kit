# Affix 固钉（mini）

固定定位容器，小程序端简化为固定定位，offsetTop/offsetBottom 控制位置。

## 用法

```tsx
import { Affix } from '@kit/ui-mini'
import { Button } from '@kit/ui-mini'

<Affix offsetTop={20}>
  <Button>固定在顶部 20px</Button>
</Affix>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| offsetTop | number | — | 距离顶部偏移量 |
| offsetBottom | number | — | 距离底部偏移量 |
| onChange | (affixed: boolean) => void | — | 固定状态改变回调（mini 端暂不触发） |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
