/**
 * SettingsAdvancedPage 高级设置页（web）—— 多分区 + 开关组 + 表单。
 */
import { useState } from 'react'
import { Card, Tabs, Switch, Button, Input, RadioGroup, Divider } from '@kit/ui-web'

export function SettingsAdvancedPage() {
  const [notif, setNotif] = useState(true)
  const [sound, setSound] = useState(false)
  const [private_, setPrivate] = useState(false)

  return (
    <Card className="mx-auto max-w-2xl">
      <h3 className="mb-4 text-titleSm font-medium text-text-primary">高级设置</h3>

      <Tabs
        items={[
          { value: 'account', label: '账号' },
          { value: 'notify', label: '通知' },
          { value: 'privacy', label: '隐私' },
          { value: 'about', label: '关于' },
        ]}
        defaultValue="notify"
      />

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-bodyMd text-text-primary">推送通知</p>
            <p className="text-bodySm text-text-secondary">接收系统消息和任务提醒</p>
          </div>
          <Switch checked={notif} onCheckedChange={setNotif} />
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-bodyMd text-text-primary">提示音</p>
            <p className="text-bodySm text-text-secondary">新消息到达时播放提示音</p>
          </div>
          <Switch checked={sound} onCheckedChange={setSound} />
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-bodyMd text-text-primary">私密账号</p>
            <p className="text-bodySm text-text-secondary">仅关注的人可以查看我的内容</p>
          </div>
          <Switch checked={private_} onCheckedChange={setPrivate} />
        </div>
        <Divider />
        <div>
          <p className="mb-2 text-bodyMd text-text-primary">默认首页</p>
          <RadioGroup
            options={[
              { label: '工作台', value: 'home' },
              { label: '项目列表', value: 'projects' },
              { label: '数据看板', value: 'dashboard' },
            ]}
            value="home"
          />
        </div>
        <Divider />
        <div>
          <p className="mb-2 text-bodyMd text-text-primary">绑定邮箱</p>
          <Input defaultValue="user@example.com" />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary">取消</Button>
          <Button variant="primary">保存修改</Button>
        </div>
      </div>
    </Card>
  )
}
