# 页面模板脚手架（SOP-B 起点）

新增页面模板时，把对应栈的骨架复制到 `packages/patterns-<栈>/src/<scene-page>/`，场景目录名三栈一致。

| 栈 | 骨架文件 |
|---|---|
| web | `web/page.tsx.template` |
| mini | `mini/page.tsx.template` |
| native | `native/page.tsx.template` |

## 固定场景目录名（三栈一致）

`login-page`、`dashboard-page`、`list-page`、`detail-page`、`form-page`、`settings-page`、`profile-page`、`search-page`、`result-page`、`error-page`；小端/原生另有 `launch-page`、`home-feed`。

## 硬性规则

1. 页面只编排 registry 已登记组件；缺组件先走 SOP-A，不内联造组件；
2. 数据一律 core hooks（useRequest/useTable/useForm），页面不出现 fetch；
3. 四态（loading/empty/error/normal）+ 空数据 + 超长文本 + 极值示例；
4. 完成后在 `registry/<栈>/registry.json` 以 `registry:template` 登记，hub 收录；
5. 三栈场景互相链接（README 中注明对应其他栈目录）。
