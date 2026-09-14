# Button 按钮（web）

触发即时操作。大端（网页 / Tauri 桌面与移动）实现，基于 Radix Slot + cva，视觉全部走 `@kit/tokens` CSS 变量（经 Tailwind 主题类映射）。

## 何时使用

- 用于即时动作（提交、确认、打开弹层、跳转配合 `asChild`）；
- 每个主视觉区域只允许一个 `primary`；危险且不可逆的操作才用 `danger`。
- 不要用：导航菜单（用导航组件）、需要选中态的开关（用 Switch/Checkbox）。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | `'primary' \| 'secondary' \| 'ghost' \| 'danger' \| 'link'` | `'primary'` | 视觉层级 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 高度取 `control-height-*` token（32/40/48px） |
| loading | `boolean` | `false` | 加载中：自动禁用、显示 Spinner、`aria-busy` |
| disabled | `boolean` | `false` | 禁用态 |
| block | `boolean` | `false` | 撑满父容器宽度 |
| asChild | `boolean` | `false` | 经 Radix Slot 渲染为子元素（如 `<a>` / 路由 Link） |
| icon | `ReactNode` | — | 前置图标（loading 时被 Spinner 替换） |
| className | `string` | — | 经 `cn()` 合并，禁止硬编码视觉值 |
| 其余 | `ButtonHTMLAttributes<HTMLButtonElement>` | — | 原生按钮属性全部透传（onClick、type、form 等） |

## 事件

| 事件 | 签名 | 触发时机 |
|---|---|---|
| onClick | `React.MouseEventHandler<HTMLButtonElement>` | 点击（loading/disabled 时不触发） |

## 设计与交互要点

- 使用 token：`color-primary-default/hover/active/disabled`、`color-danger-*`、`radius-md`、`control-height-*`、`motion-duration-fast`、`icon-size-md`、`color-border-focus`；
- 反馈：hover/active 变色、loading 显示旋转 Spinner 并锁死点击（配合 core 的 `useSubmitLock` 做异步提交）；
- 无障碍：原生 `<button>` 天然支持键盘与焦点；图标按钮必须传 `aria-label`；loading 暴露 `aria-busy`；聚焦环用 `border-focus`；
- 暗色：颜色全部引用语义 CSS 变量，根节点切 `.dark` 自动换肤，无需组件感知；
- `asChild` 用于按钮样式 + 路由跳转（渲染为 Link），避免按钮包链接的非法嵌套。

## 示例

- `__examples__/Variants.tsx`：五种层级
- `__examples__/States.tsx`：尺寸 / loading / 禁用 / block
- Storybook：`pnpm --filter @kit/ui-web storybook`（P1 接入）
