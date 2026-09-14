# Checkbox 复选框（mini：小程序 / H5）

`@nutui/nutui-react-taro` Checkbox 封装，通过自定义 `icon/activeIcon/indeterminateIcon` 接管视觉，颜色全部引用 `var(--kit-*)`，不使用 NutUI 默认主题色。

## 映射（统一 API -> NutUI）

| 统一 | mini 实现 |
|---|---|
| checked/defaultChecked/disabled/indeterminate | 同名透传 NutUI |
| label | NutUI `label`（ReactNode，默认右侧） |
| onChange(boolean) | NutUI `onChange(value: boolean)`（已是 boolean 回调） |
| error | 未选框图标加 `--error` 红边（NutUI 无 error 概念） |
| 勾选/半选标记 | 自定义图标：实心 primary 底 + `✓` / `−` |

## Props

checked/defaultChecked/disabled/indeterminate/label/error/onChange，语义与 web 一致。

## 主题

方框尺寸 `icon-size-md`（20px）、圆角 `radius-sm`、选中底色 `primary-default`、勾色 `primary-text`，见 `Checkbox.scss`；暗色随页面根 `.dark` 类换肤。

## 验证

`__examples__/States.tsx` 在 H5（dev:h5）与微信开发者工具（dev:weapp）双端查看。
