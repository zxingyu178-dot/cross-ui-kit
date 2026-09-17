# Tooltip 文字提示气泡（mini）

点击触发切换的轻量提示（移动端无 hover），深色气泡（`bg-inverse` / `text-inverse`），四向 placement。View+Text 自建绝对定位浮层，不依赖 NutUI。

## 用法

```tsx
import { Tooltip } from '@kit/ui-mini'
import { Button } from '@kit/ui-mini'

<Tooltip content="保存当前修改" placement="top">
  <Button>保存</Button>
</Tooltip>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| content | ReactNode | — | 提示内容（必填） |
| children | ReactNode | — | 触发元素（点击切换，必填） |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | 气泡位置 |
| sideOffset | number | 4 | 触发元素与气泡间距 px |
| open | boolean | — | 受控可见 |
| onOpenChange | (open: boolean) => void | — | 可见变化回调 |
| defaultOpen | boolean | — | 默认可见（非受控） |
| disabled | boolean | false | 禁用提示（仅渲染 children） |
| className | string | — | 外层容器类名 |

## 注意事项

- 小程序端点击触发，与 web 端 hover 触发的交互差异是平台特性，props 语义保持一致。
- 气泡内容走 i18n key，不写死文案。
- 浮层层级走 `--kit-z-popover`（1060）。
