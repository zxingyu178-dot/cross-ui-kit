# Layout 布局（web）

页面整体布局，含 Header/Sider/Content/Footer。

## 用法

```tsx
import { Layout } from '@kit/ui-web'
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

### Layout.Header
| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 子元素 |
| className | string | — | 类名 |

### Layout.Sider
| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 子元素 |
| width | number \| string | 200 | 侧边栏宽度 |
| className | string | — | 类名 |

### Layout.Content
| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 子元素 |
| className | string | — | 类名 |

### Layout.Footer
| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 子元素 |
| className | string | — | 类名 |
