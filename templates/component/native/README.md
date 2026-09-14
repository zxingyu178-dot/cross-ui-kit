# __ComponentName__（native：iOS / Android）

> 复制到 `packages/ui-native/src/__ComponentName__/`，替换占位符后填写。

## 用途

<原生场景、手势/动画/性能相关说明>

## 与底座关系

<Tamagui 封装方式；token 从 tamagui.config 接入>

## Props / 事件

| 属性/事件 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | 枚举 | `primary` | 与 web/mini 一致 |
| onPress | `() => void` | — | 按压事件 |
| accessibilityLabel | `string` | — | 无障碍标签（图标按钮必填） |

## 原生注意事项

- 热区 ≥44px、SafeArea、刘海/手势条；
- 列表场景配合 FlashList；弹层用 BottomSheet；
- 深色主题跟随 Tamagui theme（token 暗色映射）；
- 平台差异（iOS/Android）在 README 标注。

## 示例

`__examples__/Variants.tsx`（模拟器 + 真机验证）。
