/**
 * PageHeader 页头（web）—— 页面顶部的标题、副标题、面包屑和额外操作。
 */
import { cn } from '@kit/core'
import type { PageHeaderProps } from './PageHeader.types'

export function PageHeader({
  title,
  subTitle,
  breadcrumb,
  extra,
  footer,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {breadcrumb ? <div className="text-caption text-text-tertiary">{breadcrumb}</div> : null}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-title-md font-semibold text-text-primary">{title}</h1>
          {subTitle ? <p className="text-bodySm text-text-secondary">{subTitle}</p> : null}
        </div>
        {extra ? <div className="flex shrink-0 items-center gap-2">{extra}</div> : null}
      </div>
      {footer ? <div className="mt-1 border-t border-border-default pt-3">{footer}</div> : null}
    </div>
  )
}
