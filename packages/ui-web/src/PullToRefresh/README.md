# PullToRefresh 下拉刷新（web）

下拉超过阈值触发 onRefresh，支持自定义文案。

## 用法

```tsx
import { PullToRefresh } from '@kit/ui-web'
<PullToRefresh onRefresh={async () => await fetchData()}>
  <List items={data} />
</PullToRefresh>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 列表内容（必填） |
| onRefresh | () => Promise<void>\\|void | — | 刷新回调 |
| refreshing | boolean | false | 受控刷新中 |
| pullText | string | '下拉刷新' | 下拉中文案 |
| releaseText | string | '释放立即刷新' | 超过阈值文案 |
| loadingText | string | '加载中...' | 加载中文案 |
| doneText | string | '刷新成功' | 完成文案 |
| className | string | — | 外层容器类名 |
