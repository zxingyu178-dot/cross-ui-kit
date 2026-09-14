# play-desktop · PC 桌面壳（Tauri 2）

用途：验证同一套 `@kit/ui-web` 在桌面端可用（Win/macOS/Linux），Tauri 2 同时支持 iOS/Android target（快速出 App 的路径）。

## 环境前置

- Rust：`rustup default stable`（Windows 另需 VS Build Tools 的 C++ 桌面开发负载 + WebView2 运行时）；
- 详见 docs/01-toolchain.md §1。

## 初始化（P1 执行，一次）

```bash
# 在 apps/ 目录下（选择 React + TS + pnpm 模板）
pnpm create tauri-app play-desktop
# 前端直接复用 play-web 的页面与 @kit/ui-web；或独立前端但只引用 @kit/ui-web
pnpm add @kit/tokens @kit/core @kit/ui-web
```

## 架构约定

- Tauri 只做"壳 + 原生能力"（窗口、菜单、文件系统、通知、自动更新），UI 全部来自 ui-web；
- 原生能力通过 Tauri command 封装，core 定义 adapter 接口，禁止组件直接调 Rust；
- 窗口最小尺寸、菜单、快捷键配置在 `src-tauri/tauri.conf.json`，遵循平台人机规范。

## 启动与打包

```bash
pnpm tauri dev       # 开发
pnpm tauri build     # 打包当前平台安装包（CI 按平台 runner 冒烟）
```

## 移动 target（可选路径）

Tauri 2 支持 `tauri android init/build` 与 `tauri ios init/build`；
与 play-native（Expo 原生栈）的取舍见 docs/10-stacks.md §6：Tauri 移动版复用 web 栈成本最低，Expo 原生体验最好。
