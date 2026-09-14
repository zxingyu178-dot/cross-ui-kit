# __ComponentName__（web）

> 复制本目录到 `packages/ui-web/src/__ComponentName__/`，替换占位符后填写各节。

## 用途

<解决什么问题、何时使用、何时不要用>

## 与底座关系

<基于哪个 shadcn/Radix 组件封装，封装层统一了什么（props 命名、token、四态）>

## Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| variant | `'primary'|'secondary'|'ghost'|'danger'|'link'` | `'primary'` | 否 | 视觉层级 |
| size | `'sm'|'md'|'lg'` | `'md'` | 否 | 尺寸 |
| disabled | `boolean` | `false` | 否 | 禁用态 |
| loading | `boolean` | `false` | 否 | 加载中（自动禁用） |

## 事件

| 事件 | 签名 | 触发时机 |
|---|---|---|
| onClick | `(e: React.MouseEvent) => void` | 点击 |

## 示例

见 `__examples__/` 与 Storybook（`pnpm --filter @kit/ui-web storybook`）。

## 设计与交互要点

- 使用的 token：<列出>
- 四态策略：<骨架/空/错/正常>
- 无障碍：<焦点顺序、aria、键盘操作>
- 暗色：<验证结论>
