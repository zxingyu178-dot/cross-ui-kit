# Breadcrumb 面包屑（web）

路径导航，展示当前页面在系统层级中的位置；最后一项为当前页。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{label:ReactNode;href?:string}[]` | 必填 | 路径项，最后一项为当前页 |
| separator | ReactNode | `'/'` | 分隔符 |
| onNavigate | `(index:number)=>void` | - | 点击中间项回调（可选）；有 href 渲染 `<a>` 并 preventDefault 后回调 |
| className | string | - | 透传 |

## 视觉

- 中间项：`text-text-secondary`，hover `text-primary-default`；
- 当前页：`text-text-tertiary` + `aria-current="page"`；
- 分隔符：`/`（可替换 `›` 等），`aria-hidden`。

## 可访问性

`nav aria-label="面包屑"` + 语义化 `ol/li`；无 href 但可点的项用 `role="button"` + Enter/Space 支持。

## 示例

`__examples__/States.tsx`：基础、自定义分隔符、点击中间项受控演示。

## Do / Don't

- Do：页面层级深时用面包屑，最后一项固定当前页。
- Don't：不在当前页放链接；不要硬编码文字颜色。
