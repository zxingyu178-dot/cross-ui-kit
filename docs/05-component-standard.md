# 05 · 组件开发标准

适用于 `ui-web` / `ui-mini` / `ui-native` 三个包中的**所有组件**（底座二次封装与自研组件同等约束）。

## 1. 组件目录结构（一组件一目录，从 templates 复制）

### web（ui-web）

```
src/DataTable/
├─ DataTable.tsx            # 实现（函数组件 + 泛型）
├─ DataTable.types.ts       # Props/类型，必须 export
├─ DataTable.stories.tsx    # Storybook：normal/loading/empty/error/边界值
├─ index.ts                 # 导出组件与类型
├─ README.md                # 用途/props 表/事件表/示例/与底座关系/注意事项
└─ __examples__/            # 组合用法示例（每个示例可被 hub 收录）
```

### mini（ui-mini）

```
src/DataList/
├─ DataList.tsx             # Taro + NutUI 封装
├─ DataList.types.ts
├─ index.ts
├─ README.md
└─ __examples__/            # 示例页（同时用于 H5 与小程序演示）
```

### native（ui-native）

```
src/DataList/
├─ DataList.tsx             # Tamagui/RN 实现
├─ DataList.types.ts
├─ index.ts
├─ README.md
└─ __examples__/
```

## 2. Props 设计规则

1. 必须定义并导出 `<Name>Props`；每个 prop 有 JSDoc 注释（说明用途、默认值、枚举含义），registry 与 hub 直接消费这些注释。
2. 命名遵循 `03-naming-convention.md` §4：布尔用肯定语气、事件 `onXxx`、受控成对（`value/onChange`、`open/onOpenChange`）。
3. 枚举值使用固定集合：`variant: primary|secondary|ghost|danger|link`、`size: sm|md|lg`、`status: default|success|warning|danger|info`。
4. 默认值在解构处显式声明；必填与可选边界清晰；不允许"万能 props"（`record: any`、`...rest` 透传需在类型中白名单列出）。
5. 组合优先：可由子组件/插槽组合实现的，不做巨型 props；提供 `renderXxx` / children 组合点。
6. 泛型组件（表格/列表/选择器）保留泛型并给出最小约束（`<T extends { id?: IdType }>` 之类按实际）。
7. 三栈同语义组件的核心 props 必须与 `component-mapping.json` 的 `sharedProps` 一致。

## 3. 受控与非受控

- 表单、弹层、选中类组件**默认受控**，同时提供非受控便捷用法（`defaultValue`/`defaultOpen`，内部用封装的 `useControllable` hook）；
- 受控回调必须在值真实变化后触发，避免渲染期回调；
- 提交类按钮：`loading` 期间自动 `disabled`，防止重复提交（封装层统一实现）。

## 4. 四态与边界（数据组件强制）

| 状态 | 要求 |
|---|---|
| loading | 优先骨架屏（Skeleton 尺寸与真实布局一致），其次 Spinner；超过 300ms 才显示（由 core 的 useRequest 控制） |
| empty | Empty 组件：插画/图标 + 标题 + 说明 + 行动按钮（如"重新加载/去创建"），文案走 i18n |
| error | ErrorState：错误说明 + 重试按钮（`onRetry`）；网络错误区分断网态 |
| normal | 正常数据，含**超长文本**（省略号/换行策略）、**极值**（0、超大数、负数）、**超多节点**（配合虚拟列表） |

## 5. 视觉与样式

- 所有视觉值引用 token（见 04 文档），禁止硬编码；
- web：Tailwind 类 + `cn()`（clsx + tailwind-merge）合并类名，支持 `className` 透传；
- mini：SCSS + token 变量，根类名 `kit-<kebab-name>`；rpx 适配；
- native：Tamagui styled/style props，token 化；
- 必须实现暗色（随 token 暗色映射自动生效的，验证；组件内写死的颜色一律不允许）。

## 6. 交互与反馈（与 07-interaction-spec.md 配套）

- 操作必须有反馈：点击态（hover/active/pressed）、提交 loading、结果 Toast；
- 危险操作二次确认（Popconfirm/Dialog）；
- 小端：触控热区 ≥44px、列表下拉刷新/触底加载、页面级 NavBar 返回；
- 大端：键盘可达（Tab 序、Enter/Esc、焦点陷阱交给 Radix）、批量操作提供快捷键提示；
- 动效时长/缓动只用 motion token；尊重系统"减少动态效果"设置（native/web 各有 API）。

## 7. 无障碍（a11y）

- web：以 Radix 行为底座，保证 WAI-ARIA 角色、aria-label/aria-describedby、焦点管理、对比度 AA；图标按钮必须有 aria-label 或 tooltip；
- mini：遵循小程序无障碍标签（aria-* 属性），关键控件提供可读标签；
- native：accessibilityLabel / accessibilityRole / accessibilityHint 齐全；
- 表单错误与控件用 describedby/对应机制关联。

## 8. 国际化与文案

- 组件内不写死任何自然语言文案；提供 i18n key 或 props 注入（`confirmText` 等有默认 key，可被 props 覆盖）；
- 数字、日期、货币展示走 core 的格式化工具（dayjs/Intl）；
- 三栈同一 canonical 组件共用 key 前缀。

## 9. 类型与代码质量

- `strict` 全开；禁止 `any`（用 `unknown` + 守卫）；禁止 `@ts-ignore`（用 `@ts-expect-error` + 注释）；
- 类型导入使用 `import type`（ESLint 强制）；
- 组件不直接发请求、不直接读写存储、不耦合业务接口（业务数据由父级/core hooks 注入）；
- 不允许 `console.log`（warn/error 可保留在异常分支）。

## 10. 底座封装规则（吸收 shadcn/NutUI/Tamagui 的方式）

- shadcn/ui：通过 CLI 拉源码进 `ui-web/src`（作为底座实现），外层再包一层统一 API（统一 props 命名、token、四态），**不直接把 shadcn 原始 API 暴露给业务**；
- NutUI-React：作为依赖安装，在 `ui-mini` 内做包装组件，统一 props/事件命名并覆盖主题 token；
- Tamagui：在 `ui-native` 内用 Tamagui styled 封装，主题来自 tokens 产物；
- 底座升级：记录底座版本与封装差异（写在组件 README "与底座关系"小节），升级时逐组件回归。

## 11. 测试要求

- 纯逻辑/ hooks：单元测试（vitest），覆盖核心分支与边界；
- 组件：web 用 Storybook 交互测试 + 无障碍检查（Storybook MCP 可辅助生成）；关键交互补 testing-library 用例；
- mini/native：至少提供覆盖四态的示例页，纳入人工/截图回归清单；
- 验收前测试必须通过（`pnpm test`）。

## 12. 组件完成定义（DoD）

- [ ] 目录结构完整（实现/类型/导出/README/示例/story 或演示页）；
- [ ] props 注释齐全、枚举统一、受控规范；
- [ ] 四态 + 边界值示例齐全；
- [ ] 视觉全部 token 化、暗色验证通过；
- [ ] a11y、i18n、热区（小端）到位；
- [ ] registry item 与映射表登记完成；
- [ ] play 演示与 hub 收录；
- [ ] lint/typecheck/test/format 全绿。
