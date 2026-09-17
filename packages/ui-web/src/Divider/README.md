# Divider 分割线（web）

水平/垂直分割，solid/dashed/dotted 三线型，支持分割线文字。

## 用法

```tsx
import { Divider } from '@kit/ui-web'

<Divider />
<Divider type="dashed" />
<Divider text="或者" />
<Divider text="左侧文字" textPosition="left" />
<div className="h-8"><Divider orientation="vertical" /></div>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | 方向 |
| type | 'solid' \| 'dashed' \| 'dotted' | 'solid' | 线条类型 |
| text | string | — | 分割线文字（仅 horizontal） |
| textPosition | 'left' \| 'center' \| 'right' | 'center' | 文字位置 |
| className | string | — | 外层容器类名 |

## 注意事项

- 垂直方向需父容器有确定高度。
- 文字走 i18n key，不写死。
