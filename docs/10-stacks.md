# 10 · 三栈架构、共享边界与组件映射

## 1. 为什么是"三栈 + 一内核"，而不是一套代码全端

- 微信小程序运行在双线程、受限 WXML/WXSS 环境，**无法**运行 React DOM 与浏览器 API；
- iOS/Android 原生体验（手势、动画、列表性能）需要 React Native 渲染；
- 网页与 PC 桌面基于 DOM，Tauri 2 直接复用 Web 前端。

因此视图层必然三栈分立；但**设计变量、数据逻辑、状态、校验、工具**与渲染无关，必须且可以做到一份共享。行业落地经验同样指向"小端（Taro）与大端拆栈、逻辑层共享"。

```
                         packages/tokens（Style Dictionary）
                 一份源 JSON → CSS变量 / SCSS+TS / Tamagui config
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
   ui-web (React DOM)            ui-mini (Taro)                ui-native (RN/Expo)
   shadcn/ui + Radix            NutUI-React(主)/Taroify        Tamagui
   Tailwind v4                  weapp-tailwindcss              Tamagui styles
        │                             │                             │
  play-web / play-desktop       play-miniapp(weapp+h5)        play-native
  (Vite)  (Tauri2)                                            (Expo)
        └─────────────────────────────┼─────────────────────────────┘
                                      │
              packages/core（请求/表格/表单/状态/校验/hooks）
              packages/icons · packages/interaction
```

## 2. 共享边界（什么必须共享、什么必须分立）

| 类别 | 归属 | 说明 |
|---|---|---|
| Design Token（颜色/字号/间距/圆角/阴影/动效/层级/断点） | **共享** `tokens` | 只改源 JSON，构建产物三栈同步，禁止任何栈私设视觉值 |
| 接口类型、API client、请求/缓存/重试 | **共享** `core` | TanStack Query 封装，三栈同一套 hooks |
| 表格列模型、虚拟滚动逻辑 | **共享** `core` | TanStack Table/Virtual 是 headless 库，三栈通用 |
| 表单校验规则（zod schema）、表单编排逻辑 | **共享** `core` | react-hook-form 三栈可用；视图控件各栈实现 |
| 客户端状态（zustand store）、权限判断、工具函数、常量 | **共享** `core` | 不得出现 DOM/wx/RN API |
| 图标源（SVG 定义与语义命名） | **共享** `icons` | 产物分栈：React 组件 / 小程序图标字体或 image / RN 组件 |
| 交互规范（四态定义、反馈规则、动效时长） | **共享** `interaction` | 规范一份；具体组件实现分栈 |
| 组件视图实现 | **分立** `ui-web/ui-mini/ui-native` | 三栈渲染环境互不相通，禁止互相 import |
| 路由 | **分立** | react-router（web）/ Taro 路由（mini）/ Expo Router（native） |
| 弹层/手势/焦点等行为原语 | **分立** | Radix（web）/ NutUI 行为（mini）/ Tamagui+RN 手势（native） |
| 样式写法 | **分立** | Tailwind 类 / 小程序原子类+SCSS / Tamagui style props，但**取值全部来自同一套 token** |

判定原则：**"如果这段代码不碰任何渲染环境 API，它就应该在 core。"**

## 3. 三栈组件映射总表（机读版以 `registry/component-mapping.json` 为准）

映射表字段：`canonical`（统一语义名）、`web` / `mini` / `native`（各栈组件名与状态）、`sharedProps`（三栈一致的核心 props 语义）。
下表为首批规划（状态：planned，随 P1/P2 落地更新为 implemented）。

