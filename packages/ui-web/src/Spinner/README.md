# Spinner 加载指示器（web）

用于**不确定时长**的加载（无法给出完成比例时）。标准 border 旋转圈 + Tailwind `animate-spin`（1s linear infinite），`role=status` 表达忙碌。确定比例用 `Progress`，内容占位用 `Skeleton`。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| size | `'sm'|'md'|'lg'` | `'md'` | 直径 16 / 24 / 32（icon/control 刻度） |
| tone | `'primary'|'muted'|'inverse'` | `'primary'` | 主色 / 中性灰 / 反白 |
| accessibilityLabel | string | - | 映射 aria-label，文案由外部 i18n 提供 |
| className / id | string | - | 透传 |

## 视觉与 token

- 统一 `border-2` 全圆；轨道 `border-border-default`，旋转头 `border-t-primary-default`（muted 头为 `text-tertiary`，inverse 为白 + 白 30% 轨道）；
- 直径 sm `size-4`(16)、md `size-6`(24)、lg `size-8`(32)；
- `inverse` 用于主色按钮 / 深色底（白圈），其余用于卡片/页面浅底。

## 行为约定

- 只表达"进行中、不可预期时长"；不要给 Spinner 传百分比（那是 Progress 的职责）；
- 颜色/尺寸只引用 token 刻度；配套文字放组件外部，与 Spinner 水平排列。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（尺寸、色调、反白、带文字）
- Storybook：`Spinner.stories.tsx`

## Do / Don't

- Do：按钮提交中、局部区块刷新等不可预期等待用 Spinner；主色按钮内用 `tone="inverse"`。
- Don't：不硬编码颜色/尺寸/动画时长；能给出比例时用 Progress；整块内容首次加载用 Skeleton。
