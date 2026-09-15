# Avatar 头像（web）

展示用户 / 设备 / 对象的头像，支持**图片、文字首字、自定义内容**三态，图片加载失败自动回退到名称首字。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| src | string | - | 图片地址；存在且未失败时显示图片 |
| name | string | - | 名称；无图 / 图片失败时取首字符（`slice(0,1)`，英文大写） |
| size | `'sm'|'md'|'lg'` | `'md'` | 32 / 40 / 48 |
| shape | `'circle'|'square'` | `'circle'` | 圆形 / 圆角方形（radius-md） |
| alt | string | 取 name | 图片替代文本 |
| children | ReactNode | - | 自定义内容（图标等），优先级最高 |
| className / id | - | - | 透传 |

## 渲染优先级

`children` > `src`（图片，`object-cover`）> `name` 首字符。图片 `onerror` 后回退首字符；三者都没有时渲染空底圆。

## 视觉

- 容器：`bg-bg-active` + `text-text-secondary`，`overflow-hidden`，圆形 `rounded-full` / 方形 `rounded-md`；
- 尺寸走 4n 刻度（32/40/48），文字字号随尺寸（caption/body-md/title-sm）；
- 头像组由业务用 flex + 负 margin 组合，Avatar 本身不管叠加。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（文字头像、三尺寸、方形、图片与失败兜底、自定义内容）
- Storybook：`Avatar.stories.tsx`

## Do / Don't

- Do：列表项、导航、评论、设备卡片用 Avatar 统一头像占位。
- Don't：不硬编码尺寸/底色；不在组件内请求图片地址（src 由业务传入）。
