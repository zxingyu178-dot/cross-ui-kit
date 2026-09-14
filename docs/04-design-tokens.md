# 04 · Design Token 规范

Token 是全库视觉的**唯一事实来源**。任何组件、页面、应用里出现的视觉值必须来自 token 产物；新增视觉值必须先在本包新增 token 并重新构建（SOP-C，见 02 文档 §7）。

## 1. 工具与产物

- 工具：Style Dictionary v4（`packages/tokens/sd.config.mjs`）；
- 源：`packages/tokens/src/tokens/*.json`（DTCG 风格，`$value` / `$type`）；
- 命令：`pnpm tokens:build`（一次性）/ `pnpm tokens:watch`（监听）；
- 产物（`packages/tokens/dist/`，不入库）：

| 产物路径 | 消费栈 | 形态 |
|---|---|---|
| `web/tokens.css` | web（含 Tauri） | CSS Custom Properties（`:root` + `.dark`）+ Tailwind `@theme` 映射文件 |
| `mini/tokens.scss` + `mini/tokens.ts` | mini（小程序/H5） | SCSS 变量 + TS 常量；并生成 NutUI CSS 变量覆盖文件 `mini/nutui-theme.scss` |
| `native/tamagui.tokens.ts` | native（Tamagui） | 并入 `tamagui.config.ts` 的 tokens 片段 |
| `docs/tokens-table.md` | 文档/hub | 自动生成 token 清单表，供预览站展示 |

## 2. 三层模型（primitive → semantic → component）

1. **Primitive（基础层）**：原始色板、字号、间距数值，**组件禁止直接引用**。
   - 例：`color-blue-500: #1A73E8`、`spacing-base: 4px`、`font-size-1: 12px`
2. **Semantic（语义层）**：带用途命名，**组件只能引用这一层**。
   - 例：`color-text-primary`、`color-bg-elevated`、`color-border-default`、`color-primary-default`
3. **Component（组件层，可选）**：仅当语义层无法表达的组件专属值（如表格表头背景），命名 `color-<component>-<元素>-<状态>`，例：`color-table-header-bg`。

> 暗色模式只切换 semantic 层到 primitive 的映射，组件代码零改动。

## 3. 分类与命名（三段式 `<类别>-<语义>-<状态/层级>`）

| 类别前缀 | 内容 | 示例 |
|---|---|---|
| `color-*` | 文字、背景、边框、品牌、状态色 | `color-text-secondary`、`color-bg-page`、`color-danger-default` |
| `font-size-*` / `font-weight-*` / `line-height-*` / `font-family-*` | 字体系统 | `font-size-body-md`、`font-weight-semibold` |
| `spacing-*` | 间距（4px 基数，倍数编号） | `spacing-2`(8px)、`spacing-4`(16px) |
| `radius-*` | 圆角 | `radius-sm`(4)、`radius-md`(8)、`radius-lg`(12)、`radius-full` |
| `shadow-*` | 层级阴影 | `shadow-card`、`shadow-modal` |
| `motion-duration-*` / `motion-easing-*` | 动效 | `motion-duration-fast`(150ms)、`motion-easing-standard` |
| `z-*` | 层级 | `z-dropdown`、`z-sticky`、`z-modal`、`z-toast` |
| `breakpoint-*` | 响应式断点（大端） | `breakpoint-sm/md/lg/xl/2xl` |
| `size-*` | 控件标准尺寸 | `size-control-h-sm/md/lg`、`size-touch-min`(44px，小端热区) |
| `opacity-*` | 标准透明度 | `opacity-disabled`、`opacity-overlay` |

状态后缀统一：`default / hover / active / disabled / focus / selected / error / success / warning`。

## 4. 颜色语义约定（必须遵守的语义骨架）

- 文字：`color-text-primary / secondary / tertiary / disabled / inverse / link / danger`
- 背景：`color-bg-page / card / elevated / mask / inverse`
- 边框：`color-border-default / strong / focus / danger`
- 品牌：`color-primary-default / hover / active / disabled / bg / bg-hover`
- 状态：`color-success / warning / danger / info`（各带 `-default/-bg/-border`）
- 暗色：每个语义色在 `color-semantic-dark.json` 给出暗色映射，对比度满足 WCAG AA（正文 4.5:1）。
- **暗色实心填充阶梯（P1 实测修正）**：暗色主题下，实心按钮的 `*-default / hover / active` 底色保持与亮色一致的 600 / 500 / 700 色阶（配白字对比度达标），**不要**用 300/400 浅阶做底色（白字压浅底对比不足，如 danger.400 #f87171 上白字仅约 2.4:1）；300/400 浅阶在暗色下只用于文字、链接、边框、图表与浅底场景（`text-link=brand.400`、`text-danger=danger.400`、`chart-*`）。
- **禁用文字色**：`color-text-disabled` 两端统一取 gray.500（亮底/暗底均可辨）；暗色 `primary-disabled` 底色取 gray.800。

## 5. 数值与步进标准

- 间距基数 4px，只允许 4 的倍数（特殊 1px 分割线走 `hairline` token）；
- 字号阶梯：12/13/14/16/18/20/24/30/36，语义命名（caption/body-md/title-md 等），不允许中间值；
- 圆角：4/8/12/16/full；
- 动效时长：fast 150ms / base 250ms / slow 400ms；缓动：standard / decelerate / accelerate；
- 小端触控热区最小 `size-touch-min = 44px`。

## 6. 三栈消费规则

- **web**：优先 Tailwind 语义类（`@theme` 映射到 CSS 变量），复杂场景用 `var(--color-xxx)`；禁止 Tailwind 调色板原色类（`bg-blue-500`）直接出现在业务组件。
- **mini**：SCSS 变量（`$color-text-primary`）+ NutUI 主题变量覆盖；rpx 换算由样式插件处理，间距 token 同时输出 px/rpx 两套。
- **native**：Tamagui config 引用（`$color.textPrimary` 风格，以生成文件为准），禁止写裸颜色。
- 图标多色、图表色板同样以 token 形式提供（`color-chart-1..8`）。

## 7. 新增/变更 Token 流程（SOP-C）

1. 判断层级：优先复用语义层；确需新增，先加 primitive（若缺色板值）再加 semantic；
2. 编辑对应 JSON，保持 `$type` 正确（color/dimension/fontWeight…），补暗色映射；
3. `pnpm tokens:build`，检查三栈产物 diff 与 `docs/tokens-table.md`；
4. 在组件中引用新 token；
5. commit 用 `token(scope): ...`，PR 说明影响面（哪些组件/端）；
6. 删除/重命名 token 视为破坏性变更，保留一个版本的别名并标注废弃。

## 8. 验收标准

- [ ] 全仓搜索不到裸色值（`#xxxxxx`、`rgb(`）与裸间距数值（组件层）；
- [ ] 改一个语义色源值，三栈产物同步变化（P0 验收动作）；
- [ ] 暗色切换无硬编码白底/黑字；
- [ ] 新 token 有暗色映射、出现在 tokens-table 文档、命名符合三段式。
