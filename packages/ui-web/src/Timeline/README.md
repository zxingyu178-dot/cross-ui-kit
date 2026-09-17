# Timeline 时间线（web）

垂直时间轴，语义色圆点 + 时间 + 标题 + 描述，支持倒序与自定义圆点。

## 用法

```tsx
import { Timeline } from '@kit/ui-web'

<Timeline items={[
  { time: '2024-01', title: '项目启动', description: '完成需求评审与技术选型', color: 'primary' },
  { time: '2024-03', title: '开发完成', color: 'success', dotType: 'solid' },
  { time: '2024-06', title: '待上线', color: 'warning' },
]} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | TimelineItem[] | — | 时间线条目列表 |
| reverse | boolean | false | 是否倒序 |
| className | string | — | 外层容器类名 |

### TimelineItem

| 属性 | 类型 | 说明 |
|---|---|---|
| title | ReactNode | 标题（必填） |
| description | ReactNode | 描述文本 |
| time | ReactNode | 时间标签 |
| color | 'primary'\|'success'\|'warning'\|'error'\|'info'\|'neutral' | 圆点语义色 |
| dotType | 'solid'\|'outline' | 圆点形态 |
| customDot | ReactNode | 自定义圆点 |

## 注意事项

- 文案走 i18n key，不写死。
- 竖线为装饰性元素（aria-hidden）。
