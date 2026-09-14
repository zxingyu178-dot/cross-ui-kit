# 03 · 命名规范（全仓强制）

命名目标：**见名知义、三栈对齐、机器可检索**。本文件未覆盖的场景，优先沿用底座库（shadcn/NutUI/Tamagui）官方命名。

## 1. 包与作用域

- 所有库包使用 `@kit` scope：`@kit/tokens`、`@kit/core`、`@kit/icons`、`@kit/ui-web`、`@kit/ui-mini`、`@kit/ui-native`、`@kit/patterns-web` 等；
- 演示应用无 scope：`play-web`、`play-desktop`、`play-miniapp`、`play-native`；
- registry 命名空间与包对应：`@kit/web-*`、`@kit/mini-*`、`@kit/native-*`（见 06-registry.md）。

## 2. 文件与目录

| 对象 | 规则 | 示例 |
|---|---|---|
| 组件目录 | PascalCase，一组件一目录 | `packages/ui-web/src/DataTable/` |
| 组件文件 | PascalCase 与目录同名 | `DataTable.tsx`、`DataTable.types.ts` |
| 类型文件 | `<Name>.types.ts` | `Button.types.ts` |
| 导出桶文件 | 固定 `index.ts` | `DataTable/index.ts` |
| hooks 文件/目录 | camelCase，`useXxx` | `useTable.ts`、`hooks/useRequest.ts` |
| 工具函数 | camelCase，动词开头 | `formatDate.ts` |
| 页面模板目录 | kebab-case，场景名 | `patterns-mini/src/list-page/` |
| token 源文件 | kebab-case，分层命名 | `color-semantic.json`、`spacing-base.json` |
| 配置文件 | 社区惯例小写 | `turbo.json`、`sd.config.mjs` |
| 文档 | 两位数字序号 + kebab | `03-naming-convention.md` |
| 测试文件 | 紧邻被测文件，`.test.ts(x)` | `DataTable.test.tsx` |
| Story 文件 | `<Name>.stories.tsx` | `Button.stories.tsx` |
| 示例目录 | 固定 `__examples__/` | `DataTable/__examples__/Empty.tsx` |

## 3. 组件命名

- 组件名 PascalCase，优先使用**统一语义名（canonical name）**，三栈映射表登记为准；
- 基础组件使用底座命名（Button、Input、Dialog…），自研业务组件使用业务名词（`UserPicker`、`OrderStatusTag`、`FilePreview`）；
- 容器型组件用 `Container/Page/Panel/Card/Section` 后缀；列表项用 `Item/Row`；弹层用 `Dialog/Sheet/Popover/Drawer`；表单控件保持动词宾语结构（`DatePicker`、`CitySelector`）；
- 禁止缩写（除行业通用：`Nav`→`NavBar` 这类约定除外）、禁止前缀重复（如 `KitButton`，scope 已表达归属）。

## 4. Props / 事件 / 状态

### 4.1 通用约定

| 类别 | 规则 | 示例 |
|---|---|---|
| props | camelCase，名词/形容词 | `size`、`disabled`、`loading`、`emptyText` |
| 布尔 props | 肯定语气，不加 `is/has` 前缀（与 shadcn/Radix 一致） | `disabled`、`checked`、`bordered` |
| 事件回调 | `on` + 动词（过去式表已发生，动词表请求动作） | `onChange`、`onConfirm`、`onRefresh`、`onRetry` |
| 受控属性 | 值与回调成对：`value`+`onChange`；`open`+`onOpenChange` | 同左 |
| 渲染插槽 | `renderXxx` 或 `xxxSlot`（children 优先） | `renderEmpty`、`footer` |
| 样式透传 | 统一 `className`（web/mini-H5）、`style`；native 用 `style` props | — |
| 尺寸枚举 | 固定 `sm / md / lg`（必要时 `xs / xl`） | `size="md"` |
| 变体枚举 | 固定 `primary / secondary / ghost / danger / link` | `variant="primary"` |
| 状态枚举 | 固定 `default / success / warning / danger / info` | `status="success"` |
| 位置枚举 | 固定 `top / right / bottom / left` | `placement="bottom"` |

### 4.2 三栈事件名差异（封装层收敛）

- web：`onClick`；mini/native：`onPress`（native）或底座事件；
- **业务语义事件三栈统一**（如 `onSubmit`、`onRefresh`、`onRetry`、`onItemSelect`），底层差异在组件内部消化；
- 跨栈不一致处必须写入映射表 `sharedProps` 与组件 README。

## 5. Hooks

- 必须 `use` 开头，camelCase：`useRequest`、`useTable`、`useUpload`、`usePermission`；
- 返回对象使用固定键名：`data / loading / error / refresh / pagination`；
- 布尔返回 `isXxx`/`hasXxx`（hooks 内允许 is/has）：``isFetching`、`hasPermission`；
- 三栈通用 hooks 放 `@kit/core`；栈专有 hooks 放对应 `ui-*` 包内 `hooks/`。

## 6. 类型与枚举

- 类型/接口 PascalCase，组件 props 类型固定 `<Name>Props`，导出供调用方使用：`export interface DataTableProps<T> {}`；
- 联合枚举优先字面量联合（`type Size = 'sm' | 'md' | 'lg'`），不使用 TS enum（除非需要反向映射）；
- 事件类型显式：`onChange: (value: string) => void`，禁止 `Function`；
- 泛型组件保留泛型参数 `T`（表格/列表/选择器）。

## 7. Design Token 命名

详见 `04-design-tokens.md`，要点：

- 全小写、kebab-case、分层三段式：`<类别>-<语义>-<状态/层级>`；
- 例：`color-text-primary`、`color-bg-elevated`、`spacing-4`、`radius-md`、`font-size-body-md`、`motion-duration-fast`、`z-modal`；
- 禁止使用色值原名做语义层（不允许 `color-blue-500` 出现在组件，只能出现在 primitive 层）。

## 8. CSS / 类名

- web：Tailwind 工具类为主；自定义类用 `kit-<组件>-<元素>`（kebab），如 `.kit-data-table__row`；
- mini：rpx 单位 + token SCSS 变量；类名同上；
- native：Tamagui style props，不写裸样式对象；
- 禁止内联硬编码视觉值（`style={{ color: '#f00' }}` 一律打回）。

## 9. 路由与页面

- web/mini：路由路径 kebab-case：`/order/list`、`/user/profile`；
- native：Expo Router 文件路由，目录 kebab-case；
- 页面模板场景名三栈一致：`login-page`、`list-page`、`detail-page`、`form-page`、`settings-page`、`dashboard-page`、`result-page`、`empty-page`。

## 10. Git 分支与 Commit

- 分支：`<type>/<scope>-<kebab-desc>`，如 `feat/mini-search-bar`；
- commit：`<type>(<scope>): <subject>`，见 02 文档 §3。

## 11. i18n key

- 格式：`<模块>.<组件>.<元素>.<状态>`，全小写点分：`common.button.confirm`、`order.list.empty.title`；
- 组件内禁止硬编码中文/英文文案，统一走 i18n 函数；
- key 命名三栈一致（同一 canonical 组件共用 key 前缀）。

## 12. 命名审查检查点（评审必看）

- [ ] 组件名是否与映射表 canonical 一致；
- [ ] props/事件是否符合 §4 固定枚举与成对约定；
- [ ] 文件/目录大小写与后缀是否符合 §2；
- [ ] token 名是否三段式、组件中是否只引用语义层；
- [ ] i18n key、路由、页面目录是否三栈一致。
