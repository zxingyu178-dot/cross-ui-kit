# Button 按钮（native：iOS / Android）

Tamagui 封装的按钮，视觉值全部引用 Tamagui token（由 `@kit/tokens` 的 `dist/native/tamagui.*.ts` 并入 `tamagui.config.ts`）。

## Props / 事件

| 属性/事件 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | `primary\|secondary\|ghost\|danger\|link` | `primary` | 与 web/mini 同枚举 |
| size | `sm\|md\|lg` | `md` | 高度 `$controlSm/Md/Lg`，最小热区 `$touchMin`(44px) |
| loading | `boolean` | `false` | 显示 ActivityIndicator、禁用交互、`accessibilityState.busy` |
| disabled | `boolean` | `false` | 透明度 0.5、禁用交互 |
| block | `boolean` | `false` | width 100% |
| icon | `ReactNode` | — | 前置图标（loading 时替换为指示器） |
| accessibilityLabel | `string` | — | 无障碍标签，图标按钮必填 |
| onPress | `StackProps['onPress']` | — | 按压事件（web/mini 对应 onClick） |

## tamagui.config 必须注册的 token（来自 @kit/tokens native 产物）

- color 组：`primaryDefault / primaryActive / primaryText / dangerDefault / dangerHover / textPrimary / textLink / bgCard / bgHover / borderDefault / white`
- radius 组：`md`
- size 组：`controlSm / controlMd / controlLg / touchMin`
- space 组：`2 / 3 / 4 / 6`（spacing 产物，4px 基数）
- font 组：`bodySm / bodyMd / bodyLg / medium`（字重）

> 接入步骤见 apps/play-native/README.md：把 lightTokens/darkTokens 按分组合并进 `createTamagui({ themes, tokens })`。

## 设计与交互要点

- 按压反馈统一用 `pressStyle`；动效时长取 motion token（Tamagui animations 配置）；
- 字符串 children 自动包 `Text` 并应用变体文字色；自定义节点 children 直接渲染；
- 暗色随 Tamagui theme（light/dark tokens）切换，组件无感知；
- 热区 minHeight 44px；列表/弹层场景分别用 FlashList / BottomSheet。
