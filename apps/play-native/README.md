# @kit/play-native — Native 验收壳

Cross UI Kit 的**原生（iOS / Android）演示与验收工程**。它不是普通 Demo 首页，而是 `@kit/ui-native` 的真实运行壳：组件库在这里被真实打包、渲染、交互，为后续 **Native 组件独立毕业（graduate --stack native）** 提供运行环境。

> 本工程经 pnpm workspace **直接消费 `@kit/ui-native` 源码（symlink），不复制任何组件源码**。

## 技术栈（锁定，勿擅自升级）

| 项 | 版本 |
|---|---|
| Expo | SDK 52（~52.0） |
| React Native | ~0.76 |
| React | 18.3（与 Web / Taro 公共基线一致） |
| Tamagui | ~1.121 |
| 路由 | Expo Router（~4.0） |
| 包管理 | pnpm workspace（无独立 lockfile） |

> 不升 Expo 53+ / React 19 / Tamagui 新主版本：SDK 53 已升级 React 19，与 Taro/NutUI 的 React 18.3 上限冲突。

## 目录结构

```
apps/play-native/
├─ app/
│  ├─ _layout.tsx          # 根布局：手势 / SafeArea / 主题 Provider / Tamagui
│  ├─ index.tsx            # 主页：环境信息、主题、组件统计（读 registry）
│  └─ gallery/
│     ├─ index.tsx         # 组件列表（20 个入口）
│     └─ [name].tsx        # 单个组件独立演示（动态路由）
├─ src/
│  ├─ theme/useThemeMode.tsx   # light / dark / system 主题模式
│  └─ gallery/
│     ├─ manifest.ts          # 20 个 canonical → 演示组件映射
│     ├─ DemoShell.tsx         # 演示页骨架（SafeArea + 分区）
│     └─ demos/<Name>Demo.tsx  # 每个组件独立演示（×20）
├─ tamagui.config.ts      # 由 @kit/tokens native 产物派生
├─ metro.config.js        # monorepo symlink / watch 配置
├─ babel.config.js
└─ app.json
```

## 命令

```bash
pnpm start          # 启动 Metro（Expo Dev Launcher）
pnpm android        # 编译并运行 Android（需 Android SDK / 设备）
pnpm ios            # 运行 iOS（需 macOS + Xcode）
pnpm export         # 导出 android bundle（无需设备，验证可打包性）
pnpm typecheck      # TypeScript
pnpm lint           # ESLint
```

仓库根的 **`pnpm quality:native`** 会依次执行：native 导入冒烟 → typecheck → lint → expo export。
它只代表**工程完整性**，**不会**把任何组件从 beta 改为 stable。

## 覆盖范围

首批 20 个 canonical（与 Web 首批毕业名单一致），每个都有**独立路由入口**，并按适用性覆盖：default / disabled / loading / error / selected(active) / empty / long text，以及亮 / 暗色；交互组件可真实点击与改变状态。

Button、Input、TextArea、Checkbox、RadioGroup、Switch、Select、Tabs、Dialog、Toast、Card、Tag、Avatar、Progress、Spinner、Skeleton、Empty、Steps、Pagination、DataTable。

## 当前状态（P1-1）

- Expo Router 工程真实存在，`expo export`（android，1938 模块）通过。
- Light / Dark / System 接入统一 Token（`@kit/tokens` native 产物），不维护第二套视觉体系。
- **Native 组件状态仍为 beta**：尚未建立 Native 独立 Graduation Gate。
- **Android 运行时验收：pending** —— 本机无 Android SDK / adb / 模拟器，未执行 `pnpm android`，不伪造实机结论。
  后续在具备 Android 环境的机器上，须真实运行并走完：首页 → Gallery → 20 组件 → 亮暗切换 → 键盘 → Dialog/Toast → 滚动，再走 `pnpm graduate --stack native`。

## 设计原则

Canonical 语义一致，**不等于三端像素级一致**。Native 优先符合 Android/iOS 体验：44px 触控热区、Safe Area、键盘、滚动、弹层、返回行为、手势与长列表。发现 Web 思维硬搬 Native 的组件，应修正公共 `@kit/ui-native` 实现，而不是在本壳打补丁。
