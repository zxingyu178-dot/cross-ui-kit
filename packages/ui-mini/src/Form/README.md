# Form 表单（mini）

View+Text 自建，表单容器 + Form.Item，提供布局、校验、提交功能。

## 用法

```tsx
import { Form, Input, Button } from '@kit/ui-mini'

<Form layout="vertical" initialValues={{ username: '' }} onFinish={(values) => console.log(values)}>
  <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
    <Input placeholder="请输入用户名" />
  </Form.Item>
  <Form.Item>
    <Button>提交</Button>
  </Form.Item>
</Form>
```

## Props

### Form

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| layout | 'horizontal'\|'vertical'\|'inline' | 'vertical' | 布局方式 |
| initialValues | Record<string, unknown> | {} | 初始值 |
| onFinish | (values) => void | — | 提交成功回调 |
| onFinishFailed | (errors) => void | — | 提交失败回调 |
| labelWidth | number | 100 | 标签宽度（px） |
| className | string | — | 外层容器类名 |

### Form.Item

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| label | string | — | 标签 |
| name | string | — | 字段名 |
| rules | FormRule[] | [] | 校验规则 |
| required | boolean | false | 是否必填（显示星号） |
| labelWidth | number | — | 标签宽度（px） |
| className | string | — | 外层容器类名 |
