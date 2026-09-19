# ProgressRing 环形进度（native）

环形进度指示器（近似环形，未引入 SVG 依赖）。

## 用法

```tsx
import { ProgressRing } from '@kit/ui-native'
<ProgressRing value={65} tone="success" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | — | 进度 0-100（必填） |
| size | number | 80 | 直径 px |
| strokeWidth | number | 8 | 线宽 px |
| children | ReactNode | — | 中间内容（默认显示百分比） |
| tone | 'primary'\\|'success'\\|'warning'\\|'danger' | 'primary' | 语义色 |
| style | ViewStyle | — | 外层容器样式 |
