# @kit/tokens · Design Token 唯一源

一份 JSON 源（DTCG 格式），用 Style Dictionary v4 导出三栈变量。**全库视觉值只允许从这里来**，规范见 [`docs/04-design-tokens.md`](../../docs/04-design-tokens.md)。

## 命令

```bash
pnpm tokens:build    # 构建全部产物到 dist/
pnpm tokens:watch    # 监听源文件变更并重建
```

## 源文件（src/tokens/）

| 文件 | 内容 |
|---|---|
| `color-primitive.json` | 基础色板（gray/brand/success/warning/danger/info），组件**禁止直接引用** |
| `color-semantic-light.json` | 亮色语义色（text/bg/border/primary/状态色/图表色），组件引用层 |
| `color-semantic-dark.json` | 暗色语义映射（同名 token，暗色值） |
| `spacing.json` | 4px 基数间距 |
| `radius.json` | 圆角 |
| `typography.json` | 字号/字重/行高/字体族 |
| `shadow.json` | 层级阴影 |
| `motion.json` | 动效时长与缓动 |
| `z-index.json` | 浮层层级 |
| `breakpoint.json` | 大端响应式断点 |
| `size.json` | 控件高度、触控热区、图标尺寸、布局尺寸 |

## 产物（dist/，自动生成不入库）

| 产物 | 消费栈 | 用法 |
|---|---|---|
| `web/tokens.light.css` / `tokens.dark.css` | web（含 Tauri） | 根节点引入 light；暗色在 `<html class="dark">` 生效；Tailwind `@theme` 映射这些 CSS 变量 |
| `mini/tokens.light.scss` / `tokens.dark.scss` | mini（小程序/H5） | SCSS 变量；配合 NutUI 主题变量覆盖 |
| `mini/tokens.light.ts` / `tokens.dark.ts` | mini | TS 常量（JS 逻辑里需要取视觉值时） |
| `native/tamagui.light.ts` / `tamagui.dark.ts` | native | 并入 `tamagui.config.ts` 的 themes |
| `docs/tokens-table.md` | hub / 文档 | token 清单表 |

## 新增 token（SOP-C）

1. 优先复用语义层；确需新增，先补 primitive（若缺）再补 semantic，**明暗两套都要补**；
2. 命名遵循三段式 `<类别>-<语义>-<状态>`，见 04 文档 §3；
3. `pnpm tokens:build`，检查三栈产物与 `docs/tokens-table.md`；
4. commit type 用 `token`，PR 说明影响面。

## P0 验收动作

修改 `color-semantic-light.json` 中 `color.primary.default` 的值 → `pnpm tokens:build` → 三栈产物（css/scss/ts/tamagui）中的主色同步变化。
