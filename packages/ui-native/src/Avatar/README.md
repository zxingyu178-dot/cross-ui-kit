# Avatar 头像（native：iOS / Android）

展示用户 / 设备 / 对象的头像，支持**图片、文字首字、自定义内容**三态，图片加载失败（Image `onError`）自动回退到名称首字。尺寸/颜色只引用 token 刻度。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| src | string | - | 图片地址（`source={{uri}}`）；存在且未失败时显示 |
| name | string | - | 名称；无图 / 失败时取首字符 |
| size | `'sm'|'md'|'lg'` | `'md'` | 32(`$8`) / 40(`$10`) / 48(`$12`) |
| shape | `'circle'|'square'` | `'circle'` | 圆形（999）/ 圆角方形（`$md`） |
| children | ReactNode | - | 自定义内容，优先级最高 |

## 渲染优先级

`children` > `src`（图片）> `name` 首字符；都没有时渲染空底圆。文字用 `accessibilityLabel={name}`。

## 视觉

- 容器：`$bgActive` 底、`$textSecondary` 字，`overflow:hidden`；
- 尺寸走 spacing token（$8/$10/$12），文字字号随尺寸（$caption/$bodyMd/$titleSm）。
- 注：原生 Image 不直接渲染 svg data URI，真实图片请传 https/本地资源 uri。

## 示例

`__examples__/States.tsx`：文字头像、三尺寸、方形、失败兜底、自定义内容。

## Do / Don't

- Do：列表项、导航、评论、设备卡片用 Avatar 统一占位。
- Don't：不硬编码尺寸/底色；不在组件内请求图片地址。
