# Avatar 头像（mini：小程序 / 移动 H5）

展示用户 / 设备 / 对象的头像，支持**图片、文字首字、自定义内容**三态，图片加载失败（Image `onError`）自动回退到名称首字。视觉值在 `Avatar.scss` 全 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| src | string | - | 图片地址（Image `aspectFill`）；存在且未失败时显示 |
| name | string | - | 名称；无图 / 失败时取首字符 |
| size | `'sm'|'md'|'lg'` | `'md'` | 32 / 40 / 48 |
| shape | `'circle'|'square'` | `'circle'` | 圆形 / 圆角方形（radius-md） |
| children | ReactNode | - | 自定义内容，优先级最高 |
| className | string | - | 透传 |

## 渲染优先级

`children` > `src`（图片）> `name` 首字符；都没有时渲染空底圆。

## 视觉

- 容器：`bg-active` 底 + `text-secondary` 字，`overflow:hidden`，圆 999px / 方 radius-md；
- 尺寸 32/40/48，文字字号随尺寸（caption/body-md/title-sm）。

## 示例

`__examples__/States.tsx`：文字头像、三尺寸、方形、图片与失败兜底、自定义内容。

## Do / Don't

- Do：列表项、导航、评论、设备卡片用 Avatar 统一占位。
- Don't：不硬编码尺寸/底色；不在组件内请求图片地址。
