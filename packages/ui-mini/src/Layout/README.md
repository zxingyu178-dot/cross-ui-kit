# Layout 布局（mini）

页面整体布局，含 Header/Sider/Content/Footer。

## 用法

```tsx
import { Layout } from '@kit/ui-mini'
const { Header, Sider, Content, Footer } = Layout

<Layout>
  <Header>顶部导航</Header>
  <Layout direction="horizontal">
    <Sider width={200}>侧边栏</Sider>
    <Content>主内容区</Content>
  </Layout>
  <Footer>底部信息</Footer>
</Layout>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| direction | 'horizontal' \| 'vertical' | 'vertical' | 布局方向 |
| children | ReactNode | — | 子元素 |
| className | string | — | 外层容器类名 |
