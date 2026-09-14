# play-native · 原生 App 演示壳（Expo + Tamagui）

用途：验证 `@kit/ui-native` 在 iOS/Android 原生环境可用。

## 环境前置

- Android Studio（Android 模拟器）或 Xcode（iOS 模拟器，仅 macOS）；
- 真机调试按 Expo 指南安装 Expo Go 或 development build。

## 初始化（P1 执行，一次）

```bash
# 在 apps/ 目录下
pnpm create expo-app play-native
cd play-native
pnpm add tamagui @tamagui/config expo-router
# 工作区依赖
pnpm add @kit/tokens @kit/core @kit/icons @kit/ui-native
```

## 接入要求

- `tamagui.config.ts` 中合并 `@kit/tokens` 的 `dist/native/tamagui.light.ts` / `tamagui.dark.ts` 为 themes；
- 组件只从 `@kit/ui-native` 引用；平台能力经 core adapter；
- 每个组件补 `accessibility*` 属性，长列表用 FlashList；
- 路由用 Expo Router，场景目录与 patterns-native 对齐。

## 启动与构建

```bash
pnpm start            # Expo dev server
pnpm android / pnpm ios
pnpm export           # 静态导出（CI 冒烟）
# 原生打包走 EAS Build（P6 配置 eas.json）
```
