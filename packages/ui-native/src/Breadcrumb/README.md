# Breadcrumb 面包屑（native：iOS / Android）

路径导航，展示当前页面在系统层级中的位置；最后一项为当前页。颜色只引用 Tamagui token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{label:ReactNode;href?:string}[]` | 必填 | 路径项，最后一项为当前页 |
| separator | ReactNode | `'/'` | 分隔符 |
| onNavigate | `(index:number)=>void` | - | 点击中间项回调（可选） |

## 视觉

- 中间项：`$textSecondary`；可点时包 `accessibilityRole="link"`；
- 当前页：`$textTertiary`；
- 分隔符：`/`（可替换 `›` 等），`$textTertiary`。

## 示例

`__examples__/States.tsx`：基础、自定义分隔符、点击中间项受控演示。

## Do / Don't

- Do：页面层级深时用面包屑，最后一项固定当前页。
- Don't：不在当前页放链接；跳转逻辑由壳工程处理，组件只回调 onNavigate。
