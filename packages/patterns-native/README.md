# @kit/patterns-native · 原生页面模板（iOS / Android）

场景与 `patterns-mini` 对齐（launch/login/home-feed/list/detail/form/search/profile/settings/result/error），差异：

- 导航：Expo Router 文件路由，栈导航 + Tab 导航；
- 长列表：FlashList + RefreshControl（下拉刷新）+ 触底加载；
- 弹层：BottomSheet；安全区：SafeArea 容器；
- 四态、提交锁、草稿、断网兜底规则同全库标准；
- 登记到 registry/native/registry.json（type: template）。
