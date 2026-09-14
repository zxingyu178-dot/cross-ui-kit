# preview-hub · 统一预览站（人看的入口）

只读消费 `registry/*.json`、`component-mapping.json`、各包示例与 Storybook，把三栈组件/页面模板集中展示、一键复制代码与安装命令。P2 起开发，本文件是需求基线。

## 信息架构

- 左侧导航：按分类（基础/布局/导航/表单/数据/反馈/业务/页面模板）× 栈筛选（全部/web/mini/native）；
- 顶部：全局搜索（对接 registry 字段）、主题切换（亮/暗/跟随系统，联动 token）、端切换。

## 预览容器（按栈呈现）

| 栈 | 容器 | 数据来源 |
|---|---|---|
| web | 浏览器框（iframe 接 play-web / Storybook） | play-web、ui-web stories |
| desktop（Tauri） | PC 窗口框（窗口标题栏皮肤 + 固定尺寸） | play-desktop 截图或远程 dev 连接 |
| mini（H5） | 手机框（iPhone/Android 皮肤） | play-miniapp dev:h5 |
| mini（小程序） | 手机框 + 微信真机预览二维码 | 微信开发者工具 CLI 生成二维码 |
| native | 手机框（模拟器截图轮播/Expo web 预览） | play-native 截图 / expo export |

## 组件卡片字段（与 registry item 一一对应）

- 标题、canonical 名、status 徽标（planned/beta/stable/deprecated）、三栈实现状态；
- 实时预览（可交互）、props 表、events、slots、tokens、states；
- usage.do / usage.dont、a11y 要求；
- 代码块（按栈切换）+ 一键复制；安装命令（`pnpm dlx shadcn@latest add @kit/web-xxx`）；
- "三栈对照"视图：由 component-mapping.json 驱动，同语义组件并排展示。

## 页面模板区

- 按场景（登录/列表/详情/表单…）展示三栈模板，含四态切换器（normal/loading/empty/error）与极值开关（超长文本/空数据）；
- 提供"在 play 工程打开"链接。

## 技术约束

- hub 自身使用 React + Vite + @kit/ui-web（吃自己的狗粮）；
- 构建时读取 registry 生成静态数据（JSON），不直接耦合各 app 运行时；
- 部署形态：本地 `pnpm hub:dev`；P6 静态托管，供团队与 AI（MCP 文档集）访问。
