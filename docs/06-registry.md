# 06 · 组件 Registry 规范（统一出口 + AI 检索协议）

Registry 是组件库的**统一出口与机器可读清单**：人通过 CLI/Hub 按单取用，AI 通过 MCP 检索、理解、安装组件。格式采用 shadcn registry 规范（JSON），三栈各一份，映射表统一维护。

## 1. 目录与命名空间

```
registry/
├─ web/registry.json        # 命名空间 @kit/web-*   （ui-web 组件与 blocks）
├─ mini/registry.json       # 命名空间 @kit/mini-*  （ui-mini 组件）
├─ native/registry.json     # 命名空间 @kit/native-*（ui-native 组件）
├─ component-mapping.json   # 三栈 canonical 映射（唯一事实来源）
└─ README.md
```

- registry item 的 `name` 使用 kebab-case（如 `data-table`），CLI 安装形式：`@kit/web-data-table`；
- 组件（component）、组件组合块（block，如"搜索栏+表格+分页"整页片段）、页面模板（template，来自 patterns-*）分 `type` 登记；
- 页面模板在各栈 registry 中以 `type: registry:template`（自定义类型，校验脚本放行）登记，指向 patterns 产物。

## 2. item 字段规范（每个组件必填）

```json
{
  "name": "button",
  "type": "registry:component",
  "title": "按钮 Button",
  "description": "触发即时操作；每个主视觉区域只允许一个 primary 按钮",
  "canonical": "Button",
  "status": "stable",
  "stack": "web",
  "dependencies": ["class-variance-authority"],
  "registryDependencies": ["@kit/web-skeleton"],
  "files": [
    { "path": "packages/ui-web/src/Button/Button.tsx", "type": "registry:component" },
    { "path": "packages/ui-web/src/Button/Button.types.ts", "type": "registry:ui" },
    { "path": "packages/ui-web/src/Button/index.ts", "type": "registry:ui" }
  ],
  "props": [
    { "name": "variant", "type": "'primary'|'secondary'|'ghost'|'danger'", "default": "'primary'", "required": false, "desc": "视觉层级" },
    { "name": "loading", "type": "boolean", "default": "false", "required": false, "desc": "加载中，自动禁用防重复提交" }
  ],
  "events": [{ "name": "onClick", "type": "(e) => void", "desc": "点击（mini/native 对应 onPress）" }],
  "slots": ["children", "icon"],
  "tokens": ["color-primary-default", "radius-md", "motion-duration-fast"],
  "states": ["default", "hover", "active", "disabled", "loading"],
  "a11y": "图标按钮必须传 aria-label",
  "usage": { "do": ["主操作每区一个", "提交动作绑定 loading"], "dont": ["用 danger 表达普通取消", "内联颜色"] },
  "docs": "packages/ui-web/src/Button/README.md",
  "examples": ["packages/ui-web/src/Button/__examples__/Variants.tsx"]
}
```

字段要求：

| 字段 | 必填 | 说明 |
|---|---|---|
| name / type / title / description | ✅ | 检索与展示基础信息 |
| canonical | ✅ | 映射表中的统一语义名（PascalCase） |
| status | ✅ | `stable / beta / planned / deprecated` |
| stack | ✅ | `web / mini / native` |
| files | ✅ | 安装时落地的源文件（源码分发，不是 npm 依赖黑盒） |
| props / events / slots | ✅ | AI 理解用法的核心，与 types 文件保持一致（CI 校验一致性） |
| tokens | ✅ | 组件依赖的 token 清单，视觉审计用 |
| states | ✅ | 至少覆盖 normal/loading/empty/error 中适用项 |
| dependencies / registryDependencies | 条件必填 | 三方依赖与同库组件依赖，CLI 递归解析 |
| usage.do / usage.dont / a11y | ✅ | AI 生成时的硬约束提示 |
| docs / examples | ✅ | 文档与示例路径，hub 直接渲染 |

## 3. 三栈映射表 component-mapping.json

```json
{
  "version": 1,
  "components": [
    {
      "canonical": "Button",
      "category": "base",
      "sharedProps": {
        "variant": "primary|secondary|ghost|danger",
        "size": "sm|md|lg",
        "disabled": "boolean",
        "loading": "boolean"
      },
      "stacks": {
        "web":    { "item": "@kit/web-button",    "status": "stable" },
        "mini":   { "item": "@kit/mini-button",   "status": "stable" },
        "native": { "item": "@kit/native-button", "status": "planned" }
      }
    }
  ]
}
```

- 新增组件**先建映射条目再实现**（SOP-A 第 2 步）；
- `status` 全生命周期：`planned → beta → stable → deprecated`；
- 校验脚本（`scripts/validate-registry.mjs`）检查：JSON 合法、必填字段齐全、files 路径存在、canonical 在映射表存在、三栈 item 与映射表互相一致、props 与 types 不脱节（人工 + 脚本双重，脚本先做结构校验）。

## 4. 托管与安装方式（P1 起逐步落地）

1. **本地/仓库内（P0~P1）**：registry.json 随仓库分发，CLI 支持本地路径与 GitHub 仓库：
   ```bash
   pnpm dlx shadcn@latest add ./registry/web/registry.json#button
   pnpm dlx shadcn@latest add <owner>/<repo>/registry/web/registry.json#button
   ```
2. **静态 HTTP 托管（P2）**：registry 产物与源文件发布到内部静态服务（或 GitHub Pages），配置 `components.json` 的 registries：
   ```bash
   pnpm dlx shadcn@latest add @kit/web-data-table
   ```
3. **私有 registry 服务（P6）**：带版本、检索与权限，随库版本发布。

## 5. AI 接入（MCP）

- **shadcn MCP Server**：让 AI 用自然语言检索 registry、查看 item 详情、安装组件；配置方法见 `08-ai-contract.md`；
- **Storybook MCP（web 栈）**：AI 查询组件真实 props/文档、生成 story、跑交互与无障碍测试；
- MCP 不可用时，AI 降级为直接读 `registry/<栈>/registry.json` + 组件 README，字段语义不变；
- 小程序原生端不被 Storybook MCP 覆盖的部分，以 registry item 的 `props/events/usage` 字段为准（因此这些字段对 mini/native 更要写全）。

## 6. Hub 消费

preview-hub 只读消费三份 registry.json + 映射表：
- 按 category 分组展示，卡片显示 title/status/三栈实现状态徽标；
- 点击进入详情：实时预览（web iframe / H5 手机框 / 小程序码 / 原生截图）、props 表、do/dont、代码与安装命令（一键复制）；
- 映射表驱动"同语义三栈对照"视图。

## 7. 校验与质量门

- `pnpm registry:validate` 在提交前与 CI 必跑；
- 任何组件 PR 缺登记、字段缺失、文件路径失效，质量门失败，禁止合入；
- registry schema 升级走 `09-quality-gate.md` 的契约变更流程（评审 + 版本号 + 校验脚本同步）。
