# 13. Native Runtime Gate（原生运行时验收门）

> 适用栈：native（Expo + Tamagui，iOS / Android）。
> `expo export` / Gradle 构建通过只证明**可编译、可打包**，不证明**真实可用**。
> Native 组件从 beta → stable 必须先通过本运行时门，再执行 `pnpm graduate --stack native`。
> 与 Web 门（`docs/12-graduation.md`）相互独立：**任一栈的证据不得使其他栈毕业**。

## 0. 前置环境

- Android：Android SDK（含 platform 34+、build-tools、platform-tools/adb）。
- 运行目标二选一：
  - **USB 真机**：开启开发者选项 + USB 调试，`adb devices` 可见（推荐，最低门槛）；
  - **模拟器**：需 CPU 支持 VT/EPT 并开启硬件加速。
- 无可用设备/模拟器时，运行时门状态为 **pending**，组件**保持 beta**，禁止伪造通过证据。
- 构建产物：`apps/play-native/android/app/build/outputs/apk/release/app-release.apk`（release 默认 debug 签名，可直接安装）。

## 1. 运行时清单（逐项，全部通过才记 pass）

安装并启动：

```bash
adb install -r apps/play-native/android/app/build/outputs/apk/release/app-release.apk
adb shell monkey -p com.anonymous.playnative 1   # 包名以实际为准
```

| # | 检查项 | 通过标准 |
|---|---|---|
| 1 | App 启动 | 进入主页，无红屏 / Metro Error / 闪退 |
| 2 | 首页加载 | 环境信息、主题、组件统计（读 registry）正确显示 |
| 3 | Gallery 进入 | 组件列表展示 20 个入口 |
| 4 | 20 组件全部打开 | 每个独立路由可进入、可返回，无崩溃 |
| 5 | Light 主题 | 全组件浅色渲染正常、对比清晰 |
| 6 | Dark 主题 | 全组件深色渲染正常、文字可读 |
| 7 | System 主题 | 跟随系统亮/暗切换 |
| 8 | 输入框键盘 | Input/TextArea 聚焦可唤起键盘，可输入，收起正常 |
| 9 | Dialog | 可打开、遮罩点击关闭、确认/取消、Android 返回键等同关闭 |
| 10 | Toast | 正常显示并按时消失，不阻挡交互 |
| 11 | 长列表滚动 | DataTable/长内容可流畅滚动，无明显卡顿/白屏 |
| 12 | 返回键 | 组件页返回 Gallery、Gallery 返回首页，行为符合预期 |
| 13 | 横竖屏 | 旋转后布局正常、不崩溃（或按配置正确锁定） |
| 14 | 日志无异常 | `adb logcat` 无致命异常 / 未捕获 JS error |

交互类组件（Button / Switch / Checkbox / RadioGroup / Select / Tabs / Steps / Pagination 等）必须**真实可点、状态真实变化**，不接受静态截图占位。

## 2. Native Screenshot Baseline（截图基线）

通过 adb 采集，目录 `native-evidence/<组件>/`（仓库内、入库，作为视觉回归基线）：

```
native-evidence/
├─ home/        {light,dark}.png
├─ gallery/     {light,dark}.png
├─ dialog/      {light-open,dark-open}.png
└─ <组件>/      {light,dark}.png
```

采集命令：

```bash
adb shell screencap -p /sdcard/x.png && adb pull /sdcard/x.png native-evidence/<组件>/light.png
```

后续改动 Tamagui / 组件后，重新采集并与基线对比；视觉跑偏应阻断毕业（Native 侧的视觉回归，对标 Web 的 Playwright golden image）。

## 3. 证据与状态

- 运行时结果写入机器可读 evidence，**绑定当前 HEAD commit SHA**；仅接受当前 HEAD 的证据，禁止旧提交结果复用（与 `scripts/verify-stable.mjs` 同原则）。
- 状态口径：`pending`（无设备/未跑完）→ `pass`（清单全过 + 截图基线）→ 才允许 `pnpm graduate --stack native`。
- 首批只验收 **20 个 canonical**（名单 `registry/graduation/first-batch.json`），不批量毕业 98 个。

## 4. 当前结论（P1-1.1）

- 构建：`assembleRelease`（arm64-v8a）**成功**，APK 约 28 MB；`pnpm quality:native` 通过。
- 运行时：**pending** —— 本机 CPU（Core 2 Duo T7700）无 VT/EPT，模拟器无法加速；暂无 USB 真机，未运行清单、未采集截图基线。
- 组件状态：native 首批 20 及全部 98 个**仍为 beta**。
