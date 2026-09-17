# Tooltip 文字提示气泡（web）

hover 触发的轻量提示，深色气泡（`bg-inverse` / `text-inverse`），四向 placement + 箭头。基于 `@radix-ui/react-tooltip`，自带无障碍行为（role="tooltip"、焦点触发、Esc 关闭）。

## 用法

```tsx
import { Tooltip } from '@kit/ui-web'
import { Button } from '@kit/ui-web'

<Tooltip content="保存当前修改" placement="top">
  <Button size="sm">保存</Button>
</Tooltip>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| content | ReactNode | — | 提示内容（必填） |
| children | ReactNode | — | 触发元素（hover 触发，必填） |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | 气泡位置 |
| sideOffset | number | 4 | 触发元素与气泡间距 px |
| delayDuration | number | 200 | hover 延迟显示 ms |
| open | boolean | — | 受控可见 |
| onOpenChange | (open: boolean) => void | — | 可见变化回调 |
| defaultOpen | boolean | — | 默认可见（非受控） |
| disabled | boolean | false | 禁用提示（仅渲染 children） |
| className | string | — | 气泡容器类名 |

## 注意事项

- children 必须是可转发 ref 的单个元素（原生元素或 forwardRef 组件）；Radix Trigger asChild 会合并事件。
- 受控与非受控二选一：传 `open` 则完全受控，否则内部管理。
- 气泡内容走 i18n key，不写死文案。
