/**
 * SettingsPage 设置页模板（web）—— 分组卡片 + Tabs + Switch + Cell。
 */
import { useState } from 'react'
import { Card, Tabs, Switch, Cell, Divider, Avatar, Button } from '@kit/ui-web'

export interface SettingsPageProps {
  userName?: string
  onSave?: () => void
}

export function SettingsPage({ userName = '赵星宇', onSave }: SettingsPageProps) {
  const [notify, setNotify] = useState(true)
  const [sound, setSound] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [autoSync, setAutoSync] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(true)

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* 个人信息头 */}
      <Card className="mb-5">
        <div className="flex items-center gap-4">
          <Avatar name={userName} size="lg" />
          <div className="flex-1">
            <h1 className="text-titleMd font-medium text-text-primary">{userName}</h1>
            <p className="text-bodySm text-text-secondary">admin@example.com</p>
          </div>
          <Button variant="secondary" size="sm">
            编辑资料
          </Button>
        </div>
      </Card>

      <Tabs
        defaultValue="account"
        items={[
          {
            value: 'account',
            label: '账号',
            content: (
              <Card>
                <Cell title="用户名" description="用于登录的唯一名称" right={userName} clickable />
                <Divider />
                <Cell title="手机号" description="138****8888" right="更换" clickable />
                <Divider />
                <Cell title="修改密码" description="建议每 90 天更换一次" right="前往" clickable />
              </Card>
            ),
          },
          {
            value: 'notify',
            label: '通知',
            content: (
              <Card>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-bodyMd text-text-primary">推送通知</p>
                    <p className="text-bodySm text-text-secondary">接收订单与系统消息</p>
                  </div>
                  <Switch checked={notify} onCheckedChange={setNotify} />
                </div>
                <Divider />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-bodyMd text-text-primary">提示音</p>
                    <p className="text-bodySm text-text-secondary">新消息时播放声音</p>
                  </div>
                  <Switch checked={sound} onCheckedChange={setSound} />
                </div>
                <Divider />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-bodyMd text-text-primary">每周报告</p>
                    <p className="text-bodySm text-text-secondary">每周一发送数据周报</p>
                  </div>
                  <Switch checked={weeklyReport} onCheckedChange={setWeeklyReport} />
                </div>
              </Card>
            ),
          },
          {
            value: 'preference',
            label: '偏好',
            content: (
              <Card>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-bodyMd text-text-primary">深色模式</p>
                    <p className="text-bodySm text-text-secondary">跟随系统或手动切换</p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <Divider />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-bodyMd text-text-primary">自动同步</p>
                    <p className="text-bodySm text-text-secondary">Wi-Fi 下自动同步数据</p>
                  </div>
                  <Switch checked={autoSync} onCheckedChange={setAutoSync} />
                </div>
              </Card>
            ),
          },
        ]}
      />

      <div className="mt-6 flex justify-end">
        <Button variant="primary" onClick={onSave}>
          保存修改
        </Button>
      </div>
    </div>
  )
}
