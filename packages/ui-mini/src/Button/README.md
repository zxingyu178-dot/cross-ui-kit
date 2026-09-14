# Button 按钮（mini：小程序 / H5）

`@nutui/nutui-react-taro` Button 的统一封装，对外只暴露三栈统一 props，不泄露 NutUI 原始 API。

## 变体映射（统一 API → NutUI）

| 统一 variant | NutUI type | NutUI fill |
|---|---|---|
| primary | `primary` | `solid` |
| secondary | `default` | `solid` |
| ghost | `default` | `none` |
| danger | `danger` | `solid` |
| link | `default` | `none`（+ `kit-button--link` 链接样式） |

| 统一 size | NutUI size |
|---|---|
| sm | `small` |
| md | `normal` |
| lg | `large` |

## Props / 事件

| 属性/事件 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | 统一枚举 | `primary` | 与 web/native 一致 |
| size | `sm\|md\|lg` | `md` | 最小热区统一 44px |
| loading | `boolean` | `false` | 透传 NutUI loading 并禁用 |
| disabled | `boolean` | `false` | 禁用 |
| block | `boolean` | `false` | 撑满宽度（透传 NutUI block） |
| icon | `ReactNode` | — | 前置图标 |
| onPress | `(e) => void` | — | 点击（内部接 NutUI onClick，web 同名 onClick） |

## 主题与样式

- 主色等主题色：在 Taro 工程全局用 `@kit/tokens` 的 mini CSS 变量覆盖 NutUI 主题变量（`--nutui-color-primary` 等，play-miniapp 初始化时配置 `nutui-theme.scss`）；
- 组件级补充样式只引用 `var(--kit-*)`（见 `Button.scss`），禁止裸颜色与 rpx 硬编码；
- 暗色：页面根 View 切换 `.dark` 类，CSS 变量运行时换肤（`tokens.dark.css`）。

## 验证

`__examples__/Variants.tsx` 在 H5（dev:h5）与微信开发者工具（dev:weapp）双端查看。
