# __ComponentName__（mini：小程序 / H5）

> 复制到 `packages/ui-mini/src/__ComponentName__/`，替换占位符后填写。

## 用途与适用端

<微信/支付宝/字节小程序、H5 的适用场景>

## 与底座关系

<封装的 NutUI/Taroify 组件、统一了哪些 props 与主题变量>

## Props / 事件

| 属性/事件 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | 枚举 | `primary` | 与 web/native 一致 |
| onPress | `() => void` | — | 点击（web 为 onClick） |

## 小程序注意事项

- rpx 适配、类名转义（weapp-tailwindcss）、多端差异（如有）；
- 热区 ≥44px、安全区、键盘遮挡处理；
- 主题变量覆盖位置（nutui-theme.scss）。

## 示例

`__examples__/Variants.tsx`（H5 与小程序共用，微信开发者工具 + H5 双端验证）。
