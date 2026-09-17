# Drawer 抽屉（mini）

View+Text 自建，遮罩层 + 抽屉内容，四方向，条件渲染，点击遮罩关闭。

## 用法

```tsx
import { Drawer } from '@kit/ui-mini'

<Drawer open={open} onOpenChange={setOpen} title="抽屉标题" placement="right">
  抽屉内容
</Drawer>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | false | 是否打开 |
| onOpenChange | (open: boolean) => void | — | 打开状态变化回调 |
| title | ReactNode | — | 标题 |
| children | ReactNode | — | 抽屉内容 |
| placement | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | 弹出方向 |
| size | number | 360 | 宽度（左右）/ 高度（上下） |
| className | string | — | 外层容器类名 |
