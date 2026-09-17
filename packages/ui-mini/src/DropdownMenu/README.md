# DropdownMenu 下拉菜单（mini）

点击触发切换显示，菜单项点击回调，禁用/危险态。View+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { DropdownMenu } from '@kit/ui-mini'

<DropdownMenu
  trigger={<Text>操作 ▼</Text>}
  items={[
    { key: 'edit', label: '编辑', onClick: () => {} },
    { key: 'delete', label: '删除', danger: true, onClick: () => {} },
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| trigger | ReactNode | — | 触发元素 |
| items | DropdownMenuItem[] | — | 菜单项列表（key/label/onClick/disabled/danger/icon） |
| align | 'start' \| 'center' \| 'end' | 'start' | 对齐方式 |
| className | string | — | 外层容器类名 |