| 统一语义名 canonical | web（ui-web） | mini（ui-mini，NutUI 为主） | native（ui-native，Tamagui 为主） | 一致的核心 props |
|---|---|---|---|---|
| Button | Button（shadcn） | Button（NutUI 封装） | Button（Tamagui） | `variant / size / disabled / loading / onPress(or onClick)` |
| Input | Input | Input | Input | `value / onChangeText(or onChange) / placeholder / disabled / error` |
| Form | Form + RHF | Form + RHF(H5)/NutUI Form | Form + RHF | `schema(zod) / defaultValues / onSubmit / submitting` |
| Select | Select（shadcn/Radix） | Picker / Selector | Select（Tamagui/Sheet 内） | `options / value / onChange / placeholder / disabled` |
| DatePicker | Calendar/Popover | DatePicker | DateTimePicker | `value / onChange / mode / min / max` |
| Switch | Switch | Switch | Switch | `checked / onCheckedChange / disabled` |
| Checkbox/Radio | Checkbox/RadioGroup | Checkbox/Radio | Checkbox/RadioGroup | `value / options / onChange / disabled` |
| Tabs | Tabs | Tabs | Tabs | `items / value / onChange` |
| Modal/Dialog | Dialog | Popup/Dialog | Dialog/Sheet | `open / onOpenChange / title / footer` |
| ActionSheet | DropdownMenu/Popover | ActionSheet | ActionSheet(BottomSheet) | `actions / onSelect / open` |
| Toast | Toast/Sonner | Toast | Toast | `type / message / duration` |
| Drawer | Sheet（侧滑） | Popup(side) | Sheet(side) | `open / onOpenChange / side` |
| Loading | Skeleton/Spinner | Skeleton/Loading | Skeleton/Spinner | `loading / variant` |
| Empty | Empty | Empty | Empty | `image / title / description / action` |
| ErrorState | ErrorState（自研） | ErrorState（自研） | ErrorState（自研） | `error / onRetry` |
| Result | Result | Result/EmptyResult | Result | `status / title / extra` |
| DataTable / DataList | DataTable（TanStack Table） | DataList（滚动加载列表） | DataList（FlashList） | `columns / data / loading / empty / error / pagination` |
| VirtualList | useVirtual + 表格 | VirtualList（小程序 recycle-view） | FlashList | `data / renderItem / itemHeight` |
| Tree | Tree | TreeSelect | TreeSelect（折叠面板） | `data / value / onChange` |
| Cascader | CascaderPopover | Cascader | Cascader（Sheet 内） | `options / value / onChange` |
| Upload | Upload | Uploader | ImagePicker/DocumentPicker | `value / onChange / accept / maxCount` |
| ImageViewer | Carousel/Lightbox | ImagePreview | ImageViewer | `images / index` |
| NavBar（顶栏） | （布局：Sidebar/Topbar） | NavBar | Stack Header | `title / onBack / right` |
| TabBar（底栏） | （大端用 Sidebar） | Tabbar | Tabs（底部导航） | `items / active / onChange` |
| PullRefresh | 不适用（大端分页器） | PullToRefresh | RefreshControl | `refreshing / onRefresh` |
| SearchBar | 搜索输入组合 | SearchBar | SearchBar | `value / onChange / onSearch / suggest` |
| Statistic | Statistic | Statistic | Statistic | `label / value / trend` |
| Chart | 图表（Recharts/ECharts 封装） | 图表（echarts-taro） | 图表（react-native-svg 封装） | `type / option / data / loading` |
| PermissionGate | PermissionGate | PermissionGate | PermissionGate | `permission / fallback / children` |
| PageContainer | PageContainer（大端布局槽） | PageContainer（小端安全区+导航槽） | ScreenContainer（SafeArea 槽） | `title / loading / empty / error` |

## 4. 命名与语义对齐要求

1. 同一 canonical 组件，三栈的**核心 props 名称与语义必须一致**（渲染差异导致的事件名差异：web `onClick`、mini/native `onPress`/`onChange`，在映射表 `sharedProps` 中注明对应关系，封装层尽量统一为 `onXxx` 业务语义事件，如 `onSubmit`、`onRefresh`）。
2. 枚举值统一：如 `variant` 一律使用 `primary | secondary | ghost | danger`；`size` 一律 `sm | md | lg`；`status` 一律 `default | success | warning | danger | info`。
3. 新增组件先在映射表注册 canonical 名，再实现；三栈状态允许 `planned`，但不允许无名组件入库。

## 5. 三栈样式与 token 对接

| 栈 | token 产物 | 消费方式 |
|---|---|---|
| web | `tokens/dist/web/tokens.css`（CSS 变量）+ Tailwind `@theme` 映射 | `className="bg-(--color-primary)"` 或语义类 |
| mini | `tokens/dist/mini/tokens.scss` + `tokens.ts`（TS 常量）+ NutUI CSS 变量主题覆盖 | SCSS 变量/类名，NutUI 主题变量全局覆盖 |
| native | `tokens/dist/native/tamagui.config.tokens.ts` 片段并入 `tamagui.config.ts` | Tamagui token 引用（`$color.primary`） |

## 6. 端形态与工程对应

| 端形态 | 工程 | 组件栈 | 路由 |
|---|---|---|---|
| 网页（桌面/移动浏览器） | apps/play-web | ui-web（响应式断点） | react-router |
| PC 桌面 Win/macOS/Linux | apps/play-desktop（Tauri 2） | ui-web | react-router + Tauri 窗口 API |
| Tauri 移动版（可选，快速出 App） | play-desktop 的 mobile target | ui-web 移动响应式 | 同上 |
| 微信/支付宝/字节小程序 | apps/play-miniapp（`dev:weapp` 等） | ui-mini | Taro 路由 |
| 移动 H5 | apps/play-miniapp（`dev:h5`） | ui-mini | Taro 路由（H5 模式） |
| 原生 iOS/Android | apps/play-native（Expo） | ui-native | Expo Router |

> Tauri 移动版与 Expo 原生版是"出 App"的两条路径：前者复用 web 栈、成本最低；后者原生体验最好。模板库两者都保留，业务按体验要求选型，core/tokens 对两者同样复用。
