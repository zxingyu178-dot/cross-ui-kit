# Breadcrumb 面包屑（mini：小程序 / 移动 H5）

路径导航，展示当前页面在系统层级中的位置；最后一项为当前页。样式在 `Breadcrumb.scss` 全 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{label:ReactNode;href?:string}[]` | 必填 | 路径项，最后一项为当前页 |
| separator | ReactNode | `'/'` | 分隔符 |
| onNavigate | `(index:number)=>void` | - | 点击中间项回调（可选） |
| className | string | - | 透传 |

## 视觉

- 中间项：`--kit-color-text-secondary`（可点加 cursor）；
- 当前页：`--kit-color-text-tertiary`；
- 分隔符：`/`（可替换 `›` 等），`aria-hidden`。

## 示例

`__examples__/States.tsx`：基础、自定义分隔符、点击中间项受控演示。

## Do / Don't

- Do：页面层级深时用面包屑，最后一项固定当前页。
- Don't：不在当前页放链接；跳转逻辑由壳工程处理，组件只回调 onNavigate。
