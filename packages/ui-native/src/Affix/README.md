# Affix 固钉（native）

固定定位容器，offsetTop/offsetBottom 控制位置。

## 用法

```tsx
import { Affix } from '@kit/ui-native'
import { Button } from '@kit/ui-native'

<Affix offsetTop={20}>
  <Button>固定在顶部 20px</Button>
</Affix>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| offsetTop | number | — | 距离顶部偏移量 |
| offsetBottom | number | — | 距离底部偏移量 |
| onChange | (affixed: boolean) => void | — | 固定状态改变回调（native 端暂不触发） |
| children | ReactNode | — | 子元素 |
| style | ViewStyle | — | 外层容器样式 |
