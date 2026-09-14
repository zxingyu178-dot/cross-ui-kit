# @kit/ui-native · 原生组件栈

服务于 **iOS / Android 原生 App**（Expo + React Native）。

## 技术底座

- Expo SDK 52（~52.0.0，RN 0.76 / React 18.3.1；SDK 53+ 已升 React 19，与小端栈冲突，勿升）+ Expo Router（文件路由）；
- Tamagui：样式系统 + 组件，编译期优化，web/RN 同构（本库用于 RN 端）；
- token 接入：把 `@kit/tokens` 的 `dist/native/tamagui.light.ts` / `tamagui.dark.ts` 并入 `tamagui.config.ts` 的 `themes`，组件中以 `$color.xxx` 等引用；
- 原生能力：FlashList（长列表）、BottomSheet（底部弹层）、手势/动画按评审引入。

## 封装要求

- 统一 props/事件命名（事件以 `onPress` 为触摸语义，业务语义事件三栈统一：onSubmit/onRefresh…）；
- 必须提供 `accessibilityLabel / accessibilityRole / accessibilityHint`；
- 触控热区 ≥ 44px（`touch-min`）；安全区用 SafeArea 容器封装；
- 样式只走 Tamagui token，禁止裸样式对象颜色/数值；
- 与 ui-web/ui-mini 的同语义组件在 `component-mapping.json` 对齐。

## 目录约定

```
src/
├─ Button/
│  ├─ Button.tsx
│  ├─ Button.types.ts
│  ├─ index.ts
│  ├─ README.md
│  └─ __examples__/
└─ index.ts
```
