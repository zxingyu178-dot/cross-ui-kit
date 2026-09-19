/**
 * ErrorPage 错误页模板（web）—— 404 / 500 / 无权限，统一用 Result。
 */
import { Button, Result, type ResultStatus } from '@kit/ui-web'

export interface ErrorPageProps {
  status?: ResultStatus
  title?: string
  description?: string
  onBack?: () => void
  onRetry?: () => void
}

export function ErrorPage({
  status = 'notFound',
  title,
  description,
  onBack,
  onRetry,
}: ErrorPageProps) {
  const preset =
    status === 'error'
      ? { title: '500', description: '服务器开小差了，请稍后重试', status: 'error' as ResultStatus }
      : status === 'warning'
        ? {
            title: '无权限',
            description: '您没有访问该页面的权限，请联系管理员',
            status: 'warning' as ResultStatus,
          }
        : {
            title: '404',
            description: '抱歉，您访问的页面不存在',
            status: 'notFound' as ResultStatus,
          }
  const finalTitle = title ?? preset.title
  const finalDesc = description ?? preset.description
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-secondary p-6">
      <Result
        status={preset.status}
        title={finalTitle}
        description={finalDesc}
        action={
          <div className="flex gap-3">
            {onBack ? (
              <Button variant="secondary" onClick={onBack}>
                返回首页
              </Button>
            ) : null}
            {onRetry ? (
              <Button variant="primary" onClick={onRetry}>
                重新加载
              </Button>
            ) : null}
          </div>
        }
      />
    </div>
  )
}
