# Timeline 时间线（native）

垂直时间轴，语义色圆点 + 时间 + 标题 + 描述，支持倒序与自定义圆点。Tamagui YStack/XStack 自建，颜色只引用 `$token`。

## 用法

```tsx
import { Timeline } from '@kit/ui-native'

<Timeline items={[
  { time: '2024-01', title: '项目启动', color: 'primary' },
  { time: '2024-03', title: '开发完成', color: 'success', dotType: 'solid' },
]} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | TimelineItem[] | — | 时间线条目列表 |
| reverse | boolean | false | 是否倒序 |
| style | ViewStyle | — | 外层容器样式 |
