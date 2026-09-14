# Checkbox 复选框（native：iOS / Android）

Tamagui Checkbox 封装，视觉值全部引用 Tamagui token。

## 映射（统一 API -> React Native / Tamagui）

| 统一 | native 实现 |
|---|---|
| onChange(boolean) | `onCheckedChange`，`'indeterminate'` 归一为 boolean |
| checked/indeterminate | `checked` 接受 boolean 或 `'indeterminate'` |
| 选中底色 | 铺满的 `Checkbox.Indicator` 设 `primaryDefault` 底（受控/非受控都正确） |
| 勾选/半选标记 | Indicator 内 Text 字符 `✓` / `−`（不引 SVG 依赖） |
| error | 未选框 `borderDanger` |
| disabled | Checkbox `disabled` + 行整体 opacity 0.5 |
| label | XStack + Pressable 文本；**文字点击切换仅受控可用**（非受控请直接点复选框） |

## Props

checked/defaultChecked/disabled/indeterminate/label/error/accessibilityLabel/onChange，语义与 web/mini 一致。

## tamagui.config 需注册的 token（在前两个组件基础上）

- color：`primaryDefault / primaryText / borderDanger / bgHover / textDisabled`（清单已含）
- radius：`sm`；font：`bodyMd`；固定尺寸 20px（对应 icon-size-md）

## 无障碍

Checkbox 自带 `accessibilityRole=checkbox` 与选中态；字符串 label 自动作为 `accessibilityLabel`，否则须显式传。
