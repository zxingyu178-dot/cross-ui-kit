# Skeleton 骨架屏（web）

内容加载中的占位灰块，服务四态之 **loading（骨架屏优先）**。纯展示、三形态：`rect`（矩形块）、`circle`（圆形头像）、`text`（多行文本，末行自动收窄 60%）。底色统一 `bg-bg-active` + Tailwind `animate-pulse` 呼吸动画。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'rect'|'circle'|'text'` | `'rect'` | 骨架形态 |
| size | `'sm'|'md'|'lg'` | `'md'` | circle 直径：24 / 40 / 56（Tailwind 刻度） |
| lines | number | `3` | text 行数（末行收窄 60%） |
| width / height | string \| number | 见下 | 宽高覆盖，数字按 px；默认 rect/text 宽 100% |
| className | string | - | 推荐用 Tailwind 刻度类覆盖布局宽高（如 `h-5 w-2/3`） |
| id | string | - | 根节点 id |

默认尺寸：rect 高 16（spacing-4）、圆角 md(8)；text 行高 12（caption）、行间距 8（spacing-2）、圆角 full；circle 圆角 full。

## 行为约定

- 纯占位、`aria-hidden`（对读屏隐藏，加载态应由容器的 aria-busy 表达）；
- 颜色/圆角只引用 token 语义类，布局宽高用 Tailwind 刻度类或 width/height 覆盖；
- 与真实内容布局尽量同构，减少加载完成后的跳动。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（rect/circle/text + 用户卡片、列表项组合）
- Storybook：`Skeleton.stories.tsx`

## Do / Don't

- Do：loading 态优先用 Skeleton 还原页面骨架；组合出卡片/列表等真实版式。
- Don't：不硬编码底色/圆角；不在骨架里放真实文案；不用骨架代替长时间不可预期的全屏加载（用 Spinner）。
