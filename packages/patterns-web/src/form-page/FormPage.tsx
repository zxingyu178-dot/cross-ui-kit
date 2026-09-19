/**
 * FormPage 表单页模板（web）—— Form + FormItem + 多类型控件 + 提交/重置。
 */
import { useState } from 'react'
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  InputNumber,
  RadioGroup,
  Select,
  TextArea,
  Switch,
} from '@kit/ui-web'

export interface FormPageValues {
  name: string
  code: string
  count: number
  status: string
  type: string
  remark: string
  notify: boolean
}

export interface FormPageProps {
  title?: string
  initialValues?: Partial<FormPageValues>
  onSubmit?: (values: FormPageValues) => void
  onReset?: () => void
  loading?: boolean
}

export function FormPage({
  title = '新建表单',
  initialValues,
  onSubmit,
  onReset,
  loading = false,
}: FormPageProps) {
  const [form, setForm] = useState<FormPageValues>({
    name: initialValues?.name ?? '',
    code: initialValues?.code ?? '',
    count: initialValues?.count ?? 1,
    status: initialValues?.status ?? 'enabled',
    type: initialValues?.type ?? 'a',
    remark: initialValues?.remark ?? '',
    notify: initialValues?.notify ?? true,
  })

  const set = <K extends keyof FormPageValues>(key: K, value: FormPageValues[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-2xl">
        <h1 className="mb-6 text-titleMd font-medium text-text-primary">{title}</h1>
        <Form onFinish={() => onSubmit?.(form)}>
          <div className="flex flex-col gap-4">
            <FormItem label="名称" name="name" required>
              <Input value={form.name} onChange={(v) => set('name', v)} placeholder="请输入名称" />
            </FormItem>
            <FormItem label="编码" name="code">
              <Input value={form.code} onChange={(v) => set('code', v)} placeholder="请输入编码" />
            </FormItem>
            <FormItem label="数量" name="count">
              <InputNumber
                value={form.count}
                onChange={(v) => set('count', v ?? 0)}
                min={0}
                max={999}
              />
            </FormItem>
            <FormItem label="状态" name="status">
              <RadioGroup
                options={[
                  { label: '启用', value: 'enabled' },
                  { label: '停用', value: 'disabled' },
                ]}
                value={form.status}
                onValueChange={(v) => set('status', v)}
              />
            </FormItem>
            <FormItem label="类型" name="type">
              <Select
                value={form.type}
                onChange={(v) => set('type', v)}
                options={[
                  { label: '类型 A', value: 'a' },
                  { label: '类型 B', value: 'b' },
                ]}
              />
            </FormItem>
            <FormItem label="备注" name="remark">
              <TextArea
                value={form.remark}
                onChange={(v) => set('remark', v)}
                placeholder="请输入备注"
                rows={3}
              />
            </FormItem>
            <FormItem label="通知" name="notify">
              <Switch checked={form.notify} onCheckedChange={(v) => set('notify', v)} />
            </FormItem>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={onReset}>
                重置
              </Button>
              <Button type="submit" variant="primary" loading={loading}>
                提交
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  )
}
