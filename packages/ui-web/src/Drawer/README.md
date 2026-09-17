# Drawer 抽屉（web）

基于 @radix-ui/react-dialog 封装，四方向（left/right/top/bottom），遮罩层，受控优先，键盘无障碍。

## 用法

```tsx
import { Drawer, Button } from '@kit/ui-web'

const [open, setOpen] = useState(false)
<Button onClick={() => setOpen(true)}>打开抽屉</Button>
<Drawer open={open} onOpenChange={setOpen} title="抽屉标题" placement="right">
  抽屉内容
</Drawer>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | — | 是否打开（受控） |
| onOpenChange | (open: boolean) => void | — | 打开状态变化回调 |
| title | ReactNode | — | 标题 |
| children | ReactNode | — | 抽屉内容 |
| placement | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | 弹出方向 |
| size | number | 360 | 宽度（左右）/ 高度（上下） |
| className | string | — | 外层容器类名 |
