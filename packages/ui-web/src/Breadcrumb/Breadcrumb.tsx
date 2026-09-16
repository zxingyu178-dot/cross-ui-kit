/**
 * Breadcrumb 面包屑（web）—— 路径导航，最后一项为当前页（aria-current=page）。
 * 中间项有 href 渲染 <a>；onNavigate 存在时点击 preventDefault 并回调（不真实跳转）。
 */
import type { BreadcrumbProps } from './Breadcrumb.types'

export function Breadcrumb({
  items,
  separator = '/',
  onNavigate,
  className = '',
}: BreadcrumbProps) {
  return (
    <nav aria-label="面包屑" className={className}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-body-sm text-text-tertiary">
                  {item.label}
                </span>
              ) : item.href !== undefined ? (
                <a
                  href={item.href}
                  onClick={
                    onNavigate !== undefined
                      ? (e) => {
                          e.preventDefault()
                          onNavigate(i)
                        }
                      : undefined
                  }
                  className="text-body-sm text-text-secondary transition-colors duration-150 hover:text-primary-default"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  role={onNavigate !== undefined ? 'button' : undefined}
                  tabIndex={onNavigate !== undefined ? 0 : undefined}
                  onClick={onNavigate !== undefined ? () => onNavigate(i) : undefined}
                  onKeyDown={
                    onNavigate !== undefined
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            onNavigate(i)
                          }
                        }
                      : undefined
                  }
                  className="text-body-sm text-text-secondary transition-colors duration-150 hover:text-primary-default"
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-caption text-text-tertiary" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
