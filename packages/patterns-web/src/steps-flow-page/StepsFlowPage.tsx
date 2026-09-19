/**
 * StepsFlowPage 流程向导页（web）—— 多步骤表单 + 上一步/下一步。
 */
import { useState } from 'react'
import { Card, Button, Steps, Input, RadioGroup } from '@kit/ui-web'

export function StepsFlowPage() {
  const [current, setCurrent] = useState(0)

  return (
    <Card className="mx-auto max-w-2xl">
      <h3 className="mb-4 text-titleSm font-medium text-text-primary">创建项目向导</h3>
      <Steps
        items={[{ title: '基本信息' }, { title: '项目配置' }, { title: '确认提交' }]}
        current={current}
      />

      <div className="mt-6 flex flex-col gap-4">
        {current === 0 && (
          <div className="flex flex-col gap-3">
            <Input placeholder="项目名称" />
            <Input placeholder="项目描述" />
          </div>
        )}
        {current === 1 && (
          <div className="flex flex-col gap-3">
            <RadioGroup
              options={[
                { label: 'Web 应用', value: 'web' },
                { label: '移动端 App', value: 'app' },
                { label: '小程序', value: 'mini' },
              ]}
              value="web"
            />
            <Input placeholder="成员数量" />
          </div>
        )}
        {current === 2 && (
          <div className="rounded-lg bg-bg-secondary p-4 text-bodyMd text-text-primary">
            <p>请确认以上信息无误，点击完成提交项目创建。</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
        >
          上一步
        </Button>
        {current < 2 ? (
          <Button variant="primary" onClick={() => setCurrent((c) => Math.min(2, c + 1))}>
            下一步
          </Button>
        ) : (
          <Button variant="primary">完成提交</Button>
        )}
      </div>
    </Card>
  )
}
