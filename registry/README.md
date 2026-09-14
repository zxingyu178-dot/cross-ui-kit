# registry · 组件统一出口（机器可读）

三栈各一份 shadcn 规范的 registry.json，加一份三栈映射表。**任何组件入库必须登记**，规范见 [`docs/06-registry.md`](../docs/06-registry.md)。

## 文件

| 文件 | 命名空间 | 对应包 |
|---|---|---|
| `web/registry.json` | `@kit/web-*` | `packages/ui-web`（网页 + Tauri PC/移动） |
| `mini/registry.json` | `@kit/mini-*` | `packages/ui-mini`（小程序 + H5） |
| `native/registry.json` | `@kit/native-*` | `packages/ui-native`（iOS/Android 原生） |
| `component-mapping.json` | — | 三栈 canonical 语义名映射（唯一事实来源） |

## item 类型（type）

- `registry:component`：单个组件；
- `registry:block`：组件组合块（如"搜索栏 + 表格 + 分页"）；
- `registry:template`：页面模板（来自 `packages/patterns-*`，自定义类型，校验脚本放行）。

## 状态（status）

`planned`（已登记未实现）→ `beta`（可用待验证）→ `stable`（稳定）→ `deprecated`（废弃，必须标替代组件）。

## 校验

```bash
pnpm registry:validate   # 结构、必填字段、文件路径、映射一致性
```

## 安装（P1 落地，示例）

```bash
# 本地仓库模式
pnpm dlx shadcn@latest add ./registry/web/registry.json#button
# HTTP 托管后（P2）
pnpm dlx shadcn@latest add @kit/web-button
```
