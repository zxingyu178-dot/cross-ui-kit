# Skeleton 骨架屏（mini：小程序 / 移动 H5）

内容加载中的占位灰块，服务四态之 **loading（骨架屏优先）**。Taro `View` 自建，三形态 `rect` / `circle` / `text`，底色 `var(--kit-color-bg-active)`，呼吸脉冲与圆角在 `Skeleton.scss` 全量 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'rect'|'circle'|'text'` | `'rect'` | 骨架形态 |
| size | `'sm'|'md'|'lg'` | `'md'` | circle 直径：24 / 40 / 56 |
| lines | number | `3` | text 行数（末行收窄 60%） |
| width / height | string \| number | 见下 | 宽高覆盖，数字按 px；默认 rect/text 宽 100% |
| className | string | - | 透传 |

默认尺寸：rect 高 16（spacing-4）、圆角 radius-md(8)；text 行高 12（caption）、行间距 8（spacing-2）、胶囊圆角；circle 全圆。

## 行为约定

- 纯占位；颜色/圆角/间距只引用 token，宽高用 width/height 覆盖（数字 px、字符串百分比）；
- 呼吸周期 1.5s 为组件内置动画常量（持续占位效果），与 web Tailwind animate-pulse 同性质；
- 与真实内容布局尽量同构，减少加载完成后的跳动。

## 示例

`__examples__/States.tsx`：rect/circle/text + 用户卡片、列表项组合。

## Do / Don't

- Do：loading 态优先用 Skeleton 还原页面骨架。
- Don't：不硬编码底色/圆角；不放真实文案；长时间不可预期的全屏加载用 Spinner。
