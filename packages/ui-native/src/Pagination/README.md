# Pagination 分页（native：iOS / Android）

受控分页组件，页码列表由 `@kit/core` 的 `getPageList` 生成（含省略号），三栈共用同一套计算逻辑。颜色只引用 Tamagui token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| current | number | `1` | 当前页（1-based） |
| pageSize | number | `10` | 每页条数 |
| total | number | 必填 | 总条数 |
| onChange | `(page:number)=>void` | 必填 | 页码变化回调（受控） |
| showTotal | boolean | `true` | 显示"共 N 条" |
| size | `'sm'|'md'` | `'md'` | 按钮尺寸 |
| disabled | boolean | `false` | 整体禁用 |

## 视觉

- 当前页：`$primaryDefault` 实心 + `$primaryText` 白字 + font-medium；
- 非当前页：`$bgCard` + `$borderDefault` 1px 描边；
- 上一页/下一页：`‹` `›`，到边界自动 disabled（opacity .5）；
- 省略号：`…`，`$textTertiary`。

## 可访问性

可点按钮 `accessibilityRole=button` + `accessibilityLabel`，当前页 `accessibilityState.selected=true`。

## 示例

`__examples__/States.tsx`：基础受控、小尺寸、禁用态、少页无省略号。

## Do / Don't

- Do：受控使用（current + onChange），页码计算交给 core。
- Don't：不在视图手写页码/省略号逻辑；不硬编码按钮颜色。
