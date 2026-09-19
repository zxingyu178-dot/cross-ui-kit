# InfiniteScroll 无限滚动（native）

滚动到底部自动加载更多。

## 用法

```tsx
import { InfiniteScroll } from '@kit/ui-native'
<InfiniteScroll onLoadMore={loadMore} hasMore={hasMore}>
  <List items={data} />
</InfiniteScroll>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 列表内容（必填） |
| onLoadMore | () => Promise<void>\\|void | — | 加载更多回调 |
| hasMore | boolean | true | 是否还有更多 |
| loadingText | string | '加载中...' | 加载中文案 |
| noMoreText | string | '没有更多了' | 没有更多文案 |
| threshold | number | 100 | 距底部触发距离 |
| style | ViewStyle | — | 外层容器样式 |
