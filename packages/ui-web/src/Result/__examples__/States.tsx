import type { ReactNode } from 'react'
import { Button } from '../../Button'
import { Result } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border-default bg-bg-page">
      <span className="border-b border-border-default px-4 py-2 text-caption text-text-tertiary">
        {label}
      </span>
      {children}
    </div>
  )
}

export function States() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card label="error · 加载失败（含重试，网络异常同此）">
        <Result
          status="error"
          title="加载失败"
          description="网络连接异常，请检查网络后重试。"
          action={<Button size="sm">重新加载</Button>}
          extra={
            <Button variant="ghost" size="sm">
              联系客服
            </Button>
          }
        />
      </Card>

      <Card label="success · 提交成功">
        <Result
          status="success"
          title="提交成功"
          description="工单已提交，可在「我的工单」查看处理进度。"
          action={<Button size="sm">查看工单</Button>}
        />
      </Card>

      <Card label="warning · 操作受限">
        <Result
          status="warning"
          title="操作受限"
          description="当前账号无权限执行该操作，请联系管理员开通。"
          action={
            <Button variant="secondary" size="sm">
              申请权限
            </Button>
          }
        />
      </Card>

      <Card label="info · 已是最新">
        <Result status="info" title="暂无更新" description="当前已是最新版本，无需更新。" />
      </Card>

      <Card label="notFound · 404 页面不存在">
        <Result
          status="notFound"
          title="页面不存在"
          description="你访问的页面已被移除，或地址有误。"
          action={
            <Button variant="secondary" size="sm">
              返回首页
            </Button>
          }
        />
      </Card>

      <Card label="自定义图标（icon slot 替换）">
        <Result
          icon={
            <div className="flex size-24 items-center justify-center rounded-full bg-primary-bg">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary-default"
              >
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
              </svg>
            </div>
          }
          title="服务维护中"
          description="系统正在升级维护，预计 30 分钟后恢复。"
          action={<Button size="sm">刷新重试</Button>}
        />
      </Card>
    </div>
  )
}
