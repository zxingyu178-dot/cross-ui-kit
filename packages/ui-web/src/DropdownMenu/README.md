# DropdownMenu 下拉菜单（web）

@radix-ui/react-dropdown-menu 封装，点击触发弹出菜单，菜单项点击回调，禁用/危险态，Portal 渲染，键盘无障碍。

## 用法

```tsx
import { DropdownMenu } from '@kit/ui-web'

<DropdownMenu
  trigger={<button className="...">操作 ▼</button>}
  items={[
    { key: 'edit', label: '编辑', onClick: () => {} },
    { key: 'delete', label: '删除', danger: true, onClick: () => {} },
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| trigger | ReactNode | — | 触发元素（需可转发 ref） |
| items | DropdownMenuItem[] | — | 菜单项列表（key/label/onClick/disabled/danger/icon） |
| align | 'start' \| 'center' \| 'end' | 'start' | 对齐方式 |
| className | string | — | 外层容器类名 |
