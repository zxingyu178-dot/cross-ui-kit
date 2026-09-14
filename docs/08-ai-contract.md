# 08 · AI 契约：让 AI 正确使用本库

目标：任何 AI 编码助手在任何会话中，都能**发现组件、理解用法、正确安装、按标准生成**，输出风格统一、可直接合入的代码。契约分四层：规则文件 → 机器清单（registry）→ MCP 实时工具 → 校验闭环。

## 1. 规则文件层（AI 进入仓库的第一入口）

| AI 工具 | 读取文件 | 本仓库做法 |
|---|---|---|
| Cursor / Windsurf / 通用 Agent | `AGENTS.md`（根） | 主文件，包含全部铁律与 SOP |
| Claude Code | `CLAUDE.md`（根） | 仅一行引用：`@AGENTS.md`（Claude 支持 @ 导入） |
| GitHub Copilot | `.github/copilot-instructions.md` | 仅一行引用：`@AGENTS.md`（或同步摘要 + 指向 AGENTS） |
| 包内局部规则 | 各 `packages/*/AGENTS.md`（按需） | 写栈特有约束（如小程序限制、RN 限制），不与根文件重复 |

规则文件维护原则：**只写稳定的约束与流程**（铁律、目录边界、SOP、检查清单），易变信息（组件清单、props 明细）交给 registry，避免规则文件膨胀过期。

## 2. 机器清单层（registry，AI 的"组件数据库"）

- 三份 `registry/<栈>/registry.json` + `component-mapping.json`，字段规范见 `06-registry.md`；
- AI 生成界面前的固定动作：① 读映射表确定 canonical 名 → ② 读对应栈 item 的 props/events/usage → ③ 按 example 生成 → ④ 缺组件则走新增 SOP；
- `usage.do / usage.dont / a11y / tokens / states` 字段是给 AI 的硬约束提示语，必须写实、可执行，不写空话。

## 3. MCP 工具层（实时检索与测试）

### 3.1 shadcn MCP（组件检索/安装，三栈）

- 能力：语义搜索 registry、查看 item 详情、安装组件到工程；
- 本地仓库模式（P0~P1 可用）：在消费工程的 `components.json` 配置本地/仓库 registry 地址：
  ```jsonc
  {
    "$schema": "https://ui.shadcn.com/schema.json",
    "registries": [
      { "name": "kit", "url": "https://<内部静态地址>/registry/web/registry.json" }
      // 未托管前用本地路径："./registry/web/registry.json"
    ]
  }
  ```
  安装：`pnpm dlx shadcn@latest add @kit/web-data-table`；
- MCP server 配置（各 AI 客户端 mcp 配置中加入，托管地址 P2 提供）：
  ```jsonc
  { "mcpServers": { "shadcn": { "command": "pnpm", "args": ["dlx", "shadcn@latest", "mcp"] } } }
  ```
- mini/native 栈：registry 格式通用，item 的 files 指向对应包源文件；小程序组件安装后由工程侧 alias 到 `@kit/ui-mini`。

### 3.2 Storybook MCP（web 栈组件理解 + 自测闭环）

- 能力：列出组件与文档、读取真实 props/类型、生成 story、运行交互与无障碍测试并回读失败；
- 启用：ui-web 的 Storybook 安装 `@storybook/addon-mcp`，dev server 暴露 `/mcp`；AI 客户端连接该地址；
- 工作闭环：AI 生成页面 → 自动写 story → 跑交互/a11y 测试 → 失败自我修正（详见 Storybook 官方 MCP 文档）。

### 3.3 降级策略

- MCP 不可用（离线/CI/未配置）：AI 直接读 `registry/*.json`、组件 README、`__examples__`；规则不变，禁止以"无法查询"为由自造组件。

## 4. AI 生成代码的标准动作（每次任务）

1. **读规则**：AGENTS.md + 涉及文档（组件→05，token→04，命名→03，交互→07）；
2. **定栈**：按目标端确定 web/mini/native，只引用对应 `ui-*` 包；
3. **查组件**：MCP/registry 查 canonical 组件，优先复用；
4. **组页面**：页面只做编排，数据用 core hooks（useRequest/useTable/useForm）；
5. **守视觉**：只用 token；枚举值（variant/size/status）按命名规范；
6. **补四态**：loading/empty/error/normal 与防重复提交；
7. **登记**：新增组件同步 registry + 映射表 + README + 示例；
8. **自检**：AGENTS.md §7 清单逐条核对，运行 `pnpm quality`；
9. **说明**：交付时列出新增/修改的组件、引用的 token、三栈对齐状态、遗留项。

## 5. 给 AI 的提示词模板（建议固化到团队提示库）

### 5.1 生成页面

```
使用 cross-ui-kit（先读 AGENTS.md）。目标端：<web|mini|native>；场景：<如 订单列表>。
要求：只使用 registry 中已登记组件；数据结构：<...>；字段：<...>；
必须包含四态、搜索栏、分页（小端为触底加载）；视觉只用 token；
完成后给出：组件清单、生成的文件、未找到而需要新增的组件（按 SOP-A 列计划，不要直接造）。
```

### 5.2 新增组件

```
按 docs/02 SOP-A 与 docs/05 组件标准，在 ui-<栈> 新增 <canonical 名>，
从 templates/component/<栈> 复制骨架；同步 component-mapping.json 与 registry item；
给出 props 设计（含注释与枚举）、四态方案、依赖的 token、a11y 方案。
```

### 5.3 代码审查

```
以 AGENTS.md 十条铁律与 §7 清单审查以下代码，逐条给结论（通过/违规位置/修改建议），
重点：是否自造组件、硬编码视觉值、逻辑未下沉 core、四态缺失、any/ts-ignore、命名与枚举。
```

## 6. 契约健康度维护（防止 AI"不会用"）

- 每新增/修改组件，registry item 与类型、README 必须同步（CI 校验，见 09）；
- P5 阶段定期做"盲测"：让 AI 在不看源码、只用 MCP/registry 的情况下生成指定页面，记录卡点 → 回填 item 描述/示例/规则；
- AI 反复用错的点，优先修 registry 的 `usage.dont` 与示例，而不是只在评审中口头纠正；
- 契约文件（AGENTS.md、registry schema、映射表 schema）变更按契约变更流程评审（09 文档 §5）。

## 7. 安全与边界

- AI 不得自行新增三方依赖、修改 token 命名、变更 registry schema、改动 core 公共 API 签名；这些只能提出、由人评审合入；
- AI 不得删除/重命名既有组件与 token；废弃走 02 文档 §6 流程；
- 涉及密钥、接口地址、权限逻辑，AI 只允许引用 `.env.example` 中的占位与 core 封装，禁止硬编码。
